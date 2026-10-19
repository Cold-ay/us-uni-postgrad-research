import { readFileSync, writeFileSync } from 'node:fs';
import { researchDetails } from '../dist/research-details.js';

/** Immutable copy of brief tuition rows before aid merge (PR #3 / #5). */
const briefSnapshot = structuredClone(researchDetails);

const handoff = JSON.parse(
  readFileSync('/home/ubuntu/.cursor/projects/workspace/uploads/batch1-handoff_79fd.json', 'utf8')
);

/** Programs that already had verified tuition on main before aid (brief batches). */
const BRIEF_CS = new Set(
  handoff.changedProgramIds.filter(id => Number.isFinite(briefSnapshot[id]?.tuition))
);
const TUITION_KEYS = ['tuition', 'tuitionLabel', 'period', 'costNote', 'costDetail'];

function mergeSources(...lists) {
  const byUrl = new Map();
  const tuitionish = n => /Tuition|tuition|budget/i.test(n);
  for (const list of lists) {
    for (const [name, url] of list || []) {
      if (!url) continue;
      const prev = byUrl.get(url);
      if (!prev) byUrl.set(url, name);
      else if (tuitionish(name) && !tuitionish(prev)) byUrl.set(url, name);
    }
  }
  return [...byUrl.entries()].map(([url, name]) => [name, url]);
}

function applyPatch(id, patch) {
  const existing = { ...(researchDetails[id] || {}) };
  const hasBriefTuition = BRIEF_CS.has(id);
  const merged = { ...existing };

  if (!hasBriefTuition) {
    for (const k of TUITION_KEYS) {
      if (patch[k] !== undefined) merged[k] = patch[k];
    }
  }

  merged.funding = patch.funding;
  merged.confidence = patch.confidence;
  merged.unresolved = patch.unresolved;
  merged.asOf = patch.asOf;
  if (patch.scholarships) {
    merged.scholarships = [...new Set([...(existing.scholarships || []), ...patch.scholarships])];
  }
  const primaryUrl = patch.sources?.[0]?.[1] || '';
  merged.sources = ensureTuitionSource(mergeSources(existing.sources, patch.sources), primaryUrl);
  return merged;
}

const merged = { ...researchDetails };
for (const id of handoff.changedProgramIds) {
  merged[id] = applyPatch(id, handoff.researchDetailsPatches[id]);
}

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fmtScalar(v) {
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return `'${esc(v)}'`;
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  return JSON.stringify(v);
}

function passesTuitionSourceTest(name) {
  return /Tuition|tuition|budget/.test(name);
}

function dedupeSourcesByUrl(list) {
  const byUrl = new Map();
  for (const [name, url] of list) {
    if (!url) continue;
    const prev = byUrl.get(url);
    if (!prev) byUrl.set(url, name);
    else if (passesTuitionSourceTest(name) && !passesTuitionSourceTest(prev)) byUrl.set(url, name);
  }
  return [...byUrl.entries()].map(([url, name]) => [name, url]);
}

function ensureTuitionSource(sources, primaryUrl) {
  let list = [...(sources || [])];
  if (!list.some(([n]) => passesTuitionSourceTest(n)) && primaryUrl) {
    list.unshift(['Official tuition / budget', primaryUrl]);
  }
  return dedupeSourcesByUrl(list);
}

function fmtSources(sources, indent, primaryUrl) {
  const pad = ' '.repeat(indent);
  const list = ensureTuitionSource(sources, primaryUrl);
  if (!list.length) return '[]';
  return `[\n${list.map(([a, b]) => `${pad}  ['${esc(a)}', '${esc(b)}']`).join(',\n')}\n${pad}]`;
}

