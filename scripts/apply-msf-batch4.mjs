#!/usr/bin/env node
/** MSF batch 4: TFE Times 2026 ranks 25–30 plus locked unranked adds. Does not rewrite batch1–3 or florida rows. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-batch4.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch4/batch4-costs.json'), 'utf8'));
const costs = Object.fromEntries(Object.entries(costPayload).filter(([k]) => !k.startsWith('_')));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch4/batch4-awards.json'), 'utf8'));

const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');
const rankingsPath = path.join(root, 'dist/rankings.js');
const opportunitiesDir = path.join(root, '04-scholarships/opportunities');

const CANONICAL = [
  'iit-msf',
  'temple-msf',
  'lsu-msf',
  'santaclara-msf',
  'rit-msf',
  'arizona-msf',
  'chicago-booth-mif',
  'columbia-msfe',
];

const FORBIDDEN_IDS = new Set([
  'illinois-tech-msf',
  'tamu-qfin',
  'ohiostate-msf',
  'ucsd-rady-msf',
  'florida-msf',
  'florida-msft',
]);

const TUITION_LOCK = {
  'iit-msf': 57750,
  'temple-msf': 34950,
  'lsu-msf': null,
  'santaclara-msf': 56916,
  'rit-msf': null,
  'arizona-msf': 47500,
  'chicago-booth-mif': 123470,
  'columbia-msfe': 155032,
};

const RANK_LOCK = {
  'iit-msf': 25,
  'temple-msf': 26,
  'lsu-msf': 27,
  'santaclara-msf': 28,
  'rit-msf': 29,
  'arizona-msf': 30,
  'chicago-booth-mif': null,
  'columbia-msfe': null,
};

/** Path outcome id that must not become a second catalog row. */
const ID_ALIAS_LEGACY = {
  'iit-msf': ['illinois-tech-msf'],
};

const INGEST_SCH = ['SCH-116', 'SCH-118', 'SCH-120', 'SCH-121', 'SCH-123', 'SCH-125', 'SCH-126', 'SCH-127'];
const SKIP_SCH = ['SCH-117', 'SCH-119', 'SCH-122', 'SCH-124'];
const MBA_ONLY_SCH = ['SCH-034', 'SCH-035', 'SCH-036', 'SCH-037'];

const UNIVERSITY = {
  'iit-msf': 'Illinois Institute of Technology',
  'temple-msf': 'Temple University',
  'lsu-msf': 'Louisiana State University',
  'santaclara-msf': 'Santa Clara University',
  'rit-msf': 'Rochester Institute of Technology',
  'arizona-msf': 'University of Arizona',
  'chicago-booth-mif': 'University of Chicago',
  'columbia-msfe': 'Columbia University',
};

const DEGREE_LABEL = {
  'iit-msf': 'Illinois Tech Stuart MS Finance',
  'temple-msf': 'MS in Financial Analysis (Fox)',
  'lsu-msf': 'MS in Finance',
  'santaclara-msf': 'MS in Finance & Analytics (MSFA)',
  'rit-msf': 'MS in Finance',
  'arizona-msf': 'MS in Finance',
  'chicago-booth-mif': 'Asness and Liew Master in Finance (MiF)',
  'columbia-msfe': 'MS in Financial Economics (MSFE)',
};

const NOTE_SLUG = {
  'SCH-116': 'iit-stuart-graduate-merit.md',
  'SCH-118': 'temple-fox-merit.md',
  'SCH-120': 'scu-msfa-merit.md',
  'SCH-121': 'scu-deans-merit.md',
  'SCH-123': 'rit-grad-tuition-scholarships.md',
  'SCH-125': 'arizona-eller-msf-merit.md',
  'SCH-126': 'booth-mif-merit.md',
  'SCH-127': 'columbia-msfe-fellowships.md',
};

