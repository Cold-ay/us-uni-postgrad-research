// PR-ready fragment for dist/research-details.js — duration/core/tracks batch1 CS (as_of 2026-10-20)
// Merge academic + orientation (+ sources). Preserve existing tuition/deadline keys.
export const durationBatch1Cs = {
  'cmu-mscs': {
    academic: "Coursework MS (96\u2013108 qualifying units, typically eight courses) with optional research and a thesis option. Most finish in three semesters; MS admission does not prefer students for the PhD.",
    orientation: "Coursework \u00b7 Optional research \u00b7 Thesis option \u00b7 ~3 semesters",
    sources: [
      ["MS in Computer Science", "https://csd.cs.cmu.edu/academics/masters/ms-in-computer-science"],
    ]
  },
  'stanford-cs': {
    academic: "45-unit MS CS with Foundations, SSI, Breadth, Depth, and Electives on an approved program sheet. Nine predefined specializations (plus rare Individually Designed). Up to three years / nine non-summer quarters.",
    orientation: "45 units \u00b7 9 specializations \u00b7 Coursework or research options",
    sources: [
      ["MS degree requirements", "https://www.cs.stanford.edu/masters-degree-requirements"],
      ["MS specializations", "https://www.cs.stanford.edu/masters-specializations"],
    ]
  },
  'berkeley-cs': {
    academic: "Full-time EECS MEng completed in one academic year (Fall and Spring) with a technical concentration, engineering leadership coursework, and a team capstone. Concentrations include Data Science, Computer Systems, and Visual Computing among others.",
    orientation: "Professional MEng \u00b7 1 year \u00b7 Capstone \u00b7 Leadership",
    sources: [
      ["Master of Engineering (MEng) EECS", "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/"],
    ]
  },
  'illinois-cs': {
    academic: "Siebel School offers a 32-credit professional MCS (coursework-only; Urbana typically \u22643 consecutive semesters) and a separate 32-credit research MS (thesis via CS 599). Eight optional graduate tracks (AI, data science, security, etc.).",
    orientation: "MCS or research MS \u00b7 32 credits \u00b7 8 tracks",
    sources: [
      ["MCS program", "https://siebelschool.illinois.edu/academics/graduate/professional-mcs"],
      ["Computer Science, MCS catalog 2026\u201327", "https://catalog.illinois.edu/graduate/engineering/computer-science-mcs/"],
      ["Computer Science, MS catalog 2026\u201327", "https://catalog.illinois.edu/graduate/engineering/computer-science-ms/"],
      ["M.S. Program", "https://siebelschool.illinois.edu/academics/graduate/ms-program"],
    ]
  },
  'cornell-cs': {
    academic: "Research MS is a selective four-semester (\u22482-year) degree: 34 credits with 6\u201312 thesis credits, an outside minor, and a written thesis + oral. Professional MEng is a separate ~1-year coursework + capstone route.",
    orientation: "MS research thesis \u00b7 or MEng professional \u00b7 Distinct routes",
    sources: [
      ["Master of Science in Computer Science", "https://www.cs.cornell.edu/master-science-computer-science"],
      ["MEng apply", "https://www.cs.cornell.edu/master-engineering-computer-science/apply"],
    ]
  },
  'gatech-cs': {
    academic: "Campus MSCS is 30 hours with one required specialization (11 areas; specialization coursework 15\u201318 hours). Course, Project (9h), or Thesis (12h) options. Complete within six years; keep distinct from OMSCS.",
    orientation: "30 hours \u00b7 1 specialization \u00b7 Course / project / thesis",
    sources: [
      ["MS Computer Science program", "https://www.cc.gatech.edu/degree-programs/master-science-computer-science"],
      ["MSCS specializations", "https://www.cc.gatech.edu/ms-computer-science-specializations"],
      ["MSCS catalog", "https://catalog.gatech.edu/programs/computer-science-ms/"],
    ]
  },
  'michigan-cs': {
    academic: "CSE master\u2019s requires 30 credits; thesis optional; normally finished in 1.5\u20132 years. MS vs MSE is primarily naming/eligibility by prior engineering bachelor\u2019s.",
    orientation: "30 credits \u00b7 Optional thesis \u00b7 1.5\u20132 years",
    sources: [
      ["Master\u2019s in CSE", "https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/"],
    ]
  },
  'texas-cs': {
    academic: "On-campus research MSCS: breadth (3) + minor (2), then coursework (5 electives) or thesis (3 electives + 2 thesis courses); typically ~10 courses / ~2 years. Distinct from the online MSCS.",
    orientation: "Research MSCS \u00b7 Coursework or thesis \u00b7 ~2 years",
    sources: [
      ["PhD and MS research degrees", "https://www.cs.utexas.edu/graduate/research-degrees"],
    ]
  },
};
