// PR-ready fragment for dist/research-details.js — deadlines batch2 CS (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch2-cs.json notes.
export const deadlinesBatch2Cs = {
  'columbia-cs': {
    deadline: "Fall priority 15 Jan · Fall final/regular 15 Feb 2027 (CVN year-labeled for Fall 2027) · Spring 15 Oct",
    deadlineDate: "2027-02-15",
    sources: [
      ["CS Admissions (MS deadlines table)", "https://www.cs.columbia.edu/education/admissions8/"],
      ["MS Program Application FAQ", "https://www.cs.columbia.edu/education/ms/appfaq/"],
      ["CVN Computer Science Master's (Fall 2027 / Spring 2027 year-labeled)", "https://cvn.columbia.edu/content/computer-science-masters-degree"],
      ["MS program home", "https://www.cs.columbia.edu/education/ms/"],
    ]
  },
  'purdue-cs': {
    deadline: "Fall 2027 start — 1 Dec 2026 · Spring 2027 start — 1 Oct 2026 (MS and PhD; West Lafayette)",
    deadlineDate: "2026-12-01",
    sources: [
      ["Application Steps and Process (Fall 2027 / Spring 2027 dates)", "https://cs.purdue.edu/graduate/admission/steps.html"],
      ["Admission FAQ (Dec 1 / Oct 1 month-day)", "https://www.cs.purdue.edu/graduate/admission/faq-application.html"],
      ["Master's curriculum", "https://www.cs.purdue.edu/graduate/curriculum/masters.html"],
    ]
  },
  'ucla-cs': {
    deadline: "Apps mid-Sep · Deadline 15 Dec 2026 · 23:59 Pacific (MS/PhD Fall only — Grad Division 2027–28)",
    deadlineDate: "2026-12-15",
    academic: "Application open: mid-September (CS requirements page; year not labeled) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["UCLA Grad Division CS 2027–2028 requirements (deadline Dec 15, 2026)", "https://grad.ucla.edu/gasaa/deptinfo/deptinfo.asp?academicyear=20272028&code=0201"],
      ["CS Graduate Admissions", "https://www.cs.ucla.edu/graduate-admissions/"],
      ["CS Graduate Application Requirements (Dec 15 23:59 PT; mid-Sep open)", "https://www.cs.ucla.edu/graduate-requirements/"],
      ["CS Grad Admissions FAQ", "https://www.cs.ucla.edu/graduate-admission-frequently-asked-questions/"],
    ]
  },
  'wisconsin-cs': {
    deadline: "Traditional MS/PhD Fall: 15 Dec (month-day; year not labeled) · PMP separate: 15 Feb (month-day)",
    deadlineDate: null,
    sources: [
      ["CS Graduate Admissions (traditional Dec 15; PMP Feb 15)", "https://www.cs.wisc.edu/grad/programs/admissions/"],
      ["Traditional CS MS/PhD program", "https://www.cs.wisc.edu/grad/programs/traditional/"],
      ["Guide: Computer Sciences MS named option (Fall Deadline Dec 15)", "https://guide.wisc.edu/graduate/computer-sciences/computer-sciences-ms/computer-sciences-computer-sciences-ms/"],
      ["Degree programs hub", "https://www.cs.wisc.edu/grad/programs/"],
    ]
  },
  'penn-cs': {
    deadline: "Apps open 15 Sep 2026 · Early 1 Nov 2026 · 11:59 p.m. EST · Regular 1 Feb 2027 · 11:59 p.m. EST (CIS MSE Fall 2027)",
    deadlineDate: "2027-02-01",
    academic: "Application open: 15 Sep 2026 (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["Penn Engineering How to Apply (Fall 2027 master's timeline)", "https://gradadm.engineering.upenn.edu/how-to-apply/"],
      ["Penn Engineering Master's Programs (CIS early deadline noted)", "https://gradadm.engineering.upenn.edu/masters/"],
      ["Catalog: Computer & Information Science, MSE", "https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/"],
    ]
  },
  'jhu-cs': {
    deadline: "Fall: 15 Feb · 11:59 p.m. EST · Spring: 1 Oct · 11:59 p.m. EST (month-day; year not labeled)",
    deadlineDate: null,
    sources: [
      ["MSE CS Admissions (deadlines)", "https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/admissions/"],
      ["MSE CS program (brochure landing)", "https://www.cs.jhu.edu/mse-programs-original/"],
    ]
  },
  'chicago-cs': {
    deadline: "Autumn 2027 Full-Time MPCS: R1 2 Nov 2026 · R2 1 Feb 2027 · R3 3 May 2027 · all 11:59 p.m. CT",
    deadlineDate: "2026-11-02",
    sources: [
      ["MPCS Application Deadlines (Autumn 2027 full-time)", "https://masters.cs.uchicago.edu/application-deadlines/"],
      ["MPCS home", "https://masters.cs.uchicago.edu/"],
    ]
  },
  'duke-cs': {
    deadline: "1 Feb 2027 · 11:59:59 p.m. EST (MS Computer Science — Fall 2027)",
    deadlineDate: "2027-02-01",
    sources: [
      ["Duke Graduate School application deadlines (Fall 2027 master's)", "https://gradschool.duke.edu/admissions/application-deadlines/"],
      ["M.S. in Computer Science program page", "https://gradschool.duke.edu/academics/programs-degrees/computer-science-ms/"],
    ]
  },
  'umass-cs': {
    deadline: "Campus MS Fall: 15 Dec (month-day; year not labeled) · Online MS Fall: 1 Jun · Spring: 1 Oct",
    deadlineDate: null,
    sources: [
      ["UMass Grad School MS Computer Science (application deadlines)", "https://www.umass.edu/graduate/academics/master-science-computer-science"],
      ["CICS How to Apply — MS on campus", "https://www.cics.umass.edu/academics/ms-computer-science-campus/how-apply-ms-program-campus"],
      ["CICS MS campus program", "https://www.cics.umass.edu/academics/ms-computer-science-campus"],
    ]
  },
  'usc-cs': {
    deadline: "Fall 2027 final 15 Jan 2027 · 11:59 p.m. PT · Scholarship consideration 15 Dec (Fall 2027 row; year not printed on that cell)",
    deadlineDate: "2027-01-15",
    sources: [
      ["USC Viterbi Master's Application Deadlines", "https://viterbigradadmission.usc.edu/programs/masters/apply/"],
      ["USC CS Master's programs", "https://www.cs.usc.edu/academic-programs/masters/"],
      ["Viterbi MS Computer Science", "https://viterbigradadmission.usc.edu/programs/masters/msprograms/computer-science/ms-computer-science/"],
    ]
  }
};
