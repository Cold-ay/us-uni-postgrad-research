// PR-ready fragment for dist/research-details.js — deadlines batch1 CS (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch1-cs.json notes.
export const deadlinesBatch1Cs = {
  'stanford-cs': {
    deadline: "Apps open 15 Sep 2026 · Deadline 8 Dec 2026 · 11:59 p.m. PT (Autumn / Fall 2027 entry)",
    deadlineDate: "2026-12-08",
    academic: "Application open: 15 Sep 2026 (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["CS graduate application deadlines", "https://www.cs.stanford.edu/admissions-graduate-application-deadlines"],
      ["Master's admissions", "https://www.cs.stanford.edu/admissions/masters-admissions"],
      ["Stanford Grad Admissions apply (11:59 p.m. Pacific Time)", "https://gradadmissions.stanford.edu/apply/apply-now"],
    ]
  },
  'berkeley-cs': {
    deadline: "Apps open (Fall 2027 cycle open) · Deadline 6 Jan 2027 · 8:59 p.m. PST (MEng EECS)",
    deadlineDate: "2027-01-06",
    academic: "Application open: Open as of page check (Fall 2027 Graduate Admission application for EECS now open) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["MEng EECS program / apply", "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/"],
    ]
  },
  'illinois-cs': {
    deadline: "MCS Urbana Fall: 1 May · 11:59 p.m. CT (annual month-day; year not labeled) · MS thesis Fall: 1 Dec · 11:59 p.m. CT",
    deadlineDate: null,
    sources: [
      ["Application deadlines", "https://siebelschool.illinois.edu/admissions/graduate/application-deadlines"],
      ["Graduate FAQs", "https://siebelschool.illinois.edu/admissions/graduate/faqs"],
    ]
  },
  'cornell-cs': {
    deadline: "MS: 18 Jan for Fall (month-day as posted; year/timezone not labeled) · MEng Fall: 1 Feb; MEng Spring: 1 Oct",
    deadlineDate: null,
    sources: [
      ["CS MS apply", "https://www.cs.cornell.edu/master-science-computer-science/apply"],
      ["CS MEng apply", "https://www.cs.cornell.edu/master-engineering-computer-science/apply"],
    ]
  },
  'gatech-cs': {
    deadline: "1 Feb 2027 · 11:59 p.m. ET (Atlanta campus MS CS — Fall 2027; not OMSCS)",
    deadlineDate: "2027-02-01",
    sources: [
      ["GT GradApp program info (MS CS deadlines)", "https://gradapp.gatech.edu/portal/program-info?cmd=view-program&program=86097380-be9a-4631-6407-50f3d959f466"],
      ["MS CS admission requirements", "https://www.cc.gatech.edu/ms-computer-science-admission-requirements"],
      ["MS CS specializations", "https://www.cc.gatech.edu/ms-computer-science-specializations"],
    ]
  },
  'texas-cs': {
    deadline: "Apps open 15 Oct · Deadline 15 Dec (Fall only; month-day as posted — year not labeled on UTCS apply page)",
    deadlineDate: null,
    academic: "Application open: 15 Oct (month-day as posted; year not labeled) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["UTCS graduate apply / important dates", "https://www.cs.utexas.edu/graduate/apply"],
      ["Research degrees (on-campus MS)", "https://www.cs.utexas.edu/graduate/research-degrees"],
      ["UT Graduate degrees & programs (CS Fall only; Dec. 15)", "https://graduate.utexas.edu/degrees-programs"],
    ]
  },
  'michigan-cs': {
    deadline: "Apps reopen mid-Sep (Rackham; late Aug/early Sep noted) · Master's deadline 15 Jan · 11:59 p.m. ET (FA 2027 cycle referenced on page)",
    deadlineDate: "2027-01-15",
    academic: "Application open: Reopens mid-September (Rackham closes in summer; late August/early September also stated) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["CSE graduate admissions", "https://cse.engin.umich.edu/academics/graduate/admissions/"],
      ["CSE how to apply", "https://cse.engin.umich.edu/academics/graduate/admissions/apply/"],
      ["Master's in CSE", "https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/"],
    ]
  },
  'ucsd-cs': {
    deadline: "Apps open 2 Sep 2026 · Deadline 16 Dec 2026 · 11:59 p.m. PST (Fall 2027)",
    deadlineDate: "2026-12-16",
    academic: "Application open: 2 Sep 2026 (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["CSE graduate admissions", "https://cse.ucsd.edu/graduate/admissions"],
      ["MS program", "https://cse.ucsd.edu/graduate/degree-programs/ms-program"],
      ["UCSD Grad application portal note", "https://connect.grad.ucsd.edu/apply/"],
    ]
  },
  'cmu-mscs': {
    deadline: "Apps open 9 Sep 2026 · Early 18 Nov 2026 · 3 p.m. EST · Final 9 Dec 2026 · 3 p.m. EST (Fall 2027 SCS)",
    deadlineDate: "2026-12-09",
    academic: "Application open: 9 Sep 2026 (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["SCS Graduate Admissions", "https://www.cs.cmu.edu/education/graduate-admissions"],
      ["MS in Computer Science", "https://csd.cs.cmu.edu/academics/masters/ms-in-computer-science"],
    ]
  }
};

