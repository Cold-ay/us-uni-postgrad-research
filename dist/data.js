import { rankedSchools } from './catalog.js';
import { rankingSources, rankingEdition } from './rankings.js';
import { researchDetails } from './research-details.js';
import { outcomeCards, outcomeAdjacentByCatalogId, outcomeSpecialtyByCatalogId } from './outcomes.js';
import { asOf as policyAsOf, scanType as policyScanType, items as policyItems } from './policy.js';
export const policy = { asOf: policyAsOf, scanType: policyScanType, items: policyItems };
export const checked = '19 October 2026';
const seedPrograms = [
  {
    id: 'cmu-mscs', university: 'Carnegie Mellon University', short: 'Carnegie Mellon', monogram: 'CMU', area: 'Computer science', degree: 'MS in Computer Science', kind: 'MS', color: 'clay',
    summary: 'A coursework foundation, with room to explore research.',
    orientation: 'Coursework · Optional research · Thesis option', tuition: 62200, tuitionLabel: 'Academic-year reference', period: '2026–27',
    costNote: 'SCS-wide reference rate; actual tuition may vary by program. Not an MSCS-specific or Fall 2027 quote.',
    costDetail: '$31,100 per fall/spring semester. The SCS budget lists $37,374 in additional annual items, including $1,500 in federal loan fees applicable to borrowers. Not every item is mandatory for every student. Full-degree cost is not yet verified.',
    deadline: 'Fall 2027 deadline not verified', deadlineDate: null,
    academic: 'Required coursework with optional research and a thesis option. MS admission does not confer preferential treatment for a later PhD application.',
    internship: 'The SCS comparison page provides general internship timing. Program-specific placement, availability and outcomes have not been verified.',
    funding: 'Master’s funding has not yet been verified. Do not apply doctoral funding policies to this degree.',
    scholarships: [], note: '02-computer-science/README.md',
    sources: [
      ['Program & curriculum', 'https://csd.cs.cmu.edu/academics/masters/ms-in-computer-science'],
      ['Tuition & attendance budget', 'https://www.cmu.edu/sfs/tuition/graduate/scs.html'],
      ['SCS program comparison', 'https://www.cs.cmu.edu/education/masters/programs-comparison']
    ]
  },
  {
    id: 'stanford-mba', university: 'Stanford University', short: 'Stanford', monogram: 'S', area: 'Business', degree: 'Master of Business Administration', kind: 'MBA', color: 'sage',
    summary: 'An MBA reference point, kept distinct from specialized master’s.',
    orientation: 'MBA · Separate comparison category', tuition: 89187, tuitionLabel: 'First-year tuition', period: '2026–27',
    costNote: 'Prior-year tuition reference. Not a 2027–28 quote or a full-degree cost.',
    costDetail: 'Published first-year single-student budget: $140,940 for 2026–27. The global experience requirement carries additional costs. Full-degree cost is not yet verified.',
    deadline: 'Round 2 · 6 Jan 2027', deadlineDate: '2027-01-06',
    academic: 'MBA illustrative seed. Curriculum orientation and individual faculty specialties remain to be researched. Specialized business master’s will be compared separately.',
    internship: 'Program-specific internship arrangements, placement and international-student outcomes have not yet been verified.',
    funding: 'Admitted MBA students with demonstrated need are eligible for need-based fellowships regardless of citizenship. Individual amounts and aid deadlines remain unverified.',
    scholarships: ['SCH-003', 'SCH-002'], note: '03-business/README.md',
    sources: [
      ['Program & application rounds', 'https://www.gsb.stanford.edu/programs/mba'],
      ['Tuition & attendance budget', 'https://www.gsb.stanford.edu/programs/mba/tuition-financial-aid/cost-attendance'],
      ['Financial aid', 'https://www.gsb.stanford.edu/programs/mba/tuition-financial-aid']
    ]
  }
];
export const programs = rankedSchools.map(row => {
  const seed = seedPrograms.find(p => p.id === row.id) || {};
  const detail = researchDetails[row.id] || {};
  const ranking = rankingSources[row.area];
  return {
    kind: row.area === 'Business' ? 'MBA' : 'MS',
    monogram: row.short.split(/[ ·–]+/).map(s => s[0]).join('').slice(0,3),
    color: row.area === 'Business' ? 'sage' : 'clay',
    tuition: null, tuitionLabel: 'Tuition not yet verified', period: 'Year not verified',
    costNote: 'No verified program-specific figure recorded. Fall 2027 tuition is not assumed.',
    costDetail: 'Required fees, insurance, living expenses and full-degree total need verification for the selected route.',
    deadline: 'Fall 2027 deadline not verified', deadlineDate: null,
    orientation: row.area === 'Business' ? 'Full-time MBA · Management' : 'See degree route and academic overview',
    internship: 'Program-specific internship structure, placement rates and international-student outcomes have not been verified. Ranking or location alone does not establish how easy an internship is to obtain.',
    funding: 'Master’s scholarship eligibility, award coverage and deadlines are not yet verified. Doctoral funding must not be assumed to cover this degree.',
    faculty: 'Individual faculty specialties and master’s supervision access have not yet been verified.',
    scholarships: [],
    availability: 'Route identified · 2027 eligibility to verify', availabilityType: 'verify',
    ...seed, ...row, ...detail,
    summary: detail.academic || row.academic,
    tied: rankedSchools.filter(p => p.area === row.area && p.rank === row.rank).length > 1,
    ranking, rankingEdition,
    outcome: outcomeCards[row.id] || null,
    outcomeAdjacent: outcomeAdjacentByCatalogId[row.id] || [],
    outcomeSpecialty: outcomeSpecialtyByCatalogId[row.id] || [],
    note: `${row.area === 'Business' ? '03-business' : '02-computer-science'}/programs/${row.id}.md`,
    sources: [...new Map([
      ['Program / academic source', detail.programUrl || row.programUrl],
      ...(seed.sources || []), ...(detail.sources || []),
      [`U.S. News positions via ${ranking.reproductionName}`, ranking.reproduction]
    ].map(s => [s[1],s])).values()]
  };
}).sort((a,b) => a.area.localeCompare(b.area) || a.rank - b.rank || a.short.localeCompare(b.short));
export const scholarships = [
  { id: 'SCH-004', name: 'Harvard MBA need-based scholarship', scope: 'Harvard MBA only', state: 'Assessed after admission', tone: 'green', type: 'Program-specific scholarship', description: 'Need-based support for admitted HBS MBA students, including international students.', eligibility: 'Apply for financial aid after admission. HBS assesses demonstrated need; personal eligibility and amount are not established here.', amount: 'Individual award; not estimated', deadline: 'Aid deadline to verify after admission', note: '04-scholarships/opportunities/harvard-mba-scholarship.md', url: 'https://www.hbs.edu/mba/financial-aid/tuition-assistance' },
  { id: 'SCH-001', name: 'Fulbright Foreign Student Program', scope: 'Multiple institutions', state: 'Eligibility unverified', tone: 'amber', type: 'External award', description: 'Graduate study and research support administered through country-specific commissions, foundations or US embassies.', eligibility: 'Country-dependent. Hong Kong and Taiwan eligibility have not been established. IIE placement and self-placement are distinct routes.', amount: 'Country / award dependent; not verified', deadline: 'Fall 2027 deadline not verified', note: '04-scholarships/opportunities/fulbright-foreign-student.md', url: 'https://foreign.fulbrightonline.org/about/foreign-student-program' },
  { id: 'SCH-002', name: 'Knight-Hennessy Scholars', scope: 'Stanford graduate programs', state: '2027 application closed', tone: 'red', type: 'University-wide award', description: 'A shared funding record for relevant Stanford graduate degrees. Retained for reference; not an open Fall 2027 opportunity.', eligibility: 'Exact eligible degree and personal eligibility remain unverified. A separate Stanford degree application is required.', amount: 'Coverage not evaluated in this research pass', deadline: 'Closed · 6 Oct 2026, 1 p.m. Pacific', note: '04-scholarships/opportunities/knight-hennessy.md', url: 'https://knight-hennessy.stanford.edu/admission/preparing-your-applications/application-deadlines' },
  { id: 'SCH-003', name: 'Stanford MBA need-based fellowship', scope: 'Stanford MBA only', state: 'Assessed after admission', tone: 'green', type: 'Program-specific fellowship', description: 'Need-based fellowship support for admitted MBA students. Awards do not require repayment.', eligibility: 'Demonstrated financial need, regardless of citizenship. Students are expected to contribute income and assets. Does not extend to Stanford CS.', amount: 'Individual amount not assessed', deadline: 'Aid deadline to verify', note: '04-scholarships/opportunities/stanford-mba-fellowship.md', url: 'https://www.gsb.stanford.edu/programs/mba/tuition-financial-aid' },
  { id: 'SCH-005', name: 'Yale SOM MBA Scholarships (post-admission application)', scope: 'yale-mba', state: 'Assessed with / after admission', tone: 'green', type: 'Program-specific scholarship', description: 'Admitted full-time MBA students; separate Scholarship Application via portal. Holistic; includes some country-specific funds.', eligibility: 'Admitted full-time MBA students; separate Scholarship Application via portal. Holistic; includes some country-specific funds. International students included per source page. Hong Kong / Taiwan: unknown until verified against personal facts.', amount: 'Median scholarship award for Class of 2027: $65K (page statistic; individual amounts vary)', deadline: 'After admission (portal steps)', note: '04-scholarships/opportunities/yale-mba-1.md', url: 'https://som.yale.edu/programs/mba/affording-your-mba/scholarships-yale-som' },
  { id: 'SCH-006', name: 'Michigan Ross Full-Time MBA Merit Scholarships', scope: 'michigan-mba', state: 'Assessed with / after admission', tone: 'green', type: 'Program-specific scholarship', description: 'Automatic consideration on Full-Time MBA admission; academic/professional/community contribution.', eligibility: 'Automatic consideration on Full-Time MBA admission; academic/professional/community contribution. International students included per source page. Hong Kong / Taiwan: unknown until verified against personal facts.', amount: '$10,000 to full tuition (verbatim range)', deadline: 'Notified upon admission; no separate application', note: '04-scholarships/opportunities/michigan-mba-1.md', url: 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid/affording-your-mba' },
  { id: 'SCH-007', name: 'Dean’s Impact Scholars / Dean\'s Fellows (full tuition)', scope: 'michigan-mba', state: 'Assessed with / after admission', tone: 'green', type: 'Program-specific scholarship', description: 'Highly select admitted Full-Time MBA students; Dean’s Impact also cites annual stipend for educational travel/leadership.', eligibility: 'Highly select admitted Full-Time MBA students; Dean’s Impact also cites annual stipend for educational travel/leadership. International eligibility unclear on source page. Hong Kong / Taiwan: unknown until verified against personal facts.', amount: 'Full tuition (plus stipend for Dean’s Impact — amount not specified on page)', deadline: 'Upon admission', note: '04-scholarships/opportunities/michigan-mba-2.md', url: 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid/affording-your-mba' },
  { id: 'SCH-008', name: 'Fuqua Daytime MBA Merit-based Scholarships', scope: 'duke-mba', state: 'Assessed with / after admission', tone: 'green', type: 'Program-specific scholarship', description: 'All Daytime MBA applicants considered; no application required to be eligible.', eligibility: 'All Daytime MBA applicants considered; no application required to be eligible. International students included per source page. Hong Kong / Taiwan: unknown until verified against personal facts.', amount: 'unknown', deadline: 'unknown (with admission)', note: '04-scholarships/opportunities/duke-mba-1.md', url: 'https://www.fuqua.duke.edu/programs/daytime-mba/tuition-costs' },
  { id: 'SCH-009', name: 'Texas McCombs Full-Time MBA Merit / Recruiting Scholarships', scope: 'texas-mba', state: 'Assessed with / after admission', tone: 'green', type: 'Program-specific scholarship', description: 'All Full-Time MBA applicants considered regardless of country of origin; merit holistic review.', eligibility: 'All Full-Time MBA applicants considered regardless of country of origin; merit holistic review. International students included per source page. Hong Kong / Taiwan: unknown until verified against personal facts.', amount: '$2,000 to full-tuition awards (verbatim); may include out-of-state tuition waivers', deadline: 'unknown (with admission)', note: '04-scholarships/opportunities/texas-mba-1.md', url: 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/tuition-financial-aid/' },
  { id: 'SCH-010', name: 'AAUW International Fellowships', scope: 'Multiple institutions', state: '2027–28 application closed', tone: 'red', type: 'External award', description: 'Open to HK/Taiwan/China passport holders if they meet non-US-citizen criteria. STEM master\'s focus — relevant to Batch-1 CS; generally not MBA.', eligibility: 'Women who are non-U.S. citizens/non-permanent residents; admitted/enrolled in first STEM master’s or doctorate at accredited U.S. institution; CGPA ≥ 3.5/4.0; full-time. Includes Computer Science. NOT for MBA (non-STEM unless DHS STEM list). Hong Kong and Taiwan passport eligibility: not separately verified beyond general international criteria on the source page.', amount: '$20,000 master’s stipend; $25,000 doctorate stipend (verbatim)', deadline: '2027–28 cycle: Applications Open Aug 17, 2026 9am ET; Close Sep 17, 2026 5pm ET — applications have closed for 2027–28 academic year (as stated on page)', note: '04-scholarships/opportunities/aauw-intl-fellowships.md', url: 'https://www.aauw.org/resources/programs/fellowships-grants/aauw-international-fellowships/' },
  { id: 'SCH-011', name: 'P.E.O. International Peace Scholarship (IPS)', scope: 'Multiple institutions', state: 'Eligibility window to verify for 2027–28', tone: 'amber', type: 'External award', description: 'Country-agnostic for women internationals (incl. HK/Taiwan/China if studying in US/Canada and returning home).', eligibility: 'Women outside the U.S. and Canada pursuing graduate study in the U.S. or Canada; intention to return home. Needs-based. Hong Kong and Taiwan passport eligibility: not separately verified beyond general international criteria on the source page.', amount: 'Maximum award $12,500 (verbatim)', deadline: 'See IPS application calendar (eligibility window commonly mid-Sep–mid-Dec; verify 2027–28 calendar on peointernational.org)', note: '04-scholarships/opportunities/peo-ips.md', url: 'https://www.peointernational.org/educational-support/international-peace-scholarship-fund/' },
  { id: 'SCH-012', name: 'Sir Edward Youde Memorial Fellowships for Overseas Studies', scope: 'Multiple institutions', state: 'HK-specific · verify current cycle', tone: 'amber', type: 'External award', description: 'HK-specific. Confirm current WFSFAA/SEYM Trust official notice for Fall 2027 cycle amounts/deadlines before applying.', eligibility: 'Hong Kong (and Macau per EducationUSA listing) outstanding students for overseas postgraduate study; expected to contribute to HKSAR after graduation. Country-specific: Hong Kong. Hong Kong–specific. Taiwan eligibility: not applicable / unknown for this fund.', amount: 'HK$300,000 per year (EducationUSA listing); duration one year', deadline: 'September annually (EducationUSA)', note: '04-scholarships/opportunities/youde-hk.md', url: 'https://educationusa.state.gov/scholarships/sir-edward-youde-memorial-fellowships-overseas-studies' },
  { id: 'SCH-013', name: 'Joint Japan / World Bank Graduate Scholarship Program (JJ/WBGSP)', scope: 'Multiple institutions', state: 'Participating programs only · usually not catalog CS/MBA', tone: 'amber', type: 'External award', description: 'Include only if targeting a listed participating development master’s — usually NOT Stanford/Berkeley CS or top MBA programs. Do not invent eligibility for China/HK/TW.', eligibility: 'Citizens of eligible World Bank developing countries (not dual citizens of developed countries); development-related work experience; unconditional admission to a JJ/WBGSP participating master\'s program only. China may appear on eligible-country lists in some years — VERIFY current eligible-country PDF. Hong Kong/Taiwan generally not typical developing-country pathway; confirm list. Most Batch-1 CS/MBA programs are NOT on the participating-program list. Hong Kong and Taiwan passport eligibility: not separately verified beyond general international criteria on the source page.', amount: 'Tuition, monthly stipend, airfare, health insurance, travel allowance (verbatim benefits summary)', deadline: '2027 Window 1: Jan 18–Feb 26, 2027; Window 2: Mar 29–May 21, 2027', note: '04-scholarships/opportunities/jj-wbgsp.md', url: 'https://www.worldbank.org/en/programs/scholarships/jj-wbgsp' },
  { id: 'SCH-014', name: 'Rotary Foundation Global Grant Scholarship', scope: 'Multiple institutions', state: 'Club-mediated · amount/deadline unverified', tone: 'amber', type: 'External award', description: 'Verify with local Rotary club in HK/Taiwan/China. Amounts and focus areas vary; do not invent deadlines.', eligibility: 'Graduate study outside home country related to a Rotary Area of Focus; apply via local Rotary club (home) and host club/district. Not online-only study. Club-dependent — not a centralized open call with fixed $ amount on a single global page. Hong Kong and Taiwan passport eligibility: not separately verified beyond general international criteria on the source page.', amount: 'unknown (grant-funded; set by club/district/Foundation rules)', deadline: 'unknown (club/district driven)', note: '04-scholarships/opportunities/rotary-global-grant.md', url: 'https://www.rotary.org/en/our-programs/scholarships' }
];
export const sources = [
  { name: 'Times Higher Education', tag: 'RANKINGS', initials: 'THE', text: 'Subject-level research and institutional context for computer science and business & economics.', limit: 'Record the edition and subject. Rankings do not establish individual master’s outcomes.', url: 'https://www.timeshighereducation.com/world-university-rankings/world-university-rankings-subject-2026-methodology' },
  { name: 'QS World University Rankings', tag: 'RANKINGS', initials: 'QS', text: 'Discover institutions across computer science & information systems and business & management.', limit: 'Subject rankings span degree levels. Keep MBA rankings separate; exact positions are not recorded yet.', url: 'https://www.qs.com/insights/which-us-colleges-are-best-for-engineering-business-or-computer-science' },
  { name: 'U.S. News & World Report', tag: 'RANKINGS', initials: 'USN', text: 'April 2026 graduate release: 30 full-time MBA schools and 33 CS departments through rank 30, including ties.', limit: 'Direct tables were inaccessible. Positions use Clear Admit and IvyPath reproductions, with selected university cross-checks; see the ranking source note.', url: 'https://www.usnews.com/best-graduate-schools' },
  { name: 'CSRankings', tag: 'RESEARCH FIT', initials: 'CS', text: 'Explore publication activity by research area and identify faculty and labs.', limit: 'A research signal, not a measure of teaching, admission chances or internship access.', url: 'https://csrankings.org/' },
  { name: 'AACSB', tag: 'ACCREDITATION', initials: 'Aa', text: 'Check business-school accreditation and discover programs in the official directory.', limit: 'Accreditation does not establish personal fit or career outcomes.', url: 'https://www.aacsb.edu/accredited' },
  { name: 'EducationUSA', tag: 'FUNDING GUIDANCE', initials: 'Ed', text: 'Graduate financing guidance and assistantship leads for international applicants.', limit: 'Award providers determine actual eligibility, coverage and current deadlines.', url: 'https://educationusa.state.gov/your-5-steps-us-study/finance-your-studies/graduate' }
];
export function filterPrograms(query = '', area = 'All programs', status = 'All routes') {
  const q = query.trim().toLowerCase();
  return programs.filter(p => (area === 'All programs' || p.area === area)
    && (status === 'All routes' || (status === 'Restrictions & exceptions' ? p.availabilityType !== 'verify' : Number.isFinite(p.tuition)))
    && `${p.university} ${p.short} ${p.degree} ${p.area} ${p.kind} ${p.orientation} ${p.academic}`.toLowerCase().includes(q));
}
