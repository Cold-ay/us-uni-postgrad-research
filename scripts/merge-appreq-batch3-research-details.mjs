#!/usr/bin/env node
/** Merge AppReq MBA batch3 onto research-details. Writes only applicationRequirements. */
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { rankedSchools } from '../dist/catalog.js';

const EXPECTED = [
  'asu-mba', 'berkeley-mba', 'chicago-mba', 'cmu-mba', 'columbia-mba', 'cornell-mba', 'dartmouth-mba', 'duke-mba',
  'emory-mba', 'gatech-mba', 'georgia-mba', 'harvard-mba', 'indiana-mba', 'michigan-mba', 'mit-mba', 'northwestern-mba',
  'nyu-mba', 'penn-mba', 'rice-mba', 'stanford-mba', 'texas-mba', 'ucla-mba', 'unc-mba', 'usc-mba', 'utd-mba',
  'vanderbilt-mba', 'virginia-mba', 'washington-mba', 'washu-mba', 'yale-mba',
];
const PRIOR_BATCH_COUNT = 75;
const FILE_COUNTS = {
  'appreq-batch3a': 8,
  'appreq-batch3b': 8,
  'appreq-batch3c': 7,
  'appreq-batch3d': 7,
};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targetPath = path.join(root, 'dist/research-details.js');
const batchFiles = Object.keys(FILE_COUNTS)
  .map(name => path.join(root, 'brief', `${name}.json`));
const catalog = new Set(rankedSchools.map(row => row.id));

function loadHandoff() {
  const byId = new Map();
  for (const file of batchFiles) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    const batchName = path.basename(file, '.json');
    if (data.batch !== batchName) throw new Error(`${file} batch is ${data.batch}`);
    if (data.field !== 'applicationRequirements') throw new Error(`${file} field is ${data.field}`);
    if (data.degree !== 'mba') throw new Error(`${file} degree is ${data.degree}`);
    if (data.as_of !== '2026-10-27') throw new Error(`${file} as_of is ${data.as_of}`);
    if (!Array.isArray(data.items)) throw new Error(`${file} has no items`);
    if (data.items.length !== FILE_COUNTS[batchName]) {
      throw new Error(`${file} expected ${FILE_COUNTS[batchName]} items, got ${data.items.length}`);
    }
    for (const item of data.items) {
      if (byId.has(item.id)) throw new Error(`duplicate handoff id ${item.id}`);
      if (!item.applicationRequirements || typeof item.applicationRequirements !== 'object' || Array.isArray(item.applicationRequirements)) {
        throw new Error(`handoff missing applicationRequirements for ${item.id}`);
      }
      byId.set(item.id, item.applicationRequirements);
    }
  }
  if (byId.size !== EXPECTED.length) throw new Error(`expected ${EXPECTED.length} handoff rows, got ${byId.size}`);
  for (const id of EXPECTED) {
    if (!byId.has(id)) throw new Error(`handoff missing ${id}`);
    if (!catalog.has(id)) throw new Error(`catalog missing ${id}`);
  }
  for (const id of byId.keys()) {
    if (!EXPECTED.includes(id)) throw new Error(`unexpected handoff id ${id}`);
  }
  return byId;
}

function programSpan(source, id) {
  const token = `  '${id}': {`;
  const start = source.indexOf(token);
  if (start < 0) throw new Error(`research-details missing block ${id}`);
  const next = source.slice(start + token.length).search(/\n  '[^']+': \{/);
  const end = next < 0 ? source.length : start + token.length + next;
  return [start, end];
}

function endOfObject(block, braceIndex) {
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = braceIndex; i < block.length; i++) {
    const char = block[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') { inString = true; continue; }
    if (char === '{') depth++;
    else if (char === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  throw new Error('unbalanced applicationRequirements object');
}

function emit(obj) {
  const json = JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, index) => index === 0 ? line : `    ${line}`)
    .join('\n');
  return `    applicationRequirements: ${json},`;
}

function spliceBlock(block, requirements) {
  const prop = emit(requirements);
  const keyAt = block.indexOf('\n    applicationRequirements:');
  if (keyAt >= 0) {
    let from = keyAt;
    const commentAt = block.lastIndexOf('\n    // SCHEMA FIXTURE', keyAt);
    if (commentAt >= 0) from = commentAt;
    const brace = block.indexOf('{', keyAt);
    let end = endOfObject(block, brace) + 1;
    if (block[end] === ',') end++;
    return block.slice(0, from) + `\n${prop}` + block.slice(end);
  }
  const close = block.lastIndexOf('\n  },');
  if (close < 0) throw new Error('program block has no closing brace');
  return `${block.slice(0, close)}\n${prop}${block.slice(close)}`;
}

function withoutRequirements(detail) {
  const { applicationRequirements, ...rest } = detail;
  return rest;
}

const handoff = loadHandoff();
const beforeDir = mkdtempSync(path.join(tmpdir(), 'appreq-before-'));
const beforeFile = path.join(beforeDir, 'research-details.js');
copyFileSync(targetPath, beforeFile);
const before = (await import(pathToFileURL(beforeFile).href)).researchDetails;

let source = readFileSync(targetPath, 'utf8');
for (const id of [...EXPECTED].reverse()) {
  const [start, end] = programSpan(source, id);
  const block = spliceBlock(source.slice(start, end), handoff.get(id));
  source = source.slice(0, start) + block + source.slice(end);
}
writeFileSync(targetPath, source);

const afterDir = mkdtempSync(path.join(tmpdir(), 'appreq-after-'));
const afterFile = path.join(afterDir, 'research-details.js');
copyFileSync(targetPath, afterFile);
const details = (await import(pathToFileURL(afterFile).href)).researchDetails;
rmSync(beforeDir, { recursive: true, force: true });
rmSync(afterDir, { recursive: true, force: true });

if (Object.keys(details).length !== Object.keys(before).length) {
  throw new Error('research-details program count changed');
}
for (const id of Object.keys(before)) {
  if (JSON.stringify(withoutRequirements(before[id])) !== JSON.stringify(withoutRequirements(details[id]))) {
    throw new Error(`fields other than applicationRequirements changed for ${id}`);
  }
  if (!EXPECTED.includes(id) && before[id].applicationRequirements) {
    if (JSON.stringify(details[id].applicationRequirements) !== JSON.stringify(before[id].applicationRequirements)) {
      throw new Error(`batch3 clobbered applicationRequirements for ${id}`);
    }
  }
}
for (const id of EXPECTED) {
  if (!details[id]) throw new Error(`research-details missing ${id} after merge`);
  if (JSON.stringify(details[id].applicationRequirements) !== JSON.stringify(handoff.get(id))) {
    throw new Error(`applicationRequirements mismatch after merge for ${id}`);
  }
}
const carriers = Object.entries(details).filter(([, detail]) => detail.applicationRequirements).map(([id]) => id);
if (carriers.length !== EXPECTED.length + PRIOR_BATCH_COUNT) {
  throw new Error(`expected ${EXPECTED.length + PRIOR_BATCH_COUNT} applicationRequirements entries, found ${carriers.length}`);
}
console.log(`Merged applicationRequirements onto ${EXPECTED.length} MBA programs (${carriers.length} total).`);
