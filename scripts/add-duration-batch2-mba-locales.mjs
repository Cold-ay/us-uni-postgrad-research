import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Haas Full-Time MBA: ~21 months, ≥51 units with 11-course (20-unit) core, experiential course, and required internship.':
    'Haas 全日制 MBA：約 21 個月、≥51 units，11 門核心課（20 units）、體驗式學習課程，並須完成實習。',
  'Fuqua Daytime MBA: ~22 months, ≥79 credits with ~13 core courses then heavy electives; 6-week terms.':
    'Fuqua Daytime MBA：約 22 個月、≥79 學分，約 13 門核心課後大量選修；6 週學期制。',
  'Ross Full-Time MBA: 2 years, 57 credits. Prescribed Y1 core with MAP; Y2 electives; summer internship required.':
    'Ross 全日制 MBA：2 年、57 學分。第一年規定核心含 MAP；第二年選修；須完成暑期實習。',
  'Stern Full-Time MBA: 2 years, 60 credits. Required + menu core in Y1, electives/specializations in Y2, summer internship typical.':
    'Stern 全日制 MBA：2 年、60 學分。第一年必修與 menu 核心；第二年選修／專修；通常含暑期實習。',
  'Tuck MBA: 2 years, 76.5 credits (14-course core + electives). Integrated Y1 required curriculum; Y2 electives.':
    'Tuck MBA：2 年、76.5 學分（14 門核心 + 選修）。第一年整合必修課程；第二年選修。',
  'Cornell Two-Year MBA: ~21 months, 60 credits with ~20.5-credit core, immersion, and required summer internship.':
    'Cornell 兩年 MBA：約 21 個月、60 學分，約 20.5 學分核心、immersion，並須完成暑期實習。',
  'UCLA Anderson Full-Time MBA: ~22 months with a ten-course core foundation, customizable electives, and a two-quarter Capstone Project.':
    'UCLA Anderson 全日制 MBA：約 22 個月，十門核心基礎課、可自訂選修，以及兩學季 Capstone 專案。',
  'Tepper Full-Time MBA: ~21 months, 192 units, mini-semester format with early electives and final-mini capstone. Accelerated option separate.':
    'Tepper 全日制 MBA：約 21 個月、192 units，mini-semester 制，第一年即可選修，最後 mini 為 capstone。另有 Accelerated 路徑。',
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
    .replaceAll('分', '分')
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
    .replaceAll('訂', '订')
    .replaceAll('路', '路')
    .replaceAll('徑', '径');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch2 MBA academic strings.`,
  );
}
