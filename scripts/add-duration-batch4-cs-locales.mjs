import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'UCI research MS CS: ≥47 units with 4 core areas + electives; thesis or comprehensive exam. Distinct from the professional MCS (~15 months).':
    'UCI 研究型 MS CS：≥47 units，含 4 個核心領域與選修；論文或綜合考試。與專業 MCS（約 15 個月）不同。',
  'UCSB CS MS: 42 units with major+breadth across Theory/Systems/Applications; finish via thesis, project, or comprehensive exam.':
    'UCSB CS MS：42 units，主修與廣度涵蓋 Theory／Systems／Applications；以 thesis、project 或綜合考試完成。',
  'UMass Amherst CICS MS: 30 credits over ~2 years with four cores (Theory, Systems, ML + one) and ≥12 credits at 600+. Non-thesis; optional concentrations and Master\'s Project.':
    'UMass Amherst CICS MS：30 學分、約 2 年，四門核心（Theory、Systems、ML 再加一門）且 ≥12 學分為 600+ 級。非論文；可選 concentration 與 Master\'s Project。',
  'UNC CS MS (Fall 2026+): 30 credits with four-category breadth, program product, technical writing, and comprehensive exam. Typically ≤4 semesters FT; 5-year limit.':
    'UNC CS MS（2026 秋起）：30 學分，四類廣度、program product、技術寫作與綜合考試。全日制通常 ≤4 學期；五年期限。',
  'MIT EECS does not offer a terminal master\u2019s for external applicants. MEng is for MIT EECS undergrads; SM is typically PhD-en-route (or special programs like LGO).':
    'MIT EECS 不對外部申請者提供終端碩士。MEng 限 MIT EECS 學士；SM 通常為 PhD 途中取得（或 LGO 等特殊計畫）。',
  'Princeton CS master\'s (MSE/M.Eng.): normally 2 years with 6 courses + thesis (MSE) or non-thesis M.Eng. Department is not accepting master\'s applications for Fall 2027 admission.':
    'Princeton CS 碩士（MSE／M.Eng.）：通常 2 年、6 門課 + thesis（MSE）或非論文 M.Eng. 系所不接受 2027 秋碩士申請。',
  'Caltech CMS: no direct terminal MS admissions. Applicants enter the PhD; MS may be awarded only in exceptional en-route cases.':
    'Caltech CMS：無直接終端 MS 招生。申請者進入 PhD；MS 僅在罕見的途中情況下授予。',
  'UW Allen School: no general full-time terminal MS for most external applicants. Options are part-time Professional Master\'s (PMP, local/working professionals) or PhD with possible en-route MS.':
    'UW Allen School：大多數外部申請者無一般全日制終端 MS。選項為兼職 Professional Master\'s（PMP，在地／在職）或 PhD（途中可能取得 MS）。',
  'Harvard SEAS has no open terminal CS master\'s for external applicants. CS SM is for current Harvard PhD/A.B. students; related terminal master\'s are CSE and Data Science.':
    'Harvard SEAS 不對外部申請者開放終端 CS 碩士。CS SM 限現有 Harvard PhD／A.B. 學生；相關終端碩士為 CSE 與 Data Science。',
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
    .replaceAll('領', '领')
    .replaceAll('域', '域')
    .replaceAll('項', '项')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('內', '内')
    .replaceAll('長', '长')
    .replaceAll('標', '标')
    .replaceAll('準', '准')
    .replaceAll('徑', '径')
    .replaceAll('簽', '签')
    .replaceAll('證', '证')
    .replaceAll('對', '对')
    .replaceAll('外', '外')
    .replaceAll('部', '部')
    .replaceAll('申', '申')
    .replaceAll('請', '请')
    .replaceAll('者', '者')
    .replaceAll('提', '提')
    .replaceAll('供', '供')
    .replaceAll('終', '终')
    .replaceAll('端', '端')
    .replaceAll('限', '限')
    .replaceAll('現', '现')
    .replaceAll('有', '有')
    .replaceAll('相', '相')
    .replaceAll('關', '关')
    .replaceAll('開', '开')
    .replaceAll('放', '放')
    .replaceAll('無', '无')
    .replaceAll('直', '直')
    .replaceAll('接', '接')
    .replaceAll('招', '招')
    .replaceAll('生', '生')
    .replaceAll('進', '进')
    .replaceAll('入', '入')
    .replaceAll('僅', '仅')
    .replaceAll('在', '在')
    .replaceAll('罕', '罕')
    .replaceAll('見', '见')
    .replaceAll('的', '的')
    .replaceAll('途', '途')
    .replaceAll('中', '中')
    .replaceAll('情', '情')
    .replaceAll('況', '况')
    .replaceAll('下', '下')
    .replaceAll('授', '授')
    .replaceAll('予', '予')
    .replaceAll('系', '系')
    .replaceAll('所', '所')
    .replaceAll('不', '不')
    .replaceAll('接', '接')
    .replaceAll('受', '受')
    .replaceAll('秋', '秋')
    .replaceAll('兼', '兼')
    .replaceAll('職', '职')
    .replaceAll('在', '在')
    .replaceAll('地', '地')
    .replaceAll('職', '职')
    .replaceAll('或', '或')
    .replaceAll('大多', '大多')
    .replaceAll('數', '数')
    .replaceAll('般', '般')
    .replaceAll('全', '全')
    .replaceAll('日', '日')
    .replaceAll('制', '制')
    .replaceAll('技', '技')
    .replaceAll('術', '术')
    .replaceAll('寫', '写')
    .replaceAll('作', '作')
    .replaceAll('類', '类')
    .replaceAll('起', '起')
    .replaceAll('年', '年')
    .replaceAll('期', '期')
    .replaceAll('限', '限')
    .replaceAll('學期', '学期');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch4 CS academic strings.`,
  );
}
