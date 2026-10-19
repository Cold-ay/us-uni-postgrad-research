import { rankedSchools } from './catalog.js';
import { rankingSources, rankingEdition } from './rankings.js';
import { researchDetails } from './research-details.js';
import { outcomeCards } from './outcomes.js';
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
  { id: 'SCH-003', name: 'Stanford MBA need-based fellowship', scope: 'Stanford MBA only', state: 'Assessed after admission', tone: 'green', type: 'Program-specific fellowship', description: 'Need-based fellowship support for admitted MBA students. Awards do not require repayment.', eligibility: 'Demonstrated financial need, regardless of citizenship. Students are expected to contribute income and assets. Does not extend to Stanford CS.', amount: 'Individual amount not assessed', deadline: 'Aid deadline to verify', note: '04-scholarships/opportunities/stanford-mba-fellowship.md', url: 'https://www.gsb.stanford.edu/programs/mba/tuition-financial-aid' }
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
