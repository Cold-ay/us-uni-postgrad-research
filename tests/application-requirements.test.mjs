import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { programs } from '../dist/data.js';
import { researchDetails } from '../dist/research-details.js';
import {
  applicationRequirementsSection,
  applicationRequirementLocaleKeys,
  applicationRequirementStatusLabels,
} from '../dist/application-requirements.js';
import { dictionaries } from '../dist/translations.js';

const withObject = programs.find(p => p.id === 'mit-msf');
const withoutObject = programs.find(p => p.id === 'cmu-mscs');

test('applicationRequirements merges by catalog id and is not invented when absent', () => {
  assert.deepEqual(withObject.applicationRequirements, researchDetails['mit-msf'].applicationRequirements);
  assert.equal(withoutObject.applicationRequirements, undefined);
  assert.equal(Object.hasOwn(withoutObject, 'applicationRequirements'), false);
  assert.equal(withoutObject.gre, undefined);
  assert.equal(withoutObject.gmat, undefined);
  assert.equal(withoutObject.gpa, undefined);
  const carriers = Object.entries(researchDetails).filter(([, detail]) => detail.applicationRequirements).map(([id]) => id);
  assert.deepEqual(carriers, ['mit-msf']);
  assert.deepEqual(programs.filter(p => p.applicationRequirements).map(p => p.id), ['mit-msf']);

  const req = withObject.applicationRequirements;
  assert.equal(req.as_of, '2026-10-27');
  assert.deepEqual(req.sources, []);
  assert.equal(req.gre.status, 'unknown');
  assert.equal(req.gre.minScore, undefined);
  assert.equal(req.gmat.minScore, undefined);
  assert.equal(req.english.toefl.minScore, undefined);
  assert.equal(req.english.ielts.minScore, undefined);
  assert.equal(req.gpa.minimum, undefined);
  assert.equal(req.applicationFee.amountUsd, undefined);
  assert.match(req.advice, /SCHEMA FIXTURE — replace with brief research/);
  for (const field of ['gre', 'gmat', 'gpa', 'lettersOfRecommendation', 'statementOfPurpose', 'resume', 'transcripts', 'interview']) {
    assert.equal(req[field].status, 'unknown');
    assert.match(req[field].detail, /SCHEMA FIXTURE — replace with brief research/);
  }
});

test('dossier section mounts for the fixture and stays hidden without the object', () => {
  const html = applicationRequirementsSection(withObject);
  assert.match(html, /<section class="application-requirements"/);
  assert.match(html, /Application requirements/);
  assert.match(html, /SCHEMA FIXTURE — replace with brief research/);
  assert.match(html, /Gap: status is unknown\. This is not a published requirement\./);
  assert.match(html, /Optional is not the same as waived/);
  assert.match(html, /No sources recorded\./);
  assert.match(html, /2026-10-27/);
  for (const label of ['GRE', 'GMAT', 'English', 'GPA', 'LoR', 'SOP', 'Resume', 'Transcripts', 'Interview', 'Fee', 'Advice', 'Sources']) {
    assert.match(html, new RegExp(`>${label}<`));
  }
  assert.doesNotMatch(html, /\$\d/);
  assert.equal(applicationRequirementsSection(withoutObject), '');
  assert.equal(applicationRequirementsSection({}), '');
  assert.equal(applicationRequirementsSection({ applicationRequirements: null }), '');
  assert.doesNotMatch(applicationRequirementsSection(withoutObject), /GRE|GMAT|Application requirements/);
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
