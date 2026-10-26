#!/usr/bin/env node
/** MSF batch 2: catalog rows, research-details, costs, SCH-096–104, opportunity notes. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { scholarships as existingScholarships, programs as existingPrograms } from '../dist/data.js';
import { rankedSchools as existingCatalog } from '../dist/catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-batch2.json'), 'utf8'));
const costPayload = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch2/batch2-costs.json'), 'utf8'));
const costs = Object.fromEntries(
  Object.entries(costPayload).filter(([k]) => !k.startsWith('_')),
);
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch2/batch2-awards.json'), 'utf8'));

const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');
const catalogPath = path.join(root, 'dist/catalog.js');
const rankingsPath = path.join(root, 'dist/rankings.js');
const opportunitiesDir = path.join(root, '04-scholarships/opportunities');

const SUMMER_START = new Set(['villanova-msf', 'notredame-msf', 'utd-msf']);

const UNIVERSITY = {
  'vanderbilt-msf': 'Vanderbilt University',
  'rochester-msf': 'University of Rochester',
  'florida-msf': 'University of Florida',
  'asu-msf': 'Arizona State University',
  'uci-msf': 'University of California, Irvine',
  'villanova-msf': 'Villanova University',
  'notredame-msf': 'University of Notre Dame',
  'utd-msf': 'The University of Texas at Dallas',
};

const DEGREE_LABEL = {
  'vanderbilt-msf': 'MS in Finance',
  'rochester-msf': 'Full-Time MS in Finance',
  'florida-msf': 'MS in Finance (UF combination)',
  'asu-msf': 'MS in Finance (MS-FIN)',
  'uci-msf': 'Master of Finance (MFin)',
  'villanova-msf': 'MS in Finance',
  'notredame-msf': 'MS in Finance',
  'utd-msf': 'MS in Finance',
};

const NOTE_SLUG = {
  'SCH-096': 'owen-msfinance-merit.md',
  'SCH-097': 'simon-ms-merit.md',
  'SCH-098': 'simon-eastman-circle.md',
  'SCH-099': 'asu-msfin-scholarships.md',
  'SCH-100': 'uci-mfin-scholarships.md',
  'SCH-101': 'villanova-msf-merit.md',
  'SCH-102': 'villanova-msf-fellows.md',
  'SCH-103': 'notredame-msf-scholarships.md',
  'SCH-104': 'utd-msf-cohort-scholarships.md',
};

const MBA_OVERLAP = {
  'vanderbilt-msf': 'SCH-051',
  'asu-msf': 'SCH-031',
  'utd-msf': 'SCH-057',
};

const ingestableAwards = awardsHandoff.awards.filter((a) => a.ingest !== false);

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
  'prcEligible',
];

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

function schNum(id) {
  return Number(id.replace('SCH-', ''));
}

function mergeScholarships(existing, incoming) {
  const byId = new Map(existing.map((s) => [s.id, s]));
  for (const raw of incoming) {
    const id = raw.id;
    if (!/^SCH-\d+$/.test(id)) throw new Error(`Unexpected award id ${id}`);
    const n = schNum(id);
    if (n < 96 || n > 104) throw new Error(`MSF batch2 expects SCH-096–104 ingest; got ${id}`);
    const prev = byId.get(id);
    byId.set(id, prev ? { ...prev, ...toSiteAward(raw) } : toSiteAward(raw));
  }
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

function toSiteAward(raw) {
  const row = {};
  for (const k of SCHOLARSHIP_FIELDS) {
    if (raw[k] !== undefined && k !== 'note') row[k] = raw[k];
  }
  row.note = `04-scholarships/opportunities/${NOTE_SLUG[raw.id]}`;
  return row;
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

function formatDeadline(item) {
  const dls = item.deadlines || [];
  if (!dls.length && item.deadlinesNote) {
    return { deadline: item.deadlinesNote, deadlineDate: null };
  }
  const primary =
    dls.find((d) => d.date && /round 1|early|priority/i.test(d.label)) ||
    dls.find((d) => d.date) ||
    dls[0];
  if (!primary) return { deadline: 'Fall 2027 deadline not verified', deadlineDate: null };
  const parts = [primary.label];
  if (primary.date) parts.push(primary.date);
  if (primary.timeNote) parts.push(primary.timeNote);
  if (primary.dateNote) parts.push(primary.dateNote);
  return {
    deadline: parts.join(' · '),
    deadlineDate: primary.date || null,
  };
}

function normalizePeriod(rawPeriod, id) {
  const p = String(rawPeriod || '2026–27');
  if (/^2026–27/.test(p)) return p;
  if (id === 'uci-msf') return `2026–27 proxy (${p})`;
  if (/as published/i.test(p)) return `2026–27 · ${p}`;
  return `2026–27 · ${p}`;
}

function buildCostDetail(id, item, costRow) {
  const chunks = [];
  if (costRow.tuitionEstimate != null) {
    chunks.push(
      `${costRow.tuitionEstimateLabel || 'Tuition estimate (not a program sticker)'}: $${costRow.tuitionEstimate.toLocaleString('en-US')}.`,
    );
  }
  if (costRow.tuitionAlt != null) {
    chunks.push(
      `Alternate format: ${costRow.tuitionAltLabel || 'alternate tuition'} $${costRow.tuitionAlt.toLocaleString('en-US')}.`,
    );
  }
  if (costRow.fees != null) chunks.push(`Mandatory fees reference: $${costRow.fees.toLocaleString('en-US')}.`);
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (item.feesNote && !costRow.feesNote) chunks.push(item.feesNote);
  if (item.costNote && !costRow.notes) chunks.push(item.costNote);
  if (costRow.livingCostBand) {
    const { low, high, basis } = costRow.livingCostBand;
    const band =
      high != null
        ? `$${low.toLocaleString('en-US')}–$${high.toLocaleString('en-US')}`
        : `$${low.toLocaleString('en-US')}`;
    chunks.push(`Living cost band from official COA: ${band} (${basis}).`);
  }
  if (costRow.accessNote) chunks.push(costRow.accessNote);
  if (item.formatNote) chunks.push(item.formatNote);
  if (SUMMER_START.has(id)) {
    chunks.push('SUMMER START — matriculation is not a standard autumn-only Fall intake.');
  }
  return chunks.join(' ');
}

function buildFundingNotes(id, programSchIds) {
  const overlap = MBA_OVERLAP[id];
  const overlapNote = overlap ? ` MBA-only merit (${overlap}) is not attached to this MSF route.` : '';
  const names = programSchIds.join(', ');
  return `Program-tied funding verified ${awardsHandoff.asOf}: ${names}.${overlapNote}`;
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
  if (!costNote.includes('2027') && id !== 'florida-msf') costNote = `${costNote} Fall 2027 intake context.`;
  if (SUMMER_START.has(id) && !/SUMMER START/i.test(costNote)) {
    costNote = `SUMMER START. ${costNote}`;
  }
  if (costRow.accessRestricted) {
    costNote = `ACCESS RESTRICTED (UF undergrad combination only; external/international N/A). ${costNote}`;
  }

  const sources = [...(item.sources || [])];
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
  if (costRow.sources) {
    for (const pair of costRow.sources) {
      if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
    }
  }

  const patch = {
    academic: item.academic,
    orientation: item.orientation,
    duration: item.duration,
    tracks: item.tracks,
    coreNotes: item.coreNotes,
    credits: item.credits ?? null,
    stem: item.stem ?? costRow.stem ?? null,
    summerStart: SUMMER_START.has(id),
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
    programUrl: sources[0]?.[1] || item.sources?.[0]?.[1],
  };

  if (costRow.accessRestricted) {
    patch.accessRestricted = true;
    patch.accessNote = costRow.accessNote || 'Current UF undergraduates only per program admissions page.';
    patch.availability = 'UF undergrad combination only · external / international N/A';
    patch.availabilityType = 'restricted';
  }

  return patch;
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
    if (v === undefined) continue;
    lines.push(`${pad1}${k}: ${serialize(v, indent + 1)},`);
  }
  lines.push(`${pad}}`);
  return lines.join('\n');
}

async function loadResearchDetails() {
  const mod = await import(pathToFileURL(researchPath).href);
  return mod.researchDetails;
}

async function writeResearchDetails(patches) {
  const main = await loadResearchDetails();
  const out = { ...main };
  for (const [id, patch] of Object.entries(patches)) {
    out[id] = { ...(main[id] || {}), ...patch };
  }

  const header = readFileSync(researchPath, 'utf8').split('export const researchDetails')[0];
  const original = readFileSync(researchPath, 'utf8');
  const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map((m) => m[1]);
  for (const id of Object.keys(patches)) {
    if (!keyOrder.includes(id)) keyOrder.push(id);
  }
  const entries = keyOrder.map((id) => {
    if (!out[id]) throw new Error(`Missing research detail for ${id}`);
    return `  '${id}': ${serialize(out[id], 1)},`;
  });
  writeFileSync(researchPath, `${header}export const researchDetails = {\n${entries.join('\n')}\n};\n`);
}

function writeOpportunityMarkdown(award) {
  const slug = NOTE_SLUG[award.id];
  if (!slug) throw new Error(`No markdown slug for ${award.id}`);
  mkdirSync(opportunitiesDir, { recursive: true });
  const sources = (award.sources || [])
    .map((s) => `- [${s.label}](${s.url})`)
    .join('\n');
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

function buildCatalogRows() {
  const existingIds = new Set(existingCatalog.map((r) => r.id));
  const toAdd = brief.items.filter((item) => !existingIds.has(item.id));
  if (!toAdd.length) return existingCatalog;
  const rows = toAdd.map((item) => {
    const programUrl = item.sources?.[0]?.[1];
    if (!programUrl) throw new Error(`Missing programUrl for ${item.id}`);
    return {
      id: item.id,
      university: UNIVERSITY[item.id],
      short: item.school,
      degree: DEGREE_LABEL[item.id],
      area: 'Finance',
      rank: item.tfeRank2026,
      academic: item.academic,
      programUrl,
    };
  });
  return [...existingCatalog, ...rows];
}

function writeCatalog(rows) {
  writeFileSync(catalogPath, `export const rankedSchools = ${JSON.stringify(rows, null, 2)};\n`);
}

function updateRankingsNote() {
  const text = readFileSync(rankingsPath, 'utf8');
  if (/ranks 1–16 ingested/.test(text)) return;
  const next = text.replace(
    /note: 'Batch 1 \(2026-10-26\): TFE Times 2026 ranks 1–8 ingested\.[^']*'/,
    "note: 'Batch 1–2 (2026-10-26): TFE Times 2026 ranks 1–16 ingested. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE programs remain on a separate track.'",
  );
  if (next === text) throw new Error('Could not update Finance ranking note in rankings.js');
  writeFileSync(rankingsPath, next);
}

const patches = {};
for (const item of brief.items) {
  patches[item.id] = buildResearchPatch(item);
}

for (const award of ingestableAwards) {
  writeOpportunityMarkdown(award);
}

const catalogRows = buildCatalogRows();
if (catalogRows.length !== existingCatalog.length) writeCatalog(catalogRows);
updateRankingsNote();

const mergedScholarships = mergeScholarships(existingScholarships, ingestableAwards);
writeDataJs(mergedScholarships);
await writeResearchDetails(patches);

const financeCount = existingPrograms.filter((p) => p.area === 'Finance').length;
if (financeCount !== 8) {
  console.warn(`Note: re-run npm run build after catalog write (Finance programs was ${financeCount}, expect 16 after build).`);
}

console.log(
  `MSF batch2: ${Object.keys(patches).length} catalog rows + research patches, ${ingestableAwards.length} awards (SCH-096–104), scholarships total ${mergedScholarships.length}.`,
);
