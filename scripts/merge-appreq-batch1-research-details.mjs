#!/usr/bin/env node
/** Merge AppReq batch1 onto research-details. Writes only applicationRequirements. */
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { rankedSchools } from '../dist/catalog.js';

const EXPECTED = [
  'mit-msf', 'princeton-msf', 'washu-msf', 'gsu-msf', 'usc-msf', 'brandeis-msf', 'utah-msf', 'texas-msf',
  'vanderbilt-msf', 'rochester-msf', 'florida-msf', 'asu-msf', 'uci-msf', 'villanova-msf', 'notredame-msf',
  'utd-msf', 'bc-msf', 'cgu-msf', 'illinois-msf', 'tamu-msf', 'ohio-msf', 'msu-msf', 'auburn-msf', 'ucsd-msf',
  'iit-msf', 'temple-msf', 'lsu-msf', 'santaclara-msf', 'rit-msf', 'arizona-msf', 'chicago-booth-mif',
  'columbia-msfe', 'florida-msft', 'tamu-qfin', 'berkeley-mfe', 'cmu-mscf', 'baruch-mfe', 'columbia-ieor-mfe',
  'gt-qcf', 'chicago-finmath', 'nyu-courant-mf', 'stanford-mcf',
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targetPath = path.join(root, 'dist/research-details.js');
const batchFiles = ['appreq-batch1a', 'appreq-batch1b', 'appreq-batch1c', 'appreq-batch1d']
  .map(name => path.join(root, 'brief', `${name}.json`));
const catalog = new Set(rankedSchools.map(row => row.id));

function loadHandoff() {
  const byId = new Map();
  for (const file of batchFiles) {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    if (data.field !== 'applicationRequirements') throw new Error(`${file} field is ${data.field}`);
    if (!Array.isArray(data.items)) throw new Error(`${file} has no items`);
    for (const item of data.items) {
      if (byId.has(item.id)) throw new Error(`duplicate handoff id ${item.id}`);
      if (!item.applicationRequirements || typeof item.applicationRequirements !== 'object') {
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

const handoff = loadHandoff();
let source = readFileSync(targetPath, 'utf8');
for (const id of [...EXPECTED].reverse()) {
  const [start, end] = programSpan(source, id);
  const block = spliceBlock(source.slice(start, end), handoff.get(id));
  source = source.slice(0, start) + block + source.slice(end);
}
writeFileSync(targetPath, source);

const tempDir = mkdtempSync(path.join(tmpdir(), 'appreq-'));
const tempFile = path.join(tempDir, 'research-details.js');
copyFileSync(targetPath, tempFile);
const after = await import(pathToFileURL(tempFile).href);
rmSync(tempDir, { recursive: true, force: true });
const details = after.researchDetails;
for (const id of EXPECTED) {
  if (!details[id]) throw new Error(`research-details missing ${id} after merge`);
  if (JSON.stringify(details[id].applicationRequirements) !== JSON.stringify(handoff.get(id))) {
    throw new Error(`applicationRequirements mismatch after merge for ${id}`);
  }
}
const carriers = Object.entries(details).filter(([, detail]) => detail.applicationRequirements).map(([id]) => id);
if (carriers.length !== EXPECTED.length) {
  throw new Error(`expected ${EXPECTED.length} applicationRequirements entries, found ${carriers.length}: ${carriers.join(', ')}`);
}
console.log(`Merged applicationRequirements onto ${EXPECTED.length} programs.`);
