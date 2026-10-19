// PR-ready fragment — tuition batch3 MBA (as_of 2026-10-20)
// Merge into researchDetails by catalog id. Assumes referenceCost helper already defined in the module.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition,
  tuitionLabel: label,
  period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]],
});

export const batch3Mba = {
  'utd-mba': {
    ...referenceCost(
      36532,
      'https://mba.utdallas.edu/tuition-value/',
      'UT Dallas MBA Cost & Tuition Plan 2026–2027 Estimated Variable Tuition (Full-Time MBA): Nonresident Cost $18,266 Fall I + $18,266 Spring I = $36,532 academic year (matches Bursar Non-Resident/Graduate Variable 2026–27 rate at 12+ SCH). Resident Cost $9,111/semester ($18,222 AY). Separate MBA/program Fees column $1,500 Fall I + $1,700 Spring I = $3,200 AY (MGT supplemental $100/SCH) not included in the $36,532. Published full-program Nonresident Tuition on 53 credits $60,307 + Fees $5,300 = $65,607 — full-duration totals, not used as the annual figure. School states all Full-Time admits get ≥$1,000 merit scholarship qualifying for resident rates; nonresident sticker used per OOS-primary rule. Full-time MBA only — not Professional/Online.',
      'Academic-year tuition (Full-Time MBA, Nonresident; Fall I + Spring I)'
    ),
    sources: [
      ['Official tuition / budget', 'https://mba.utdallas.edu/tuition-value/'],
      ['Bursar tuition rates 2026–27', 'https://bursar.utdallas.edu/tuition/tuition-rates/'],
      ['Full-Time MBA academics', 'https://mba.utdallas.edu/academics/full-time-mba/'],
    ],
  },
  'usc-mba': {
    ...referenceCost(
      86295,
      'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/tuition-fees',
      'USC Marshall Full-Time MBA Tuition & Fees based on 2026–2027 rates: First-year Tuition $86,295; Second-year Tuition $78,450. Separate first-year line items: USC Central Services and Health Fees $1,922, MBA Program Fees $3,000, PRIME Fee $3,850, Student Health Insurance $3,988 — first-year published total $99,055 (excludes housing/living). Second-year total $84,481. Rates may rise ~3–5% annually; official USC rates at arr.usc.edu. Full-time MBA only — not IBEAR/part-time.',
      'Academic-year tuition (Marshall Full-Time MBA, first year)'
    ),
    sources: [
      ['Official tuition / budget', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/tuition-fees'],
      ['Full-Time MBA program', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba'],
    ],
  },
  'georgia-mba': {
    ...referenceCost(
      36000,
      'https://www.terry.uga.edu/mba/fulltime/admissions/tuition/',
      'UGA Terry Full-Time MBA Tuition and Fees 2026–2027: Non-Resident Tuition $36,000; Georgia Resident $14,064; Out-of-Country $37,032. Student Fees $1,494 (all) — Total Tuition + Fees 1 Year Non-Resident $37,494 / Resident $15,558 / Out-of-Country $38,526. One-time nonrefundable MBA Program Fee $500 and PreMBA Coursework $170 separate. UGA Bursar Fall 2026/Spring 2027: MBA Athens Out-of-State 12+ hrs $18,000/semester (= $36,000 AY). Full-time Athens MBA only — not Online/Executive/Fast Track Professional MBA.',
      'Academic-year tuition (Full-Time MBA Athens, Non-Resident)'
    ),
    sources: [
      ['Official tuition / budget', 'https://www.terry.uga.edu/mba/fulltime/admissions/tuition/'],
      ['UGA Bursar tuition & fees 2026–27', 'https://busfin.uga.edu/finance-division/bursar/students-parents/bursar-tuition-fees/2026-2027/'],
      ['Full-Time MBA curriculum', 'https://www.terry.uga.edu/mba/fulltime/curriculum/'],
    ],
  },
  'gatech-mba': {
    ...referenceCost(
      44956,
      'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/tuition-and-financing/index.html',
      'Georgia Tech Scheller Full-time MBA Tuition and Financing: Out-of-State $44,956/Year; In-State $30,548/Year; Out-of-Country $46,260/Year. Mandatory Fees $1,516/Year (plus $100 international student fee when applicable). Confirmed on Bursar Fall 2026 MBA chart: Out-of-State tuition $22,478 at 12+ credit hours/semester → $44,956 AY; institute fees $758/semester → $1,516 AY. Full-time MBA only — not Evening MBA.',
      'Academic-year tuition (Full-time MBA, Out-of-State)'
    ),
    sources: [
      ['Official tuition / budget', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/tuition-and-financing/index.html'],
      ['Bursar Fall 2026 MBA tuition PDF', 'https://bursar.gatech.edu/student/tuition/fa26/fa26_mba.pdf'],
      ['Full-time MBA curriculum', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/curriculum/index.html'],
    ],
  },
  'washu-mba': {
    ...referenceCost(
      72700,
      'https://olin.washu.edu/programs/mbas/full-time-mba/cost-aid-scholarships.php',
      'WashU Olin Full-Time MBA Cost, Aid and Scholarships (posted Spring 2026) for candidates starting Fall 2026: Tuition $72,700 ($36,350/semester) under Academic Year 2026–27 — equals two flat-rate semesters. Program Fee $900, Student Government Fee $130, Health and Wellness Fee $350 per semester (fees not in the $72,700). Published Total $150,920 ($37,730/semester) is the four-semester / full-program estimate (4 × $36,350 tuition + 4 × $1,380 fees = $150,920), not used as the annual tuition field. Bulletin 2026–27 lists Full-Time MBA $36,350 per semester (four semesters standard). Page note calling the $72,700 \'entire program\' conflicts with semester math and bulletin; AY figure used. Full-time MBA only — not Flex/EMBA.',
      'Academic-year tuition (Olin Full-Time MBA; 2 semesters)'
    ),
    sources: [
      ['Official tuition / budget', 'https://olin.washu.edu/programs/mbas/full-time-mba/cost-aid-scholarships.php'],
      ['Bulletin 2026–27 master\'s financial (PDF)', 'https://bulletin.wustl.edu/grad/business/graduate-masters/financial/financial.pdf'],
      ['Full-Time MBA curriculum', 'https://olin.washu.edu/programs/mbas/full-time-mba/curriculum.php'],
    ],
  },
  'asu-mba': {
    tuition: null,
    tuitionLabel: null,
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'ASU W. P. Carey Full-time MBA Cost and aid page publishes only estimated total tuition and fees for the 21-month program — Resident $66,000, Nonresident $120,000, International $130,000 — with no academic-year or per-semester breakdown. Separate enrollment deposit $1,000 and matriculation fee $500. No official 2026–27 academic-year tuition figure found without inventing a split of the program total; tuition field left null. Full-time MBA only — not Online/Executive.',
    sources: [
      ['Official tuition / budget', 'https://www.wpcarey.asu.edu/mba-programs/full-time'],
      ['Full-time MBA academics', 'https://www.wpcarey.asu.edu/mba-programs/full-time/academics'],
    ],
  },
  'rice-mba': {
    ...referenceCost(
      79116,
      'https://business.rice.edu/rice-mba/full-time-mba/tuition-and-financial-aid',
      'Rice Business Full-Time MBA Tuition and Fees: Tuition for 2026–27 Full-Time MBA (and MD/MBA) $79,116 per year ($39,558/semester flat rate). Required fees annual total $1,323 (GSA $45, Student Organization $8, Health & Wellness Support $720, MBA Activity $550) — not included in the $79,116. Optional health insurance $3,448; estimated textbooks $2,600. Confirmed on Rice Graduate Tuition, Fees, and Expenses 2026–2027 (MBA Degree, Full-Time Program Tuition annual $79,116). Full-time MBA only — not Hybrid/Professional/Executive/Online.',
      'Academic-year tuition (Jones Full-Time MBA)'
    ),
    sources: [
      ['Official tuition / budget', 'https://business.rice.edu/rice-mba/full-time-mba/tuition-and-financial-aid'],
      ['Rice graduate tuition & fees 2026–27', 'https://ga.rice.edu/graduate-students/student-services-organizations/tuition-fees-expenses/'],
      ['Full-Time MBA curriculum', 'https://business.rice.edu/rice-mba/full-time-mba/curriculum'],
    ],
  },
};
