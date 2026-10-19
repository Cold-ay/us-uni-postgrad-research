import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'MBA program; use the August-entry route for a Fall 2027 comparison and verify its internship calendar separately. Application open: August 2027 application now open (as of page check 2026-10-20; calendar open day not posted) (deadline research 2026-10-20; see deadline field).':
    'MBA 課程；比較 2027 年秋季入學時應使用八月入學途徑，並另行核實實習時間表。申請開放：2027 年 8 月入學申請現已開放（截至 2026-10-20 頁面查核；具體開放日未公布）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('課', '课')
    .replaceAll('程', '程')
    .replaceAll('比', '比')
    .replaceAll('較', '较')
    .replaceAll('年', '年')
    .replaceAll('秋', '秋')
    .replaceAll('季', '季')
    .replaceAll('入', '入')
    .replaceAll('應', '应')
    .replaceAll('使', '使')
    .replaceAll('用', '用')
    .replaceAll('八', '八')
    .replaceAll('月', '月')
    .replaceAll('途', '途')
    .replaceAll('徑', '径')
    .replaceAll('並', '并')
    .replaceAll('另', '另')
    .replaceAll('行', '行')
    .replaceAll('核', '核')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('時', '时')
    .replaceAll('間', '间')
    .replaceAll('表', '表')
    .replaceAll('開', '开')
    .replaceAll('放', '放')
    .replaceAll('現', '现')
    .replaceAll('已', '已')
    .replaceAll('截', '截')
    .replaceAll('至', '至')
    .replaceAll('頁', '页')
    .replaceAll('面', '面')
    .replaceAll('查', '查')
    .replaceAll('具', '具')
    .replaceAll('體', '体')
    .replaceAll('日', '日')
    .replaceAll('未', '未')
    .replaceAll('公', '公')
    .replaceAll('布', '布')
    .replaceAll('限', '限')
    .replaceAll('研', '研')
    .replaceAll('究', '究')
    .replaceAll('詳', '详')
    .replaceAll('見', '见')
    .replaceAll('欄', '栏')
    .replaceAll('位', '位');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} deadline-batch1 MBA academic strings.`);
}
