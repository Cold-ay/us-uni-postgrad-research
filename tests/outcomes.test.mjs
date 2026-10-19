import test from 'node:test';
import assert from 'node:assert/strict';
import { programs } from '../dist/data.js';
import { outcomeCards } from '../dist/outcomes.js';
import { rankedSchools } from '../dist/catalog.js';

const catalogIds = new Set(rankedSchools.map(r => r.id));
const allowedConfidence = new Set(['high', 'medium', 'low']);

test('outcome card keys map only to known catalog program ids', () => {
  for (const id of Object.keys(outcomeCards)) {
    assert.ok(catalogIds.has(id), `unknown catalog id: ${id}`);
  }
  assert.equal(Object.keys(outcomeCards).length, 11);
});

test('each outcome card requires confidence and preserves unknown placement text', () => {
  for (const [id, card] of Object.entries(outcomeCards)) {
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
  assert.equal(withOutcome.length, 11);
  for (const p of withOutcome) assert.equal(p.outcome, outcomeCards[p.id]);
  assert.ok(programs.find(p => p.id === 'mit-cs').outcome.matchCaveat?.includes('MEng'));
  assert.ok(programs.find(p => p.id === 'cornell-cs').outcome.matchCaveat?.includes('Cornell Tech'));
  assert.ok(programs.find(p => p.id === 'washington-cs').outcome.matchCaveat?.includes('Allen School'));
  for (const p of programs.filter(p => !p.outcome)) assert.equal(p.outcome, null);
});
