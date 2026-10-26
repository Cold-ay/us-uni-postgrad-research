#!/usr/bin/env node
/** MSF batch 3: TFE Times 2026 ranks 17–24. Does not rewrite batch1–2 or florida-msft rows. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-batch3.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch3/batch3-costs.json'), 'utf8'));
const costs = Object.fromEntries(Object.entries(costPayload).filter(([k]) => !k.startsWith('_')));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch3/batch3-awards.json'), 'utf8'));

const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');
const rankingsPath = path.join(root, 'dist/rankings.js');
const opportunitiesDir = path.join(root, '04-scholarships/opportunities');

const CANONICAL = [
  'bc-msf',
  'cgu-msf',
  'illinois-msf',
  'tamu-msf',
  'ohio-msf',
  'msu-msf',
  'auburn-msf',
  'ucsd-msf',
];

const FORBIDDEN_IDS = new Set([
  'ohiostate-msf',
  'ucsd-rady-msf',
  'illinois-tech-msf',
  'temple-msf',
  'lsu-msf',
  'santaclara-msf',
  'rit-msf',
  'arizona-msf',
  'chicago-booth-mif',
  'columbia-msfe',
  'tamu-qfin',
  'florida-msf',
  'florida-msft',
]);

const TUITION_LOCK = {
  'bc-msf': 71940,
  'cgu-msf': 66240,
  'illinois-msf': 67800,
  'tamu-msf': null,
  'ohio-msf': 68093,
  'msu-msf': 51000,
  'auburn-msf': null,
  'ucsd-msf': 83876,
};

const RANK_LOCK = {
  'bc-msf': 17,
  'cgu-msf': 18,
  'illinois-msf': 19,
  'tamu-msf': 20,
  'ohio-msf': 21,
  'msu-msf': 22,
  'auburn-msf': 23,
  'ucsd-msf': 24,
};

/** Path outcome ids that must not become separate catalog rows. */
const ID_ALIAS_LEGACY = {
  'ohio-msf': ['ohiostate-msf'],
  'ucsd-msf': ['ucsd-rady-msf'],
};

/** Brief summer / non-autumn flags: CGU summer option; TAMU May mini-mester boot camps. */
const SUMMER_START = new Set(['cgu-msf', 'tamu-msf']);

const INGEST_SCH = ['SCH-107', 'SCH-109', 'SCH-110', 'SCH-111', 'SCH-112', 'SCH-113', 'SCH-114'];
const SKIP_SCH = new Set(['SCH-108', 'SCH-115']);

const UNIVERSITY = {
  'bc-msf': 'Boston College',
  'cgu-msf': 'Claremont Graduate University',
  'illinois-msf': 'University of Illinois Urbana-Champaign',
  'tamu-msf': 'Texas A&M University',
  'ohio-msf': 'The Ohio State University',
  'msu-msf': 'Michigan State University',
  'auburn-msf': 'Auburn University',
  'ucsd-msf': 'University of California, San Diego',
};

const DEGREE_LABEL = {
  'bc-msf': 'MS in Finance',
  'cgu-msf': 'MS in Finance',
  'illinois-msf': 'MS in Finance',
  'tamu-msf': 'MS in Finance (TAMU 4+1)',
  'ohio-msf': 'Specialized Master in Finance',
  'msu-msf': 'MS in Finance',
  'auburn-msf': 'MS in Finance',
  'ucsd-msf': 'Master of Quantitative Finance (MQF)',
};

const NOTE_SLUG = {
  'SCH-107': 'bc-msf-merit.md',
  'SCH-109': 'cgu-drucker-fellowships.md',
  'SCH-110': 'gies-msf-merit.md',
  'SCH-111': 'fisher-smf-merit.md',
  'SCH-112': 'fisher-smf-ga.md',
  'SCH-113': 'broad-msf-support.md',
  'SCH-114': 'rady-mqf-merit.md',
};

const EXISTING_MSF = [
  'mit-msf', 'princeton-msf', 'washu-msf', 'gsu-msf', 'usc-msf', 'brandeis-msf', 'utah-msf', 'texas-msf',
  'vanderbilt-msf', 'rochester-msf', 'florida-msf', 'asu-msf', 'uci-msf', 'villanova-msf', 'notredame-msf', 'utd-msf',
  'florida-msft',
];

