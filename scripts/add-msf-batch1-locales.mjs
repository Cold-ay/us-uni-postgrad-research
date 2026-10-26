import { readFileSync, writeFileSync } from 'node:fs';
import { programs } from '../dist/data.js';

const toHant = (s) =>
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
    .replaceAll('负担', '負擔')
    .replaceAll('联合', '聯合')
    .replaceAll('指导', '指引')
    .replaceAll('据', '據')
    .replaceAll('营销', '營銷')
    .replaceAll('签证', '簽證')
    .replaceAll('专业', '專業')
    .replaceAll('项目', '項目')
    .replaceAll('申请', '申請')
    .replaceAll('录取', '錄取')
    .replaceAll('奖学金', '獎學金')
    .replaceAll('仅', '僅')
    .replaceAll('标准', '標準')
    .replaceAll('秋季', '秋季');

/** zh-Hans strings for MSF batch1 program narratives (numbers preserved). */
const zhHans = {
  'MIT Sloan MFin: 12- or 18-month formats starting summer. Tuition 2026–27: $96,884 (12-mo) / $133,007 (18-mo). Single app deadline Jan 5, 2027 (3pm ET); decisions March 2027.':
    'MIT Sloan MFin：夏季开学，12 或 18 个月。2026–27 学费 $96,884（12 个月）/ $133,007（18 个月）。申请截止 2027 年 1 月 5 日 15:00（美东）；2027 年 3 月出结果。',
  'Program-tied funding verified 2026-10-26: SCH-085. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-085。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-086. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-086。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-087. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-087。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-088. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-088。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-089. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-089。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-090. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-090。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-091, SCH-092. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-091、SCH-092。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'Program-tied funding verified 2026-10-26: SCH-093, SCH-094. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.':
    '已核实项目资助（2026-10-26）：SCH-093、SCH-094。MBA 专项奖学金（如 SCH-025、SCH-052、SCH-056）不适用于此 MSF 路径。',
  'SUMMER START (July), not autumn Fall. 12-month = summer+fall+spring; 18-month adds second fall. Low-residency summer option with reduced tuition if 15.401+15.402 completed pre-entry. Not a Fall-2027-only quote.':
    '夏季开学（七月），非秋季入学。12 个月 = 夏+秋+春；18 个月另加第二个秋季。若入学前完成 15.401+15.402 可选低驻校夏季路径及较低学费。非仅 Fall 2027 报价。',
  'Alternate format: Program tuition 18-month format (2026–27 AY) $133,007. Required course packs included in tuition; textbooks separate. See MIT SFS graduate COA for non-tuition budget (tuition on SFS page should be ignored per MFin page). SUMMER START (July), not autumn Fall. 12-month = summer+fall+spring; 18-month adds second fall. Low-residency summer option with reduced tuition if 15.401+15.402 completed pre-entry. Not a Fall-2027-only quote. Official MFin tuition page; course packs included; textbooks/living separate. Not a Fall-2027-only quote. SUMMER START — matriculation is not a standard autumn-only Fall intake.':
    '另一学制：18 个月项目学费（2026–27 学年）$133,007。学费含必修课程包；教科书另计。非学费预算见 MIT SFS 研究生 COA（MFin 页面说明勿采用 SFS 页学费）。夏季开学（七月），非秋季入学。12 个月 = 夏+秋+春；18 个月另加第二个秋季。若入学前完成 15.401+15.402 可选低驻校夏季路径。非仅 Fall 2027 报价。官方 MFin 学费页；生活费另计。夏季开学 — 非正常秋季入学。',
  'Princeton M.Fin.: Fall 2027 apps open; deadline Dec 15, 2026 11:59pm ET. Four-semester curriculum + summer internship. AY 2026–27 tuition $65,210 (+ SHP $4,220).':
    'Princeton M.Fin.：Fall 2027 申请开放；截止 2026 年 12 月 15 日 23:59（美东）。四学期课程 + 暑期实习。2026–27 学年学费 $65,210（另加 SHP $4,220）。',
  'M.Fin. typically 4 semesters / 2 academic years (compressed 2-semester option for select admits after admission). Two-year tuition ≈ 2×$65,210 before SHP; SHP charged each year of enrollment. Missing ≠ full-degree total. Fall 2027 intake context.':
    'M.Fin. 通常 4 学期 / 2 学年（部分录取者可压缩为 2 学期）。两年学费约 2×$65,210（不含 SHP）；SHP 每年收取。缺失 ≠ 全学位总费用。Fall 2027 入学语境。',
  'Student Health Plan (SHP) fee $4,220 AY; tuition+SHP total $69,430 per year (Graduate School rates). M.Fin. typically 4 semesters / 2 academic years (compressed 2-semester option for select admits after admission). Two-year tuition ≈ 2×$65,210 before SHP; SHP charged each year of enrollment. Missing ≠ full-degree total. University regular tuition rate; M.Fin. is typically 2 academic years (4 semesters). Living costs separate. Living cost band from official COA: $33,141–$39,770 (Princeton Graduate School published living expenses 2026–27: $33,141 (10 months) / $39,770 (12 months) — housing, food, personal, books & supplies.).':
    '学生健康计划（SHP）$4,220/学年；学费+SHP 每年 $69,430（研究生院费率）。M.Fin. 通常 4 学期 / 2 学年。两年学费约 2×$65,210（不含 SHP）。校方常规学费；生活费另计。官方生活费区间：$33,141–$39,770（2026–27 研究生院公布：10 个月 $33,141 / 12 个月 $39,770 — 含住房、餐饮、个人、书本用品）。',
  'WashU Olin MSF: three concentrations. Fall 2026-start tuition $81,500 (Corporate, 2 sem) or $102,900 (Quant / WAM, 3 sem) + per-semester fees.':
    'WashU Olin MSF：三个方向。Fall 2026 入学学费 $81,500（Corporate，2 学期）或 $102,900（Quant / WAM，3 学期），另加每学期费用。',
  'Flat program tuition; three concentrations with different length/cost. Page labels costs for candidates starting Fall 2026. Living/health insurance not in tuition. Fall 2027 intake context.':
    '固定项目学费；三方向学制与费用不同。页面标注适用于 Fall 2026 入学。生活费/健康保险不含在学费内。Fall 2027 入学语境。',
  'Alternate format: Quantitative OR Wealth & Asset Management total tuition (Fall 2026 starters, 3 semesters) $102,900. Per semester posted Spring 2026: program fee $900 + student government $100 + health/wellness $350 = $1,350/semester. Corporate (2 sem) ≈ $2,700 fees; Quant/W&AM (3 sem) ≈ $4,050 fees. Health insurance separate (required). Flat program tuition; three concentrations with different length/cost. Page labels costs for candidates starting Fall 2026. Living/health insurance not in tuition. Flat program tuition for Fall 2026 start candidates; living/health insurance separate.':
    '另一学制：Quantitative 或 Wealth & Asset Management 总学费（Fall 2026 入学，3 学期）$102,900。2026 春公布每学期：项目费 $900 + 学生会 $100 + 健康 $350 = $1,350/学期。Corporate（2 学期）费用约 $2,700；Quant/W&AM（3 学期）约 $4,050。健康保险另计（必需）。固定项目学费；生活费/健康保险不含在学费内。',
  'GSU Robinson MSF: STEM; evening Buckhead. Fall 2027 rounds Oct 26 2026 → rolling. Costs: GA $38,822 / non-GA $47,987 / out-of-country $49,379.':
    'GSU Robinson MSF：STEM；Buckhead 晚间班。Fall 2027 轮次自 2026-10-26 起至滚动截止。费用：佐治亚居民 $38,822 / 非佐治亚 $47,987 / 境外 $49,379。',
  'Evening weekday program at Buckhead Center (5:30–9:45 p.m.); STEM-designated. 12- or 16-month options. Costs may be offset with graduate assistantship (see awards). Fall 2027 intake context.':
    'Buckhead 中心平日晚间（5:30–9:45 p.m.）；STEM。12 或 16 个月。可通过研究生助理（见奖学金）抵减费用。Fall 2027 入学语境。',
  'Nonrefundable seat deposit $250. Published figures are program costs; GA residents $38,822; non-GA $47,987. Tuition subject to change. Evening weekday program at Buckhead Center (5:30–9:45 p.m.); STEM-designated. 12- or 16-month options. Costs may be offset with graduate assistantship (see awards). Published program costs; seat deposit $250 nonrefundable. GA / living separate. Evening weekday classes (5:30–9:45 p.m.) at Buckhead Center — working-professional friendly; STEM-designated.':
    '不可退订位费 $250。公布为项目总费用；佐治亚居民 $38,822；非佐治亚 $47,987。学费可能调整。Buckhead 晚间（5:30–9:45 p.m.）STEM 项目；12 或 16 个月；助理可抵减费用。生活费另计。适合在职人士。',
  'USC Marshall MSF: Fall start, 16 months, 36 units, STEM. Deadlines Nov 1 2026 / Jan 15 2027 / Apr 15 2027. Est. tuition+fees ~$94,872 at 2025–26 rates.':
    'USC Marshall MSF：秋季开学，16 个月，36 学分，STEM。截止 2026-11-01 / 2027-01-15 / 2027-04-15。按 2025–26 费率估学费+杂费约 $94,872。',
  'STEM. Fall start only. Official USC tuition published annually; this is an estimate at time of publishing on Marshall page. Fall 2027 intake context.':
    'STEM。仅秋季开学。USC 学费每年公布；Marshall 页面发布时为估算。Fall 2027 入学语境。',
  'Mandatory fees total $3,396 over 3 semesters as published; total estimated tuition+fees $94,872. Excludes housing, health insurance, transport, food. STEM. Fall start only. Official USC tuition published annually; this is an estimate at time of publishing on Marshall page. Page total estimated COA tuition+mandatory fees $94,872 excluding housing/health/transport/food. Not a locked Fall 2027 quote.':
    '3 学期强制杂费合计 $3,396；估学费+杂费 $94,872。不含住房、健康保险、交通、餐饮。STEM；仅秋季开学。非锁定 Fall 2027 报价。',
  'Brandeis MSF: 9-mo ($44,200) or 16-mo ($57,200 tuition across terms) for 2026–27. Fall rounds Nov 1 / Jan 15 / Mar 1 / Apr 15.':
    'Brandeis MSF：9 个月（$44,200）或 16 个月（跨学期学费 $57,200），2026–27。Fall 轮次 11/1、1/15、3/1、4/15。',
  'STEM. Fall 2027 and Spring 2027 starts available for MSF. Living expenses published on same calculator (food/housing $20,970 for 9 months).':
    'STEM。MSF 可选 Fall 2027 或 Spring 2027 入学。生活费见同一计算器（9 个月餐饮住房 $20,970）。',
  'Alternate format: MSF 16-month tuition total (Y1 $40,040 + Y2 fall $17,160) $57,200. 9-month / Y1: fees $220. 16-month Y2 fall: fees $60. Orientation fee $100 first term (FAQ/admissions materials). Health insurance estimate $4,685 (waivable) on tuition calculator. STEM. Fall 2027 and Spring 2027 starts available for MSF. Living expenses published on same calculator (food/housing $20,970 for 9 months). Official graduate tuition calculator; living/health separate. Living cost band from official COA: $20,970 (Brandeis SFS 2026–27 MSF estimated living: Food and Housing $20,970 (9 months); plus books $750, transport $495, personal $3,340; health insurance $4,685 listed separately.).':
    '16 个月总学费 $57,200（Y1 $40,040 + Y2 秋 $17,160）。9 个月/Y1 杂费 $220；16 个月 Y2 秋 $60。迎新费 $100。健康保险估 $4,685（可豁免）。STEM；可选 Fall 2027 或 Spring 2027。Brandeis SFS 2026-27 官方生活费区间 $20,970（9 个月餐饮住房 $20,970；另列书本 $750、交通 $495、个人 $3,340；健康保险 $4,685 分列）。',
  'Utah Eccles MSF: $39,000 flat (30 cr @ $1,300). Fall 2027: priority Feb 1 / intl Apr 1 / scholarship Jun 1 / final Aug 1.':
    'Utah Eccles MSF：固定 $39,000（30 学分 × $1,300）。Fall 2027：优先 2/1、国际 4/1、奖学金 6/1、最终 8/1。',
  'Same rate for residents and non-residents. Fall 2027 and Spring 2027 starts. No graduate assistantships or fellowships from the program (per page).':
    '居民与非居民同价。可选 Fall 2027 或 Spring 2027。项目不提供 GA/奖学金（据页面）。',
  'Program page: fixed rate includes all standard fees. Living separate. Same rate for residents and non-residents. Fall 2027 and Spring 2027 starts. No graduate assistantships or fellowships from the program (per page). Program page: $39,000 for 30 credits; living separate.':
    '项目页：固定费率含标准杂费；生活费另计。居民与非居民同价。Fall/Spring 2027 入学。无 GA/奖学金。30 学分 $39,000。',
  'Texas McCombs MSF: summer start, 10 months. Intl final Round 2 (Jan 12/19 2027). Non-TX total $59,700; TX $55,600 (incl. $2k seat fee).':
    'Texas McCombs MSF：夏季开学，10 个月。国际最终轮 Round 2（2027-01-12/19）。非德州总计 $59,700；德州 $55,600（含 $2k 订位费）。',
  'SUMMER START (July) — ~10-month in-residence. Non-TX breakdown: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Fall 2027 intake context.':
    '夏季开学（七月）— 约 10 个月在校。非德州：夏 $11,900 + 秋 $22,900 + 春 $22,900 + 预注册 $2,000 = $59,700。书本/生活费/笔记本/可选费用另计。Fall 2027 入学语境。',
  'Non-refundable $2,000 pre-enrollment tuition fee required to secure seat (included in $59,700 total). Texas resident total $55,600. Intl students also responsible for international health insurance + ISSS fees (amounts not on MSF tuition page). SUMMER START (July) — ~10-month in-residence. Non-TX breakdown: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Non-TX: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Intl health + ISSS fees extra. SUMMER START — matriculation is not a standard autumn-only Fall intake.':
    '不可退 $2,000 预注册学费（含于 $59,700 总计）。德州居民总计 $55,600。国际学生另负国际健康保险及 ISSS 费用（MSF 学费页未列金额）。夏季开学（七月）约 10 个月在校。非德州：夏 $11,900 + 秋 $22,900 + 春 $22,900 + 预注册 $2,000 = $59,700。书本/生活费/笔记本/可选费用另计。国际健康及 ISSS 费用另计。夏季开学 — 非正常秋季入学。',
};

const entryCountZh = { '1 of 71 entries': { 'zh-Hans': '1 / 71 项资料', 'zh-Hant': '1 / 71 項資料' } };

const fields = ['academic', 'internship', 'funding', 'costNote', 'costDetail', 'availability'];
const existingHans = JSON.parse(readFileSync(new URL('../locales/zh-Hans.json', import.meta.url), 'utf8'));
for (const p of programs.filter((x) => x.area === 'Finance')) {
  for (const f of fields) {
    const text = p[f];
    if (text && !zhHans[text] && !existingHans[text]) {
      throw new Error(`Missing zh-Hans translation for ${p.id}.${f}`);
    }
  }
}

for (const locale of ['zh-Hans', 'zh-Hant']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, zh] of Object.entries(zhHans)) {
    dict[en] = locale === 'zh-Hans' ? zh : toHant(zh);
  }
  for (const [en, byLocale] of Object.entries(entryCountZh)) {
    dict[en] = byLocale[locale];
  }
  const sorted = Object.fromEntries(Object.keys(dict).sort().map((k) => [k, dict[k]]));
  writeFileSync(path, `${JSON.stringify(sorted, null, 2)}\n`);
}
console.log('MSF batch1 locale strings:', Object.keys(zhHans).length);
