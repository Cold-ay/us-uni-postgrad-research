// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = {
  'mit-cs': {
    kind: 'PhD route',
    availability: 'No external terminal master’s',
    availabilityType: 'restricted',
    orientation: 'Doctoral admissions only',
    deadline: 'Not a standalone master’s application',
  },
  'caltech-cs': {
    kind: 'PhD route',
    availability: 'No standard terminal master’s',
    availabilityType: 'restricted',
    orientation: 'Doctoral program',
    deadline: 'Not a standard terminal master’s route',
  },
  'princeton-cs': {
    kind: 'MSE / MEng',
    availability: 'Fall 2027 master’s intake suspended',
    availabilityType: 'closed',
    deadline: 'No Fall 2027 master’s applications',
    funding: 'The department describes funded master’s degrees, but has suspended Fall 2027 admission. This is not an available Fall 2027 funding opportunity.',
  },
  'washington-cs': {
    availability: 'PMP: no F-1 / J-1 applicants',
    availabilityType: 'restricted',
    orientation: 'Professional master’s · Visa restriction',
  },
  'harvard-cs': {
    kind: 'Related SM',
    availability: 'Related CSE degree · not standalone CS',
    availabilityType: 'alternative',
    orientation: 'Computational science · Applied mathematics',
  },
  'stanford-cs': {
    ...referenceCost(
      69717,
      'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates',
      'Graduate School of Engineering quarterly rate for 11–18 units is $23,239 (2026–27). Three academic-year quarters (Autumn–Spring) = $69,717. 8–10 units is $15,100/quarter. Per-unit above 18: $1,549. MS CS requires 45 units; HCP/online uses a different per-unit schedule. Living costs and Cardinal Care are separate.',
      'Academic-year tuition (Engineering, 11–18 units × 3 quarters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Coursework or research · 45 units',
    funding: 'CS MS pages and Stanford Grad Aid: no guaranteed department funding for MS; international students generally ineligible for Stanford/federal loans. Course/Research Assistant roles exist but are limited; PhD priority. Knight-Hennessy (SCH-002) listed in catalog but 2027 application closed.',
    confidence: 'high',
    unresolved: ['Fall 2027–28 Engineering rates not yet published', 'Exact unit plan for a typical 45-unit MS pathway (1 vs 2 years) varies by student'],
    asOf: '2026-10-20',
    scholarships: ['SCH-002'],
    sources: [
      ['Official tuition / budget', 'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates'],
      ['MS admissions', 'https://www.cs.stanford.edu/admissions/masters-admissions'],
      ['MS requirements', 'https://www.cs.stanford.edu/masters-degree-requirements'],
      ['Specializations', 'https://www.cs.stanford.edu/masters-specializations'],
      ['The Student Budget (graduate)', 'https://financialaid.stanford.edu/grad/budget/'],
      ['Estimate Your Graduate Charges', 'https://studentservices.stanford.edu/my-finances/tuition-fees/estimate-your-graduate-charges-0'],
      ['CS MS CA/RA overview', 'https://www.cs.stanford.edu/masters-course-assistant-and-research-assistant']
    ],
  },
  'berkeley-cs': {
    ...referenceCost(
      73766.5,
      'https://registrar.berkeley.edu/tuition-fees/fee-schedule/',
      'Registrar Master of Engineering (All M.Eng Degrees) per-semester continuing totals: residents $29,767.75; nonresidents $36,883.25 (includes tuition, Student Services Fee, campus/transit fees, PDST $16,850 resident / $17,843 nonresident, NRST $6,122.50 for nonresidents, IREF, and health insurance $4,103). Program is Fall+Spring only → nonresident AY $73,766.50. New students add $119 document fee in first semester ($37,002.25 first-semester nonresident total).',
      'Academic-year tuition and mandatory fees (MEng nonresident, continuing)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    kind: 'MEng',
    orientation: 'Professional · Technical leadership · Capstone',
    funding: 'MEng is a professional/industry program; do not assume PhD-style funding. Specific MEng fellowships not verified on fee pages fetched; unresolved beyond fee schedule.',
    confidence: 'high',
    unresolved: ['Official MEng-specific living/COA band not captured (Haas MBA COA is separate)', 'Program-tied scholarships for MEng EECS not verified on pages retrieved', 'Fall 2027–28 rates not published'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://registrar.berkeley.edu/tuition-fees/fee-schedule/'],
      ['MEng EECS program', 'https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/']
    ],
  },
  'illinois-cs': {
    ...referenceCost(
      40444,
      'https://www.registrar.illinois.edu/g-tuition-rates-2627/',
      'Registrar: Engineering and Engineering Related Programs (including Computer Science) — Nonresident or International Range I (12+ hours) $20,222/semester ($40,444 AY Fall+Spring). Resident Range I $10,636/semester ($21,272 AY). Range II (6–11 hours) nonresident/international $13,482/semester ($26,964 AY); Illinois Cost Calculator for MCS international at 9 credits matches Range II. Campus fees and living costs are extra. Online MCS uses a different per-credit schedule—not recorded here.',
      'Academic-year tuition (MCS / Engineering, international or nonresident, Range I 12+ hours)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    kind: 'MS / MCS',
    orientation: 'Research MS or professional MCS',
    funding: 'MCS: eligible to accept RA/TA if offered; opportunities limited and not guaranteed (Siebel MCS tuition page). Do not apply PhD funding policies to MCS/MS.',
    confidence: 'medium',
    unresolved: ['Which tuition schedule applies to research MS vs professional MCS for a given admit', 'Exact Fall 2027 rates', 'Intl eligibility for any named MCS scholarships beyond RA/TA statement'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://www.registrar.illinois.edu/g-tuition-rates-2627/'],
      ['Credit-hour ranges', 'https://www.registrar.illinois.edu/g-tuition-cr-2627/'],
      ['MCS tuition page', 'https://siebelschool.illinois.edu/academics/graduate/professional-mcs/tuition-fees'],
      ['Cost calculator MCS international 9 cr', 'https://cost.illinois.edu/Home/Cost/I/G/10KS0112MCS/9/120268/120268'],
      ['Graduate FAQs', 'https://siebelschool.illinois.edu/admissions/graduate/faqs']
    ],
  },
  'cornell-cs': {
    ...referenceCost(
      29500,
      'https://bursar.cornell.edu/students-parents/tuition-rates-and-fees',
      'Bursar: Endowed Research Master’s (M.S. and listed M.A./non-degree) $14,750/semester, $29,500/year (2026–27). CS MS admitted students receive full tuition, stipend, and health insurance via required TA-ships each of four semesters—so billed tuition is typically covered for admitted students. Separately, M.Eng is Professional Tier 1: $36,973/semester, $73,946/year (self-supported).',
      'Academic-year tuition (Endowed research master’s MS)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    kind: 'MS / MEng',
    orientation: 'Separate research and professional routes',
    funding: 'Program pages emphasize distinct MS vs M.Eng routes; funding policies differ — do not assume PhD funding for either. Specific M.Eng/MS CS assistantship guarantees not verified on bursar page.',
    confidence: 'high',
    unresolved: ['Official living/COA band for Ithaca M.Eng/MS CS not fully captured', 'Program-tied scholarships for CS M.Eng/MS', 'Fall 2027 rates'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://bursar.cornell.edu/students-parents/tuition-rates-and-fees'],
      ['CS MS apply / funding', 'https://www.cs.cornell.edu/master-science-computer-science/apply'],
      ['MEng admissions', 'https://www.cs.cornell.edu/master-engineering-computer-science/apply']
    ],
  },
  'gatech-cs': {
    ...referenceCost(
      33080,
      'https://bursar.gatech.edu/student/tuition/su27/su27_totals.pdf',
      'Bursar 2026–27 Atlanta campus graduate Master & PhD Candidates: In-State $7,280/semester (12+ hrs) or $607/hr (1–11); Out-of-State $16,073/semester (12+) or $1,341/hr; Out-of-Country $16,540/semester (12+) or $1,379/hr. International-relevant figure uses Out-of-Country full-time: $16,540 × 2 = $33,080 AY. Mandatory student fees $608/semester at 4+ credits not included in the tuition figure. OMSCS ($227/hr) is excluded.',
      'Academic-year tuition (campus Master & PhD, out-of-country, 12+ hours × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    funding: 'Campus MS funding not automatic; GRA/GTA pay reduced tuition per BOR policy when appointed. Do not apply PhD funding assumptions to MS.',
    confidence: 'high',
    unresolved: ['Confirm Spring 2027 identical Out-of-Country 12+ rate', 'Which OSFA living table year (page shows multiple blocks)', 'Campus MS program-tied scholarships'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://bursar.gatech.edu/student/tuition/su27/su27_totals.pdf'],
      ['MSCS specializations', 'https://www.cc.gatech.edu/ms-computer-science-specializations'],
      ['Gatech Bursar Tuition & Fees', 'https://bursar.gatech.edu/tuition-fees'],
      ['Fall 2026 Tuition and Fee Rates PDF', 'https://bursar.gatech.edu/sites/default/files/2026-07/fa26_totals_page_0.pdf'],
      ['Graduate Costs (OSFA)', 'https://finaid.gatech.edu/costs/graduate-costs']
    ],
  },
  'texas-cs': {
    ...referenceCost(
      18162,
      'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/',
      'Graduate Nonresident Natural Sciences: 9 semester hours = $9,081 per semester → $18,162 for Fall+Spring. At 12 hours: $10,970/semester. Separately, the catalog lists Option III Computer Science (MSCompSci) total program fee estimate $10,000 (same resident/nonresident)—commonly associated with the online/CDSO pathway. Confirm with UTCS which schedule applies to a specific on-campus research MS offer.',
      'Academic-year tuition and fees (Natural Sciences nonresident graduate, 9 hours × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    funding: 'Master’s: no automatic funding. Teaching/research positions may be available; summer FoCS internships mentioned. PhD funding must not be applied to MS.',
    confidence: 'medium',
    unresolved: ['Confirm exact credit load used for COA packaging', 'Whether MSCompSci Option III $10,000 fee applies to the research MS route and how it stacks with Natural Sciences rates', 'Official graduate living-band for CS MS', 'Fall 2027 rates'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/'],
      ['Tuition rates hub', 'https://onestop.utexas.edu/managing-costs/cost-tuition-rates/tuition-rates/'],
      ['Research degrees / on-campus MS', 'https://www.cs.utexas.edu/graduate/research-degrees'],
      ['Cost & aid', 'https://www.cs.utexas.edu/graduate/cost-and-aid'],
      ['UT tuition tables PDF (catalog)', 'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/tables-tuition-for-fall-and-spring.pdf']
    ],
  },
  'michigan-cs': {
    ...referenceCost(
      68038,
      'https://ro.umich.edu/tuition-residency/tuition-fees/2026-2027/graduate/full-term/college-engineering-graduate-full-term',
      'Registrar College of Engineering Graduate Full Term 2026–27: Michigan Non-Resident 9+ (Full-Time) $34,019 per full term; Michigan Resident $18,308. Typical academic year = Fall + Winter full terms → nonresident $68,038. CSE MS/MSE uses Engineering graduate rates. Master’s funding is not guaranteed at admission.',
      'Academic-year tuition (College of Engineering graduate, nonresident full-time × 2 full terms)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    funding: 'CSE master’s pages historically note limited funding; do not assume PhD support. Specific 2026–27 MS funding guarantees not verified on tuition page.',
    confidence: 'high',
    unresolved: ['Mandatory fees + international student fee stack for CSE MS', 'Official living/COA for Engineering master’s', 'Program-tied MS scholarships/assistantships details', '2027–28 rates (posted ~July 2027 per Ross MBA note pattern)'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://ro.umich.edu/tuition-residency/tuition-fees/2026-2027/graduate/full-term/college-engineering-graduate-full-term'],
      ['CSE master’s program', 'https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/']
    ],
  },
  'ucsd-cs': {
    ...referenceCost(
      38087.17,
      'https://students.ucsd.edu/finances/fees/registration/2026-27/graduate.html',
      'UCSD Graduate Registration Fees 2026–27: California Nonresidents annual total $38,087.17 (includes systemwide tuition $13,722, Student Services Fee $1,344, campus fees, mandatory health insurance $6,660, and Nonresident Supplemental Tuition $15,102). California Residents annual total $22,985.17. CSE MS uses the standard graduate schedule (not self-supporting). One-time Enrollment Services Fee $115 is included in the published Fall/annual nonresident total. International visa administration fee $200 is separate.',
      'Academic-year registration fees total (graduate nonresident)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    funding: 'CSE: financial opportunities page lists TA info; MS funding not guaranteed. Do not apply PhD funding policies.',
    confidence: 'high',
    unresolved: ['FAO full COA living band URL amounts not captured in this pass', 'Fall 2027–28 fees'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://students.ucsd.edu/finances/fees/registration/2026-27/graduate.html'],
      ['MS program', 'https://cse.ucsd.edu/graduate/degree-programs/ms-program'],
      ['CSE Financial Opportunities', 'https://cse.ucsd.edu/graduate/financial-opportunities']
    ],
  },
  'maryland-cs': {
    ...referenceCost(
      34488,
      'https://billpay.umd.edu/GraduateTuition',
      'UMD Student Financial Services Fall 2026 & Spring 2027: graduate Non-Resident tuition $1,916/credit (Resident $913). Academic-year reference at 9 credits/semester (mandatory campus-fee plateau) = $17,244 × 2 = $34,488. Campus fees for 9+ credits: $738/semester ($1,476 AY) not included in the tuition figure. Extended Studies CS professional page lists the same out-of-state per-credit rate and estimates 30-credit total master’s tuition $57,480 (out-of-state). SHIP (~$2,939 AY) and international student fee $125/semester are separate. MS is 30 credits.',
      'Academic-year tuition (graduate nonresident, 9 credits × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    availability: 'CSMS route · confirm catalog distinction',
    availabilityType: 'review',
    deadline: '4 Dec 2026 · MS application page',
    deadlineDate: '2026-12-04',
    funding: 'CS apply page; financial aid specifics for MS not fully verified. Do not assume PhD funding.',
    confidence: 'high',
    unresolved: ['Official FAO living-band dollar amounts (page referenced but not extracted)', 'Program-tied CS MS scholarships', '2027–28 rates'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://billpay.umd.edu/GraduateTuition'],
      ['Extended Studies CS tuition', 'https://exst.umd.edu/professionals-post-baccalaureates/professional-graduate-programs/computer-science/tuition-and-fees'],
      ['MS prospective / catalog', 'https://www.cs.umd.edu/grad/ms-catalog'],
      ['Grad apply', 'https://www.cs.umd.edu/grad/apply'],
      ['CMSC catalog — different MS route', 'https://academiccatalog.umd.edu/graduate/programs/computer-science-cmsc/computer-science-ms/'],
      ['Rank 12 cross-check · May 2026', 'https://science.umd.edu/newsletters/cs/2026-05.html']
    ],
  },
  'columbia-cs': {
    ...referenceCost(
      67728,
      'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/',
      'Columbia Engineering Graduate Tuition bulletin and SFS Graduate Engineering COA 2026–27: M.S. tuition $2,822 per credit/point. Full-time COA budgets 12 points/semester → $33,864/semester → $67,728 AY Fall+Spring. A typical 30-credit MS CS totals $84,660 in tuition across the degree (pace varies). Mandatory fees in the COA (health insurance, health service, university services, SEAS activities, document fee) and living costs are separate; CS is not listed with the IEOR/AI program fee.',
      'Academic-year tuition (SEAS MS, $2,822/point × 12 points × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Pathways · 30 points · Thesis by invitation',
    funding: 'MS pathways page; department funding for MS not verified as guaranteed. Do not apply PhD funding.',
    confidence: 'medium',
    unresolved: ['Official Engineering COA living/fees table (fetch blocked/timeout)', 'Typical credits per academic year for billing', 'MS-specific scholarships', 'Fall 2027 rate'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://sfs.columbia.edu/content/graduate-engineering-cost-attendance'],
      ['SEAS graduate tuition bulletin', 'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/'],
      ['MS CS program', 'https://www.cs.columbia.edu/education/ms/']
    ],
  },
  'purdue-cs': {
    ...referenceCost(
      29918,
      'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/graduate-tuition-and-fees-2026-2027/',
      'Purdue Bursar Graduate Tuition and Fees 2026–27: Computer Science & Engineering flat rate (8+ credit hours) Non-Resident sub-total tuition $14,959/semester → $29,918 AY (includes General Service, Fitness/Wellness, Student Activity, Nonresident Tuition, and Differential General Service $562/semester). Indiana Resident CS&E sub-total $5,558/semester ($11,116 AY). International students add International Fee $200/semester ($400 AY) on top of the nonresident CS&E total ($15,159/semester; $30,318 AY). Separately, Professional Master’s “MA in Computer Science” is billed per credit ($1,413.25 nonresident/international; 30-credit estimate $42,397.50)—not used here; the catalog master’s curriculum page is the standard on-campus MS. Living costs extra.',
      'Academic-year tuition and mandatory fees (CS & Engineering graduate, nonresident, 8+ hours × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    sources: [
      ['Official tuition / budget', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/graduate-tuition-and-fees-2026-2027/'],
      ['Professional master’s fees (alternate schedule)', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/professional-masters-program-fees-2026-2027/'],
      ['MS curriculum', 'https://www.cs.purdue.edu/graduate/curriculum/masters.html']
    ],
  },
  'ucla-cs': {
    ...referenceCost(
      38232.76,
      'https://sa.ucla.edu/RO/Fees/Public/public-fees',
      'UCLA Registrar public fee tables Academic Master annual 2026–27 nonresident continuing total $38,232.76 (Tuition $13,722 + NRST $15,102 + Student Services Fee $1,344 + UCSHIP $7,516.98 + campus fees). California resident continuing total without NRST $23,130.76. Grad Division rounds these to about $38,233 / $23,131. New students add one-time Document Fee $97.43. CS MS uses the standard Academic Master schedule (not a self-supporting program). NRST PhD candidacy waiver does not apply to MS.',
      'Academic-year tuition and mandatory fees (Academic Master, nonresident, continuing)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Thesis or student-driven capstone',
    funding: 'The department explicitly does not guarantee TA, graduate student researcher or reader positions to MS students.',
    sources: [
      ['Official tuition / budget (Registrar public fees)', 'https://sa.ucla.edu/RO/Fees/Public/public-fees'],
      ['Grad Division tuition summary', 'https://grad.ucla.edu/funding/tuition/'],
      ['Financial aid COA', 'https://financialaid.ucla.edu/graduate-aid/cost-of-attendance'],
      ['Graduate admissions', 'https://www.cs.ucla.edu/graduate-admissions/'],
      ['Admissions and MS funding limitations', 'https://www.cs.ucla.edu/graduate-requirements/']
    ],
  },
  'wisconsin-cs': {
    ...referenceCost(
      24054.4,
      'https://www.wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf',
      'UW System Tuition Schedule 2026–27 UW–Madison Graduate full-time Nonresident tuition $12,027.20/term → $24,054.40 AY Fall+Spring. Resident $5,363.76/term ($10,727.52 AY). Segregated fees $849.74/term ($1,699.48 AY) not included in the tuition figure. This is the standard graduate schedule used by the traditional CS MS/PhD track. Separately, the Professional Program MS (PMP) lists nonresident $1,503.40/credit (matches the graduate part-time nonresident rate); PMP is self-funded and not used as the primary figure here. Traditional-track funding/tuition remission is common but out of scope for this tuition reference.',
      'Academic-year tuition (graduate nonresident full-time × 2 terms)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Traditional MS/PhD or professional MS',
    sources: [
      ['Official tuition / budget', 'https://www.wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf'],
      ['Bursar Fall 2026 announcement', 'https://bursar.wisc.edu/tuition-and-fees/fall-2026-increase'],
      ['CS degree programs', 'https://www.cs.wisc.edu/grad/programs/'],
      ['Funding & COA', 'https://www.cs.wisc.edu/grad/programs/funding/'],
      ['Professional MS', 'https://www.cs.wisc.edu/grad/programs/pmp/']
    ],
  },
  'penn-cs': {
    ...referenceCost(
      52950,
      'https://srfs.upenn.edu/costs-budgeting/seas',
      'Penn SRFS SEAS on-campus master’s 2026–27: tuition $8,825 per course unit (CU). Catalog CIS MSE requires 10 CUs; sample plans use 3 CUs in a typical Fall or Spring term → AY tuition reference $8,825 × 3 × 2 = $52,950. At 4 CUs/term: $35,300/semester ($70,600 AY). Mandatory fees at 3 CUs: General Fee $2,134 + Technology Fee $405 + Clinical Fee $385 (semester totals with tuition $29,399)—fees not included in the tuition figure. Full 10-CU degree tuition at $8,825 = $88,250. Online Engineering rates differ.',
      'Academic-year tuition (SEAS on-campus master’s, 3 CUs × 2 semesters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    sources: [
      ['Official tuition / budget', 'https://srfs.upenn.edu/costs-budgeting/seas'],
      ['CIS MSE catalog', 'https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/'],
      ['Residential master’s CS admissions', 'https://gradadm.engineering.upenn.edu/residential-masters/computer-science/']
    ],
  },
  'jhu-cs': {
    ...referenceCost(
      68670,
      'https://engineering.jhu.edu/education/graduate-studies/graduate-financial-aid/affording-your-education/',
      'Johns Hopkins Whiting School of Engineering Cost of Attendance: WSE Residential Master’s and PhD Full-time Tuition $68,670 annually / $34,335 per semester (2026–27). The separately listed “Non-resident Fee” $6,868 annually is a part-time/non-resident enrollment status charge, not an out-of-state surcharge for on-campus full-time students—do not add it to the residential full-time figure. Matriculation fee $500 and living/insurance costs are separate. MSE CS is the full-time residential route.',
      'Academic-year tuition (WSE residential master’s / PhD full-time)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    kind: 'MSE',
    orientation: 'Human language technology · AI track',
    sources: [
      ['Official tuition / budget', 'https://engineering.jhu.edu/education/graduate-studies/graduate-financial-aid/affording-your-education/'],
      ['MSE CS program', 'https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/'],
      ['MSE programs (catalog target)', 'https://www.cs.jhu.edu/mse-programs-original/']
    ],
  },
  'chicago-cs': {
    ...referenceCost(
      66762,
      'https://masters.cs.uchicago.edu/tuition-fees/',
      'UChicago MPCS Tuition & Fees 2026–2027: estimated total tuition 9-Course MS $66,762; 12-Course MS $89,016. Quarterly schedule: 1 course $7,415; 2 $14,833; 3 $22,254; 4 $29,668. Full-time at 3 courses for Autumn–Winter–Spring = $22,254 × 3 = $66,762 (matches the 9-course program total). Quarterly Graduate Student Services Fee $520; lifetime transcript fee $84 (first quarter only); U-SHIP listed at $1,715 using the 2025–2026 rate—fees not included in the tuition figure. Immersion coursework, if required, is billed at the one-course rate extra.',
      'Program / full-time academic-year tuition (MPCS 9-course; 3 courses × 3 quarters)'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    sources: [
      ['Official tuition / budget', 'https://masters.cs.uchicago.edu/tuition-fees/'],
      ['MPCS admissions tuition', 'https://masters.cs.uchicago.edu/mpcs-admissions/tuition-fees/'],
      ['Program home', 'https://masters.cs.uchicago.edu/']
    ],
  },
  'duke-cs': {
    orientation: 'Coursework, thesis or project · AI/ML · Security',
    funding: 'The Graduate School’s CS MS page lists no financial aid available for the MS. External funding requires separate verification.',
  },
  'umass-cs': {
    sources: [
      ['Official tuition / budget', 'https://www.cics.umass.edu/academics/masters']
    ],
  },
  'rice-cs': {
    kind: 'MCS',
    orientation: 'Professional · Non-thesis',
    deadline: '10 Feb 2027 · Early scholarship consideration',
    deadlineDate: '2027-02-10',
    funding: 'The on-campus program lists early scholarship consideration and limited TA/RA roles. Eligibility, amounts and international final deadline need confirmation; July 1 is labeled domestic.',
    sources: [
      ['Official tuition / budget', 'https://engineering.rice.edu/about/facts-rankings']
    ],
  },
  'uci-cs': {
    kind: 'MS / MCS',
    orientation: 'Research MS or professional MCS',
    deadline: 'MCS international: 15 Jan 2027; MS not verified',
    deadlineDate: '2027-01-15',
    sources: [
      ['Official tuition / budget', 'https://mcs.ics.uci.edu/faq/']
    ],
  },
  'berkeley-mba': {
    ...referenceCost(
      92755,
      'https://haas.berkeley.edu/financial-aid/full-time-mba/cost/',
      'Haas Financial Aid COA (estimated, subject to Regents approval): Nonresident Tuition & Fees subtotal $92,755; SHIP $8,206; Housing & Food $29,882; Books $782; Personal $3,376; Transportation $3,920; Grand total COA $138,921. Resident Tuition & Fees $80,510; COA $126,676. Additional: Document Management Fee $119 (new students, not in COA); BIO international fee $100/semester for F/J. Living/housing band from official COA: $29882–$37960 (Haas 2026–27 Housing & Food $29,882; full indirect living subtotal $37,960 including books/personal/transport.).',
      'Year-1 Tuition & Fees subtotal (Nonresident Full-Time MBA)'
    ),
    costNote: '2026–27 estimated Haas COA; labels as estimates pending final UC approval. Not Fall 2027 quote or two-year total.',
    funding: 'Haas merit/need scholarships via Haas Financial Aid; intl students typically considered for school scholarships — confirm on aid pages. BIO fees apply to F/J.',
    confidence: 'high',
    unresolved: ['Final Regents-approved 2026–27 vs estimate', '2027–28 rates', 'Named Haas award cards'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://haas.berkeley.edu/financial-aid/full-time-mba/cost/'],
      ['UC Berkeley Registrar Fee Schedule', 'https://registrar.berkeley.edu/tuition-fees/fee-schedule/']
    ],
  },
  'cmu-mba': {
    ...referenceCost(
      84186,
      'https://www.cmu.edu/sfs/tuition/graduate/tepper/full-accel-mba.html',
      'CMU SFS Tepper Full-Time/Accelerated MBA budget: Tuition $42,093/semester → $84,186 AY. Single graduate student academic-year total $120,798 including housing $10,350; food $5,176; books $1,450; travel $3,220; misc $10,524; activity/transport/tech fees; health insurance $3,352; estimated loan fees $1,500. Full-Time MBA = four semesters; Accelerated = three. Laptop ~$1,500 separate. Living/housing band from official COA: $15526–$26020 (SFS single-student Housing+Food $15,526; Housing+Food+Misc+Travel $26,270 approx within published non-tuition lines.).',
      'Academic-year Full-Time MBA tuition'
    ),
    costNote: '2026–27 official SFS Tepper budget; not Fall 2027 quote. Not full four-semester total unless multiplied.',
    funding: 'Tepper MBA scholarships not detailed on SFS tuition page; check Tepper admissions financial aid. Do not invent amounts.',
    confidence: 'high',
    unresolved: ['Named Tepper MBA fellowship list/intl eligibility', '2027–28 rates'],
    asOf: '2026-10-20',
    sources: [
      ['Tepper Full-Time MBA and Accelerated MBA — SFS', 'https://www.cmu.edu/sfs/tuition/graduate/tepper/full-accel-mba.html'],
      ['2026–2027 Graduate Tuition index', 'https://www.cmu.edu/sfs/tuition/graduate/index.html']
    ],
  },
  'columbia-mba': {
    ...referenceCost(
      93908,
      'https://business.columbia.edu/financial-aid/costs/full-time',
      'CBS Financial Aid Full-Time MBA/MBAxMS costs: Tuition $93,908; Mandatory Fees $6,783; Health Insurance $5,823; Books & Supplies $1,290; Food & Housing $30,231; Personal $3,636; Transportation $1,359; Total COA $143,030 (9-month August-entry budget). Note tuition/fees generally increase 2–7% in year 2. January-entry and continuing-student budgets differ on same page. Living/housing band from official COA: $30231–$30231 (CBS published Food & Housing $30,231 in 9-month August-entry 2026–27 budget (personal/transport separate).).',
      'First-year / academic-year tuition (August entry full-time MBA)'
    ),
    costNote: '2026–27 official CBS cost page for new August entry; not Fall 2027 quote or two-year total.',
    funding: 'Merit/need aid via CBS Financial Aid; international eligibility for scholarships typically yes for school awards but verify per award. Federal loans restricted.',
    confidence: 'high',
    unresolved: ['Direct WebFetch of costs page timed out once; figures from search+prior official synthesis — re-open page to confirm if needed', 'Named CBS fellowships list and intl flags', '2027–28 tuition'],
    asOf: '2026-10-20',
    sources: [
      ['Official tuition / budget', 'https://business.columbia.edu/financial-aid/costs/full-time'],
      ['MBA program', 'https://academics.business.columbia.edu/mba']
    ],
  },
  'dartmouth-mba': {
    ...referenceCost(
      87536,
      'https://tuck.dartmouth.edu/admissions/finance-your-degree/tuition-and-costs',
      'Tuck Cost of Attendance AY 2026–2027 (single student): Tuition $87,536; on-campus Housing $16,700 (first-year default package); Program Fee $6,150 on-campus / $5,440–$6,150 off-campus variants; Books $1,500; Food allowance $10,910; Misc personal varies; Health Insurance $5,216. Example on-campus total with insurance $135,331. Anticipate 3–5% tuition increase for 2027–28. First year = 4 terms; second year = 3 terms. Living/housing band from official COA: $10910–$27400 (Tuck food allowance $10,910; on-campus housing $16,700 (direct) or off-campus housing allowance $20,475 — band depends on housing choice.).',
      'Academic-year tuition (Class of 2027 budget)'
    ),
    costNote: '2026–27 official Tuck COA; not Fall 2027 quote or two-year total. Anticipate 3–5% increase for 2027–28 per Tuck note.',
    funding: 'Tuck scholarships/fellowships pages under Finance Your Degree; intl eligibility typically yes for school merit aid — confirm each award.',
    confidence: 'high',
    unresolved: ['Named Tuck fellowship cards and intl flags', 'Exact Class of 2028 (Fall 2027 entry) tuition when published'],
    asOf: '2026-10-20',
    sources: [
      ['Tuck Tuition and Costs', 'https://tuck.dartmouth.edu/admissions/finance-your-degree/tuition-and-costs'],
      ['Scholarships and Fellowships', 'https://tuck.dartmouth.edu/admissions/finance-your-degree/scholarships-and-fellowships']
    ],
  },
  'duke-mba': {
    ...referenceCost(
      83700,
      'https://www.fuqua.duke.edu/programs/daytime-mba/tuition-costs',
      'Fuqua Daytime MBA COA 2026–27 (9 months): Tuition $83,700 (includes $4,000 non-refundable deposit credited to Fall); total direct educational expenses $92,834; books $850; living $25,290; Total COA $118,974. Merit scholarships: all applicants considered, no separate application. International Student Loan Program listed (no cosigner). Living/housing band from official COA: $14220–$25290 (Fuqua housing $14,220; total student living expenses $25,290 in 2026–27 Daytime MBA COA.).',
      'Daytime MBA tuition (Class of 2028 / entering August 2026)'
    ),
    costNote: 'Official Fuqua page for students beginning August 2026 (Class of 2028). Fall 2027 entrants (Class of 2029) rates not yet this figure — treat as prior-year reference for Fall 2027 planning until updated.',
    funding: 'Merit-based scholarships: all applicants considered. International Student Loan Program available. Yellow Ribbon / CASE / Adams LRAP have separate criteria.',
    confidence: 'high',
    unresolved: ['Tuition for Class of 2029 (Fall 2027 entry)', 'Merit award ranges'],
    asOf: '2026-10-20',
    scholarships: ['SCH-008'],
    sources: [
      ['Fuqua Daytime MBA Tuition + Costs', 'https://www.fuqua.duke.edu/programs/daytime-mba/tuition-costs']
    ],
  },
  'texas-mba': {
    ...referenceCost(
      61214,
      'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/tuition-financial-aid/',
      'McCombs Full-Time MBA Class of 2027 table: Non-Texas Residents Year 1 $61,214; Year 2 $61,214; TOTAL $122,428. Texas Residents $55,196/year. Based on expected 15/14/15/15 hour enrollment; actual varies by hours. Non-refundable $2,000 deposit credited to first semester; required $1,500 student fee summer before enrollment. First-year COA Non-Texas Resident $85,889 (tuition/fees $61,214; housing & food $17,355; transport $1,785; books $775; personal $4,760). International students charged non-resident rates + additional ISS/insurance fees not fully in estimate. Living/housing band from official COA: $17355–$17355 (McCombs first-year COA Housing & Food $17,355 (Fall 2026/Spring 2027 packaging on page).).',
      'Year-1 program tuition & fees estimate (Non-Texas Residents / International)'
    ),
    costNote: 'Official McCombs page labeled Full-Time MBA Class of 2027. For Fall 2027 intake (likely Class of 2029), treat as prior cohort reference until McCombs publishes the matching class table.',
    period: '2026–27 (Class of 2027 published schedule; verify Class of 2029 for Fall 2027 entry)',
    funding: 'All Full-Time MBA applicants considered for merit scholarships regardless of citizenship; cash awards and out-of-state tuition waivers; $2,000 to full tuition. TA/RA limited; first-semester difficult; no residency change via assistantship.',
    confidence: 'medium',
    unresolved: ['Class of 2029 (Fall 2027 entry) tuition table not confirmed on page (Class of 2027 shown)', 'Exact international mandatory fees stack'],
    asOf: '2026-10-20',
    scholarships: ['SCH-009'],
    sources: [
      ['McCombs Full-Time MBA Tuition & Financial Aid', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/tuition-financial-aid/']
    ],
  },
  'yale-mba': {
    ...referenceCost(
      90900,
      'https://som.yale.edu/programs/mba/affording-your-mba/cost-information',
      'Yale SOM Cost Information: Tuition $90,900; Program Fee $500; Total Tuition and Fees $91,400; Living (Housing/Food/Utilities) $22,991; Misc personal $5,525; Transportation $3,856; Books $1,440; Health Insurance $3,764; Total estimated living $37,576; Total single-student budget $128,976. Page notes 66% of MBA students receive scholarships; median scholarship Class of 2027 $65K. Separate scholarship application after admission. Living/housing band from official COA: $22991–$37576 (SOM 2026–27 Living Expenses $22,991; Total Estimated Living Expenses $37,576 including insurance/books/personal/transport.).',
      'Academic-year tuition'
    ),
    costNote: '2026–27 official SOM cost page; not Fall 2027 quote or two-year total.',
    funding: 'All full-time MBA students complete Scholarship Application after admission for Yale SOM scholarships; international students eligible for school scholarships (country-specific awards also exist). Median award figure is Class of 2027 statistic, not a guarantee.',
    confidence: 'high',
    unresolved: ['2027–28 tuition', 'Full list of named SOM fellowships'],
    asOf: '2026-10-20',
    scholarships: ['SCH-005'],
    sources: [
      ['Official tuition / budget', 'https://som.yale.edu/programs/mba/affording-your-mba/cost-information'],
      ['Affording Your MBA', 'https://som.yale.edu/programs/mba/affording-your-mba']
    ],
  },
  'penn-mba': {
    ...referenceCost(
      87970,
      'https://mba.wharton.upenn.edu/tuition-financial-aid/',
      '2026–27 university fees: $5,038; published annual budget: $135,441. Extra-curricular activities can add costs.',
      'Academic-year tuition'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Flexible core · Majors · Interdisciplinary options',
    internship: 'Individual career advising is described on the MBA page. Internship placement rate and international outcomes have not been verified.',
    sources: [
      ['Official tuition / budget', 'https://mba.wharton.upenn.edu/tuition-financial-aid/']
    ],
  },
  'chicago-mba': {
    ...referenceCost(
      89976,
      'https://www.chicagobooth.edu/mba/full-time/admissions/cost',
      'Three quarters / nine months, MBA Class of 2028 reference. Published estimated attendance budget: $132,449. Booth says 2027–28 tuition will be released in spring 2027.',
      'Academic-year tuition'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Flexible curriculum · Analytical approach',
    deadline: 'Round 2 · 7 Jan 2027',
    deadlineDate: '2027-01-07',
    sources: [
      ['Official tuition / budget', 'https://www.chicagobooth.edu/mba/full-time/admissions/cost']
    ],
  },
  'northwestern-mba': {
    ...referenceCost(
      88536,
      'https://kellogg.northwestern.edu/admissions/financial-aid/ft-fin-aid/',
      'Two-Year MBA first-year tuition. Published first-year estimated budget: $130,072, including a loan-fee allowance; other MBA formats have different budgets.',
      'Two-Year MBA · First-year tuition'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Two-Year MBA · Format-specific costs',
    sources: [
      ['Official tuition / budget', 'https://kellogg.northwestern.edu/admissions/financial-aid/ft-fin-aid/']
    ],
  },
  'harvard-mba': {
    ...referenceCost(
      84760,
      'https://www.hbs.edu/mba/financial-aid/tuition-assistance/cost-of-attendance',
      'Nine-month, single-student budget: $130,318, excluding a $1,500 computer estimate. Summer housing and optional activities can add costs.',
      'Academic-year tuition'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    orientation: 'Case method · General management · FIELD',
    academic: 'Two-year MBA with a shared first-year Required Curriculum and FIELD, followed by electives. The case method emphasizes decisions under incomplete information.',
    funding: 'HBS need-based scholarships are open to admitted domestic and international students. Aid applications follow admission; personal eligibility and amount are assessed individually.',
    scholarships: ['SCH-004'],
    sources: [
      ['Tuition and attendance budget', 'https://www.hbs.edu/mba/financial-aid/tuition-assistance/cost-of-attendance'],
      ['MBA curriculum', 'https://www.hbs.edu/mba/academic-experience/curriculum'],
      ['Case method', 'https://www.hbs.edu/mba/academic-experience/the-case-method'],
      ['Need-based scholarships', 'https://www.hbs.edu/mba/financial-aid/tuition-assistance']
    ],
  },
  'mit-mba': {
    ...referenceCost(
      91892,
      'https://mitsloan.mit.edu/mba/admissions/financing-your-education',
      'Published figure includes the mandatory $2,200 annual MBA program fee. Living costs and full-degree total are not recorded here.',
      'Annual tuition + MBA program fee'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    sources: [
      ['Official tuition / budget', 'https://mitsloan.mit.edu/mba/admissions/financing-your-education']
    ],
  },
  'nyu-mba': {
    ...referenceCost(
      92658,
      'https://www.stern.nyu.edu/programs-admissions/full-time-mba/financial-aid/tuition-cost-attendance',
      'First-year, nine-month budget: $140,668, including $2,040 LAUNCH orientation fee and a loan-fee allowance.',
      'First-year tuition'
    ),
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    sources: [
      ['Official tuition / budget', 'https://www.stern.nyu.edu/programs-admissions/full-time-mba/financial-aid/tuition-cost-attendance']
    ],
  },
  'michigan-mba': {
    ...referenceCost(
      83946,
      'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid',
      'Ross: Michigan Residents $78,586; Non-Michigan/International $83,946 per academic year (Regents approved June 2026). Mandatory Fees $246.89 per full term; International Student Services Fee $500 per term for F/J. COA guidance Fall 2026–Winter 2027: Books $2,000; Food & Housing $22,276; Personal $7,360; Loan Fees $224. Note: Cohort 2028 entering summer 2027 gets finalized COA in June 2027. Living/housing band from official COA: $22276–$29636 (Ross COA Food & Housing $22,276; plus Personal $7,360 for Fall 2026–Winter 2027 budget (cohort 2027).).',
      'Full-Time MBA tuition per academic year (Non-Michigan Residents/International)'
    ),
    costNote: '2026–27 Regents-approved tuition. Fall 2027 entrants (cohort 2028) should expect updated COA June 2027; 2027–28 tuition posted ~July 2027.',
    orientation: 'Action learning · MAP consulting project',
    internship: 'MAP is a required seven-week consulting project preparing students for internships and careers. A project is not a guaranteed paid internship.',
    funding: 'Automatic merit scholarship consideration on admission; $10,000 to full tuition. No separate application. Federal loans US-only; internationals use private loans. True Grit and several awards open to domestic and international students per affording page.',
    confidence: 'high',
    unresolved: ['2027–28 tuition for Fall 2027 matriculants', 'Exact Dean’s Impact stipend amount'],
    asOf: '2026-10-20',
    scholarships: ['SCH-006', 'SCH-007'],
    sources: [
      ['Rank 13 cross-check', 'https://michiganross.umich.edu/graduate/full-time-mba'],
      ['Full-Time MBA Tuition & Financial Aid', 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid'],
      ['Affording Your MBA', 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid/affording-your-mba']
    ],
  },
  'cornell-mba': {
    orientation: 'Immersion · Required summer internship',
    academic: 'Core business study and a second-semester immersion prepare students for a required summer internship. Second-year electives allow customization.',
    internship: 'The Two-Year MBA curriculum explicitly requires an internship in the summer between years. Placement is not guaranteed by this requirement.',
    programUrl: 'https://business.cornell.edu/admissions/graduate/mba/curriculum/',
  },
  'vanderbilt-mba': {
    orientation: 'Core before internships · Concentrations',
    academic: 'Core and career-focused electives are completed before internships; concentrations and emphases customize the degree.',
    internship: 'The program describes individualized career support and preparation before internships. Placement difficulty and international-specific results have not been evaluated.',
  },
  'ucla-mba': {
    orientation: 'Electives · Client or venture capstone',
    academic: 'Elective specializations and a capstone field study support applied learning. Students can pursue a client project or a Business Creation Capstone.',
    internship: 'The capstone provides hands-on client work; it is not itself a guaranteed paid internship.',
  },
  'indiana-mba': {
    availability: '+Flex delivery · confirm visa implications',
    availabilityType: 'review',
    orientation: 'Integrated core · Career Academies · +Flex',
    academic: 'Integrated core and Career Foundation Academies with company-based consulting projects. The +Flex pathway permits second-year completion on campus or online; international visa implications need checking.',
    degree: 'Full-Time +Flex MBA',
  },
  'utd-mba': {
    orientation: 'Cohort · 18–21 months · July start',
    academic: '53-credit cohort MBA over 18–21 months, beginning in July. Daytime core and evening electives; confirm the exact 2027 start rather than assuming a September intake.',
    programUrl: 'https://mba.utdallas.edu/academics/full-time-mba/curriculum/',
  },
  'usc-mba': {
    orientation: 'Two-year · Career Launchpad',
    academic: 'Two-year in-person MBA with a Career Launchpad immersion featuring coaching, pitch training and networking preparation.',
    internship: 'Career Launchpad provides career planning and networking preparation. This is support, not a verified internship placement guarantee.',
  },
  'gatech-mba': {
    orientation: 'Core + electives · Concentrations',
    academic: 'Full-time MBA core plus electives and 14 STEM-designated concentration options.',
  },
  'washu-mba': {
    orientation: '67 credits · 12 specializations',
    faculty: 'The specialization page identifies Patrick Moreton as faculty advisor for Strategy and Consulting. This is an advising role, not confirmation of research supervision availability.',
    sources: [
      ['Official tuition / budget', 'https://olin.washu.edu/programs/mbas/full-time-mba/specializations.php']
    ],
  },
};
