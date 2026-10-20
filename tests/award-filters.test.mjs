import test from 'node:test';
import assert from 'node:assert/strict';
import { scholarships } from '../dist/data.js';
import { awardEligibilityMatch, awardHkTwFilterMatch } from '../dist/award-filters.js';

test('awardEligibilityMatch respects yes/no/unclear without coercing missing fields', () => {
  assert.equal(awardEligibilityMatch({ hkEligible: 'yes' }, 'hkEligible', 'All'), true);
  assert.equal(awardEligibilityMatch({ hkEligible: 'yes' }, 'hkEligible', 'yes'), true);
  assert.equal(awardEligibilityMatch({ hkEligible: 'no' }, 'hkEligible', 'yes'), false);
  assert.equal(awardEligibilityMatch({}, 'hkEligible', 'yes'), false);
  assert.equal(awardEligibilityMatch({}, 'hkEligible', 'unclear'), true);
});

test('HK/TW filters: single dimension works; both set uses OR union', () => {
  const hkYes = scholarships.filter(s => awardHkTwFilterMatch(s, 'yes', 'All'));
  const twYes = scholarships.filter(s => awardHkTwFilterMatch(s, 'All', 'yes'));
  assert.ok(hkYes.some(s => s.id === 'SCH-016' && s.hkEligible === 'yes'));
  assert.ok(!hkYes.some(s => s.id === 'SCH-017'));
  assert.ok(twYes.some(s => s.id === 'SCH-017' && s.twEligible === 'yes'));
  assert.ok(!twYes.some(s => s.id === 'SCH-016'));

  const bothYesAnd = scholarships.filter(
    s => awardEligibilityMatch(s, 'hkEligible', 'yes') && awardEligibilityMatch(s, 'twEligible', 'yes')
  );
  const bothYesOr = scholarships.filter(s => awardHkTwFilterMatch(s, 'yes', 'yes'));
  assert.ok(bothYesOr.length > bothYesAnd.length);
  assert.ok(bothYesOr.some(s => s.hkEligible === 'yes' && s.twEligible === 'no'));
  assert.ok(bothYesOr.some(s => s.hkEligible === 'no' && s.twEligible === 'yes'));
});
