#!/usr/bin/env node
/** Upsert HK/TW scholarship batch (SCH-015..066) and merge researchDetailsLinkage. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { rankedSchools } from '../dist/catalog.js';
import { scholarships as existingScholarships } from '../dist/data.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const handoffPath = path.join(root, 'path/aid/hktw-awards.json');
const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');

const handoff = JSON.parse(readFileSync(handoffPath, 'utf8'));
const awardsById = new Map(handoff.awards.map((a) => [a.id, a]));

const SCHOLARSHIP_FIELDS = [
  'id',
  'name',
  'scope',
  'state',
  'tone',
  'type',
  'description',
  'eligibility',
  'amount',
  'deadline',
  'note',
  'url',
  'category',
  'awardType',
  'hkEligible',
  'twEligible',
  'intlEligible',
];

function toSiteAward(raw) {
  const row = {};
  for (const k of SCHOLARSHIP_FIELDS) {
    if (raw[k] !== undefined) row[k] = raw[k];
  }
  return row;
}

function mergeScholarships(existing, incoming) {
  const byId = new Map(existing.map((s) => [s.id, s]));
  for (const raw of incoming) {
    const id = raw.id;
    if (!/^SCH-0\d+$/.test(id)) throw new Error(`Unexpected award id ${id}`);
    const prev = byId.get(id);
    if (prev && Number(id.replace('SCH-', '')) <= 14) {
      throw new Error(`Refusing to overwrite existing award ${id}`);
    }
    byId.set(id, prev ? { ...prev, ...toSiteAward(raw) } : toSiteAward(raw));
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fmtScalar(v) {
  if (v === null) return 'null';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return `'${esc(v)}'`;
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  return JSON.stringify(v);
}

function fmtScholarship(s) {
  const keys = [...new Set([...SCHOLARSHIP_FIELDS, 'prcEligible'])].filter((k) => s[k] !== undefined);
  return `  { ${keys.map((k) => `${k}: ${fmtScalar(s[k])}`).join(', ')} }`;
}

function writeDataJs(mergedScholarships) {
  const text = readFileSync(dataPath, 'utf8');
  const start = text.indexOf('export const scholarships = [');
  const end = text.indexOf('\n];', start);
  if (start < 0 || end < 0) throw new Error('Could not locate scholarships export in data.js');
  const body = mergedScholarships.map((s) => fmtScholarship(s)).join(',\n');
  const next = `${text.slice(0, start)}export const scholarships = [\n${body}\n];\n${text.slice(end + 3)}`;
  writeFileSync(dataPath, next);
}

function awardAppliesToProgram(award, row) {
  const pids = award.programIds || [];
  const catalogId = row.id;
  const area = row.area;
  if (pids.includes(catalogId)) return true;
  for (const pid of pids) {
    if (pid === 'multi' || pid === 'any US grad') return true;
    if (pid.startsWith('multi (MBA)') && area === 'Business') return true;
    if (
      (pid.includes('CS PhD') || pid.includes('CS research') || pid === 'multi (PhD only)') &&
      area === 'Computer science'
    ) {
      return true;
    }
    if (pid === 'multi (research visit only)' && area === 'Computer science') return true;
  }
  return false;
}

function resolveProgramScholarshipAdds() {
  const linkage = handoff.researchDetailsLinkage;
  const adds = new Map(rankedSchools.map((r) => [r.id, new Set()]));

  for (const [key, ids] of Object.entries(linkage)) {
    if (key === 'multi') continue;
    if (key === 'any') {
      for (const row of rankedSchools) {
        for (const sch of ids) adds.get(row.id).add(sch);
      }
    } else if (adds.has(key)) {
      for (const sch of ids) adds.get(key).add(sch);
    }
  }

  for (const row of rankedSchools) {
    for (const schId of linkage.multi || []) {
      const award = awardsById.get(schId);
      if (award && awardAppliesToProgram(award, row)) adds.get(row.id).add(schId);
    }
  }

  return adds;
}

async function loadResearchDetails() {
  const mod = await import(pathToFileURL(researchPath).href);
  return mod.researchDetails;
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

async function writeResearchDetails() {
  const main = await loadResearchDetails();
  const adds = resolveProgramScholarshipAdds();
  const out = { ...main };
  let touched = 0;

  for (const [programId, schIds] of adds) {
    if (!schIds.size) continue;
    const existing = main[programId]?.scholarships || [];
    const merged = [...new Set([...existing, ...schIds])].sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true }),
    );
    if (merged.length === existing.length && merged.every((v, i) => v === existing[i])) continue;
    out[programId] = { ...(main[programId] || {}), scholarships: merged };
    touched++;
  }

  const header = `// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = `;

  const original = readFileSync(researchPath, 'utf8');
  const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map((m) => m[1]);
  const entries = keyOrder.map((id) => `  '${id}': ${serialize(out[id], 1)},`).join('\n');
  writeFileSync(researchPath, `${header}{\n${entries}\n};\n`);
  console.log(`Merged scholarship linkage onto ${touched} programs in research-details.js`);
}

const mergedScholarships = mergeScholarships(existingScholarships, handoff.awards);
writeDataJs(mergedScholarships);
await writeResearchDetails();
console.log(
  `Upserted ${handoff.awards.length} awards; scholarships total ${mergedScholarships.length} (was ${existingScholarships.length}).`,
);
