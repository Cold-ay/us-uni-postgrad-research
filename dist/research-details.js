// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = {
  'mit-cs': { kind: 'PhD route', availability: 'No external terminal master’s', availabilityType: 'restricted', orientation: 'Doctoral admissions only', deadline: 'Not a standalone master’s application' },
  'caltech-cs': { kind: 'PhD route', availability: 'No standard terminal master’s', availabilityType: 'restricted', orientation: 'Doctoral program', deadline: 'Not a standard terminal master’s route' },
  'princeton-cs': { kind: 'MSE / MEng', availability: 'Fall 2027 master’s intake suspended', availabilityType: 'closed', deadline: 'No Fall 2027 master’s applications', funding: 'The department describes funded master’s degrees, but has suspended Fall 2027 admission. This is not an available Fall 2027 funding opportunity.' },
  'washington-cs': { availability: 'PMP: no F-1 / J-1 applicants', availabilityType: 'restricted', orientation: 'Professional master’s · Visa restriction' },
  'harvard-cs': { kind: 'Related SM', availability: 'Related CSE degree · not standalone CS', availabilityType: 'alternative', orientation: 'Computational science · Applied mathematics' },
  'stanford-cs': {
    ...referenceCost(
      69717,
      'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates',
      'Graduate School of Engineering quarterly rate for 11–18 units is $23,239 (2026–27). Three academic-year quarters (Autumn–Spring) = $69,717. 8–10 units is $15,100/quarter. Per-unit above 18: $1,549. MS CS requires 45 units; HCP/online uses a different per-unit schedule. Living costs and Cardinal Care are separate.',
      'Academic-year tuition (Engineering, 11–18 units × 3 quarters)'
    ),
    orientation: 'Coursework or research · 45 units',
    scholarships: ['SCH-002'],
    sources: [
      ['Official tuition / budget', 'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates'],
      ['MS admissions', 'https://www.cs.stanford.edu/admissions/masters-admissions'],
      ['MS requirements', 'https://www.cs.stanford.edu/masters-degree-requirements'],
      ['Specializations', 'https://www.cs.stanford.edu/masters-specializations']
    ]
  },
  'berkeley-cs': {
    ...referenceCost(
      73766.5,
      'https://registrar.berkeley.edu/tuition-fees/fee-schedule/',
      'Registrar Master of Engineering (All M.Eng Degrees) per-semester continuing totals: residents $29,767.75; nonresidents $36,883.25 (includes tuition, Student Services Fee, campus/transit fees, PDST $16,850 resident / $17,843 nonresident, NRST $6,122.50 for nonresidents, IREF, and health insurance $4,103). Program is Fall+Spring only → nonresident AY $73,766.50. New students add $119 document fee in first semester ($37,002.25 first-semester nonresident total).',
      'Academic-year tuition and mandatory fees (MEng nonresident, continuing)'
    ),
    kind: 'MEng',
    orientation: 'Professional · Technical leadership · Capstone',
    sources: [
      ['Official tuition / budget', 'https://registrar.berkeley.edu/tuition-fees/fee-schedule/'],
      ['MEng EECS program', 'https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/']
    ]
  },
  'illinois-cs': {
    ...referenceCost(
      40444,
      'https://www.registrar.illinois.edu/g-tuition-rates-2627/',
      'Registrar: Engineering and Engineering Related Programs (including Computer Science) — Nonresident or International Range I (12+ hours) $20,222/semester ($40,444 AY Fall+Spring). Resident Range I $10,636/semester ($21,272 AY). Range II (6–11 hours) nonresident/international $13,482/semester ($26,964 AY); Illinois Cost Calculator for MCS international at 9 credits matches Range II. Campus fees and living costs are extra. Online MCS uses a different per-credit schedule—not recorded here.',
      'Academic-year tuition (MCS / Engineering, international or nonresident, Range I 12+ hours)'
    ),
    kind: 'MS / MCS',
    orientation: 'Research MS or professional MCS',
    sources: [
      ['Official tuition / budget', 'https://www.registrar.illinois.edu/g-tuition-rates-2627/'],
      ['Credit-hour ranges', 'https://www.registrar.illinois.edu/g-tuition-cr-2627/'],
      ['MCS tuition page', 'https://siebelschool.illinois.edu/academics/graduate/professional-mcs/tuition-fees'],
      ['Cost calculator MCS international 9 cr', 'https://cost.illinois.edu/Home/Cost/I/G/10KS0112MCS/9/120268/120268']
    ]
  },
  'cornell-cs': {
    ...referenceCost(
      29500,
      'https://bursar.cornell.edu/students-parents/tuition-rates-and-fees',
      'Bursar: Endowed Research Master’s (M.S. and listed M.A./non-degree) $14,750/semester, $29,500/year (2026–27). CS MS admitted students receive full tuition, stipend, and health insurance via required TA-ships each of four semesters—so billed tuition is typically covered for admitted students. Separately, M.Eng is Professional Tier 1: $36,973/semester, $73,946/year (self-supported).',
      'Academic-year tuition (Endowed research master’s MS)'
    ),
    kind: 'MS / MEng',
    orientation: 'Separate research and professional routes',
    sources: [
      ['Official tuition / budget', 'https://bursar.cornell.edu/students-parents/tuition-rates-and-fees'],
      ['CS MS apply / funding', 'https://www.cs.cornell.edu/master-science-computer-science/apply'],
      ['MEng admissions', 'https://www.cs.cornell.edu/master-engineering-computer-science/apply']
    ]
  },
  'gatech-cs': {
    ...referenceCost(
      33080,
      'https://bursar.gatech.edu/student/tuition/su27/su27_totals.pdf',
      'Bursar 2026–27 Atlanta campus graduate Master & PhD Candidates: In-State $7,280/semester (12+ hrs) or $607/hr (1–11); Out-of-State $16,073/semester (12+) or $1,341/hr; Out-of-Country $16,540/semester (12+) or $1,379/hr. International-relevant figure uses Out-of-Country full-time: $16,540 × 2 = $33,080 AY. Mandatory student fees $608/semester at 4+ credits not included in the tuition figure. OMSCS ($227/hr) is excluded.',
      'Academic-year tuition (campus Master & PhD, out-of-country, 12+ hours × 2 semesters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://bursar.gatech.edu/student/tuition/su27/su27_totals.pdf'],
      ['MSCS specializations', 'https://www.cc.gatech.edu/ms-computer-science-specializations']
    ]
  },
  'texas-cs': {
    ...referenceCost(
      18162,
      'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/',
      'Graduate Nonresident Natural Sciences: 9 semester hours = $9,081 per semester → $18,162 for Fall+Spring. At 12 hours: $10,970/semester. Separately, the catalog lists Option III Computer Science (MSCompSci) total program fee estimate $10,000 (same resident/nonresident)—commonly associated with the online/CDSO pathway. Confirm with UTCS which schedule applies to a specific on-campus research MS offer.',
      'Academic-year tuition and fees (Natural Sciences nonresident graduate, 9 hours × 2 semesters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/'],
      ['Tuition rates hub', 'https://onestop.utexas.edu/managing-costs/cost-tuition-rates/tuition-rates/'],
      ['Research degrees / on-campus MS', 'https://www.cs.utexas.edu/graduate/research-degrees'],
      ['Cost & aid', 'https://www.cs.utexas.edu/graduate/cost-and-aid']
    ]
  },
  'michigan-cs': {
    ...referenceCost(
      68038,
      'https://ro.umich.edu/tuition-residency/tuition-fees/2026-2027/graduate/full-term/college-engineering-graduate-full-term',
      'Registrar College of Engineering Graduate Full Term 2026–27: Michigan Non-Resident 9+ (Full-Time) $34,019 per full term; Michigan Resident $18,308. Typical academic year = Fall + Winter full terms → nonresident $68,038. CSE MS/MSE uses Engineering graduate rates. Master’s funding is not guaranteed at admission.',
      'Academic-year tuition (College of Engineering graduate, nonresident full-time × 2 full terms)'
    ),
    sources: [
      ['Official tuition / budget', 'https://ro.umich.edu/tuition-residency/tuition-fees/2026-2027/graduate/full-term/college-engineering-graduate-full-term'],
      ['CSE master’s program', 'https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/']
    ]
  },
  'ucsd-cs': {
    ...referenceCost(
      38087.17,
      'https://students.ucsd.edu/finances/fees/registration/2026-27/graduate.html',
      'UCSD Graduate Registration Fees 2026–27: California Nonresidents annual total $38,087.17 (includes systemwide tuition $13,722, Student Services Fee $1,344, campus fees, mandatory health insurance $6,660, and Nonresident Supplemental Tuition $15,102). California Residents annual total $22,985.17. CSE MS uses the standard graduate schedule (not self-supporting). One-time Enrollment Services Fee $115 is included in the published Fall/annual nonresident total. International visa administration fee $200 is separate.',
      'Academic-year registration fees total (graduate nonresident)'
    ),
    sources: [
      ['Official tuition / budget', 'https://students.ucsd.edu/finances/fees/registration/2026-27/graduate.html'],
      ['MS program', 'https://cse.ucsd.edu/graduate/degree-programs/ms-program']
    ]
  },
  'maryland-cs': {
    ...referenceCost(
      34488,
      'https://billpay.umd.edu/GraduateTuition',
      'UMD Student Financial Services Fall 2026 & Spring 2027: graduate Non-Resident tuition $1,916/credit (Resident $913). Academic-year reference at 9 credits/semester (mandatory campus-fee plateau) = $17,244 × 2 = $34,488. Campus fees for 9+ credits: $738/semester ($1,476 AY) not included in the tuition figure. Extended Studies CS professional page lists the same out-of-state per-credit rate and estimates 30-credit total master’s tuition $57,480 (out-of-state). SHIP (~$2,939 AY) and international student fee $125/semester are separate. MS is 30 credits.',
      'Academic-year tuition (graduate nonresident, 9 credits × 2 semesters)'
    ),
    availability: 'CSMS route · confirm catalog distinction',
    availabilityType: 'review',
    deadline: '4 Dec 2026 · MS application page',
    deadlineDate: '2026-12-04',
    sources: [
      ['Official tuition / budget', 'https://billpay.umd.edu/GraduateTuition'],
      ['Extended Studies CS tuition', 'https://exst.umd.edu/professionals-post-baccalaureates/professional-graduate-programs/computer-science/tuition-and-fees'],
      ['MS prospective / catalog', 'https://www.cs.umd.edu/grad/ms-catalog'],
      ['Grad apply', 'https://www.cs.umd.edu/grad/apply'],
      ['CMSC catalog — different MS route', 'https://academiccatalog.umd.edu/graduate/programs/computer-science-cmsc/computer-science-ms/'],
      ['Rank 12 cross-check · May 2026', 'https://science.umd.edu/newsletters/cs/2026-05.html']
    ]
  },
  'columbia-cs': {
    ...referenceCost(
      67728,
      'https://sfs.columbia.edu/content/graduate-engineering-cost-attendance',
      'Columbia Engineering Graduate Tuition bulletin and SFS Graduate Engineering COA 2026–27: M.S. tuition $2,822 per credit/point. Full-time COA budgets 12 points/semester → $33,864/semester → $67,728 AY Fall+Spring. A typical 30-credit MS CS totals $84,660 in tuition across the degree (pace varies). Mandatory fees in the COA (health insurance, health service, university services, SEAS activities, document fee) and living costs are separate; CS is not listed with the IEOR/AI program fee.',
      'Academic-year tuition (SEAS MS, $2,822/point × 12 points × 2 semesters)'
    ),
    orientation: 'Pathways · 30 points · Thesis by invitation',
    sources: [
      ['Official tuition / budget', 'https://sfs.columbia.edu/content/graduate-engineering-cost-attendance'],
      ['SEAS graduate tuition bulletin', 'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/'],
      ['MS CS program', 'https://www.cs.columbia.edu/education/ms/']
    ]
  },
  'purdue-cs': {
    ...referenceCost(
      29918,
      'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/graduate-tuition-and-fees-2026-2027/',
      'Purdue Bursar Graduate Tuition and Fees 2026–27: Computer Science & Engineering flat rate (8+ credit hours) Non-Resident sub-total tuition $14,959/semester → $29,918 AY (includes General Service, Fitness/Wellness, Student Activity, Nonresident Tuition, and Differential General Service $562/semester). Indiana Resident CS&E sub-total $5,558/semester ($11,116 AY). International students add International Fee $200/semester ($400 AY) on top of the nonresident CS&E total ($15,159/semester; $30,318 AY). Separately, Professional Master’s “MA in Computer Science” is billed per credit ($1,413.25 nonresident/international; 30-credit estimate $42,397.50)—not used here; the catalog master’s curriculum page is the standard on-campus MS. Living costs extra.',
      'Academic-year tuition and mandatory fees (CS & Engineering graduate, nonresident, 8+ hours × 2 semesters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/graduate-tuition-and-fees-2026-2027/'],
      ['Professional master’s fees (alternate schedule)', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/professional-masters-program-fees-2026-2027/'],
      ['MS curriculum', 'https://www.cs.purdue.edu/graduate/curriculum/masters.html']
    ]
  },
  'ucla-cs': {
    ...referenceCost(
      38232.76,
      'https://sa.ucla.edu/RO/Fees/Public/public-fees',
      'UCLA Registrar public fee tables Academic Master annual 2026–27 nonresident continuing total $38,232.76 (Tuition $13,722 + NRST $15,102 + Student Services Fee $1,344 + UCSHIP $7,516.98 + campus fees). California resident continuing total without NRST $23,130.76. Grad Division rounds these to about $38,233 / $23,131. New students add one-time Document Fee $97.43. CS MS uses the standard Academic Master schedule (not a self-supporting program). NRST PhD candidacy waiver does not apply to MS.',
      'Academic-year tuition and mandatory fees (Academic Master, nonresident, continuing)'
    ),
    orientation: 'Thesis or student-driven capstone',
    funding: 'The department explicitly does not guarantee TA, graduate student researcher or reader positions to MS students.',
    sources: [
      ['Official tuition / budget (Registrar public fees)', 'https://sa.ucla.edu/RO/Fees/Public/public-fees'],
      ['Grad Division tuition summary', 'https://grad.ucla.edu/funding/tuition/'],
      ['Financial aid COA', 'https://financialaid.ucla.edu/graduate-aid/cost-of-attendance'],
      ['Graduate admissions', 'https://www.cs.ucla.edu/graduate-admissions/'],
      ['Admissions and MS funding limitations', 'https://www.cs.ucla.edu/graduate-requirements/']
    ]
  },
  'wisconsin-cs': {
    ...referenceCost(
      24054.4,
      'https://www.wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf',
      'UW System Tuition Schedule 2026–27 UW–Madison Graduate full-time Nonresident tuition $12,027.20/term → $24,054.40 AY Fall+Spring. Resident $5,363.76/term ($10,727.52 AY). Segregated fees $849.74/term ($1,699.48 AY) not included in the tuition figure. This is the standard graduate schedule used by the traditional CS MS/PhD track. Separately, the Professional Program MS (PMP) lists nonresident $1,503.40/credit (matches the graduate part-time nonresident rate); PMP is self-funded and not used as the primary figure here. Traditional-track funding/tuition remission is common but out of scope for this tuition reference.',
      'Academic-year tuition (graduate nonresident full-time × 2 terms)'
    ),
    orientation: 'Traditional MS/PhD or professional MS',
    sources: [
      ['Official tuition / budget', 'https://www.wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf'],
      ['Bursar Fall 2026 announcement', 'https://bursar.wisc.edu/tuition-and-fees/fall-2026-increase'],
      ['CS degree programs', 'https://www.cs.wisc.edu/grad/programs/'],
      ['Funding & COA', 'https://www.cs.wisc.edu/grad/programs/funding/'],
      ['Professional MS', 'https://www.cs.wisc.edu/grad/programs/pmp/']
    ]
  },
  'penn-cs': {
    ...referenceCost(
      52950,
      'https://srfs.upenn.edu/costs-budgeting/seas',
      'Penn SRFS SEAS on-campus master’s 2026–27: tuition $8,825 per course unit (CU). Catalog CIS MSE requires 10 CUs; sample plans use 3 CUs in a typical Fall or Spring term → AY tuition reference $8,825 × 3 × 2 = $52,950. At 4 CUs/term: $35,300/semester ($70,600 AY). Mandatory fees at 3 CUs: General Fee $2,134 + Technology Fee $405 + Clinical Fee $385 (semester totals with tuition $29,399)—fees not included in the tuition figure. Full 10-CU degree tuition at $8,825 = $88,250. Online Engineering rates differ.',
      'Academic-year tuition (SEAS on-campus master’s, 3 CUs × 2 semesters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://srfs.upenn.edu/costs-budgeting/seas'],
      ['CIS MSE catalog', 'https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/'],
      ['Residential master’s CS admissions', 'https://gradadm.engineering.upenn.edu/residential-masters/computer-science/']
    ]
  },
  'jhu-cs': {
    ...referenceCost(
      68670,
      'https://engineering.jhu.edu/education/graduate-studies/graduate-financial-aid/affording-your-education/',
      'Johns Hopkins Whiting School of Engineering Cost of Attendance: WSE Residential Master’s and PhD Full-time Tuition $68,670 annually / $34,335 per semester (2026–27). The separately listed “Non-resident Fee” $6,868 annually is a part-time/non-resident enrollment status charge, not an out-of-state surcharge for on-campus full-time students—do not add it to the residential full-time figure. Matriculation fee $500 and living/insurance costs are separate. MSE CS is the full-time residential route.',
      'Academic-year tuition (WSE residential master’s / PhD full-time)'
    ),
    kind: 'MSE',
    orientation: 'Human language technology · AI track',
    sources: [
      ['Official tuition / budget', 'https://engineering.jhu.edu/education/graduate-studies/graduate-financial-aid/affording-your-education/'],
      ['MSE CS program', 'https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/'],
      ['MSE programs (catalog target)', 'https://www.cs.jhu.edu/mse-programs-original/']
    ]
  },
  'chicago-cs': {
    ...referenceCost(
      66762,
      'https://masters.cs.uchicago.edu/tuition-fees/',
      'UChicago MPCS Tuition & Fees 2026–2027: estimated total tuition 9-Course MS $66,762; 12-Course MS $89,016. Quarterly schedule: 1 course $7,415; 2 $14,833; 3 $22,254; 4 $29,668. Full-time at 3 courses for Autumn–Winter–Spring = $22,254 × 3 = $66,762 (matches the 9-course program total). Quarterly Graduate Student Services Fee $520; lifetime transcript fee $84 (first quarter only); U-SHIP listed at $1,715 using the 2025–2026 rate—fees not included in the tuition figure. Immersion coursework, if required, is billed at the one-course rate extra.',
      'Program / full-time academic-year tuition (MPCS 9-course; 3 courses × 3 quarters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://masters.cs.uchicago.edu/tuition-fees/'],
      ['MPCS admissions tuition', 'https://masters.cs.uchicago.edu/mpcs-admissions/tuition-fees/'],
      ['Program home', 'https://masters.cs.uchicago.edu/']
    ]
  },
  'duke-cs': { orientation: 'Coursework, thesis or project · AI/ML · Security', funding: 'The Graduate School’s CS MS page lists no financial aid available for the MS. External funding requires separate verification.' },
  'umass-cs': { sources: [['Graduate program and rank 25 cross-check','https://www.cics.umass.edu/academics/masters']] },
  'rice-cs': { kind: 'MCS', orientation: 'Professional · Non-thesis', deadline: '10 Feb 2027 · Early scholarship consideration', deadlineDate: '2027-02-10', funding: 'The on-campus program lists early scholarship consideration and limited TA/RA roles. Eligibility, amounts and international final deadline need confirmation; July 1 is labeled domestic.', sources: [['Rank 27 cross-check','https://engineering.rice.edu/about/facts-rankings']] },
  'uci-cs': { kind: 'MS / MCS', orientation: 'Research MS or professional MCS', deadline: 'MCS international: 15 Jan 2027; MS not verified', deadlineDate: '2027-01-15', sources: [['Professional MCS admissions FAQ','https://mcs.ics.uci.edu/faq/']] },
  'penn-mba': { ...referenceCost(87970,'https://mba.wharton.upenn.edu/tuition-financial-aid/','2026–27 university fees: $5,038; published annual budget: $135,441. Extra-curricular activities can add costs.'), orientation: 'Flexible core · Majors · Interdisciplinary options', internship: 'Individual career advising is described on the MBA page. Internship placement rate and international outcomes have not been verified.' },
  'chicago-mba': { ...referenceCost(89976,'https://www.chicagobooth.edu/mba/full-time/admissions/cost','Three quarters / nine months, MBA Class of 2028 reference. Published estimated attendance budget: $132,449. Booth says 2027–28 tuition will be released in spring 2027.'), orientation: 'Flexible curriculum · Analytical approach', deadline: 'Round 2 · 7 Jan 2027', deadlineDate: '2027-01-07' },
  'northwestern-mba': { ...referenceCost(88536,'https://kellogg.northwestern.edu/admissions/financial-aid/ft-fin-aid/','Two-Year MBA first-year tuition. Published first-year estimated budget: $130,072, including a loan-fee allowance; other MBA formats have different budgets.','Two-Year MBA · First-year tuition'), orientation: 'Two-Year MBA · Format-specific costs' },
  'harvard-mba': { ...referenceCost(84760,'https://www.hbs.edu/mba/financial-aid/tuition-assistance/cost-of-attendance','Nine-month, single-student budget: $130,318, excluding a $1,500 computer estimate. Summer housing and optional activities can add costs.'), academic: 'Two-year MBA with a shared first-year Required Curriculum and FIELD, followed by electives. The case method emphasizes decisions under incomplete information.', orientation: 'Case method · General management · FIELD', scholarships: ['SCH-004'], funding: 'HBS need-based scholarships are open to admitted domestic and international students. Aid applications follow admission; personal eligibility and amount are assessed individually.', sources: [['Tuition and attendance budget','https://www.hbs.edu/mba/financial-aid/tuition-assistance/cost-of-attendance'],['MBA curriculum','https://www.hbs.edu/mba/academic-experience/curriculum'],['Case method','https://www.hbs.edu/mba/academic-experience/the-case-method'],['Need-based scholarships','https://www.hbs.edu/mba/financial-aid/tuition-assistance']] },
  'mit-mba': { ...referenceCost(91892,'https://mitsloan.mit.edu/mba/admissions/financing-your-education','Published figure includes the mandatory $2,200 annual MBA program fee. Living costs and full-degree total are not recorded here.','Annual tuition + MBA program fee') },
  'nyu-mba': { ...referenceCost(92658,'https://www.stern.nyu.edu/programs-admissions/full-time-mba/financial-aid/tuition-cost-attendance','First-year, nine-month budget: $140,668, including $2,040 LAUNCH orientation fee and a loan-fee allowance.','First-year tuition') },
  'michigan-mba': { orientation: 'Action learning · MAP consulting project', internship: 'MAP is a required seven-week consulting project preparing students for internships and careers. A project is not a guaranteed paid internship.', sources: [['Rank 13 cross-check','https://michiganross.umich.edu/graduate/full-time-mba']] },
  'cornell-mba': { academic: 'Core business study and a second-semester immersion prepare students for a required summer internship. Second-year electives allow customization.', orientation: 'Immersion · Required summer internship', internship: 'The Two-Year MBA curriculum explicitly requires an internship in the summer between years. Placement is not guaranteed by this requirement.', programUrl: 'https://business.cornell.edu/admissions/graduate/mba/curriculum/' },
  'vanderbilt-mba': { academic: 'Core and career-focused electives are completed before internships; concentrations and emphases customize the degree.', orientation: 'Core before internships · Concentrations', internship: 'The program describes individualized career support and preparation before internships. Placement difficulty and international-specific results have not been evaluated.' },
  'ucla-mba': { academic: 'Elective specializations and a capstone field study support applied learning. Students can pursue a client project or a Business Creation Capstone.', orientation: 'Electives · Client or venture capstone', internship: 'The capstone provides hands-on client work; it is not itself a guaranteed paid internship.' },
  'indiana-mba': { degree: 'Full-Time +Flex MBA', academic: 'Integrated core and Career Foundation Academies with company-based consulting projects. The +Flex pathway permits second-year completion on campus or online; international visa implications need checking.', orientation: 'Integrated core · Career Academies · +Flex', availability: '+Flex delivery · confirm visa implications', availabilityType: 'review' },
  'utd-mba': { academic: '53-credit cohort MBA over 18–21 months, beginning in July. Daytime core and evening electives; confirm the exact 2027 start rather than assuming a September intake.', orientation: 'Cohort · 18–21 months · July start', programUrl: 'https://mba.utdallas.edu/academics/full-time-mba/curriculum/' },
  'usc-mba': { academic: 'Two-year in-person MBA with a Career Launchpad immersion featuring coaching, pitch training and networking preparation.', orientation: 'Two-year · Career Launchpad', internship: 'Career Launchpad provides career planning and networking preparation. This is support, not a verified internship placement guarantee.' },
  'gatech-mba': { academic: 'Full-time MBA core plus electives and 14 STEM-designated concentration options.', orientation: 'Core + electives · Concentrations' },
  'washu-mba': { orientation: '67 credits · 12 specializations', faculty: 'The specialization page identifies Patrick Moreton as faculty advisor for Strategy and Consulting. This is an advising role, not confirmation of research supervision availability.', sources: [['Specializations and faculty advisor','https://olin.washu.edu/programs/mbas/full-time-mba/specializations.php']] }
};
