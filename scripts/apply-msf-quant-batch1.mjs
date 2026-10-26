#!/usr/bin/env node
/** Quant/MFE separate track. Does not assign TFE ranks or edit primary MSF rows. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-quant-batch1.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-quant-batch1/quant-batch1-costs.json'), 'utf8'));
const costs = Object.fromEntries(Object.entries(costPayload).filter(([k]) => !k.startsWith('_')));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-quant-batch1/quant-batch1-awards.json'), 'utf8'));

const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');
const rankingsPath = path.join(root, 'dist/rankings.js');
const opportunitiesDir = path.join(root, '04-scholarships/opportunities');

const CANONICAL = [
  'berkeley-mfe',
  'cmu-mscf',
  'baruch-mfe',
  'columbia-ieor-mfe',
  'gt-qcf',
  'chicago-finmath',
  'nyu-courant-mf',
  'stanford-mcf',
];

const TUITION_LOCK = {
  'berkeley-mfe': 98036,
  'cmu-mscf': 71800,
  'baruch-mfe': 42000,
  'columbia-ieor-mfe': 101592,
  'gt-qcf': 21935,
  'chicago-finmath': 100213,
  'nyu-courant-mf': 87336,
  'stanford-mcf': null,
};

const QUANTNET_RANK = {
  'berkeley-mfe': 5,
  'cmu-mscf': 3,
  'baruch-mfe': 1,
  'columbia-ieor-mfe': 4,
  'gt-qcf': 8,
  'chicago-finmath': 7,
  'nyu-courant-mf': 11,
  'stanford-mcf': null,
};

const ID_ALIAS_LEGACY = {
  'gt-qcf': ['gatech-qcf'],
  'nyu-courant-mf': ['nyu-courant'],
};

const UNIVERSITY = {
  'berkeley-mfe': 'University of California, Berkeley',
  'cmu-mscf': 'Carnegie Mellon University',
  'baruch-mfe': 'Baruch College, CUNY',
  'columbia-ieor-mfe': 'Columbia University',
  'gt-qcf': 'Georgia Institute of Technology',
  'chicago-finmath': 'University of Chicago',
  'nyu-courant-mf': 'New York University',
  'stanford-mcf': 'Stanford University',
};

const PRIMARY_DEADLINE = {
  'berkeley-mfe': 'Spring 2028 Round 1',
  'cmu-mscf': 'Round 1 application',
  'baruch-mfe': 'Fall 2027 Round 1',
  'columbia-ieor-mfe': 'Fall MS Financial Engineering deadline',
  'gt-qcf': 'Fall 2027 Early',
  'chicago-finmath': 'In-person Autumn 2027 Round 1',
  'nyu-courant-mf': 'Full-time Fall (all materials to GSAS)',
  'stanford-mcf': 'ICME MS external applicants Autumn 2027–28',
};

const INGEST_SCH = ['SCH-140', 'SCH-141', 'SCH-142', 'SCH-143', 'SCH-144', 'SCH-145', 'SCH-146', 'SCH-147'];
const SKIP_SCH = ['SCH-148', 'SCH-149', 'SCH-150', 'SCH-151', 'SCH-152', 'SCH-153', 'SCH-154'];

const NOTE_SLUG = {
  'SCH-140': 'haas-mfe-merit.md',
  'SCH-141': 'cmu-mscf-merit-fellowship.md',
  'SCH-142': 'columbia-engineering-deans-ms-fellowship.md',
  'SCH-143': 'columbia-cma-cgm-excellence.md',
  'SCH-144': 'columbia-engineering-for-change.md',
  'SCH-145': 'chicago-finmath-merit.md',
  'SCH-146': 'gt-qcf-gta.md',
  'SCH-147': 'stanford-icme-ms-assistantship.md',
};

const PROTECTED = ['columbia-msfe', 'tamu-msf', 'tamu-qfin', 'florida-msf', 'florida-msft'];

const SCHOLARSHIP_FIELDS = [
  'id', 'name', 'scope', 'state', 'tone', 'type', 'description', 'eligibility', 'amount', 'deadline',
  'note', 'url', 'category', 'awardType', 'hkEligible', 'twEligible', 'intlEligible', 'prcEligible',
];

function assertInputs() {
  const ids = brief.items.map((item) => item.id);
  if (ids.join(',') !== CANONICAL.join(',')) {
    throw new Error(`Brief ids must be exactly ${CANONICAL.join(', ')}; got ${ids.join(', ')}`);
  }
  for (const id of CANONICAL) {
    const item = brief.items.find((row) => row.id === id);
    if (item.tfeRank2026 != null) throw new Error(`${id} tfeRank2026 must stay null`);
    if (item.quantNetRank2026 !== QUANTNET_RANK[id]) {
      throw new Error(`${id} QuantNet rank lock: expected ${QUANTNET_RANK[id]}, got ${item.quantNetRank2026}`);
    }
    if (!costs[id]) throw new Error(`Missing cost row ${id}`);
    if (costs[id].tuition !== TUITION_LOCK[id]) {
      throw new Error(`Tuition lock ${id}: expected ${TUITION_LOCK[id]}, got ${costs[id].tuition}`);
    }
    if (costs[id].tuition === 0 || costs[id].fees === 0 || costs[id].livingCostBand === 0) {
      throw new Error(`${id} must not coerce a missing cost to 0`);
    }
  }
  if (costs['stanford-mcf'].tuition !== null) throw new Error('stanford-mcf flat tuition must stay null');
  if (costs['stanford-mcf'].stem !== null) throw new Error('stanford-mcf STEM must stay null');
  if (costs['berkeley-mfe'].springOnly !== true) throw new Error('berkeley-mfe must be spring-only');
  if (costs['berkeley-mfe'].stem !== true) throw new Error('berkeley-mfe STEM lock');
  if (costs['columbia-ieor-mfe'].tuition === costs['columbia-msfe']?.tuition) {
    throw new Error('Refusing identical IEOR and CBS tuition');
  }
  const costIds = Object.keys(costs).sort();
  if (costIds.join(',') !== [...CANONICAL].sort().join(',')) {
    throw new Error(`Cost ids must match the 8 quant ids; got ${costIds.join(', ')}`);
  }

  const ingestIds = awardsHandoff.awards.filter((a) => a.ingest === true).map((a) => a.id);
  if (ingestIds.join(',') !== INGEST_SCH.join(',')) {
    throw new Error(`Ingest SCH must be ${INGEST_SCH.join(', ')}; got ${ingestIds.join(', ')}`);
  }
  const skipIds = awardsHandoff.awards.filter((a) => a.ingest === false).map((a) => a.id);
  if (skipIds.join(',') !== SKIP_SCH.join(',')) {
    throw new Error(`Skip SCH must be ${SKIP_SCH.join(', ')}; got ${skipIds.join(', ')}`);
  }
  for (const award of awardsHandoff.awards) {
    const n = Number(award.id.replace('SCH-', ''));
    if (n < 140 || n > 154) throw new Error(`Unexpected award id ${award.id}`);
    if ((award.programIds || []).includes('columbia-msfe')) {
      throw new Error(`${award.id} must not target columbia-msfe`);
    }
    if (award.ingest === true && (award.programIds || []).length !== 1) {
      throw new Error(`${award.id} must name exactly one program`);
    }
    if (award.ingest === true && !CANONICAL.includes(award.programIds[0])) {
      throw new Error(`${award.id} program is outside the quant track`);
    }
  }
  if (awardsHandoff.counts?.ingestTrue !== 8 || awardsHandoff.counts?.ingestFalse !== 7) {
    throw new Error('Award counts must be 8 ingest / 7 skip');
  }

  for (const id of CANONICAL) {
    if (existingCatalog.some((row) => row.id === id)) throw new Error(`${id} already in catalog`);
  }
  for (const id of ['gatech-qcf', 'nyu-courant', 'columbia-mfe']) {
    if (existingCatalog.some((row) => row.id === id)) throw new Error(`Legacy id ${id} must not already be a row`);
  }
  for (const id of PROTECTED) {
    if (!existingCatalog.some((row) => row.id === id)) throw new Error(`${id} missing from catalog`);
  }
  const cbs = existingCatalog.find((row) => row.id === 'columbia-msfe');
  const tamu = existingCatalog.find((row) => row.id === 'tamu-msf');
  const qfin = existingCatalog.find((row) => row.id === 'tamu-qfin');
  const florida = existingCatalog.find((row) => row.id === 'florida-msf');
  const fintech = existingCatalog.find((row) => row.id === 'florida-msft');
  if (cbs.rank !== null || cbs.degree !== 'MS in Financial Economics (MSFE)') {
    throw new Error('columbia-msfe catalog lock drifted');
  }
  if (tamu.rank !== 20) throw new Error('tamu-msf rank drifted');
  if (qfin.rank !== null) throw new Error('tamu-qfin rank drifted');
  if (florida.rank !== 11) throw new Error('florida-msf rank drifted');
  if (fintech.rank !== null) throw new Error('florida-msft rank drifted');
  const ranked = existingCatalog.filter((row) => row.area === 'Finance' && row.rank != null);
  if (ranked.length !== 30) throw new Error(`Primary TFE spine must stay 30 rows, got ${ranked.length}`);
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
  const keys = SCHOLARSHIP_FIELDS.filter((k) => s[k] !== undefined);
  return `  { ${keys.map((k) => `${k}: ${fmtScalar(s[k])}`).join(', ')} }`;
}

function toSiteAward(raw) {
  const row = {};
  for (const k of SCHOLARSHIP_FIELDS) {
    if (raw[k] !== undefined && k !== 'note') row[k] = raw[k];
  }
  row.note = `04-scholarships/opportunities/${NOTE_SLUG[raw.id]}`;
  return row;
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

function formatDeadline(item) {
  const label = PRIMARY_DEADLINE[item.id];
  const primary = (item.deadlines || []).find((d) => d.label === label);
  if (!primary || !primary.date) throw new Error(`Missing primary deadline for ${item.id}`);
  const parts = [primary.label, primary.date];
  if (primary.timeNote) parts.push(primary.timeNote);
  if (primary.dateNote) parts.push(primary.dateNote);
  if (item.id === 'berkeley-mfe') parts.push('SPRING-ONLY — no Fall admission');
  if (item.id === 'gt-qcf') parts.push('Fall and Spring admits; Fall 2027 Early is the primary date');
  return { deadline: parts.join(' · '), deadlineDate: primary.date };
}

function normalizePeriod(rawPeriod) {
  const p = String(rawPeriod || '');
  if (/^2026–27/.test(p)) return p;
  return `2026–27 · ${p}`;
}

function buildCostDetail(id, item, costRow) {
  const chunks = [];
  if (id === 'berkeley-mfe' && costRow.tuitionComponent) {
    chunks.push(`Tuition component inside Program & University Fees: $${costRow.tuitionComponent.toLocaleString('en-US')}. Catalog tuition is the published Program & University Fees figure.`);
  }
  if (id === 'chicago-finmath' && costRow.tuitionPer100Units) {
    chunks.push(`Published in-person rate: $${costRow.tuitionPer100Units.toLocaleString('en-US')} per 100 units. Catalog tuition $${costRow.tuition.toLocaleString('en-US')} is illustrative at 1,250 units, not a locked flat sticker if the unit load changes.`);
  }
  if (id === 'stanford-mcf') {
    chunks.push(`No flat program tuition (tuition null). Graduate Engineering quarterly rates 2026–27: 8–10 units $${costRow.tuitionQuarterlyLow.toLocaleString('en-US')}; 11–18 units $${costRow.tuitionQuarterlyHigh.toLocaleString('en-US')}. 45 units over typically 5–6 quarters. Do not sum these into a program total.`);
  }
  if (id === 'gt-qcf') {
    chunks.push('Catalog tuition is Out-of-Country full-time semester tuition (≥12 credits), not a full-program total. Out-of-state and in-state semester rates are in the tuition label.');
  }
  if (typeof costRow.fees === 'number') chunks.push(`Mandatory fees reference: $${costRow.fees.toLocaleString('en-US')}.`);
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (item.costNote && item.costNote !== costRow.notes) chunks.push(item.costNote);
  if (costRow.livingCostBand) {
    const { low, high, basis } = costRow.livingCostBand;
    const band = high != null
      ? `$${low.toLocaleString('en-US')}–$${high.toLocaleString('en-US')}`
      : `$${low.toLocaleString('en-US')}`;
    chunks.push(`Living cost band from official COA: ${band} (${basis}).`);
  } else {
    chunks.push('Living cost band not published for this program (null, not zero).');
  }
  if (id === 'berkeley-mfe') chunks.push('SPRING-ONLY badge: no Fall admission.');
  if (id === 'columbia-ieor-mfe') chunks.push('columbia-ieor-mfe (IEOR MSFE) is not columbia-msfe (CBS MS Financial Economics). Do not copy these costs onto columbia-msfe.');
  const detail = chunks.join(' ');
  if (/\bfees?\b[^.]{0,40}\$0\b/i.test(detail)) throw new Error(`${id} costDetail must not coerce fees to $0`);
  return detail;
}

function buildFunding(id, programSchIds) {
  if (id === 'baruch-mfe') {
    return 'No verified open admit-time merit scholarship for baruch-mfe (as of 2026-10-26). The Jim Gatheral award is for current students and is not ingested.';
  }
  if (id === 'nyu-courant-mf') {
    return 'NYU Courant Mathematics in Finance does not accept applications for program financial assistance (as of 2026-10-26). No program scholarship card is ingested.';
  }
  const base = programSchIds.length
    ? `Program-tied funding verified ${awardsHandoff.asOf}: ${programSchIds.join(', ')}.`
    : `No verified program-tied scholarship (as of ${awardsHandoff.asOf}).`;
  if (id === 'columbia-ieor-mfe') {
    return `${base} These awards belong to columbia-ieor-mfe only. Do not attach them to columbia-msfe (CBS MSFE).`;
  }
  return base;
}

function buildResearchPatch(item) {
  const id = item.id;
  const costRow = costs[id];
  const { deadline, deadlineDate } = formatDeadline(item);
  const programSchIds = ingestableAwards
    .filter((a) => (a.programIds || []).includes(id))
    .map((a) => a.id)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  let costNote = costRow.notes || item.costNote || '';
  if (!String(costNote).includes('2027')) costNote = `${costNote} Fall 2027 intake context.`;
  if (id === 'berkeley-mfe' && !/SPRING-ONLY/i.test(costNote)) {
    costNote = `SPRING-ONLY — no Fall admission. ${costNote}`;
  }
  if (id === 'stanford-mcf' && !/null/i.test(costNote)) {
    costNote = `${costNote} Flat tuition is null.`;
  }

  const sources = (item.sources || []).map((pair) => [...pair]);
  if (costRow.sourceUrl) {
    const idx = sources.findIndex(([, u]) => u === costRow.sourceUrl);
    if (idx >= 0) sources[idx] = ['Official tuition / budget', costRow.sourceUrl];
    else sources.unshift(['Official tuition / budget', costRow.sourceUrl]);
  }
  for (const pair of costRow.sources || []) {
    if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
  }
  if (!sources.some(([name]) => /Tuition|tuition|budget/.test(name))) {
    throw new Error(`${id} needs an official tuition/budget source`);
  }

  const availability = id === 'berkeley-mfe'
    ? `SPRING-ONLY · ${item.startTerm}`
    : item.startTerm;

  const patch = {
    academic: item.academic,
    orientation: item.orientation,
    duration: item.duration,
    tracks: item.tracks,
    coreNotes: item.coreNotes,
    credits: item.credits ?? null,
    stem: costRow.stem === true || costRow.stem === false || costRow.stem === null ? costRow.stem : null,
    stemNote: null,
    summerStart: false,
    springOnly: id === 'berkeley-mfe',
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: item.quantNetRank2026,
    tuition: costRow.tuition,
    tuitionAlt: null,
    tuitionLabel: costRow.tuitionLabel,
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: typeof costRow.fees === 'number' ? costRow.fees : null,
    period: normalizePeriod(costRow.period || item.period),
    costNote,
    costDetail: buildCostDetail(id, item, costRow),
    funding: buildFunding(id, programSchIds),
    fundingNotes: buildFunding(id, programSchIds),
    livingCostBand: costRow.livingCostBand ?? null,
    deadline,
    deadlineDate,
    asOf: item.as_of || awardsHandoff.asOf,
    scholarships: programSchIds,
    sources,
    programUrl: item.sources?.[0]?.[1] || sources[0]?.[1],
    availability,
    accessRestricted: false,
  };
  if (ID_ALIAS_LEGACY[id]) patch.id_alias_legacy = ID_ALIAS_LEGACY[id];
  return patch;
}

function snapshotBlocks(text, ids) {
  const snapshots = {};
  for (const id of ids) {
    const m = text.match(new RegExp(`\\n  '${id}': \\{[\\s\\S]*?\\n  \\},`));
    if (!m) throw new Error(`Missing research snapshot for ${id}`);
    snapshots[id] = m[0];
  }
  return snapshots;
}

function snapshotCatalog(text, ids) {
  const snapshots = {};
  for (const id of ids) {
    const m = text.match(new RegExp(`\\{\\s*"id": "${id}"[\\s\\S]*?\\n  \\}`));
    if (!m) throw new Error(`Missing catalog snapshot for ${id}`);
    snapshots[id] = m[0];
  }
  return snapshots;
}

function appendResearch(patches, snapshots) {
  const before = readFileSync(researchPath, 'utf8');
  const blocks = Object.entries(patches)
    .map(([id, patch]) => `  '${id}': ${serialize(patch, 1)},`)
    .join('\n');
  const idx = before.lastIndexOf('\n};\n');
  if (idx < 0) throw new Error('Could not locate researchDetails closing');
  const next = `${before.slice(0, idx)}\n${blocks}${before.slice(idx)}`;
  for (const id of Object.keys(snapshots)) {
    if (!next.includes(snapshots[id])) throw new Error(`${id} research detail would change; aborting`);
  }
  for (const id of CANONICAL) {
    if (next.split(`'${id}':`).length - 1 !== 1) throw new Error(`${id} research detail must appear once`);
  }
  if (next.includes("'gatech-qcf':") || next.includes("'nyu-courant':")) {
    throw new Error('Legacy alias must not become a research key');
  }
  writeFileSync(researchPath, next);
}

function catalogRow(item) {
  const programUrl = item.sources?.[0]?.[1];
  if (!programUrl) throw new Error(`Missing programUrl for ${item.id}`);
  const row = {
    id: item.id,
    university: UNIVERSITY[item.id],
    short: item.school,
    degree: item.program,
    area: 'Finance',
    rank: null,
    tfeRank2026: null,
    quantNetRank2026: item.quantNetRank2026,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    academic: item.academic,
    programUrl,
  };
  if (ID_ALIAS_LEGACY[item.id]) row.id_alias_legacy = ID_ALIAS_LEGACY[item.id];
  return row;
}

function appendCatalog(rows, snapshots) {
  const before = readFileSync(catalogPath, 'utf8');
  const body = rows.map((row) => JSON.stringify(row, null, 2).replace(/^/gm, '  ')).join(',\n');
  if (!before.trimEnd().endsWith('];')) throw new Error('Unexpected catalog ending');
  const idx = before.lastIndexOf('\n];');
  const next = `${before.slice(0, idx)},\n${body}${before.slice(idx)}`;
  for (const id of Object.keys(snapshots)) {
    if (!next.includes(snapshots[id])) throw new Error(`${id} catalog row would change; aborting`);
  }
  for (const id of ['gatech-qcf', 'nyu-courant', 'columbia-mfe']) {
    if (next.includes(`"id": "${id}"`)) throw new Error(`${id} must not be a catalog id`);
  }
  for (const id of CANONICAL) {
    if (next.split(`"id": "${id}"`).length - 1 !== 1) throw new Error(`${id} catalog row must appear once`);
  }
  writeFileSync(catalogPath, next);
}

function appendScholarships(awards) {
  const text = readFileSync(dataPath, 'utf8');
  const marker = "id: 'SCH-127'";
  const idx = text.lastIndexOf(marker);
  if (idx < 0) throw new Error('Could not locate SCH-127 to append quant awards');
  const end = text.indexOf('\n];', idx);
  if (end < 0) throw new Error('Could not locate scholarships closing');
  const lines = awards.map((award) => fmtScholarship(toSiteAward(award))).join(',\n');
  const next = `${text.slice(0, end)},\n${lines}${text.slice(end)}`;
  for (const id of SKIP_SCH) {
    if (next.includes(`id: '${id}'`)) throw new Error(`Skipped ${id} must not be written to data.js`);
  }
  if (next.split("id: 'SCH-127'").length - 1 !== 1) throw new Error('SCH-127 count changed');
  if (next.includes("scope: 'columbia-msfe'") && next.includes("id: 'SCH-142'")) {
    const ieorScopes = ['SCH-142', 'SCH-143', 'SCH-144'].map((id) => {
      const at = next.indexOf(`id: '${id}'`);
      return next.slice(at, next.indexOf('}', at));
    });
    for (const slice of ieorScopes) {
      if (slice.includes('columbia-msfe')) throw new Error('IEOR award scope leaked onto columbia-msfe');
    }
  }
  writeFileSync(dataPath, next);
}

function writeOpportunityMarkdown(award) {
  const slug = NOTE_SLUG[award.id];
  if (!slug) throw new Error(`No markdown slug for ${award.id}`);
  mkdirSync(opportunitiesDir, { recursive: true });
  const sources = (award.sources || []).map((s) => `- [${s.label}](${s.url})`).join('\n');
  const body = `# ${award.name} (${award.id})

- **Category:** ${award.category || 'n/a'} · **Type:** ${award.awardType || 'n/a'}
- **Status (${award.asOf}):** ${award.state}
- **Scope:** ${award.scope}
- **Programs:** ${(award.programIds || []).join(', ')}
- **HK eligible:** ${award.hkEligible} · **TW eligible:** ${award.twEligible} · **International:** ${award.intlEligible}${award.prcEligible ? ` · **PRC:** ${award.prcEligible}` : ''}

## Summary
${award.description}

## Eligibility
${award.eligibility}

## Amount
${award.amount}

## Deadline
${award.deadline}

${award.note ? `## Notes\n${award.note}\n` : ''}
## Sources
${sources}

_Do not treat amounts/deadlines as final; re-verify on the official page before applying._
`;
  writeFileSync(path.join(opportunitiesDir, slug), body);
}

function updateRankingsNote() {
  const text = readFileSync(rankingsPath, 'utf8');
  const from = "note: 'Batch 1–4 (2026-10-26): TFE Times 2026 ranks 1–30 ingested. Locked unranked adds on this slate: florida-msft, chicago-booth-mif, columbia-msfe. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE programs remain on a separate track.'";
  const to = "note: 'Batch 1–4 (2026-10-26): TFE Times 2026 ranks 1–30 ingested. Locked unranked adds on this slate: florida-msft, chicago-booth-mif, columbia-msfe. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE is a separate quant-mfe track ranked by QuantNet 2026; those eight rows keep tfeRank2026 null and are not merged into TFE ranks 1–30.'";
  if (!text.includes(from)) throw new Error('Could not update Finance ranking note in rankings.js');
  const next = text.replace(from, to);
  if (!next.includes('1–30') || !next.includes('TFE')) throw new Error('Ranking note must keep the TFE 1–30 spine');
  writeFileSync(rankingsPath, next);
}

assertInputs();

const ingestableAwards = awardsHandoff.awards.filter((a) => a.ingest === true);
const existingFinance = existingCatalog.filter((row) => row.area === 'Finance').map((row) => row.id);
const researchBefore = readFileSync(researchPath, 'utf8');
const catalogBefore = readFileSync(catalogPath, 'utf8');
const researchSnapshots = snapshotBlocks(researchBefore, existingFinance);
const catalogSnapshots = snapshotCatalog(catalogBefore, existingFinance);
const rankBefore = new Map(existingCatalog.filter((row) => row.area === 'Finance').map((row) => [row.id, row.rank]));
const degreeBefore = new Map(existingCatalog.filter((row) => row.area === 'Finance').map((row) => [row.id, row.degree]));

const patches = {};
for (const item of brief.items) patches[item.id] = buildResearchPatch(item);

if (patches['stanford-mcf'].tuition !== null || patches['stanford-mcf'].tuitionEstimate !== null) {
  throw new Error('stanford-mcf tuition and tuitionEstimate must stay null');
}
if (patches['berkeley-mfe'].tuition !== 98036 || patches['berkeley-mfe'].springOnly !== true) {
  throw new Error('berkeley-mfe tuition / spring-only lock failed');
}
if (patches['berkeley-mfe'].summerStart !== false) throw new Error('berkeley-mfe is spring-only, not summerStart');
for (const id of CANONICAL) {
  if (patches[id].tfeRank2026 !== null) throw new Error(`${id} tfeRank2026 must be null`);
  if (patches[id].track !== 'quant-mfe') throw new Error(`${id} track must be quant-mfe`);
  if (patches[id].tuition === 0) throw new Error(`${id} tuition coerced to 0`);
  if (!/^2026–27/.test(patches[id].period)) throw new Error(`${id} period must start with 2026–27`);
  if (patches[id].tuition !== null && !patches[id].costNote.includes('2027')) {
    throw new Error(`${id} costNote must mention 2027`);
  }
  for (const sch of patches[id].scholarships) {
    if (SKIP_SCH.includes(sch) || sch === 'SCH-127') throw new Error(`${sch} must not attach to ${id}`);
  }
}
if (patches['columbia-ieor-mfe'].scholarships.join(',') !== 'SCH-142,SCH-143,SCH-144') {
  throw new Error('IEOR scholarship set drifted');
}
if (patches['baruch-mfe'].scholarships.length || patches['nyu-courant-mf'].scholarships.length) {
  throw new Error('Baruch and NYU Courant must not get scholarship cards');
}
if (!patches['gt-qcf'].id_alias_legacy?.includes('gatech-qcf')) throw new Error('gt-qcf alias missing');
if (!patches['nyu-courant-mf'].id_alias_legacy?.includes('nyu-courant')) throw new Error('nyu-courant-mf alias missing');
if (patches['stanford-mcf'].stem !== null || patches['stanford-mcf'].livingCostBand !== null) {
  throw new Error('stanford-mcf STEM and living must stay null');
}

for (const award of ingestableAwards) writeOpportunityMarkdown(award);
appendCatalog(brief.items.map(catalogRow), catalogSnapshots);
appendScholarships(ingestableAwards);
appendResearch(patches, researchSnapshots);
updateRankingsNote();

const catalogAfterText = readFileSync(catalogPath, 'utf8');
const catalogAfter = JSON.parse(catalogAfterText.replace(/^export const rankedSchools = /, '').replace(/;\s*$/, ''));
for (const [id, rank] of rankBefore) {
  const row = catalogAfter.find((item) => item.id === id);
  if (!row || row.rank !== rank) throw new Error(`${id} TFE rank changed from ${rank} to ${row?.rank}`);
  if (row.degree !== degreeBefore.get(id)) throw new Error(`${id} degree label changed`);
}
for (const id of CANONICAL) {
  const row = catalogAfter.find((item) => item.id === id);
  if (!row || row.rank !== null || row.tfeRank2026 !== null || row.track !== 'quant-mfe') {
    throw new Error(`${id} catalog rank/track lock failed`);
  }
}
const rankedAfter = catalogAfter.filter((row) => row.area === 'Finance' && row.rank != null);
if (rankedAfter.length !== 30) throw new Error('TFE spine length changed');
const cbs = catalogAfter.find((row) => row.id === 'columbia-msfe');
const ieor = catalogAfter.find((row) => row.id === 'columbia-ieor-mfe');
if (cbs.academic === ieor.academic || cbs.programUrl === ieor.programUrl) {
  throw new Error('columbia-msfe and columbia-ieor-mfe catalog identity collided');
}

const researchAfter = readFileSync(researchPath, 'utf8');
for (const id of existingFinance) {
  if (!researchAfter.includes(researchSnapshots[id])) throw new Error(`${id} research detail changed`);
  if (!catalogAfterText.includes(catalogSnapshots[id])) throw new Error(`${id} catalog row changed`);
}

console.log(
  `quant-mfe: ${CANONICAL.length} catalog rows, TFE ranks untouched (${rankedAfter.length}). Awards ingested ${ingestableAwards.length} (${INGEST_SCH.join(', ')}); skipped ${SKIP_SCH.length} (${SKIP_SCH.join(', ')}). stanford-mcf tuition null. columbia-ieor-mfe kept distinct from columbia-msfe.`,
);
