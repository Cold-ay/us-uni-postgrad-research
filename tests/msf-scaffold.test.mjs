import test from 'node:test';
import assert from 'node:assert/strict';
import { programs, filterPrograms } from '../dist/data.js';
import {
  PROGRAM_AREAS,
  MSF_CATALOG_ID_SUFFIX,
  catalogIdArea,
  isCatalogProgramId,
  programAreaFilterTabs,
} from '../dist/areas.js';
import { rankingSources } from '../dist/rankings.js';
import {
  awardScopeMatchesArea,
  isProgramScopedAward,
} from '../dist/award-filters.js';

const MSF_BATCH1 = [
  'mit-msf',
  'princeton-msf',
  'washu-msf',
  'gsu-msf',
  'usc-msf',
  'brandeis-msf',
  'utah-msf',
  'texas-msf',
];

const MSF_BATCH2 = [
  'vanderbilt-msf',
  'rochester-msf',
  'florida-msf',
  'asu-msf',
  'uci-msf',
  'villanova-msf',
  'notredame-msf',
  'utd-msf',
];

const MSF_BATCH3 = [
  'bc-msf',
  'cgu-msf',
  'illinois-msf',
  'tamu-msf',
  'ohio-msf',
  'msu-msf',
  'auburn-msf',
  'ucsd-msf',
];

const MSF_ALL = [...MSF_BATCH1, ...MSF_BATCH2, ...MSF_BATCH3, 'florida-msft'];

test('MSF area is registered with batch1–3 catalog programs plus florida-msft', () => {
  const finance = PROGRAM_AREAS.find(a => a.area === 'Finance');
  assert.ok(finance);
  assert.equal(finance.kind, 'MSF');
  assert.equal(finance.catalogIdSuffix, MSF_CATALOG_ID_SUFFIX);
  const msf = programs.filter(p => p.area === 'Finance');
  assert.equal(msf.length, 25);
  assert.deepEqual(msf.map(p => p.id).sort(), [...MSF_ALL].sort());
  assert.equal(filterPrograms('', 'Finance').length, 25);
  assert.equal(programs.filter(p => p.id === 'ohiostate-msf').length, 0);
  assert.equal(programs.filter(p => p.id === 'ucsd-rady-msf').length, 0);
  assert.equal(programs.filter(p => p.id === 'tamu-qfin').length, 0);
  for (const id of ['illinois-tech-msf', 'temple-msf', 'lsu-msf', 'santaclara-msf', 'rit-msf', 'arizona-msf', 'chicago-booth-mif', 'columbia-msfe']) {
    assert.equal(programs.filter(p => p.id === id).length, 0, id);
  }
  assert.equal(programs.filter(p => p.id === 'florida-msft').length, 1);
  assert.equal(programs.filter(p => p.id === 'florida-msf').length, 1);
  const ranked = msf.filter(p => p.rank != null);
  assert.equal(ranked.length, 24);
  for (let i = 0; i < ranked.length; i++) {
    assert.equal(ranked[i].rank, i + 1);
    assert.equal(ranked[i].ranking.reproductionName, 'TFE Times');
  }
  const fintech = programs.find(p => p.id === 'florida-msft');
  assert.equal(fintech.rank, null);
  assert.equal(fintech.university, 'University of Florida');
  assert.equal(fintech.short, 'Florida Warrington');
  assert.equal(fintech.degree, 'MS in Finance and Technology');
  assert.equal(fintech.area, 'Finance');
  assert.equal(fintech.tuition, 43478);
  assert.equal(fintech.tuitionAlt, 15976);
  assert.equal(fintech.stem, null);
  assert.equal(fintech.livingCostBand, null);
  assert.equal(fintech.accessRestricted, false);
  assert.equal(fintech.availabilityType, 'verify');
  assert.match(fintech.availability, /Fall 2027/);
  assert.match(fintech.deadline, /2027-03-01/);
  assert.equal(fintech.deadlineDate, '2027-03-01');
  assert.deepEqual(fintech.scholarships, []);
  assert.equal(fintech.outcome?.confidence, 'low');
  assert.equal(fintech.outcome?.internship_rate, 'unknown');
  assert.match(fintech.outcome?.full_time_placement, /^unknown/i);
  assert.deepEqual(fintech.outcome?.notable_employers, []);
  assert.equal(catalogIdArea('florida-msft'), 'Finance');
  assert.equal(isCatalogProgramId('florida-msft'), true);
  assert.equal(catalogIdArea('florida-msf'), 'Finance');
});

test('program area filters include Finance alongside CS and MBA', () => {
  const tabs = programAreaFilterTabs();
  assert.deepEqual(tabs, ['All programs', 'Computer science', 'Business', 'Finance']);
});

