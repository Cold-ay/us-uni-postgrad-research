import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'ASU W. P. Carey Full-Time MBA: ~21 months, 60 credits, with summer internship between years and Strategic Management capstone.':
    'ASU W. P. Carey 全日制 MBA：約 21 個月、60 學分，兩年間須完成暑期實習，並含 Strategic Management 總整課程。',
  'Scheller Full-Time MBA: ~22 months, 54 hours (21 core + 33 electives incl. international elective); summer internship.':
    'Scheller 全日制 MBA：約 22 個月、54 學時（21 核心 + 33 選修，含必修國際選修）；暑期實習。',
  'UGA Terry Full-Time MBA: ~22 months, 61 credits with Y1 cores/analytics, Y2 legal + dual capstones + electives; summer internship.':
    'UGA Terry 全日制 MBA：約 22 個月、61 學分，第一年核心與分析課，第二年法律環境、雙總整課程與選修；暑期實習。',
  'Kelley Full-Time +Flex MBA: 2 years with Integrated Core then majors/electives; Year 2 may be on campus or Flex online.':
    'Kelley 全日制 +Flex MBA：2 年，Integrated Core 後可選專修／選修；第二年可在校園或 Flex 線上完成。',
  'Owen Full-Time MBA: 2 years, ≥62 credits across eight modules; required cores, ethics, and at least one 12-credit concentration.':
    'Owen 全日制 MBA：2 年、≥62 學分，八個模組；必修核心與倫理課，至少一個 12 學分專修。',
  'UT Dallas Full-Time MBA Cohort: ~18–21 months, 53 hours (32 core + 21 electives), lock-step with pre-fall boot camp.':
    'UT Dallas 全日制 MBA 班級制：約 18–21 個月、53 學時（32 核心 + 21 選修），鎖步課程並含秋季開學前 boot camp。',
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
    .replaceAll('項', '项')
    .replaceAll('主', '主')
    .replaceAll('線', '线')
    .replaceAll('鎖', '锁')
    .replaceAll('步', '步')
    .replaceAll('總', '总')
    .replaceAll('倫', '伦')
    .replaceAll('國', '国')
    .replaceAll('際', '际');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch4 MBA academic strings.`,
  );
}