const SCHOLARSHIP_FIELDS = [
  'id', 'name', 'scope', 'state', 'tone', 'type', 'description', 'eligibility', 'amount', 'deadline',
  'note', 'url', 'category', 'awardType', 'hkEligible', 'twEligible', 'intlEligible', 'prcEligible',
];

function assertInputs() {
  const ids = brief.items.map((item) => item.id);
  if (ids.join(',') !== CANONICAL.join(',')) {
    throw new Error(`Brief ids must be exactly ${CANONICAL.join(', ')}; got ${ids.join(', ')}`);
  }
  for (const id of ids) {
    if (FORBIDDEN_IDS.has(id)) throw new Error(`Refusing forbidden catalog id ${id}`);
    if (brief.items.find((item) => item.id === id).tfeRank2026 !== RANK_LOCK[id]) {
      throw new Error(`Rank lock failed for ${id}`);
    }
  }
  const costIds = Object.keys(costs).sort();
  const expectIds = [...CANONICAL].sort();
  if (costIds.join(',') !== expectIds.join(',')) {
    throw new Error(`Cost ids must match canonical 8; got ${costIds.join(', ')}`);
  }
  for (const id of CANONICAL) {
    if (costs[id].tuition !== TUITION_LOCK[id]) {
      throw new Error(`Tuition lock ${id}: expected ${TUITION_LOCK[id]}, got ${costs[id].tuition}`);
    }
  }
  if (costs['tamu-msf'].accessRestricted !== true) throw new Error('tamu-msf must be accessRestricted');
  if (costs['tamu-msf'].tuition !== null) throw new Error('tamu-msf tuition must stay null');
  if (costs['auburn-msf'].tuition !== null) throw new Error('auburn-msf sticker must stay null');
  if (costs['auburn-msf'].tuitionEstimate !== 35550) {
    throw new Error(`auburn-msf tuitionEstimate must be 35550, got ${costs['auburn-msf'].tuitionEstimate}`);
  }
  if (costs['ucsd-msf'].tuition !== 83876) throw new Error('ucsd-msf aid proxy must be 83876');
  const ingestIds = awardsHandoff.awards.filter((a) => a.ingest !== false).map((a) => a.id);
  if (ingestIds.join(',') !== INGEST_SCH.join(',')) {
    throw new Error(`Ingest SCH must be ${INGEST_SCH.join(', ')}; got ${ingestIds.join(', ')}`);
  }
  for (const id of SKIP_SCH) {
    const row = awardsHandoff.awards.find((a) => a.id === id);
    if (!row || row.ingest !== false) throw new Error(`${id} must be present with ingest:false and not written`);
  }
  for (const award of awardsHandoff.awards) {
    const n = Number(award.id.replace('SCH-', ''));
    if (n < 107 || n > 115) throw new Error(`Unexpected award id ${award.id}`);
  }
  for (const id of FORBIDDEN_IDS) {
    if (existingCatalog.some((row) => row.id === id && !['florida-msf', 'florida-msft'].includes(id))) {
      throw new Error(`Forbidden id already in catalog: ${id}`);
    }
  }
  for (const id of CANONICAL) {
    if (existingCatalog.some((row) => row.id === id)) throw new Error(`${id} already in catalog`);
  }
  if (!existingCatalog.some((row) => row.id === 'florida-msf' && row.rank === 11)) {
    throw new Error('florida-msf missing or rank changed');
  }
  if (!existingCatalog.some((row) => row.id === 'florida-msft' && row.rank === null)) {
    throw new Error('florida-msft missing or rank changed');
  }
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
  if (item.id === 'tamu-msf') {
    const open = (item.deadlines || []).find((d) => d.date === '2027-04-01');
    const note = open?.dateNote ? ` · ${open.dateNote}` : '';
    return {
      deadline: `2027–28 cycle opens · 2027-04-01 · TAMU undergrad 4+1 only (external / international N/A)${note}`,
      deadlineDate: '2027-04-01',
    };
  }
  const dls = item.deadlines || [];
  if (!dls.length && item.deadlinesNote) return { deadline: item.deadlinesNote, deadlineDate: null };
  const primary =
    dls.find((d) => d.date && /fall 2027/i.test(d.label) && /round 1|early|priority/i.test(d.label)) ||
    dls.find((d) => d.date && /fall 2027|autumn/i.test(d.label) && /priority|round 1|international final/i.test(d.label)) ||
    dls.find((d) => d.date && /round 1|early|priority/i.test(d.label)) ||
    dls.find((d) => d.date) ||
    dls[0];
  if (!primary) return { deadline: 'Fall 2027 deadline not verified', deadlineDate: null };
  const parts = [primary.label];
  if (primary.date) parts.push(primary.date);
  if (primary.timeNote) parts.push(primary.timeNote);
  if (primary.dateNote) parts.push(primary.dateNote);
  return { deadline: parts.join(' · '), deadlineDate: primary.date || null };
}

