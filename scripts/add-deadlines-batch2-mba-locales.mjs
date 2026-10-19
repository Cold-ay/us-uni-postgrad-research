import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Core and career-focused electives are completed before internships; concentrations and emphases customize the degree. Application open: 19 Aug 2026 (Fall 2027 enrollment; Owen news 14 Aug 2026) (deadline research 2026-10-20; see deadline field).':
    '核心課與職涯導向選修在實習前完成；專攻與重點可客製化學位。申請開放：2026 年 8 月 19 日（2027 年秋季入學；Owen 新聞 2026-08-14）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
};

const toHans = (s) =>
  s
    .replaceAll('課', '课')
    .replaceAll('與', '与')
    .replaceAll('職', '职')
    .replaceAll('涯', '涯')
    .replaceAll('導', '导')
    .replaceAll('向', '向')
    .replaceAll('選', '选')
    .replaceAll('修', '修')
    .replaceAll('實', '实')
    .replaceAll('習', '习')
    .replaceAll('前', '前')
    .replaceAll('完', '完')
    .replaceAll('成', '成')
    .replaceAll('專', '专')
    .replaceAll('攻', '攻')
    .replaceAll('重', '重')
    .replaceAll('點', '点')
    .replaceAll('可', '可')
    .replaceAll('客', '客')
    .replaceAll('製', '制')
    .replaceAll('化', '化')
    .replaceAll('學', '学')
    .replaceAll('位', '位')
    .replaceAll('申', '申')
    .replaceAll('請', '请')
    .replaceAll('開', '开')
    .replaceAll('放', '放')
    .replaceAll('年', '年')
    .replaceAll('月', '月')
    .replaceAll('日', '日')
    .replaceAll('秋', '秋')
    .replaceAll('季', '季')
    .replaceAll('入', '入')
    .replaceAll('新', '新')
    .replaceAll('聞', '闻')
    .replaceAll('限', '限')
    .replaceAll('研', '研')
    .replaceAll('究', '究')
    .replaceAll('截', '截')
    .replaceAll('至', '至')
    .replaceAll('詳', '详')
    .replaceAll('見', '见')
    .replaceAll('欄', '栏')
    .replaceAll('欄', '栏')
    .replaceAll('位', '位');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} deadline-batch2 MBA academic strings.`);
}
