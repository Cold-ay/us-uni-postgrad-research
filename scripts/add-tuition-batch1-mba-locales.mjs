import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Columbia Business School Financial Aid Full-Time MBA and MBAxMS costs page lists 2026–27 August-entry Cost of Attendance with Tuition $93,908 (9-month first-year budget). Mandatory fees $6,783, health insurance $5,823, and living expenses are separate; first-year total budget $143,030. Continuing (second-year) budget also lists Tuition $93,908 (mandatory fees $6,678; second-year total budget $142,925). Note that tuition and fees generally increase 2–7% in the second year. Full-time MBA only — not Professional MBA or EMBA.':
    '哥伦比亚商学院财务援助全日制 MBA/MBAxMS 费用页列出 2026–27 八月入学费用：学费 $93,908（9 个月一年级预算）。必缴杂费 $6,783、健康保险 $5,823 及生活费另计；一年级总预算 $143,030。续读（二年级）预算学费同为 $93,908（必缴杂费 $6,678；二年级总预算 $142,925）。学费与杂费第二年通常上涨 2–7%。仅全日制 MBA，不含 Professional MBA 或 EMBA。',
  'Tuck Cost of Attendance for Academic Year 2026–2027 lists Tuition $87,536 for Class of 2028 (on- or off-campus) and Class of 2027 (off-campus). Program fee is separate ($6,150 first-year / $5,440 second-year). Housing, food, and health insurance ($5,216) are separate. Footnote: tuition costs are for AY 2026–27 and subject to change; anticipate a 3–5% increase for 2027–28. First year is four terms; second year three terms on Tuck’s quarter schedule.':
    'Tuck 2026–2027 学年就读费用：2028 届（校内或校外）及 2027 届（校外）学费 $87,536。项目费另计（一年级 $6,150 / 二年级 $5,440）。住宿、餐饮及健康保险（$5,216）另计。脚注：学费适用于 2026–27 学年且可能调整；预计 2027–28 上涨 3–5%。一年级四个学季，二年级三个学季（Tuck 学季制）。',
  'Haas Financial Aid 2026–27 Estimated Cost of Attendance (Full-Time MBA): Nonresident Year 1 Tuition & Fees Subtotal $92,755 (Fall+Spring; includes systemwide tuition, campus/class pass fees, Nonresident Supplemental Tuition $12,245, PDST $62,880, IREF). Resident Tuition & Fees Subtotal $80,510. Mandatory SHIP health insurance $8,206 AY is billed separately (waivable with comparable coverage); Direct billable with SHIP ≈ $100,881 nonresident / $88,716 resident. One-time Document Management Fee $119 for new students is not in COA. Registrar 2026–27 Fee Schedule Full-time MBA continuing semester totals align ($50,480.25 nonresident / $44,357.75 resident including SHIP). Haas marketing costs page still shows 2025–26 estimates — use FAO/registrar 2026–27 figures. Full-time MBA only — not EMBA/evening/online.':
    '哈斯财务援助 2026–27 全日制 MBA 预估就读费用：非居民 Year 1 学费及杂费小计 $92,755（秋+春；含系统学费、校园/通行证费、非居民附加学费 $12,245、PDST $62,880、IREF）。居民小计 $80,510。强制 SHIP 健康保险 $8,206/学年另计（可凭同等保险豁免）；含 SHIP 直接账单约非居民 $100,881 / 居民 $88,716。新生一次性档案管理费 $119 不计入 COA。注册办 2026–27 全日制 MBA 续读学期总额一致（含 SHIP：非居民 $50,480.25 / 居民 $44,357.75）。哈斯营销页仍显示 2025–26 预估——请以财务援助/注册办 2026–27 数据为准。仅全日制 MBA，不含 EMBA/晚间/在线。',
  'Yale SOM Affording Your MBA Cost Information lists Cost of Attendance 2026–27 with Tuition $90,900 and Program Fee $500 (Total Tuition and Fees $91,400). Living expenses, books, transportation, and Yale Health insurance ($3,764) are separate; total single-student budget $128,976. Joint-degree fees may differ.':
    '耶鲁 SOM「负担 MBA」费用信息：2026–27 就读费用学费 $90,900、项目费 $500（学费及杂费合计 $91,400）。生活费、书本、交通及 Yale Health 保险（$3,764）另计；单身学生总预算 $128,976。联合学位费用可能不同。',
  'Darden Tuition, Fees & Billing for Class of 2028: Fall 2026 / Spring 2027 Tuition $41,664 per semester for Non-Virginia domicile and International students → $83,328 AY. Virginia domicile tuition $39,505/semester → $79,010 AY. Comprehensive and activity fees are separate; published Fall/Spring Tuition & Fees (excl. case fees) are $44,000 Non-VA / $41,500 VA per semester ($88,000 / $83,000 AY). COA Class of 2028 lists Tuition & Fees $88,000 Non-VA / $88,240 International / $83,000 Virginia, plus case fees $1,100. Health insurance $4,220 billed in Fall if on UVA plan. Full-time residential MBA — not EMBA.':
    '达顿 2028 届学费、杂费与账单：2026 秋/2027 春非弗吉尼亚州籍及国际学生每学期学费 $41,664 → 学年 $83,328。弗州籍 $39,505/学期 → 学年 $79,010。综合及活动费另计；公布秋/春学费及杂费（不含案例费）非弗州 $44,000 / 弗州 $41,500 每学期（学年 $88,000 / $83,000）。2028 届 COA 学费及杂费非弗州 $88,000 / 国际 $88,240 / 弗州 $83,000，另加案例费 $1,100。若使用 UVA 计划，健康保险 $4,220 秋季收取。全日制住读 MBA，不含 EMBA。',
  'Michigan Ross Full-Time MBA Tuition & Financial Aid: 2026–2027 rates approved by the Board of Regents in June 2026 — Non-Michigan Residents/International $83,946 per academic year; Michigan Residents $78,586. Mandatory fees $246.89 per full term; International Student Services Fee $500 per term for F/J visa students. Living-cost guidance (books, food & housing, personal, loan fees) is separate. 2027–2028 rates to be posted July 2027. Full-time MBA only — not Weekend/Online/EMBA.':
    '密歇根 Ross 全日制 MBA 学费与资助：校董会 June 2026 批准 2026–2027 费率——非密歇根居民/国际 $83,946/学年；密歇根居民 $78,586。全日制学期必缴杂费 $246.89；F/J 签证学生每学期国际服务费 $500。生活费指引（书本、食宿、个人、贷款费）另计。2027–2028 费率将于 July 2027 公布。仅全日制 MBA，不含周末/在线/EMBA。',
  'Fuqua Daytime MBA Tuition + Costs: for students beginning August 2026 (Class of 2028), tuition is currently $83,700 USD ($41,850 Fall + $41,850 Spring; includes $4,000 non-refundable deposit credited to Fall). 2026–27 first-year COA lists additional fees (health fee, MBA Association, pre-term fee, etc.) and living expenses separately; Total COA $118,974. Dual-degree blended rates differ. Daytime MBA only — not Executive/online formats.':
    'Fuqua 日间 MBA 学费与费用：August 2026 入学（Class of 2028）学费现为 $83,700（秋 $41,850 + 春 $41,850；含 $4,000 不可退订金计入秋季）。2026–27 一年级 COA 另列杂费（健康费、MBA 协会、学前费用等）及生活费；总 COA $118,974。双学位混合费率不同。仅日间 MBA，不含高管/在线项目。',
  'Cornell SC Johnson / Johnson Two-Year MBA Tuition & financing Estimated cost of attendance for Fall/Spring term (academic year 2026–27) lists Tuition $88,934. Separate first-year fee $1,500 (core course packs/materials, charged first semester only), student activity fees $100, health fee $600; living costs separate. Total estimated COA $127,278. Two-Year Ithaca full-time MBA — not Cornell Tech MBA or EMBA.':
    '康奈尔 SC Johnson 两年制 MBA 学费与融资：2026–27 学年秋/春预估就读费用学费 $88,934。另有一年级费用 $1,500（核心课程包/材料，仅第一学期）、学生活动费 $100、健康费 $600；生活费另计。预估总 COA $127,278。伊萨卡两年制全日制 MBA，非 Cornell Tech MBA 或 EMBA。',
};

const toHant = s =>
  s
    .replaceAll('学', '學')
    .replaceAll('费', '費')
    .replaceAll('杂', '雜')
    .replaceAll('预', '預')
    .replaceAll('计', '計')
    .replaceAll('际', '際')
    .replaceAll('签证', '簽證')
    .replaceAll('书', '書')
    .replaceAll('读', '讀')
    .replaceAll('总', '總')
    .replaceAll('缴', '繳')
    .replaceAll('保险', '保險')
    .replaceAll('账', '賬')
    .replaceAll('营销', '營銷')
    .replaceAll('据', '據')
    .replaceAll('负担', '負擔')
    .replaceAll('联合', '聯合')
    .replaceAll('指导', '指引');

for (const locale of ['zh-Hans', 'zh-Hant']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, zh] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hans' ? zh : toHant(zh);
  }
  const sorted = Object.fromEntries(Object.keys(dict).sort().map(k => [k, dict[k]]));
  writeFileSync(path, `${JSON.stringify(sorted, null, 2)}\n`);
}
console.log('Updated locale strings:', Object.keys(translations).length);