function normalizePeriod(rawPeriod, id) {
  const p = String(rawPeriod || '2026–27');
  if (/^2026–27/.test(p)) return p;
  if (id === 'ucsd-msf') return `2026–27 proxy (${p})`;
  if (id === 'cgu-msf') return `2026–27 · ${p}`;
  return `2026–27 · ${p}`;
}

function resolveStem(item, costRow) {
  if (item.stem === true || item.stem === false || item.stem === null) return item.stem;
  if (costRow.stem === true || costRow.stem === false || costRow.stem === null) return costRow.stem;
  return null;
}

function isSummer(id, costRow) {
  return SUMMER_START.has(id) || costRow.summerStart === true;
}

function buildCostDetail(id, item, costRow) {
  const chunks = [];
  if (costRow.tuitionEstimate != null) {
    chunks.push(
      `${costRow.tuitionEstimateLabel || 'Tuition estimate (not a program sticker)'}: $${costRow.tuitionEstimate.toLocaleString('en-US')}.`,
    );
  }
  if (costRow.tuitionAlt != null || item.tuitionAlt != null) {
    const alt = costRow.tuitionAlt ?? item.tuitionAlt;
    chunks.push(
      `Alternate format: ${costRow.tuitionAltLabel || item.tuitionAltLabel || 'alternate tuition'} $${alt.toLocaleString('en-US')}.`,
    );
  }
  if (costRow.fees != null) chunks.push(`Mandatory fees reference: $${costRow.fees.toLocaleString('en-US')}.`);
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (item.feesNote && !costRow.feesNote) chunks.push(item.feesNote);
  if (item.costNote && !costRow.notes) chunks.push(item.costNote);
  if (id === 'ucsd-msf') {
    chunks.push(
      'Brief dossier records a separate Fall 2026 cohort proxy of $88,036 (52 × $1,693/unit). Catalog tuition uses the aid Fall 2025 cohort proxy $83,876 (52 × $1,613/unit). Fall 2027 entering-cohort rate is unpublished.',
    );
  }
  if (id === 'tamu-msf') {
    chunks.push(
      'May mini-mester boot camps follow admission for the TAMU 4+1 pathway (summer structure; not an open external autumn matriculation). Do not merge with tamu-qfin / MS Quantitative Finance.',
    );
  }
  if (costRow.livingCostBand) {
    const { low, high, basis } = costRow.livingCostBand;
    const band = high != null
      ? `$${low.toLocaleString('en-US')}–$${high.toLocaleString('en-US')}`
      : `$${low.toLocaleString('en-US')}`;
    chunks.push(`Living cost band from official COA: ${band} (${basis}).`);
  }
  if (costRow.accessNote) chunks.push(costRow.accessNote);
  if (item.formatNote) chunks.push(item.formatNote);
  if (isSummer(id, costRow)) {
    chunks.push('SUMMER START — matriculation is not a standard autumn-only Fall intake.');
  }
  return chunks.join(' ');
}

function buildFundingNotes(id, programSchIds) {
  if (!programSchIds.length && id === 'tamu-msf') {
    return 'No verified program-tied scholarship for tamu-msf — Aggie 4+1 only, not open to external Fall 2027 admits (as of 2026-10-26).';
  }
  if (!programSchIds.length && id === 'auburn-msf') {
    return 'No verified open applicant-facing merit scholarship for auburn-msf (as of 2026-10-26). Loans pointer only; no SCH card.';
  }
  return `Program-tied funding verified ${awardsHandoff.asOf}: ${programSchIds.join(', ')}.`;
}

