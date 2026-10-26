export const rankingEdition = 'April 2026 release';
export const rankingSources = {
  Business: {
    category: 'Best Business Schools · full-time MBA',
    original: 'https://www.usnews.com/best-graduate-schools/top-business-schools/mba-rankings',
    reproduction: 'https://www.clearadmit.com/mba-rankings/usnews/',
    reproductionName: 'Clear Admit',
    note: '30 schools occupy ranks 1–29; ties are retained. These are full-time MBA ranks, not business subject, online MBA or specialized master’s ranks.'
  },
  'Computer science': {
    category: 'Best Computer Science Schools · graduate departments',
    original: 'https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings',
    reproduction: 'https://www.ivypath-advisory.com/ranking/major-cs-us/',
    reproductionName: 'IvyPath Advisory',
    note: '33 departments occupy ranks 1–27. All seven schools tied at 27 are included. This is a graduate department ranking, not a ranking of the specific master’s routes listed here.'
  },
  Finance: {
    category: "TFE Times Best Master's of Finance",
    original: 'https://tfetimes.com/best-finance-program-rankings/',
    reproduction: 'https://tfetimes.com/best-finance-program-rankings/',
    reproductionName: 'TFE Times',
    note: 'Batch 1–3 (2026-10-26): TFE Times 2026 ranks 1–24 ingested. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE programs remain on a separate track.'
  }
};
export const rankingCaveat = 'U.S. News’s direct tables were inaccessible during research. Positions are transcribed from the linked reproductions, with selected university announcements used as cross-checks; not every position is independently verified. “April 2026 release” avoids inconsistent 2026/2027 edition labels across sources. Rankings are discovery aids, not admission or internship probabilities.';
export function rankLabel(p) {
  if (p.rank == null) return 'Unranked';
  return `#${p.rank}${p.tied ? ' (tie)' : ''}`;
}
export function formatTuition(n) {
  return Number.isFinite(n) ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n) : 'Not verified';
}
export function paginate(list, page = 1, size = 12) {
  const pages = Math.max(1, Math.ceil(list.length / size));
  const current = Math.max(1, Math.min(page, pages));
  return { items: list.slice((current - 1) * size, current * size), current, pages };
}
