#!/usr/bin/env node
/** Merge tuition batch3 CS overlays onto current research-details (tuition fields win). */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const batch3Ids = [
  'mit-cs', 'caltech-cs', 'princeton-cs', 'washington-cs', 'harvard-cs',
  'usc-cs', 'yale-cs', 'duke-cs', 'umass-cs', 'brown-cs', 'nyu-cs', 'northwestern-cs',
  'rice-cs', 'uci-cs', 'ucsb-cs', 'unc-cs',
];
const tuitionKeys = ['tuition', 'tuitionLabel', 'period', 'costNote', 'costDetail'];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const batch3Path = process.argv[2] || path.join('/tmp', 'batch3-research-details.js');
const targetPath = path.join(root, 'dist/research-details.js');

async function loadDetails(filePath) {
  const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
  const mod = await import(pathToFileURL(resolved).href);
  return mod.researchDetails;
}

const main = await loadDetails(targetPath);
const batch3 = await loadDetails(batch3Path);
const out = { ...main };

for (const id of batch3Ids) {
  const b = batch3[id];
  const m = main[id] || {};
  if (!b) throw new Error(`batch3 missing ${id}`);
  out[id] = { ...m, ...b };
  for (const k of tuitionKeys) {
    if (b[k] !== undefined) out[id][k] = b[k];
  }
  const sources = [...(m.sources || []), ...(b.sources || [])];
  out[id].sources = [...new Map(sources.map((s) => [s[1], s])).values()];
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

const entries = Object.entries(out).map(([id, val]) => `  '${id}': ${serialize(val, 1)},`).join('\n');
writeFileSync(targetPath, `${header}{\n${entries}\n};\n`);
console.log(`Merged batch3 tuition onto ${Object.keys(out).length} research-detail entries.`);
