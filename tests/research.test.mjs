import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { programs, scholarships, policy, filterPrograms } from '../dist/data.js';
import { notes } from '../dist/notes.js';
import { formatTuition, paginate } from '../dist/rankings.js';
test('top-30 cutoff retains all ties and separates ranking categories', () => {
  const mba = programs.filter(p=>p.area==='Business');
  const cs = programs.filter(p=>p.area==='Computer science');
  assert.equal(mba.length,30); assert.equal(cs.length,33);
  assert.equal(new Set(programs.map(p=>p.id)).size,63);
  assert.equal(mba.filter(p=>p.rank===29).length,2);
  assert.equal(cs.filter(p=>p.rank===27).length,7);
  assert.equal(cs.filter(p=>p.rank===1).length,3);
  for (const list of [mba,cs]) for (let i=0;i<list.length;i++) {
    assert.ok(list[i].rank<=30);
    if(i) assert.ok(list[i].rank>=list[i-1].rank);
    assert.equal(list[i].tied,list.filter(p=>p.rank===list[i].rank).length>1);
    if (!i || list[i].rank!==list[i-1].rank) assert.equal(list[i].rank,i+1);
  }
});
test('search combines names, academic topics and subject/status filters', () => {
  assert.deepEqual(filterPrograms('CARNEGIE','Computer science').map(p=>p.id),['cmu-mscs']);
  assert.deepEqual(filterPrograms('Carnegie','Business').map(p=>p.id),['cmu-mba']);
  assert.equal(filterPrograms('','Business').length,30);
  assert.equal(filterPrograms('unresearched school').length,0);
  assert.ok(filterPrograms('thesis','Computer science').length>5);
  assert.equal(filterPrograms('','All programs','With tuition reference').length,32);
});
test('restrictions remain visible and are not turned into open applications', () => {
  const restricted=filterPrograms('','Computer science','Restrictions & exceptions');
  for(const id of ['mit-cs','princeton-cs','caltech-cs','harvard-cs','washington-cs','maryland-cs']) assert.ok(restricted.some(p=>p.id===id));
  assert.equal(programs.find(p=>p.id==='princeton-cs').availabilityType,'closed');
  assert.match(programs.find(p=>p.id==='washington-cs').availability,/F-1/);
  assert.match(programs.find(p=>p.id==='harvard-cs').degree,/Related/);
});
test('unknown costs never render as zero and different billing bases persist', () => {
  for(const v of [null,undefined,NaN]) assert.equal(formatTuition(v),'Not verified');
  assert.equal(formatTuition(0),'$0');
  assert.equal(formatTuition(87970),'$87,970');
  assert.match(programs.find(p=>p.id==='mit-mba').tuitionLabel,/fee/);
  for(const p of programs.filter(p=>p.tuition!==null)) {
    assert.ok(/^2026–27/.test(p.period)); assert.ok(p.costNote.includes('2027'));
    assert.ok(p.sources.some(([name])=>/Tuition|tuition|budget/.test(name)));
  }
});
test('card pagination reaches every result with no duplication or omissions', () => {
  const seen=[]; const pages=paginate(programs).pages;
  for(let page=1;page<=pages;page++) seen.push(...paginate(programs,page).items.map(p=>p.id));
  assert.deepEqual(seen,programs.map(p=>p.id));
  assert.equal(paginate([],9).current,1);
  assert.equal(paginate(programs,999).current,pages);
  assert.equal(paginate(programs,-1).current,1);
});
test('program sources, funding and original notebook files resolve', async () => {
  for(const p of programs) {
    assert.ok(notes.some(n=>n.path===p.note));
    for(const id of p.scholarships) assert.ok(scholarships.some(s=>s.id===id));
    for(const [,url] of p.sources) assert.equal(new URL(url).protocol,'https:');
    assert.ok(p.sources.some(([,url])=>url===p.ranking.reproduction));
  }
  for(const s of scholarships) assert.ok(notes.some(n=>n.path===s.note));
  assert.equal(notes.filter(n=>n.path.includes('/programs/')).length,63);
  for(const note of notes) assert.equal(note.body,await readFile(new URL('../'+note.path,import.meta.url),'utf8'));
  const csv=await readFile(new URL('../dist/ranked-programs.csv',import.meta.url),'utf8');
  assert.equal(csv.trim().split('\n').length,64);
});
test('policy radar brief merges baseline and delta items by id on Fall 2027 context', () => {
  assert.equal(policy.scanType, 'initial_baseline+delta');
  assert.equal(policy.asOf, '2026-10-20');
  assert.equal(policy.items.length, 7);
  assert.equal(new Set(policy.items.map(i => i.id)).size, 7);
  for (const item of policy.items) {
    assert.ok(item.id && item.title && item.summary && item.slate_impact);
    assert.ok(['confirmed', 'developing'].includes(item.confidence));
    assert.ok(item.sources.length >= 1);
    for (const url of item.sources) assert.equal(new URL(url).protocol, 'https:');
  }
  assert.deepEqual(
    policy.items.filter(i => i.id.startsWith('isss-opt-nprm')).map(i => i.id).sort(),
    ['isss-opt-nprm-opposing-comments', 'isss-opt-nprm-wave-2026-10']
  );
  assert.equal(policy.items.filter(i => i.school_specific).length, 4);
});
test('shared scholarship records retain eligibility and expiry limits', () => {
  assert.equal(scholarships.find(s=>s.id==='SCH-002').state,'2027 application closed');
  assert.equal(scholarships.find(s=>s.id==='SCH-001').state,'Eligibility unverified');
  assert.ok(programs.find(p=>p.id==='stanford-cs').scholarships.includes('SCH-002'));
  assert.ok(!programs.find(p=>p.id==='harvard-cs').scholarships.includes('SCH-004'));
});
