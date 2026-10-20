import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'UCSD CSE MS offers Thesis, Comprehensive Standard, or Comprehensive Interdisciplinary plans with CS or Computer Engineering majors. Breadth (12 units) + Depth (12 units) plus electives/research; thesis needs 8–12 units CSE 298.':
    'UCSD CSE MS 提供 Thesis、Comprehensive Standard 或 Comprehensive Interdisciplinary 方案，主修 CS 或 Computer Engineering。廣度（12 學分）+ 深度（12 學分）外加選修／研究；論文需 8–12 學分 CSE 298。',
  'UMD CS MS is 30 credits with thesis (6 CMSC 799) or non-thesis scholarly paper. Four qualifying courses across four of eight areas; complete within five years.':
    'UMD CS MS 為 30 學分，可選論文（6 學分 CMSC 799）或非論文學術論文。八個領域中選四門合格課程；須在五年內完成。',
  'Columbia CS MS: ≥30 points, designed for ~3 semesters, with breadth, PDL, and ≥6 points at 6000-level. Eight faculty pathways plus Personalized/Thesis by invite.':
    'Columbia CS MS：≥30 points，設計約三學期，含 breadth、PDL 與 ≥6 points 的 6000-level 課程。八條 faculty pathway，另含邀請制 Personalized／Thesis。',
  'Purdue CS MS: typically 3–4 semesters. Non-thesis 10 courses or thesis 8 courses + CS 69800. Required cores in Systems I/II and Algorithms plus breadth across areas.':
    'Purdue CS MS：通常 3–4 學期。非論文 10 門課，或論文 8 門課 + CS 69800。必修 Systems I/II 與 Algorithms 核心，並跨領域廣度要求。',
  'UCLA CS MS: nine 4-unit courses (B- or better) plus three CS 201 seminars. Thesis (CS 598) or Capstone project plans; no fixed core list — majority CS coursework.':
    'UCLA CS MS：九門 4-unit 課程（B- 或以上）加三場 CS 201 研討會。可選 Thesis（CS 598）或 Capstone 方案；無固定核心課表——多數為 CS 課程。',
  'UW–Madison traditional CS MS: 30 credits with 24 CS (≥15 core 700–889). Optional thesis/project via CS 790. Distinguish from Professional MS (PMP).':
    'UW–Madison 傳統 CS MS：30 學分，其中 24 學分 CS（≥15 學分核心 700–889）。可選 CS 790 論文／專案。與 Professional MS（PMP）區分。',
  'Penn CIS MSE: 10 course units with four constrained cores (theory + systems rules), CIS electives, and optional thesis (CIS 9990). Complete within seven years; min GPA 2.7.':
    'Penn CIS MSE：10 course units，四門受限核心（theory + systems 規則）、CIS 選修，可選論文（CIS 9990）。七年內完成；最低 GPA 2.7。',
  'UChicago MPCS: 9-course MS (≥~9 months) with five cores + four electives, or 12-course MS (≈15–24 months) adding a specialization and internship/practicum options.':
    'UChicago MPCS：9 門課 MS（≥約 9 個月），五門核心 + 四門選修；或 12 門課 MS（≈15–24 個月），另含專修與實習／practicum 選項。',
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
    .replaceAll('度', '度')
    .replaceAll('設', '设')
    .replaceAll('計', '计')
    .replaceAll('約', '约')
    .replaceAll('條', '条')
    .replaceAll('另', '另')
    .replaceAll('含', '含')
    .replaceAll('邀', '邀')
    .replaceAll('請', '请')
    .replaceAll('制', '制')
    .replaceAll('跨', '跨')
    .replaceAll('領', '领')
    .replaceAll('域', '域')
    .replaceAll('場', '场')
    .replaceAll('研', '研')
    .replaceAll('討', '讨')
    .replaceAll('會', '会')
    .replaceAll('無', '无')
    .replaceAll('固定', '固定')
    .replaceAll('核', '核')
    .replaceAll('心', '心')
    .replaceAll('表', '表')
    .replaceAll('多', '多')
    .replaceAll('數', '数')
    .replaceAll('傳', '传')
    .replaceAll('統', '统')
    .replaceAll('區', '区')
    .replaceAll('分', '分')
    .replaceAll('專', '专')
    .replaceAll('案', '案')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('項', '项');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch2 CS academic strings.`,
  );
}