const CALENDAR_FLAG = {
  'iit-msf':
    'SUMMER TERM UNCONFIRMED: the university graduate calendar lists a Summer term; Stuart MSF summer admits are not confirmed on the program page.',
  'temple-msf':
    'NON-AUTUMN: August Finance Academy kickoff before Fall modules (not a full summer-only matriculation).',
  'chicago-booth-mif':
    'AUTUMN MATRICULATION with a summer internship between academic terms (not a summer start). Tuition is the Autumn 2026 matriculant proxy until the Autumn 2027 rate is published.',
  'columbia-msfe':
    'AUTUMN MATRICULATION (late August) with a summer internship between academic terms (not a summer start).',
};

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
    if (brief.items.filter((item) => item.id === id).length !== 1) throw new Error(`Duplicate brief id ${id}`);
  }
  const costIds = Object.keys(costs).sort();
  if (costIds.join(',') !== [...CANONICAL].sort().join(',')) {
    throw new Error(`Cost ids must match canonical 8; got ${costIds.join(', ')}`);
  }
  for (const id of CANONICAL) {
    if (costs[id].tuition !== TUITION_LOCK[id]) {
      throw new Error(`Tuition lock ${id}: expected ${TUITION_LOCK[id]}, got ${costs[id].tuition}`);
    }
    if (costs[id].tuition === 0 || costs[id].tuitionEstimate === 0) {
      throw new Error(`${id} must not coerce a missing sticker to 0`);
    }
  }
  if (costs['lsu-msf'].tuition !== null || costs['lsu-msf'].tuitionEstimate !== 46311) {
    throw new Error('lsu-msf must keep a null sticker and tuitionEstimate 46311');
  }
  if (costs['rit-msf'].tuition !== null || costs['rit-msf'].tuitionEstimate != null) {
    throw new Error('rit-msf sticker and tuitionEstimate must stay null');
  }
  if (costs['rit-msf'].livingCostBand?.low !== 20386) throw new Error('rit-msf living band must be 20386');
  if (costs['temple-msf'].fees !== 750) throw new Error('temple-msf program fee must be 750');
  if (costs['arizona-msf'].tuition !== 47500) throw new Error('arizona-msf NR tuition lock');
  if (costs['arizona-msf'].altTuition?.arizonaResidentMatrix !== 27200) {
    throw new Error('arizona-msf resident matrix must be 27200');
  }
  const azBrief = brief.items.find((item) => item.id === 'arizona-msf');
  if (azBrief.tuitionAlt !== 27200) throw new Error('arizona-msf brief tuitionAlt must be 27200');
  if (costs['chicago-booth-mif'].fees !== 2674) throw new Error('booth fees lock');
  if (costs['columbia-msfe'].fees !== 11517) throw new Error('columbia fees lock');
  if (costs['iit-msf'].summerStart !== null) throw new Error('iit summer admits must stay unconfirmed (null)');
  if (costs['temple-msf'].summerStart !== false) throw new Error('temple August academy is not a summerStart flag');
  if (costs['chicago-booth-mif'].summerStart !== false || costs['columbia-msfe'].summerStart !== false) {
    throw new Error('Booth and Columbia matriculate in autumn');
  }

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
    if (n < 116 || n > 127) throw new Error(`Unexpected award id ${award.id}`);
    if (MBA_ONLY_SCH.includes(award.id)) throw new Error(`Refusing MBA-only award ${award.id}`);
    if ((award.programIds || []).includes('lsu-msf')) throw new Error('No lsu-msf SCH card');
    const programsOnAward = award.programIds || [];
    if (programsOnAward.some((id) => id === 'chicago-booth-mif' || id === 'columbia-msfe')) {
      if (!['SCH-126', 'SCH-127'].includes(award.id)) {
        throw new Error(`Unexpected award attached to Booth/Columbia: ${award.id}`);
      }
    }
    if (award.ingest !== false && programsOnAward.length !== 1) {
      throw new Error(`${award.id} must name exactly one program`);
    }
  }
  if (awardsHandoff.awards.find((a) => a.id === 'SCH-126').programIds[0] !== 'chicago-booth-mif') {
    throw new Error('SCH-126 must be chicago-booth-mif only');
  }
  if (awardsHandoff.awards.find((a) => a.id === 'SCH-127').programIds[0] !== 'columbia-msfe') {
    throw new Error('SCH-127 must be columbia-msfe only');
  }

  for (const id of CANONICAL) {
    if (existingCatalog.some((row) => row.id === id)) throw new Error(`${id} already in catalog`);
  }
  if (existingCatalog.some((row) => row.id === 'illinois-tech-msf')) {
    throw new Error('illinois-tech-msf must not already be a catalog row');
  }
  const florida = existingCatalog.find((row) => row.id === 'florida-msf');
  const fintech = existingCatalog.find((row) => row.id === 'florida-msft');
  const tamu = existingCatalog.find((row) => row.id === 'tamu-msf');
  if (!florida || florida.rank !== 11) throw new Error('florida-msf missing or rank changed');
  if (!fintech || fintech.rank !== null) throw new Error('florida-msft missing or rank changed');
  if (!tamu || tamu.rank !== 20) throw new Error('tamu-msf missing or rank changed');
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
  const dls = item.deadlines || [];
  const byLabel = (label) => dls.find((d) => d.label === label);
  let primary = null;
  if (item.id === 'iit-msf') primary = byLabel('Fall — Priority 1');
  else if (item.id === 'temple-msf') primary = byLabel('Early admissions');
  else if (item.id === 'lsu-msf') primary = byLabel('Fall admission (Graduate School)');
  else if (item.id === 'santaclara-msf') primary = byLabel('Fall on-campus — Priority');
  else if (item.id === 'rit-msf') primary = dls[0];
  else if (item.id === 'arizona-msf') primary = byLabel('Fall Early Admission');
  else if (item.id === 'chicago-booth-mif') primary = byLabel('Early Review');
  else if (item.id === 'columbia-msfe') primary = byLabel('Application submission');
  if (!primary) throw new Error(`Missing primary deadline for ${item.id}`);
  const parts = [primary.label];
  if (primary.date) parts.push(primary.date);
  if (primary.timeNote) parts.push(primary.timeNote);
  if (primary.dateNote) parts.push(primary.dateNote);
  if (item.id === 'arizona-msf') {
    parts.push('Bullet list used; same page also mentions Dec 1 preferred intl / Feb 1 — confirm');
  }
  if (item.id === 'iit-msf') {
    parts.push('Summer term unconfirmed for Stuart MSF');
  }
  return { deadline: parts.join(' · '), deadlineDate: primary.date || null };
}

