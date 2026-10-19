// PR-ready fragment for dist/research-details.js — deadlines batch3 CS (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch3-cs.json notes.
export const deadlinesBatch3Cs = {
  'yale-cs': {
    deadline: "Apps open (Fall 2027 application available) · Deadline 2 Jan 2027 · 11:59 p.m. ET (CS MS)",
    deadlineDate: "2027-01-02",
    academic: "Application open: Open as of page check (Fall 2027 entry application now available) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["GSAS Dates & Deadlines (CS MS Jan 2, 2027; Fall 2027 reply Apr 15)", "https://gsas.yale.edu/admissions/phdmasters-application-process/dates-deadlines"],
      ["GSAS Computer Science program (MS Jan 2 11:59pm ET)", "https://gsas.yale.edu/programs-of-study/computer-science"],
      ["GSAS PhD/Master's application process (Fall 2027 app available)", "https://gsas.yale.edu/admissions/phdmasters-application-process"],
      ["Yale Engineering CS MS program", "https://engineering.yale.edu/academic-study/departments/computer-science/graduate-study/master-science-program"],
    ]
  },
  'brown-cs': {
    deadline: "Fall: 15 Jan (month-day; year not labeled) · Spring: 1 Nov · Fifth-year Fall: 1 May",
    deadlineDate: null,
    academic: "Application open: AI/ML track: applications open now (Fall 2027 launch noted on CS masters hub) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["Graduate Programs ScM Computer Science (deadlines)", "https://graduateprograms.brown.edu/graduate-program/computer-science-scm"],
      ["Brown CS Master's hub", "https://cs.brown.edu/degrees/masters/"],
      ["Brown CS Applying to Master's", "https://cs.brown.edu/degrees/masters/applications/"],
      ["SPS Deadlines and Credits (CS Fall Jan. 15)", "https://masters.brown.edu/admissions/tuition-aid/deadlines-credits"],
    ]
  },
  'nyu-cs': {
    deadline: "MSCS Fall 12 Feb 2027 (CEI year-labeled Fall 2027; GSAS month-day Feb 12) · 5 p.m. ET · Spring 1 Nov",
    deadlineDate: "2027-02-12",
    sources: [
      ["GSAS ARC Computer Science (MSCS deadlines; 5PM ET)", "https://gsas.nyu.edu/admissions/arc/programs/computer-science.html"],
      ["Courant Master's prospective overview (Feb 12 Fall / Nov 1 Spring)", "https://cs.nyu.edu/dynamic/masters/prospective-overview/"],
      ["MS-CEI Admissions (Fall 2027 deadline February 12)", "https://cs.nyu.edu/ms-cei/admissions.html"],
    ]
  },
  'northwestern-cs': {
    deadline: "Apps open 15 Sep 2026 · MS Fall 2027 staged: by 30 Nov · 31 Dec · 28 Feb · 15 Jun (portal may close when full)",
    deadlineDate: "2026-11-30",
    academic: "Application open: 15 Sep 2026 (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["CS Graduate Admissions (Fall 2027 open + MS staged dates)", "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/admissions/"],
      ["CS Graduate Programs hub", "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/"],
      ["TGS Application Deadlines", "https://www.tgs.northwestern.edu/admission/application-procedures/application-deadlines.html"],
    ]
  },
  'ucsb-cs': {
    deadline: "Fall 2027 final — 16 Dec 2026 (Wednesday)",
    deadlineDate: "2026-12-16",
    sources: [
      ["Grad Division MS Computer Science program (Fall 2027 final Dec 16, 2026)", "https://www.graddiv.ucsb.edu/graduate-programs/departments/computer-science"],
      ["Grad Division portal MS CMPSC-MS-0", "https://engage.graddiv.ucsb.edu/portal/programs?cmd=prog&code=CMPSC-MS-0"],
      ["CS How to Apply (points to Grad Division deadline)", "https://cs.ucsb.edu/education/graduate/how-to-apply"],
      ["CS Master's degree overview", "https://cs.ucsb.edu/education/graduate/masters-degree"],
    ]
  },
  'unc-cs': {
    deadline: "Final 9 Mar 2027 · Fellowship recommend 15 Dec 2026 · RA/TA recommend 5 Jan 2027 (MS/PhD Fall only)",
    deadlineDate: "2027-03-09",
    sources: [
      ["CS Admissions Deadline (year-labeled fellowship/RA/final)", "https://cs.unc.edu/graduate/graduate-admissions/admissions-deadline/"],
      ["UNC Grad School Computer Science program sheet", "https://gradschool.sites.unc.edu/computer-science/"],
      ["CS catalog (admissions narrative)", "https://catalog.unc.edu/graduate/schools-departments/computer-science/"],
    ]
  },
  'harvard-cs': {
    deadline: "Apps open (Fall 2027 CSE/Data Science portal open) · Deadline 1 Dec 2026 · 5:00 p.m. ET (CSE SM)",
    deadlineDate: "2026-12-01",
    academic: "Application open: Open as of page check (submission portal open for Fall 2027 CSE) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["SEAS CSE How to Apply (Fall 2027; Dec 1, 2026)", "https://seas.harvard.edu/masters-computational-science-and-engineering/how-apply"],
      ["GSAS Computational Science and Engineering (SM/ME Dec 01, 2026 05:00 pm)", "https://gsas.harvard.edu/program/computational-science-and-engineering"],
      ["SEAS CSE program home", "https://seas.harvard.edu/masters-computational-science-and-engineering"],
    ]
  },
  'washington-cs': {
    deadline: "PMP Autumn: 1 Jul (month-day; year not labeled) · Winter: 2 Nov 2026 (winter 2027 extension) · Spring: 1 Feb",
    deadlineDate: null,
    academic: "Application open: In general, applications open one year in advance of the deadline (PMP how-to-apply) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["PMP How to Apply (quarter deadlines)", "https://www.cs.washington.edu/academics/graduate/pmp/admissions/how-apply/"],
      ["PMP eligibility (no F-1/J-1)", "https://www.cs.washington.edu/academics/graduate/pmp/admissions/requirements/"],
    ]
  },
  'mit-cs': {
    deadline: "No external Fall 2027 MS deadline — EECS MEng is MIT-undergrad-only; external graduate admission is PhD-track only",
    deadlineDate: null,
    sources: [
      ["EECS MEng (MIT undergraduates only)", "https://www.eecs.mit.edu/academics/undergraduate-programs/meng-program/"],
      ["EECS Graduate Admissions FAQs (single PhD admissions process; MS en route)", "https://www.eecs.mit.edu/academics/graduate-programs/admission-process/graduate-admissions-faqs/"],
      ["EECS Admission Process", "https://www.eecs.mit.edu/academics/graduate-programs/admission-process/"],
    ]
  },
  'caltech-cs': {
    deadline: "No external Fall 2027 MS deadline — CMS admits PhD-track only; MS by petition after courses (not open terminal MS)",
    deadlineDate: null,
    sources: [
      ["CMS Graduate Programs (no terminal Master's)", "https://www.cms.caltech.edu/academics/grad"],
      ["CMS catalog special regulations (MS by petition)", "https://catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/computing-and-mathematical-science-cms/"],
    ]
  },
  'princeton-cs': {
    deadline: "No Fall 2027 MS deadline — CS will not accept master's applications for Fall 2027 (MSE closed)",
    deadlineDate: null,
    sources: [
      ["CS Master's requirements (Fall 2027 suspension notice)", "https://www.cs.princeton.edu/grad/masters-degree-requirements"],
      ["Grad School Application Deadlines (no M.S.E. admission Fall 2027 for CS)", "https://gradschool.princeton.edu/admission-onboarding/prepare/application-deadlines"],
    ]
  },
};

