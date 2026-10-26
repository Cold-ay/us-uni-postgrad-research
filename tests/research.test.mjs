import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { programs, scholarships, policy, filterPrograms } from '../dist/data.js';
import { notes } from '../dist/notes.js';
import { formatTuition, paginate } from '../dist/rankings.js';
import { awardTypeBadgeLabel } from '../dist/i18n.js';
test('top-30 cutoff retains all ties and separates ranking categories', () => {
  const mba = programs.filter(p=>p.area==='Business');
  const cs = programs.filter(p=>p.area==='Computer science');
  assert.equal(mba.length,30); assert.equal(cs.length,33);
  const finance = programs.filter(p=>p.area==='Finance');
  assert.equal(finance.length, 42);
  assert.equal(new Set(programs.map(p=>p.id)).size,105);
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
  assert.equal(filterPrograms('','All programs','With tuition reference').length,97);
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
  assert.equal(notes.filter(n=>n.path.includes('/programs/')).length,105);
  for(const note of notes) assert.equal(note.body,await readFile(new URL('../'+note.path,import.meta.url),'utf8'));
  const csv=await readFile(new URL('../dist/ranked-programs.csv',import.meta.url),'utf8');
  assert.equal(csv.trim().split('\n').length,106);
});
test('policy radar brief merges baseline and delta items by id on Fall 2027 context', () => {
  assert.equal(policy.scanType, 'initial_baseline+delta');
  assert.equal(policy.asOf, '2026-10-20');
  assert.equal(policy.items.length, 10);
  assert.equal(new Set(policy.items.map(i => i.id)).size, 10);
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
  const byId = new Map(policy.items.map(i => [i.id, i]));
  assert.equal(byId.get('i-765-opt-paper-filing-location-2026-10-07')?.confidence, 'confirmed');
  assert.equal(byId.get('ead-auto-ext-final-2026-10')?.confidence, 'confirmed');
  assert.equal(byId.get('deference-nprm-2026-10')?.confidence, 'developing');
});
test('shared scholarship records retain eligibility and expiry limits', () => {
  assert.equal(scholarships.find(s=>s.id==='SCH-002').state,'2027 application closed');
  assert.equal(scholarships.find(s=>s.id==='SCH-001').state,'Eligibility unverified');
  assert.ok(programs.find(p=>p.id==='stanford-cs').scholarships.includes('SCH-002'));
  assert.ok(!programs.find(p=>p.id==='harvard-cs').scholarships.includes('SCH-004'));
});
test('HK/TW scholarship batch rev2 + PRC batch1 + MSF batch1–4 + quant-mfe SCH-140–147: 125 live awards, eligibility updates, loan badge', () => {
  assert.equal(scholarships.length, 125);
  assert.ok(!scholarships.some(s => s.id === 'SCH-095'));
  assert.ok(!scholarships.some(s => s.id === 'SCH-105'));
  assert.ok(!scholarships.some(s => s.id === 'SCH-106'));
  assert.ok(!scholarships.some(s => s.id === 'SCH-108'));
  assert.ok(!scholarships.some(s => s.id === 'SCH-115'));
  assert.ok(!scholarships.some(s => {
    const n = Number(s.id.replace('SCH-', ''));
    return (n > 127 && n < 140) || n > 147;
  }));
  for (const id of ['SCH-140', 'SCH-141', 'SCH-142', 'SCH-143', 'SCH-144', 'SCH-145', 'SCH-146', 'SCH-147']) {
    assert.ok(scholarships.some(s => s.id === id), id);
  }
  for (const id of ['SCH-148', 'SCH-149', 'SCH-150', 'SCH-151', 'SCH-152', 'SCH-153', 'SCH-154']) {
    assert.ok(!scholarships.some(s => s.id === id), id);
  }
  assert.equal(scholarships.find(s => s.id === 'SCH-142').scope, 'columbia-ieor-mfe');
  assert.notEqual(scholarships.find(s => s.id === 'SCH-127').scope, 'columbia-ieor-mfe');
  for (const id of ['SCH-116', 'SCH-118', 'SCH-120', 'SCH-121', 'SCH-123', 'SCH-125', 'SCH-126', 'SCH-127']) {
    assert.ok(scholarships.some(s => s.id === id), id);
  }
  for (const id of ['SCH-117', 'SCH-119', 'SCH-122', 'SCH-124']) {
    assert.ok(!scholarships.some(s => s.id === id), id);
  }
  assert.deepEqual(programs.find(p => p.id === 'lsu-msf').scholarships, []);
  assert.ok(!programs.find(p => p.id === 'chicago-booth-mif').scholarships.some(id => ['SCH-034', 'SCH-035', 'SCH-036', 'SCH-037'].includes(id)));
  assert.ok(!programs.find(p => p.id === 'columbia-msfe').scholarships.some(id => ['SCH-034', 'SCH-035', 'SCH-036', 'SCH-037'].includes(id)));
  for (const id of ['SCH-085', 'SCH-086', 'SCH-087', 'SCH-088', 'SCH-089', 'SCH-090', 'SCH-091', 'SCH-092', 'SCH-093', 'SCH-094']) {
    assert.ok(scholarships.some(s => s.id === id));
  }
  for (const id of ['SCH-096', 'SCH-097', 'SCH-098', 'SCH-099', 'SCH-100', 'SCH-101', 'SCH-102', 'SCH-103', 'SCH-104']) {
    assert.ok(scholarships.some(s => s.id === id));
  }
  for (const id of ['SCH-107', 'SCH-109', 'SCH-110', 'SCH-111', 'SCH-112', 'SCH-113', 'SCH-114']) {
    assert.ok(scholarships.some(s => s.id === id));
  }
  assert.ok(programs.find(p => p.id === 'bc-msf').scholarships.includes('SCH-107'));
  assert.ok(!programs.find(p => p.id === 'bc-msf').scholarships.includes('SCH-108'));
  assert.deepEqual(programs.find(p => p.id === 'ohio-msf').scholarships, ['SCH-111', 'SCH-112']);
  assert.ok(programs.find(p => p.id === 'ucsd-msf').scholarships.includes('SCH-114'));
  assert.ok(!programs.find(p => p.id === 'ucsd-msf').scholarships.includes('SCH-115'));
  assert.deepEqual(programs.find(p => p.id === 'tamu-msf').scholarships, []);
  assert.deepEqual(programs.find(p => p.id === 'tamu-qfin').scholarships, []);
  assert.ok(!scholarships.some(s => s.id === 'SCH-130'));
  assert.deepEqual(programs.find(p => p.id === 'auburn-msf').scholarships, []);
  assert.ok(programs.find(p => p.id === 'vanderbilt-msf').scholarships.includes('SCH-096'));
  assert.ok(!programs.find(p => p.id === 'vanderbilt-msf').scholarships.includes('SCH-051'));
  assert.ok(programs.find(p => p.id === 'mit-msf').scholarships.includes('SCH-085'));
  assert.ok(!programs.find(p => p.id === 'mit-msf').scholarships.includes('SCH-025'));
  assert.ok(scholarships.some(s => s.id === 'SCH-066'));
  for (const id of ['SCH-022', 'SCH-023', 'SCH-024', 'SCH-025', 'SCH-026', 'SCH-027', 'SCH-028', 'SCH-029', 'SCH-030', 'SCH-031']) {
    assert.equal(scholarships.find(s => s.id === id).hkEligible, 'yes');
    assert.equal(scholarships.find(s => s.id === id).twEligible, 'yes');
  }
  assert.equal(scholarships.find(s => s.id === 'SCH-032').hkEligible, 'unclear');
  assert.equal(scholarships.find(s => s.id === 'SCH-032').twEligible, 'unclear');
  assert.equal(scholarships.find(s => s.id === 'SCH-001').state, 'Eligibility unverified');
  assert.equal(scholarships.find(s => s.id === 'SCH-064').awardType, 'loan');
  assert.equal(awardTypeBadgeLabel('loan'), 'Loan');
  assert.equal(awardTypeBadgeLabel('loan', 'zh-Hant'), '貸款');
  assert.equal(awardTypeBadgeLabel('loan', 'zh-Hans'), '贷款');
  assert.equal(awardTypeBadgeLabel('scholarship'), null);
  assert.ok(programs.find(p => p.id === 'penn-mba').scholarships.includes('SCH-022'));
  assert.ok(programs.find(p => p.id === 'ucla-mba').scholarships.includes('SCH-046'));
  assert.ok(scholarships.some(s => s.id === 'SCH-084' && s.prcEligible === 'yes'));
  assert.ok(!scholarships.some(s => s.id === 'SCH-071'));
  assert.ok(programs.find(p => p.id === 'harvard-mba').scholarships.includes('SCH-075'));
});
