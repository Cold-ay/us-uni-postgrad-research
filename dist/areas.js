/** Program-area metadata for catalog rows (`area` field). */
export const areaMeta = {
  'Computer science': {
    kind: 'MS',
    color: 'clay',
    contentDir: '02-computer-science',
    filterShort: 'CS',
    tableGroup: 'Graduate computer science departments',
    statsTitle: 'CS departments',
    statsDetail: 'Top 30, with cutoff ties',
    dossierLabel: null,
    defaultOrientation: 'See degree route and academic overview',
    csvCategory: 'Graduate CS department',
  },
  Business: {
    kind: 'MBA',
    color: 'sage',
    contentDir: '03-business',
    filterShort: 'MBA',
    tableGroup: 'Full-time MBA',
    statsTitle: 'MBA schools',
    statsDetail: 'Full-time ranking',
    dossierLabel: 'MBA',
    defaultOrientation: 'Full-time MBA · Management',
    csvCategory: 'Full-time MBA',
  },
  Finance: {
    kind: 'MSF',
    color: 'finance',
    contentDir: '06-finance',
    filterShort: 'MSF',
    tableGroup: "Master's in finance (MSF)",
    statsTitle: 'MSF programs',
    statsDetail: 'Awaiting brief ingest',
    dossierLabel: 'MSF',
    defaultOrientation: 'MSF · Finance',
    csvCategory: "Master's in finance (MSF)",
  },
};

/** Area filter tabs on Explore programs (English values; labels via `areaFilterLabel`). */
export const programAreaFilterTabs = ['All programs', 'Business', 'Computer science', 'Finance'];

export function areaConfig(area) {
  return areaMeta[area] ?? null;
}

export function areaFilterLabel(tab) {
  if (tab === 'All programs') return tab;
  return areaMeta[tab]?.filterShort ?? tab;
}

export function areaTableGroup(area) {
  return areaMeta[area]?.tableGroup ?? area;
}

export function areaRankingIntroShort(area) {
  if (area === 'Business') return 'MBA';
  if (area === 'Computer science') return 'CS';
  if (area === 'Finance') return 'MSF';
  return area;
}
