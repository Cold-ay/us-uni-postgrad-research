import test from 'node:test';
import assert from 'node:assert/strict';
import { programs, filterPrograms } from '../dist/data.js';
import { dictionaries } from '../dist/translations.js';
import { translate, resolveLocale, localizedSearch } from '../dist/i18n.js';
test('language links override saved preference and invalid locales fall back safely',()=>{
 assert.equal(resolveLocale('?lang=zh-Hant','zh-Hans'),'zh-Hant');
 assert.equal(resolveLocale('','zh-Hans'),'zh-Hans');
 assert.equal(resolveLocale('?lang=invalid','invalid'),'en');
});
test('both Chinese versions cover every program narrative and preserve numbers',()=>{
 for(const locale of ['zh-Hant','zh-Hans']) for(const p of programs) for(const field of ['academic','internship','funding','costNote','costDetail','availability']) {
  if(!p[field]) continue;
  assert.ok(dictionaries[locale][p[field]],`${locale}: ${p.id}.${field}`);
  if(field.startsWith('cost')) assert.deepEqual([...new Set(translate(p[field],locale).match(/\d+(?:[,.]\d+)*/g)||[])].sort(),[...new Set(p[field].match(/\d+(?:[,.]\d+)*/g)||[])].sort(),`${p.id}.${field} numbers`);
 }
});
test('English and both Chinese school names find the same restricted degree',()=>{
 assert.deepEqual(filterPrograms('Princeton','Computer science').map(p=>p.id),['princeton-cs']);
 assert.deepEqual(localizedSearch(programs,'Princeton').filter(p=>p.area==='Computer science').map(p=>p.id),['princeton-cs']);
 assert.equal(translate('1 of 97 entries','zh-Hant'),'1 / 97 項資料');
 assert.equal(translate('1 of 97 entries','zh-Hans'),'1 / 97 项资料');
 assert.equal(translate('https://example.edu/2027','zh-Hant'),'https://example.edu/2027');
 assert.equal(translate('Tuition not yet verified','en'),'Tuition not yet verified');
});
