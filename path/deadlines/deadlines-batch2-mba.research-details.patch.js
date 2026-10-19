// PR-ready fragment for dist/research-details.js — deadlines batch2 MBA (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch2-mba.json notes.
export const deadlinesBatch2Mba = {
  'yale-mba': {
    deadline: "Round 2 · 6 Jan 2027 (Fall 2027 / 2026–27 cycle; R1 passed; clock time not on table)",
    deadlineDate: "2027-01-06",
    sources: [
      ["MBA Application Information (deadlines)", "https://som.yale.edu/programs/mba/admissions/application-information"],
      ["MBA Admissions", "https://som.yale.edu/programs/mba/admissions"],
      ["MBA program", "https://som.yale.edu/programs/mba"],
    ]
  },
  'virginia-mba': {
    deadline: "Round 2 · 7 Jan 2027 (Full-Time MBA Class of 2029 / Aug 2027; EA & R1 passed; clock time not on table)",
    deadlineDate: "2027-01-07",
    sources: [
      ["MBA Apply Deadlines (2026–27 / Class of 2029)", "https://www.darden.virginia.edu/mba/admissions/apply/deadlines"],
      ["Darden 2026–27 Full-Time MBA Application Live", "https://www.darden.virginia.edu/programs/blog/2026-27-full-time-mba-application-live"],
      ["MBA program", "https://www.darden.virginia.edu/mba/"],
    ]
  },
  'michigan-mba': {
    deadline: "Round 2 · 4 Jan 2027 · 11:59 p.m. ET (Full-Time MBA; R1 passed)",
    deadlineDate: "2027-01-04",
    sources: [
      ["Full-Time MBA Admissions (deadlines)", "https://michiganross.umich.edu/graduate/full-time-mba/admissions"],
      ["Full-Time MBA", "https://michiganross.umich.edu/graduate/full-time-mba"],
    ]
  },
  'duke-mba': {
    deadline: "Round 2 · 5 Jan 2027 (Daytime MBA 2026–2027 cycle; EA & R1 passed; clock time not on table)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Daytime MBA Admissions Facts + Dates", "https://www.fuqua.duke.edu/programs/daytime-mba/admissions-facts-dates"],
      ["Daytime MBA program", "https://www.fuqua.duke.edu/programs/daytime-mba/"],
    ]
  },
  'cornell-mba': {
    deadline: "Round 2 · 5 Jan 2027 · 11:59 p.m. ET (Two-Year FT MBA; R1 passed)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Cornell MBA application deadlines & important dates", "https://business.cornell.edu/admissions/graduate/mba/application-guide/important-dates/"],
      ["Cornell MBA admissions", "https://business.cornell.edu/admissions/graduate/mba/"],
      ["Two-Year MBA", "https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/"],
    ]
  },
  'cmu-mba': {
    deadline: "Round 2 · 8 Jan 2027 (Full-Time MBA; R1 passed; clock time not on table)",
    deadlineDate: "2027-01-08",
    sources: [
      ["Apply to Full-Time MBA (deadlines table)", "https://www.cmu.edu/tepper/programs/mba/admissions/apply-full-time-mba"],
      ["Full-Time MBA program", "https://www.cmu.edu/tepper/programs/mba/full-time"],
      ["MBA programs hub", "https://www.cmu.edu/tepper/programs/mba/"],
    ]
  },
  'vanderbilt-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 11:59 p.m. CT (Fall 2027; R1 passed; apps opened 19 Aug 2026)",
    deadlineDate: "2027-01-06",
    academic: "Application open: 19 Aug 2026 (Fall 2027 enrollment; Owen news 14 Aug 2026) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["MBA Admissions (Fall 2027 deadlines)", "https://business.vanderbilt.edu/mba/admissions/"],
      ["MBA Application Instructions (11:59 p.m. CT)", "https://business.vanderbilt.edu/mba/admissions/application-instructions/"],
      ["Applications for Fall 2027 Open August 19", "https://business.vanderbilt.edu/news/2026/08/14/vanderbilt-business-applications-fall-2027-open-august-19/"],
      ["MBA program", "https://business.vanderbilt.edu/mba/"],
    ]
  },
  'texas-mba': {
    deadline: "Round 2 · 15 Jan 2027 · 11:59 p.m. CT (Full-Time MBA; R1 passed)",
    deadlineDate: "2027-01-15",
    sources: [
      ["Full-Time MBA How to Apply (application deadlines)", "https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/admissions/application-process/"],
      ["Full-Time MBA", "https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/"],
    ]
  },
  'ucla-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 11:59 p.m. PT (Full-Time MBA; R1 passed)",
    deadlineDate: "2027-01-06",
    sources: [
      ["Full-Time MBA Admissions (rounds)", "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions"],
      ["Full-Time MBA Admissions FAQ (11:59 p.m. PT)", "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions/faq"],
      ["Full-Time MBA", "https://www.anderson.ucla.edu/degrees/full-time-mba/"],
    ]
  },
  'washington-mba': {
    deadline: "Round 2 · 5 Jan 2027 · 11:59 p.m. PDT (Full-time MBA 2026–2027; R1 passed; final for internationals)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Full-time MBA Admissions (2026–2027 deadlines)", "https://foster.uw.edu/academics/degree-programs/full-time-mba/admissions/"],
      ["Full-time MBA", "https://foster.uw.edu/academics/degree-programs/full-time-mba/"],
    ]
  }
};
