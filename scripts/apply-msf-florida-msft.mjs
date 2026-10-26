#!/usr/bin/env node
/** Singleton ingest: florida-msft (UF Warrington MS in Finance and Technology). Does not touch florida-msf. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-florida-msft.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-florida-msft/florida-msft-costs.json'), 'utf8'));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-florida-msft/florida-msft-awards.json'), 'utf8'));

const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');

const ID = 'florida-msft';
const PERIOD_PREFIX = '2026\u201327';

if (brief.items?.length !== 1 || brief.items[0].id !== ID) {
  throw new Error(`Expected a single brief item ${ID}`);
}
const item = brief.items[0];
if (item.tfeRank2026 != null) throw new Error('Refusing to assign a TFE rank to florida-msft');
if (item.tuition !== 43478) throw new Error(`Brief OOS tuition must be 43478, got ${item.tuition}`);
if (item.tuitionAlt !== 15976) throw new Error(`Brief in-state tuition must be 15976, got ${item.tuitionAlt}`);
if (item.stem != null) throw new Error('STEM must stay null (not stated on FinTech pages)');

const costRow = costPayload[ID];
if (!costRow) throw new Error('Missing florida-msft cost row');
if (costRow.tuition !== 43478) throw new Error(`Cost OOS tuition must be 43478, got ${costRow.tuition}`);
if (costRow.altTuition?.floridaResident !== 15976) {
  throw new Error(`Cost in-state tuition must be 15976, got ${costRow.altTuition?.floridaResident}`);
}
if (costRow.accessRestricted !== false) throw new Error('Traditional track must be accessRestricted false');
if (costRow.fees != null) throw new Error('fees must stay null');
if (costRow.livingCostBand != null) throw new Error('livingCostBand must stay null');
if (costRow.stem != null) throw new Error('cost stem must stay null');

if (!Array.isArray(awardsHandoff.awards) || awardsHandoff.awards.length !== 0) {
  throw new Error('florida-msft awards must be empty (no SCH cards)');
}
if ((awardsHandoff.counts?.schIdsUsed || []).length !== 0) {
  throw new Error('florida-msft must not consume SCH ids');
}

const early = (item.deadlines || []).find((d) => d.date === '2027-03-01' && /early/i.test(d.label));
const final = (item.deadlines || []).find((d) => d.date === '2027-05-01' && /final/i.test(d.label));
if (!early || !final) throw new Error('Traditional deadlines 2027-03-01 / 2027-05-01 missing');

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function serialize(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  if (obj === null) return 'null';
  if (typeof obj === 'string') return `'${esc(obj)}'`;
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
  if (Array.isArray(obj)) {
    if (!obj.length) return '[]';
    if (Array.isArray(obj[0])) {
      return `[\n${obj.map((pair) => `${pad1}['${esc(pair[0])}', '${esc(pair[1])}'],`).join('\n')}\n${pad}]`;
    }
    return JSON.stringify(obj);
  }
  const lines = ['{'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    lines.push(`${pad1}${k}: ${serialize(v, indent + 1)},`);
  }
  lines.push(`${pad}}`);
  return lines.join('\n');
}

function formatDeadline(row) {
  const primary =
    (row.deadlines || []).find((d) => d.date && /early/i.test(d.label) && /traditional/i.test(d.label)) ||
    (row.deadlines || []).find((d) => d.date === '2027-03-01');
  if (!primary?.date) throw new Error('Could not resolve traditional early deadline');
  const parts = [primary.label, primary.date];
  if (primary.dateNote) parts.push(primary.dateNote);
  return { deadline: parts.join(' · '), deadlineDate: primary.date };
}

function normalizePeriod(rawPeriod) {
  let p = String(rawPeriod || PERIOD_PREFIX).replace(/\.\s*$/, '');
  if (p.startsWith(PERIOD_PREFIX)) return p;
  return `${PERIOD_PREFIX} · ${p}`;
}

function buildCostDetail(row, cost) {
  const chunks = [];
  if (cost.tuitionAlt != null) {
    chunks.push(
      `Alternate format: ${cost.tuitionAltLabel || 'alternate tuition'} $${cost.tuitionAlt.toLocaleString('en-US')}.`,
    );
  }
  if (cost.feesNote) chunks.push(cost.feesNote);
  if (cost.notes) chunks.push(cost.notes);
  if (cost.accessNote) chunks.push(cost.accessNote);
  return chunks.join(' ');
}

function buildResearchPatch(row, cost) {
  const { deadline, deadlineDate } = formatDeadline(row);
  let costNote = cost.notes || row.costNote;
  if (!costNote.includes('2027')) costNote = `${costNote} Fall 2027 intake context.`;

  const sources = (row.sources || []).map((pair) => [...pair]);
  if (cost.sourceUrl) {
    const idx = sources.findIndex(([, u]) => u === cost.sourceUrl);
    if (idx >= 0) sources[idx] = ['Official tuition / budget', cost.sourceUrl];
    else sources.unshift(['Official tuition / budget', cost.sourceUrl]);
  }
  for (const pair of cost.sources || []) {
    if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
  }
  const tfeUrl = 'https://tfetimes.com/best-finance-program-rankings/';
  if (!sources.some(([, u]) => u === tfeUrl)) sources.push(['TFE Times 2026 (not on classic MSF spine)', tfeUrl]);

  const enriched = {
    ...cost,
    tuitionAlt: row.tuitionAlt,
    tuitionAltLabel: row.tuitionAltLabel,
  };

  return {
    academic: row.academic,
    orientation: row.orientation,
    duration: row.duration,
    tracks: row.tracks,
    coreNotes: row.coreNotes,
    credits: row.credits ?? null,
    stem: null,
    summerStart: false,
    tuition: 43478,
    tuitionAlt: 15976,
    tuitionLabel: cost.tuitionLabel || row.tuitionLabel,
    tuitionAltLabel: row.tuitionAltLabel,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: normalizePeriod(cost.period || row.period),
    costNote,
    costDetail: buildCostDetail(row, enriched),
    funding: 'No verified program-tied scholarship for florida-msft traditional Fall 2027 admits (as of 2026-10-26). SCH ids consumed: none.',
    fundingNotes: 'No verified program-tied scholarship for florida-msft traditional Fall 2027 admits (as of 2026-10-26). SCH ids consumed: none.',
    livingCostBand: null,
    deadline,
    deadlineDate,
    asOf: row.as_of || awardsHandoff.asOf,
    scholarships: [],
    sources,
    programUrl: sources.find(([, u]) => u === 'https://warrington.ufl.edu/graduate/masters-finance-technology/')?.[1]
      || row.sources?.[0]?.[1],
    accessRestricted: false,
    accessNote: cost.accessNote,
    availability: 'Traditional 1-year open · Fall 2027 first class',
    availabilityType: 'verify',
  };
}

function upsertResearchDetail(patch) {
  const before = readFileSync(researchPath, 'utf8');
  const floridaMsf = before.match(/\n  'florida-msf': \{[\s\S]*?\n  \},/);
  if (!floridaMsf) throw new Error('Could not snapshot florida-msf research block');
  const block = `  '${ID}': ${serialize(patch, 1)},`;
  const existing = new RegExp(`\\n  '${ID}': \\{[\\s\\S]*?\\n  \\},`);
  let next;
  if (existing.test(before)) {
    next = before.replace(existing, `\n${block}`);
  } else {
    const idx = before.lastIndexOf('\n};\n');
    if (idx < 0) throw new Error('Could not locate researchDetails closing');
    next = `${before.slice(0, idx)}\n${block}${before.slice(idx)}`;
  }
  if (!next.includes(floridaMsf[0])) throw new Error('florida-msf research block would change; aborting');
  if (next.split(`'${ID}':`).length - 1 !== 1) throw new Error('florida-msft research detail must appear once');
  writeFileSync(researchPath, next);
}

function catalogRow() {
  const programUrl = item.sources?.[0]?.[1];
  if (programUrl !== 'https://warrington.ufl.edu/graduate/masters-finance-technology/') {
    throw new Error(`Unexpected program URL ${programUrl}`);
  }
  return {
    id: ID,
    university: 'University of Florida',
    short: item.school,
    degree: 'MS in Finance and Technology',
    area: 'Finance',
    rank: null,
    academic: item.academic,
    programUrl,
  };
}

function writeCatalog() {
  const without = existingCatalog.filter((r) => r.id !== ID);
  const classic = without.find((r) => r.id === 'florida-msf');
  if (!classic) throw new Error('florida-msf missing from catalog');
  if (classic.rank !== 11) throw new Error(`florida-msf TFE rank changed: ${classic.rank}`);
  if (classic.degree !== 'MS in Finance (UF combination)') {
    throw new Error('florida-msf degree label changed');
  }
  const rows = [...without, catalogRow()];
  if (rows.filter((r) => r.id === ID).length !== 1) throw new Error('catalog id collision');
  if (rows.filter((r) => r.id === 'florida-msf').length !== 1) throw new Error('florida-msf catalog count changed');
  writeFileSync(catalogPath, `export const rankedSchools = ${JSON.stringify(rows, null, 2)};\n`);
}

const researchBeforeIds = readFileSync(researchPath, 'utf8');
const batchIds = [
  'mit-msf', 'princeton-msf', 'washu-msf', 'gsu-msf', 'usc-msf', 'brandeis-msf', 'utah-msf', 'texas-msf',
  'vanderbilt-msf', 'rochester-msf', 'florida-msf', 'asu-msf', 'uci-msf', 'villanova-msf', 'notredame-msf', 'utd-msf',
];
const snapshots = {};
for (const id of batchIds) {
  const m = researchBeforeIds.match(new RegExp(`\\n  '${id}': \\{[\\s\\S]*?\\n  \\},`));
  if (!m) throw new Error(`Missing research snapshot for ${id}`);
  snapshots[id] = m[0];
}

const patch = buildResearchPatch(item, costRow);
upsertResearchDetail(patch);
writeCatalog();

const researchAfter = readFileSync(researchPath, 'utf8');
for (const id of batchIds) {
  if (!researchAfter.includes(snapshots[id])) throw new Error(`${id} research detail changed`);
}

console.log('florida-msft ingested: catalog rank null, tuition 43478 / alt 15976, awards 0, florida-msf untouched.');
