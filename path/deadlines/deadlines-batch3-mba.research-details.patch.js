// PR-ready fragment for dist/research-details.js — deadlines batch3 MBA (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch3-mba.json notes.
export const deadlinesBatch3Mba = {
  'indiana-mba': {
    deadline: "Round 2 Phase 2 · 5 Jan (month-day; year not labeled on official table; portal Fall 2027; R1 Phase 2 Oct 15 passed if same annual cycle)",
    deadlineDate: null,
    sources: [
      ["How to Apply (application deadlines table)", "https://kelley.iu.edu/programs/full-time-mba/admissions/process-timeline.html"],
      ["Full-Time MBA FAQ", "https://kelley.iu.edu/programs/full-time-mba/admissions/faq.html"],
      ["Full-Time MBA program", "https://kelley.iu.edu/programs/full-time-mba/"],
    ]
  },
  'unc-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 11:59 p.m. ET (Full-Time MBA Class of 2029 / Aug 2027; R1 passed)",
    deadlineDate: "2027-01-06",
    sources: [
      ["Full-Time MBA Requirements and Deadlines (2026-2027)", "https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/requirements-deadlines/"],
      ["Full-Time MBA Apply (Class of 2029 / Aug 2027)", "https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/apply/"],
      ["Full-Time MBA program", "https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/"],
    ]
  },
  'emory-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 11:59 p.m. ET (Two-Year FT MBA 26–27 cycle; R1 passed)",
    deadlineDate: "2027-01-06",
    sources: [
      ["Two-Year MBA Admissions (deadlines)", "https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions"],
      ["Apply to Full-Time MBA (11:59PM ET; 26–27 cycle)", "https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions/application"],
      ["Two-Year MBA program", "https://goizueta.emory.edu/full-time-mba/two-year-mba/"],
    ]
  },
  'utd-mba': {
    deadline: "Round 2 · 8 Jan (month-day; year not labeled on official FT MBA deadlines table; fall start; R1 Oct 15 passed if same annual cycle)",
    deadlineDate: null,
    sources: [
      ["Full-Time MBA Admissions (deadlines table)", "https://mba.utdallas.edu/admissions/full-time-mba/"],
      ["MBA programs hub", "https://mba.utdallas.edu/"],
    ]
  },
  'usc-mba': {
    deadline: "Round 2 · 5 Jan 2027 (Full-Time MBA; R1 passed; clock time not on table)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Full-Time MBA Admissions (deadlines)", "https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/admissions"],
      ["Full-Time MBA program", "https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba"],
    ]
  },
  'georgia-mba': {
    deadline: "Round 2 · 10 Jan 2027 · 11:59 p.m. ET (Full-Time MBA; R1 passed; recommended for internationals)",
    deadlineDate: "2027-01-10",
    sources: [
      ["Full-Time MBA Admissions (deadlines)", "https://www.terry.uga.edu/mba/fulltime/admissions/"],
      ["Full-Time MBA program", "https://www.terry.uga.edu/mba/fulltime/"],
    ]
  },
  'gatech-mba': {
    deadline: "Round 2 · 8 Jan 2027 (Fall 2027 Start Full-time MBA; R1 passed; clock time not on table)",
    deadlineDate: "2027-01-08",
    sources: [
      ["Full-time MBA Admissions (Fall 2027 deadlines)", "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/index.html"],
      ["Full-time MBA program", "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/"],
    ]
  },
  'washu-mba': {
    deadline: "Round 2 · 7 Jan 2027 · 11:59 p.m. CT (Full-Time MBA Fall 2027; R1 passed)",
    deadlineDate: "2027-01-07",
    sources: [
      ["Full-Time MBA How to Apply (Fall 2027 deadlines)", "https://olin.washu.edu/programs/mbas/full-time-mba/apply.php"],
      ["Full-Time MBA program", "https://olin.washu.edu/programs/mbas/full-time-mba/"],
    ]
  },
  'asu-mba': {
    deadline: "Round II · 1 Dec 2026 (Full-time MBA Fall 2027; Round I passed; clock time not on table)",
    deadlineDate: "2026-12-01",
    sources: [
      ["Full-time MBA (Fall 2027 how to apply / deadlines)", "https://www.wpcarey.asu.edu/mba-programs/full-time"],
    ]
  },
  'rice-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 11:59 p.m. CT (Full-Time MBA Class of 2029; R1 passed; apps open)",
    deadlineDate: "2027-01-06",
    academic: "Application open: Class of 2029 applications open (as of page check 2026-10-20; calendar open day not posted) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["MBA Admissions Requirements / Guide (Class of 2029 deadlines)", "https://business.rice.edu/mba-admissions/guide"],
      ["Full-Time MBA program", "https://business.rice.edu/rice-mba/full-time-mba/"],
    ]
  }
};