function buildResearchPatch(item) {
  const id = item.id;
  const costRow = costs[id];
  if (!costRow) throw new Error(`Missing cost row for ${id}`);
  const { deadline, deadlineDate } = formatDeadline(item);
  const programSchIds = ingestableAwards
    .filter((a) => (a.programIds || []).includes(id))
    .map((a) => a.id)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const period = normalizePeriod(costRow.period || item.period, id);
  let costNote = costRow.notes || item.costNote || '2026–27 reference, not a Fall 2027 quote or full-degree total.';
  if (!String(costNote).includes('2027')) costNote = `${costNote} Fall 2027 intake context.`;
  if (costRow.accessRestricted) {
    costNote = `ACCESS RESTRICTED (TAMU undergrad 4+1 only; external/international N/A). ${costNote}`;
  }
  if (isSummer(id, costRow) && !/SUMMER START/i.test(costNote)) {
    costNote = `SUMMER START. ${costNote}`;
  }

  const sources = (item.sources || []).map((pair) => [...pair]);
  if (costRow.sourceUrl) {
    const idx = sources.findIndex(([, u]) => u === costRow.sourceUrl);
    if (idx >= 0) sources[idx] = ['Official tuition / budget', costRow.sourceUrl];
    else sources.unshift(['Official tuition / budget', costRow.sourceUrl]);
  }
  for (let i = 0; i < sources.length; i++) {
    const [name, url] = sources[i];
    if (/cost|aid|tuition|rates|fees/i.test(url) && !/Tuition|tuition|budget/i.test(name)) {
      sources[i] = ['Official tuition / budget', url];
      break;
    }
  }
  for (const pair of costRow.sources || []) {
    if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
  }

  const patch = {
    academic: item.academic,
    orientation: item.orientation,
    duration: item.duration,
    tracks: item.tracks,
    coreNotes: item.coreNotes,
    credits: item.credits ?? null,
    stem: resolveStem(item, costRow),
    stemNote: item.stemNote || null,
    summerStart: isSummer(id, costRow),
    tuition: costRow.tuition,
    tuitionAlt: costRow.tuitionAlt ?? item.tuitionAlt ?? null,
    tuitionLabel: costRow.tuitionLabel || item.tuitionLabel || 'Tuition not yet verified',
    tuitionAltLabel: costRow.tuitionAltLabel || item.tuitionAltLabel || null,
    tuitionEstimate: costRow.tuitionEstimate ?? null,
    tuitionEstimateLabel: costRow.tuitionEstimateLabel ?? null,
    period,
    costNote,
    costDetail: buildCostDetail(id, item, costRow),
    funding: buildFundingNotes(id, programSchIds),
    fundingNotes: buildFundingNotes(id, programSchIds),
    livingCostBand: costRow.livingCostBand ?? null,
    deadline,
    deadlineDate,
    asOf: item.as_of || awardsHandoff.asOf,
    scholarships: programSchIds,
    sources,
    programUrl: item.sources?.[0]?.[1] || sources[0]?.[1],
  };

  if (ID_ALIAS_LEGACY[id]) patch.id_alias_legacy = ID_ALIAS_LEGACY[id];

  if (costRow.accessRestricted) {
    patch.accessRestricted = true;
    patch.accessNote = costRow.accessNote || 'Current Texas A&M undergraduates only (sophomores/seniors) per Mays 4+1 MS Finance and TAMU catalog.';
    patch.availability = 'TAMU undergrad 4+1 only · external / international N/A';
    patch.availabilityType = 'restricted';
  }

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
  if (next.includes("'ohiostate-msf':") || next.includes("'ucsd-rady-msf':")) {
    throw new Error('Alias ids must not become research keys');
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
    degree: DEGREE_LABEL[item.id],
    area: 'Finance',
    rank: item.tfeRank2026,
    academic: item.academic,
    programUrl,
  };
  if (ID_ALIAS_LEGACY[item.id]) row.id_alias_legacy = ID_ALIAS_LEGACY[item.id];
  return row;
}

