import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'MSCS offers a thesis or student-driven capstone. The separate MEng has an instructor-selected capstone and no thesis. Application open: mid-September (CS requirements page; year not labeled) (deadline research 2026-10-20; see deadline field).':
    'MSCS 可選論文或學生主導 capstone。另設 MEng 為導師指定 capstone、無論文。申請開放：九月中旬（CS 要求頁；未標年份）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
  'Advanced study in the scientific foundations of computing. This CIS MSE is distinct from the MCIT conversion degree. Application open: 15 Sep 2026 (deadline research 2026-10-20; see deadline field).':
    '計算科學基礎的進階學習。此 CIS MSE 與 MCIT 轉換學位不同。申請開放：2026 年 9 月 15 日（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('碩', '硕')
    .replaceAll('須', '须')
    .replaceAll('與', '与')
    .replaceAll('線', '线')
    .replaceAll('開', '开')
    .replaceAll('詳', '详')
    .replaceAll('見', '见')
    .replaceAll('欄', '栏')
    .replaceAll('區', '区')
    .replaceAll('產', '产')
    .replaceAll('業', '业')
    .replaceAll('領', '领')
    .replaceAll('導', '导')
    .replaceAll('為', '为')
    .replaceAll('選', '选')
    .replaceAll('論', '论')
    .replaceAll('文', '文')
    .replaceAll('參', '参')
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
    .replaceAll('要', '要')
    .replaceAll('求', '求')
    .replaceAll('頁', '页')
    .replaceAll('面', '面')
    .replaceAll('未', '未')
    .replaceAll('標', '标')
    .replaceAll('年', '年')
    .replaceAll('份', '份')
    .replaceAll('限', '限')
    .replaceAll('截', '截')
    .replaceAll('至', '至')
    .replaceAll('計', '计')
    .replaceAll('算', '算')
    .replaceAll('科', '科')
    .replaceAll('基', '基')
    .replaceAll('礎', '础')
    .replaceAll('進', '进')
    .replaceAll('階', '阶')
    .replaceAll('習', '习')
    .replaceAll('此', '此')
    .replaceAll('轉', '转')
    .replaceAll('換', '换')
    .replaceAll('位', '位')
    .replaceAll('不', '不')
    .replaceAll('同', '同')
    .replaceAll('申', '申')
    .replaceAll('請', '请')
    .replaceAll('日', '日');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} deadline-batch2 CS academic strings.`);
}
