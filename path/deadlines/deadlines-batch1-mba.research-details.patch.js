// PR-ready fragment for dist/research-details.js — deadlines batch1 MBA (as_of 2026-10-20)
// Merge into researchDetails by catalog id (spread/merge-safe).
// Primary keys: deadline, deadlineDate, sources.
// applicationOpen is not a schema key — folded into deadline display and a short academic addendum when known.
// Full caveats live in handoffs/deadlines-batch1-mba.json notes.
export const deadlinesBatch1Mba = {
  'stanford-mba': {
    deadline: "Round 2 · 6 Jan 2027 · 4:00 p.m. PT (Fall 2027 / 2026–27 cycle; R1 passed)",
    deadlineDate: "2027-01-06",
    sources: [
      ["MBA application deadlines (2026–27)", "https://www.gsb.stanford.edu/programs/mba/admission/deadlines"],
      ["MBA program", "https://www.gsb.stanford.edu/programs/mba"],
    ]
  },
  'penn-mba': {
    deadline: "Round 2 · 5 Jan 2027 · 5:00 p.m. ET (Fall 2027 / 2026–27 cycle; R1 passed)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Application timeline & deadlines 2026–27", "https://mba.wharton.upenn.edu/application-timeline-deadlines/"],
      ["Admissions process / application guide", "https://mba.wharton.upenn.edu/admissions/admissions-process/"],
      ["Wharton MBA home", "https://mba.wharton.upenn.edu/"],
    ]
  },
  'chicago-mba': {
    deadline: "Round 2 · 7 Jan 2027 · 11:59 p.m. CT (Fall matriculation; R1 passed)",
    deadlineDate: "2027-01-07",
    sources: [
      ["Full-Time MBA Admissions (deadlines table)", "https://www.chicagobooth.edu/mba/full-time/admissions"],
      ["Full-Time MBA", "https://www.chicagobooth.edu/mba/full-time"],
    ]
  },
  'northwestern-mba': {
    deadline: "Round 2 · 6 Jan 2027 (Two-Year / Full-Time MBA; R1 passed; clock time not on table)",
    deadlineDate: "2027-01-06",
    sources: [
      ["Full-Time MBA Admissions (application dates table)", "https://www.kellogg.northwestern.edu/programs/full-time-mba/admissions"],
      ["How to apply (Full-Time)", "https://www.kellogg.northwestern.edu/admissions/ft-admissions/ft-how-to-apply/"],
      ["Full-Time MBA program", "https://www.kellogg.northwestern.edu/programs/full-time-mba/"],
    ]
  },
  'harvard-mba': {
    deadline: "Round Two · 5 Jan 2027 · 12:00 p.m. ET (Class of 2029 / matriculating fall 2027; R1 passed)",
    deadlineDate: "2027-01-05",
    sources: [
      ["MBA application dates (Class of 2029)", "https://www.hbs.edu/mba/admissions/application-dates"],
      ["MBA admissions", "https://www.hbs.edu/mba/admissions"],
      ["MBA program", "https://www.hbs.edu/mba"],
    ]
  },
  'mit-mba': {
    deadline: "Round 2 · 12 Jan 2027 · 3:00 p.m. ET (2027 entry; R1 passed)",
    deadlineDate: "2027-01-12",
    sources: [
      ["MBA how to apply / deadlines", "https://mitsloan.mit.edu/mba/admissions/how-to-apply"],
      ["MBA admissions", "https://mitsloan.mit.edu/mba/admissions"],
      ["Explore MBA program", "https://mitsloan.mit.edu/mba/explore-program"],
    ]
  },
  'columbia-mba': {
    deadline: "August-entry Round 2 · 5 Jan 2027 · 12:00 p.m. ET (August 2027 entry; R1 passed; apps open)",
    deadlineDate: "2027-01-05",
    academic: "Application open: August 2027 application now open (as of page check 2026-10-20; calendar open day not posted) (deadline research 2026-10-20; see deadline field).",
    sources: [
      ["MBA options and deadlines (August 2027)", "https://academics.business.columbia.edu/admissions/mba/options-deadlines"],
      ["Full-Time MBA Admissions", "https://academics.business.columbia.edu/admissions/mba"],
      ["MBA academics", "https://academics.business.columbia.edu/mba"],
    ]
  },
  'nyu-mba': {
    deadline: "3rd Deadline · 15 Jan 2027 · 11:59 p.m. ET (Full-time MBA Fall 2027; 1st/2nd passed)",
    deadlineDate: "2027-01-15",
    sources: [
      ["Full-time MBA admissions deadlines", "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/deadlines"],
      ["Full-time MBA admissions", "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions"],
    ]
  },
  'dartmouth-mba': {
    deadline: "Round 2 · 5 Jan 2027 · 5:00 p.m. ET (Tuck; R1 passed)",
    deadlineDate: "2027-01-05",
    sources: [
      ["Applying to Tuck (application deadlines)", "https://www.tuck.dartmouth.edu/admissions/apply"],
      ["Academic experience", "https://tuck.dartmouth.edu/mba/academic-experience"],
    ]
  },
  'berkeley-mba': {
    deadline: "Round 2 · 7 Jan 2027 (Haas FT 2026–2027 cycle; R1 passed; clock time not on round cards)",
    deadlineDate: "2027-01-07",
    sources: [
      ["Haas Full-time MBA Admissions (2026–2027 deadlines)", "https://mba.haas.berkeley.edu/admissions"],
      ["Application requirements", "https://mba.haas.berkeley.edu/admissions/application"],
      ["Full-time MBA Academics", "https://mba.haas.berkeley.edu/academics"],
    ]
  }
};
