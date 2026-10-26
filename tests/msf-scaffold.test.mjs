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

test('MSF area is registered with batch1 catalog programs (TFE 2026 ranks 1–8)', () => {
  const finance = PROGRAM_AREAS.find(a => a.area === 'Finance');
  assert.ok(finance);
  assert.equal(finance.kind, 'MSF');
  assert.equal(finance.catalogIdSuffix, MSF_CATALOG_ID_SUFFIX);
  const msf = programs.filter(p => p.area === 'Finance');
  assert.equal(msf.length, 8);
  assert.deepEqual(msf.map(p => p.id).sort(), [...MSF_BATCH1].sort());
  assert.equal(filterPrograms('', 'Finance').length, 8);
  for (let i = 0; i < msf.length; i++) {
    assert.equal(msf[i].rank, i + 1);
    assert.equal(msf[i].ranking.reproductionName, 'TFE Times');
  }
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
  assert.match(rankingSources.Finance.note, /TFE|batch 1/i);
  assert.equal(rankingSources.Finance.reproductionName, 'TFE Times');
});

test('summer-start MSF programs are flagged in research details', () => {
  for (const id of ['mit-msf', 'texas-msf']) {
    const p = programs.find(x => x.id === id);
    assert.ok(p.summerStart, id);
    assert.match(p.costNote, /SUMMER START/i);
  }
});

test('GSU MSF evening Buckhead format appears in orientation', () => {
  const gsu = programs.find(p => p.id === 'gsu-msf');
  assert.match(gsu.orientation, /evening|Buckhead/i);
});
