#!/usr/bin/env node
/** MSF batch 1: catalog research-details, costs, SCH-085–094, opportunity notes. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { scholarships as existingScholarships } from '../dist/data.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brief = JSON.parse(readFileSync(path.join(root, 'path/brief/msf-batch1.json'), 'utf8'));
const costs = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch1/batch1-costs.json'), 'utf8'));
const awardsHandoff = JSON.parse(readFileSync(path.join(root, 'path/aid/msf-batch1/batch1-awards.json'), 'utf8'));

const dataPath = path.join(root, 'dist/data.js');
const researchPath = path.join(root, 'dist/research-details.js');
const opportunitiesDir = path.join(root, '04-scholarships/opportunities');

const SUMMER_START = new Set(['mit-msf', 'texas-msf']);

const NOTE_SLUG = {
  'SCH-085': 'mit-mfin-fellowship.md',
  'SCH-086': 'princeton-mfin-fellowships.md',
  'SCH-087': 'olin-msf-merit.md',
  'SCH-088': 'gsu-msf-graduate-assistantships.md',
  'SCH-089': 'marshall-msf-scholarships.md',
  'SCH-090': 'brandeis-msf-merit.md',
  'SCH-091': 'utah-msf-merit.md',
  'SCH-092': 'utah-msf-community-impact.md',
  'SCH-093': 'mccombs-ms-program-scholarships.md',
  'SCH-094': 'mccombs-msf-flywheel.md',
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
    if (n < 85) throw new Error(`MSF batch expects SCH-085+; got ${id}`);
    if (n > 94) throw new Error(`Refusing award above SCH-094: ${id}`);
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
  if (!dls.length && item.deadlinesNote) return { deadline: item.deadlinesNote, deadlineDate: null };
  const primary =
    dls.find((d) => d.date && /final|application|priority|round 2/i.test(d.label)) ||
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
  if (id === 'usc-msf') return `2026–27 estimate (${p})`;
  if (id === 'washu-msf') return `2026–27 (${p})`;
  return `2026–27 · ${p}`;
}

function buildCostDetail(id, item, costRow) {
  const chunks = [];
  if (costRow.tuitionAlt != null) {
    chunks.push(
      `Alternate format: ${costRow.tuitionAltLabel || 'alternate tuition'} $${costRow.tuitionAlt.toLocaleString('en-US')}.`,
    );
  }
  if (costRow.feesNote) chunks.push(costRow.feesNote);
  if (costRow.notes) chunks.push(costRow.notes);
  if (item.feesNote && !costRow.feesNote) chunks.push(item.feesNote);
  if (item.costNote) chunks.push(item.costNote);
  if (costRow.livingCostBand) {
    const { low, high, basis } = costRow.livingCostBand;
    const band = high != null ? `$${low.toLocaleString('en-US')}–$${high.toLocaleString('en-US')}` : `$${low.toLocaleString('en-US')}`;
    chunks.push(`Living cost band from official COA: ${band} (${basis}).`);
  }
  if (item.formatNote) chunks.push(item.formatNote);
  if (SUMMER_START.has(id)) chunks.push('SUMMER START — matriculation is not a standard autumn-only Fall intake.');
  return chunks.join(' ');
}

function buildFundingNotes(id, programSchIds) {
  const names = programSchIds.map((sid) => sid).join(', ');
  return `Program-tied funding verified ${awardsHandoff.asOf}: ${names}. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.`;
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
  if (!costNote.includes('2027')) costNote = `${costNote} Fall 2027 intake context.`;
  if (SUMMER_START.has(id) && !/summer/i.test(costNote)) {
    costNote = `SUMMER START. ${costNote}`;
  }

  const sources = [...(item.sources || [])];
  if (costRow.sourceUrl) {
    const idx = sources.findIndex(([, u]) => u === costRow.sourceUrl);
    if (idx >= 0) sources[idx] = ['Official tuition / budget', costRow.sourceUrl];
    else sources.unshift(['Official tuition / budget', costRow.sourceUrl]);
  }
  for (let i = 0; i < sources.length; i++) {
    const [name, url] = sources[i];
    if (/cost|aid|tuition|rates/i.test(url) && !/Tuition|tuition|budget/i.test(name)) {
      sources[i] = ['Official tuition / budget', url];
      break;
    }
  }
  if (costRow.sources) {
    for (const pair of costRow.sources) {
      if (!sources.some(([, u]) => u === pair[1])) sources.push(pair);
    }
  }

  return {
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
    tuitionLabel: costRow.tuitionLabel || item.tuitionLabel,
    tuitionAltLabel: costRow.tuitionAltLabel || item.tuitionAltLabel || null,
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

const patches = {};
for (const item of brief.items) {
  patches[item.id] = buildResearchPatch(item);
}

for (const award of ingestableAwards) {
  writeOpportunityMarkdown(award);
}

const mergedScholarships = mergeScholarships(existingScholarships, ingestableAwards);
writeDataJs(mergedScholarships);
await writeResearchDetails(patches);

console.log(
  `MSF batch1: ${Object.keys(patches).length} research patches, ${ingestableAwards.length} awards (SCH-085–094), scholarships total ${mergedScholarships.length}.`,
);
