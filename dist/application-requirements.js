// Optional applicationRequirements on a research-details entry (merged by catalog id).
// Omit the object and the dossier section stays hidden. Unknown still renders with a gap note.
// optional ≠ waived. Pure CS may omit gmat. Never invent scores, fees, or cutoffs.
//
// gre / gmat: { status: required|optional|waived|not_accepted|not_required|unknown, detail, minScore? }
// english: { toefl: { status: required|optional|waived|not_required|unknown, minScore?, detail }, ielts: same, waiver? }
// gpa: { status: required|recommended|not_stated|unknown, minimum?, scale?, detail }
// lettersOfRecommendation: { status: required|optional|not_stated|unknown, count?, detail }
// statementOfPurpose: { status: required|optional|not_stated|unknown, detail, alsoKnownAs? }
// resume / transcripts: { status: required|optional|not_stated|unknown, detail }
// interview: { status: required|by_invitation|not_used|unknown, detail }
// applicationFee: { amountUsd?, waivers?, detail }
// other: string[]
// advice: string
// sources: [label, url][]
// as_of: YYYY-MM-DD

const STATUS_LABEL = {
  required: 'Required',
  optional: 'Optional',
  waived: 'Waived',
  not_accepted: 'Not accepted',
  not_required: 'Not required',
  unknown: 'Unknown',
  recommended: 'Recommended',
  not_stated: 'Not stated',
  by_invitation: 'By invitation',
  not_used: 'Not used',
};
const DISCLAIMER = 'Optional is not the same as waived. Unknown marks a research gap, not a published rule.';
const GAP = 'Gap: status is unknown. This is not a published requirement.';
const NO_SOURCES = 'No sources recorded.';

export const applicationRequirementStatusLabels = STATUS_LABEL;
export const applicationRequirementLocaleKeys = [
  'Application requirements',
  DISCLAIMER,
  'GRE', 'GMAT', 'English', 'TOEFL', 'IELTS', 'Waiver', 'GPA', 'LoR', 'SOP',
  'Resume', 'Transcripts', 'Interview', 'Fee', 'Other requirements', 'Advice', 'Sources', 'As of',
  ...Object.values(STATUS_LABEL),
  GAP,
  NO_SOURCES,
  'Min score', 'Minimum GPA', 'GPA scale', 'Letter count', 'Fee waivers', 'Also known as',
];

const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function statusHtml(status) {
  if (!status) return '';
  const label = STATUS_LABEL[status] || status;
  const gap = status === 'unknown' ? ` <span class="req-gap">${GAP}</span>` : '';
  const tone = status === 'unknown' ? ' amber' : '';
  return `<span class="pill${tone}">${esc(label)}</span>${gap}`;
}

function detailSpan(detail) {
  if (!detail) return '';
  return ` <span translate="no">${esc(detail)}</span>`;
}

function extra(text) {
  return text ? ` <span class="req-extra">${text}</span>` : '';
}

function row(label, body) {
  if (!body) return '';
  return `<dt>${esc(label)}</dt><dd>${body}</dd>`;
}

function minScore(field) {
  if (!field || field.minScore == null || field.minScore === '') return '';
  return extra(`Min score ${esc(field.minScore)}`);
}

function testRow(label, field) {
  if (!field) return '';
  return row(label, `${statusHtml(field.status)}${minScore(field)}${detailSpan(field.detail)}`);
}

function examLine(label, field) {
  if (!field) return '';
  return `<p><strong>${esc(label)}</strong> ${statusHtml(field.status)}${minScore(field)}${detailSpan(field.detail)}</p>`;
}

function englishRow(english) {
  if (!english) return '';
  const parts = [examLine('TOEFL', english.toefl), examLine('IELTS', english.ielts)];
  if (english.waiver) parts.push(`<p><strong>Waiver</strong> <span translate="no">${esc(english.waiver)}</span></p>`);
  const body = parts.filter(Boolean).join('');
  return row('English', body);
}

