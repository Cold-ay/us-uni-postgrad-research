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

const MSF_ALL = [...MSF_BATCH1, ...MSF_BATCH2, 'florida-msft'];

test('MSF area is registered with batch1–2 catalog programs plus florida-msft', () => {
  const finance = PROGRAM_AREAS.find(a => a.area === 'Finance');
  assert.ok(finance);
  assert.equal(finance.kind, 'MSF');
  assert.equal(finance.catalogIdSuffix, MSF_CATALOG_ID_SUFFIX);
  const msf = programs.filter(p => p.area === 'Finance');
  assert.equal(msf.length, 17);
  assert.deepEqual(msf.map(p => p.id).sort(), [...MSF_ALL].sort());
  assert.equal(filterPrograms('', 'Finance').length, 17);
  assert.equal(programs.filter(p => p.id === 'florida-msft').length, 1);
  assert.equal(programs.filter(p => p.id === 'florida-msf').length, 1);
  const ranked = msf.filter(p => p.rank != null);
  assert.equal(ranked.length, 16);
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
  assert.match(rankingSources.Finance.note, /TFE|1–16|batch/i);
  assert.equal(rankingSources.Finance.reproductionName, 'TFE Times');
});

test('summer-start MSF programs are flagged in research details', () => {
  for (const id of ['mit-msf', 'texas-msf', 'villanova-msf', 'notredame-msf', 'utd-msf']) {
    const p = programs.find(x => x.id === id);
    assert.ok(p.summerStart, id);
    assert.match(p.costNote, /SUMMER START/i, id);
  }
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
