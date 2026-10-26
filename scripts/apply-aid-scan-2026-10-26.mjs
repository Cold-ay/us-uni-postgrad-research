#!/usr/bin/env node
/** Apply aid tuition scan 2026-10-26 (texas-cs referenceCost patch only). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const handoffPath = path.join(root, 'path/aid/aid-scan-2026-10-26/CHANGE-HANDOFF.json');
const targetPath = path.join(root, 'dist/research-details.js');

const handoff = JSON.parse(readFileSync(handoffPath, 'utf8'));

async function loadDetails(filePath) {
  const mod = await import(pathToFileURL(filePath).href);
  return mod.researchDetails;
}

const main = await loadDetails(targetPath);
const out = { ...main };

for (const id of handoff.changedProgramIds) {
  const patch = handoff.costs[id];
  if (!patch?.referenceCostPatch) throw new Error(`Missing referenceCostPatch for ${id}`);
  const m = main[id] || {};
  const ref = patch.referenceCostPatch;
  out[id] = {
    ...m,
    tuition: ref.tuition,
    period: ref.period,
    asOf: ref.asOf,
  };
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

const original = readFileSync(targetPath, 'utf8');
const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map((m) => m[1]);

const header = `// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = `;

const entries = keyOrder.map((id) => `  '${id}': ${serialize(out[id], 1)},`).join('\n');
writeFileSync(targetPath, `${header}{\n${entries}\n};\n`);
console.log(`Applied aid scan tuition patch for: ${handoff.changedProgramIds.join(', ')}`);