function gpaRow(field) {
  if (!field) return '';
  const minimum = field.minimum != null && field.minimum !== '' ? extra(`Minimum GPA ${esc(field.minimum)}`) : '';
  const scale = field.scale != null && field.scale !== '' ? extra(`GPA scale ${esc(field.scale)}`) : '';
  return row('GPA', `${statusHtml(field.status)}${minimum}${scale}${detailSpan(field.detail)}`);
}

function lettersRow(field) {
  if (!field) return '';
  const count = Number.isFinite(field.count) ? extra(`Letter count ${field.count}`) : '';
  return row('LoR', `${statusHtml(field.status)}${count}${detailSpan(field.detail)}`);
}

function sopRow(field) {
  if (!field) return '';
  const aka = field.alsoKnownAs ? extra(`Also known as <span translate="no">${esc(field.alsoKnownAs)}</span>`) : '';
  return row('SOP', `${statusHtml(field.status)}${aka}${detailSpan(field.detail)}`);
}

function feeAmount(amountUsd) {
  if (typeof amountUsd !== 'number' || !Number.isFinite(amountUsd)) return '';
  return extra(`$${amountUsd.toLocaleString('en-US')}`);
}

function feeRow(field) {
  if (!field) return '';
  const waivers = field.waivers ? extra(`Fee waivers <span translate="no">${esc(field.waivers)}</span>`) : '';
  return row('Fee', `${feeAmount(field.amountUsd)}${waivers}${detailSpan(field.detail)}`);
}

function otherRow(items) {
  if (!Array.isArray(items) || !items.length) return '';
  return row('Other requirements', `<ul>${items.map(item => `<li translate="no">${esc(item)}</li>`).join('')}</ul>`);
}

function adviceRow(advice) {
  if (!advice) return '';
  return row('Advice', `<span translate="no">${esc(advice)}</span>`);
}

function sourceLink(label, url) {
  let parsed;
  try { parsed = new URL(url); } catch { return esc(label || url || ''); }
  if (parsed.protocol !== 'https:') return esc(label || url);
  return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label || url)} ↗</a>`;
}

function sourcesRow(sources) {
  if (!Array.isArray(sources)) return '';
  if (!sources.length) return row('Sources', NO_SOURCES);
  const links = sources.map(entry => Array.isArray(entry) ? sourceLink(entry[0], entry[1]) : '').filter(Boolean);
  return row('Sources', links.length ? `<div class="source-links">${links.join('')}</div>` : NO_SOURCES);
}

function asOfRow(asOf) {
  if (!asOf) return '';
  return row('As of', `<time datetime="${esc(asOf)}">${esc(asOf)}</time>`);
}

function containsFixture(value) {
  if (typeof value === 'string') return value.includes('SCHEMA FIXTURE');
  if (Array.isArray(value)) return value.some(containsFixture);
  if (value && typeof value === 'object') return Object.values(value).some(containsFixture);
  return false;
}

export function applicationRequirementsSection(program) {
  const req = program?.applicationRequirements;
  if (!req || typeof req !== 'object' || Array.isArray(req)) return '';
  const rows = [
    testRow('GRE', req.gre),
    testRow('GMAT', req.gmat),
    englishRow(req.english),
    gpaRow(req.gpa),
    lettersRow(req.lettersOfRecommendation),
    sopRow(req.statementOfPurpose),
    testRow('Resume', req.resume),
    testRow('Transcripts', req.transcripts),
    testRow('Interview', req.interview),
    feeRow(req.applicationFee),
    otherRow(req.other),
    adviceRow(req.advice),
    sourcesRow(req.sources),
    asOfRow(req.as_of),
  ].join('');
  const fixture = containsFixture(req)
    ? '<p class="limit" translate="no">SCHEMA FIXTURE — replace with brief research. Placeholder statuses are not published admissions facts.</p>'
    : '';
  return `<section class="application-requirements" aria-labelledby="application-requirements-heading">${fixture}<h3 id="application-requirements-heading">Application requirements</h3><p class="limit">${DISCLAIMER}</p><dl class="policy-facts">${rows}</dl></section>`;
}
