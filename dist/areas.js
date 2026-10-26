/**
 * Program area registry — CS, MBA, and MSF (Finance) families share one catalog pipeline.
 * MSF rows are not ingested yet; Finance remains a zero-program scaffold until gm greenlights the slate.
 */

export const PROGRAM_AREAS = [
  {
    area: 'Computer science',
    kind: 'MS',
    color: 'clay',
    folder: '02-computer-science',
    catalogIdSuffix: '-cs',
    tabShort: 'CS',
    statTitle: 'CS departments',
    statSubtitle: 'Top 30, with cutoff ties',
    tableSectionTitle: 'Graduate computer science departments',
    detailEyebrow: 'Computer science',
    csvCategory: 'Graduate CS department',
    sortOrder: 1,
  },
  {
    area: 'Business',
    kind: 'MBA',
    color: 'sage',
    folder: '03-business',
    catalogIdSuffix: '-mba',
    tabShort: 'MBA',
    statTitle: 'MBA schools',
    statSubtitle: 'Full-time ranking',
    tableSectionTitle: 'Full-time MBA',
    detailEyebrow: 'MBA',
    csvCategory: 'Full-time MBA',
    sortOrder: 2,
  },
  {
    area: 'Finance',
    kind: 'MSF',
    color: 'brass',
    folder: '05-finance',
    catalogIdSuffix: '-msf',
    tabShort: 'MSF',
    statTitle: 'MSF programs',
    statSubtitle: 'Scaffold only · ingest on hold',
    tableSectionTitle: 'Master of Finance (MSF) programs',
    detailEyebrow: 'MSF',
    csvCategory: 'Master of Finance (MSF)',
    sortOrder: 3,
    ingestStatus: 'hold',
  },
];

/** Intended catalog id convention for future MSF ingest: `{school-key}-msf` (parallel to `-cs` / `-mba`). */
export const MSF_CATALOG_ID_SUFFIX = '-msf';

const byArea = new Map(PROGRAM_AREAS.map(a => [a.area, a]));

export function programAreaByName(area) {
  return byArea.get(area);
}

export function kindForArea(area) {
  return programAreaByName(area)?.kind ?? 'MS';
}

export function colorForArea(area) {
  return programAreaByName(area)?.color ?? 'clay';
}

export function folderForArea(area) {
  return programAreaByName(area)?.folder ?? '02-computer-science';
}

export function programAreaFilterTabs() {
  return ['All programs', ...PROGRAM_AREAS.map(a => a.area)];
}

export function rankingSourceShortLabel(area) {
  return programAreaByName(area)?.tabShort ?? area;
}

export function isCatalogProgramId(id) {
  if (!id || typeof id !== 'string') return false;
  return PROGRAM_AREAS.some(a => id.endsWith(a.catalogIdSuffix)) || id.endsWith('-mscs');
}

export function catalogIdArea(id) {
  if (!id) return null;
  if (id.endsWith('-mscs')) return 'Computer science';
  for (const a of PROGRAM_AREAS) {
    if (id.endsWith(a.catalogIdSuffix)) return a.area;
  }
  return null;
}