function normalizePeriod(rawPeriod, id) {
  const p = String(rawPeriod || '2026–27');
  if (id === 'chicago-booth-mif') {
    return `2026–27 proxy (Autumn 2026 matriculant total; Autumn 2027 rate not published) · ${p}`;
  }
  if (/^2026–27/.test(p)) return p;
  return `2026–27 · ${p}`;
}

function resolveStem(item, costRow) {
  if (item.stem === true || item.stem === false || item.stem === null) return item.stem;
  if (costRow.stem === true || costRow.stem === false || costRow.stem === null) return costRow.stem;
  return null;
}

function resolveSummerStart(costRow) {
  if (costRow.summerStart === true) return true;
  if (costRow.summerStart === false) return false;
  return null;
}

function resolveTuitionAlt(id, item) {
  if (id !== 'arizona-msf') return null;
  if (item.tuitionAlt !== 27200) throw new Error('arizona tuitionAlt lock');
  return 27200;
}

function buildCostDetail(id, item, costRow) {
  const chunks = [];
  if (typeof costRow.tuitionEstimate === 'number') {
    chunks.push(
      `${costRow.tuitionEstimateLabel || 'Tuition estimate (not a program sticker)'}: $${costRow.tuitionEstimate.toLocaleString('en-US')}.`,
    );
  }
  const alt = resolveTuitionAlt(id, item);
  if (alt != null) {
    chunks.push(
      `Alternate format: ${costRow.tuitionAltLabel || item.tuitionAltLabel || 'Arizona resident tuition'} $${alt.toLocaleString('en-US')}.`,
    );
  }
  if (id === 'chicago-booth-mif' && costRow.altTuition?.threeQuarterTuitionInCOATable != null) {
    chunks.push(
      `Three-quarter COA table tuition (not the four-quarter program total): $${costRow.altTuition.threeQuarterTuitionInCOATable.toLocaleString('en-US')}. Catalog tuition is the Autumn 2026 four-quarter total proxy.`,
    );
  }
  if (id === 'rit-msf' && costRow.altTuition?.perCreditUnder12 != null) {
    chunks.push(
      `No flat program sticker. Graduate billing: $${costRow.altTuition.perCreditUnder12.toLocaleString('en-US')}/credit when under 12 credits per semester, or $${costRow.altTuition.fixedRate12to18PerSemester.toLocaleString('en-US')} per semester for 12–18 credits. Total depends on credit pacing; Finance MS credit hours are not stated on the program page.`,
    );
  }
  if (id === 'columbia-msfe') {
    chunks.push(
      'CF-BLOCKED VERIFY: $155,032 = 2 × $77,516 from a jina fetch of the official MS programs costs URL after Cloudflare blocked direct curl. Re-verify in a browser before relying on the figure.',
    );
  }
  if (typeof costRow.fees === 'number') chunks.push(`Mandatory fees reference: $${costRow.fees.toLocaleString('en-US')}.`);
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (item.feesNote && !costRow.feesNote) chunks.push(item.feesNote);
  if (item.costNote && !costRow.notes) chunks.push(item.costNote);
  if (costRow.livingCostBand) {
    const { low, high, basis } = costRow.livingCostBand;
    const band = high != null
      ? `$${low.toLocaleString('en-US')}–$${high.toLocaleString('en-US')}`
      : `$${low.toLocaleString('en-US')}`;
    chunks.push(`Living cost band from official COA: ${band} (${basis}).`);
  }
  if (CALENDAR_FLAG[id]) chunks.push(CALENDAR_FLAG[id]);
  return chunks.join(' ');
}

