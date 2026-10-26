import { readFileSync, writeFileSync } from 'node:fs';
import { programs } from '../dist/data.js';

const ID = 'florida-msft';

const toHant = (s) =>
  s
    .replaceAll('学', '學')
    .replaceAll('费', '費')
    .replaceAll('杂', '雜')
    .replaceAll('预', '預')
    .replaceAll('计', '計')
    .replaceAll('际', '際')
    .replaceAll('签证', '簽證')
    .replaceAll('书', '書')
    .replaceAll('读', '讀')
    .replaceAll('总', '總')
    .replaceAll('缴', '繳')
    .replaceAll('保险', '保險')
    .replaceAll('账', '賬')
    .replaceAll('负担', '負擔')
    .replaceAll('联合', '聯合')
    .replaceAll('指导', '指引')
    .replaceAll('据', '據')
    .replaceAll('营销', '營銷')
    .replaceAll('专业', '專業')
    .replaceAll('项目', '項目')
    .replaceAll('申请', '申請')
    .replaceAll('录取', '錄取')
    .replaceAll('奖学金', '獎學金')
    .replaceAll('仅', '僅')
    .replaceAll('标准', '標準')
    .replaceAll('国际', '國際')
    .replaceAll('组合', '組合');

const entryCountZh = {
  '1 of 80 entries': { 'zh-Hans': '1 / 80 项资料', 'zh-Hant': '1 / 80 項資料' },
};

const fields = ['academic', 'internship', 'funding', 'costNote', 'costDetail', 'availability'];
const program = programs.find((p) => p.id === ID);
if (!program) throw new Error(`Missing catalog program ${ID}`);

const autoZh = {};
for (const f of fields) {
  const text = program[f];
  if (text) autoZh[text] = text;
}

for (const locale of ['zh-Hans', 'zh-Hant']) {
  const filePath = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(filePath, 'utf8'));
  for (const [en, raw] of Object.entries(autoZh)) {
    if (dict[en] !== undefined) continue;
    dict[en] = locale === 'zh-Hans' ? raw : toHant(raw);
  }
  for (const [en, byLocale] of Object.entries(entryCountZh)) {
    dict[en] = byLocale[locale];
  }
  delete dict['1 of 79 entries'];
  const sorted = Object.fromEntries(Object.keys(dict).sort().map((k) => [k, dict[k]]));
  writeFileSync(filePath, `${JSON.stringify(sorted, null, 2)}\n`);
}

await import('./build-locales.mjs');
console.log('florida-msft locale strings added:', Object.keys(autoZh).length);
