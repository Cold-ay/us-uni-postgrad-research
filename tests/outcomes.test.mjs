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
  assert.equal(Object.keys(outcomeCards).length, 23);
});

test('batch-002 meta is present and documents schema v2', () => {
  assert.equal(outcomeBatchMeta.length, 2);
  assert.equal(outcomeBatchMeta[1].batch_id, 'batch-002');
  assert.equal(outcomeBatchMeta[1].schema_version, 'outcome-card-v2-catalog');
});

test('null catalog_id cards stay unlinked and attach as CMU specialty only', () => {
  assert.ok(unlinkedOutcomeCards['cmu-msml']);
  assert.ok(unlinkedOutcomeCards['cmu-mcds']);
  assert.equal(unlinkedOutcomeCards['cmu-msml'].routeMismatch, true);
  assert.equal(Object.keys(unlinkedOutcomeCards).length, 2);
  assert.equal(outcomeSpecialtyByCatalogId['cmu-mscs']?.length, 2);
  assert.equal(outcomeCards['cmu-msml'], undefined);
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

test('programs merge outcome by catalog id with route caveats where mapped', () => {
  const withOutcome = programs.filter(p => p.outcome);
  assert.equal(withOutcome.length, 23);
  for (const p of withOutcome) assert.equal(p.outcome, outcomeCards[p.id]);
  assert.ok(programs.find(p => p.id === 'mit-cs').outcome.matchCaveat?.includes('MEng'));
  assert.ok(programs.find(p => p.id === 'cornell-cs').outcome.matchCaveat?.includes('Cornell Tech'));
  assert.ok(programs.find(p => p.id === 'washington-cs').outcome.matchCaveat?.includes('Allen School'));
  const gatech = programs.find(p => p.id === 'gatech-cs');
  assert.match(gatech.outcome.full_time_placement, /84\.3%/);
  assert.equal(gatech.outcomeAdjacent.length, 1);
  const cmu = programs.find(p => p.id === 'cmu-mscs');
  assert.equal(cmu.outcome.pathProgramId, 'cmu-mscs');
  assert.equal(cmu.outcomeSpecialty.length, 2);
  for (const p of programs.filter(p => !p.outcome)) assert.equal(p.outcome, null);
});