test('catalog id helpers recognize -msf rows', () => {
  assert.equal(isCatalogProgramId('wharton-msf'), true);
  assert.equal(catalogIdArea('wharton-msf'), 'Finance');
  assert.equal(catalogIdArea('penn-mba'), 'Business');
  assert.equal(isProgramScopedAward('duke-mba'), true);
  assert.equal(awardScopeMatchesArea('duke-mba', 'Business'), true);
  assert.equal(awardScopeMatchesArea('duke-mba', 'Finance'), false);
  assert.equal(awardScopeMatchesArea('mit-msf', 'Finance'), true);
});

test('ranking sources include Finance TFE Times metadata', () => {
  assert.ok(rankingSources.Finance);
  assert.match(rankingSources.Finance.note, /TFE|1–24|batch/i);
  assert.equal(rankingSources.Finance.reproductionName, 'TFE Times');
});

test('summer-start MSF programs are flagged in research details', () => {
  for (const id of ['mit-msf', 'texas-msf', 'villanova-msf', 'notredame-msf', 'utd-msf', 'cgu-msf', 'tamu-msf']) {
    const p = programs.find(x => x.id === id);
    assert.ok(p.summerStart, id);
    assert.match(p.costNote, /SUMMER START/i, id);
  }
  for (const id of ['bc-msf', 'illinois-msf', 'ohio-msf', 'msu-msf', 'auburn-msf', 'ucsd-msf']) {
    const p = programs.find(x => x.id === id);
    assert.equal(p.summerStart, false, id);
  }
});

test('batch3 aliases, TAMU restriction, and Rady MQF stay on the TFE spine', () => {
  const tamu = programs.find(p => p.id === 'tamu-msf');
  assert.equal(tamu.accessRestricted, true);
  assert.equal(tamu.availabilityType, 'restricted');
  assert.match(tamu.availability, /TAMU undergrad|external/i);
  assert.equal(tamu.tuition, null);
  assert.equal(tamu.rank, 20);
  assert.equal(tamu.degree, 'MS in Finance (TAMU 4+1)');
  assert.deepEqual(tamu.scholarships, []);
  assert.match(tamu.costDetail, /tamu-qfin|Quantitative Finance/i);

  const auburn = programs.find(p => p.id === 'auburn-msf');
  assert.equal(auburn.tuition, null);
  assert.equal(auburn.tuitionEstimate, 35550);
  assert.equal(auburn.accessRestricted, undefined);
  assert.deepEqual(auburn.scholarships, []);

  const ohio = programs.find(p => p.id === 'ohio-msf');
  assert.deepEqual(ohio.id_alias_legacy, ['ohiostate-msf']);
  assert.equal(ohio.tuition, 68093);
  assert.equal(ohio.rank, 21);

  const ucsd = programs.find(p => p.id === 'ucsd-msf');
  assert.deepEqual(ucsd.id_alias_legacy, ['ucsd-rady-msf']);
  assert.equal(ucsd.degree, 'Master of Quantitative Finance (MQF)');
  assert.equal(ucsd.tuition, 83876);
  assert.equal(ucsd.rank, 24);
  assert.match(ucsd.academic, /MQF|Quantitative Finance/i);
  assert.equal(ucsd.accessRestricted, undefined);

  assert.equal(programs.find(p => p.id === 'bc-msf').tuition, 71940);
  assert.equal(programs.find(p => p.id === 'bc-msf').rank, 17);
  assert.equal(programs.find(p => p.id === 'illinois-msf').tuition, 67800);
  assert.equal(programs.find(p => p.id === 'cgu-msf').tuition, 66240);
  assert.equal(programs.find(p => p.id === 'msu-msf').tuition, 51000);

  const florida = programs.find(p => p.id === 'florida-msf');
  assert.equal(florida.accessRestricted, true);
  assert.equal(florida.rank, 11);
  assert.equal(florida.tuition, null);
  const fintech = programs.find(p => p.id === 'florida-msft');
  assert.equal(fintech.tuition, 43478);
  assert.equal(fintech.rank, null);
});

test('florida-msf is access-restricted UF combination pathway', () => {
  const florida = programs.find(p => p.id === 'florida-msf');
  assert.equal(florida.accessRestricted, true);
  assert.equal(florida.availabilityType, 'restricted');
  assert.match(florida.availability, /UF undergrad|external/i);
  assert.equal(florida.tuition, null);
  assert.equal(florida.rank, 11);
  assert.ok(florida.tuitionEstimate);
  assert.equal(florida.degree, 'MS in Finance (UF combination)');
  const fintech = programs.find(p => p.id === 'florida-msft');
  assert.notEqual(florida.tuition, fintech.tuition);
  assert.ok(!florida.scholarships.some(id => fintech.scholarships.includes(id) && id));
  assert.notDeepEqual(florida.outcome?.notable_employers, fintech.outcome?.notable_employers);
});

test('GSU MSF evening Buckhead format appears in orientation', () => {
  const gsu = programs.find(p => p.id === 'gsu-msf');
  assert.match(gsu.orientation, /evening|Buckhead/i);
});
