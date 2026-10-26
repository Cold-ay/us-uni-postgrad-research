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
    note: 'Batch 1–4 (2026-10-26): TFE Times 2026 ranks 1–30 ingested. Locked unranked adds on this slate: florida-msft, chicago-booth-mif, columbia-msfe. US News Finance MBA specialty is not used as an MSF program rank. Quant/MFE is a separate quant-mfe track ranked by QuantNet 2026; those eight rows keep tfeRank2026 null and are not merged into TFE ranks 1–30.'
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

/** A display group has one publisher and edition, independent of degree area. */
export function programRanking(p) {
  if (p.track === 'quant-mfe') return { key: 'quant-mfe', publisher: 'QuantNet', edition: '2026', label: p.quantNetRank2026 == null ? 'Unranked' : `#${p.quantNetRank2026}`, title: 'Quantitative finance / financial engineering' };
  if (p.area === 'Finance') return { key: 'finance', publisher: 'TFE Times', edition: '2026', label: rankLabel(p), title: 'Master of Finance (MSF) programs' };
  return { key: p.area, publisher: 'U.S. News', edition: rankingEdition, label: rankLabel(p), title: p.area === 'Business' ? 'Full-time MBA' : 'Graduate computer science departments' };
}
export function rankingDisplayPrograms(list) {
  const order = new Map(['Business','Computer science','finance','quant-mfe'].map((key,i)=>[key,i]));
  return [...list].sort((a,b) => order.get(programRanking(a).key)-order.get(programRanking(b).key)
    || ((a.track === 'quant-mfe' ? a.quantNetRank2026 : a.rank) ?? Infinity)-((b.track === 'quant-mfe' ? b.quantNetRank2026 : b.rank) ?? Infinity)
    || a.short.localeCompare(b.short));
}
