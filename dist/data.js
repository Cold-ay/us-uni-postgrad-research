export const checked = '16 October 2026';
export const programs = [
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
export const scholarships = [
  { id: 'SCH-001', name: 'Fulbright Foreign Student Program', scope: 'Multiple institutions', state: 'Eligibility unverified', tone: 'amber', type: 'External award', description: 'Graduate study and research support administered through country-specific commissions, foundations or US embassies.', eligibility: 'Country-dependent. Hong Kong and Taiwan eligibility have not been established. IIE placement and self-placement are distinct routes.', amount: 'Country / award dependent; not verified', deadline: 'Fall 2027 deadline not verified', note: '04-scholarships/opportunities/fulbright-foreign-student.md', url: 'https://foreign.fulbrightonline.org/about/foreign-student-program' },
  { id: 'SCH-002', name: 'Knight-Hennessy Scholars', scope: 'Stanford graduate programs', state: '2027 application closed', tone: 'red', type: 'University-wide award', description: 'A shared funding record for relevant Stanford graduate degrees. Retained for reference; not an open Fall 2027 opportunity.', eligibility: 'Exact eligible degree and personal eligibility remain unverified. A separate Stanford degree application is required.', amount: 'Coverage not evaluated in this research pass', deadline: 'Closed · 6 Oct 2026, 1 p.m. Pacific', note: '04-scholarships/opportunities/knight-hennessy.md', url: 'https://knight-hennessy.stanford.edu/admission/preparing-your-applications/application-deadlines' },
  { id: 'SCH-003', name: 'Stanford MBA need-based fellowship', scope: 'Stanford MBA only', state: 'Assessed after admission', tone: 'green', type: 'Program-specific fellowship', description: 'Need-based fellowship support for admitted MBA students. Awards do not require repayment.', eligibility: 'Demonstrated financial need, regardless of citizenship. Students are expected to contribute income and assets. Does not extend to Stanford CS.', amount: 'Individual amount not assessed', deadline: 'Aid deadline to verify', note: '04-scholarships/opportunities/stanford-mba-fellowship.md', url: 'https://www.gsb.stanford.edu/programs/mba/tuition-financial-aid' }
];
export const sources = [
  { name: 'Times Higher Education', tag: 'RANKINGS', initials: 'THE', text: 'Subject-level research and institutional context for computer science and business & economics.', limit: 'Record the edition and subject. Rankings do not establish individual master’s outcomes.', url: 'https://www.timeshighereducation.com/world-university-rankings/world-university-rankings-subject-2026-methodology' },
  { name: 'QS World University Rankings', tag: 'RANKINGS', initials: 'QS', text: 'Discover institutions across computer science & information systems and business & management.', limit: 'Subject rankings span degree levels. Keep MBA rankings separate; exact positions are not recorded yet.', url: 'https://www.qs.com/insights/which-us-colleges-are-best-for-engineering-business-or-computer-science' },
  { name: 'U.S. News & World Report', tag: 'RANKINGS', initials: 'USN', text: 'A reference for US graduate computer science and business rankings.', limit: 'Direct tables and methodology remain unverified in this pass. No ranks are inferred.', url: 'https://www.usnews.com/best-graduate-schools' },
  { name: 'CSRankings', tag: 'RESEARCH FIT', initials: 'CS', text: 'Explore publication activity by research area and identify faculty and labs.', limit: 'A research signal, not a measure of teaching, admission chances or internship access.', url: 'https://csrankings.org/' },
  { name: 'AACSB', tag: 'ACCREDITATION', initials: 'Aa', text: 'Check business-school accreditation and discover programs in the official directory.', limit: 'Accreditation does not establish personal fit or career outcomes.', url: 'https://www.aacsb.edu/accredited' },
  { name: 'EducationUSA', tag: 'FUNDING GUIDANCE', initials: 'Ed', text: 'Graduate financing guidance and assistantship leads for international applicants.', limit: 'Award providers determine actual eligibility, coverage and current deadlines.', url: 'https://educationusa.state.gov/your-5-steps-us-study/finance-your-studies/graduate' }
];
export function filterPrograms(query = '', area = 'All programs') {
  const q = query.trim().toLowerCase();
  return programs.filter(p => (area === 'All programs' || p.area === area) && `${p.university} ${p.degree} ${p.area} ${p.kind} ${p.orientation}`.toLowerCase().includes(q));
}
