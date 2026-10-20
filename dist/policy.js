export const asOf = '2026-10-20';
export const scanType = 'initial_baseline+delta';
export const items = [
  {
    id: 'opt-fees-nprm-2026-10',
    title: 'DHS proposes $70,000 / $30,000 OPT recommendation fees on schools',
    summary: 'NPRM published 2026-10-08 (ICEB-2026-0100): SEVP-certified schools would pay $70,000 before first OPT recommendation of any type and $30,000 before each subsequent OPT (including STEM). CPT excluded. Comments due 2026-11-09. Not in effect.',
    sources: [
      'https://www.federalregister.gov/documents/2026/10/08/2026-20660/optional-practical-training-fees',
      'https://oiss.yale.edu/news/dhs-proposes-new-fees-for-optional-practical-training-opt',
    ],
    affected: ['F-1 students seeking OPT/STEM OPT', 'SEVP schools/DSOs', 'top CS/MBA ISSS offices'],
    slate_impact: 'High for Fall 2027 cohort post-grad OPT windows if finalized; current OPT rules remain until final rule.',
    school_specific: true,
    confidence: 'developing'
  },
  {
    id: 'dos-fixed-admission-enjoined',
    title: 'Fixed admission period for F-1 (end of duration of status) — final rule enjoined',
    summary: 'Final rule 2026-07-17 would replace F/J/I duration of status with fixed admission (generally up to 4 years). Effective date had been 2026-09-15. On 2026-09-14 D. Mass. postponed effective date and preliminarily enjoined implementation. USCIS proceeds under prior regulations for now.',
    sources: [
      'https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant',
      'https://www.uscis.gov/i-765',
    ],
    affected: ['F-1 academic students', 'multi-year MS/MBA/PhD'],
    slate_impact: 'If injunction lifts, expect I-539 burden; currently not implemented per USCIS.',
    school_specific: false,
    confidence: 'developing'
  },
  {
    id: 'baseline-sevis-visa-opt-fees',
    title: 'Current baseline: SEVIS $350, MRV $185, I-765 OPT track, entry/issuance windows',
    summary: 'I-901 SEVIS F/M $350; student visa application $185; F/M visas up to 365 days before start; entry ≤30 days before I-20 start; I-765 commonly $520 paper / $470 online; OPT/STEM premium $1,780 (G-1055 10/16/26).',
    sources: [
      'https://www.ice.gov/sevis/i901',
      'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
      'https://www.uscis.gov/sites/default/files/document/forms/g-1055.pdf',
    ],
    affected: ['Prospective and current F-1 students', 'Fall 2027 applicants'],
    slate_impact: 'Operational cost and timeline baseline.',
    school_specific: false,
    confidence: 'confirmed'
  },
  {
    id: 'visa-wait-times-2026-09',
    title: 'F/M/J interview wait times vary sharply by post (State table 2026-09-17)',
    summary: 'Hong Kong <0.5 month; Shanghai 1; Guangzhou 2.5; Beijing 5.5; Mumbai 2.5; New Delhi 2; Vancouver 8. Estimates only; exclude administrative processing.',
    sources: [
      'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html',
    ],
    affected: ['F-1 visa applicants by consular post'],
    slate_impact: 'Start interviews early for Fall 2027 in longer-wait posts.',
    school_specific: false,
    confidence: 'confirmed'
  },
  {
    id: 'yale-oiss-opt-alert',
    title: 'Yale OISS publishes OPT fee NPRM guidance for students',
    summary: 'Yale OISS (2026-10-08) confirms NPRM is proposal only; current OPT/STEM processing continues; fee would be paid by school before I-20 OPT recommendation.',
    sources: ['https://oiss.yale.edu/news/dhs-proposes-new-fees-for-optional-practical-training-opt'],
    affected: ['Yale F-1 students', 'peer ISSS at top schools'],
    slate_impact: 'Template for how top-school ISSS may communicate; monitor peers.',
    school_specific: true,
    confidence: 'confirmed'
  },
  {
    id: 'isss-opt-nprm-wave-2026-10',
    title: 'Catalog-school ISSS offices publish OPT fee NPRM alerts (25 of 42 crawled)',
    summary: 'Deep ISSS crawl of unique Fall 2027 CS/MBA catalog universities: 25 public OPT-fee NPRM posts (proposal only; $70k/$30k school-paid fees; comments generally through 2026-11-09; current OPT continues). 12 confirmed no public OPT NPRM post on fetched pages (several still cover D/S injunction and/or CPT pauses). 5 fetch failed (Chicago, Emory, UVA, UCSB, UGA)—not no-alert. Schools with alerts include Yale, MIT, CMU, Berkeley, Cornell, Princeton, Georgia Tech, UW, Michigan, UCSD, Columbia (CF-blocked body), UCLA, Wisconsin–Madison, Penn, JHU, USC, Brown, Dartmouth, UCI, UNC, Vanderbilt, Indiana, UT Dallas, WashU, Rice. Several state they will oppose/comment or coordinate with associations. Not legal advice.',
    sources: [
      'https://www.cmu.edu/oie/news-and-events/2026-2027/october/opt-proposed-rule.html',
      'https://iso.mit.edu/news/dhs-proposed-rule-to-establish-new-f-1-optional-practical-training-fees/',
      'https://internationaloffice.berkeley.edu/immigration/policy-updates',
      'https://davisic.princeton.edu/immigration/current-students/optional-practical-training',
      'https://international.globallearning.cornell.edu/alerts/guidance-dhs-proposes-new-opt-fees',
      'https://isss.oie.gatech.edu/content/optional-practical-training',
      'https://iss.washington.edu/dhs-proposes-new-opt-fees/',
      'https://internationalcenter.umich.edu/about/news/opt-fee-proposal',
      'https://iseo.ucsd.edu/contact/news/updates.html',
      'https://isso.columbia.edu/news/dhs-proposes-new-fees-optional-practical-training-opt',
      'https://internationalcenter.ucla.edu/immigration-updates',
      'https://iss.wisc.edu/proposed-rule-change-to-collect-opt-stem-fees/',
      'https://global.upenn.edu/isss/news-articles/dhs-proposes-new-opt-fees-current-requirements-unchanged/',
      'https://ois.jhu.edu/university-community-resources/legal/recent-federal-immigration-actions/',
      'https://ois.usc.edu/update-regarding-proposed-opt-fees/',
    ],
    affected: [
      'F-1 students at catalog schools',
      'Fall 2027 CS/MBA applicants watching OPT path',
      'ISSS/DSO offices',
    ],
    slate_impact: 'Shows broad top-school awareness and likely institutional pushback before Nov 9 comments; OPT rules unchanged until any final rule.',
    school_specific: true,
    confidence: 'confirmed'
  },
  {
    id: 'isss-opt-nprm-opposing-comments',
    title: 'Several top schools publicly plan opposing comments on OPT fee NPRM',
    summary: 'Public ISSS pages state institutional opposition or comment plans / association coordination, including: Cornell, Dartmouth, Michigan Ann Arbor, Penn, USC, University of Washington. Still proposal-only; no fee in effect.',
    sources: [
      'https://international.globallearning.cornell.edu/alerts/guidance-dhs-proposes-new-opt-fees',
      'https://iss.washington.edu/dhs-proposes-new-opt-fees/',
      'https://internationalcenter.umich.edu/about/news/opt-fee-proposal',
      'https://global.upenn.edu/isss/news-articles/dhs-proposes-new-opt-fees-current-requirements-unchanged/',
      'https://ois.usc.edu/update-regarding-proposed-opt-fees/',
      'https://ovis-intl.dartmouth.edu/taxes-legal/federal-immigration-law-and-policy-changes',
    ],
    affected: ['F-1 students at those schools', 'peers watching comment period'],
    slate_impact: 'Signal that elite ISSS offices expect advocacy/litigation path if rule finalizes; monitor comment docket through 2026-11-09.',
    school_specific: true,
    confidence: 'confirmed'
  },
  {
    id: 'i-765-opt-paper-filing-location-2026-10-07',
    title: 'USCIS changed Form I-765 paper filing locations (incl. F-1 OPT)',
    summary: 'Effective 2026-10-07, USCIS changed lockbox filing addresses for mailed Form I-765. Standalone paper I-765 for F-1 OPT categories (c)(3)(A) pre-completion, (c)(3)(B) post-completion, and (c)(3)(C) STEM OPT goes to USCIS Chicago Lockbox (USPS Attn I-765 C03, P.O. Box 805373, Chicago, IL 60680-5374; courier Attn I-765 C03 (Box 805373), 131 S. Dearborn, 3rd Floor, Chicago, IL 60603-5517). 30-day grace: forms postmarked on or before 2026-11-09 to any prior location still accepted. Wrong post-grace address may delay or risk rejection. Online filing and fee amounts unchanged by this alert. Same-day changes also hit I-539 and other forms. In effect for new mailings.',
    sources: [
      'https://www.uscis.gov/i-765-addresses',
      'https://www.uscis.gov/forms/us-citizenship-and-immigration-services-filing-locations-and-online-filing-options-updates',
      'https://www.uscis.gov/i-765',
    ],
    affected: ['current F-1 filing paper OPT/STEM OPT I-765', 'future OPT paper filers'],
    slate_impact: 'Low for Fall 2027 applicants now (OPT years away); material process risk for anyone mailing OPT I-765 before/after the 2026-11-09 grace end.',
    school_specific: false,
    confidence: 'confirmed'
  },
  {
    id: 'ead-auto-ext-final-2026-10',
    title: 'DHS finalizes removal of automatic EAD extensions (certain categories)',
    summary: 'Final rule 2026-20955 (91 FR 65306), effective 2026-10-14, reaffirms the Oct 30, 2025 IFR: for covered categories, a timely I-765 renewal filed on/after 2025-10-30 does not automatically extend an expired/expiring EAD (limited statutory/TPS exceptions). USCIS OPT page still states that a timely STEM OPT I-765 yields a separate 180-day employment-authorization bridge while pending. Northeastern OGS note (IFR-day) says the change does not impact F-1 STEM OPT extension 180-day bridge. Not legal advice; student-category edge cases developing.',
    sources: [
      'https://www.federalregister.gov/documents/2026/10/14/2026-20955/removal-of-automatic-extensions-for-certain-employment-authorization-documents',
      'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students',
      'https://international.northeastern.edu/ogs/dhs-ends-automatic-ead-extensions-for-certain-applicants/',
    ],
    affected: [
      'EAD renewal filers in covered 274a.12(c) categories',
      'F-1 OPT/STEM applicants (STEM bridge appears intact per USCIS OPT page)',
    ],
    slate_impact: 'Fall 2027 post-grad OPT/STEM path: do not assume general auto-EAD extension; STEM 180-day bridge still described by USCIS.',
    school_specific: false,
    confidence: 'confirmed'
  },
  {
    id: 'deference-nprm-2026-10',
    title: 'USCIS proposes removing deference to prior eligibility determinations on extensions',
    summary: 'NPRM 2026-20941 published 2026-10-14 would remove 8 CFR 214.1(c)(5) deference when adjudicating requests to extend a petition for employment/stay (same facts). Comments due 2026-11-13. Not in effect. Primary path is employment-based I-129 extensions (e.g. H-1B), i.e. post-OPT pipeline, not F-1 study admission.',
    sources: [
      'https://www.federalregister.gov/documents/2026/10/14/2026-20941/removing-deference-to-prior-uscis-determinations-of-eligibility',
    ],
    affected: [
      'Nonimmigrant workers seeking petition/stay extensions',
      'F-1 alumni later on H-1B/other worker categories',
    ],
    slate_impact: 'Adjacent watch for Fall 2027 → OPT → H-1B path; could raise extension RFEs/denials if finalized. Not a current F-1 study-rule change.',
    school_specific: false,
    confidence: 'developing'
  },
];
