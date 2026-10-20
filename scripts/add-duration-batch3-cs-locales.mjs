import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Brown CS ScM: 8 graded graduate courses within ~2 years (or ~1.5–16 months accelerated). Comprehensive or AI/ML tracks; optional professional internships and CSCI 2980 research project.':
    'Brown CS ScM：8 門評分研究生課程，約 2 年內完成（或加速約 1.5–16 個月）。Comprehensive 或 AI/ML track；可選專業實習與 CSCI 2980 研究專案。',
  'Duke CS MS: 30 credits over three full-time semesters. Course-only, project, or thesis; optional AI/ML or Cybersecurity concentrations; master’s exam required.':
    'Duke CS MS：30 學分、三個全日制學期。Course-only、project 或 thesis；可選 AI/ML 或 Cybersecurity concentration；須通過 master’s exam。',
  'JHU CS MSE: 10 courses or 8 + research; ~3 semesters typical. Breadth across ≥4 of 5 areas; optional AI track and HLT concentration.':
    'JHU CS MSE：10 門課或 8 門課加研究；通常約 3 學期。五個領域中至少涵蓋四個；可選 AI track 與 HLT concentration。',
  'Northwestern CS MS: 12 graduate units, typically 3–4 quarters. Default course-only (Plan C); optional thesis (A) or project (B).':
    'Northwestern CS MS：12 個研究生 units，通常 3–4 個 quarters。預設 course-only（Plan C）；可選 thesis（A）或 project（B）。',
  'NYU Courant MSCS: 30-credit standard with three foundations + application + capstone, or 36-credit AI / Systems-Security concentrations. Full-time typically ~2 years; max 5 years.':
    'NYU Courant MSCS：30 學分標準路徑含三門 foundations、application area 與 capstone，或 36 學分 AI／Systems-Security concentration。全日制通常約 2 年；最長 5 年。',
  'Rice MCS: 30-credit non-thesis professional master’s, normally 3 semesters, with specialization + internship + COMP 608.':
    'Rice MCS：30 學分非論文專業碩士，通常 3 學期，含 specialization、實習與 COMP 608。',
  'Yale CS terminal MS: one-year (8 courses) or selective two-year (6 courses + thesis + teaching). Visa students on one-year track take 4 degree courses per term.':
    'Yale CS terminal MS：一年制（8 門課）或遴選兩年制（6 門課 + thesis + teaching）。一年制 track 的簽證學生每學期修 4 門學位課程。',
  'USC Viterbi MS CS (General): 32 units with CSCI 570 + electives; thesis and many specializations available; FT often 1.5–2 years.':
    'USC Viterbi MS CS（General）：32 units，含 CSCI 570 與選修；可選 thesis 與多種 specialization；全日制常為 1.5–2 年。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('碩', '硕')
    .replaceAll('須', '须')
    .replaceAll('與', '与')
    .replaceAll('線', '线')
    .replaceAll('為', '为')
    .replaceAll('選', '选')
    .replaceAll('論', '论')
    .replaceAll('個', '个')
    .replaceAll('門', '门')
    .replaceAll('課', '课')
    .replaceAll('廣', '广')
    .replaceAll('設', '设')
    .replaceAll('計', '计')
    .replaceAll('約', '约')
    .replaceAll('條', '条')
    .replaceAll('含', '含')
    .replaceAll('制', '制')
    .replaceAll('跨', '跨')
    .replaceAll('領', '领')
    .replaceAll('域', '域')
    .replaceAll('場', '场')
    .replaceAll('研', '研')
    .replaceAll('討', '讨')
    .replaceAll('會', '会')
    .replaceAll('無', '无')
    .replaceAll('傳', '传')
    .replaceAll('統', '统')
    .replaceAll('區', '区')
    .replaceAll('分', '分')
    .replaceAll('專', '专')
    .replaceAll('案', '案')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('項', '项')
    .replaceAll('評', '评')
    .replaceAll('內', '内')
    .replaceAll('個', '个')
    .replaceAll('長', '长')
    .replaceAll('標', '标')
    .replaceAll('準', '准')
    .replaceAll('路', '路')
    .replaceAll('徑', '径')
    .replaceAll('遴', '遴')
    .replaceAll('簽', '签')
    .replaceAll('證', '证')
    .replaceAll('位', '位')
    .replaceAll('學期', '学期');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch3 CS academic strings.`,
  );
}