function fmtProgram(id, obj) {
  const lines = [`  '${id}': {`];
  const hasBriefTuition = BRIEF_CS.has(id);
  const briefRow = briefSnapshot[id] || {};
  const skip = new Set();

  if (Number.isFinite(obj.tuition) && !hasBriefTuition) {
    const patchSources = handoff.researchDetailsPatches[id]?.sources || [];
    const primary = patchSources[0]?.[1] || obj.sources?.[0]?.[1] || '';
    lines.push('    ...referenceCost(');
    lines.push(`      ${obj.tuition},`);
    lines.push(`      '${esc(primary)}',`);
    lines.push(`      '${esc(obj.costDetail)}',`);
    lines.push(`      '${esc(obj.tuitionLabel)}'`);
    lines.push('    ),');
    if (obj.costNote) lines.push(`    costNote: '${esc(obj.costNote)}',`);
    if (obj.period && obj.period !== '2026–27') lines.push(`    period: '${esc(obj.period)}',`);
    skip.add('tuition');
    skip.add('tuitionLabel');
    skip.add('costDetail');
    skip.add('costNote');
    if (obj.period?.startsWith('2026')) skip.add('period');
  } else if (Number.isFinite(obj.tuition) && hasBriefTuition) {
    const patchSources = handoff.researchDetailsPatches[id]?.sources || [];
    const primary = briefRow.sources?.find(([, u]) => /tuition|fee|budget|registration/i.test(u))?.[1]
      || briefRow.sources?.[0]?.[1]
      || patchSources[0]?.[1];
    lines.push('    ...referenceCost(');
    lines.push(`      ${briefRow.tuition},`);
    lines.push(`      '${esc(primary)}',`);
    lines.push(`      '${esc(briefRow.costDetail)}',`);
    lines.push(`      '${esc(briefRow.tuitionLabel)}'`);
    lines.push('    ),');
    if (briefRow.costNote) lines.push(`    costNote: '${esc(briefRow.costNote)}',`);
    if (briefRow.period && briefRow.period !== '2026–27') {
      lines.push(`    period: '${esc(briefRow.period)}',`);
    }
    skip.add('tuition');
    skip.add('tuitionLabel');
    skip.add('costDetail');
    skip.add('costNote');
    skip.add('period');
  }

  const order = [
    'kind', 'availability', 'availabilityType', 'orientation', 'deadline', 'deadlineDate',
    'academic', 'internship', 'programUrl', 'degree', 'faculty',
    'funding', 'confidence', 'unresolved', 'asOf', 'scholarships', 'sources'
  ];
  const keys = [...new Set([...order, ...Object.keys(obj)])].filter(
    k => !skip.has(k) && obj[k] !== undefined
  );

  for (const k of keys) {
    if (skip.has(k)) continue;
    const v = obj[k];
    if (k === 'sources') {
      const patchSources = handoff.researchDetailsPatches[id]?.sources || [];
      const primary = patchSources[0]?.[1] || v?.[0]?.[1] || '';
      lines.push(`    sources: ${fmtSources(v, 4, primary)},`);
      continue;
    }
    if (Array.isArray(v) && v.every(x => typeof x === 'string')) {
      lines.push(`    ${k}: [${v.map(s => `'${esc(s)}'`).join(', ')}],`);
    } else if (Array.isArray(v)) {
      lines.push(`    ${k}: ${JSON.stringify(v)},`);
    } else {
      lines.push(`    ${k}: ${fmtScalar(v)},`);
    }
  }
  lines.push('  },');
  return lines.join('\n');
}

const original = readFileSync(new URL('../dist/research-details.js', import.meta.url), 'utf8');
const keyOrder = [...original.matchAll(/^  '([^']+)': \{/gm)].map(m => m[1]);
for (const id of handoff.changedProgramIds) {
  if (!keyOrder.includes(id)) {
    const idx = keyOrder.indexOf('penn-mba');
    keyOrder.splice(idx >= 0 ? idx : keyOrder.length, 0, id);
  }
}

const header = `// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = {
`;

const body = keyOrder.map(id => fmtProgram(id, merged[id] || researchDetails[id])).join('\n');
const footer = '\n};\n';

writeFileSync(new URL('../dist/research-details.js', import.meta.url), header + body + footer);
console.log('Wrote research-details.js with', handoff.changedProgramIds.length, 'aid merges');
