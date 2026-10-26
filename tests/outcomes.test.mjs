import test from 'node:test';
import assert from 'node:assert/strict';
import { programs } from '../dist/data.js';
import {
  outcomeCards,
  unlinkedOutcomeCards,
  outcomeAdjacentByCatalogId,
  outcomeSpecialtyByCatalogId,
  outcomeBatchMeta,
} from '../dist/outcomes.js';
import { rankedSchools } from '../dist/catalog.js';

const catalogIds = new Set(rankedSchools.map(r => r.id));
const allowedConfidence = new Set(['high', 'medium', 'low']);

test('outcome card keys map only to known catalog program ids', () => {
  for (const id of Object.keys(outcomeCards)) {
    assert.ok(catalogIds.has(id), `unknown catalog id: ${id}`);
  }
  assert.equal(Object.keys(outcomeCards).length, 80);
});

test('batch meta includes batch-002 through batch-005 schema v2', () => {
  assert.equal(outcomeBatchMeta.length, 8);
  assert.equal(outcomeBatchMeta[5].batch_id, 'msf-batch-001');
  assert.equal(outcomeBatchMeta[5].card_count, 8);
  assert.equal(outcomeBatchMeta[6].batch_id, 'msf-batch-002');
  assert.equal(outcomeBatchMeta[6].card_count, 8);
  assert.equal(outcomeBatchMeta[7].batch_id, 'msf-florida-msft');
  assert.equal(outcomeBatchMeta[7].card_count, 1);
  assert.equal(outcomeBatchMeta[1].batch_id, 'batch-002');
  assert.equal(outcomeBatchMeta[1].schema_version, 'outcome-card-v2-catalog');
  assert.equal(outcomeBatchMeta[2].batch_id, 'batch-003');
  assert.equal(outcomeBatchMeta[2].card_count, 14);
  assert.equal(outcomeBatchMeta[3].batch_id, 'batch-004');
  assert.equal(outcomeBatchMeta[3].card_count, 17);
  assert.deepEqual(outcomeBatchMeta[3].upgrade_of_batch_002, ['umich-cse-ms']);
  assert.equal(outcomeBatchMeta[4].batch_id, 'batch-005');
  assert.equal(outcomeBatchMeta[4].card_count, 11);
  assert.equal(outcomeBatchMeta[4].required_targets_complete, true);
});

test('null catalog_id cards stay unlinked and attach as CMU specialty only', () => {
  assert.ok(unlinkedOutcomeCards['cmu-msml']);
  assert.ok(unlinkedOutcomeCards['cmu-mcds']);
  assert.ok(unlinkedOutcomeCards['cmu-msaii']);
  assert.equal(unlinkedOutcomeCards['cmu-msml'].routeMismatch, true);
  assert.equal(Object.keys(unlinkedOutcomeCards).length, 3);
  assert.equal(outcomeSpecialtyByCatalogId['cmu-mscs']?.length, 3);
  assert.equal(outcomeCards['cmu-msml'], undefined);
  assert.equal(outcomeCards['cmu-msaii'], undefined);
});

