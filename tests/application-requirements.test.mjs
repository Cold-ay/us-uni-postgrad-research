import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { programs } from '../dist/data.js';
import { researchDetails } from '../dist/research-details.js';
import { rankedSchools } from '../dist/catalog.js';
import {
  applicationRequirementsSection,
  applicationRequirementLocaleKeys,
  applicationRequirementStatusLabels,
} from '../dist/application-requirements.js';
import { dictionaries } from '../dist/translations.js';

const EXPECTED = [
  'mit-msf', 'princeton-msf', 'washu-msf', 'gsu-msf', 'usc-msf', 'brandeis-msf', 'utah-msf', 'texas-msf',
  'vanderbilt-msf', 'rochester-msf', 'florida-msf', 'asu-msf', 'uci-msf', 'villanova-msf', 'notredame-msf',
  'utd-msf', 'bc-msf', 'cgu-msf', 'illinois-msf', 'tamu-msf', 'ohio-msf', 'msu-msf', 'auburn-msf', 'ucsd-msf',
  'iit-msf', 'temple-msf', 'lsu-msf', 'santaclara-msf', 'rit-msf', 'arizona-msf', 'chicago-booth-mif',
  'columbia-msfe', 'florida-msft', 'tamu-qfin', 'berkeley-mfe', 'cmu-mscf', 'baruch-mfe', 'columbia-ieor-mfe',
  'gt-qcf', 'chicago-finmath', 'nyu-courant-mf', 'stanford-mcf',
];
const handoff = new Map();
for (const name of ['appreq-batch1a', 'appreq-batch1b', 'appreq-batch1c', 'appreq-batch1d']) {
  const data = JSON.parse(readFileSync(new URL(`../brief/${name}.json`, import.meta.url), 'utf8'));
  for (const item of data.items) handoff.set(item.id, item.applicationRequirements);
}
const catalogIds = new Set(rankedSchools.map(row => row.id));

test('batch1 applicationRequirements copies onto all 42 catalog ids and nowhere else', () => {
  assert.equal(handoff.size, 42);
  for (const id of EXPECTED) {
    assert.ok(catalogIds.has(id), id);
    assert.ok(researchDetails[id], id);
    assert.deepEqual(researchDetails[id].applicationRequirements, handoff.get(id));
    assert.deepEqual(programs.find(p => p.id === id).applicationRequirements, handoff.get(id));
    assert.equal(researchDetails[id].applicationRequirements.as_of, '2026-10-27');
  }
  const carriers = Object.entries(researchDetails).filter(([, detail]) => detail.applicationRequirements).map(([id]) => id);
  assert.deepEqual(carriers.sort(), [...EXPECTED].sort());
  assert.equal(programs.filter(p => p.applicationRequirements).length, 42);
  for (const id of ['cmu-mscs', 'stanford-mba', 'princeton-cs']) {
    const program = programs.find(p => p.id === id);
    assert.equal(program.applicationRequirements, undefined);
    assert.equal(Object.hasOwn(program, 'applicationRequirements'), false);
    assert.equal(program.gre, undefined);
    assert.equal(program.gmat, undefined);
  }
  const mit = researchDetails['mit-msf'];
  assert.equal(mit.applicationRequirements.gre.status, 'optional');
  assert.notEqual(mit.applicationRequirements.gre.status, 'waived');
  assert.equal(mit.tuition, 96884);
  assert.equal(researchDetails['arizona-msf'].applicationRequirements.gre.status, 'waived');
  assert.equal(researchDetails['arizona-msf'].applicationRequirements.gmat.status, 'waived');
});

