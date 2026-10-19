#!/usr/bin/env node
/** Merge tuition batch1 MBA brief onto research-details (tuition fields win; keep aid funding). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const tuitionKeys = ['tuition', 'tuitionLabel', 'period', 'costNote', 'costDetail'];
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const batchPath = path.join(root, 'path/tuition/tuition-batch1-mba.json');
const targetPath = path.join(root, 'dist/research-details.js');

const batch = JSON.parse(readFileSync(batchPath, 'utf8'));
const batchIds = batch.items.map(i => i.id);

async function loadDetails(filePath) {
  const mod = await import(pathToFileURL(filePath).href);
  return mod.researchDetails;
}

const main = await loadDetails(targetPath);
const out = { ...main };

for (const item of batch.items) {
  const m = main[item.id] || {};
  const brief = {
    tuition: item.tuition,
    tuitionLabel: item.tuitionLabel,
    period: item.period,
    costNote: item.costNote,
    costDetail: item.costDetail,
    sources: item.sources,
    asOf: item.as_of || batch.as_of,
  };
  out[item.id] = { ...m, ...brief };
  for (const k of tuitionKeys) {
    if (brief[k] !== undefined) out[item.id][k] = brief[k];
  }
  const sources = [...(brief.sources || []), ...(m.sources || [])];
  out[item.id].sources = [...new Map(sources.map(s => [s[1], s])).values()];
  if (brief.asOf) out[item.id].asOf = brief.asOf;
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
      return `[\n${obj.map(pair => `${pad1}['${pair[0].replace(/'/g, "\\'")}', '${pair[1]}'],`).join('\n')}\n${pad}]`;
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
const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map(m => m[1]);
for (const id of batchIds) {
  if (!keyOrder.includes(id)) {
    const yaleIdx = keyOrder.indexOf('yale-mba');
    keyOrder.splice(yaleIdx >= 0 ? yaleIdx + 1 : keyOrder.length, 0, id);
  }
}

const header = `// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = `;

const entries = keyOrder.map(id => `  '${id}': ${serialize(out[id], 1)},`).join('\n');
writeFileSync(targetPath, `${header}{\n${entries}\n};\n`);
console.log(`Merged tuition batch1 MBA onto ${batchIds.length} programs.`);
