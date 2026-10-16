import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { programs, scholarships, filterPrograms } from '../dist/data.js';
import { notes } from '../dist/notes.js';
test('search combines subject filters with case-insensitive degree matching', () => {
  assert.deepEqual(filterPrograms('CARNEGIE', 'Computer science').map(p => p.id), ['cmu-mscs']);
  assert.equal(filterPrograms('Carnegie', 'Business').length, 0);
  assert.equal(filterPrograms('mba').length, 1);
  assert.equal(filterPrograms('unresearched school').length, 0);
});
test('program funding and research references resolve', () => {
  for (const p of programs) {
    assert.ok(notes.some(n => n.path === p.note));
    for (const id of p.scholarships) assert.ok(scholarships.some(s => s.id === id));
    for (const [,url] of p.sources) assert.equal(new URL(url).protocol, 'https:');
    assert.equal(p.period, '2026–27');
    assert.ok(p.costNote.includes('2027'));
  }
  for (const s of scholarships) assert.ok(notes.some(n => n.path === s.note));
});
test('the notebook contains all research and preserves original text', async () => {
  assert.equal(notes.length, 10);
  for (const note of notes) assert.equal(note.body, await readFile(new URL('../'+note.path,import.meta.url),'utf8'));
});
test('expired scholarship and unverified records retain explicit statuses', () => {
  assert.equal(scholarships.find(s => s.id === 'SCH-002').state, '2027 application closed');
  assert.equal(scholarships.find(s => s.id === 'SCH-001').state, 'Eligibility unverified');
});
