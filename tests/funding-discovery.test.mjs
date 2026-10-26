import test from 'node:test';
import assert from 'node:assert/strict';
import { programs, scholarships } from '../dist/data.js';
import { matchesAwardFilters, regionEligibility, awardIsClosed } from '../dist/award-filters.js';
import { programRanking, rankingDisplayPrograms } from '../dist/rankings.js';
import { translate } from '../dist/i18n.js';
const award=id=>scholarships.find(s=>s.id===id);
test('regional selection defaults to confirmed and never turns missing data into eligibility',()=>{
 assert.equal(matchesAwardFilters(award('SCH-016'),{regions:['hk']}),true);
 assert.equal(matchesAwardFilters(award('SCH-017'),{regions:['hk']}),false);
 assert.equal(matchesAwardFilters(award('SCH-017'),{regions:['tw']}),true);
 assert.equal(matchesAwardFilters(award('SCH-067'),{regions:['prc']}),true);
 assert.equal(regionEligibility({},'prc'),'unclear');
 assert.equal(matchesAwardFilters({},{regions:['prc']}),false);
 assert.equal(matchesAwardFilters({},{regions:['prc'],eligibility:'include-unclear'}),true);
 assert.equal(matchesAwardFilters({prcEligible:'no'},{regions:['prc'],eligibility:'include-unclear'}),false);
 assert.equal(matchesAwardFilters({prcEligible:'yes'},{regions:['prc'],eligibility:'unclear'}),false);
});
test('multi-region union intersects funding type and status filters',()=>{
 const hk=scholarships.filter(s=>matchesAwardFilters(s,{regions:['hk']}));
 const tw=scholarships.filter(s=>matchesAwardFilters(s,{regions:['tw']}));
 const union=scholarships.filter(s=>matchesAwardFilters(s,{regions:['hk','tw']}));
 assert.deepEqual(new Set(union.map(s=>s.id)),new Set([...hk,...tw].map(s=>s.id)));
 const loans=scholarships.filter(s=>matchesAwardFilters(s,{regions:['tw'],type:'loan',status:'not-closed'}));
 assert.equal(loans.length,1);
 assert.equal(matchesAwardFilters(loans[0],{regions:['tw'],type:'non-loan'}),false);
 assert.equal(scholarships.filter(s=>matchesAwardFilters(s)).length,125);
});
test('closed status follows application wording, not red eligibility styling',()=>{
 assert.equal(awardIsClosed(award('SCH-033')),false);
 assert.equal(matchesAwardFilters(award('SCH-033'),{status:'closed'}),false);
 assert.equal(matchesAwardFilters(award('SCH-002'),{status:'closed'}),true);
 assert.equal(matchesAwardFilters(award('SCH-002'),{status:'not-closed'}),false);
 assert.equal(awardIsClosed({state:'abstract window closed',tone:'amber'}),true);
 assert.equal(matchesAwardFilters({state:'Eligibility unverified'},{status:'admission'}),false);
});
test('display publishers, years and ordering keep QuantNet separate from TFE and U.S. News',()=>{
 assert.equal(programRanking(programs.find(p=>p.id==='stanford-mba')).publisher,'U.S. News');
 assert.equal(programRanking(programs.find(p=>p.id==='tamu-msf')).publisher,'TFE Times');
 assert.equal(programRanking(programs.find(p=>p.id==='baruch-mfe')).label,'#1');
 assert.equal(programRanking(programs.find(p=>p.id==='stanford-mcf')).label,'Unranked');
 for(const p of programs.filter(p=>p.rank===null)) assert.equal(p.tied,false);
 const finance=rankingDisplayPrograms(programs.filter(p=>p.area==='Finance'));
 assert.equal(finance.findIndex(p=>p.track==='quant-mfe'),34);
 assert.equal(finance[34].id,'baruch-mfe');
 assert.equal(programRanking(finance[34]).edition,'2026');
 for(const locale of ['zh-Hant','zh-Hans']) assert.doesNotMatch(translate('Mainland China: Region eligible',locale),/Mainland|eligible/);
});