function buildFundingNotes(id, programSchIds) {
  if (id === 'lsu-msf') {
    return 'No lsu-msf scholarship card. Department: no master’s assistantships for the coming academic year; no verified open merit process or amounts (as of 2026-10-26).';
  }
  const base = programSchIds.length
    ? `Program-tied funding verified ${awardsHandoff.asOf}: ${programSchIds.join(', ')}.`
    : `No verified program-tied scholarship (as of ${awardsHandoff.asOf}).`;
  if (id === 'chicago-booth-mif' || id === 'columbia-msfe') {
    return `${base} MBA-only Forté, ROMBA, Consortium, and Toigo awards (SCH-034–037) are not attached.`;
  }
  return base;
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
  if (CALENDAR_FLAG[id] && !costNote.includes(CALENDAR_FLAG[id])) {
    costNote = `${costNote} ${CALENDAR_FLAG[id]}`;
  }
  if (id === 'lsu-msf' && !/estimate/i.test(costNote)) {
    costNote = `${costNote} Non-resident Tier 2 tuition estimate (not a program sticker) is about $46,311.`;
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

  const tuitionAlt = resolveTuitionAlt(id, item);
  const patch = {
    academic: item.academic,
    orientation: item.orientation,
    duration: item.duration,
    tracks: item.tracks,
    coreNotes: item.coreNotes,
    credits: item.credits ?? null,
    stem: resolveStem(item, costRow),
    stemNote: item.stemNote || null,
    summerStart: resolveSummerStart(costRow),
    tuition: costRow.tuition,
    tuitionAlt,
    tuitionLabel: costRow.tuitionLabel || item.tuitionLabel || 'Tuition not yet verified',
    tuitionAltLabel: tuitionAlt == null ? null : (costRow.tuitionAltLabel || item.tuitionAltLabel || 'Arizona resident tuition — 9-month Tucson MSF (2026–27 matrix)'),
    tuitionEstimate: typeof costRow.tuitionEstimate === 'number' ? costRow.tuitionEstimate : null,
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
  if (next.includes("'illinois-tech-msf':")) throw new Error('Alias id must not become a research key');
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

function appendCatalog(rows, snapshots) {
  const before = readFileSync(catalogPath, 'utf8');
  const body = rows
    .map((row) => JSON.stringify(row, null, 2).replace(/^/gm, '  '))
    .join(',\n');
  if (!before.trimEnd().endsWith('];')) throw new Error('Unexpected catalog ending');
  const idx = before.lastIndexOf('\n];');
  const next = `${before.slice(0, idx)},\n${body}${before.slice(idx)}`;
  for (const id of Object.keys(snapshots)) {
    if (!next.includes(snapshots[id])) throw new Error(`${id} catalog row would change; aborting`);
  }
  if (next.includes('"id": "illinois-tech-msf"')) throw new Error('illinois-tech-msf must not be a catalog id');
  if (next.includes('"id": "tamu-qfin"')) throw new Error('tamu-qfin must not be written');
  for (const id of CANONICAL) {
    if (next.split(`"id": "${id}"`).length - 1 !== 1) throw new Error(`${id} catalog row must appear once`);
  }
  writeFileSync(catalogPath, next);
}

function appendScholarships(awards) {
  const text = readFileSync(dataPath, 'utf8');
  const marker = "id: 'SCH-114'";
  const idx = text.lastIndexOf(marker);
  if (idx < 0) throw new Error('Could not locate SCH-114 to append batch4 awards');
  const end = text.indexOf('\n];', idx);
  if (end < 0) throw new Error('Could not locate scholarships closing');
  const lines = awards.map((award) => fmtScholarship(toSiteAward(award))).join(',\n');
  const next = `${text.slice(0, end)},\n${lines}${text.slice(end)}`;
  for (const id of SKIP_SCH) {
    if (next.includes(`id: '${id}'`)) throw new Error(`Skipped ${id} must not be written to data.js`);
  }
  for (const id of MBA_ONLY_SCH) {
    const beforeCount = text.split(`id: '${id}'`).length - 1;
    const afterCount = next.split(`id: '${id}'`).length - 1;
    if (beforeCount !== afterCount) throw new Error(`${id} changed while appending batch4 awards`);
  }
  if (next.includes("id: 'SCH-128'")) throw new Error('SCH-128+ must not be written');
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
  const next = text.replace(
    /note: 'Batch 1–3 \(2026-10-26\): TFE Times 2026 ranks 1–24 ingested\.[^']*'/,
    "note: 'Batch 1–4 (2026-10-26): TFE Times 2026 ranks 1–30 ingested. Locked unranked adds on this slate: florida-msft, chicago-booth-mif, columbia-msfe. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE programs remain on a separate track.'",
  );
  if (next === text) throw new Error('Could not update Finance ranking note in rankings.js');
  if (!next.includes('1–30')) throw new Error('Ranking note must say ranks 1–30');
  writeFileSync(rankingsPath, next);
}

assertInputs();

const ingestableAwards = awardsHandoff.awards.filter((a) => a.ingest !== false);
const existingFinance = existingCatalog.filter((row) => row.area === 'Finance').map((row) => row.id);
const researchBefore = readFileSync(researchPath, 'utf8');
const catalogBefore = readFileSync(catalogPath, 'utf8');
const researchSnapshots = snapshotBlocks(researchBefore, existingFinance);
const catalogSnapshots = snapshotCatalog(catalogBefore, existingFinance);

const patches = {};
for (const item of brief.items) patches[item.id] = buildResearchPatch(item);

if (patches['iit-msf'].summerStart !== null) throw new Error('iit summerStart must stay null');
if (patches['temple-msf'].summerStart !== false) throw new Error('temple summerStart must stay false');
if (patches['chicago-booth-mif'].summerStart !== false || patches['columbia-msfe'].summerStart !== false) {
  throw new Error('Booth/Columbia summerStart must stay false');
}
if (patches['lsu-msf'].tuition !== null || patches['lsu-msf'].tuitionEstimate !== 46311) {
  throw new Error('lsu patch tuition/estimate mismatch');
}
if (patches['rit-msf'].tuition !== null || patches['rit-msf'].tuitionEstimate !== null) {
  throw new Error('rit patch must keep null sticker and null estimate');
}
if (patches['arizona-msf'].tuition !== 47500 || patches['arizona-msf'].tuitionAlt !== 27200) {
  throw new Error('arizona patch tuition mismatch');
}
if (patches['chicago-booth-mif'].tuition !== 123470) throw new Error('booth patch tuition mismatch');
if (patches['columbia-msfe'].tuition !== 155032) throw new Error('columbia patch tuition mismatch');
if (!/^2026–27/.test(patches['chicago-booth-mif'].period)) throw new Error('booth period must be labeled 2026–27');
if (!/Autumn 2026/.test(patches['chicago-booth-mif'].period)) throw new Error('booth period must label the Aut26 proxy');
if (!/CF-BLOCKED VERIFY/.test(patches['columbia-msfe'].costDetail)) throw new Error('columbia costDetail missing CF verify note');
if (!patches['iit-msf'].id_alias_legacy?.includes('illinois-tech-msf')) throw new Error('iit alias missing');
if (patches['lsu-msf'].scholarships.length !== 0) throw new Error('lsu must have no SCH ids');
for (const id of ['chicago-booth-mif', 'columbia-msfe']) {
  for (const sch of patches[id].scholarships) {
    if (MBA_ONLY_SCH.includes(sch)) throw new Error(`${sch} attached to ${id}`);
  }
}
for (const id of CANONICAL) {
  if (patches[id].tuition === 0 || patches[id].tuitionEstimate === 0) throw new Error(`${id} coerced to 0`);
}

for (const award of ingestableAwards) writeOpportunityMarkdown(award);
appendCatalog(brief.items.map(catalogRow), catalogSnapshots);
appendScholarships(ingestableAwards);
appendResearch(patches, researchSnapshots);
updateRankingsNote();

const researchAfter = readFileSync(researchPath, 'utf8');
const catalogAfter = readFileSync(catalogPath, 'utf8');
for (const id of existingFinance) {
  if (!researchAfter.includes(researchSnapshots[id])) throw new Error(`${id} research detail changed`);
  if (!catalogAfter.includes(catalogSnapshots[id])) throw new Error(`${id} catalog row changed`);
}

console.log(
  `MSF batch4: ${CANONICAL.length} catalog rows (TFE 25–30 + chicago-booth-mif, columbia-msfe). Alias iit-msf←illinois-tech-msf. Awards ${ingestableAwards.length} (${INGEST_SCH.join(', ')}); skipped ${SKIP_SCH.join(', ')}.`,
);
