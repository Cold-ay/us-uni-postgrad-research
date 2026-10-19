/** Tuition batch2 MBA overlays (as_of 2026-10-20). Tuition fields win on merge. */
export const batch2MbaIds = [
  'cmu-mba',
  'vanderbilt-mba',
  'texas-mba',
  'ucla-mba',
  'washington-mba',
  'indiana-mba',
  'unc-mba',
  'emory-mba',
];

export const batch2MbaOverlays = {
  'cmu-mba': {
    tuition: 84186,
    tuitionLabel: 'Academic-year tuition (Tepper Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'CMU Student Financial Services Tepper Full-Time MBA and Accelerated MBA page for 2026–2027 lists Tuition $42,093 Fall 2026 + $42,093 Spring 2027 = $84,186 academic year. University fees (activity $248, transportation $302, technology $490 AY), health insurance ($3,352), and living expenses are separate; single-student total budget $120,798. Full-Time MBA is four semesters; Accelerated is three — figure is one academic year only. Laptop estimate $1,500 additional. Full-time MBA only — not part-time/online.',
    sources: [
      ['Official tuition / budget', 'https://www.cmu.edu/sfs/tuition/graduate/tepper/full-accel-mba.html'],
      ['MBA curriculum', 'https://www.cmu.edu/tepper/programs/mba/curriculum'],
    ],
  },
  'vanderbilt-mba': {
    tuition: 76700,
    tuitionLabel: 'Academic-year tuition (Owen Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'Vanderbilt Owen MBA Tuition & Financing and Student Accounts Graduate/Professional Tuition and Fees 2026–2027 both list Owen Graduate School of Management Tuition $76,700 per year. Separate first-year direct costs include Maintenance Fee $1,250, Transcript Fee $100 (first Fall), Student Services Fee $694, Student Health Fee $882; health insurance and living expenses are additional. Full-time MBA only — not Executive MBA.',
    sources: [
      ['Official tuition / budget', 'https://business.vanderbilt.edu/mba/admissions/tuition-financing-scholarships/'],
      ['Student Accounts 2026–27 grad/prof fees', 'https://www.vanderbilt.edu/stuaccts/fees/tuition_fees_2026-27_grad_prof/'],
      ['MBA program', 'https://business.vanderbilt.edu/mba/'],
    ],
  },
  'texas-mba': {
    tuition: 61214,
    tuitionLabel: 'Academic-year tuition and fees (Full-Time MBA, Non-Texas resident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'Texas McCombs Full-Time MBA Tuition & Financial Aid: Non-Texas Residents Year 1 (and Year 2) program installment $61,214; Texas Residents $55,196. First-year Fall 2026 / Spring 2027 estimated COA lists Tuition & Fees $61,214 nonresident / $55,196 resident (based on expected 15/14 credit hours first year; actual billed by enrolled hours). Separate nonrefundable $1,500 MBA student fee due the summer before enrollment is not in the $61,214. Two-year program totals published as $122,428 nonresident / $110,392 resident — not used as the annual figure. Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/tuition-financial-aid/'],
      ['Full-Time MBA curriculum', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/academics/curriculum/'],
    ],
  },
  'ucla-mba': {
    tuition: 82734,
    tuitionLabel: 'Academic-year MBA program fees (Full-Time MBA, self-supporting)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'UCLA Anderson Full-Time MBA Financing Estimated Financial Aid Budget for Academic Year 2026–2027 lists Estimated MBA Program Fees $82,734 (Summer 2026 $10,635 + Fall/Winter/Spring $24,033 each). UCLA Registrar Self-Supporting Degree Fees 2026–27 lists Management MBA new students $82,733/year (continuing $79,452) — $1 difference from Anderson’s quarterly sum; Anderson budget figure used. Self-supporting flat program fee (no resident/nonresident split). Mandatory UCLA fees $2,105 and health insurance $8,668 AY are separate; total mandatory charges $93,507; total estimated student budget $137,951. Full-time MBA only — not FEMBA/EMBA.',
    sources: [
      ['Official tuition / budget', 'https://www.anderson.ucla.edu/degrees/full-time-mba/financing'],
      ['Registrar self-supporting fees 2026–27', 'https://registrar.ucla.edu/fees-residence/self-supporting-degrees'],
      ['Full-Time MBA academics', 'https://www.anderson.ucla.edu/degrees/full-time-mba/academics'],
    ],
  },
  'washington-mba': {
    tuition: 60180,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA, nonresident; 3 quarters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'UW Foster Full-Time MBA Tuition and Financing: Non-resident $20,060 tuition per quarter + $403 fees; Resident $14,166 tuition + $403 fees. Academic-year (three-quarter) nonresident tuition = 3 × $20,060 = $60,180 (tuition+fees AY ≈ $61,389). Published Total Estimated Program Cost (six quarters / two years) is $122,778 nonresident / $87,414 resident — full-program totals, not used as the annual tuition field. Cohort rate held for both years once enrolled. Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/tuition-and-fees/'],
      ['Full-Time MBA curriculum', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/curriculum/'],
    ],
  },
  'indiana-mba': {
    tuition: 55695,
    tuitionLabel: 'Academic-year tuition (Full-Time residential MBA, nonresident / international)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'Kelley Full-Time MBA 2026–27 annual expense budget: Nonresidents/international Tuition $55,695; Indiana residents $29,573. Mandatory fees $2,423 (both); housing/food, books, transportation, and personal expenses separate. Nonresident total budget $84,129; resident $58,007. Residential Full-Time MBA (Bloomington) — not online-only; +Flex Year 2 online option does not change this published tuition line.',
    sources: [
      ['Official tuition / budget', 'https://kelley.iu.edu/programs/full-time-mba/admissions/tuition-aid-scholarships.html'],
      ['Full-Time MBA academics', 'https://kelley.iu.edu/programs/full-time-mba/academics/index.html'],
    ],
  },
  'unc-mba': {
    tuition: 74192,
    tuitionLabel: 'Academic-year tuition and mandatory fees (Full-Time MBA, Non-North Carolina resident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'UNC Kenan-Flagler Full-Time MBA Tuition & Financial Aid 2026–2027: Non-North Carolina residents Tuition and mandatory fees $74,192; North Carolina residents $55,470. Living-expenses allowance $29,420 AY; nonresident total with living $103,612 / resident $84,890. School notes tuition and fees are an estimate pending state budget approval and are finalized the summer before each fall; expect 3–10% annual increases. Mandatory fees include $345 orientation fee and $1,030 MBASA dues (latter paid to association). Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/tuition-financial-aid/'],
      ['Full-Time MBA academics', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/academics/'],
    ],
  },
  'emory-mba': {
    tuition: 79200,
    tuitionLabel: 'Academic-year tuition (Goizueta Two-Year Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail:
      'Emory Student Accounts 2026–2027 Tuition & Fee Schedule lists Traditional MBA Program annual tuition $79,200 ($39,600 Fall + $39,600 Spring). Goizueta Cost of Full-Time MBA page publishes Total Tuition $158,400 and Total MBA Tuition & Fees $163,549 for the two-year degree (mandatory fees $4,904 program-level; application/transcript $245). Other annual estimated costs ~$38,444 (living, books, health insurance, parking). Two-Year full-time MBA only — not One-Year/Evening/EMBA.',
    sources: [
      ['Official tuition / budget', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions/tuition'],
      ['Emory Student Accounts 2026–27 schedule (PDF)', 'https://studentaccounts.emory.edu/_includes/documents/2026-2027-tuition-and-fee-schedule_final-3.pdf'],
      ['Two-Year MBA FAQ', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/faq'],
    ],
  },
};
