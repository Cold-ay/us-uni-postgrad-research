import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Stanford GSB MBA: 2 years (6 quarters), 90 units. Year 1 Foundations (leadership, analytic, management); Year 2 electives. Global experience required.':
    'Stanford GSB MBA：2 年（6 學季）、90 units。第一年 Foundations（領導力、分析、管理）；第二年選修。須完成全球體驗要求。',
  'HBS MBA: 2 years. Year 1 Required Curriculum; Year 2 Elective Curriculum (30 credits). Case-method RC core listed on HBS site.':
    'HBS MBA：2 年。第一年 Required Curriculum；第二年 Elective Curriculum（30 學分）。RC 核心以 case method 為主，見 HBS 官網。',
  'Wharton MBA: ~20 months, 19 CU (9 core + major + electives). Fixed and flexible core; at least one of 22 majors.':
    'Wharton MBA：約 20 個月、19 CU（9 核心 + major + 選修）。固定與彈性核心；至少選一個 22 個 majors 之一。',
  'Chicago Booth Full-Time MBA: ~21 months, 2,000 units. Highly flexible curriculum with LEAD + foundations + function areas + electives.':
    'Chicago Booth 全日制 MBA：約 21 個月、2,000 units。高度彈性課程：LEAD + foundations + 功能領域 + 選修。',
  'Kellogg Two-Year MBA: 6 quarters, ≥20.5 credits, summer work experience required. Optional majors; distinct One-Year MBA path.':
    'Kellogg 兩年 MBA：6 學季、≥20.5 學分，須有暑期工作經驗。可選 majors；另有獨立的 One-Year MBA 路徑。',
  'MIT Sloan MBA: 2 years / 4 semesters, 144 units. Required Fall Core then customized electives across Sloan/MIT/Harvard.':
    'MIT Sloan MBA：2 年／4 學期、144 units。必修 Fall Core，之後在 Sloan／MIT／Harvard 自訂選修。',
  'Columbia MBA: 4 terms, 60 credits (18 core + ≥42 electives). Cluster core with exemption options; Operations typically in term 2.':
    'Columbia MBA：4 學期、60 學分（18 核心 + ≥42 選修）。Cluster 核心可豁免；Operations 通常在第二學期。',
  'Yale SOM MBA: 2 years, 72 units. Integrated Year-1 core (Orientation + Organizational Perspectives) then Year-2 electives; summer internship required.':
    'Yale SOM MBA：2 年、72 units。第一年整合核心（Orientation + Organizational Perspectives），第二年選修；須完成暑期實習。',
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
    .replaceAll('立', '立')
    .replaceAll('路', '路')
    .replaceAll('徑', '径')
    .replaceAll('自', '自')
    .replaceAll('訂', '订')
    .replaceAll('學期', '学期')
    .replaceAll('分', '分')
    .replaceAll('須', '须')
    .replaceAll('整', '整')
    .replaceAll('合', '合')
    .replaceAll('體', '体')
    .replaceAll('驗', '验')
    .replaceAll('須', '须');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(
    `Updated ${locale}.json with ${Object.keys(translations).length} duration-batch1 MBA academic strings.`,
  );
}
