import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'UT Dallas MBA Cost & Tuition Plan 2026–2027 Estimated Variable Tuition (Full-Time MBA): Nonresident Cost $18,266 Fall I + $18,266 Spring I = $36,532 academic year (matches Bursar Non-Resident/Graduate Variable 2026–27 rate at 12+ SCH). Resident Cost $9,111/semester ($18,222 AY). Separate MBA/program Fees column $1,500 Fall I + $1,700 Spring I = $3,200 AY (MGT supplemental $100/SCH) not included in the $36,532. Published full-program Nonresident Tuition on 53 credits $60,307 + Fees $5,300 = $65,607 — full-duration totals, not used as the annual figure. School states all Full-Time admits get ≥$1,000 merit scholarship qualifying for resident rates; nonresident sticker used per OOS-primary rule. Full-time MBA only — not Professional/Online.':
    'UT Dallas MBA 2026–2027 预估可变学费（全日制 MBA）：非居民 Fall I $18,266 + Spring I $18,266 = 学年 $36,532（与 Bursar 2026–27 非居民/研究生可变费率 12+ 学分一致）。居民 $9,111/学期（学年 $18,222）。MBA/项目费栏 Fall I $1,500 + Spring I $1,700 = 学年 $3,200（MGT 附加 $100/学分）未含于 $36,532。公布 53 学分全项目非居民学费 $60,307 + 费用 $5,300 = $65,607 为全学制合计，不作年度数字。学校称全日制录取者均获 ≥$1,000  merit 奖学金并可适用居民费率；按州外优先规则采用非居民标价。仅全日制 MBA，不含 Professional/Online。',
  'USC Marshall Full-Time MBA Tuition & Fees based on 2026–2027 rates: First-year Tuition $86,295; Second-year Tuition $78,450. Separate first-year line items: USC Central Services and Health Fees $1,922, MBA Program Fees $3,000, PRIME Fee $3,850, Student Health Insurance $3,988 — first-year published total $99,055 (excludes housing/living). Second-year total $84,481. Rates may rise ~3–5% annually; official USC rates at arr.usc.edu. Full-time MBA only — not IBEAR/part-time.':
    'USC Marshall 全日制 MBA 2026–2027 学费与费用：一年级学费 $86,295；二年级 $78,450。一年级另列：USC 中央服务与健康费 $1,922、MBA 项目费 $3,000、PRIME 费 $3,850、学生健康保险 $3,988——一年级公布合计 $99,055（不含住宿/生活）。二年级合计 $84,481。费率可能每年上涨约 3–5%；官方费率见 arr.usc.edu。仅全日制 MBA，不含 IBEAR/非全日制。',
  'UGA Terry Full-Time MBA Tuition and Fees 2026–2027: Non-Resident Tuition $36,000; Georgia Resident $14,064; Out-of-Country $37,032. Student Fees $1,494 (all) — Total Tuition + Fees 1 Year Non-Resident $37,494 / Resident $15,558 / Out-of-Country $38,526. One-time nonrefundable MBA Program Fee $500 and PreMBA Coursework $170 separate. UGA Bursar Fall 2026/Spring 2027: MBA Athens Out-of-State 12+ hrs $18,000/semester (= $36,000 AY). Full-time Athens MBA only — not Online/Executive/Fast Track Professional MBA.':
    'UGA Terry 全日制 MBA 2026–2027 学费与费用：非居民学费 $36,000；佐治亚居民 $14,064；境外 $37,032。学生活动费 $1,494（各类相同）——1 年学费+杂费非居民 $37,494 / 居民 $15,558 / 境外 $38,526。一次性不可退 MBA 项目费 $500 及 PreMBA 课程 $170 另计。UGA Bursar 2026 秋/2027 春：Athens MBA 州外 12+ 学时 $18,000/学期（= 学年 $36,000）。仅 Athens 全日制 MBA，不含在线/高管/Fast Track Professional MBA。',
  'Georgia Tech Scheller Full-time MBA Tuition and Financing: Out-of-State $44,956/Year; In-State $30,548/Year; Out-of-Country $46,260/Year. Mandatory Fees $1,516/Year (plus $100 international student fee when applicable). Confirmed on Bursar Fall 2026 MBA chart: Out-of-State tuition $22,478 at 12+ credit hours/semester → $44,956 AY; institute fees $758/semester → $1,516 AY. Full-time MBA only — not Evening MBA.':
    'Georgia Tech Scheller 全日制 MBA 学费与融资：州外 $44,956/年；州内 $30,548/年；境外 $46,260/年。必缴杂费 $1,516/年（适用时另加国际学生费 $100）。Bursar 2026 秋 MBA 表确认：州外 12+ 学分/学期学费 $22,478 → 学年 $44,956；学院杂费 $758/学期 → 学年 $1,516。仅全日制 MBA，不含晚间 MBA。',
  'WashU Olin Full-Time MBA Cost, Aid and Scholarships (posted Spring 2026) for candidates starting Fall 2026: Tuition $72,700 ($36,350/semester) under Academic Year 2026–27 — equals two flat-rate semesters. Program Fee $900, Student Government Fee $130, Health and Wellness Fee $350 per semester (fees not in the $72,700). Published Total $150,920 ($37,730/semester) is the four-semester / full-program estimate (4 × $36,350 tuition + 4 × $1,380 fees = $150,920), not used as the annual tuition field. Bulletin 2026–27 lists Full-Time MBA $36,350 per semester (four semesters standard). Page note calling the $72,700 \'entire program\' conflicts with semester math and bulletin; AY figure used. Full-time MBA only — not Flex/EMBA.':
    'WashU Olin 全日制 MBA 费用、资助与奖学金（Spring 2026 发布，Fall 2026 入学）：2026–27 学年学费 $72,700（$36,350/学期）——两个定额学期。项目费 $900、学生会费 $130、健康与 wellness 费 $350/学期（未含于 $72,700）。公布合计 $150,920（$37,730/学期）为四学期/全项目估算（4×$36,350 学费 + 4×$1,380 杂费），不作年度学费字段。2026–27 公报列全日制 MBA $36,350/学期（标准四学期）。页面将 $72,700 称为「整个项目」与学期计算及公报冲突；采用学年数字。仅全日制 MBA，不含 Flex/EMBA。',
  'ASU W. P. Carey Full-time MBA Cost and aid page publishes only estimated total tuition and fees for the 21-month program — Resident $66,000, Nonresident $120,000, International $130,000 — with no academic-year or per-semester breakdown. Separate enrollment deposit $1,000 and matriculation fee $500. No official 2026–27 academic-year tuition figure found without inventing a split of the program total; tuition field left null. Full-time MBA only — not Online/Executive.':
    'ASU W. P. Carey 全日制 MBA 费用与资助页仅公布 21 个月项目预估学费及杂费合计——居民 $66,000、非居民 $120,000、国际 $130,000——无学年或每学期拆分。另列入学订金 $1,000 及注册费 $500。未找到无需拆分项目总额即可采用的官方 2026–27 学年学费；学费字段留空。仅全日制 MBA，不含在线/高管。',
  'Rice Business Full-Time MBA Tuition and Fees: Tuition for 2026–27 Full-Time MBA (and MD/MBA) $79,116 per year ($39,558/semester flat rate). Required fees annual total $1,323 (GSA $45, Student Organization $8, Health & Wellness Support $720, MBA Activity $550) — not included in the $79,116. Optional health insurance $3,448; estimated textbooks $2,600. Confirmed on Rice Graduate Tuition, Fees, and Expenses 2026–2027 (MBA Degree, Full-Time Program Tuition annual $79,116). Full-time MBA only — not Hybrid/Professional/Executive/Online.':
    'Rice Business 全日制 MBA 学费与费用：2026–27 全日制 MBA（及 MD/MBA）学费 $79,116/年（$39,558/学期定额）。必缴杂费年合计 $1,323（GSA $45、学生组织 $8、健康与支持 $720、MBA 活动 $550）——未含于 $79,116。可选健康保险 $3,448；预估教材 $2,600。Rice 研究生 2026–2027 学费费用页确认（MBA 学位全日制项目年学费 $79,116）。仅全日制 MBA，不含 Hybrid/Professional/Executive/Online。',
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
    .replaceAll('据', '據')
    .replaceAll('仅', '僅')
    .replaceAll('含', '含')
    .replaceAll('不含', '不含')
    .replaceAll('居民', '居民')
    .replaceAll('非居民', '非居民')
    .replaceAll('州外', '州外')
    .replaceAll('州内', '州內')
    .replaceAll('发布', '發布')
    .replaceAll('字段', '欄位')
    .replaceAll('留空', '留空')
    .replaceAll('订金', '訂金')
    .replaceAll('注册', '註冊')
    .replaceAll('公报', '公報')
    .replaceAll('学期', '學期')
    .replaceAll('学年', '學年')
    .replaceAll('学分', '學分')
    .replaceAll('全日制', '全日制')
    .replaceAll('在线', '線上')
    .replaceAll('高管', '高管');

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
