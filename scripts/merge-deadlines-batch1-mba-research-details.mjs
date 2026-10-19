#!/usr/bin/env node
/** Merge deadlines batch1 MBA overlays onto current research-details (deadline fields win; tuition preserved). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { rankedSchools } from '../dist/catalog.js';

const batch1Ids = [
  'stanford-mba',
  'penn-mba',
  'chicago-mba',
  'northwestern-mba',
  'harvard-mba',
  'mit-mba',
  'columbia-mba',
  'nyu-mba',
  'dartmouth-mba',
  'berkeley-mba',
];
const deadlineKeys = ['deadline', 'deadlineDate'];
const tuitionKeys = ['tuition', 'tuitionLabel', 'period', 'costNote', 'costDetail'];
const catalogAcademic = Object.fromEntries(rankedSchools.map((r) => [r.id, r.academic]));

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const batchPath =
  process.argv[2] || path.join(root, 'path/deadlines/deadlines-batch1-mba.research-details.patch.js');
const targetPath = path.join(root, 'dist/research-details.js');
const batchAsOf = '2026-10-20';

async function loadMainDetails(filePath) {
  const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
  const mod = await import(pathToFileURL(resolved).href);
  return mod.researchDetails;
}

async function loadBatch(filePath) {
  const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
  const mod = await import(pathToFileURL(resolved).href);
  return mod.deadlinesBatch1Mba;
}

const main = await loadMainDetails(targetPath);
const batch = await loadBatch(batchPath);
const out = { ...main };

for (const id of batch1Ids) {
  const b = batch[id];
  const m = main[id] || {};
  if (!b) throw new Error(`deadlines batch1 MBA missing ${id}`);
  out[id] = { ...m, ...b };
  for (const k of tuitionKeys) {
    if (m[k] !== undefined) out[id][k] = m[k];
  }
  for (const k of deadlineKeys) {
    if (Object.prototype.hasOwnProperty.call(b, k)) out[id][k] = b[k];
  }
  if (b.academic) {
    const base = m.academic || catalogAcademic[id];
    out[id].academic = base ? `${base} ${b.academic}` : b.academic;
  }
  const sources = [...(m.sources || []), ...(b.sources || [])];
  out[id].sources = [...new Map(sources.map((s) => [s[1], s])).values()];
  out[id].asOf = batchAsOf;
}

function serialize(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  if (obj === null) return 'null';
  if (typeof obj === 'string') return `'${obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (Array.isArray(obj)) {
    if (!obj.length) return '[]';
    if (Array.isArray(obj[0])) {
      return `[\n${obj.map((pair) => `${pad1}['${pair[0].replace(/'/g, "\\'")}', '${pair[1]}'],`).join('\n')}\n${pad}]`;
    }
    return JSON.stringify(obj);
  }
  const lines = ['{'];
  for (const [k, v] of Object.entries(obj)) {
    lines.push(`${pad1}${k}: ${serialize(v, indent + 1)},`);
  }
  lines.push(`${pad}}`);
  return lines.join('\n');
}

const header = `// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = `;

const original = readFileSync(targetPath, 'utf8');
const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map((m) => m[1]);
for (const id of batch1Ids) {
  if (!keyOrder.includes(id)) {
    const stanfordIdx = keyOrder.indexOf('stanford-cs');
    keyOrder.splice(stanfordIdx >= 0 ? stanfordIdx + 1 : 0, 0, id);
  }
}

const entries = keyOrder.map((id) => `  '${id}': ${serialize(out[id], 1)},`).join('\n');
writeFileSync(targetPath, `${header}{\n${entries}\n};\n`);
console.log(
  `Merged deadlines batch1 MBA onto ${batch1Ids.length} programs (${Object.keys(out).length} research-detail entries total).`,
);
