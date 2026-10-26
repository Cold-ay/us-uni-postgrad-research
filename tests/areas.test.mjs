import test from 'node:test';
import assert from 'node:assert/strict';
import { areaMeta, programAreaFilterTabs, areaFilterLabel, areaTableGroup } from '../dist/areas.js';
import { rankedSchoolsFinance } from '../dist/catalog-finance.js';
import { programs, filterPrograms } from '../dist/data.js';
import { rankingSources } from '../dist/rankings.js';

test('MSF scaffold: metadata, empty finance catalog, filters', () => {
  assert.equal(rankedSchoolsFinance.length, 0);
  assert.ok(areaMeta.Finance);
  assert.equal(areaMeta.Finance.kind, 'MSF');
  assert.ok(programAreaFilterTabs.includes('Finance'));
  assert.equal(areaFilterLabel('Finance'), 'MSF');
  assert.equal(areaFilterLabel('All programs'), 'All programs');
  assert.match(areaTableGroup('Finance'), /MSF/);
  assert.equal(filterPrograms('', 'Finance').length, 0);
  assert.ok(rankingSources.Finance);
  assert.equal(rankingSources.Finance.reproduction, null);
  assert.equal(programs.filter(p => p.area === 'Finance').length, 0);
  assert.equal(programs.length, 63);
});
