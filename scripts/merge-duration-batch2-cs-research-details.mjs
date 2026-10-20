#!/usr/bin/env node
/** Merge duration/core/tracks batch2 CS overlays onto research-details (preserve tuition/deadline). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const batchIds = [
  'ucsd-cs',
  'maryland-cs',
  'columbia-cs',
  'purdue-cs',
  'ucla-cs',
  'wisconsin-cs',
  'penn-cs',
  'chicago-cs',
];
const deadlineKeys = ['deadline', 'deadlineDate'];
const tuitionKeys = ['tuition', 'tuitionLabel', 'period', 'costNote', 'costDetail'];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const batchPath =
  process.argv[2] || path.join(root, 'path/brief/duration-batch2-cs.research-details.patch.js');
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
  return mod.durationBatch2Cs;
}

const main = await loadMainDetails(targetPath);
const batch = await loadBatch(batchPath);
const out = { ...main };

for (const id of batchIds) {
  const b = batch[id];
  const m = main[id] || {};
  if (!b) throw new Error(`duration batch2 CS missing ${id}`);
  out[id] = { ...m, ...b };
  for (const k of tuitionKeys) {
    if (m[k] !== undefined) out[id][k] = m[k];
  }
  for (const k of deadlineKeys) {
    if (Object.prototype.hasOwnProperty.call(m, k)) out[id][k] = m[k];
  }
  if (b.academic) out[id].academic = b.academic;
  if (b.orientation) out[id].orientation = b.orientation;
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
for (const id of batchIds) {
  if (!keyOrder.includes(id)) keyOrder.push(id);
}

const entries = keyOrder.map((id) => `  '${id}': ${serialize(out[id], 1)},`).join('\n');
writeFileSync(targetPath, `${header}{\n${entries}\n};\n`);
console.log(
  `Merged duration batch2 CS onto ${batchIds.length} programs (${Object.keys(out).length} research-detail entries total).`,
);
