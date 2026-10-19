import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  '45-unit master’s with coursework or research options; MS admission does not guarantee entry to the PhD. Application open: 15 Sep 2026 (deadline research 2026-10-20; see deadline field).':
    '45 學分碩士，可選課程或研究路徑；MS 入學不保證可升讀 PhD。申請開放：2026 年 9 月 15 日（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'An industry-oriented route with technical study, leadership and a capstone; distinguish it from research graduate degrees. Application open: Open as of page check (Fall 2027 Graduate Admission application for EECS now open) (deadline research 2026-10-20; see deadline field).':
    '產業取向路徑，含技術學習、領導力與 capstone；須與研究型研究生學位區分。申請開放：頁面查核時已開放（Fall 2027 EECS 研究生入學申請已開放）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'The on-campus research degree includes a thesis route for in-depth work; separate from online master’s offerings. Application open: 15 Oct (month-day as posted; year not labeled) (deadline research 2026-10-20; see deadline field).':
    '校內研究型學位含論文路徑以深入學習；與線上碩士不同。申請開放：10 月 15 日（頁面僅列月日；未標年份）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'A master’s in CSE with an optional thesis. Research participation and advisor availability need individual confirmation. Application open: Reopens mid-September (Rackham closes in summer; late August/early September also stated) (deadline research 2026-10-20; see deadline field).':
    'CSE 碩士可選論文。研究參與與導師可得性須個別確認。申請開放：九月中旬重開（Rackham 夏季關閉；頁面亦提及八月底／九月初）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'Thesis, comprehensive standard and comprehensive interdisciplinary plans; breadth and depth requirements. Application open: 2 Sep 2026 (deadline research 2026-10-20; see deadline field).':
    '論文、綜合標準與綜合跨領域方案；含廣度與深度要求。申請開放：2026 年 9 月 2 日（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'Coursework with optional research and a thesis route. Application open: 9 Sep 2026 (deadline research 2026-10-20; see deadline field).':
    '課程為主，可選研究與論文路徑。申請開放：2026 年 9 月 9 日（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('碩', '硕')
    .replaceAll('須', '须')
    .replaceAll('與', '与')
    .replaceAll('線', '线')
    .replaceAll('開', '开')
    .replaceAll('放', '放')
    .replaceAll('詳', '详')
    .replaceAll('見', '见')
    .replaceAll('欄', '栏')
    .replaceAll('位', '位')
    .replaceAll('區', '区')
    .replaceAll('分', '分')
    .replaceAll('產', '产')
    .replaceAll('業', '业')
    .replaceAll('領', '领')
    .replaceAll('導', '导')
    .replaceAll('為', '为')
    .replaceAll('主', '主')
    .replaceAll('可', '可')
    .replaceAll('選', '选')
    .replaceAll('論', '论')
    .replaceAll('文', '文')
    .replaceAll('參', '参')
    .replaceAll('與', '与')
    .replaceAll('導', '导')
    .replaceAll('師', '师')
    .replaceAll('得', '得')
    .replaceAll('性', '性')
    .replaceAll('個', '个')
    .replaceAll('別', '别')
    .replaceAll('確認', '确认')
    .replaceAll('九', '九')
    .replaceAll('月', '月')
    .replaceAll('中', '中')
    .replaceAll('旬', '旬')
    .replaceAll('重', '重')
    .replaceAll('夏', '夏')
    .replaceAll('季', '季')
    .replaceAll('關', '关')
    .replaceAll('閉', '闭')
    .replaceAll('亦', '亦')
    .replaceAll('提', '提')
    .replaceAll('及', '及')
    .replaceAll('八', '八')
    .replaceAll('底', '底')
    .replaceAll('初', '初')
    .replaceAll('廣', '广')
    .replaceAll('度', '度')
    .replaceAll('深', '深')
    .replaceAll('要', '要')
    .replaceAll('求', '求')
    .replaceAll('課', '课')
    .replaceAll('程', '程')
    .replaceAll('研', '研')
    .replaceAll('究', '究')
    .replaceAll('路', '路')
    .replaceAll('徑', '径')
    .replaceAll('入', '入')
    .replaceAll('不', '不')
    .replaceAll('保', '保')
    .replaceAll('證', '证')
    .replaceAll('升', '升')
    .replaceAll('讀', '读')
    .replaceAll('申', '申')
    .replaceAll('請', '请')
    .replaceAll('年', '年')
    .replaceAll('日', '日')
    .replaceAll('限', '限')
    .replaceAll('截', '截')
    .replaceAll('至', '至')
    .replaceAll('查', '查')
    .replaceAll('核', '核')
    .replaceAll('時', '时')
    .replaceAll('已', '已')
    .replaceAll('生', '生')
    .replaceAll('校', '校')
    .replaceAll('內', '内')
    .replaceAll('型', '型')
    .replaceAll('含', '含')
    .replaceAll('以', '以')
    .replaceAll('深', '深')
    .replaceAll('入', '入')
    .replaceAll('學', '学')
    .replaceAll('習', '习')
    .replaceAll('頁', '页')
    .replaceAll('面', '面')
    .replaceAll('僅', '仅')
    .replaceAll('列', '列')
    .replaceAll('未', '未')
    .replaceAll('標', '标')
    .replaceAll('份', '份');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} deadline-batch1 CS academic strings.`);
}