test('dossier section mounts for ingested rows, hides when absent, and still flags a schema fixture', () => {
  const mit = programs.find(p => p.id === 'mit-msf');
  const html = applicationRequirementsSection(mit);
  assert.match(html, /<section class="application-requirements"/);
  assert.match(html, /Application requirements/);
  assert.match(html, />Optional</);
  assert.match(html, /\$150/);
  assert.match(html, /Letter count 3/);
  assert.match(html, /2026-10-27/);
  assert.doesNotMatch(html, /SCHEMA FIXTURE/);
  assert.doesNotMatch(html, />Waived</);
  for (const label of ['GRE', 'GMAT', 'English', 'GPA', 'LoR', 'SOP', 'Resume', 'Transcripts', 'Interview', 'Fee', 'Advice', 'Sources']) {
    assert.match(html, new RegExp(`>${label}<`));
  }
  const washu = applicationRequirementsSection(programs.find(p => p.id === 'washu-msf'));
  assert.match(washu, /Min score 90/);
  const unknown = applicationRequirementsSection(programs.find(p => p.id === 'lsu-msf'));
  assert.match(unknown, />Unknown</);
  assert.match(unknown, /Gap: status is unknown\. This is not a published requirement\./);
  const arizona = applicationRequirementsSection(programs.find(p => p.id === 'arizona-msf'));
  assert.match(arizona, />Waived</);
  assert.equal(applicationRequirementsSection(programs.find(p => p.id === 'cmu-mscs')), '');
  assert.equal(applicationRequirementsSection({}), '');
  assert.equal(applicationRequirementsSection({ applicationRequirements: null }), '');

  const fixture = applicationRequirementsSection({
    applicationRequirements: {
      gre: { status: 'unknown', detail: 'SCHEMA FIXTURE — replace with brief research' },
      advice: 'SCHEMA FIXTURE — replace with brief research',
      sources: [],
      as_of: '2026-10-27',
    },
  });
  assert.match(fixture, /SCHEMA FIXTURE — replace with brief research/);
  assert.match(fixture, /No sources recorded\./);
  assert.match(fixture, /Gap: status is unknown/);
});

test('optional stays distinct from waived, unknown still renders, and omitted gmat stays hidden', () => {
  assert.notEqual(applicationRequirementStatusLabels.optional, applicationRequirementStatusLabels.waived);
  const html = applicationRequirementsSection({
    applicationRequirements: {
      gre: { status: 'optional', detail: 'listed as optional' },
      as_of: '2026-10-27',
      sources: [['Example requirements', 'https://example.edu/reqs']],
    },
  });
  assert.match(html, />GRE</);
  assert.match(html, />Optional</);
  assert.doesNotMatch(html, /GMAT/);
  assert.doesNotMatch(html, /Waived/);
  assert.match(html, /https:\/\/example\.edu\/reqs/);
  assert.doesNotMatch(html, /SCHEMA FIXTURE/);

  const unknown = applicationRequirementsSection({
    applicationRequirements: { interview: { status: 'unknown', detail: '' } },
  });
  assert.match(unknown, />Interview</);
  assert.match(unknown, />Unknown</);
  assert.match(unknown, /Gap: status is unknown/);
});

test('locale keys cover application requirement labels in both Chinese dictionaries', () => {
  for (const locale of ['zh-Hant', 'zh-Hans']) {
    for (const key of applicationRequirementLocaleKeys) {
      assert.equal(typeof dictionaries[locale][key], 'string', `${locale} missing ${key}`);
    }
  }
  assert.notEqual(dictionaries['zh-Hant']['Application requirements'], 'Application requirements');
  assert.notEqual(dictionaries['zh-Hans']['Application requirements'], 'Application requirements');
  assert.notEqual(dictionaries['zh-Hant'].Optional, dictionaries['zh-Hant'].Waived);
});

test('compare view does not gain an application requirements column', () => {
  const app = readFileSync(new URL('../dist/app.js', import.meta.url), 'utf8');
  const compare = app.slice(app.indexOf('function showCompare'), app.indexOf('function policySourceLabel'));
  assert.doesNotMatch(compare, /applicationRequirements/);
  assert.match(app, /applicationRequirementsSection\(p\)/);
});
