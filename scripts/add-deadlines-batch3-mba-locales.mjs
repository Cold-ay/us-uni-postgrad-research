import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'First-year core followed by more than 100 elective choices, spanning analytics, finance, strategy and other business disciplines. Application open: Class of 2029 applications open (as of page check 2026-10-20; calendar open day not posted) (deadline research 2026-10-20; see deadline field).':
    '第一年核心課程後可選修逾 100 門選修課，涵蓋分析、財務、策略及其他商業領域。申請開放：2029 屆申請現已開放（截至 2026-10-20 頁面查核；具體開放日未公布）（期限研究截至 2026-10-20；詳見 deadline 欄位）。',
};

const toHans = (s) =>
  s
    .replaceAll('課', '课')
    .replaceAll('程', '程')
    .replaceAll('後', '后')
    .replaceAll('可', '可')
    .replaceAll('選', '选')
    .replaceAll('修', '修')
    .replaceAll('逾', '逾')
    .replaceAll('門', '门')
    .replaceAll('涵', '涵')
    .replaceAll('蓋', '盖')
    .replaceAll('分', '分')
    .replaceAll('析', '析')
    .replaceAll('財', '财')
    .replaceAll('務', '务')
    .replaceAll('策', '策')
    .replaceAll('略', '略')
    .replaceAll('及', '及')
    .replaceAll('其', '其')
    .replaceAll('他', '他')
    .replaceAll('商', '商')
    .replaceAll('業', '业')
    .replaceAll('領', '领')
    .replaceAll('域', '域')
    .replaceAll('申', '申')
    .replaceAll('請', '请')
    .replaceAll('開', '开')
    .replaceAll('放', '放')
    .replaceAll('屆', '届')
    .replaceAll('現', '现')
    .replaceAll('已', '已')
    .replaceAll('截', '截')
    .replaceAll('至', '至')
    .replaceAll('頁', '页')
    .replaceAll('面', '面')
    .replaceAll('查', '查')
    .replaceAll('核', '核')
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
    .replaceAll('位', '位')
    .replaceAll('年', '年')
    .replaceAll('第', '第')
    .replaceAll('一', '一')
    .replaceAll('核', '核')
    .replaceAll('心', '心');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} deadline-batch3 MBA academic strings.`);
}