test('batch-003 route and attribution caveats on linked cards', () => {
  const harvard = outcomeCards['harvard-cs'];
  assert.equal(harvard.pathProgramId, 'harvard-seas-cs-ms');
  assert.equal(harvard.routeMismatch, true);
  assert.match(harvard.program, /Computational Science and Engineering/i);

  const maryland = outcomeCards['maryland-cs'];
  assert.equal(maryland.pathProgramId, 'umd-mscs');
  assert.equal(maryland.routeMismatch, true);
  assert.match(maryland.full_time_placement, /department-wide/i);

  const nyu = outcomeCards['nyu-cs'];
  assert.equal(nyu.pathProgramId, 'nyu-mscs');
  assert.match(nyu.full_time_placement, /^unknown/i);
  assert.doesNotMatch(nyu.full_time_placement, /^93\.7%/);

  const penn = outcomeCards['penn-cs'];
  assert.equal(penn.pathProgramId, 'upenn-mse-cis');
  assert.ok(Array.isArray(penn.notable_employers));
  assert.ok(penn.notable_employers.includes('Google'));
  assert.match(penn.full_time_placement, /SEAS Master's overall/i);
});

test('gatech campus card kept; OMSCS is adjacent evidence only', () => {
  assert.match(outcomeCards['gatech-cs'].full_time_placement, /84\.3%/);
  assert.equal(outcomeCards['gatech-cs'].pathProgramId, 'gatech-mscs');
  const adjacent = outcomeAdjacentByCatalogId['gatech-cs'];
  assert.equal(adjacent?.length, 1);
  assert.equal(adjacent[0].pathProgramId, 'gatech-omscs');
  assert.equal(adjacent[0].routeMismatch, true);
});

test('princeton card flags Fall 2027 master suspension', () => {
  const card = outcomeCards['princeton-cs'];
  assert.ok(card);
  assert.equal(card.routeMismatch, true);
  assert.match(card.routeMismatchNotes, /Fall 2027/i);
});

test('each outcome card requires confidence and preserves unknown placement text', () => {
  const allLinked = Object.entries(outcomeCards);
  const allUnlinked = Object.entries(unlinkedOutcomeCards);
  for (const [id, card] of [...allLinked, ...allUnlinked]) {
    assert.ok(allowedConfidence.has(card.confidence), `${id}.confidence`);
    assert.equal(typeof card.confidence_reason, 'string');
    assert.ok(card.confidence_reason.length > 0, `${id}.confidence_reason`);
    assert.equal(typeof card.internship_rate, 'string');
    assert.equal(typeof card.full_time_placement, 'string');
    assert.ok(card.sources?.length, `${id}.sources`);
    for (const s of card.sources) {
      assert.equal(new URL(s.url).protocol, 'https:');
      assert.match(s.access_date, /^\d{4}-\d{2}-\d{2}$/);
    }
    const placement = card.full_time_placement.toLowerCase();
    if (placement.includes('unknown')) {
      const asNumber = Number.parseFloat(card.full_time_placement.replace(/[^0-9.]/g, ''));
      assert.notEqual(asNumber, 0, `${id} must not treat unknown as 0%`);
    }
  }
});

test('batch-004 michigan upgrade, caltech route mismatch, and unknown CS gaps', () => {
  const michigan = outcomeCards['michigan-cs'];
  assert.equal(michigan.pathProgramId, 'umich-cse-ms');
  assert.equal(michigan.confidence, 'high');
  assert.match(michigan.big_tech_or_top_firm_signal, /\$141,846/);
  assert.equal(michigan.meta?.upgrade_of, 'batch-002');

  const caltech = outcomeCards['caltech-cs'];
  assert.equal(caltech.pathProgramId, 'caltech-cs-grad');
  assert.equal(caltech.routeMismatch, true);
  assert.match(caltech.routeMismatchNotes, /does not offer a terminal/i);

  for (const id of ['yale-cs', 'jhu-cs', 'wisconsin-cs']) {
    assert.match(outcomeCards[id].full_time_placement, /^unknown/i, id);
  }

  const kelley = outcomeCards['indiana-mba'];
  assert.equal(kelley.pathProgramId, 'kelley-mba');
  assert.match(kelley.big_tech_or_top_firm_signal, /starting compensation.*signing/i);

  const marshall = outcomeCards['usc-mba'];
  assert.equal(marshall.pathProgramId, 'marshall-mba');
  assert.match(marshall.full_time_placement, /71%/);
});

test('batch-005 final gap-fill links all remaining catalog ids with display caveats', () => {
  const batch005Ids = [
    'northwestern-cs',
    'umass-cs',
    'uci-cs',
    'ucsb-cs',
    'unc-cs',
    'asu-mba',
    'georgia-mba',
    'gatech-mba',
    'washu-mba',
    'vanderbilt-mba',
    'utd-mba',
  ];
  for (const id of batch005Ids) {
    assert.ok(outcomeCards[id], id);
  }
  assert.match(outcomeCards['northwestern-cs'].full_time_placement, /^unknown/i);
  assert.match(outcomeCards['umass-cs'].routeMismatchNotes, /CICS/i);
  assert.match(outcomeCards['uci-cs'].full_time_placement, /since 2017/i);
  assert.equal(outcomeCards['ucsb-cs'].confidence, 'low');
  assert.match(outcomeCards['unc-cs'].confidence_reason, /undergrad/i);
  assert.match(outcomeCards['georgia-mba'].full_time_placement, />90%|90%/i);
  assert.match(outcomeCards['gatech-mba'].full_time_placement, /2026/);
  assert.match(outcomeCards['utd-mba'].big_tech_or_top_firm_signal, /\$140,175/);
  assert.match(outcomeCards['utd-mba'].big_tech_or_top_firm_signal, /Do not use \$83\.9k school-wide/i);
});

test('programs merge outcome by catalog id with route caveats where mapped', () => {
  const withOutcome = programs.filter(p => p.outcome);
  assert.equal(withOutcome.length, 80);
  const fintech = programs.find(p => p.id === 'florida-msft');
  assert.equal(fintech.outcome.confidence, 'low');
  assert.equal(fintech.outcome.internship_rate, 'unknown');
  assert.match(fintech.outcome.full_time_placement, /^unknown/i);
  assert.deepEqual(fintech.outcome.notable_employers, []);
  const classic = programs.find(p => p.id === 'florida-msf');
  assert.equal(classic.outcome.confidence, 'high');
  assert.ok(classic.outcome.notable_employers.includes('Evercore'));
  for (const p of withOutcome) assert.equal(p.outcome, outcomeCards[p.id]);
  assert.ok(programs.find(p => p.id === 'mit-cs').outcome.matchCaveat?.includes('MEng'));
  assert.ok(programs.find(p => p.id === 'cornell-cs').outcome.matchCaveat?.includes('Cornell Tech'));
  assert.ok(programs.find(p => p.id === 'washington-cs').outcome.matchCaveat?.includes('Allen School'));
  const gatech = programs.find(p => p.id === 'gatech-cs');
  assert.match(gatech.outcome.full_time_placement, /84\.3%/);
  assert.equal(gatech.outcomeAdjacent.length, 1);
  const cmu = programs.find(p => p.id === 'cmu-mscs');
  assert.equal(cmu.outcome.pathProgramId, 'cmu-mscs');
  assert.equal(cmu.outcomeSpecialty.length, 3);
  assert.ok(cmu.outcomeSpecialty.some(c => c.pathProgramId === 'cmu-msaii'));
  assert.equal(programs.filter(p => !p.outcome).length, 0);
});
