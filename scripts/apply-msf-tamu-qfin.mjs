#!/usr/bin/env node
/** Singleton ingest: tamu-qfin (Texas A&M Mays / Math MS Quantitative Finance). Does not touch tamu-msf. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-tamu-qfin.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-tamu-qfin/tamu-qfin-costs.json'), 'utf8'));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-tamu-qfin/tamu-qfin-awards.json'), 'utf8'));

const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');

const ID = 'tamu-qfin';
const DEGREE = 'MS Quantitative Finance (MS-QFIN / STEM to Stocks)';
const PROGRAM_URL = 'https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/quantitative-finance-ms/';
const TUITION_SOURCE = 'https://sbs.tamu.edu/billing-payments/billing-fee-explanations/';
const PERIOD_PREFIX = '2026\u201327';

if (Math.round(36 * 836.4) !== 30110) throw new Error('NR base arithmetic drifted from 30110');
if (Math.round(36 * 286.89) !== 10328) throw new Error('Resident base arithmetic drifted from 10328');

if (brief.items?.length !== 1 || brief.items[0].id !== ID) {
  throw new Error(`Expected a single brief item ${ID}`);
}
const item = brief.items[0];
if (item.tfeRank2026 != null) throw new Error('Refusing to assign a TFE rank to tamu-qfin');
if (item.tuition !== null) throw new Error(`Brief tuition must stay null, got ${item.tuition}`);
if (item.tuitionAlt !== 15000) throw new Error(`Brief program fee must be 15000, got ${item.tuitionAlt}`);
if (item.stem != null) throw new Error('STEM must stay null (branding is not a CIP)');

const costRow = costPayload[ID];
if (!costRow) throw new Error('Missing tamu-qfin cost row');
if (costRow.tuition !== null) throw new Error(`Cost tuition must stay null, got ${costRow.tuition}`);
if (costRow.tuition === 0 || costRow.tuitionEstimate === 0 || costRow.fees === 0) {
  throw new Error('Refusing to coerce a missing cost to 0');
}
if (costRow.tuitionEstimate !== 30110) {
  throw new Error(`tuitionEstimate must be 30110, got ${costRow.tuitionEstimate}`);
}
if (!/estimate|NOT a published/i.test(costRow.tuitionEstimateLabel || '')) {
  throw new Error('tuitionEstimateLabel must say the figure is estimate-only');
}
if (costRow.altTuition?.programFeePerFallSpringSemester !== 15000) {
  throw new Error('Program fee must be 15000 per Fall & Spring semester');
}
if (costRow.altTuition?.nonResidentBaseTuition_36sch !== 30110) {
  throw new Error('NR base component must be 30110');
}
if (costRow.altTuition?.residentBaseTuition_36sch !== 10328) {
  throw new Error('Resident base component must be 10328');
}
if (costRow.accessRestricted !== false) throw new Error('tamu-qfin must be accessRestricted false');
if (costRow.fees != null) throw new Error('fees sum must stay null');
if (costRow.livingCostBand != null) throw new Error('livingCostBand must stay null');
if (costRow.stem != null) throw new Error('cost stem must stay null');
if (costRow.separateFrom?.id !== 'tamu-msf') throw new Error('Cost row must stay separate from tamu-msf');

if (!Array.isArray(awardsHandoff.awards) || awardsHandoff.awards.length !== 0) {
  throw new Error('tamu-qfin awards must be empty (no SCH cards)');
}
if ((awardsHandoff.counts?.schIdsUsed || []).length !== 0) {
  throw new Error('tamu-qfin must not consume SCH ids');
}
if ((awardsHandoff.counts?.awardsTotal ?? 0) !== 0) throw new Error('awardsTotal must be 0');

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

function buildCostNote() {
  const lead = 'No flat MS-QFIN tuition sticker (tuition null). Estimate only — not a published program total: nonresident graduate base tuition $30,110 = 36 × $836.40 (SBS 2026–27 Non-Resident GR). Excludes the $15,000 Quantitative Finance program fee per Fall & Spring semester, unsummed college fees, insurance, and living. Fall 2027 / AY 2027–28 rates are not locked.';
  const rest = costRow.notes || item.costNote || '';
  const note = rest ? `${lead} ${rest}` : lead;
  if (!note.includes('2027')) throw new Error('costNote must flag the Fall 2027 rate gap');
  if (!/estimate only/i.test(note)) throw new Error('costNote must keep the estimate-only label');
  return note;
}

function buildCostDetail() {
  const estimateLabel = String(costRow.tuitionEstimateLabel || 'Estimate only').replace(/\.\s*$/, '');
  const chunks = [
    `${estimateLabel}: $30,110.`,
    `Alternate format: ${item.tuitionAltLabel} $15,000.`,
    'Resident graduate base tuition estimate only (costDetail only — not a sticker and not tuitionAlt): 36 SCH × $286.89 = $10,328 (SBS 2026–27 Resident GR DoD).',
  ];
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (costRow.accessNote) chunks.push(costRow.accessNote);
  if (item.costNote) chunks.push(item.costNote);
  const detail = chunks.join(' ');
  if (!detail.includes('10,328') && !detail.includes('10328')) {
    throw new Error('Resident base estimate 10328 missing from costDetail');
  }
  if (!detail.includes('15,000') && !detail.includes('15000')) {
    throw new Error('Program fee missing from costDetail');
  }
  if (/\bfees?\b[^.]{0,40}\$0\b/i.test(detail)) throw new Error('costDetail must not coerce fees to $0');
  return detail;
}

function buildSources() {
  const sources = (item.sources || []).map((pair) => [...pair]);
  const markTuition = (url) => {
    const idx = sources.findIndex(([, u]) => u === url);
    if (idx >= 0) sources[idx] = ['Official tuition / budget', url];
    else sources.unshift(['Official tuition / budget', url]);
  };
  markTuition(TUITION_SOURCE);
  for (const pair of costRow.sources || []) {
    if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
  }
  const tfeUrl = 'https://tfetimes.com/best-finance-program-rankings/';
  if (!sources.some(([, u]) => u === tfeUrl)) sources.push(['TFE Times 2026 (not on classic MSF spine)', tfeUrl]);
  if (!sources.some(([name]) => /Tuition|tuition|budget/.test(name))) {
    throw new Error('Need an official tuition/budget source');
  }
  return sources;
}

function buildResearchPatch() {
  const sources = buildSources();
  const funding = 'No verified program-tied scholarship for tamu-qfin (as of 2026-10-26). Awards array empty. SCH ids consumed: none (reserve SCH-130+). Do not attach tamu-msf funding notes.';
  const deadline = 'Math GradCAS departmental dates (not a dedicated MS-QFIN Mays board; not tamu-msf 4+1): Fall international · 2027-05-15 · Fall domestic July 1; Spring international Sept 15 / domestic Dec 1. Confirm with the Mathematics department before filing. Fall 2027 billing rates not locked';
  return {
    academic: item.academic,
    orientation: item.orientation,
    duration: item.duration,
    tracks: item.tracks,
    coreNotes: item.coreNotes,
    credits: item.credits ?? null,
    stem: null,
    stemNote: null,
    summerStart: null,
    tuition: null,
    tuitionAlt: 15000,
    tuitionLabel: 'No flat sticker · estimate only (not program tuition)',
    tuitionAltLabel: item.tuitionAltLabel,
    tuitionEstimate: 30110,
    tuitionEstimateLabel: costRow.tuitionEstimateLabel,
    fees: null,
    period: `${PERIOD_PREFIX} · ${String(costRow.period).replace(/\.\s*$/, '')}`,
    costNote: buildCostNote(),
    costDetail: buildCostDetail(),
    funding,
    fundingNotes: funding,
    livingCostBand: null,
    deadline,
    deadlineDate: '2027-05-15',
    asOf: item.as_of || awardsHandoff.asOf,
    scholarships: [],
    sources,
    programUrl: PROGRAM_URL,
    accessRestricted: false,
    accessNote: costRow.accessNote,
    availability: 'External / international open via Math GradCAS · non-TAMU graduates eligible',
    availabilityType: 'verify',
  };
}

function catalogRow() {
  const programUrl = item.sources?.[0]?.[1];
  if (programUrl !== PROGRAM_URL) throw new Error(`Unexpected program URL ${programUrl}`);
  if (item.school !== 'Texas A&M Mays') throw new Error(`Unexpected school label ${item.school}`);
  return {
    id: ID,
    university: 'Texas A&M University',
    short: item.school,
    degree: DEGREE,
    area: 'Finance',
    rank: null,
    academic: item.academic,
    programUrl,
  };
}

function snapshotBlock(text, id, kind) {
  const pattern = kind === 'research'
    ? new RegExp(`\\n  '${id}': \\{[\\s\\S]*?\\n  \\},`)
    : new RegExp(`\\{\\s*"id": "${id}"[\\s\\S]*?\\n  \\}`);
  const match = text.match(pattern);
  if (!match) throw new Error(`Missing ${kind} snapshot for ${id}`);
  return match[0];
}

function withoutExistingQfin(text, kind) {
  if (kind === 'research') {
    return text.replace(new RegExp(`\\n  '${ID}': \\{[\\s\\S]*?\\n  \\},`), '');
  }
  return text.replace(new RegExp(`,\\n  \\{\\n    "id": "${ID}"[\\s\\S]*?\\n  \\}`), '');
}

const researchBefore = withoutExistingQfin(readFileSync(researchPath, 'utf8'), 'research');
const catalogBefore = withoutExistingQfin(readFileSync(catalogPath, 'utf8'), 'catalog');
if (researchBefore.includes(`'${ID}':`) || catalogBefore.includes(`"id": "${ID}"`)) {
  throw new Error(`${ID} block could not be replaced cleanly`);
}

const protectedIds = existingCatalog.filter((row) => row.area === 'Finance' && row.id !== ID).map((row) => row.id);
if (!protectedIds.includes('tamu-msf')) throw new Error('tamu-msf missing from catalog');
if (!protectedIds.includes('florida-msf') || !protectedIds.includes('florida-msft')) {
  throw new Error('florida rows missing from catalog');
}
const researchSnapshots = {};
const catalogSnapshots = {};
for (const id of protectedIds) {
  researchSnapshots[id] = snapshotBlock(researchBefore, id, 'research');
  catalogSnapshots[id] = snapshotBlock(catalogBefore, id, 'catalog');
}

const classic = existingCatalog.find((row) => row.id === 'tamu-msf');
if (classic.rank !== 20) throw new Error(`tamu-msf TFE rank changed: ${classic.rank}`);
if (classic.degree !== 'MS in Finance (TAMU 4+1)') throw new Error('tamu-msf degree label changed');
const florida = existingCatalog.find((row) => row.id === 'florida-msf');
if (florida.rank !== 11 || florida.degree !== 'MS in Finance (UF combination)') {
  throw new Error('florida-msf catalog lock drifted');
}

const patch = buildResearchPatch();
if (patch.tuition !== null || patch.tuitionEstimate !== 30110 || patch.tuitionAlt !== 15000) {
  throw new Error('Patch cost locks failed');
}
if (patch.fees !== null || patch.livingCostBand !== null || patch.stem !== null) {
  throw new Error('Patch must keep fees, living, and STEM null');
}
if (patch.accessRestricted !== false) throw new Error('Patch accessRestricted must be false');
if (patch.scholarships.length !== 0) throw new Error('Patch must not attach scholarships');
if (patch.funding.includes('Aggie') || patch.funding.includes('tamu-msf —')) {
  throw new Error('Refusing to copy tamu-msf funding notes');
}
if (patch.degree) throw new Error('Degree belongs on the catalog row, not the research patch');

const researchIdx = researchBefore.lastIndexOf('\n};\n');
if (researchIdx < 0) throw new Error('Could not locate researchDetails closing');
const researchBlock = `  '${ID}': ${serialize(patch, 1)},`;
const researchNext = `${researchBefore.slice(0, researchIdx)}\n${researchBlock}${researchBefore.slice(researchIdx)}`;
if (researchNext.slice(0, researchIdx) !== researchBefore.slice(0, researchIdx)) {
  throw new Error('Research prefix changed');
}
for (const id of protectedIds) {
  if (!researchNext.includes(researchSnapshots[id])) throw new Error(`${id} research detail changed`);
}
if (researchNext.split(`'${ID}':`).length - 1 !== 1) throw new Error('tamu-qfin research detail must appear once');
if (researchNext.split("'tamu-msf':").length - 1 !== 1) throw new Error('tamu-msf research key count changed');

const catalogIdx = catalogBefore.lastIndexOf('\n];');
if (catalogIdx < 0 || !catalogBefore.trimEnd().endsWith('];')) throw new Error('Unexpected catalog ending');
const catalogBody = JSON.stringify(catalogRow(), null, 2).replace(/^/gm, '  ');
const catalogNext = `${catalogBefore.slice(0, catalogIdx)},\n${catalogBody}${catalogBefore.slice(catalogIdx)}`;
if (catalogNext.slice(0, catalogIdx) !== catalogBefore.slice(0, catalogIdx)) {
  throw new Error('Catalog prefix changed');
}
for (const id of protectedIds) {
  if (!catalogNext.includes(catalogSnapshots[id])) throw new Error(`${id} catalog row changed`);
}
if (catalogNext.split(`"id": "${ID}"`).length - 1 !== 1) throw new Error('tamu-qfin catalog row must appear once');
if (catalogNext.split('"id": "tamu-msf"').length - 1 !== 1) throw new Error('tamu-msf catalog count changed');
const quantIds = ['tamu-mqf', 'tamu-mfe', 'columbia-mfe', 'baruch-mfe', 'cmu-mscf'];
for (const id of quantIds) {
  if (catalogNext.includes(`"id": "${id}"`) || researchNext.includes(`'${id}':`)) {
    throw new Error(`Quant/MFE id ${id} must not be written in this PR`);
  }
}

writeFileSync(researchPath, researchNext);
writeFileSync(catalogPath, catalogNext);

console.log('tamu-qfin ingested: rank null, tuition null, estimate 30110, program fee 15000/Fall&Spring, awards 0, tamu-msf untouched.');
