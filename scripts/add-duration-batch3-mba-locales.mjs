import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Darden Full-Time MBA: ~21 months, 57 credits (25.5 core). Integrated case-method Y1 core; Y2 electives.':
    'Darden 全日制 MBA：約 21 個月、57 學分（25.5 核心）。第一年整合案例法核心；第二年選修。',
  'Kenan-Flagler Full-Time MBA: ~21 months, 62 credits with ~14 core courses then concentrations/electives.':
    'Kenan-Flagler 全日制 MBA：約 21 個月、62 學分，約 14 門核心課後可選專修／選修。',
  'McCombs Full-Time MBA: ~21 months, 62 hours (23 core + 37 electives) with Custom Core flexibility in year 1.':
    'McCombs 全日制 MBA：約 21 個月、62 學時（23 核心 + 37 選修），第一年 Custom Core 具彈性。',
  'Marshall Full-Time MBA: 2 years, 63 units (24 core + electives) with PRIME and summer internship option.':
    'Marshall 全日制 MBA：2 年、63 units（24 核心 + 選修），含 PRIME 與暑期實習選項。',
  'Foster Full-Time MBA: 2 years, 88 credits. Integrated Y1 core; customized Y2 electives; summer internship/project.':
    'Foster 全日制 MBA：2 年、88 學分。第一年整合核心；第二年自訂選修；暑期實習或專案。',
  'Olin Full-Time MBA: 2 years, 67 credits (25 core + 42 electives). Optional specializations; electives can start in year 1.':
    'Olin 全日制 MBA：2 年、67 學分（25 核心 + 42 選修）。可選專修；第一年即可開始選修。',
  'Goizueta Two-Year MBA: 4 semesters, 69 credits. Core-heavy Y1; electives/concentrations and experiential learning in Y2.':
    'Goizueta 兩年 MBA：4 學期、69 學分。第一年核心為主；第二年選修／專修與體驗式學習。',
  'Rice Jones Full-Time MBA: ~22 months, 54 credits with required core + Global Field Experience, then elective specializations.':
    'Rice Jones 全日制 MBA：約 22 個月、54 學分，必修核心與 Global Field Experience，之後選修專修。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('須', '须')
    .replaceAll('與', '与')
    .replaceAll('為', '为')
    .replaceAll('選', '选')
    .replaceAll('個', '个')
    .replaceAll('門', '门')
    .replaceAll('課', '课')
    .replaceAll('彈', '弹')
    .replaceAll('領', '领')
    .replaceAll('約', '约')
    .replaceAll('時', '时')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('經', '经')
    .replaceAll('驗', '验')
    .replaceAll('獨', '独')
    .replaceAll('訂', '订')
    .replaceAll('學期', '学期')
    .replaceAll('整', '整')
    .replaceAll('合', '合')
    .replaceAll('體', '体')
    .replaceAll('週', '周')
    .replaceAll('規', '规')
    .replaceAll('定', '定')
    .replaceAll('含', '含')
    .replaceAll('專', '专')
    .replaceAll('修', '修')
    .replaceAll('制', '制')
    .replaceAll('後', '后')
    .replaceAll('兩', '两')
    .replaceAll('自', '自')
    .replaceAll('路', '路')
    .replaceAll('徑', '径')
    .replaceAll('訂', '订')
    .replaceAll('項', '项')
    .replaceAll('主', '主');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch3 MBA academic strings.`,
  );
}
