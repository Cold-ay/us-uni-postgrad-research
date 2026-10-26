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

const MSF_BATCH4 = [
  'iit-msf',
  'temple-msf',
  'lsu-msf',
  'santaclara-msf',
  'rit-msf',
  'arizona-msf',
  'chicago-booth-mif',
  'columbia-msfe',
];

const QUANT_MFE = [
  'berkeley-mfe',
  'cmu-mscf',
  'baruch-mfe',
  'columbia-ieor-mfe',
  'gt-qcf',
  'chicago-finmath',
  'nyu-courant-mf',
  'stanford-mcf',
];

const MSF_ALL = [...MSF_BATCH1, ...MSF_BATCH2, ...MSF_BATCH3, 'florida-msft', ...MSF_BATCH4, 'tamu-qfin', ...QUANT_MFE];

test('MSF area is registered with batch1–4 catalog programs plus florida-msft, tamu-qfin, and quant-mfe', () => {
  const finance = PROGRAM_AREAS.find(a => a.area === 'Finance');
  assert.ok(finance);
  assert.equal(finance.kind, 'MSF');
  assert.equal(finance.catalogIdSuffix, MSF_CATALOG_ID_SUFFIX);
  const msf = programs.filter(p => p.area === 'Finance');
  assert.equal(msf.length, 42);
  assert.deepEqual(msf.map(p => p.id).sort(), [...MSF_ALL].sort());
  assert.equal(filterPrograms('', 'Finance').length, 42);
  assert.equal(programs.filter(p => p.id === 'ohiostate-msf').length, 0);
  assert.equal(programs.filter(p => p.id === 'ucsd-rady-msf').length, 0);
  assert.equal(programs.filter(p => p.id === 'tamu-qfin').length, 1);
  assert.equal(programs.filter(p => p.id === 'illinois-tech-msf').length, 0);
  assert.equal(programs.filter(p => p.id === 'florida-msft').length, 1);
  assert.equal(programs.filter(p => p.id === 'florida-msf').length, 1);
  const ranked = msf.filter(p => p.rank != null);
  assert.equal(ranked.length, 30);
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
  assert.equal(catalogIdArea('chicago-booth-mif'), 'Finance');
  assert.equal(isCatalogProgramId('chicago-booth-mif'), true);
  assert.equal(catalogIdArea('columbia-msfe'), 'Finance');
  assert.equal(isCatalogProgramId('columbia-msfe'), true);
  assert.equal(catalogIdArea('tamu-qfin'), 'Finance');
  assert.equal(isCatalogProgramId('tamu-qfin'), true);
  for (const id of QUANT_MFE) {
    assert.equal(catalogIdArea(id), 'Finance', id);
    assert.equal(isCatalogProgramId(id), true, id);
  }
  assert.equal(isCatalogProgramId('gatech-qcf'), false);
  assert.equal(isCatalogProgramId('nyu-courant'), false);
  assert.equal(catalogIdArea('gatech-qcf'), null);
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
  assert.match(rankingSources.Finance.note, /1–30/);
  assert.match(rankingSources.Finance.note, /TFE/);
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

test('batch4 ranks 25–30, locked adds, alias, and cost flags', () => {
  const iit = programs.find(p => p.id === 'iit-msf');
  assert.equal(iit.rank, 25);
  assert.equal(iit.degree, 'Illinois Tech Stuart MS Finance');
  assert.equal(iit.tuition, 57750);
  assert.equal(iit.summerStart, null);
  assert.match(iit.costNote, /SUMMER TERM UNCONFIRMED/i);
  assert.deepEqual(iit.id_alias_legacy, ['illinois-tech-msf']);
  assert.deepEqual(iit.scholarships, ['SCH-116']);

  const temple = programs.find(p => p.id === 'temple-msf');
  assert.equal(temple.rank, 26);
  assert.equal(temple.degree, 'MS in Financial Analysis (Fox)');
  assert.equal(temple.tuition, 34950);
  assert.equal(temple.summerStart, false);
  assert.match(temple.costDetail, /750/);
  assert.match(temple.costNote, /August Finance Academy/i);
  assert.deepEqual(temple.scholarships, ['SCH-118']);

  const lsu = programs.find(p => p.id === 'lsu-msf');
  assert.equal(lsu.rank, 27);
  assert.equal(lsu.tuition, null);
  assert.equal(lsu.tuitionEstimate, 46311);
  assert.match(lsu.tuitionEstimateLabel, /NOT a published|Estimate/i);
  assert.deepEqual(lsu.scholarships, []);
  assert.match(lsu.funding, /No lsu-msf scholarship card/i);

  const scu = programs.find(p => p.id === 'santaclara-msf');
  assert.equal(scu.rank, 28);
  assert.equal(scu.degree, 'MS in Finance & Analytics (MSFA)');
  assert.equal(scu.tuition, 56916);
  assert.deepEqual(scu.scholarships, ['SCH-120', 'SCH-121']);

  const rit = programs.find(p => p.id === 'rit-msf');
  assert.equal(rit.rank, 29);
  assert.equal(rit.tuition, null);
  assert.equal(rit.tuitionEstimate, null);
  assert.equal(rit.livingCostBand.low, 20386);
  assert.match(rit.costDetail, /2,690/);
  assert.match(rit.costDetail, /32,271/);
  assert.deepEqual(rit.scholarships, ['SCH-123']);

  const arizona = programs.find(p => p.id === 'arizona-msf');
  assert.equal(arizona.rank, 30);
  assert.equal(arizona.tuition, 47500);
  assert.equal(arizona.tuitionAlt, 27200);
  assert.deepEqual(arizona.scholarships, ['SCH-125']);

  const booth = programs.find(p => p.id === 'chicago-booth-mif');
  assert.equal(booth.rank, null);
  assert.equal(booth.degree, 'Asness and Liew Master in Finance (MiF)');
  assert.equal(booth.tuition, 123470);
  assert.equal(booth.summerStart, false);
  assert.match(booth.period, /^2026–27/);
  assert.match(booth.period, /Autumn 2026/);
  assert.match(booth.costNote, /summer internship/i);
  assert.deepEqual(booth.scholarships, ['SCH-126']);
  for (const sch of ['SCH-034', 'SCH-035', 'SCH-036', 'SCH-037']) {
    assert.equal(booth.scholarships.includes(sch), false);
  }

  const columbia = programs.find(p => p.id === 'columbia-msfe');
  assert.equal(columbia.rank, null);
  assert.equal(columbia.degree, 'MS in Financial Economics (MSFE)');
  assert.equal(columbia.tuition, 155032);
  assert.equal(columbia.summerStart, false);
  assert.match(columbia.period, /^2026–27/);
  assert.match(columbia.costDetail, /CF-BLOCKED VERIFY/);
  assert.match(columbia.costNote, /summer internship/i);
  assert.deepEqual(columbia.scholarships, ['SCH-127']);
  for (const sch of ['SCH-034', 'SCH-035', 'SCH-036', 'SCH-037']) {
    assert.equal(columbia.scholarships.includes(sch), false);
  }

  const florida = programs.find(p => p.id === 'florida-msf');
  const fintech = programs.find(p => p.id === 'florida-msft');
  const tamu = programs.find(p => p.id === 'tamu-msf');
  assert.equal(florida.tuition, null);
  assert.equal(florida.rank, 11);
  assert.equal(florida.accessRestricted, true);
  assert.equal(fintech.tuition, 43478);
  assert.equal(fintech.rank, null);
  assert.equal(tamu.tuition, null);
  assert.equal(tamu.rank, 20);
  assert.equal(tamu.accessRestricted, true);
});

test('tamu-qfin is an open MS-QFIN row and does not absorb tamu-msf', () => {
  const qfin = programs.find(p => p.id === 'tamu-qfin');
  const tamu = programs.find(p => p.id === 'tamu-msf');
  assert.equal(qfin.rank, null);
  assert.equal(qfin.university, 'Texas A&M University');
  assert.equal(qfin.short, 'Texas A&M Mays');
  assert.equal(qfin.degree, 'MS Quantitative Finance (MS-QFIN / STEM to Stocks)');
  assert.equal(qfin.area, 'Finance');
  assert.equal(qfin.tuition, null);
  assert.equal(qfin.tuitionEstimate, 30110);
  assert.match(qfin.tuitionEstimateLabel, /NOT a published|Estimate only/i);
  assert.equal(qfin.tuitionAlt, 15000);
  assert.match(qfin.tuitionAltLabel, /Fall\/Spring|per Fall/i);
  assert.equal(qfin.fees, null);
  assert.equal(qfin.livingCostBand, null);
  assert.equal(qfin.stem, null);
  assert.equal(qfin.accessRestricted, false);
  assert.match(qfin.availability, /Math GradCAS/);
  assert.match(qfin.costNote, /estimate only/i);
  assert.match(qfin.costNote, /2027/);
  assert.match(qfin.costDetail, /10,328|10328/);
  assert.match(qfin.period, /^2026–27/);
  assert.match(qfin.deadline, /2027-05-15/);
  assert.equal(qfin.deadlineDate, '2027-05-15');
  assert.doesNotMatch(qfin.deadline, /Lightning|2027-04-01/);
  assert.deepEqual(qfin.scholarships, []);
  assert.match(qfin.funding, /none|empty/i);
  assert.doesNotMatch(qfin.funding, /Aggie 4\+1/);
  assert.notEqual(qfin.funding, tamu.funding);
  assert.equal(qfin.outcome?.confidence, 'low');
  assert.equal(qfin.outcome?.internship_rate, 'unknown');
  assert.equal(qfin.outcome?.full_time_placement, 'unknown');
  assert.deepEqual(qfin.outcome?.notable_employers, []);
  assert.doesNotMatch(qfin.outcome.full_time_placement, /100%|\$80|121,625/);
  assert.match(qfin.outcome.full_time_placement_notes, /Do NOT substitute/);
  assert.match(tamu.outcome.full_time_placement, /100%/);
  assert.notEqual(qfin.outcome.full_time_placement, tamu.outcome.full_time_placement);
  assert.equal(tamu.accessRestricted, true);
  assert.equal(tamu.tuition, null);
  assert.equal(tamu.tuitionEstimate, null);
  assert.equal(tamu.tuitionAlt, null);
  assert.equal(tamu.rank, 20);
  assert.equal(tamu.degree, 'MS in Finance (TAMU 4+1)');
  assert.deepEqual(tamu.scholarships, []);
  assert.notEqual(qfin.programUrl, tamu.programUrl);
});

test('quant-mfe is a separate QuantNet track and does not move the TFE spine', () => {
  const spine = programs.filter(p => p.area === 'Finance' && p.rank != null);
  assert.equal(spine.length, 30);
  for (let i = 0; i < spine.length; i++) assert.equal(spine[i].rank, i + 1);
  assert.equal(programs.find(p => p.id === 'columbia-msfe').rank, null);
  assert.equal(programs.find(p => p.id === 'columbia-msfe').tuition, 155032);
  assert.deepEqual(programs.find(p => p.id === 'columbia-msfe').scholarships, ['SCH-127']);
  assert.equal(programs.find(p => p.id === 'tamu-msf').rank, 20);
  assert.equal(programs.find(p => p.id === 'florida-msf').rank, 11);
  assert.equal(programs.find(p => p.id === 'florida-msft').rank, null);

  const tuition = {
    'berkeley-mfe': 98036,
    'cmu-mscf': 71800,
    'baruch-mfe': 42000,
    'columbia-ieor-mfe': 101592,
    'gt-qcf': 21935,
    'chicago-finmath': 100213,
    'nyu-courant-mf': 87336,
    'stanford-mcf': null,
  };
  const quantNet = {
    'berkeley-mfe': 5,
    'cmu-mscf': 3,
    'baruch-mfe': 1,
    'columbia-ieor-mfe': 4,
    'gt-qcf': 8,
    'chicago-finmath': 7,
    'nyu-courant-mf': 11,
    'stanford-mcf': null,
  };
  for (const id of QUANT_MFE) {
    const p = programs.find(row => row.id === id);
    assert.equal(p.area, 'Finance', id);
    assert.equal(p.track, 'quant-mfe', id);
    assert.equal(p.rankingSource, 'QuantNet 2026', id);
    assert.equal(p.rank, null, id);
    assert.equal(p.tfeRank2026, null, id);
    assert.equal(p.quantNetRank2026, quantNet[id], id);
    assert.equal(p.ranking.reproductionName, 'QuantNet', id);
    assert.equal(p.tuition, tuition[id], id);
    assert.equal(p.tuitionEstimate, null, id);
    assert.notEqual(p.tuition, 0, id);
    assert.match(p.period, /^2026–27/, id);
    if (p.tuition !== null) assert.match(p.costNote, /2027/, id);
  }
  const berkeley = programs.find(p => p.id === 'berkeley-mfe');
  assert.equal(berkeley.springOnly, true);
  assert.equal(berkeley.summerStart, false);
  assert.equal(berkeley.stem, true);
  assert.match(berkeley.availability, /SPRING-ONLY/);
  assert.match(berkeley.costNote, /SPRING-ONLY/);
  assert.deepEqual(berkeley.scholarships, ['SCH-140']);
  const gt = programs.find(p => p.id === 'gt-qcf');
  assert.deepEqual(gt.id_alias_legacy, ['gatech-qcf']);
  assert.equal(programs.find(p => p.id === 'gatech-qcf'), undefined);
  const nyu = programs.find(p => p.id === 'nyu-courant-mf');
  assert.deepEqual(nyu.id_alias_legacy, ['nyu-courant']);
  assert.equal(programs.find(p => p.id === 'nyu-courant'), undefined);
  assert.deepEqual(nyu.scholarships, []);
  assert.match(nyu.funding, /does not accept applications/i);
  const stanford = programs.find(p => p.id === 'stanford-mcf');
  assert.equal(stanford.tuition, null);
  assert.equal(stanford.stem, null);
  assert.equal(stanford.livingCostBand, null);
  assert.deepEqual(stanford.scholarships, ['SCH-147']);
  const ieor = programs.find(p => p.id === 'columbia-ieor-mfe');
  const cbs = programs.find(p => p.id === 'columbia-msfe');
  assert.deepEqual(ieor.scholarships, ['SCH-142', 'SCH-143', 'SCH-144']);
  assert.notEqual(ieor.tuition, cbs.tuition);
  assert.notEqual(ieor.programUrl, cbs.programUrl);
  assert.equal(ieor.scholarships.includes('SCH-127'), false);
  assert.equal(cbs.scholarships.some(id => ieor.scholarships.includes(id)), false);
  assert.deepEqual(programs.find(p => p.id === 'baruch-mfe').scholarships, []);
  for (const id of ['SCH-148', 'SCH-149', 'SCH-150', 'SCH-151', 'SCH-152', 'SCH-153', 'SCH-154']) {
    assert.equal(programs.some(p => p.scholarships.includes(id)), false, id);
  }
});
