// Generated from path/outcomes/batch-001.json, batch-002.json, batch-003.json, batch-004.json, and id-map.json. Do not edit by hand.
export const outcomeBatchMeta = [
  {
    "batch_id": "batch-001",
    "agent": "path",
    "created": "2026-10-20",
    "access_date": "2026-10-20",
    "card_count": 11,
    "methodology": "Open public sources only (school career reports/PDFs, official pages, Scorecard/IPEDS via secondary aggregators, reputable MBA press summarizing official reports). No fabricated numbers; gaps labeled unknown. No alumni messaging.",
    "program_ids": [
      "stanford-mscs",
      "mit-eecs-meng",
      "cmu-mscs",
      "berkeley-eecs-meng",
      "uiuc-mcs",
      "gatech-mscs",
      "cornell-tech-meng-cs",
      "uw-cse-ms",
      "stanford-gsb-mba",
      "harvard-hbs-mba",
      "wharton-mba"
    ]
  },
  {
    "batch_id": "batch-002",
    "agent": "path",
    "created": "2026-10-20",
    "access_date": "2026-10-20",
    "card_count": 15,
    "schema_version": "outcome-card-v2-catalog",
    "schema_notes": [
      "catalog_id joins dist/catalog.js rankedSchools[].id (null if not in catalog)",
      "program_id is research slug",
      "route_mismatch true when researched degree/route ≠ catalog degree or catalog entry absent"
    ],
    "batch_001_caveats_documented": [
      "cornell-tech-meng-cs ≠ cornell-cs (campus)",
      "uw-cse-ms (Allen MS) ≠ washington-cs PMP",
      "mit-eecs-meng ↔ mit-cs adjacent"
    ],
    "methodology": "Open public sources only. No fabricated numbers. No alumni messaging. batch-001 files not rewritten.",
    "program_ids": [
      "columbia-mscs",
      "utaustin-mscs",
      "ucla-mscs",
      "umich-cse-ms",
      "usc-mscs",
      "princeton-mscs",
      "cmu-msml",
      "cmu-mcds",
      "gatech-omscs",
      "booth-mba",
      "kellogg-mba",
      "mit-sloan-mba",
      "columbia-mba",
      "haas-mba",
      "yale-som-mba"
    ],
    "catalog_ids": [
      "columbia-cs",
      "texas-cs",
      "ucla-cs",
      "michigan-cs",
      "usc-cs",
      "princeton-cs",
      null,
      null,
      "gatech-cs",
      "chicago-mba",
      "northwestern-mba",
      "mit-mba",
      "columbia-mba",
      "berkeley-mba",
      "yale-mba"
    ]
  },
  {
    "batch_id": "batch-003",
    "agent": "path",
    "created": "2026-10-20",
    "access_date": "2026-10-20",
    "card_count": 14,
    "schema_version": "outcome-card-v2-catalog",
    "batch_001_002_unchanged": true,
    "upgrade_of_batch_002": [],
    "upgrade_note": "No upgrades published: Columbia CS / UT Austin CS / UCLA MSCS / Michigan CSE still lack MS-specific official FDS PDFs this run. Columbia EE/CE placement page exists but is NOT CS and was not used as columbia-cs upgrade.",
    "methodology": "Open public sources only. No fabricated numbers. Gaps labeled unknown.",
    "program_ids": [
      "nyu-mscs",
      "ucsd-mscs",
      "upenn-mse-cis",
      "harvard-seas-cs-ms",
      "cmu-msaii",
      "duke-mscs",
      "brown-mscs",
      "umd-mscs",
      "tuck-mba",
      "ross-mba",
      "stern-mba",
      "fuqua-mba",
      "darden-mba",
      "anderson-mba"
    ],
    "catalog_ids": [
      "nyu-cs",
      "ucsd-cs",
      "penn-cs",
      "harvard-cs",
      null,
      "duke-cs",
      "brown-cs",
      "maryland-cs",
      "dartmouth-mba",
      "michigan-mba",
      "nyu-mba",
      "duke-mba",
      "virginia-mba",
      "ucla-mba"
    ]
  },
  {
    "batch_id": "batch-004",
    "agent": "path",
    "created": "2026-10-20",
    "access_date": "2026-10-20",
    "card_count": 17,
    "schema_version": "outcome-card-v2-catalog",
    "batch_001_002_003_unchanged": true,
    "upgrade_of_batch_002": [
      "umich-cse-ms"
    ],
    "upgrade_note": "Michigan CSE: new ECRC MasterComputerScienceEngineeringAY25.pdf. No upgrades for Columbia CS (still no CS FDS; EE-only pages ignored), UT Austin CS, or UCLA MSCS.",
    "methodology": "Open public sources only. No fabricated numbers. Gaps labeled unknown.",
    "program_ids": [
      "chicago-mpcs",
      "purdue-mscs",
      "wisconsin-mscs",
      "rice-mcs",
      "jhu-mse-cs",
      "yale-mscs",
      "caltech-cs-grad",
      "umich-cse-ms",
      "foster-mba",
      "tepper-mba",
      "mccombs-mba",
      "johnson-mba",
      "marshall-mba",
      "kenan-mba",
      "goizueta-mba",
      "rice-mba",
      "kelley-mba"
    ],
    "catalog_ids": [
      "chicago-cs",
      "purdue-cs",
      "wisconsin-cs",
      "rice-cs",
      "jhu-cs",
      "yale-cs",
      "caltech-cs",
      "michigan-cs",
      "washington-mba",
      "cmu-mba",
      "texas-mba",
      "cornell-mba",
      "usc-mba",
      "unc-mba",
      "emory-mba",
      "rice-mba",
      "indiana-mba"
    ]
  }
];
export const outcomeMeta = {
  "batch_id": "batch-001",
  "agent": "path",
  "created": "2026-10-20",
  "access_date": "2026-10-20",
  "card_count": 11,
  "methodology": "Open public sources only (school career reports/PDFs, official pages, Scorecard/IPEDS via secondary aggregators, reputable MBA press summarizing official reports). No fabricated numbers; gaps labeled unknown. No alumni messaging.",
  "program_ids": [
    "stanford-mscs",
    "mit-eecs-meng",
    "cmu-mscs",
    "berkeley-eecs-meng",
    "uiuc-mcs",
    "gatech-mscs",
    "cornell-tech-meng-cs",
    "uw-cse-ms",
    "stanford-gsb-mba",
    "harvard-hbs-mba",
    "wharton-mba"
  ]
};
export const outcomeCards = {
  "stanford-cs": {
    "school": "Stanford University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "internship_rate_notes": "Stanford CS department does not publish an MSCS-specific internship rate in a public employment report located this run.",
    "full_time_placement": "unknown (no MSCS-specific first-destination % found)",
    "full_time_placement_notes": "College Scorecard (field of study, CS master's) reports median earnings 1 year after completion ~$199,761 and 5-year median ~$331,747 for Stanford CS master's completers; these are earnings outcomes, not placement rates. Stanford MS&E (different program) publishes an MS employment report with Big Tech employers listed.",
    "notable_employers": [
      "Google",
      "Meta",
      "NVIDIA",
      "Microsoft",
      "Amazon",
      "Apple",
      "Tesla",
      "DeepMind (via anecdotal/public reports)",
      "Bay Area startups (qualitative)"
    ],
    "notable_employers_caveat": "Employer names for MSCS specifically are largely from secondary/alumni anecdotal sources (e.g., csgrad.com) and adjacent Stanford MS&E report, not an official MSCS career PDF.",
    "big_tech_or_top_firm_signal": "Qualitative: very high. Bay Area location + Stanford brand historically yields strong FAANG/AI resume screens. Quantitative MSCS-specific Big Tech %: unknown.",
    "sample_alumni_paths": [
      "Public anecdotal (csgrad.com, anonymized undergrad backgrounds): Meta SWE after Nvidia/Point72 internships",
      "Public anecdotal: Google / Google DeepMind new-grad roles from MSCS peers",
      "Public anecdotal: NVIDIA SWE/MLE paths; Scale AI MLE; Bloomberg NG",
      "Official adjacent (MS&E MS report, not CS): Amazon, Google, Google DeepMind, Microsoft, NVIDIA, Tesla, TikTok, Uber among Engineering & Technology employers"
    ],
    "referral_network_notes": "Public signals suggest dense Bay Area alumni in Big Tech; Stanford CS TA/RA culture and large MSCS cohort increase peer referral surface. Ease of cold outreach: unknown from public data alone.",
    "difficulty_notes": "Admissions extremely selective; once enrolled, public anecdotal consensus is strong Big Tech access, but 2024–26 market tightness means interview performance still decisive. Official competitive entry stats into specific employers: unknown.",
    "sources": [
      {
        "title": "College Grad Analyst – Stanford CS Master's earnings (Scorecard)",
        "url": "https://www.collegegradanalyst.com/state/california/institution/stanford-university-243744/program/1107-c5/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Degree Atlas – Stanford CS master's (IPEDS/Scorecard)",
        "url": "https://degreeatlas.org/institutions/stanford-university/programs/computer-science-masters/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Stanford MS&E Careers – MS Employment Report (adjacent program)",
        "url": "https://msandecareers.stanford.edu/employment-report/employment-report-master-science-graduates",
        "access_date": "2026-10-20"
      },
      {
        "title": "CS Grad – Stanford MSCS job outcomes notes (anecdotal, non-official)",
        "url": "https://csgrad.com/en/SSS/stanford%20mscs",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "No official Stanford MSCS first-destination report found; reliance on Scorecard earnings + anecdotal employer lists.",
    "last_updated": "2026-10-20",
    "pathProgramId": "stanford-mscs",
    "match": "same-route",
    "routeMismatch": false
  },
  "mit-cs": {
    "school": "Massachusetts Institute of Technology",
    "program": "EECS Master of Engineering (MEng)",
    "degree": "MEng",
    "internship_rate": "unknown (program requires professional experience; % completing internship vs colloquia/prior work unknown)",
    "internship_rate_notes": "MEng Professional Perspectives Requirement allows internship (4+ weeks), prior employment, 6-A, or colloquia. 6-A internship program notes employers often extend offers.",
    "full_time_placement": "MIT-wide master's (not EECS-specific): Fall 2025 GSS — 77.4% employed full-time as principal activity; among those working/military, 80.7% had accepted a position. 2023 GSS: 87% of master's job seekers obtained a job within 3 months.",
    "full_time_placement_notes": "Figures are Institute-wide master's, not EECS MEng only. EECS-specific employment rate: unknown.",
    "notable_employers": "unknown at EECS MEng program level from public dashboards fetched this run (interactive CAPD dashboards exist but EECS filter not extracted as static numbers)",
    "big_tech_or_top_firm_signal": "Qualitative: very high MIT brand + Boston/Cambridge tech + finance. Master's industry mix (Institute-wide 2025): Information/Computer Technology 24.3%, Professional/Scientific/Consulting 23.4%, Finance/Insurance 15.7%. EECS-specific Big Tech %: unknown.",
    "sample_alumni_paths": "unknown (EECS-specific public alumni examples not collected this run without login scrape)",
    "referral_network_notes": "MIT alumni network and CAPD recruiting are publicly strong; 6-A creates employer relationships. Specific referral ease metrics: unknown.",
    "difficulty_notes": "MEng primarily for MIT undergrads continuing; external applicants rare. Employer interview bars remain high despite brand.",
    "sources": [
      {
        "title": "MIT IR – Student Placement (2025 Graduating Student Survey)",
        "url": "https://ir.mit.edu/projects/student-placement/",
        "access_date": "2026-10-20"
      },
      {
        "title": "MIT News – Tracking graduates' career trajectories (2023 GSS stats)",
        "url": "https://news.mit.edu/2024/3-questions-tracking-mit-graduate-career-trajectories-1217",
        "access_date": "2026-10-20"
      },
      {
        "title": "MIT CAPD – Post-Graduate and Summer Outcomes",
        "url": "https://capd.mit.edu/post-graduateandsummer/",
        "access_date": "2026-10-20"
      },
      {
        "title": "MIT EECS – MEng Requirements (PPR/internship)",
        "url": "https://www.eecs.mit.edu/academics/undergraduate-programs/meng-program/requirements/",
        "access_date": "2026-10-20"
      },
      {
        "title": "MIT EECS – 6-A Graduate MEng",
        "url": "https://www.eecs.mit.edu/home/eecs-alliance-2/6a/6a-students/graduate-meng/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Solid Institute-wide master's placement numbers; EECS-MEng-specific rates and employer lists not broken out in static public pages.",
    "last_updated": "2026-10-20",
    "pathProgramId": "mit-eecs-meng",
    "match": "adjacent",
    "matchCaveat": "Catalog marks MIT as no external terminal master’s (PhD route). Path card is EECS MEng (mostly continuing undergrads). Show outcomes with this caveat; do not imply open Fall 2027 external MS.",
    "routeMismatch": false
  },
  "cmu-mscs": {
    "school": "Carnegie Mellon University",
    "program": "MS in Computer Science (School of Computer Science)",
    "degree": "MS",
    "internship_rate": "unknown (program lists typical internship semesters = 1.0; cohort internship % not published in comparison sheet)",
    "full_time_placement": "93% employed (Grads EMPL %); 90% employed or PhD; 4% continued education — SCS Master's Programs Comparison Data for grads Aug 2024 / Dec 2024 / May 2025 (n grads=50 for MSCS)",
    "full_time_placement_notes": "Official SCS comparison Excel: Grad EMPL 43/50 (0.93); Cont'd Educ 2 (0.04). Selectivity ~5.2% (107 admitted / 2073 apps).",
    "notable_employers": [
      "Databricks",
      "Snowflake",
      "Apple",
      "Tesla",
      "TikTok"
    ],
    "notable_employers_notes": "SCS comparison lists employers by popularity only if hiring ≥2 students. Broader CMU MSE 2024 PDF (sister SCS program) lists Amazon, Meta, Google, Nvidia, Microsoft, Apple, TikTok, etc.",
    "big_tech_or_top_firm_signal": "High. Official MSCS popular employers include Apple/TikTok/Tesla plus data-platform leaders Databricks/Snowflake. Median salary $150,000; average $158,967 (23 salaries reported).",
    "sample_alumni_paths": [
      "Typical titles from related SCS professional programs: Software Engineer / SDE / ML roles at Big Tech (MSE report)",
      "MSCS-specific titled paths: unknown beyond employer popularity list"
    ],
    "referral_network_notes": "SCS alumni density in Big Tech and infra startups is a known public signal; CMU CPDC publishes masters internship dashboards. Formal referral ease: unknown.",
    "difficulty_notes": "Admission highly selective (~5%). Post-admit placement % strong, but salary variance and market competition remain; average applications journey for related MSE programs was hundreds of apps (MSE PDF).",
    "sources": [
      {
        "title": "SCS Master's Programs Comparison Data (web)",
        "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
        "access_date": "2026-10-20"
      },
      {
        "title": "SCS MS Program Comparison Excel (official download)",
        "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
        "access_date": "2026-10-20"
      },
      {
        "title": "CMU CPDC Outcomes",
        "url": "https://www.cmu.edu/career/outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "CMU MSE 2024 Career Outcomes PDF (related SCS program)",
        "url": "https://mse.s3d.cmu.edu/applicants/career/2024-career-outcomes.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official SCS comparison spreadsheet provides MSCS-specific employment %, employers, and salaries for 2024–25 graduates.",
    "last_updated": "2026-10-20",
    "pathProgramId": "cmu-mscs",
    "match": "same-route",
    "routeMismatch": false
  },
  "berkeley-cs": {
    "school": "UC Berkeley",
    "program": "Master of Engineering (MEng) – EECS concentrations (Fung Institute)",
    "degree": "MEng",
    "internship_rate": "unknown (1-year lockstep Fall–Spring; limited summer internship window for full-time cohort)",
    "full_time_placement": "Program-wide MEng (all CoE depts): UC Regents PDST summary cites 87% of 2023 graduates working in the US and 71% remaining in California; over 60% consistently find employment in California. EECS-only placement %: unknown. Class of 2025 median salary $108,000 and median signing bonus $9,875 (Fung Institute site, program-wide).",
    "full_time_placement_notes": "Detailed Class of 2025 employment dashboard exists at funginstitute.berkeley.edu/career/employment-data/ but interactive/embed numbers not fully extractable as static text this run.",
    "notable_employers": "Major technology companies (UC Regents summary); specific named list for Class of 2025 EECS: unknown from static extract. Job titles listed program-wide include Software Developer, Data Scientist, Product Manager, Technology Consultant, Hardware Engineer, Systems Engineer.",
    "big_tech_or_top_firm_signal": "High qualitative (Bay Area + Berkeley EECS brand). Quantitative Big Tech share: unknown. Note: Class of 2025 reported median salary $108k is lower than many peer CS MS medians—may reflect mixed engineering departments in Fung MEng cohort, not EECS-only.",
    "sample_alumni_paths": [
      "Public alumni spotlights (Fung site): EECS MEng alumni in industry (e.g., Aditya Chichani MEng '22 EECS; Jun Zhang MEng '22 EECS) — specific employers not extracted from video spotlights this run"
    ],
    "referral_network_notes": "Fung Institute cites 3,400+ MEng alumni, dedicated career development team, Bay Area/SV entrepreneurial community. Referral ease: unknown quantitatively.",
    "difficulty_notes": "Competitive admissions; 1-year pace compresses recruiting vs 2-year MS. Bay Area employer density helps, but EECS MEng shares Fung career services with other engineering majors.",
    "sources": [
      {
        "title": "Fung Institute – Employment Data",
        "url": "https://funginstitute.berkeley.edu/career/employment-data/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Fung Institute – Full-time MEng (Class of 2025 salary)",
        "url": "https://funginstitute.berkeley.edu/fulltimemeng/",
        "access_date": "2026-10-20"
      },
      {
        "title": "UC Regents PDST attachment – Berkeley MEng outcomes summary",
        "url": "https://regents.universityofcalifornia.edu/regmeet/may25/a1attach.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Berkeley EECS – MEng program page",
        "url": "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official median salary and geographic outcome stats available; EECS-specific placement % and employer counts not isolated in static public text.",
    "last_updated": "2026-10-20",
    "pathProgramId": "berkeley-eecs-meng",
    "match": "same-route",
    "routeMismatch": false
  },
  "illinois-cs": {
    "school": "University of Illinois Urbana-Champaign",
    "program": "Master of Computer Science (MCS) / MS in Computer Science",
    "degree": "MCS / MS",
    "internship_rate": "unknown (graduate-specific internship rate not found; undergrad CS reports 95% internship/co-op — not applicable to MS)",
    "full_time_placement": "unknown (Illini Success first-destination reports cover bachelor's primarily). College Scorecard: CS master's median earnings 1 year after completion $146,670 (2025-26 Scorecard field-of-study data). IPEDS: 1,131 CS master's credentials awarded 2024-25 (includes MCS on-campus/online and MS).",
    "notable_employers": [
      "Amazon",
      "Apple",
      "Capital One",
      "Google",
      "IBM",
      "Meta",
      "Microsoft",
      "Netflix",
      "Sandia National Laboratories",
      "Twitch"
    ],
    "notable_employers_notes": "Employer list from Siebel School undergraduate career success page (2023-24 Illini Success). Graduate-specific employer list: unknown from sources fetched.",
    "big_tech_or_top_firm_signal": "Historically strong Big Tech feeder among publics; Scorecard 1-yr median $146,670 exceeds national CS master's median $108,219. Exact Big Tech % for MCS/MS: unknown.",
    "sample_alumni_paths": "unknown at graduate level from public reports this run (undergrad sample roles: Software Engineer, MLE, Quant Developer, etc.)",
    "referral_network_notes": "Large MCS alumni volume (hundreds of degrees/year) implies broad LinkedIn density at Big Tech. Formal referral metrics: unknown.",
    "difficulty_notes": "On-campus MCS/MS selective; online MCS more accessible. Large cohort size can increase peer competition for limited Big Tech slots.",
    "sources": [
      {
        "title": "Degree Atlas – UIUC CS master's (Scorecard/IPEDS)",
        "url": "https://degreeatlas.org/institutions/university-of-illinois-urbana-champaign/programs/computer-science-masters/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Siebel School – Facts & Rankings (undergrad outcomes + employers)",
        "url": "https://siebelschool.illinois.edu/about/facts-and-rankings",
        "access_date": "2026-10-20"
      },
      {
        "title": "Illinois Engineering Career Services – Salary and Outcomes Data",
        "url": "https://ecs.grainger.illinois.edu/fac-staff-resources/SalaryandOutcomesData",
        "access_date": "2026-10-20"
      },
      {
        "title": "Illini Success 2024-25 Annual Report (bachelor's)",
        "url": "https://illinisuccess.illinois.edu/24-25-annual-report",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Strong Scorecard earnings signal but no official MCS/MS first-destination employment rate or graduate employer table located.",
    "last_updated": "2026-10-20",
    "pathProgramId": "uiuc-mcs",
    "match": "same-route",
    "matchCaveat": "Catalog covers MS/MCS; path card mixes MCS/MS. Keep route distinction in prose.",
    "routeMismatch": false
  },
  "gatech-cs": {
    "school": "Georgia Institute of Technology",
    "program": "MS in Computer Science (College of Computing)",
    "degree": "MS",
    "internship_rate": "Partial signal only: College of Computing registered substantial master's CS internships (e.g., graduate internship enrollment tables show Computer Science master's internship counts; exact % of cohort unknown). Master's internship top CoC CS hiring companies include NVIDIA, Amazon, Meta, Microsoft, Apple, Google.",
    "full_time_placement": "84.3% placement (Computer Science Master's), n=834 responses; median salary $134,000; 95th percentile salary $206,000; mean signing bonus ~$20,586 — Georgia Tech Career & Salary Employment Report 2024-25, College of Computing section.",
    "notable_employers": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Google",
      "Meta",
      "Capital One",
      "Amazon Web Services",
      "AT&T",
      "Deloitte",
      "Adobe",
      "Bloomberg",
      "NVIDIA",
      "Intel",
      "Intuit",
      "JP Morgan"
    ],
    "big_tech_or_top_firm_signal": "Very high volume signal. Master's CoC employer list led by Amazon, Microsoft, Apple, Google, Meta. Institute-wide master's job accept 79%; CoC CS master's placement 84.3%. CS master's summer internship hourly rates reported ~$48–$56 depending on term.",
    "sample_alumni_paths": [
      "Common master's titles (CoC report): Software Engineer / SDE / Full Stack / Data / AI roles",
      "Employers spanning FAANG, finance (Capital One, JP Morgan, Bank of America), and defense/consulting"
    ],
    "referral_network_notes": "Large CoC graduate population and OMSCS alumni extend network; Atlanta + West Coast hiring both visible in location charts. Referral ease: unknown quantitatively.",
    "difficulty_notes": "On-campus MSCS competitive; large response n=834 means outcomes are robust but also reflect a big, varied cohort. Big Tech interviews still rigorous.",
    "sources": [
      {
        "title": "Georgia Tech Career Center Outcomes Report 2024-2025 (PDF)",
        "url": "https://bpb-us-e1.wpmucdn.com/sites.gatech.edu/dist/1/5568/files/2026/07/Career-Center-Outcomes-Report-2024-2025.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "GT College of Computing – Facts and Rankings",
        "url": "https://www.cc.gatech.edu/facts-and-rankings",
        "access_date": "2026-10-20"
      },
      {
        "title": "GT Academic Effectiveness – Career Survey Report AY 2024-2025",
        "url": "https://s2.academiceffectiveness.gatech.edu/surveys/reports/georgia-tech-career-survey-report-ay-2024-2025",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Career Center PDF publishes CS master's placement %, salary, and named employers for 2024-25.",
    "last_updated": "2026-10-20",
    "pathProgramId": "gatech-mscs",
    "match": "same-route",
    "routeMismatch": false
  },
  "cornell-cs": {
    "school": "Cornell Tech (Cornell University)",
    "program": "Master of Engineering in Computer Science",
    "degree": "MEng",
    "internship_rate": "unknown for 1-year MEng CS (summer internships highlighted mainly for two-year Jacobs programs; 2025 Jacobs intern employers included Amazon, Google, Meta, etc.)",
    "full_time_placement": "94% employed within 9 months of graduation (Class of 2025, n=110). Career paths: 74% job seekers, 11% founders, 15% other paths. All technical programs aggregate: 89% employed within 9 months (n=278).",
    "notable_employers": [
      "Google",
      "Amazon",
      "Palantir",
      "Bloomberg",
      "Visa",
      "Microsoft",
      "TikTok",
      "Scale AI"
    ],
    "big_tech_or_top_firm_signal": "High for NYC tech. Median salary for technical program graduates 2025: $140,000. Majority of roles: software developer, data scientist, data analyst, data engineer.",
    "sample_alumni_paths": [
      "Software developer / data scientist / data engineer at mature tech or startups (program statement)",
      "11% of CS MEng Class of 2025 pursued founding"
    ],
    "referral_network_notes": "NYC campus + Cornell alumni; startup studio ecosystem (128+ companies launched historically). Referral ease: unknown quantitatively.",
    "difficulty_notes": "Competitive admissions; NYC market competitive with Columbia/NYU peers. 9-month employment window used (not 3-month MBA-style).",
    "sources": [
      {
        "title": "Cornell Tech – Career Outcomes (Class of 2025)",
        "url": "https://tech.cornell.edu/career-management/career-outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Cornell Tech – Master of Engineering admissions page",
        "url": "https://admissions.tech.cornell.edu/masters-of-engineering/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Cornell Tech outcomes page publishes CS MEng-specific employment rate, path mix, employers, and median salary for Class of 2025.",
    "last_updated": "2026-10-20",
    "pathProgramId": "cornell-tech-meng-cs",
    "match": "different-campus",
    "matchCaveat": "Catalog cornell-cs is Ithaca MS/MEng. Path card is Cornell Tech MEng CS (NYC). Display outcomes labeled Cornell Tech; do not present as Ithaca route outcomes.",
    "routeMismatch": false
  },
  "washington-cs": {
    "school": "University of Washington",
    "program": "MS in Computer Science & Engineering (Allen School)",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "UW Alumni Survey 2024-25 Master's CSE: among respondents (15/155 = 10% response rate), 93% employed full-time, 0% seeking employment, 7% enrolled in further education. Mean salary $170,727 (n=11); mean first-year bonus $56,429 (n=7). Caveat: very low response rate — treat as directional only.",
    "notable_employers": [
      "Amazon (Allen School statement: 100+ hires of 2024-25 graduates)",
      "Google",
      "Meta",
      "Microsoft (more than two dozen new graduates per Allen School statement)",
      "Stripe",
      "Pinterest",
      "Jane Street",
      "Visa",
      "Qualcomm",
      "NTT Research"
    ],
    "notable_employers_notes": "Employer roster combines official Allen School careers myth-vs-reality PDF (Amazon/Google/Meta/Microsoft counts for Allen School grads broadly) and UW alumni survey current-activity roster for MS respondents (Stripe, Pinterest, Microsoft, Jane Street, Meta, Google, Visa, Qualcomm, etc.).",
    "big_tech_or_top_firm_signal": "Very high geographic signal (Seattle). Allen School: 120+ companies hired 2024-25 graduates into SWE roles; Amazon alone 100+. Survey respondents clustered in King/Pierce/Snohomish counties (69%).",
    "sample_alumni_paths": [
      "Senior Software Engineer – Stripe",
      "Software Engineer – Microsoft / Google / Meta / Pinterest / Visa",
      "Member of Technical Staff (employer redacted in survey table)",
      "Software Engineer – Jane Street",
      "CPU Performance Architect – Qualcomm; Postdoctoral fellow – NTT Research"
    ],
    "referral_network_notes": "Extremely dense Amazon/Microsoft alumni presence in Seattle from public hiring statements. Referral surface likely strong for Pacific Northwest roles.",
    "difficulty_notes": "Allen School MS admissions selective. Local Big Tech saturation helps screening but 2024–25 market still described as tighter than peak COVID years by Allen School itself.",
    "sources": [
      {
        "title": "UW Alumni Survey – 2024-25 Master's CSE PDF",
        "url": "https://depts.washington.edu/assessmt/pdfs/reports/2602/2602_UWS_Engineering_ComputerSci_M.PDF",
        "access_date": "2026-10-20"
      },
      {
        "title": "Allen School – CS Careers Myth vs Reality PDF",
        "url": "https://www.cs.washington.edu/wp-content/uploads/2025/09/cs-careers-myth-vs-reality.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "GeekWire – Amazon hiring UW CS grads",
        "url": "https://www.geekwire.com/2025/this-seattle-tech-giant-is-gobbling-up-computer-science-grads-from-the-university-of-washington/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official survey + Allen School hiring statement are strong, but MS survey response rate is only 10%, so placement % is not robust.",
    "last_updated": "2026-10-20",
    "pathProgramId": "uw-cse-ms",
    "match": "different-route",
    "matchCaveat": "Catalog washington-cs is Professional Master’s Program (no F-1/J-1). Path card is Allen School MS CSE. Label outcomes as Allen School MS; keep PMP visa restriction on the catalog row.",
    "routeMismatch": false
  },
  "stanford-mba": {
    "school": "Stanford Graduate School of Business",
    "program": "MBA",
    "degree": "MBA",
    "internship_rate": "unknown as a single %; Class of 2026 internships: Finance dominant industry; Technology (AI-driven) second; Health Care third; Consulting fourth (GSB employment reports narrative).",
    "full_time_placement": "Class of 2025: 426 graduates; 63% seeking employment (268). Offers within 3 months: 90%; acceptances within 3 months: 81%. 16% pursued own ventures; 13% company-sponsored/already employed; 3% continued education. 54% of acceptances facilitated by school channels.",
    "notable_employers": "Industry-level (not always named firm list in public summary): Technology 35%, Finance 33% (PE 16%, VC 6%, IM/HF 8%), Consulting 11%, Healthcare 5%, Energy 4%.",
    "big_tech_or_top_firm_signal": "Very high for tech MBA. Tech took #1 industry share (35%). Median base $185,000; average base $190,901; median signing bonus $30,000 (51% reported signing bonus). West US placement 55%.",
    "sample_alumni_paths": [
      "Enterprise technology / AI-related PM, GTM, customer success, sales (GSB narrative for 2025)",
      "Private equity / VC / investment management tracks within finance 33%",
      "Entrepreneurship: 16% of class; among founders, 42% tech, 18% search funds, 10% healthcare, 8% consumer"
    ],
    "referral_network_notes": "GSB network + Stanford ecosystem + CMC support publicly emphasized; 54% of accepts via school facilitation. Extremely strong founder/investor network signals.",
    "difficulty_notes": "Most selective MBA globally; even admits compete for scarce PE/VC/tech PM seats. Offer rate recovered but not at historical peaks for all peer schools.",
    "sources": [
      {
        "title": "Stanford GSB – Employment Outcomes",
        "url": "https://www.gsb.stanford.edu/programs/mba/career-impact/employment-outcomes",
        "access_date": "2026-10-20"
      },
      {
        "title": "Stanford GSB – Employment Reports",
        "url": "https://www.gsb.stanford.edu/organizations/recruit/strategies-resources/employment-reports",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Stanford GSB Employment Report MBA Class of 2025",
        "url": "https://www.clearadmit.com/2025/12/stanford-gsb-employment-report-mba-class-of-2025/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official GSB employment report figures corroborated by Clear Admit summary with detailed industry/salary breakdowns.",
    "last_updated": "2026-10-20",
    "pathProgramId": "stanford-gsb-mba",
    "match": "same-route",
    "routeMismatch": false
  },
  "harvard-mba": {
    "school": "Harvard Business School",
    "program": "MBA",
    "degree": "MBA",
    "internship_rate": "unknown (not extracted as a single % this run)",
    "full_time_placement": "Class of 2025: 65% of 925 graduates sought employment. Of seekers: 90% received offer within 3 months; 84% accepted within 3 months. Of non-seekers: 17% started businesses, 14% company-sponsored/already employed, 1% continuing education, 2% other.",
    "notable_employers": "Industry shares: Technology 22%, Consulting 21%, Private Equity 14%, Investment Management/HF 7%, Investment Banking 6%, Health Care 6%, VC 4%, Nonprofit/Government 4%. Firm-level named list: see HBS employment data portal (JS-gated this run).",
    "big_tech_or_top_firm_signal": "Very high across consulting/finance/tech. Median base $184,500 (~$185k overall in tables); median total compensation $232,800; median signing $30k (58% received); median variable bonus $46,100 (67%). Tech median base $178k; Consulting $190k; PE $188k + large bonuses; VC median base $200k.",
    "sample_alumni_paths": [
      "Consulting associate/consultant at MBB-type firms (21% consulting)",
      "Tech PM/strategy roles (22% technology)",
      "PE investor / IB analyst pathways",
      "Entrepreneurship: ~17% started businesses (~155 founders); ~17% joined startups (70% of startup joiners in tech)"
    ],
    "referral_network_notes": "HBS alumni network among the densest globally for consulting/PE/VC; entrepreneurship programming highlighted by admissions leadership. Quantitative referral ease: unknown.",
    "difficulty_notes": "Extremely selective admissions; Class of 2025 seeker offer rates improved vs 2024 but still below 2021 peaks (96%). Students increasingly take longer / non-traditional paths.",
    "sources": [
      {
        "title": "HBS MBA Blog – Class of 2025 Employment Report",
        "url": "https://www.hbs.edu/mba/blog/class-of-2025-employment-report",
        "access_date": "2026-10-20"
      },
      {
        "title": "HBS Recruiting – Employment Data portal",
        "url": "https://www.hbs.edu/recruiting/employment-data/Pages/default.aspx",
        "access_date": "2026-10-20"
      },
      {
        "title": "Poets&Quants – HBS Class of 2025 Jobs Report",
        "url": "https://poetsandquants.com/2025/12/02/harvard-business-school-class-of-2025-jobs-report-offers-rebound-pay-soars/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official HBS Class of 2025 employment figures widely published; detailed industry/salary tables from P&Q citing HBS report.",
    "last_updated": "2026-10-20",
    "pathProgramId": "harvard-hbs-mba",
    "match": "same-route",
    "routeMismatch": false
  },
  "penn-mba": {
    "school": "University of Pennsylvania – The Wharton School",
    "program": "MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026 internships: 778/858 seeking (90.7%); 100% of seekers reporting offers; 99.7% reporting acceptances (official 2025 Career Report).",
    "full_time_placement": "Class of 2025: 608/879 seeking (69.2%); 90.5% reporting job offers; 87.0% reporting acceptances. Non-seeking 25.4% including 150 returning to company, 46 self-employed/starting business.",
    "notable_employers": [
      "McKinsey & Company",
      "Boston Consulting Group (BCG)",
      "Bain & Company",
      "Goldman Sachs",
      "J.P. Morgan",
      "Morgan Stanley",
      "Blackstone",
      "KKR",
      "Apollo Global Management",
      "Google",
      "Microsoft",
      "Amazon",
      "Adobe",
      "TikTok",
      "Uber",
      "Accenture",
      "Deloitte",
      "EY-Parthenon",
      "Capital One",
      "American Express"
    ],
    "notable_employers_notes": "Employers listed hired ≥2 Class of 2025 members (official report).",
    "big_tech_or_top_firm_signal": "Finance-dominant elite MBA. Full-time industry: Financial Services 38.2% (median $175k), Consulting 28.2% ($190k), Technology 15.3% ($164,250). Overall median base $185,000. 94% US placement; Northeast 54.5%.",
    "sample_alumni_paths": [
      "Investment banking / PE / VC investor roles (finance 38.2%)",
      "Consulting/strategy (31.4% of function accepts in consulting/strategy)",
      "Product management / tech roles (tech 15.3%)"
    ],
    "referral_network_notes": "Wharton finance alumni network is among the strongest publicly signaled MBA networks; employer list shows breadth across bulge-bracket banks, mega-funds, and MBB.",
    "difficulty_notes": "Highly selective; finance recruiting intensity is extreme. Offer rates solid but students note longer timelines in recent cycles industry-wide.",
    "sources": [
      {
        "title": "Wharton MBA 2025 Career Report (PDF)",
        "url": "https://statistics.mbacareers.wharton.upenn.edu/wp-content/uploads/2025/12/2025-Career-Report.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Wharton MBA Class of 2025 Employment Report",
        "url": "https://www.clearadmit.com/2025/12/wharton-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Wharton MBA Career Services",
        "url": "https://mba.wharton.upenn.edu/mba-career-services/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Wharton PDF employment report with seeker %, offers, accepts, industry/function compensation, and named employers.",
    "last_updated": "2026-10-20",
    "pathProgramId": "wharton-mba",
    "match": "same-route",
    "routeMismatch": false
  },
  "columbia-cs": {
    "school": "Columbia University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no Columbia CS MS first-destination % located this run)",
    "full_time_placement_notes": "College Scorecard aggregators: CS master's median earnings ~$161,851 at 1 year; College Grad Analyst reports 5-year median $256,430 and 4-year $223,960 for Columbia CS master's completers. Earnings ≠ placement rates.",
    "notable_employers": "unknown at program-published list level this run",
    "big_tech_or_top_firm_signal": "Qualitative: high for NYC Big Tech + finance SWE. Quantitative Big Tech %: unknown. Scorecard 1-yr median ~$161.9k among federal-aid completers.",
    "sample_alumni_paths": "unknown from official public CS career report this run",
    "referral_network_notes": "Large NYC alumni density (engineering + finance) is a public signal; formal referral ease unknown.",
    "difficulty_notes": "Highly selective large MS; NYC market competitive with Cornell Tech/NYU peers.",
    "sources": [
      {
        "title": "Columbia CS – MS program",
        "url": "https://www.cs.columbia.edu/education/ms/",
        "access_date": "2026-10-20"
      },
      {
        "title": "College Grad Analyst – Columbia CS Master's earnings",
        "url": "https://www.collegegradanalyst.com/state/new-york/institution/columbia-university-in-the-city-of-new-york-190150/program/1107-c5/",
        "access_date": "2026-10-20"
      },
      {
        "title": "CollegeFactual – Columbia CS Master's (Scorecard)",
        "url": "https://www.collegefactual.com/majors/computer-information-sciences/computer-science/rankings/best-graduate-schools/masters-degrees/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Scorecard earnings available; no official CS MS first-destination report found.",
    "last_updated": "2026-10-20",
    "pathProgramId": "columbia-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "texas-cs": {
    "school": "University of Texas at Austin",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no UT CS MS first-destination % located this run)",
    "full_time_placement_notes": "UT CS offers on-campus Master's and separate online MSCS/MSAI; this card targets on-campus MS. Do not conflate online outcomes.",
    "notable_employers": "unknown",
    "big_tech_or_top_firm_signal": "Qualitative: strong among publics (Austin tech + UT CS ranking). Quantitative Big Tech % / salary: unknown.",
    "sample_alumni_paths": "unknown",
    "referral_network_notes": "Growing Austin employer density; quantitative referral ease unknown.",
    "difficulty_notes": "On-campus MS highly selective per department framing; online MSCS is a distinct route.",
    "sources": [
      {
        "title": "UT Austin CS – Graduate Degrees & Programs",
        "url": "https://www.cs.utexas.edu/graduate/degrees-and-programs",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Program confirmed; no public MS placement/salary PDF located.",
    "last_updated": "2026-10-20",
    "pathProgramId": "utaustin-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "ucla-cs": {
    "school": "UCLA",
    "program": "MS in Computer Science (MSCS)",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown",
    "full_time_placement_notes": "Admissions page contrasts MSCS vs MEng; cites 2022 cycle MSCS ~4000 apps / 150 offers. No MSCS first-destination % published on pages fetched.",
    "notable_employers": "unknown",
    "big_tech_or_top_firm_signal": "Qualitative: high LA/Bay recruiting potential. Quantitative: unknown.",
    "sample_alumni_paths": "unknown for MSCS industry paths this run",
    "referral_network_notes": "SoCal alumni + Amazon Science Hub partnership noted; referral ease unknown.",
    "difficulty_notes": "Competitive MSCS admissions; do not confuse with 1-year MEng.",
    "sources": [
      {
        "title": "UCLA CS – Graduate Admissions (MSCS vs MEng)",
        "url": "https://www.cs.ucla.edu/graduate-admissions/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Clear MSCS identity; no official employment/salary report found.",
    "last_updated": "2026-10-20",
    "pathProgramId": "ucla-mscs",
    "routeMismatch": false,
    "routeMismatchNotes": "Researched CS Department MSCS (2-year), NOT Samueli MEng.",
    "match": "same-route"
  },
  "michigan-cs": {
    "school": "University of Michigan",
    "program": "MS in Computer Science and Engineering",
    "degree": "MS",
    "internship_rate": "Intern hourly average $49.77 (median $52.72; range $20–$71.88) for AY2025 CSE master’s reporting — rate % unknown.",
    "full_time_placement": "unknown as % employed. Official ECRC AY2025 Master CSE sheet publishes starting salaries and employers (not CSEA seeker %).",
    "notable_employers": [
      "Microsoft",
      "Apple",
      "Bloomberg",
      "ByteDance",
      "Capital One",
      "Databricks",
      "Jane Street",
      "Jump Trading",
      "Palantir",
      "Stripe",
      "Tesla",
      "TikTok",
      "Uber",
      "Figma",
      "Roblox",
      "IMC Trading",
      "Ford",
      "Anduril"
    ],
    "big_tech_or_top_firm_signal": "High. AY2025 full-time starting annual salary: average $141,846; median $136,000; range $74,000–$370,000. Top industries: Software & Computer Services; Financials; Technology Hardware; Retail; Automobiles & Parts.",
    "sample_alumni_paths": [
      "Software / Full-Stack / Production Engineer",
      "ML / AI / Applied Scientist / Research Engineer",
      "Quantitative Trader",
      "DevOps / Embedded Firmware / Forward Deployed Engineer"
    ],
    "referral_network_notes": "Michigan Engineering Career Resource Center (ECRC). Facilitation % unknown.",
    "difficulty_notes": "Large selective public CSE MS; automotive + trading + Big Tech mix distinctive vs pure Bay pipelines.",
    "sources": [
      {
        "title": "Michigan Engineering ECRC – Master CSE AY25 PDF",
        "url": "https://career.engin.umich.edu/wp-content/uploads/sites/30/2026/06/MasterComputerScienceEngineeringAY25.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Michigan Engineering post-grad / salary info hub",
        "url": "https://career.engin.umich.edu/students/michigan-engineering-student-salary-information/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official ECRC AY2025 Master CSE salary + employer sheet (upgrade over prior low-conf card).",
    "meta": {
      "upgrade_of": "batch-002"
    },
    "last_updated": "2026-10-20",
    "pathProgramId": "umich-cse-ms",
    "routeMismatch": false,
    "routeMismatchNotes": "upgrade_of: batch-002 — new official Michigan Engineering ECRC Master CSE AY2025 major info sheet.",
    "match": "same-route"
  },
  "usc-cs": {
    "school": "University of Southern California",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (Viterbi outcomes site 403; no CS MS first-destination % extracted)",
    "full_time_placement_notes": "Scorecard via DegreeAtlas: 1-yr median earnings $134,544; IPEDS 1,126 CS master's credentials 2024-25. Ibex/College Grad Analyst: 4-yr median ~$188,871; 5-yr ~$207,395; median federal debt $51,250.",
    "notable_employers": "unknown",
    "big_tech_or_top_firm_signal": "Qualitative: large LA CS MS volume. Scorecard 1-yr median above national CS master's median ($108,219). Big Tech %: unknown.",
    "sample_alumni_paths": "unknown",
    "referral_network_notes": "Very large MSCS alumni volume (1000+ awards/year); formal referral ease unknown.",
    "difficulty_notes": "Large multi-track program; outcomes may vary by specialization.",
    "sources": [
      {
        "title": "Degree Atlas – USC CS master's",
        "url": "https://degreeatlas.org/institutions/university-of-southern-california/programs/computer-science-masters/",
        "access_date": "2026-10-20"
      },
      {
        "title": "College Grad Analyst – USC CS Master's earnings",
        "url": "https://www.collegegradanalyst.com/state/california/institution/university-of-southern-california-123961/program/1107-c5/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Ibex Insights – CS earnings ranking",
        "url": "https://www.ibexinsights.co/data/fields/computer-science-1107/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Solid Scorecard earnings; missing official placement rate and employer table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "usc-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "princeton-cs": {
    "school": "Princeton University",
    "program": "MSE / M.Eng. in Computer Science",
    "degree": "MSE (default) / M.Eng. (optional switch)",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no public CS master's first-destination report; admissions suspended Fall 2027)",
    "notable_employers": "unknown",
    "big_tech_or_top_firm_signal": "Qualitative: elite brand. Quantitative master's placement: unknown. Do not misuse bachelor's Scorecard figures as master's.",
    "sample_alumni_paths": "unknown",
    "referral_network_notes": "Small cohort + Princeton alumni network historically strong; metrics unknown.",
    "difficulty_notes": "When open: extremely selective, fully funded, 2-year. For Fall 2027: master's applications closed.",
    "sources": [
      {
        "title": "Princeton CS – Master's Degree (Fall 2027 suspension)",
        "url": "https://www.cs.princeton.edu/grad/masters-degree-requirements",
        "access_date": "2026-10-20"
      },
      {
        "title": "Princeton CS – Admissions Requirements",
        "url": "https://www.cs.princeton.edu/grad/admissions-requirements",
        "access_date": "2026-10-20"
      },
      {
        "title": "Princeton Grad School – CS field (no MSE Fall 2027)",
        "url": "https://gradschool.princeton.edu/academics/degrees-requirements/fields-study/computer-science",
        "access_date": "2026-10-20"
      },
      {
        "title": "Princeton Grad School – Application Deadlines",
        "url": "https://gradschool.princeton.edu/admission-onboarding/prepare/application-deadlines",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official suspension confirmed; career numbers unavailable — primary value is Fall 2027 status warning.",
    "last_updated": "2026-10-20",
    "pathProgramId": "princeton-mscs",
    "routeMismatch": true,
    "routeMismatchNotes": "Catalog princeton-cs. CRITICAL: CS department will NOT accept master's applications for Fall 2027. Historically fully funded via TAships. Join useful for archive but not an active Fall 2027 apply target.",
    "match": "different-route",
    "matchCaveat": "Catalog princeton-cs. CRITICAL: CS department will NOT accept master's applications for Fall 2027. Historically fully funded via TAships. Join useful for archive but not an active Fall 2027 apply target."
  },
  "chicago-mba": {
    "school": "University of Chicago Booth School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 100% of seeking first-years received internship offers (Booth story); monthly intern median base $12,000; Amazon 60 Booth interns.",
    "full_time_placement": "Class of 2025: 534/663 (80.5%) seeking. Offers 3 mo 89.1%; accepts 87.8%. 38 starting company; 57 sponsored. School-facilitated 72.1% of hires.",
    "notable_employers": [
      "BCG (52)",
      "McKinsey (35)",
      "Bain (30)",
      "Amazon (20)",
      "Goldman Sachs (11)",
      "JPMorgan (11)",
      "Google",
      "Accenture",
      "Capital One",
      "Deloitte",
      "Evercore",
      "EY-Parthenon",
      "Strategy&"
    ],
    "big_tech_or_top_firm_signal": "Consulting 36.7% ($190k med), Financial Services 31.6% ($175k), Technology 14.1% ($151k). Overall median base $175k; sign-on $30k (65%).",
    "sample_alumni_paths": [
      "MBB consulting",
      "IB/finance/PE",
      "Tech Amazon/Google",
      "Entrepreneurship (38 founders)"
    ],
    "referral_network_notes": "72.1% hires via Booth-facilitated channels (49.7% via Booth-facilitated summer employer).",
    "difficulty_notes": "Highly selective; consulting recruiting intense.",
    "sources": [
      {
        "title": "Booth – 2025 Employment Report story",
        "url": "https://www.chicagobooth.edu/why-booth/stories/mba-employment-report-2025",
        "access_date": "2026-10-20"
      },
      {
        "title": "Booth – Employment Report hub",
        "url": "https://www.chicagobooth.edu/employmentreport",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Booth MBA 2025",
        "url": "https://www.clearadmit.com/2025/12/chicago-booth-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Booth Class of 2025 figures + Clear Admit corroboration.",
    "last_updated": "2026-10-20",
    "pathProgramId": "booth-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "northwestern-mba": {
    "school": "Northwestern University – Kellogg School of Management",
    "program": "Two-Year Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as a single % this run",
    "full_time_placement": "Class of 2025: 88% offers by 3 mo; 86% accepts by 3 mo; 90% accepts by 6 mo. 20 graduates launching ventures.",
    "notable_employers": [
      "McKinsey",
      "Bain",
      "BCG",
      "PwC Strategy&",
      "Deloitte Consulting",
      "Accenture Strategy",
      "J.P. Morgan",
      "KKR",
      "Warburg Pincus",
      "Evercore",
      "Adobe",
      "AQR"
    ],
    "big_tech_or_top_firm_signal": "Consulting 38% ($190k), Financial Services 21% ($175k), Technology 19% ($151.5k), CPG 9%, Healthcare 6%. Median base $175k; signing $30k; Kellogg cites median total comp $205k.",
    "sample_alumni_paths": [
      "MBB/strategy consulting",
      "IB/PE/fintech",
      "Tech",
      "Founders/search funds (20)"
    ],
    "referral_network_notes": "Strong consulting/CPG alumni reputation; 39% Midwest placement.",
    "difficulty_notes": "Selective M7; 3-mo offer rates below early-2020s peaks.",
    "sources": [
      {
        "title": "Kellogg – Career Outcomes",
        "url": "https://www.kellogg.northwestern.edu/programs/full-time-mba/career-services/career-outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Kellogg news – Class of 2025 outcomes",
        "url": "https://www.kellogg.northwestern.edu/news/blog/2025/12/17/class-2025-career-outcomes-top-employers/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Kellogg MBA 2025",
        "url": "https://www.clearadmit.com/2025/12/northwestern-kellogg-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Kellogg outcomes page + Clear Admit 3/6-month rates and salaries.",
    "last_updated": "2026-10-20",
    "pathProgramId": "kellogg-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "mit-mba": {
    "school": "MIT Sloan School of Management",
    "program": "MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 69.3% sought internships. Top industries Tech 31%, Finance 29.6%, Consulting 16%. Top employers Amazon (21), BCG (21), JPMorgan (10).",
    "full_time_placement": "Class of 2025: 64.6% seeking (256/396). Offers 3 mo 91.0%; accepts 87.1%; 94.1% offers by publication. Starting business 11.1%. Reporting rate 99.2%.",
    "notable_employers": [
      "BCG (26)",
      "McKinsey (20)",
      "Amazon (12)",
      "Bain (12)",
      "Verizon (7)",
      "Strategy& (5)",
      "Apple",
      "Microsoft",
      "Google",
      "JPMorgan",
      "NVIDIA",
      "Palantir"
    ],
    "big_tech_or_top_firm_signal": "Consulting 32.3%, Technology 23.3%, Finance 20.6%. Median base $175k; mean $173,132; median signing $30k. PM/Development function 13.6%.",
    "sample_alumni_paths": [
      "MBB consulting",
      "Tech PM/growth",
      "Finance IB/PE/VC",
      "Entrepreneurship 11.1%",
      "LGO partner companies"
    ],
    "referral_network_notes": "62.9% of FT accepts from school-facilitated activities (35.7% school-facilitated summer internship).",
    "difficulty_notes": "Selective; tech PM and consulting competitive; 40% international class.",
    "sources": [
      {
        "title": "MIT Sloan 2025-2026 MBA Employment Report PDF",
        "url": "https://mitsloan.mit.edu/sites/default/files/2025-12/2025-2026-MBA-Employment-Report.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "MIT Sloan CDO Employment Reports",
        "url": "https://mitsloan.mit.edu/career-development-office/employment-reports",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Sloan CSEA-standard PDF with full seeker/offer/employer/salary detail.",
    "last_updated": "2026-10-20",
    "pathProgramId": "mit-sloan-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "columbia-mba": {
    "school": "Columbia Business School",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single % this run",
    "full_time_placement": "Class of 2025: 92% offers / 90.2% accepts within 3 months among seekers. 346 organizations; 200+ first-time employers.",
    "notable_employers": [
      "McKinsey (62)",
      "BCG (62)",
      "Bain (33)",
      "PwC (24)",
      "Deloitte (23)",
      "JPMorgan (22)",
      "Amazon (21)"
    ],
    "big_tech_or_top_firm_signal": "Financial Services 35.4%, Consulting 33.2% ($190k med), Technology ~10.2%. Median base $175k; signing $30k (68.9%). 82% US.",
    "sample_alumni_paths": [
      "IB/IM/VC/RE finance",
      "MBB and Big 4 consulting",
      "Tech (Amazon top hirer)"
    ],
    "referral_network_notes": "Deep NYC finance network per Associate Dean statement; facilitation % not in Clear Admit extract.",
    "difficulty_notes": "Large class; finance recruiting intensity extreme.",
    "sources": [
      {
        "title": "CBS – 2025 Employment Report",
        "url": "https://business.columbia.edu/recruiters/employment-report",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – CBS MBA 2025",
        "url": "https://www.clearadmit.com/2025/12/cbs-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CBS report figures + Clear Admit employer/industry detail.",
    "last_updated": "2026-10-20",
    "pathProgramId": "columbia-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "berkeley-mba": {
    "school": "UC Berkeley Haas School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single % this run",
    "full_time_placement": "Class of 2025: 182/229 seeking. Offers 3 mo 86%; accepts 84%. Starting business 6.6%; sponsored 9.6%. 67.3% school-facilitated accepts.",
    "notable_employers": [
      "Adobe",
      "Bain",
      "BCG",
      "Deloitte",
      "Google",
      "McKinsey",
      "Microsoft",
      "Morgan Stanley"
    ],
    "big_tech_or_top_firm_signal": "Technology 39%, Consulting 27%, Financial Services 16%. Median base $167,250; mean $164,930; mean sign-on $35,829 (75%); 45% equity (median $90k). 15% startups.",
    "sample_alumni_paths": [
      "Bay Area tech",
      "MBB consulting",
      "Finance",
      "Startups 15%"
    ],
    "referral_network_notes": "Bay Area network; 41.2% of accepts from conversion of school-sourced internship.",
    "difficulty_notes": "Smaller class; international 3-mo offer rate 78.2% vs domestic 91.3%.",
    "sources": [
      {
        "title": "Haas Employment Report Class of 2025",
        "url": "https://mba.haas.berkeley.edu/careers/employment-report",
        "access_date": "2026-10-20"
      },
      {
        "title": "Haas FTMBA 2025 Employment Report Tables PDF",
        "url": "https://mba.haas.berkeley.edu/hubfs/Website%20Pages/Full-Time/Graphics/Employment%20Report/Haas%20FTMBA%202025%20Employment%20Report%20Tables%20FINAL-s.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Haas report page + detailed PDF tables.",
    "last_updated": "2026-10-20",
    "pathProgramId": "haas-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "yale-mba": {
    "school": "Yale School of Management",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 100% of seekers accepted internship offers (314/314). Median weekly $2,360.",
    "full_time_placement": "Class of 2025: 273/336 seeking (81.3%). Offers 3 mo 82.1%; accepts 79.9%. Starting business 6.8%. International offer rate 83.8%.",
    "notable_employers": [
      "McKinsey",
      "BCG",
      "Bain",
      "Deloitte",
      "EY-Parthenon",
      "Goldman Sachs",
      "JPMorgan",
      "Morgan Stanley",
      "Amazon",
      "Google",
      "Microsoft",
      "Adobe",
      "Apple",
      "OpenAI",
      "Palantir",
      "Databricks"
    ],
    "big_tech_or_top_firm_signal": "Consulting Services 36.9% ($190k), Finance 28.6% ($175k), Technology 8.3% ($138.2k). Overall median base $175k; signing $30k; guaranteed YE bonus median $40k. 92.8% US.",
    "sample_alumni_paths": [
      "External consulting 36.9%",
      "Investment banking 18%",
      "Tech at FAANG/AI firms on employer list",
      "Nonprofit/social impact pathways"
    ],
    "referral_network_notes": "Yale SOM CDO publishes open employment data; facilitation % unknown in PDF.",
    "difficulty_notes": "2025 offer/accept rates lower than some M7 peers; tech share smaller than Haas/Sloan.",
    "sources": [
      {
        "title": "Yale SOM Employment Data 2025-26 PDF",
        "url": "https://som.yale.edu/sites/default/files/2025-12/Yale%20SOM%20Employment%20Data%202025-26.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Yale SOM Employment Report page",
        "url": "https://som.yale.edu/programs/mba/career-paths/employment-report-2025-26",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Yale SOM MBA 2025",
        "url": "https://www.clearadmit.com/2025/12/yale-som-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Yale SOM Employment Data PDF with full seeker/offer/salary/employer detail.",
    "last_updated": "2026-10-20",
    "pathProgramId": "yale-som-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "nyu-cs": {
    "school": "New York University (Courant Institute)",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (Courant CS department does not publish MSCS-specific first-destination % in sources located). Adjacent: NYU Tandon Class of 2025 master's (all Tandon majors) 93.7% employed or in school within 6 months; avg FT starting salary $108,102 — Tandon-wide, not Courant MSCS.",
    "notable_employers": "Courant-specific list: unknown. Tandon top-10 employers (school-wide, not Courant-only): Amazon, Apple, ByteDance, Capital One, Goldman Sachs, Google, Mastercard, Meta, Microsoft, TIAA.",
    "big_tech_or_top_firm_signal": "Qualitative: strong NYC finance+tech pipeline for Courant. Quantitative Courant MSCS Big Tech %: unknown.",
    "sample_alumni_paths": "unknown from official Courant FDS this run",
    "referral_network_notes": "Dense NYC alumni; formal referral metrics unknown.",
    "difficulty_notes": "Competitive MSCS; NYC market also includes Columbia/Cornell Tech peers.",
    "sources": [
      {
        "title": "NYU Courant CS – Master's prospective overview",
        "url": "https://cs.nyu.edu/dynamic/masters/prospective-overview/",
        "access_date": "2026-10-20"
      },
      {
        "title": "NYU Tandon – Career Outcomes (Tandon-wide, not Courant)",
        "url": "https://engineering.nyu.edu/life-tandon/tandon-career-hub/career-outcomes",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "No Courant MSCS-specific employment report; only adjacent Tandon-wide master's stats.",
    "last_updated": "2026-10-20",
    "pathProgramId": "nyu-mscs",
    "routeMismatch": false,
    "routeMismatchNotes": "Catalog nyu-cs mapped to Courant MSCS. NYU Tandon Engineering publishes separate master's-wide outcomes — do NOT attribute Tandon aggregates to Courant.",
    "match": "same-route"
  },
  "ucsd-cs": {
    "school": "UC San Diego",
    "program": "MS in Computer Science and Engineering",
    "degree": "MS",
    "internship_rate": "unknown (CSE internship placement stats page exists but covers 2008–2010 only — obsolete)",
    "full_time_placement": "unknown (no current CSE MS first-destination report). College Scorecard via College Grad Analyst: CS master's median earnings 5 years after completion $301,159; 4-year $245,333; median federal debt $25,903; ~294–308 completers in recent window.",
    "notable_employers": "unknown (program-published list not found)",
    "big_tech_or_top_firm_signal": "Qualitative: strong SoCal/Bay systems+AI brand. Scorecard 5-yr median $301k is among highest CS master's nationally — earnings not placement rate. Big Tech %: unknown.",
    "sample_alumni_paths": "unknown",
    "referral_network_notes": "CSE career advising supports students but states it does not place students into jobs. Referral ease unknown.",
    "difficulty_notes": "Selective public CSE MS; San Diego + remote Bay recruiting.",
    "sources": [
      {
        "title": "UCSD CSE – Career Advising",
        "url": "https://cse.ucsd.edu/graduate/career-advising",
        "access_date": "2026-10-20"
      },
      {
        "title": "UCSD CSE – Internship Placement Statistics (historical)",
        "url": "https://cse.ucsd.edu/graduate/resources/internship-placement-statistics",
        "access_date": "2026-10-20"
      },
      {
        "title": "College Grad Analyst – UCSD CS Master's earnings",
        "url": "https://www.collegegradanalyst.com/state/california/institution/university-of-california-san-diego-110680/program/1107-c5/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Strong Scorecard earnings; missing official current MS placement % and employer table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "ucsd-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "penn-cs": {
    "school": "University of Pennsylvania",
    "program": "MSE in Computer and Information Science (CIS)",
    "degree": "MSE",
    "internship_rate": "unknown at CIS-only %",
    "full_time_placement": "SEAS Master's overall (Aug 2023–May 2024, all SEAS MS programs): 83.1% employed / continuing ed / military / not seeking within 6 months; knowledge rate 70% (722/1038). CIS MSE-specific placement %: unknown. CIS MSE full-time employers listed extensively in report.",
    "notable_employers": [
      "Amazon/AWS",
      "Google",
      "Meta",
      "Microsoft",
      "Apple",
      "Palantir",
      "Bloomberg",
      "Goldman Sachs",
      "Jane Street",
      "Citadel",
      "Stripe",
      "TikTok",
      "Capital One",
      "Databricks",
      "LinkedIn",
      "DoorDash",
      "Jump Trading",
      "SIG"
    ],
    "big_tech_or_top_firm_signal": "Very high from CIS MSE employer roster in official Penn Career Services SEAS Master's 2024 report. SEAS-wide: Technology industry 33%; Software Dev/Engineering function 33%; overall median salary $112,000 (all SEAS MS — not CIS-only). CIS titles heavily SWE/MLE/quant.",
    "sample_alumni_paths": [
      "Software Engineer – Google, Meta, Microsoft, Amazon, Stripe, Palantir, Bloomberg",
      "ML Engineer – LinkedIn, C3 AI",
      "Quant/Trading-related SWE – Jane Street, Citadel, Jump, SIG, Point72"
    ],
    "referral_network_notes": "Penn Career Services + SEAS industry day/career fair cited in survey responses; Wharton adjacency. Formal CIS-only referral % unknown.",
    "difficulty_notes": "CIS MSE selective; MCIT is career-switcher oriented with different outcomes (see separate MCIT Online reports). Do not mix.",
    "sources": [
      {
        "title": "Penn Career Services – SEAS Master's 2024 Career Plans Survey Report PDF",
        "url": "https://cdn.uconnectlabs.com/wp-content/uploads/sites/74/2025/07/2024-Career-Plan-SEAS-Masters-Report-Final.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Penn Career Services – Graduate reports by school",
        "url": "https://careerservices.upenn.edu/post-graduate-outcomes/graduate-student-reports-by-school/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Penn SEAS Master's report lists CIS MSE employers/titles; overall SEAS rates published (CIS-only % still unknown).",
    "last_updated": "2026-10-20",
    "pathProgramId": "upenn-mse-cis",
    "routeMismatch": false,
    "routeMismatchNotes": "Researched on-campus CIS MSE. MCIT (and MCIT Online/MAS-CS Online) is a DIFFERENT program — do not conflate. Penn SEAS Master's 2024 report aggregates all SEAS master's but lists CIS MSE positions separately.",
    "match": "same-route"
  },
  "harvard-cs": {
    "school": "Harvard University (SEAS)",
    "program": "Master's in Computational Science and Engineering (CSE)",
    "degree": "Master's (CSE)",
    "internship_rate": "unknown",
    "full_time_placement": "Official SEAS CSE careers page (classes 2019–2021 rough breakdown): Technology 51%, Finance 14%, Graduate Studies 13%, Other industries 22%. Exact employment rate %: unknown.",
    "notable_employers": [
      "Amazon",
      "Apple",
      "Facebook/Meta",
      "Google",
      "Microsoft",
      "Snowflake",
      "Waymo",
      "Citadel",
      "Two Sigma",
      "Goldman Sachs",
      "JP Morgan",
      "Bloomberg",
      "McKinsey Analytics/QuantumBlack",
      "Vertex Pharmaceuticals"
    ],
    "big_tech_or_top_firm_signal": "High for tech+quant paths based on published 2019–2021 industry mix (51% technology). Current-year rates: unknown.",
    "sample_alumni_paths": [
      "SWE / data scientist / ML engineer in Big Tech (program examples)",
      "Quantitative analyst in finance",
      "Further graduate study (13% of 2019–2021)"
    ],
    "referral_network_notes": "Harvard + SEAS alumni; Office of Student Career Development resources. Metrics unknown.",
    "difficulty_notes": "Small selective interdisciplinary program; not equivalent to a large MSCS feeder factory.",
    "sources": [
      {
        "title": "Harvard SEAS – CSE Master's Careers",
        "url": "https://seas.harvard.edu/masters-computational-science-and-engineering/careers",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official industry breakdown for 2019–2021 cohorts; dated and not a full CSEA-style FDS.",
    "last_updated": "2026-10-20",
    "pathProgramId": "harvard-seas-cs-ms",
    "routeMismatch": true,
    "routeMismatchNotes": "Catalog harvard-cs. CSE is an interdisciplinary computational science master's (not a standalone MS Computer Science). Flag mismatch per catalog notes.",
    "match": "different-route",
    "matchCaveat": "Catalog harvard-cs. CSE is an interdisciplinary computational science master's (not a standalone MS Computer Science). Flag mismatch per catalog notes."
  },
  "duke-cs": {
    "school": "Duke University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (Duke Graduate School 'Computer Science: Master's Career Outcomes Statistics' page fetched without usable numeric tables this run)",
    "notable_employers": "unknown from official public FDS this run",
    "big_tech_or_top_firm_signal": "Qualitative: Duke brand + Triangle/tech recruiting. Quantitative: unknown.",
    "sample_alumni_paths": "unknown",
    "referral_network_notes": "Duke alumni network; CS-specific referral metrics unknown.",
    "difficulty_notes": "Selective private MSCS; official competitiveness-to-employer stats unknown.",
    "sources": [
      {
        "title": "Duke Graduate School – CS Master's Career Outcomes Statistics",
        "url": "https://gradschool.duke.edu/about/statistics/computer-science-master-s-career-outcomes-statistics/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Outcomes page exists but no extractable placement/salary figures this run.",
    "last_updated": "2026-10-20",
    "pathProgramId": "duke-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "brown-cs": {
    "school": "Brown University",
    "program": "ScM in Computer Science",
    "degree": "ScM",
    "internship_rate": "unknown (professional track offers optional 2–6 month internship opportunity; rate unknown)",
    "full_time_placement": "unknown (no numeric FDS). Official program page: recent master's graduates hold positions such as senior software developers, ML/AI engineers, data scientists, and product managers.",
    "notable_employers": "unknown as a published list; alumni example on page includes American Express (Financial Analyst)",
    "big_tech_or_top_firm_signal": "Qualitative: Ivy CS brand. Quantitative Big Tech % / salary: unknown.",
    "sample_alumni_paths": [
      "Senior software developer / ML/AI engineer / data scientist / product manager (program statement)",
      "Senior Financial Analyst – American Express (featured alum)"
    ],
    "referral_network_notes": "Brown CS faculty collaboration culture cited by alumni; referral metrics unknown.",
    "difficulty_notes": "Customizable research or coursework track; AI & ML track available on-campus/online.",
    "sources": [
      {
        "title": "Brown – Master of Science in Computer Science",
        "url": "https://graduateprograms.brown.edu/graduate-program/computer-science-scm",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Official qualitative career outcomes only; no placement rate or salary table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "brown-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "maryland-cs": {
    "school": "University of Maryland",
    "program": "MS in Computer Science (department outcomes note)",
    "degree": "MS",
    "internship_rate": "Among 390 respondents answering internship questions (dept-wide survey): 84.4% completed ≥1 internship; 67.2% completed ≥2; 89.1% had ≥1 paid internship. 62% said internship led to job offer.",
    "full_time_placement": "Department-wide Class of 2024: 93% placement; 80.5% workforce; 12.4% further education; 1.9% unplaced; median starting salary $105,000 (full-time jobs). MS-only figures: unknown.",
    "notable_employers": [
      "Amazon",
      "Google",
      "Microsoft",
      "Capital One",
      "Lockheed Martin",
      "NSA"
    ],
    "big_tech_or_top_firm_signal": "Qualitative strong for DMV (62% of employed in MD/VA/DC). Median $105k is lower than many peer MS medians — may reflect undergrad mix. MS-specific Big Tech %: unknown.",
    "sample_alumni_paths": [
      "Software engineer, data analyst, product manager, systems developer (common titles in survey)"
    ],
    "referral_network_notes": "DMV federal/contractor + Big Tech density; UMD career fairs cited.",
    "difficulty_notes": "Large department; MS competitiveness and outcomes may differ sharply from BS aggregates.",
    "sources": [
      {
        "title": "UMD CS – 93% Job Placement Rate (Class of 2024 survey)",
        "url": "https://www.cs.umd.edu/article/2025/09/umd-computer-science-graduates-report-93-job-placement-rate",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Official survey exists but is department-wide, not MS-specific — high risk of misattribution.",
    "last_updated": "2026-10-20",
    "pathProgramId": "umd-mscs",
    "routeMismatch": true,
    "routeMismatchNotes": "Official Sept 2025 article reports 93% placement for CS class of 2024 across 959 graduates (72% knowledge rate) — appears to be department-wide (likely dominated by undergraduates), NOT MS-only. Treat as adjacent signal; MS-specific rate unknown.",
    "match": "different-route",
    "matchCaveat": "Official Sept 2025 article reports 93% placement for CS class of 2024 across 959 graduates (72% knowledge rate) — appears to be department-wide (likely dominated by undergraduates), NOT MS-only. Treat as adjacent signal; MS-specific rate unknown."
  },
  "dartmouth-mba": {
    "school": "Dartmouth College – Tuck School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "See Tuck Class of 2026 summer internship employment data (linked from site); single % not extracted in overview.",
    "full_time_placement": "Class of 2025: 268/292 (92%) seeking. Offers within 3 months: 90%; accepts: 87%. International: 92% offers / 88% accepts. At 6 months: 93% offers / 91% accepts (news article). 70% of roles via school-facilitated activities.",
    "notable_employers": "Select employers across consulting, finance, technology, health care (logos/list on Tuck employment statistics page; named firms in news narrative include Morgan Stanley among alumni examples).",
    "big_tech_or_top_firm_signal": "Consulting 41% (median $190k), Financial Services 27% ($175k), Technology 13% ($145k). Overall median base $175k; median signing $30k (83% received); combined median compensation $205k (Tuck record).",
    "sample_alumni_paths": [
      "Consulting (41%)",
      "IB within finance (13% of class in IB industry row)",
      "Tech roles (13%)",
      "Healthcare/pharma/biotech (7%)"
    ],
    "referral_network_notes": "70% school-facilitated; high adviser-to-student ratio publicly emphasized.",
    "difficulty_notes": "Small elite MBA; consulting-heavy. Strong international placement relative to peers in 2025.",
    "sources": [
      {
        "title": "Tuck – MBA Employment Statistics (Class of 2025)",
        "url": "https://tuck.dartmouth.edu/mba/career-services/employment-statistics",
        "access_date": "2026-10-20"
      },
      {
        "title": "Tuck news – 2025 employment outcomes",
        "url": "https://tuck.dartmouth.edu/news/articles/2025-employment-outcomes-reflect-strength-talent-and-versatility-of-tuck-mbas",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Tuck Class of 2025 employment statistics with full industry/function/location tables.",
    "last_updated": "2026-10-20",
    "pathProgramId": "tuck-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "michigan-mba": {
    "school": "University of Michigan – Ross School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Intern industry mix published (Consulting 28.1%, Financial Services 18.6%, Technology 17.1%); seeker % for interns on employment-data page.",
    "full_time_placement": "Class of 2025: 280/366 (76.5%) seeking per Clear Admit. Offers: 78% by graduation, 86% within 3 months, 92% within 6 months. Accepts ~84.3% within 3 months / 90% within 6 months (Ross tables). 81% of accepted offers school-facilitated.",
    "notable_employers": [
      "Boston Consulting Group",
      "McKinsey & Co.",
      "Amazon",
      "Deloitte",
      "Bain & Co.",
      "PwC Strategy&",
      "EY-Parthenon",
      "Bank of America",
      "Microsoft",
      "Capital One",
      "Goldman Sachs"
    ],
    "big_tech_or_top_firm_signal": "Consulting 33.5% (median $190k), Financial Services 19.5% ($175k), Technology 13.1% ($143k), Healthcare 10.2%. Overall median base $170k; median signing $30k (91% received).",
    "sample_alumni_paths": [
      "MBB/Strategy& consulting",
      "IB/finance",
      "Tech (Amazon top FT+intern hirer)",
      "CPG/brand (PepsiCo, GM, Nike)"
    ],
    "referral_network_notes": "81% school-facilitated; 266 companies hired Ross graduate or intern in 2025.",
    "difficulty_notes": "Later hiring cycle (large graduation→3-month gap); persistence emphasized by CDO.",
    "sources": [
      {
        "title": "Michigan Ross – Full-Time MBA Employment Data 2025",
        "url": "https://michiganross.umich.edu/graduate/full-time-mba/careers/employment-data",
        "access_date": "2026-10-20"
      },
      {
        "title": "Ross news – 2025 Full-Time MBA Career Report",
        "url": "https://michiganross.umich.edu/news/michigan-ross-releases-2025-full-time-mba-career-report-improved-outcomes-challenging-market",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Ross MBA Class of 2025",
        "url": "https://www.clearadmit.com/2025/12/michigan-ross-employment-report-mba-class-of-2025/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Ross employment-data page with industry/function/region and top employers.",
    "last_updated": "2026-10-20",
    "pathProgramId": "ross-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "nyu-mba": {
    "school": "NYU Stern School of Business",
    "program": "Two-Year Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 99.4% of those seeking a summer internship secured one (Stern employment reports page).",
    "full_time_placement": "Class of 2025: 86.3% received offers / 86.0% accepted within 3 months (P&Q citing Stern). Later accepted offers rose toward ~90% per Stern note. By graduation: 76.4% offers / 75.6% accepts.",
    "notable_employers": "Finance/consulting/tech ecosystem in NYC; employer list page linked from Stern employment reports (interactive). Specific multi-hire names not fully extracted from static page.",
    "big_tech_or_top_firm_signal": "Finance 36.6%, Consulting 32.8%, Technology 14.2% (P&Q from Stern report). Median base $175,000; avg base $168,970; avg signing $41,007 (median $35k); Stern avg total compensation $202,705. Northeast 82.4% of accepts.",
    "sample_alumni_paths": [
      "Investment banking (~28% of accepts)",
      "Consulting",
      "Tech rebound to 14.2%",
      "NYC-concentrated careers"
    ],
    "referral_network_notes": "NYC alumni ecosystem emphasized by Associate Dean; high EQ/agility narrative.",
    "difficulty_notes": "Slower offers by graduation vs historical mid-90s 3-month rates; strong finish by 3+ months.",
    "sources": [
      {
        "title": "NYU Stern – Employment Reports",
        "url": "https://www.stern.nyu.edu/business-partnerships/employment-reports",
        "access_date": "2026-10-20"
      },
      {
        "title": "Poets&Quants – Stern MBA Jobs 2025",
        "url": "https://poetsandquants.com/2025/12/09/2025-mba-jobs-at-nyu-stern-sharper-gains-for-international-grads/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Stern headline stats + detailed P&Q tables citing Stern employment report.",
    "last_updated": "2026-10-20",
    "pathProgramId": "stern-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "duke-mba": {
    "school": "Duke University – Fuqua School of Business",
    "program": "Daytime MBA",
    "degree": "MBA",
    "internship_rate": "Internship industry mix in official PDF (Consulting 26.1%, Financial Services 20.4%, Technology 18.6%, Healthcare 13.5%).",
    "full_time_placement": "Class of 2025: 315 seeking / 350 graduates. Offers by graduation 72.4%; accepts by graduation 68.6%. Offers by 3 months 82.2%; accepts by 3 months 79%. 106 employers hired FT Fuqua MBAs.",
    "notable_employers": [
      "Accenture Strategy",
      "Adobe",
      "Amazon",
      "Apple",
      "Bain & Company",
      "BCG",
      "Bank of America",
      "Barclays",
      "Deloitte Consulting",
      "EY-Parthenon",
      "McKinsey (listed among hiring orgs in PDF continuation)"
    ],
    "big_tech_or_top_firm_signal": "Consulting 34.0% (median $190k), Financial Services 20.9% ($175k), Technology 15.6% ($144k), Healthcare 7.4% ($140k). Overall median base $160,000; median signing $30,000 (85.1% received).",
    "sample_alumni_paths": [
      "Consulting",
      "Finance IB/corporate",
      "Tech",
      "Healthcare",
      "General management (16.5% function)"
    ],
    "referral_network_notes": "Team Fuqua culture; career services mobility narrative. Facilitation % not in at-a-glance extract.",
    "difficulty_notes": "2025 3-month offer/accept rates lower than many M7 peers; broader industry mix outside consulting/finance (~45% by industry).",
    "sources": [
      {
        "title": "Fuqua Daytime MBA Employment Report 2025 PDF",
        "url": "https://www.fuqua.duke.edu/sites/default/files/media/programs/daytime/duke-mba-employment-2025.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Fuqua – Employment Reports hub",
        "url": "https://www.fuqua.duke.edu/employers/employment-reports",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Fuqua 2025 employment PDF with CSEA-style seeker/offer/industry/salary data.",
    "last_updated": "2026-10-20",
    "pathProgramId": "fuqua-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "virginia-mba": {
    "school": "University of Virginia – Darden School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 100% of FT MBA students completed an internship (Darden Report article).",
    "full_time_placement": "Class of 2025: 327/352 seeking. Offers within 3 months: 90.2%; accepts: 89.3%. At 6 months: 94% secured roles. 100% of students tracked.",
    "notable_employers": [
      "Amazon",
      "Bain & Company",
      "Bank of America",
      "Barclays",
      "BCG",
      "American Express",
      "McKinsey & Company"
    ],
    "big_tech_or_top_firm_signal": "Consulting 37.3%, Financial Services 26.0%, Technology 16.1% (nearly doubled YoY per Clear Admit). Median base $175,000 (5th consecutive year); median signing $30,000; mean base $162,578. >70% school-facilitated; ~60% via internships.",
    "sample_alumni_paths": [
      "Consulting",
      "Finance",
      "Tech (16.1%)",
      "Entrepreneurship (12 starting new business)"
    ],
    "referral_network_notes": "Strong school-facilitated + internship conversion; case-method network.",
    "difficulty_notes": "Offers by graduation lower than peak years but 3/6-month outcomes remain strong.",
    "sources": [
      {
        "title": "UVA Darden Class of 2025 FT Employment Outcome Data PDF",
        "url": "https://www.darden.virginia.edu/sites/default/files/2025-11/UVA%20Darden%20Class%20of%202025%20FT%20Employment%20Outcome%20Data_web.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Darden Report – 2025-26 employment results",
        "url": "https://news.darden.virginia.edu/articles/2025-26-employment-results-highlight-remarkable-job-market-success-of-darden-graduates",
        "access_date": "2026-10-20"
      },
      {
        "title": "Clear Admit – Darden MBA Class of 2025",
        "url": "https://www.clearadmit.com/2025/12/uva-darden-mba-class-of-2025-employment-report/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Darden CSEA PDF + school news with 100% tracking.",
    "last_updated": "2026-10-20",
    "pathProgramId": "darden-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "ucla-mba": {
    "school": "UCLA Anderson School of Management",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 99% of seekers accepted internship offers; median monthly base ~$9,370.",
    "full_time_placement": "Class of 2025: 241/290 (83.1%) seeking. Offers by graduation 59.3%; by 3 months 76.3%. Accepts by graduation 54.8%; by 3 months 74.7%; by 6 months 85%. 70% of accepts via Anderson-facilitated resources.",
    "notable_employers": [
      "Amazon",
      "BCG",
      "McKinsey",
      "Deloitte",
      "Bank of America",
      "Bain",
      "Google",
      "Apple",
      "Adobe",
      "Microsoft",
      "Meta",
      "EY-Parthenon"
    ],
    "big_tech_or_top_firm_signal": "Technology 28.3% (median $147k), Consulting 25.6% ($175k), Financial Services 19.4% ($175k). Overall median base $160,096 (+12% YoY); mean $153,566; median signing $30k. 22% received stock/equity. California 67.8% of hires.",
    "sample_alumni_paths": [
      "Tech PM/software in CA",
      "Management consulting 23.9%",
      "Investment banking 13.3%",
      "Entertainment & media 7.2%"
    ],
    "referral_network_notes": "70% Anderson-facilitated; SoCal alumni + entertainment industry access.",
    "difficulty_notes": "Slower 3-month accept rate (74.7%) than many East Coast peers; strong 6-month catch-up to 85%. International offers by graduation lagged domestic.",
    "sources": [
      {
        "title": "UCLA Anderson Class of 2025 Full-Time MBA Employment Report PDF",
        "url": "https://www.anderson.ucla.edu/sites/default/files/document/2026-03/Class%20of%202025%20Employment%20Report%20Digital%20PDF_1.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Anderson – Career Impact",
        "url": "https://www.anderson.ucla.edu/degrees/full-time-mba/career-impact",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Anderson Class of 2025 employment PDF with CSEA-compliant tables.",
    "last_updated": "2026-10-20",
    "pathProgramId": "anderson-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "chicago-cs": {
    "school": "University of Chicago",
    "program": "Masters Program in Computer Science (MPCS)",
    "degree": "MS",
    "internship_rate": "unknown as cohort %; Career Services pages feature internship→FT conversion stories (Amazon/AWS, Tempus AI, Adobe, etc.)",
    "full_time_placement": "Official program statement: approximately 90% of graduates employed full-time in the field 6–12 months after completion. Class of 2024–25 outcomes published on MPCS Career Outcomes Reports / homepage (not a CSEA MBA-style seeker table).",
    "notable_employers": [
      "Amazon/AWS",
      "Google",
      "Meta",
      "Microsoft",
      "Apple",
      "NVIDIA",
      "TikTok",
      "Citadel",
      "Jump Trading",
      "DRW",
      "Goldman Sachs",
      "Jane Street-adjacent Chicago trading firms (historical employer lists)",
      "SpaceX (alumni example)"
    ],
    "big_tech_or_top_firm_signal": "High. Class of 2024–25: average salary $167,400. Positions — Software Engineer 50%, Consultant 14%, AI/ML Engineer 9%, Researcher 9%, Other 18%. Industries — Technology 50%, Finance/Banking/Trading 19%, Research 11%, Consulting 6%, Other 14%. Avg salary by position (published): Data Scientist/Analyst $118k; AI/ML Engineer $133k; (higher SWE/consultant bands on page up to ~$193–194k).",
    "sample_alumni_paths": [
      "Software Engineer (50% of 2024–25)",
      "Consultant (14%)",
      "AI/ML Engineer (9%)",
      "Researcher (9%)"
    ],
    "referral_network_notes": "Dedicated MPCS Career Services; Polsky entrepreneurship adjacency. Formal referral % unknown.",
    "difficulty_notes": "Professional MS with 9-course / 12-course / joint MBA/MPCS tracks; industry-oriented not PhD feeder.",
    "sources": [
      {
        "title": "MPCS Career Outcomes Reports",
        "url": "https://masters.cs.uchicago.edu/career-services/career-outcomes-reports/",
        "access_date": "2026-10-20"
      },
      {
        "title": "MPCS homepage – 2024–25 positions/industries/salary",
        "url": "https://masters.cs.uchicago.edu/",
        "access_date": "2026-10-20"
      },
      {
        "title": "MPCS Admissions FAQ – salary",
        "url": "https://masters.cs.uchicago.edu/frequently-asked-questions-1/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official MPCS Career Outcomes Report figures for Class of 2024–25 (salary, position, industry mixes).",
    "last_updated": "2026-10-20",
    "pathProgramId": "chicago-mpcs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "purdue-cs": {
    "school": "Purdue University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown (BS internship stats published separately; MS internship % unknown)",
    "full_time_placement": "MS graduation survey AY 2024–2025 (Aug/Dec 2024, May 2025): 89 of 118 MS graduates responded (75%). Overall employment rate %: not published as a single figure. Employer/salary samples published by region.",
    "notable_employers": [
      "Amazon",
      "Amazon Web Services",
      "Microsoft",
      "Apple",
      "LinkedIn",
      "Oracle",
      "NVIDIA",
      "TikTok",
      "Facebook/Meta",
      "Goldman Sachs",
      "Capital One",
      "Stripe",
      "Reddit",
      "Riot Games",
      "Atlassian",
      "AMD",
      "Audible"
    ],
    "big_tech_or_top_firm_signal": "Strong West-coast Big Tech signal from employer table. West-region average salary among reporting MS hires: $137,273 (range $105,000–$168,000, n=30). Other regions: averages unavailable due to small n.",
    "sample_alumni_paths": [
      "SWE / SDE at Amazon, Microsoft, Apple, LinkedIn, Oracle, Stripe, TikTok",
      "Roles at NVIDIA, Reddit, Riot Games, Capital One, Goldman Sachs"
    ],
    "referral_network_notes": "CS Corporate Relations placement pages; formal referral % unknown.",
    "difficulty_notes": "Large public CS MS; outcomes self-reported; not all respondents answered salary.",
    "sources": [
      {
        "title": "Purdue CS Placement",
        "url": "https://www.cs.purdue.edu/corporate/placement/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Purdue CS MS Salary & Employment Statistics AY 2024–25 PDF",
        "url": "https://www.cs.purdue.edu/corporate/docs/2024_25ms_companies.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official MS survey with employers and West salary average; overall placement % not stated.",
    "last_updated": "2026-10-20",
    "pathProgramId": "purdue-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "wisconsin-cs": {
    "school": "University of Wisconsin–Madison",
    "program": "MS in Computer Sciences",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no public aggregate MS first-destination %). Department Spring/Summer 2025 master’s graduates page lists individual next steps (self-reported).",
    "notable_employers": [
      "NVIDIA",
      "Nutanix",
      "Netflix",
      "Google",
      "Oracle",
      "AWS",
      "ByteDance",
      "TikTok",
      "MathWorks",
      "Lockheed Martin",
      "RTX"
    ],
    "big_tech_or_top_firm_signal": "Qualitative from 2025 graduate statements (NVIDIA systems/GPU/architect roles, Google SWE, Netflix data engineer, AWS, Oracle, TikTok). Aggregate Big Tech % / salary: unknown. Graduate School employment IDE exists but is access-restricted.",
    "sample_alumni_paths": [
      "Software developer / GPU architect / systems SWE at NVIDIA",
      "LLM Eng / MTS(ML) / SWE at Nutanix",
      "Data engineer at Netflix / AWS / ByteDance",
      "SWE at Google, Oracle, MathWorks, Lockheed Martin, TikTok"
    ],
    "referral_network_notes": "Faculty career support cited by graduates; formal referral metrics unknown.",
    "difficulty_notes": "Strong systems/ML research brand; public Tableau exit/employment tools are restricted — no open FDS PDF.",
    "sources": [
      {
        "title": "UW–Madison CS – Spring & Summer 2025 Master’s Graduates",
        "url": "https://www.cs.wisc.edu/grad/spring-summer-2025-masters-graduates/",
        "access_date": "2026-10-20"
      },
      {
        "title": "UW–Madison Post-Graduation Outcomes (tools overview)",
        "url": "https://data.wisc.edu/graduate-outcomes/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Only individual graduate next-step anecdotes; no cohort placement or salary table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "wisconsin-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "rice-cs": {
    "school": "Rice University",
    "program": "Master of Computer Science (in-person MCS)",
    "degree": "MCS",
    "internship_rate": "Official program page: 93% summer 2025 internship placement rate. Internship employers cited include Amazon, Meta, Microsoft, LinkedIn, Tableau.",
    "full_time_placement": "unknown (no published MCS-specific FT employment % or salary table located). Program designed for industry careers.",
    "notable_employers": [
      "Google",
      "Meta",
      "Microsoft",
      "Amazon",
      "Oracle",
      "Cisco",
      "IBM",
      "LinkedIn",
      "Schlumberger",
      "Tableau"
    ],
    "big_tech_or_top_firm_signal": "Qualitative high via employer examples + 93% internship placement. FT Big Tech % / salary: unknown.",
    "sample_alumni_paths": [
      "Industry MCS roles at listed tech employers (program marketing)",
      "Energy/tech Houston pipeline (Schlumberger cited)"
    ],
    "referral_network_notes": "Rice Center for Career Development + MCS workplace communications / projects. Metrics unknown.",
    "difficulty_notes": "Professional MCS (not PhD track); Houston + national tech recruiting.",
    "sources": [
      {
        "title": "Rice – In-Person Master of Computer Science",
        "url": "https://csweb.rice.edu/academics/graduate-programs/person-master-computer-science",
        "access_date": "2026-10-20"
      },
      {
        "title": "Rice CS Masters Programs",
        "url": "https://csweb.rice.edu/academics/graduate-programs/masters-programs",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official 93% internship placement and employer examples; missing FT placement % and salaries.",
    "last_updated": "2026-10-20",
    "pathProgramId": "rice-mcs",
    "routeMismatch": false,
    "routeMismatchNotes": "Catalog rice-cs maps to MCS professional master’s (also online MCS). Research MS may differ — card is in-person MCS career framing.",
    "match": "same-route"
  },
  "jhu-cs": {
    "school": "Johns Hopkins University",
    "program": "MSE in Computer Science (residential)",
    "degree": "MSE",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no program-level placement rate or salary survey published on CS MSE page)",
    "notable_employers": [
      "Amazon",
      "Google",
      "Bank of America",
      "Bloomberg",
      "Intuit",
      "Deloitte",
      "Roblox",
      "IMC Trading"
    ],
    "big_tech_or_top_firm_signal": "Illustrative alumni employers only (not a verified cohort survey). Quantitative % / salary: unknown.",
    "sample_alumni_paths": "unknown beyond illustrative employer list",
    "referral_network_notes": "JHU CS / Whiting career resources; metrics unknown.",
    "difficulty_notes": "Residential MSE; do not confuse with EP online CS. No cash-cow FDS published.",
    "sources": [
      {
        "title": "JHU CS – Master of Science in Engineering, Computer Science",
        "url": "https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Employer examples only; no official cohort outcomes table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "jhu-mse-cs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "yale-cs": {
    "school": "Yale University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown. Program states most graduates enter industry (large companies and startups); a few continue to PhD. Yale does not publish program-specific post-degree statistics (per Engineering MS CS page).",
    "notable_employers": [
      "Microsoft",
      "Google",
      "Facebook/Meta"
    ],
    "big_tech_or_top_firm_signal": "Qualitative only (named large companies on program page). Rates/salaries: unknown. Do not use Yale College first-destination data as MS CS.",
    "sample_alumni_paths": [
      "Industry SWE at large tech / startups (program description)",
      "PhD continuation (minority path)"
    ],
    "referral_network_notes": "Yale Office of Career Strategy supports master’s students; MS-specific referral % unknown.",
    "difficulty_notes": "Small selective MS; no public FDS — treat outcomes as unknown quantitatively.",
    "sources": [
      {
        "title": "Yale Engineering – MS Computer Science",
        "url": "https://engineering.yale.edu/academic-study/departments/computer-science/graduate-study/master-science-program",
        "access_date": "2026-10-20"
      },
      {
        "title": "Yale OCS – Masters channel",
        "url": "https://ocs.yale.edu/channels/masters/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Official qualitative industry orientation; explicitly no program-specific published statistics.",
    "last_updated": "2026-10-20",
    "pathProgramId": "yale-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "caltech-cs": {
    "school": "California Institute of Technology",
    "program": "Computer Science graduate study (no terminal MS)",
    "degree": "N/A (no terminal MS)",
    "internship_rate": "unknown / not applicable as terminal MS",
    "full_time_placement": "unknown / not applicable — no terminal MS CS program outcomes to report",
    "notable_employers": "unknown for a nonexistent terminal MS cohort",
    "big_tech_or_top_firm_signal": "N/A for terminal MS. Caltech PhD/undergrad pipelines are strong but out of scope for master’s route cards.",
    "sample_alumni_paths": [],
    "referral_network_notes": "N/A",
    "difficulty_notes": "Applicants seeking a taught MS CS should not treat Caltech as a master’s destination.",
    "sources": [
      {
        "title": "Caltech CMS graduate academics",
        "url": "https://www.cms.caltech.edu/academics/grad",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Catalog and Caltech academic statement confirm no terminal CS master’s — mismatch is factual, not outcome uncertainty.",
    "last_updated": "2026-10-20",
    "pathProgramId": "caltech-cs-grad",
    "routeMismatch": true,
    "routeMismatchNotes": "Catalog caltech-cs: Caltech traditionally does not offer a terminal CS master’s. Card flags route mismatch — not a Fall 2027 master’s application target.",
    "match": "different-route",
    "matchCaveat": "Catalog caltech-cs: Caltech traditionally does not offer a terminal CS master’s. Card flags route mismatch — not a Fall 2027 master’s application target."
  },
  "washington-mba": {
    "school": "University of Washington – Foster School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Internship industry/function tables in 2026 Employment Report (Class of 2026 interns); Technology ~44.7% of internships by industry in report extract.",
    "full_time_placement": "Class of 2025: 95/106 (89.6%) seeking. Offers by graduation 66.3%; by 3 months cumulative ~77.9% (66.3%+11.6%). Foster career page also cites 86% received offers at 6 months. Acceptances equaled offers for reporting period. School-facilitated 51.4% of sources.",
    "notable_employers": [
      "Amazon",
      "Google",
      "Ernst & Young",
      "Nike"
    ],
    "big_tech_or_top_firm_signal": "Technology largest industry at 40.5% (median base $142,800). Consulting 25.7% (median $175k). Overall mean base $144,411; median $142,800. Career page: average signing bonus $39k+.",
    "sample_alumni_paths": [
      "Tech roles (40.5%)",
      "Consulting (25.7%)",
      "Marketing/Sales function 27%",
      "General Management 17.6%"
    ],
    "referral_network_notes": "51.4% school-facilitated; strong Seattle tech/internship conversion (35.1% school-facilitated internship conversion).",
    "difficulty_notes": "Tech-heavy Pacific Northwest MBA; international share high among seekers.",
    "sources": [
      {
        "title": "Foster Full-Time MBA Employment Report 2026 (Class of 2025) PDF",
        "url": "https://foster.uw.edu/wp-content/uploads/2026/04/2026-Full-Time-MBA-Employment-Report-4.2.26.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Foster – Full-time MBA Career Outcomes",
        "url": "https://foster.uw.edu/academics/degree-programs/full-time-mba/career-management/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CSEA-style Foster Class of 2025 employment PDF.",
    "last_updated": "2026-10-20",
    "pathProgramId": "foster-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "cmu-mba": {
    "school": "Carnegie Mellon University – Tepper School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "See Tepper 2025 Internship Report (linked from careers pages); 72.5% of accepted summer internships school-facilitated (summary report).",
    "full_time_placement": "Class of 2025: 139/169 seeking. Offers by graduation 67.6%; by 3 months cumulative 82.7% (67.6%+15.1%). Site headline: 83% offers by 3 months; 89% by 6 months. Accepts by graduation 63.3%; by 3 months ~80.6%. 73% of FT accepted offers school-facilitated.",
    "notable_employers": "Consulting and technology dominant; specific multi-hire list in summary materials (McKinsey cited in alum quote). Detailed employer roster: see full PDF.",
    "big_tech_or_top_firm_signal": "Consulting industry ~35.7% (median ~$184k); Technology ~25.0% (median $144k). Overall mean base $154,846; median $160,000; mean signing $38,610 (80.8% reporting). Average total compensation $186,043 (site).",
    "sample_alumni_paths": [
      "Management/strategy consulting (~34% function)",
      "Finance (~20% function)",
      "Tech/product/ops mix"
    ],
    "referral_network_notes": "Masters Career Center; 73% school-facilitated FT accepts.",
    "difficulty_notes": "Analytics/tech brand MBA; consulting+tech ~60% of 2025 grads.",
    "sources": [
      {
        "title": "Tepper 2025 Full-Time MBA Employment Data PDF",
        "url": "https://www.cmu.edu/sites/default/files/cmu-tepper-site-files/documents/2025%20Full%20Time%20MBA%20Employment%20Data.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Tepper Compensation Highlights",
        "url": "https://www.cmu.edu/tepper/programs/mba/careers/compensation-highlights",
        "access_date": "2026-10-20"
      },
      {
        "title": "Tepper 2025 MBA Employment Report Summary PDF",
        "url": "https://www.cmu.edu/sites/default/files/cmu-tepper-site-files/documents/2025%20MCC%20MBA%20Employment%20Summary%20Report_Web.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Tepper CSEA employment data + compensation highlights.",
    "last_updated": "2026-10-20",
    "pathProgramId": "tepper-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "texas-mba": {
    "school": "University of Texas at Austin – McCombs School of Business",
    "program": "Full-Time MBA (Hildebrand)",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 91% of internship-seeking students secured internships. 56% of Class of 2025 FT accepts via summer internship conversion.",
    "full_time_placement": "Class of 2025: 201 seeking. Offers by graduation 63.2%; by 3 months 74.6%. Accepts by graduation 60.2%; by 3 months 72.1%. Within 6 months: 80.2% received offers / 78.2% accepted (report narrative).",
    "notable_employers": [
      "Amazon",
      "Dell Technologies",
      "McKinsey & Company",
      "Capital One",
      "Eli Lilly",
      "PepsiCo",
      "PricewaterhouseCoopers",
      "Truist"
    ],
    "big_tech_or_top_firm_signal": "Consulting 28% (median $190k), Technology 22% (median $140k), Financial Services 19% (median $171k). Overall mean base $154,053; median $150,000. Strong Southwest/Texas concentration (71.6% in Texas; 56.4% Austin).",
    "sample_alumni_paths": [
      "Consulting",
      "Tech",
      "Financial services",
      "Energy (6%)"
    ],
    "referral_network_notes": "Internship conversion pathway emphasized (56%); Austin employer network.",
    "difficulty_notes": "Slower 3-month timing than M7; 6-month catch-up; strong Texas placement.",
    "sources": [
      {
        "title": "McCombs FT MBA Employment Report 2025-26 PDF",
        "url": "https://go.mccombs.utexas.edu/rs/503-KLY-263/images/FT%20MBA%20Employment%20Report%202025-26.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "McCombs Full-Time MBA Career Outcomes",
        "url": "https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/career/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official McCombs Class of 2025 employment PDF with CSEA timing/salary tables.",
    "last_updated": "2026-10-20",
    "pathProgramId": "mccombs-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "cornell-mba": {
    "school": "Cornell University – SC Johnson / Johnson Graduate School of Management",
    "program": "Two-Year Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single % this run (employment-data page focuses on FT Class of 2025)",
    "full_time_placement": "Class of 2025: 239/285 seeking. 85% received offers / 83% accepted within 3 months. US work auth: 91% offers; non-US: 77% offers.",
    "notable_employers": [
      "Accenture",
      "Amazon",
      "Bain & Company",
      "BCG",
      "Citi",
      "Deloitte Consulting",
      "EY / EY-Parthenon",
      "JPMorgan Chase",
      "McKinsey & Company",
      "Microsoft",
      "Morgan Stanley",
      "Wells Fargo",
      "Jefferies",
      "Moelis",
      "RBC",
      "Guggenheim"
    ],
    "big_tech_or_top_firm_signal": "Financial services 41% (median $175k); Consulting 28% (median $175k); Tech & Telecom 11% (median $133.7k). Overall average base $158,426; median $175,000; average signing $39,795. Finance & IB function 43%.",
    "sample_alumni_paths": [
      "Investment banking (69% of finance function)",
      "Consulting (29% function)",
      "Marketing (12%)",
      "Northeast concentration 60%"
    ],
    "referral_network_notes": "Johnson career services + NYC finance pipeline. Facilitation % not extracted.",
    "difficulty_notes": "Finance-heavy relative to tech; strong Northeast placement.",
    "sources": [
      {
        "title": "Cornell Johnson – MBA Employment Data",
        "url": "https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/careers/employment-data/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Johnson Class of 2025 employment-data page with industry/function/region tables.",
    "last_updated": "2026-10-20",
    "pathProgramId": "johnson-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "usc-mba": {
    "school": "University of Southern California – Marshall School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as Class of 2026 % on class-profile page this run",
    "full_time_placement": "Graduating Class of 2025 (class profile): 71% employed within 90 days of graduation. (Clear Admit Class of 2024 was 80% within 3 months — prior year; prefer 2025 profile figure.)",
    "notable_employers": [
      "Amazon",
      "Bain & Co.",
      "McKinsey & Company",
      "Microsoft",
      "JPMorgan Chase",
      "Adobe",
      "BlackRock",
      "Deloitte",
      "EY / EY-Parthenon",
      "Morgan Stanley",
      "Nike",
      "Visa",
      "The Walt Disney Company",
      "Capital One"
    ],
    "big_tech_or_top_firm_signal": "Class of 2025 profile: average salary $142,184; average signing bonus $35,896. Industry avg starting salaries listed: Consulting $167,211; Financial Services $148,744; Technology $136,056; Entertainment $117,667. Industry mix % for 2025 not fully tabulated on profile page.",
    "sample_alumni_paths": [
      "Consulting",
      "Finance",
      "Tech",
      "Entertainment/media (Marshall SoCal specialty)"
    ],
    "referral_network_notes": "Trojan Network / Graduate Career Services; historical school-facilitated ~64–66% in prior reports.",
    "difficulty_notes": "2025 90-day employment rate (71%) softer than Marshall’s own 2022–24 trend — soft market caveat.",
    "sources": [
      {
        "title": "USC Marshall Full-Time MBA Class Profile (incl. Class of 2025 outcomes)",
        "url": "https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/class-profile",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Marshall class profile publishes Class of 2025 employment % and compensation; employer list on same page.",
    "last_updated": "2026-10-20",
    "pathProgramId": "marshall-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "unc-mba": {
    "school": "University of North Carolina – Kenan-Flagler Business School",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "99.6% of Class of 2025 accepted an internship offer in 2024; 99.1% of Class of 2026 accepted an internship offer in 2025.",
    "full_time_placement": "Class of 2025: 90% job accepts at 6 months; 88% job offers and accepts at 3 months (all students framing on one-pager). US work auth 91% / without 81% (3-month framing on sheet).",
    "notable_employers": "Industry mix published; named multi-hire list not on one-pager extract — see school employment facts page for hiring partners.",
    "big_tech_or_top_firm_signal": "Mean base $139,637; mean signing $32,558. Industries: Financial Services 25% (median $175k), Consulting 18% ($175k), Healthcare 14% ($132k), Technology 13% ($142k). Finance function 40%. South region 42% of accepts.",
    "sample_alumni_paths": [
      "Financial services / IB",
      "Consulting",
      "Healthcare",
      "Technology",
      "General management"
    ],
    "referral_network_notes": "Kenan-Flagler Career & Leadership; facilitation % not on one-pager.",
    "difficulty_notes": "Mean base below many M7 peers; strong South/healthcare/finance mix.",
    "sources": [
      {
        "title": "Kenan-Flagler FT MBA Employment Statistics One-Pager (Class of 2025) PDF",
        "url": "https://www.kenan-flagler.unc.edu/wp-content/uploads/2025/12/FTMBA26-032-Employment-Statistics-One-Pager_FNL.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Kenan-Flagler – Employment Facts & Figures",
        "url": "https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/career-leadership/employment-facts-figures/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Kenan-Flagler Class of 2025 employment one-pager (CSEA-compliant note).",
    "last_updated": "2026-10-20",
    "pathProgramId": "kenan-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "emory-mba": {
    "school": "Emory University – Goizueta Business School",
    "program": "Two-Year Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "See Goizueta employment report materials for interns; FT stats primary this card.",
    "full_time_placement": "Class of 2025 Two-Year: 93 seeking / 122 graduates. Offers by graduation 72.0%; by 3 months cumulative 84.9% (72.0%+12.9%). Accepts by graduation 67.7%; by 3 months ~81.7%. School narrative: 91% accepted offers within six months.",
    "notable_employers": [
      "Amazon",
      "Bain & Company",
      "McKinsey & Company",
      "Barclays",
      "EY Consulting",
      "JPMorgan Chase",
      "Google",
      "Goldman Sachs",
      "PwC",
      "Deloitte Consulting",
      "Analysis Group"
    ],
    "big_tech_or_top_firm_signal": "Consulting industry 40.8% (median $175k); Financial Services 21.1% (median $175k); Technology 9.2% (median ~$122k). Overall mean base $157,691; median $175,000; mean signing $29,005 (median $30k). Consulting function 52.6%.",
    "sample_alumni_paths": [
      "Consulting (dominant)",
      "Financial services",
      "Marketing/ops/general management"
    ],
    "referral_network_notes": "Graduate Career Management Center; school-structured recruiting noted in report.",
    "difficulty_notes": "Consulting-heavy Atlanta MBA; tech share smaller than West Coast peers.",
    "sources": [
      {
        "title": "Goizueta Two-Year MBA Employment Report PDF",
        "url": "https://goizueta.emory.edu/documents/FTMBAEmploymentReport.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Goizueta Two-Year MBA Employment Statistics PDF",
        "url": "https://goizueta.emory.edu/documents/FTMBAEmploymentStatistics.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Goizueta Class of 2025 employment report + statistics PDFs.",
    "last_updated": "2026-10-20",
    "pathProgramId": "goizueta-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "rice-mba": {
    "school": "Rice University – Jones Graduate School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single % this run",
    "full_time_placement": "Class of 2025 (CSEA tables): 122 seeking / 152 graduates. Offers by graduation 55.7%; by 3 months cumulative 72.1% (55.7%+16.4%). Accepts by graduation 54.9%; by 3 months ~71.3%.",
    "notable_employers": "Energy-heavy Houston network; detailed hiring list not fully extracted — industries include Consulting 24.1%, Energy 24.1%, Technology 16.1%, Financial Services 14.9%.",
    "big_tech_or_top_firm_signal": "Overall mean base $146,381; median $141,500. Consulting median $190k; Energy mean ~$133.5k; Technology median $137.5k; Financial Services median $172.5k.",
    "sample_alumni_paths": [
      "Energy / consulting dual strength",
      "Technology",
      "Financial services"
    ],
    "referral_network_notes": "Rice Business career services; Houston energy alumni density.",
    "difficulty_notes": "Lower 3-month offer rate than many peers; energy concentration distinctive.",
    "sources": [
      {
        "title": "Rice Business / Jones FT MBA Employment Outcomes Data (CSEA tables) PDF",
        "url": "https://cdn.uconnectlabs.com/wp-content/uploads/sites/99/2026/02/2025-FTMBA-Employment-Outcomes-Data.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CSEA employment outcomes tables for Rice Jones Class of 2025.",
    "last_updated": "2026-10-20",
    "pathProgramId": "rice-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "indiana-mba": {
    "school": "Indiana University – Kelley School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single % in viewbook extract",
    "full_time_placement": "Class of 2025: 92% 90-day job offer rate (official Kelley viewbook / employment statistics).",
    "notable_employers": [
      "Amazon",
      "McKinsey & Company",
      "Deloitte Consulting",
      "Microsoft",
      "JP Morgan Chase",
      "EY",
      "PwC",
      "Eli Lilly",
      "Johnson & Johnson",
      "Procter & Gamble",
      "Dell Technologies",
      "Amgen",
      "Barclays"
    ],
    "big_tech_or_top_firm_signal": "Technology industry 23% (median $134k); Consulting industry 16% (median $175k); Manufacturing 15%; Financial Services 14%. Function: Consulting 22% (median $175k). Mean starting compensation (salary + signing bonus) $163,279. Mean base salary alone: not separately printed in viewbook extract (unknown).",
    "sample_alumni_paths": [
      "Consulting",
      "Tech",
      "Marketing/sales",
      "Finance/accounting",
      "Midwest concentration ~50%"
    ],
    "referral_network_notes": "Large Kelley alumni network (viewbook cites 137,000+ Kelley alumni).",
    "difficulty_notes": "Strong corporate/CPG/manufacturing Midwest MBA; tech median below coastal peers.",
    "sources": [
      {
        "title": "Kelley Full-Time MBA Viewbook / Employment Statistics Class of 2025 PDF",
        "url": "https://kelley.iu.edu/doc/bloomington/full-time-mba/mba-viewbook.pdf",
        "access_date": "2026-10-20"
      },
      {
        "title": "Kelley – Statistics on MBA Graduates",
        "url": "https://kelley.iu.edu/programs/full-time-mba/careers/statistics.html",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Kelley Class of 2025 viewbook employment statistics (92% 90-day offers, industry/function medians).",
    "last_updated": "2026-10-20",
    "pathProgramId": "kelley-mba",
    "routeMismatch": false,
    "match": "same-route"
  }
};
export const unlinkedOutcomeCards = {
  "cmu-msml": {
    "school": "Carnegie Mellon University",
    "program": "MS in Machine Learning (MLD)",
    "degree": "MS",
    "internship_rate": "unknown (typical internship semesters=1.0 in SCS comparison; cohort % unknown)",
    "full_time_placement": "87% employed; 13% continued education — SCS comparison grads Aug/Dec 2024 & May 2025 (n=57).",
    "notable_employers": [
      "Meta",
      "Microsoft",
      "Apple",
      "Capital One",
      "Tesla"
    ],
    "big_tech_or_top_firm_signal": "Very high. Popular employers Meta/Microsoft/Apple/Tesla/Capital One. Median salary $160,000; avg $162,618 (17 salaries). Selectivity ~15.1% (106/700).",
    "sample_alumni_paths": [
      "Industry ML/SWE at Meta, Microsoft, Apple, Tesla",
      "PhD continuation at Princeton, CMU, Harvard, UT Austin (schools by popularity)"
    ],
    "referral_network_notes": "SCS/MLD alumni density in Big Tech ML orgs; formal referral ease unknown.",
    "difficulty_notes": "Selective (~15%); strong math/CS prerequisites; summer practicum required.",
    "sources": [
      {
        "title": "CMU MLD – Primary MS in Machine Learning",
        "url": "https://www.ml.cmu.edu/academics/primary-ms-machine-learning-masters.html",
        "access_date": "2026-10-20"
      },
      {
        "title": "SCS Master's Programs Comparison",
        "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
        "access_date": "2026-10-20"
      },
      {
        "title": "SCS MS Comparison Excel",
        "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official SCS comparison Excel: MSML employment %, employers, salaries.",
    "last_updated": "2026-10-20",
    "pathProgramId": "cmu-msml",
    "routeMismatch": true,
    "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS ML master's. Do not invent catalog_id.",
    "match": "different-route",
    "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS ML master's. Do not invent catalog_id."
  },
  "cmu-mcds": {
    "school": "Carnegie Mellon University",
    "program": "Master of Computational Data Science (MCDS)",
    "degree": "MS",
    "internship_rate": "unknown (typical internship semesters=1.0; cohort % unknown)",
    "full_time_placement": "99% employed — SCS comparison Aug/Dec 2024 & May 2025 grads (n=105).",
    "notable_employers": [
      "Databricks",
      "Apple",
      "Adobe",
      "Bloomberg",
      "Oracle",
      "JPMorgan Chase & Co."
    ],
    "big_tech_or_top_firm_signal": "High. Mix of data platforms, Big Tech, finance. Median $150,000; avg $145,767 (46 salaries). Selectivity ~12.7% (140/1099).",
    "sample_alumni_paths": [
      "Data/ML/software roles at Databricks, Apple, Adobe, Bloomberg, Oracle, JPMorgan"
    ],
    "referral_network_notes": "LTI/SCS alumni in data platforms; referral ease unknown quantitatively.",
    "difficulty_notes": "Selective professional program with capstone; competitive for top infra/ML seats.",
    "sources": [
      {
        "title": "SCS Master's Programs Comparison",
        "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
        "access_date": "2026-10-20"
      },
      {
        "title": "SCS MS Comparison Excel",
        "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
        "access_date": "2026-10-20"
      },
      {
        "title": "MCDS apply page",
        "url": "https://mcds.cs.cmu.edu/apply-mcds-program",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official SCS comparison Excel: MCDS employment %, employers, salaries.",
    "last_updated": "2026-10-20",
    "pathProgramId": "cmu-mcds",
    "routeMismatch": true,
    "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS/LTI MCDS. Do not invent catalog_id.",
    "match": "different-route",
    "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS/LTI MCDS. Do not invent catalog_id."
  },
  "cmu-msaii": {
    "school": "Carnegie Mellon University",
    "program": "MS in Artificial Intelligence and Innovation (MSAII)",
    "degree": "MS",
    "internship_rate": "unknown (typical internship semesters=1.0; cohort % unknown)",
    "full_time_placement": "100% employed (Grads EMPL %); ~2.7% continued education — SCS Master's comparison for Aug/Dec 2024 & May 2025 grads (n=37).",
    "notable_employers": [
      "BNY Mellon",
      "C3.ai",
      "Google",
      "LUCA.ai",
      "Oracle"
    ],
    "big_tech_or_top_firm_signal": "Solid. Popular employers include Google, C3.ai, Oracle, BNY Mellon. Median salary $139,000; average $136,933 (15 salaries). Selectivity ~7.7% (59/770).",
    "sample_alumni_paths": [
      "AI application / industry roles at Google, C3.ai, Oracle, BNY Mellon (popularity list)"
    ],
    "referral_network_notes": "SCS/LTI network; capstone + industry setting emphasized. Referral ease unknown.",
    "difficulty_notes": "Highly selective (~8%); 4-semester professional program with innovation/capstone focus.",
    "sources": [
      {
        "title": "SCS Master's Programs Comparison",
        "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
        "access_date": "2026-10-20"
      },
      {
        "title": "SCS MS Comparison Excel",
        "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
        "access_date": "2026-10-20"
      },
      {
        "title": "MSAII how to apply",
        "url": "https://msaii.cs.cmu.edu/how-apply",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official SCS comparison Excel provides MSAII employment %, employers, salaries.",
    "last_updated": "2026-10-20",
    "pathProgramId": "cmu-msaii",
    "routeMismatch": true,
    "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS/LTI AI+innovation master's. Do not invent catalog_id.",
    "match": "different-route",
    "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS/LTI AI+innovation master's. Do not invent catalog_id."
  }
};
export const outcomeAdjacentByCatalogId = {
  "gatech-cs": [
    {
      "school": "Georgia Institute of Technology",
      "program": "Online MS in Computer Science (OMSCS)",
      "degree": "MS (online)",
      "internship_rate": "unknown / not applicable for many working students",
      "full_time_placement": "Not traditional new-grad placement. 2022 OMSCS exit survey: 55% started new job since completing; 38% promoted; 48% higher salary; 95% worth investment; 96% would recommend; >80% career aid. 8% teaching CS; 7% transitioned to tech.",
      "notable_employers": "unknown (survey article did not publish employer list)",
      "big_tech_or_top_firm_signal": "Qualitative: mid-career advancement credential more than new-grad FAANG feeder. Big Tech %: unknown.",
      "sample_alumni_paths": [
        "Promotion in current workplace (38%)",
        "New job after completion (55%)",
        "Career switch into tech (7%)",
        "CS teaching (8%)"
      ],
      "referral_network_notes": "Very large alumni base (8,600+ alumni cited April 2023); online/global dynamics differ from campus.",
      "difficulty_notes": "More accessible admissions than campus MSCS; outcomes skewed to working professionals.",
      "sources": [
        {
          "title": "GT CoC – OMSCS alumni survey (2022 exit)",
          "url": "https://www.cc.gatech.edu/news/surveyed-alumni-nearly-unanimous-saying-omscs-program-worth-investment",
          "access_date": "2026-10-20"
        },
        {
          "title": "OMSCS program site",
          "url": "https://omscs.gatech.edu/",
          "access_date": "2026-10-20"
        }
      ],
      "confidence": "medium",
      "confidence_reason": "Official GT survey with advancement metrics; 2022 cohort; no employer list; distinct from campus MSCS.",
      "last_updated": "2026-10-20",
      "pathProgramId": "gatech-omscs",
      "routeMismatch": true,
      "routeMismatchNotes": "ONLINE MS; catalog gatech-cs typically campus MS — route_mismatch true. Do NOT reuse campus MSCS 84.3% placement as OMSCS outcome.",
      "match": "different-route",
      "matchCaveat": "ONLINE MS; catalog gatech-cs typically campus MS — route_mismatch true. Do NOT reuse campus MSCS 84.3% placement as OMSCS outcome."
    }
  ]
};
export const outcomeSpecialtyByCatalogId = {
  "cmu-mscs": [
    {
      "school": "Carnegie Mellon University",
      "program": "MS in Machine Learning (MLD)",
      "degree": "MS",
      "internship_rate": "unknown (typical internship semesters=1.0 in SCS comparison; cohort % unknown)",
      "full_time_placement": "87% employed; 13% continued education — SCS comparison grads Aug/Dec 2024 & May 2025 (n=57).",
      "notable_employers": [
        "Meta",
        "Microsoft",
        "Apple",
        "Capital One",
        "Tesla"
      ],
      "big_tech_or_top_firm_signal": "Very high. Popular employers Meta/Microsoft/Apple/Tesla/Capital One. Median salary $160,000; avg $162,618 (17 salaries). Selectivity ~15.1% (106/700).",
      "sample_alumni_paths": [
        "Industry ML/SWE at Meta, Microsoft, Apple, Tesla",
        "PhD continuation at Princeton, CMU, Harvard, UT Austin (schools by popularity)"
      ],
      "referral_network_notes": "SCS/MLD alumni density in Big Tech ML orgs; formal referral ease unknown.",
      "difficulty_notes": "Selective (~15%); strong math/CS prerequisites; summer practicum required.",
      "sources": [
        {
          "title": "CMU MLD – Primary MS in Machine Learning",
          "url": "https://www.ml.cmu.edu/academics/primary-ms-machine-learning-masters.html",
          "access_date": "2026-10-20"
        },
        {
          "title": "SCS Master's Programs Comparison",
          "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
          "access_date": "2026-10-20"
        },
        {
          "title": "SCS MS Comparison Excel",
          "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
          "access_date": "2026-10-20"
        }
      ],
      "confidence": "high",
      "confidence_reason": "Official SCS comparison Excel: MSML employment %, employers, salaries.",
      "last_updated": "2026-10-20",
      "pathProgramId": "cmu-msml",
      "routeMismatch": true,
      "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS ML master's. Do not invent catalog_id.",
      "match": "different-route",
      "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS ML master's. Do not invent catalog_id."
    },
    {
      "school": "Carnegie Mellon University",
      "program": "Master of Computational Data Science (MCDS)",
      "degree": "MS",
      "internship_rate": "unknown (typical internship semesters=1.0; cohort % unknown)",
      "full_time_placement": "99% employed — SCS comparison Aug/Dec 2024 & May 2025 grads (n=105).",
      "notable_employers": [
        "Databricks",
        "Apple",
        "Adobe",
        "Bloomberg",
        "Oracle",
        "JPMorgan Chase & Co."
      ],
      "big_tech_or_top_firm_signal": "High. Mix of data platforms, Big Tech, finance. Median $150,000; avg $145,767 (46 salaries). Selectivity ~12.7% (140/1099).",
      "sample_alumni_paths": [
        "Data/ML/software roles at Databricks, Apple, Adobe, Bloomberg, Oracle, JPMorgan"
      ],
      "referral_network_notes": "LTI/SCS alumni in data platforms; referral ease unknown quantitatively.",
      "difficulty_notes": "Selective professional program with capstone; competitive for top infra/ML seats.",
      "sources": [
        {
          "title": "SCS Master's Programs Comparison",
          "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
          "access_date": "2026-10-20"
        },
        {
          "title": "SCS MS Comparison Excel",
          "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
          "access_date": "2026-10-20"
        },
        {
          "title": "MCDS apply page",
          "url": "https://mcds.cs.cmu.edu/apply-mcds-program",
          "access_date": "2026-10-20"
        }
      ],
      "confidence": "high",
      "confidence_reason": "Official SCS comparison Excel: MCDS employment %, employers, salaries.",
      "last_updated": "2026-10-20",
      "pathProgramId": "cmu-mcds",
      "routeMismatch": true,
      "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS/LTI MCDS. Do not invent catalog_id.",
      "match": "different-route",
      "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS/LTI MCDS. Do not invent catalog_id."
    },
    {
      "school": "Carnegie Mellon University",
      "program": "MS in Artificial Intelligence and Innovation (MSAII)",
      "degree": "MS",
      "internship_rate": "unknown (typical internship semesters=1.0; cohort % unknown)",
      "full_time_placement": "100% employed (Grads EMPL %); ~2.7% continued education — SCS Master's comparison for Aug/Dec 2024 & May 2025 grads (n=37).",
      "notable_employers": [
        "BNY Mellon",
        "C3.ai",
        "Google",
        "LUCA.ai",
        "Oracle"
      ],
      "big_tech_or_top_firm_signal": "Solid. Popular employers include Google, C3.ai, Oracle, BNY Mellon. Median salary $139,000; average $136,933 (15 salaries). Selectivity ~7.7% (59/770).",
      "sample_alumni_paths": [
        "AI application / industry roles at Google, C3.ai, Oracle, BNY Mellon (popularity list)"
      ],
      "referral_network_notes": "SCS/LTI network; capstone + industry setting emphasized. Referral ease unknown.",
      "difficulty_notes": "Highly selective (~8%); 4-semester professional program with innovation/capstone focus.",
      "sources": [
        {
          "title": "SCS Master's Programs Comparison",
          "url": "https://www.cs.cmu.edu/education/masters/programs-comparison",
          "access_date": "2026-10-20"
        },
        {
          "title": "SCS MS Comparison Excel",
          "url": "https://www.cs.cmu.edu/education/masters/resources/scs-ms-program-comparison.xlsx",
          "access_date": "2026-10-20"
        },
        {
          "title": "MSAII how to apply",
          "url": "https://msaii.cs.cmu.edu/how-apply",
          "access_date": "2026-10-20"
        }
      ],
      "confidence": "high",
      "confidence_reason": "Official SCS comparison Excel provides MSAII employment %, employers, salaries.",
      "last_updated": "2026-10-20",
      "pathProgramId": "cmu-msaii",
      "routeMismatch": true,
      "routeMismatchNotes": "NOT in catalog rankedSchools[].id — specialized SCS/LTI AI+innovation master's. Do not invent catalog_id.",
      "match": "different-route",
      "matchCaveat": "NOT in catalog rankedSchools[].id — specialized SCS/LTI AI+innovation master's. Do not invent catalog_id."
    }
  ]
};