function appendCatalog(rows) {
  const before = readFileSync(catalogPath, 'utf8');
  const floridaMsf = before.match(/\{\s*"id": "florida-msf"[\s\S]*?\n  \}/);
  const floridaMsft = before.match(/\{\s*"id": "florida-msft"[\s\S]*?\n  \}/);
  if (!floridaMsf || !floridaMsft) throw new Error('Could not snapshot florida catalog rows');
  const body = rows
    .map((row) => JSON.stringify(row, null, 2).replace(/^/gm, '  '))
    .join(',\n');
  if (!before.trimEnd().endsWith('];')) throw new Error('Unexpected catalog ending');
  const idx = before.lastIndexOf('\n];');
  const next = `${before.slice(0, idx)},\n${body}${before.slice(idx)}`;
  if (!next.includes(floridaMsf[0]) || !next.includes(floridaMsft[0])) {
    throw new Error('florida-msf / florida-msft catalog rows would change; aborting');
  }
  for (const id of ['ohiostate-msf', 'ucsd-rady-msf', 'tamu-qfin', ...FORBIDDEN_IDS]) {
    if (id === 'florida-msf' || id === 'florida-msft') continue;
    if (next.includes(`"id": "${id}"`)) throw new Error(`Forbidden catalog id written: ${id}`);
  }
  writeFileSync(catalogPath, next);
}

function appendScholarships(awards) {
  const text = readFileSync(dataPath, 'utf8');
  const marker = "id: 'SCH-104'";
  const idx = text.lastIndexOf(marker);
  if (idx < 0) throw new Error('Could not locate SCH-104 to append batch3 awards');
  const end = text.indexOf('\n];', idx);
  if (end < 0) throw new Error('Could not locate scholarships closing');
  const lines = awards.map((award) => fmtScholarship(toSiteAward(award))).join(',\n');
  const next = `${text.slice(0, end)},\n${lines}${text.slice(end)}`;
  if (next.includes("id: 'SCH-108'") || next.includes("id: 'SCH-115'")) {
    throw new Error('Skipped SCH-108 / SCH-115 must not be written to data.js');
  }
  if (next.includes("id: 'SCH-116'")) throw new Error('SCH-116+ must not be written');
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
  if (/ranks 1–24 ingested/.test(text)) return;
  const next = text.replace(
    /note: 'Batch 1–2 \(2026-10-26\): TFE Times 2026 ranks 1–16 ingested\.[^']*'/,
    "note: 'Batch 1–3 (2026-10-26): TFE Times 2026 ranks 1–24 ingested. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE programs remain on a separate track.'",
  );
  if (next === text) throw new Error('Could not update Finance ranking note in rankings.js');
  writeFileSync(rankingsPath, next);
}

assertInputs();

const ingestableAwards = awardsHandoff.awards.filter((a) => a.ingest !== false);
const researchBefore = readFileSync(researchPath, 'utf8');
const snapshots = snapshotBlocks(researchBefore, EXISTING_MSF);

const patches = {};
for (const item of brief.items) patches[item.id] = buildResearchPatch(item);

if (patches['tamu-msf'].accessRestricted !== true) throw new Error('tamu patch must be accessRestricted');
if (patches['tamu-msf'].tuition !== null) throw new Error('tamu patch tuition must be null');
if (patches['tamu-msf'].availabilityType !== 'restricted') throw new Error('tamu availabilityType');
if (patches['auburn-msf'].tuition !== null || patches['auburn-msf'].tuitionEstimate !== 35550) {
  throw new Error('auburn patch tuition/estimate mismatch');
}
if (patches['ucsd-msf'].tuition !== 83876) throw new Error('ucsd patch tuition mismatch');
if (!patches['cgu-msf'].summerStart || !patches['tamu-msf'].summerStart) {
  throw new Error('cgu-msf and tamu-msf must be summerStart');
}
if (patches['bc-msf'].summerStart || patches['illinois-msf'].summerStart) {
  throw new Error('Spring entry is not a summer start');
}

for (const award of ingestableAwards) writeOpportunityMarkdown(award);
appendCatalog(brief.items.map(catalogRow));
appendScholarships(ingestableAwards);
appendResearch(patches, snapshots);
updateRankingsNote();

const researchAfter = readFileSync(researchPath, 'utf8');
for (const id of EXISTING_MSF) {
  if (!researchAfter.includes(snapshots[id])) throw new Error(`${id} research detail changed`);
}

console.log(
  `MSF batch3: ${CANONICAL.length} catalog rows (ranks 17–24), ${ingestableAwards.length} awards (${INGEST_SCH.join(', ')}), skipped ${[...SKIP_SCH].join(', ')}. Aliases ohio-msf←ohiostate-msf, ucsd-msf←ucsd-rady-msf. tamu-msf accessRestricted.`,
);
