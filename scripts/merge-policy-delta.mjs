#!/usr/bin/env node
/** Upsert radar policy delta items into dist/policy.js by id (subtract before add). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const deltaPath =
  process.argv[2] || path.join(root, 'radar/policy-delta-2026-10-20-morning.json');
const policyPath = path.join(root, 'dist/policy.js');

const delta = JSON.parse(readFileSync(deltaPath, 'utf8'));
const policyMod = await import(pathToFileURL(policyPath).href);
const existing = [...policyMod.items];

const deltaIds = new Set(delta.items.map((i) => i.id));
const kept = existing.filter((i) => !deltaIds.has(i.id));
const merged = [...kept, ...delta.items];

const asOf = delta.as_of.slice(0, 10);
let scanType = policyMod.scanType || 'initial_baseline';
if (delta.scan_type === 'delta' && !scanType.includes('delta')) {
  scanType = `${scanType}+delta`;
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fmtStringArray(arr, indent) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  const inline = `[${arr.map((s) => `'${esc(s)}'`).join(', ')}]`;
  if (inline.length <= 88) return inline;
  return `[\n${arr.map((s) => `${pad1}'${esc(s)}',`).join('\n')}\n${pad}]`;
}

function fmtItem(item, indent) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  const lines = [
    `${pad}{`,
    `${pad1}id: '${esc(item.id)}',`,
    `${pad1}title: '${esc(item.title)}',`,
    `${pad1}summary: '${esc(item.summary)}',`,
    `${pad1}sources: ${fmtStringArray(item.sources, indent + 1)},`,
    `${pad1}affected: ${fmtStringArray(item.affected, indent + 1)},`,
    `${pad1}slate_impact: '${esc(item.slate_impact)}',`,
    `${pad1}school_specific: ${item.school_specific},`,
    `${pad1}confidence: '${esc(item.confidence)}'`,
    `${pad}}`,
  ];
  return lines.join('\n');
}

const body = `export const asOf = '${asOf}';
export const scanType = '${esc(scanType)}';
export const items = [
${merged.map((item) => fmtItem(item, 1) + ',').join('\n')}
];
`;

writeFileSync(policyPath, body);
console.log(`Merged ${delta.items.length} delta item(s) into ${policyPath} (${merged.length} total).`);
