// Generated from path/outcomes/batch-001.json through batch-005.json, msf-batch-001.json, msf-batch-002.json, msf-florida-msft.json, and id-map.json. Do not edit by hand.
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
  },
  {
    "batch_id": "batch-005",
    "agent": "path",
    "created": "2026-10-20",
    "access_date": "2026-10-20",
    "card_count": 11,
    "schema_version": "outcome-card-v2-catalog",
    "batches_001_to_004_unchanged": true,
    "upgrade_of_prior_batches": [],
    "upgrade_note": "No yale-cs/jhu-cs/wisconsin-cs upgrades — no new official FDS. No Columbia CS / UT Austin CS / UCLA MSCS MS FDS PDFs found.",
    "methodology": "Open public sources only. No fabricated numbers. Gaps labeled unknown.",
    "program_ids": [
      "northwestern-mscs",
      "umass-mscs",
      "uci-mcs",
      "ucsb-mscs",
      "unc-mscs",
      "carey-mba",
      "terry-mba",
      "scheller-mba",
      "olin-mba",
      "owen-mba",
      "jindal-mba"
    ],
    "catalog_ids": [
      "northwestern-cs",
      "umass-cs",
      "uci-cs",
      "ucsb-cs",
      "unc-cs",
      "asu-mba",
      "georgia-mba",
      "gatech-mba",
      "washu-mba",
      "vanderbilt-mba",
      "utd-mba"
    ],
    "required_targets_complete": true
  },
  {
    "batch_id": "msf-batch-001",
    "agent": "path",
    "created": "2026-10-26",
    "access_date": "2026-10-26",
    "card_count": 8,
    "schema_version": "outcome-card-v2-msf",
    "schema_notes": [
      "catalog_id currently equals program_id for MSF site scaffolding (not yet in rankedSchools catalog)",
      "degree_family: MSF | MFin | MSFE | MiF | MSCF | MFE | other",
      "top_finance_firm_signal replaces big_tech_or_top_firm_signal conceptually; big_tech field retained as alias pointing to finance signal",
      "Aligned to brief locked TFE 1–8 program_ids 2026-10-26"
    ],
    "methodology": "Open public sources only (official career PDFs/pages). No fabricated numbers; gaps=unknown. Never messaged alumni/recruiters. No unauthorized login scraping.",
    "program_ids": [
      "mit-msf",
      "princeton-msf",
      "washu-msf",
      "gsu-msf",
      "usc-msf",
      "brandeis-msf",
      "utah-msf",
      "texas-msf"
    ],
    "catalog_ids": [
      "mit-msf",
      "princeton-msf",
      "washu-msf",
      "gsu-msf",
      "usc-msf",
      "brandeis-msf",
      "utah-msf",
      "texas-msf"
    ],
    "excluded_this_batch": [
      "Quant/MFE/MSCF bucket → see outcomes/msf-quant-pending.json (pending_gm_lock)",
      "Michigan Ross (no MSF)",
      "NYU Stern classic FT pre-experience MSF",
      "Stanford GSB / Harvard Extension ALM / Wharton Jacobs MSQF"
    ],
    "last_updated": "2026-10-26"
  },
  {
    "batch_id": "msf-batch-002",
    "agent": "path",
    "created": "2026-10-26",
    "access_date": "2026-10-26",
    "card_count": 8,
    "schema_version": "outcome-card-v2-msf",
    "schema_notes": [
      "catalog_id currently equals program_id for MSF site scaffolding (not yet in rankedSchools catalog)",
      "degree_family: MSF | MFin | MSFE | MiF | MSCF | MFE | other",
      "top_finance_firm_signal replaces big_tech_or_top_firm_signal conceptually; big_tech field retained as alias pointing to finance signal",
      "Aligned to Collinn/gm LOCKED 2026-10-26: TFE Times 2026 #9–17 + chicago-booth-mif + columbia-msfe",
      "uci-msf program name confirmed as Merage Master of Finance (MFin); notredame-msf confirmed as Mendoza MSF; florida-msf is UF combination pathway"
    ],
    "methodology": "Open public sources only (official career PDFs/pages). No fabricated numbers; gaps=unknown. Never messaged alumni/recruiters. No unauthorized login scraping.",
    "program_ids": [
      "vanderbilt-msf",
      "rochester-msf",
      "florida-msf",
      "asu-msf",
      "uci-msf",
      "villanova-msf",
      "notredame-msf",
      "utd-msf"
    ],
    "catalog_ids": [
      "vanderbilt-msf",
      "rochester-msf",
      "florida-msf",
      "asu-msf",
      "uci-msf",
      "villanova-msf",
      "notredame-msf",
      "utd-msf"
    ],
    "excluded_this_batch": [
      "Quant/MFE/MSCF bucket (berkeley-mfe, cmu-mscf, baruch-mfe, columbia-ieor-mfe, gatech-qcf, chicago-finmath, nyu-courant, stanford-mcf) — separate track; columbia-msfe is on primary+adds slate",
      "TFE 1–8 already in msf-batch-001",
      "TFE 18–30 deferred to later batches",
      "bc-msf",
      "chicago-booth-mif",
      "columbia-msfe — deferred to later PRs"
    ],
    "last_updated": "2026-10-26",
    "florida_lock": "restricted_uf_combo_only_2026-10-26"
  },
  {
    "batch_id": "msf-florida-msft",
    "agent": "path",
    "created": "2026-10-26",
    "access_date": "2026-10-26",
    "card_count": 1,
    "schema_version": "outcome-card-v2-msf",
    "program_ids": [
      "florida-msft"
    ],
    "catalog_ids": [
      "florida-msft"
    ],
    "methodology": "Open public sources only. No fabricated numbers; gaps=unknown. Inaugural program — do not copy classic MSF placement onto FinTech id.",
    "lock_note": "Collinn 2026-10-26: ADD florida-msft to primary slate; keep florida-msf restricted.",
    "last_updated": "2026-10-26"
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
  },
  "northwestern-cs": {
    "school": "Northwestern University",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no MSCS-specific public first-destination %). Northwestern Career Advancement publishes filterable post-graduate master’s survey data for 2022–2025 cohorts (school/major filters) but CS-specific rates were not extractable without interactive dashboard access this run.",
    "notable_employers": "unknown as a published MSCS cohort list",
    "big_tech_or_top_firm_signal": "Qualitative: program states master’s graduates are recruited across nearly every industry. Common paths listed: software development/engineering, IT consulting, database/systems analysis, data analytics, financial risk analysis/trading; also PhD prep. Quantitative Big Tech % / salary: unknown.",
    "sample_alumni_paths": [
      "Software development / engineering",
      "IT consulting",
      "Data analytics",
      "Financial risk analysis / trading",
      "PhD studies"
    ],
    "referral_network_notes": "Engineering Career Development + Northwestern Career Advancement. Chicago industry access cited. Metrics unknown.",
    "difficulty_notes": "Terminal MS application distinct from PhD admission (catalog). Integrated classrooms with PhD students.",
    "sources": [
      {
        "title": "Northwestern McCormick – MS in Computer Science",
        "url": "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/masters/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Northwestern Career Advancement – Post Graduate Master’s Survey Data",
        "url": "https://www.northwestern.edu/careers/resources/post-graduate-masters-survey-data.html",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Official career-path descriptions only; no extractable MSCS placement/salary table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "northwestern-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "umass-cs": {
    "school": "University of Massachusetts Amherst",
    "program": "MS in Computer Science (CICS master’s outcomes)",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "CICS Master’s Class of 2025 (Aug’24/Dec’24/May’25 completers in report framing): 65% Working; 3% Continuing Education; 27% Looking; 1% Not Seeking; 4% Unknown. Knowledge rate ~96%. Outcomes still finalizing per NACE 6-month guideline note on report.",
    "notable_employers": "120+ unique employers (25 hired multiple) for master’s cohort — named logos on interactive report; static extract did not list full roster. Employer Dashboard linked from report.",
    "big_tech_or_top_firm_signal": "Typical salary range (25th–50th percentile of known compensation for ~20% of those working): $110,000–$129,000. Report notes reporting bias (reporters tend above average). Industry/role breakdowns on interactive report.",
    "sample_alumni_paths": [
      "Industry MS roles across 120+ employers (report)",
      "PhD at 6 institutions among continuing-ed subset"
    ],
    "referral_network_notes": "CICS Careers lifelong alumni support cited. Formal referral % unknown.",
    "difficulty_notes": "Large public CICS; 27% still looking at report snapshot is a meaningful soft-market signal vs elite private MS medians.",
    "sources": [
      {
        "title": "CICS Careers Destination Report 2025 (Master’s section)",
        "url": "https://cics-careers.github.io/destinations-report/2025.html",
        "access_date": "2026-10-20"
      },
      {
        "title": "UMass CICS – MS Computer Science (campus)",
        "url": "https://www.cics.umass.edu/academics/ms-computer-science-campus",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official CICS Destination Report with master’s rates/salary band; aggregate CICS MS not CS-only.",
    "last_updated": "2026-10-20",
    "pathProgramId": "umass-mscs",
    "routeMismatch": false,
    "routeMismatchNotes": "Official CICS Destination Report Class of 2025 covers Manning CICS Master’s in aggregate (326 MS students) — includes CS MS and other CICS master’s. Not CS-only; treat as college-level master’s signal.",
    "match": "same-route"
  },
  "uci-cs": {
    "school": "University of California, Irvine",
    "program": "Master of Computer Science (MCS) / related CS master’s",
    "degree": "MCS",
    "internship_rate": "unknown as cohort %; MCS emphasizes career coaching, employer events, capstone exposure to hiring managers",
    "full_time_placement": "Official MCS career page: since inception (2017), more than 700 MCS graduates; 87% accepted industry positions within 3 months of graduation (cumulative since 2017 — not a single graduating-class CSEA table).",
    "notable_employers": "unknown as a current published MCS cohort list this run; SoCal tech recruiting emphasized",
    "big_tech_or_top_firm_signal": "Qualitative SoCal tech pipeline. Cumulative 87% industry placement within 3 months. Current-year salary % / Big Tech share: unknown on page extract.",
    "sample_alumni_paths": [
      "Industry software / computing roles within 3 months (program claim)"
    ],
    "referral_network_notes": "MCS Career Development team + UCI career resources (job boards, fairs, salary databases). Metrics unknown.",
    "difficulty_notes": "15-month professional MCS; distinguish from research MS when applying (catalog).",
    "sources": [
      {
        "title": "UCI MCS – Career Development",
        "url": "https://mcs.ics.uci.edu/career-development-that-works-for-you/",
        "access_date": "2026-10-20"
      },
      {
        "title": "UCI ICS – Graduate program comparison",
        "url": "https://ics.uci.edu/academics/graduate-programs/program-comparison/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official cumulative MCS placement claim (87% since 2017); missing single-year FDS and salary table.",
    "last_updated": "2026-10-20",
    "pathProgramId": "uci-mcs",
    "routeMismatch": false,
    "routeMismatchNotes": "Catalog uci-cs covers research MS and professional MCS. Card primary evidence is professional MCS career page. Research MS outcomes may differ.",
    "match": "same-route"
  },
  "ucsb-cs": {
    "school": "University of California, Santa Barbara",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown (no MSCS-specific public first-destination % located). UCSB Graduate Division publishes filterable graduate statistics including employment outcomes, but CS MS-specific figures were not extracted this run.",
    "notable_employers": [
      "Google",
      "NVIDIA",
      "Meta",
      "LinkedIn",
      "AppFolio"
    ],
    "big_tech_or_top_firm_signal": "Qualitative alumni examples (department news / secondary summaries). Quantitative placement/salary: unknown.",
    "sample_alumni_paths": [
      "Industry SWE/ML at Big Tech and SoCal tech (alumni examples)",
      "Startup leadership (department alumni awards narrative)"
    ],
    "referral_network_notes": "UCSB CS + Graduate Division career resources. Metrics unknown.",
    "difficulty_notes": "Thesis / comprehensive exam / project plans (catalog). Selective public research MS.",
    "sources": [
      {
        "title": "UCSB CS – Master’s Degree",
        "url": "https://cs.ucsb.edu/education/graduate/masters-degree",
        "access_date": "2026-10-20"
      },
      {
        "title": "UCSB Graduate Statistics",
        "url": "https://www.graddiv.ucsb.edu/ucsb-graduate-statistics",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "No public MSCS cohort placement/salary table; alumni employers qualitative only.",
    "last_updated": "2026-10-20",
    "pathProgramId": "ucsb-mscs",
    "routeMismatch": false,
    "match": "same-route"
  },
  "unc-cs": {
    "school": "University of North Carolina at Chapel Hill",
    "program": "MS in Computer Science",
    "degree": "MS",
    "internship_rate": "unknown",
    "full_time_placement": "unknown for MS. Catalog/department narrative: most graduate students enter industry (startups, government labs, large R&D). Undergrad outcomes page must not be used as MS FDS.",
    "notable_employers": [
      "Amazon",
      "Cisco",
      "Disney",
      "Google",
      "Intel",
      "Microsoft",
      "Fidelity",
      "IBM",
      "Apple",
      "NASA",
      "Department of Defense"
    ],
    "big_tech_or_top_firm_signal": "Illustrative employers for UNC CS (mixed degree levels on public pages). MS-only Big Tech % / salary: unknown.",
    "sample_alumni_paths": [
      "Software engineering (majority path cited for CS grads broadly)",
      "Business-tech / consulting roles also represented"
    ],
    "referral_network_notes": "UNC CS career resources; Triangle employer density. Metrics unknown.",
    "difficulty_notes": "30-credit MS with program product, technical writing, comprehensive exam (catalog).",
    "sources": [
      {
        "title": "UNC CS – Graduation Outcomes & General Salary Information",
        "url": "https://cs.unc.edu/student-life/career/graduation-outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "UNC Catalog – Computer Science (GRAD)",
        "url": "https://catalog.unc.edu/graduate/schools-departments/computer-science/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "low",
    "confidence_reason": "No MS-specific FDS; undergrad-heavy public outcomes pages risk misattribution.",
    "last_updated": "2026-10-20",
    "pathProgramId": "unc-mscs",
    "routeMismatch": false,
    "routeMismatchNotes": "Department Graduation Outcomes page is primarily undergraduate-focused (~80% workforce / ~20% further education). MS-specific % unknown — do not attribute undergrad 92% Future Plans survey figures to MS.",
    "match": "same-route"
  },
  "asu-mba": {
    "school": "Arizona State University – W. P. Carey School of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "unknown as single Class of 2026 % on facts page this run",
    "full_time_placement": "Class of 2025 (official Facts & Figures): 72% employed at graduation; 90% employed 90 days after graduation. Experience page: 90% accepted a full-time offer within 90 days.",
    "notable_employers": [
      "Kearney",
      "P&G",
      "Amazon",
      "United Airlines",
      "BCG",
      "KPMG",
      "Dell",
      "Honeywell",
      "Northrop Grumman",
      "Applied Materials",
      "Mattel",
      "EY",
      "Microsoft"
    ],
    "big_tech_or_top_firm_signal": "Average base starting salary $121,116 (official). Poets&Quants school profile (reporting year 2025, citing school data): median base $123,000; avg signing $38,138; industry mix Technology 31%, Manufacturing 25%, Consulting 6%. Prefer official mean $121,116 / 90% @90 days.",
    "sample_alumni_paths": [
      "Technology",
      "Manufacturing",
      "Consulting/finance",
      "CPG"
    ],
    "referral_network_notes": "W. P. Carey Career Services Center; 140,000+ alumni cited on experience page.",
    "difficulty_notes": "Lower mean base than coastal M7; strong Phoenix/tech+manufacturing placement.",
    "sources": [
      {
        "title": "W. P. Carey – Facts and Figures (FT MBA Class of 2025)",
        "url": "https://www.wpcarey.asu.edu/about/facts-figures",
        "access_date": "2026-10-20"
      },
      {
        "title": "W. P. Carey – Full-time MBA Experience / career outcomes",
        "url": "https://www.wpcarey.asu.edu/mba-programs/full-time/experience",
        "access_date": "2026-10-20"
      },
      {
        "title": "Poets&Quants – W. P. Carey school profile (2025 career stats)",
        "url": "https://poetsandquants.com/school-profile/arizona-states-w-p-carey-school-of-business/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official ASU Facts & Figures Class of 2025 employment % and average salary.",
    "last_updated": "2026-10-20",
    "pathProgramId": "carey-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "georgia-mba": {
    "school": "University of Georgia – Terry College of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Internship participation % shown as graphics on career-services page — exact % not extractable as text this run (unknown as number).",
    "full_time_placement": "Official Class of 2025 career-services page: employment rate above 90% within 3 months (claims to be one of only three U.S. News Top 30 programs above 90%). Exact on-page %/compensation widgets rendered as images — numeric % beyond “above 90%” not scraped. Poets&Quants school profile (reporting year 2025): average base ~$121,000; average signing ~$29,000; Financial Services 24%, Consulting 12% (secondary).",
    "notable_employers": [
      "Amazon.com",
      "Bain & Company",
      "BCG",
      "McKinsey & Company",
      "Deloitte",
      "EY Parthenon",
      "JPMorgan Chase",
      "Microsoft",
      "Capital One",
      "Delta Air Lines",
      "Home Depot",
      "UPS",
      "Walmart",
      "Bank of America",
      "AT&T",
      "PayPal"
    ],
    "big_tech_or_top_firm_signal": "Official exact average total compensation figure not extractable from graphics. P&Q 2025 secondary: ~$121k avg base. Strong Southeast corporate recruiting from employer list.",
    "sample_alumni_paths": [
      "Consulting",
      "Financial services",
      "Operations/corporate Southeast roles"
    ],
    "referral_network_notes": "FTMBA/MSBA Career Management Center cites ~1:10 staff-to-student ratio. Facilitation % unknown.",
    "difficulty_notes": "Value-oriented Top 30 public MBA; confirm latest PDF when school publishes extractable Class of 2025 tables.",
    "sources": [
      {
        "title": "Terry Full-Time MBA Career Services (Class of 2025 stats + employers)",
        "url": "https://www.terry.uga.edu/mba/fulltime/career-services/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Poets&Quants – Terry school profile career stats",
        "url": "https://poetsandquants.com/school-profile/university-georgia-terry-college-business/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official >90% @3 months claim + employer list; exact salary/% graphics not text-extractable; P&Q fills compensation secondarily.",
    "last_updated": "2026-10-20",
    "pathProgramId": "terry-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "gatech-mba": {
    "school": "Georgia Institute of Technology – Scheller College of Business",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "See Scheller career-development / summer internships pages; single seeker % not extracted this run",
    "full_time_placement": "Official Scheller Full-time MBA Career Development page: MBA Class of 2026 — 91% employment rate 3 months post-graduation. (Class of 2025 detailed report also published on Issuu Dec 2025; Clear Admit cites Class of 2024 at 88.4% / avg $146,260 as prior-year reference.)",
    "notable_employers": [
      "Amazon",
      "Bain & Company",
      "BCG",
      "McKinsey",
      "Microsoft",
      "NVIDIA",
      "Oracle",
      "EY-Parthenon",
      "PwC",
      "IBM",
      "Delta Air Lines",
      "ExxonMobil",
      "Toyota",
      "UPS",
      "Workday",
      "Bank of America"
    ],
    "big_tech_or_top_firm_signal": "Official page: Class of 2026 average starting salary $140,000. Tech/consulting/Atlanta corporate mix from hiring list.",
    "sample_alumni_paths": [
      "Consulting",
      "Tech",
      "Finance",
      "Operations / manufacturing Atlanta pipeline"
    ],
    "referral_network_notes": "Jones MBA Career Center (page cites top-five world career-services rankings historically). Facilitation % not on overview extract.",
    "difficulty_notes": "STEM/tech brand MBA; Class of 2026 figures are the latest on official career page as of access date.",
    "sources": [
      {
        "title": "Scheller – Full-time MBA Career Development",
        "url": "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/career-development/index.html",
        "access_date": "2026-10-20"
      },
      {
        "title": "Scheller Issuu – FT MBA Employment Report Class of 2025",
        "url": "https://issuu.com/gatechbiz/docs/full-time_mba_employment_report_class_of_2025_",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Scheller career page Class of 2026 salary and 3-month employment rate.",
    "last_updated": "2026-10-20",
    "pathProgramId": "scheller-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "washu-mba": {
    "school": "Washington University in St. Louis – Olin Business School",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Median monthly internship salary $8,200 (career prospects page). Internship conversion: 39% of job offers.",
    "full_time_placement": "Official career prospects page: 81% employment rate three months after graduation. Latest Full-Time MBA Employment Report PDF linked (image-heavy; page headlines used).",
    "notable_employers": "Representative firms cited in career materials (e.g., Starbucks among examples on page). Full employer roster in employment report PDF.",
    "big_tech_or_top_firm_signal": "Median base salary $130,000. Industry mix on page: Technology 29%, Consulting 24%, Manufacturing 11%, Financial/Insurance 8%, CPG 6%, Healthcare 5%. Function: Consulting 37%, Marketing 21%, Finance 13%.",
    "sample_alumni_paths": [
      "Consulting (37% function)",
      "Marketing",
      "Technology industry (29%)",
      "Finance"
    ],
    "referral_network_notes": "Individualized career coaching emphasized; 39% offers from internship conversion.",
    "difficulty_notes": "Midwest MBA with consulting+tech mix; confirm latest PDF tables when text-extractable.",
    "sources": [
      {
        "title": "WashU Olin – Full-Time MBA Career Prospects",
        "url": "https://olin.washu.edu/programs/mbas/full-time-mba/career-prospects.php",
        "access_date": "2026-10-20"
      },
      {
        "title": "Olin Full-Time MBA Employment Report PDF",
        "url": "https://olin.washu.edu/docs/programs/employment/mba-employment-report.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Olin career prospects headlines + industry/function mix for recent FT MBA cohort.",
    "last_updated": "2026-10-20",
    "pathProgramId": "olin-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "vanderbilt-mba": {
    "school": "Vanderbilt University – Owen Graduate School of Management",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "Class of 2026: 99% of students who sought an internship accepted an offer during first year.",
    "full_time_placement": "Class of 2025 (official outcomes page): 87% of full-time offers within 90 days of graduation. Poets&Quants (citing school): first offer by graduation 78%; accepted by 3 months 86%. 156 companies hired Class of 2025 FT + Class of 2026 interns.",
    "notable_employers": [
      "Amazon (12 hires)",
      "Deloitte Consulting (7)",
      "Highspring Consulting (5)",
      "Wells Fargo CIB (3)",
      "Boston Consulting Group (3)",
      "EY (3)",
      "EY-Parthenon (3)",
      "UnitedHealth Group (3)"
    ],
    "big_tech_or_top_firm_signal": "Average base starting salary $148K+ (page); P&Q: avg base $148,962 / median $142,800; avg signing $36,065. Industry: Consulting 29%, Financial Services 21%, Healthcare 16%, Technology 13%. Function: Consulting 34%, Finance/Accounting 22%.",
    "sample_alumni_paths": [
      "Consulting",
      "Finance/IB",
      "Healthcare",
      "Tech",
      "Nashville metro concentration (35 hires)"
    ],
    "referral_network_notes": "Career Management Center; strong Nashville + Southeast placement.",
    "difficulty_notes": "Healthcare+consulting strength; Amazon top FT hirer (12).",
    "sources": [
      {
        "title": "Vanderbilt Owen – MBA Career Outcomes",
        "url": "https://business.vanderbilt.edu/mba/outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "Owen MBA Employment Report 2025 (Issuu)",
        "url": "https://issuu.com/vanderbiltowen/docs/vanderbilt_mba_employment_report_2025",
        "access_date": "2026-10-20"
      },
      {
        "title": "Poets&Quants – Owen school profile 2025 career stats",
        "url": "https://poetsandquants.com/school-profile/vanderbilt-universitys-owen-school-of-management/",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Owen outcomes page with Class of 2025 offer timing, salary, employers, industry/function.",
    "last_updated": "2026-10-20",
    "pathProgramId": "owen-mba",
    "routeMismatch": false,
    "match": "same-route"
  },
  "utd-mba": {
    "school": "University of Texas at Dallas – Naveen Jindal School of Management",
    "program": "Full-Time MBA",
    "degree": "MBA",
    "internship_rate": "96% internship secured by 2023–24 Full-Time cohort (career-outcomes page). Full-Time students complete required internships.",
    "full_time_placement": "Official MBA career-outcomes page: 96% placement rate within 3 months (Full-Time framing on page). Exact seeker denominator not tabulated on marketing page.",
    "notable_employers": "Dallas–Fort Worth corporate network; HireJSOM board. School-wide Jobs Data Report lists many IT/consulting employers (Amazon, Cisco, etc.) — not FT-MBA-exclusive.",
    "big_tech_or_top_firm_signal": "Official page: $140,175 average base salary + bonus (2024–2025 Full-Time). Mean base alone / median: unknown on page. Do not use $83.9k school-wide Jobs Data average as MBA salary.",
    "sample_alumni_paths": [
      "Industry pivot via Consulting Immersion / practicums",
      "DFW corporate and tech roles"
    ],
    "referral_network_notes": "JSOM 360° Career Ecosystem; alumni network emphasized. Facilitation % unknown.",
    "difficulty_notes": "Strong value / DFW ROI positioning; verify CSEA PDF when published separately from school-wide jobs report.",
    "sources": [
      {
        "title": "UT Dallas MBA – Career Outcomes",
        "url": "https://mba.utdallas.edu/career-outcomes/",
        "access_date": "2026-10-20"
      },
      {
        "title": "JSOM Jobs Data Report Spring 2025 PDF (school-wide — not FT-MBA-only)",
        "url": "https://bpb-us-e2.wpmucdn.com/sites.utdallas.edu/dist/a/1105/files/2026/01/Jobs-Data-Report-Spring-2025.pdf",
        "access_date": "2026-10-20"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official FT MBA marketing outcomes ($140,175 base+bonus, 96% @3mo) without full CSEA seeker tables; school-wide PDF excluded from MBA salary.",
    "last_updated": "2026-10-20",
    "pathProgramId": "jindal-mba",
    "routeMismatch": false,
    "routeMismatchNotes": "Prefer MBA career-outcomes page for Full-Time MBA. JSOM Spring 2025 Jobs Data Report (431 graduates) is school-wide placement — avg base $83.9k is NOT FT-MBA-specific; do not attribute to Full-Time MBA.",
    "match": "same-route"
  },
  "mit-msf": {
    "school": "Massachusetts Institute of Technology",
    "program": "MIT Sloan Master of Finance (MFin)",
    "degree": "MFin",
    "degree_family": "MFin",
    "schedule_note": "Summer start (12-month and 18-month formats); not a standard autumn-only intake.",
    "internship_rate": "98.9% of internship-seeking 18-month students (graduating Feb 2026) received a summer 2025 internship offer; 97.9% accepted (n seeking ≈94 of 103 enrolled in that format).",
    "full_time_placement": "97.1% of Class of 2025 seekers received an offer within 6 months; 94.2% accepted within 6 months (reporting rate 100%; sought employment 104/117 = 88.9%).",
    "full_time_placement_notes": "Official MIT Sloan CDO 2025 MFin Employment Report (Feb 2025 18-month + May 2025 12-month). Mean base $122,858; median base $125,000; mean signing bonus $29,183; median signing $25,000. Nearly 85% accepted Finance industry roles; >5% Technology/AI. Functions: Quant Research/Data Science 26.8%, IBD/Transactions Advisory 19.6%, Quant Trading Research/Sales 17.5%. Class profile International 89%.",
    "notable_employers": [
      "Morgan Stanley (8 FT hires Class of 2025 highlight)",
      "JP Morgan Chase & Co. (5)",
      "Squarepoint Ops (4)",
      "Goldman Sachs (3)",
      "BNP Paribas (3)",
      "Qube Research & Technologies (3)",
      "Trexquant Investment (3)",
      "Boston Consulting Group (3)",
      "Bank of America",
      "Barclays",
      "Deutsche Bank",
      "Citadel",
      "BlackRock",
      "McKinsey & Company"
    ],
    "notable_employers_notes": "Highlight multi-hire list from official 2025 report; full employer roster on report p.8 includes AQR, Brevan Howard, Capula, Citi, DRW, Optiver, Point72, UBS, Verition, etc.",
    "top_finance_firm_signal": "Very high. Official multi-hire bulge/elite quant: MS, JPM, GS, Squarepoint, QRT, Trexquant, Citadel*, BlackRock*, Optiver*. IBD + quant research/trading dominate functions.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal (MSF schema v2 rename).",
    "sample_alumni_paths": [
      "Quantitative Research / Data Science associate roles",
      "Investment Banking / Transactions Advisory analyst",
      "Quantitative Trading – Research/Sales",
      "Private Equity / Venture Capital (~7.2% of Class of 2025 functions)",
      "Portfolio Management / Fundamental Research"
    ],
    "referral_network_notes": "Sloan CDO + MFin alumni; Action Learning Labs; dense NYC/HK/London placements. 47.2% of Feb 2025 graduates who accepted FT rejoined summer internship employer. Formal cold-outreach ease: unknown.",
    "difficulty_notes": "Highly selective (QuantNet cites ~8.3% acceptance for recent cycle — secondary). International-heavy cohort (~89%). Strong brand does not remove interview bars for quant/IB.",
    "intl_student_notes": "STEM-designated MFin historically; Class of 2025 profile 89% international / 38 countries. Confirm current STEM CIP with school for Fall 2027 OPT planning.",
    "sources": [
      {
        "title": "2025 Master of Finance Employment Report (MIT Sloan CDO PDF)",
        "url": "https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2026/02/2025-MFin-Employment-Report.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "MIT Sloan MFin – Meet the Class / employment highlights",
        "url": "https://mitsloan.mit.edu/mfin/meet-class",
        "access_date": "2026-10-26"
      },
      {
        "title": "MIT Sloan CDO – Employment Reports hub",
        "url": "https://cdo.mit.edu/employment-reports/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CSEA-conformant MFin PDF with 100% reporting rate, offer/accept timing, salaries, functions, and named multi-hire employers.",
    "last_updated": "2026-10-26",
    "pathProgramId": "mit-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "princeton-msf": {
    "school": "Princeton University",
    "program": "Master in Finance (Bendheim Center for Finance)",
    "degree": "MFin",
    "degree_family": "MFin",
    "internship_rate": "Program states regular ~100% internship placement record; Class of 2025/2026 internship employer lists published in BCF annual report flipbooks (rate denominator not separately audited in a CSEA PDF located this run).",
    "full_time_placement": "BCF recruiting page: regularly achieves ~100% placement for full-time and internships. BCF 2024 annual report text: 100% of 2024 graduates hired in finance industry positions. QuantNet 2026 secondary: employment at graduation 94% / after 3 months 97% (methodology differs from school narrative).",
    "full_time_placement_notes": "Small cohort (~40 of ~1,000 applicants per BCF). No MIT/CMU-style single CSEA PDF located; outcomes presented via BCF career page + annual report employer lists. Prefer school lists for employers; treat exact % with medium caution vs QuantNet.",
    "notable_employers": [
      "Two Sigma",
      "Jane Street",
      "Citadel / Citadel Securities",
      "AQR Capital Management",
      "Goldman Sachs",
      "JP Morgan",
      "Morgan Stanley",
      "Squarepoint Capital",
      "DRW",
      "IMC Trading",
      "BNP Paribas",
      "Balyasny Asset Management",
      "Millennium",
      "Five Rings",
      "Akuna"
    ],
    "notable_employers_notes": "Drawn from BCF annual report Careers Upon Graduation / Summer Internships lists (2024–2026 flipbook pages) and BCF recruiting page.",
    "top_finance_firm_signal": "Extremely high for HF/prop trading/quant research relative to class size. Dense elite buy-side and bulge names in recent graduate lists.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Quantitative Researcher / Quant Trader",
      "Equity Derivatives / Rates / Options trading",
      "Systematic strategies / portfolio implementation analyst",
      "IB / markets analyst at bulge brackets"
    ],
    "referral_network_notes": "Very small cohort + Career Speaker Series (AQR, Balyasny, Citadel, Cubist, DRW, Squarepoint, etc.) + corporate partners. High touch recruiting; formal referral metrics unknown.",
    "difficulty_notes": "~40 seats / ~1,000 applicants (BCF). Intense quant bar; STEM/intl angle strong but ultra-selective.",
    "intl_student_notes": "Historically international-heavy elite MFin; confirm STEM designation and Fall 2027 visa timing with BCF.",
    "sources": [
      {
        "title": "Princeton BCF – Recruiting, Career Development, and Job Placements",
        "url": "https://bcf.princeton.edu/academic-programs/master-in-finance/recruiting-career-development-and-job-placements/",
        "access_date": "2026-10-26"
      },
      {
        "title": "BCF 2025 Annual Report flipbook – careers/internships page",
        "url": "https://bcf.princeton.edu/bcfar/2025/inc/html/14.html",
        "access_date": "2026-10-26"
      },
      {
        "title": "BCF 2024 Annual Report flipbook – 100% 2024 finance placement claim + employers",
        "url": "https://bcf.princeton.edu/bcfar/2024/inc/html/14.html",
        "access_date": "2026-10-26"
      },
      {
        "title": "IBKR Campus summary of QuantNet 2026 ranking (secondary placement %)",
        "url": "https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Strong official employer lists and BCF 100% narrative, but no single CSEA-style audited % PDF; QuantNet cites slightly lower timing rates.",
    "last_updated": "2026-10-26",
    "pathProgramId": "princeton-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "washu-msf": {
    "school": "Washington University in St. Louis",
    "program": "Olin MS in Finance (Corporate Finance / Quantitative / Wealth & Asset Management)",
    "degree": "MSF",
    "degree_family": "MSF",
    "internship_rate": "unknown (MSF-specific internship % not isolated in 2024 official SMP PDF located this run)",
    "full_time_placement": "Specialized Master's Class of 2024 (aggregate across SMP, not MSF-only): 82% received offer within 6 months; 81% accepted within 6 months (n seeking=192). MSF-specific latest official breakout: unknown in 2024 PDF.",
    "full_time_placement_notes": "2024 official Olin SMP Employment Report is aggregate (MACC/MSA/MSF tracks/MSSCM). Older 2022 SMP report (secondary archive) showed MSFC 67% / MSFQ 77% / MSFWAM 72% employment rates with low knowledge-rate caveats and COVID travel impacts — treat as historical, not current. Fall 2024 class profiles: MSFC n=65, MSFQ n=68, MSFWAM n=88.",
    "notable_employers": [
      "JPMorgan Chase",
      "Goldman Sachs",
      "BlackRock",
      "Deloitte",
      "Wells Fargo",
      "Edward Jones",
      "Bain Capital",
      "Bytedance",
      "Citic"
    ],
    "notable_employers_notes": "Alumni/recruiting examples listed on Olin Flex/MSF career marketing pages — not a Class of 2024 hire census.",
    "top_finance_firm_signal": "Moderate-to-strong brand signal with named bulge/AM recruiters on marketing lists; latest class multi-hire counts unknown from official 2024 PDF.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Financial Analyst / Senior Analyst",
      "Investments Analyst",
      "Risk Analyst",
      "Wealth / asset management roles (MSFWAM track)",
      "Quant/analytical finance roles (MSFQ track)"
    ],
    "referral_network_notes": "Olin Center for Career Engagement + large intl alumni base (esp. Asia). St. Louis regional + Asia placements historically important. Ease metrics: unknown.",
    "difficulty_notes": "Three STEM tracks with different lengths/tuition. Cohorts heavily international per secondary reporting — US work authorization and geographic salary mix affect averages.",
    "intl_student_notes": "STEM-designated tracks per Olin. Historically very high % international; confirm OPT/CPT pathways and Fall 2027 track choice (12 vs 18 months).",
    "sources": [
      {
        "title": "WashU Olin Specialized Master's Class of 2024 Employment Report PDF",
        "url": "https://olin.washu.edu/docs/programs/employment/smp-employment-report.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "WashU Olin – MS in Finance overview",
        "url": "https://olin.washu.edu/programs/specialized-masters/ms-in-finance/index.php",
        "access_date": "2026-10-26"
      },
      {
        "title": "WashU Olin Specialized Master's program profiles (Fall 2024 cohorts)",
        "url": "https://olin.washu.edu/programs/specialized-masters/index.php",
        "access_date": "2026-10-26"
      },
      {
        "title": "WashU Center for Career Engagement – outcomes dashboard (CSEA for SMP)",
        "url": "https://careers.washu.edu/channels/career-outcomes/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official 2024 PDF exists but is SMP-aggregate; MSF-track-specific current placement/salary unknown. Employer list marketing-grade.",
    "last_updated": "2026-10-26",
    "pathProgramId": "washu-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "gsu-msf": {
    "school": "Georgia State University",
    "program": "Robinson College of Business MS in Finance (Buckhead evening STEM)",
    "degree": "MS",
    "degree_family": "MSF",
    "format_note": "Evening classes at Buckhead Center (weeknights); 12- and 16-month options; designed to accommodate working professionals.",
    "internship_rate": "unknown (internships/CPT available via Fintech Academy & Career Advancement Center; cohort % not published as a single rate this run)",
    "full_time_placement": "Official program pages: 88% / 88.5% of 2023 graduates employed within 3 months of completing the program. 2024–2025 placement %: unknown from a full public CSEA PDF this run.",
    "full_time_placement_notes": "2025 Graduate Outcomes marketing stats emphasize salary change (88% average percent change; $31,500 average change; $136,000 average top-quartile salary) — these are compensation-change metrics for a working-professional-heavy program, not a classic first-destination seeker rate. Prefer 2023 3-month employment figure for placement.",
    "notable_employers": [
      "JPMorgan Chase",
      "Bank of America",
      "BlackRock",
      "Amazon",
      "Deloitte",
      "EY",
      "Truist",
      "Synovus",
      "Georgia-Pacific",
      "The Home Depot",
      "Delta Air Lines",
      "NCR",
      "Koch"
    ],
    "top_finance_firm_signal": "Moderate. Atlanta banking/fintech (Transaction Alley) + some national AM/IB names on examples list. Not a pure bulge/quant feeder like MIT/Princeton.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Corporate financial analyst / senior financial analyst",
      "Valuation analyst",
      "Fintech / financial data analytics roles",
      "Consulting / Big 4 related roles"
    ],
    "referral_network_notes": "Robinson alumni network claimed 70k+; Buckhead employer proximity; Georgia Fintech Academy. Formal referral ease: unknown.",
    "difficulty_notes": "Evening STEM format suits career-switchers already in Atlanta. GMAT/GRE not required. Less quant-bar than MFE/MSCF peers.",
    "intl_student_notes": "STEM-designated. International applicants have earlier hard deadlines. Evening format + CPT/OPT planning differs from full-time day MSF; confirm F-1 course-load rules.",
    "sources": [
      {
        "title": "GSU Robinson – Finance, M.S. program page (2023 placement + employers)",
        "url": "https://robinson.gsu.edu/program/finance-ms/",
        "access_date": "2026-10-26"
      },
      {
        "title": "GSU Find Programs – Finance M.S. (2025 outcomes + Buckhead format + Fall 2027 rounds)",
        "url": "https://findprograms.gsu.edu/program/finance-ms/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Robinson Career Advancement Center – Panthers on the Move",
        "url": "https://robinson.gsu.edu/cac/panthers-move-survey/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official pages state 2023 3-month employment ~88–88.5% and employer examples; no fresh Class of 2025 first-destination PDF with seeker denominators located.",
    "last_updated": "2026-10-26",
    "pathProgramId": "gsu-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "usc-msf": {
    "school": "University of Southern California",
    "program": "Marshall MS in Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "internship_rate": "unknown (not broken out on Fall 2025 class profile employment summary)",
    "full_time_placement": "87% employed among Fall 2024 graduates (official Marshall MS Finance class profile). Of hires: 78% North America / 22% international.",
    "full_time_placement_notes": "Fall 2025 entering class: n=126; International 76%; avg work experience 5 months. Current class-profile page does not publish MSF mean/median base salary for Fall 2024 (older secondary reports cited ~$78.8k for 2023 — not used as current official).",
    "notable_employers": [
      "JPMorganChase",
      "Bank of America",
      "UBS Investment Bank",
      "HSBC",
      "Bloomberg",
      "Nomura",
      "TD Securities",
      "EY",
      "McKinsey & Company",
      "Moody's Analytics",
      "SoFi",
      "Lincoln International",
      "Warner Bros. Discovery"
    ],
    "notable_employers_notes": "Representative employers from official Marshall MS Finance class profile (not ranked by hire count).",
    "top_finance_firm_signal": "Moderate-high. Mix of IB/markets (JPM, BofA, UBS, HSBC, Nomura), consulting (McKinsey, EY), fintech (SoFi), and LA corporate/PE boutique names.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Investment Banking Analyst / Corporate & Investment Banking Analyst",
      "Private Equity Analyst / Venture Capital Fellow",
      "M&A Associate / Deal Advisory valuation & modeling",
      "Equity / Investment Analyst",
      "Strategic Finance Analyst / Wealth Advisor Associate"
    ],
    "referral_network_notes": "Marshall Graduate Career Services; LA + Asia alumni density (76% intl entering class). Formal referral ease: unknown.",
    "difficulty_notes": "STEM MSF; competitive apps (1,259 apps → 126 seats Fall 2025). GMAT/GRE optional per recent program materials — verify for Fall 2027.",
    "intl_student_notes": "STEM; Fall 2025 class 76% international. Strong China/Asia representation in countries-of-origin list. OPT STEM extension relevant.",
    "sources": [
      {
        "title": "USC Marshall – MS Finance Class Profile (employment summary + employers)",
        "url": "https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/class-profile",
        "access_date": "2026-10-26"
      },
      {
        "title": "USC Marshall Graduate Recruitment Guide 2024-2025 (STEM note)",
        "url": "https://uscmarshallweb.s3-us-west-2.amazonaws.com/assets/uploads/s1/files/recruitment_guide_2024-2025_hs6mwdwg06.pdf",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Marshall class profile publishes Fall 2024 employed % + geography split + representative employers and titles; salary still unknown on that page.",
    "last_updated": "2026-10-26",
    "pathProgramId": "usc-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "brandeis-msf": {
    "school": "Brandeis University",
    "program": "International Business School Master of Science in Finance (MSF)",
    "degree": "MSF",
    "degree_family": "MSF",
    "internship_rate": "100% of seeking students secured an internship or field project (MSF 16-month graduates of 2025, official program page).",
    "full_time_placement": "91% of job seekers secured employment or started their own business within six months of graduation (MSF 16-month Class of 2025).",
    "full_time_placement_notes": "Average U.S. salary and bonus $88,182; salaries ranging up to $106,000 based on industry and experience (official). Employment data page lists industry mix including Technology 15%, IB/Brokerage 15%, Consulting 10%, Big 4 9%.",
    "notable_employers": [
      "Fidelity Investments",
      "JPMorgan Chase & Co.",
      "State Street Corp.",
      "Santander Bank",
      "Deloitte"
    ],
    "notable_employers_notes": "Named alumni hiring companies on official MSF page; not a full hire-count census.",
    "top_finance_firm_signal": "Moderate. Boston-area AM/custody/banking (Fidelity, State Street, Santander, JPM) + Big 4/consulting. Less HF/prop density than Princeton/MIT.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Risk management",
      "Transfer pricing / valuation",
      "Corporate finance",
      "Asset management / investment management",
      "Financial analytics / FinTech concentration paths"
    ],
    "referral_network_notes": "IBS Career Strategies Center; Boston finance hub proximity; CFA/GARP/CAIA academic partnerships. Formal referral ease: unknown.",
    "difficulty_notes": "9-month (experienced) and 16-month options for Fall 2025+. STEM. Partial/full tuition scholarships considered for 100% of admits (per page).",
    "intl_student_notes": "STEM-designated; international student angle explicit on program marketing. Confirm 9 vs 16-month fit for CPT/internship requirement.",
    "sources": [
      {
        "title": "Brandeis IBS – Master of Science in Finance (2025 outcomes)",
        "url": "https://www.brandeis.edu/global/academics/msf/index.html",
        "access_date": "2026-10-26"
      },
      {
        "title": "Brandeis IBS – MSF career paths page (2025 outcomes restated)",
        "url": "https://www.brandeis.edu/global/careers/msf.html",
        "access_date": "2026-10-26"
      },
      {
        "title": "Brandeis IBS – MSF Employment Data (industries/functions)",
        "url": "https://www.brandeis.edu/global/text/msf-employment-data.html",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official program pages publish 2025 16-month internship 100%, 6-month placement 91%, and U.S. salary+bonus average with employer examples.",
    "last_updated": "2026-10-26",
    "pathProgramId": "brandeis-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "utah-msf": {
    "school": "University of Utah",
    "program": "David Eccles School of Business Master of Science in Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "internship_rate": "unknown",
    "full_time_placement": "88% placement rate reported on Eccles MSF one-pager / marketing materials (average starting salary $90,402 base + variable). Careers page interactive counters rendered as 0 in public fetch — treat one-pager figure as primary public claim pending full employment PDF.",
    "full_time_placement_notes": "Full CSEA-style Class of 2025 PDF not located this run. Older 2021 employment report (secondary archive) showed 93% acceptances by 6 months — historical only. LinkedIn school post cited $101,461 average (Jan 2025) — secondary, not used as primary.",
    "notable_employers": [
      "Goldman Sachs",
      "Morgan Stanley",
      "Zions Bancorporation",
      "Wells Fargo",
      "Citibank",
      "Snap Finance",
      "Carta",
      "WebBank",
      "Intermountain Healthcare",
      "L3Harris Technologies"
    ],
    "notable_employers_notes": "Top Hiring Partners list on official Eccles MSF careers page.",
    "top_finance_firm_signal": "Moderate. Named GS/MS plus strong Mountain West banks/fintech/corporate (Zions, WebBank, Snap Finance, Intermountain).",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Investment banking / markets analyst paths (via named partners)",
      "Corporate finance / FP&A in regional employers",
      "Fintech / banking analytics (Snap Finance, WebBank, Carta)"
    ],
    "referral_network_notes": "Dedicated MSF career coach; ConnectU; Salt Lake + national locations listed. Formal referral ease: unknown.",
    "difficulty_notes": "FT or PT; Fall or Spring start; ~30 credits; relatively accessible tuition vs coastal elites (~$39k estimated on one-pager — verify current).",
    "intl_student_notes": "STEM-designated (official careers page discusses CPT/OPT + STEM OPT). One-pager cited ~17% international — verify current class profile.",
    "sources": [
      {
        "title": "Eccles MSF – Careers / hiring partners / STEM OPT",
        "url": "https://eccles.utah.edu/programs/master-of-science-in-finance/careers/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Eccles MSF program home",
        "url": "https://eccles.utah.edu/programs/master-of-science-in-finance/",
        "access_date": "2026-10-26"
      },
      {
        "title": "University of Utah MSF one-pager (Issuu) – 88% placement / $90,402 avg starting",
        "url": "https://issuu.com/utahmba/docs/msf_-_one_pager",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official careers page lists employers and STEM notes, but numeric placement/salary on live page were broken (0); relying on school one-pager marketing figures without a full employment PDF.",
    "last_updated": "2026-10-26",
    "pathProgramId": "utah-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "texas-msf": {
    "school": "The University of Texas at Austin",
    "program": "McCombs Master of Science in Finance (MSF)",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "Summer start (Class of 2025 employment report / McCombs specialized masters calendar).",
    "internship_rate": "unknown as a single cohort %; report notes some internship conversions via McCombs (3 sourced from McCombs internships = 5.5% of offer sources among reporters).",
    "full_time_placement": "94.2% of seekers received and accepted an offer within 6 months of graduation (Class of 2025; n seeking=69 of 72). 59.4% by graduation.",
    "full_time_placement_notes": "Official McCombs MSF Class of 2025 Employment Report (CSEA Specialty Masters). Mean base $82,968; median $81,000; mean signing bonus $7,811. Financial Services 52% of acceptances. International students only 1% of entering Fall 2025 class profile — domestically oriented relative to peer MSFs. 75% of graduates accepted roles in Southwest (Houston/Austin/Dallas).",
    "notable_employers": [
      "Goldman Sachs",
      "JP Morgan",
      "Wells Fargo",
      "Dimensional Fund Advisors",
      "Deloitte",
      "EY",
      "Visa",
      "JLL"
    ],
    "notable_employers_notes": "Sample companies on McCombs MSF career outcomes web page (prior/recent years aggregate examples) plus Class of 2025 function mix emphasizing banking/corporate finance/consulting.",
    "top_finance_firm_signal": "Moderate-high for Texas/Southwest banking, corporate finance, valuation, and some IB (IB/S&T function mean base $105,000 among reporters). Fewer published elite HF/prop multi-hires than MIT/Princeton.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Investment Banking Analyst / Sales & Trading",
      "Commercial / Corporate Banking",
      "Corporate Finance / FP&A",
      "Business Valuation / consulting",
      "Investment Management / Research Analyst"
    ],
    "referral_network_notes": "43.6% of reported offer sources via McCombs corporate partners/alumni/staff/UT resources; 41.8% individual network. Strong Texas metro alumni density.",
    "difficulty_notes": "Competitive specialized masters; Class of 2025 n=72. Low intl share may reduce OPT-peer competition but also signals less intl-oriented recruiting culture.",
    "intl_student_notes": "Only 1% international in Class of 2025 profile — important Fall 2027 intl-applicant signal. Confirm STEM designation and summer-start visa timing.",
    "sources": [
      {
        "title": "McCombs MSF Class of 2025 Employment Report PDF",
        "url": "https://www.mccombs.utexas.edu/wp-content/uploads/2026/03/25-MSF-Employment-Report.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "McCombs MSF – Career Outcomes page",
        "url": "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/career-management/career-outcomes/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CSEA Specialty Masters PDF with seeker denominators, timing, salary, industry/function, geography, and offer sources.",
    "last_updated": "2026-10-26",
    "pathProgramId": "texas-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "vanderbilt-msf": {
    "school": "Vanderbilt University",
    "program": "Owen MS Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "9-month full-time in-person (Nashville); typical autumn-aligned accelerated MSF.",
    "internship_rate": "unknown (program markets IB Academy and career treks; Class of 2025 FT report does not publish a separate internship % this run)",
    "full_time_placement": "97% of Class of 2025 seekers received a full-time offer within 6 months; 94% accepted within 6 months (n seeking=70 of class size 84).",
    "full_time_placement_notes": "Official Owen MSF Class of 2025 outcomes page. Average base $94,144; average signing bonus $9,250. Functions: Investment Banking 46%, Investment Management 9%, PE/VC 7%, Advisory & Valuation 6%, Corporate Finance 5%, Equity Research 5%, Management Consulting 5%, Sales & Trading 5%. Top metros: New York 16, Nashville 12, Atlanta 5, Charlotte 5.",
    "notable_employers": [
      "Wells Fargo & Company (4)",
      "Cain Brothers (3)",
      "JPMorgan Chase & Co. (3)",
      "KPMG (3)",
      "Brookwood Associates (2)",
      "First Trust Capital Management (2)"
    ],
    "notable_employers_notes": "Top multi-hire table from official Class of 2025 outcomes page; news release notes >50 employers nationwide.",
    "top_finance_firm_signal": "High for traditional IB/markets MSF. Nearly half of Class of 2025 in investment banking; named bulge/MM multi-hires (Wells Fargo, JPM) plus boutique IB (Cain Brothers).",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal (MSF schema v2 rename).",
    "sample_alumni_paths": [
      "Investment Banking analyst (MSF IB Academy pathway)",
      "Investment management / research",
      "Private equity / venture capital",
      "Advisory & valuation",
      "Corporate finance / sales & trading"
    ],
    "referral_network_notes": "Official news: 37% of accepted offers via Owen-driven activities (alumni referrals, faculty, structured recruiting). Dedicated MSF career coach; Owen Finance Club; NYC/Dallas/Charlotte treks. Formal cold-outreach ease: unknown.",
    "difficulty_notes": "Accelerated 9-month; IB Academy for early-fall IB recruiting. Selective relative to regional MSFs; Class of 2025 avg undergrad GPA 3.8.",
    "intl_student_notes": "Class of 2025 profile: International 20% / Domestic 80% — domestically skewed vs MIT/USC-style intl-heavy MFins. Confirm STEM CIP and Fall 2027 OPT timing with Owen.",
    "sources": [
      {
        "title": "Vanderbilt Owen – MSF Career Outcomes (Class of 2025)",
        "url": "https://business.vanderbilt.edu/masters-in-finance/outcomes/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Vanderbilt MS Finance Class of 2025 Delivers Strong Employment Outcomes (news)",
        "url": "https://business.vanderbilt.edu/news/2026/01/29/vanderbilt-ms-finance-class-of-2025-delivers-strong-employment-outcomes/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Vanderbilt MS Finance Employment Report 2025 (Issuu)",
        "url": "https://issuu.com/vanderbiltowen/docs/vanderbilt_ms_finance_employment_report_2025",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Owen Class of 2025 outcomes page with seeker n, offer/accept @6mo, salary, functions, metros, and named multi-hire employers.",
    "last_updated": "2026-10-26",
    "pathProgramId": "vanderbilt-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "rochester-msf": {
    "school": "University of Rochester",
    "program": "Simon MS Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "Full-time MSF with optional internship track (~16 months) or non-internship track (~9 months); STEM-designated.",
    "internship_rate": "unknown (internship track available; MSF-specific internship % not published on careers page this run)",
    "full_time_placement": "MSF-specific Class of 2025 offer/accept %: unknown. Aggregate Full-Time MS Class of 2025: 73% of job-seeking MS graduates received employment offers within 6 months (CSEA; data as of April 1, 2026). MSF US compensation: $80,501 mean base+signing for graduates employed in the US (2025).",
    "full_time_placement_notes": "Simon careers page publishes MSF-specific US mean compensation but not MSF-only placement rate; Accountancy (91%) and Marketing Analytics (90%) get program-level offer rates while MSF does not in the same module. Fact sheet (updated Dec 2025): $84,323 mean base+signing US average 2022–2024. Geography of hired MS Class of 2025: North America 80.9%, Asia 17.3%.",
    "notable_employers": [
      "Citigroup Inc.",
      "Goldman Sachs",
      "Houlihan Lokey",
      "RBC Capital Markets",
      "Deloitte",
      "Ernst & Young LLP",
      "PwC",
      "Moody's Corporation",
      "Manning & Napier",
      "Bank of Beijing",
      "China Merchants Bank",
      "SHEIN",
      "Chobani, LLC",
      "Grant Thornton"
    ],
    "notable_employers_notes": "Sample hiring companies from official MSF fact sheet (not a Class of 2025 multi-hire census).",
    "top_finance_firm_signal": "Moderate. Named bulge/elite (GS, Citi, HL, RBC) appear on sample lists; Class of 2025 MSF multi-hire counts unknown. Career paths marketed: corporate finance, investment management, risk management.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Corporate finance analyst",
      "Investment management / financial analysis",
      "Risk management",
      "Investment banking (concentration path)",
      "FinTech / financial technology roles"
    ],
    "referral_network_notes": "Jay S. and Jeanne Benet Career Management Center; concentrations (IM/FA, Corporate FS & IB, FinTech). Formal referral ease: unknown.",
    "difficulty_notes": "Class of 2025: n=121; 15 countries of origin; avg age 23; avg GPA 3.3; ~50% direct from undergrad. Analytical Simon brand; STEM.",
    "intl_student_notes": "STEM-designated (up to 36 months OPT per school). Class of 2025 lists 15 countries of origin; exact intl % unknown on class profile. Aggregate MS hires show meaningful Asia placements (17.3%).",
    "sources": [
      {
        "title": "Simon – Full-Time MS Careers & Outcomes (CSEA; as of April 1, 2026)",
        "url": "https://simon.rochester.edu/programs/full-time-ms/careers-outcomes",
        "access_date": "2026-10-26"
      },
      {
        "title": "Simon MS in Finance fact sheet PDF (sample employers + STEM)",
        "url": "https://apply.simon.rochester.edu/apply/factsheet/msf.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "Simon MS in Finance Class Profile (Class of 2025)",
        "url": "https://simon.rochester.edu/programs/full-time-ms-in-finance/class-profile",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "medium",
    "confidence_reason": "Official CSEA page gives MSF US salary and aggregate MS 73% offer rate, but MSF-track-specific placement % and multi-hire census not isolated this run.",
    "last_updated": "2026-10-26",
    "pathProgramId": "rochester-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "florida-msf": {
    "school": "University of Florida",
    "program": "Warrington MSF",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "Primarily a combination bachelor's→MSF pathway for current UF undergraduates (graduate credits in years 3–4; junior summer internship). Not a classic standalone autumn open-to-all MSF.",
    "internship_rate": "100% of rising seniors placed in junior summer internship (program page claim). Class of 2024: 84% earned junior summer internship return offers (news).",
    "full_time_placement": "William R. Hough MSF: 100% job placement for 2024–2025 graduating cohort (official Warrington Class of 2024–2025 outcomes news, Mar 2026); average starting salary $102,813; average starting bonus $13,909. Class of 2024 news: 100% full-time placement; average salary $99,188. Program page long-run claim: 98% full-time analyst placement by graduation for >20 years.",
    "full_time_placement_notes": "Combination-degree cohort is overwhelmingly UF undergrad pipeline; placement lists dense with bulge/elite IB and PE (Evercore, Centerview, Blackstone, Lazard, Guggenheim, GS, JPM, etc.). Exact seeker denominator / CSEA PDF not located this run — school news states 100% placement.",
    "notable_employers": [
      "Evercore",
      "Centerview",
      "Blackstone",
      "Goldman Sachs",
      "JPMorgan / JPMorgan Private Bank",
      "Bank of America / BofA Private Bank",
      "Citi / Citi Private Bank",
      "Guggenheim Partners",
      "Lazard",
      "Houlihan Lokey",
      "Lincoln International",
      "Jefferies",
      "RBC Capital Markets",
      "Wells Fargo Securities",
      "Nomura",
      "McKinsey",
      "Bain & Company",
      "UBS"
    ],
    "notable_employers_notes": "Drawn from official Class of 2024 placement news and published Class of 2024–2026 individual placement tables on the MSF program page.",
    "top_finance_firm_signal": "Very high for a public MSF — dense elite IB/PE/markets names (Evercore, Centerview, Blackstone, Lazard, GS, Guggenheim) on recent placement lists.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Investment Banking Analyst",
      "Private Equity Analyst",
      "Private Banking / Wealth Management Analyst",
      "Equity Research / Global Markets Analyst",
      "Corporate finance / strategic consulting associate"
    ],
    "referral_network_notes": "Hough Program + HIREWarrington recruiting; junior internship→FT return pipeline is structural. Formal referral ease: unknown.",
    "difficulty_notes": "Applications sought from current UF undergraduates only (combination pathway). High bar (recent class avg GPA ~3.9; high SAT/ACT). Non-UF applicants: pathway limited. Pathway gate: external/intl N/A — outcomes reflect UF combo cohort only.",
    "intl_student_notes": "Program is UF-undergrad combination track — domestically skewed by design. Exact MSF intl % unknown; Warrington specialized master's overall intl share historically modest vs coastal MFins. Critical: Fall 2027 intl applicants generally cannot use this as a classic open MSF unless already enrolled at UF. RESTRICTED for external/intl: UF-undergrad combination MSF only (not an open external MSF). Collinn lock 2026-10-26 keep+annotate; FinTech MS researched under separate id when brief assigns.",
    "sources": [
      {
        "title": "UF Warrington – Class of 2024–2025 graduate outcomes (MSF 100% / $102,813)",
        "url": "https://warrington.ufl.edu/news/2024-2025-graduate-outcomes/",
        "access_date": "2026-10-26"
      },
      {
        "title": "MSF Class of 2024 secures 100% placement (employer list)",
        "url": "https://warrington.ufl.edu/news/msf-class-of-2024-secures-100-placement/",
        "access_date": "2026-10-26"
      },
      {
        "title": "UF Warrington – Master's in Finance program page (combination pathway + placements)",
        "url": "https://warrington.ufl.edu/graduate/masters-finance/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Warrington news + program page publish 100% placement, salaries, internship return %, and named employer/placement lists; caveat is combination-degree (not open standalone MSF).",
    "last_updated": "2026-10-26",
    "restricted": true,
    "restricted_note": "UF undergrad combination pathway only; external/international applicants N/A (Collinn lock 2026-10-26). Keep on slate annotated; separate FinTech MS id forthcoming from brief.",
    "pathProgramId": "florida-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "asu-msf": {
    "school": "Arizona State University",
    "program": "W. P. Carey MS Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "August start; 9–16 months (corporate finance vs optional analytical methods extended track).",
    "internship_rate": "unknown (Career Services + recruiting events marketed; MS-FIN-specific internship % not published this run)",
    "full_time_placement": "92% of MS-FIN Class of 2025 employed within 6 months of graduation; average base starting salary $67,490 (official W. P. Carey Facts & Figures and 2025–2026 Year in Review).",
    "full_time_placement_notes": "Prior year impact report: MS-Fin Class of 2024 80% accepted FT offers @6 months. Salary is notably below elite MFin peers — Phoenix/regional corporate finance mix likely. CFA Level I alignment / CFA University Affiliation Program.",
    "notable_employers": [
      "Bank of America",
      "Credit Suisse (historical hire example)",
      "Amazon",
      "BlackRock",
      "Northern Trust"
    ],
    "notable_employers_notes": "Employer examples listed on official MS-FIN program page — not a Class of 2025 hire census.",
    "top_finance_firm_signal": "Moderate. Named national AM/banking examples (BlackRock, BofA, Northern Trust) on marketing list; Class of 2025 multi-hire and IB density unknown. Phoenix finance/insurance job-growth market emphasized.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Corporate financial analyst / FP&A",
      "Risk management analyst",
      "Asset management / portfolio roles",
      "Investment banking (possible; density unknown)",
      "Consulting-related finance roles"
    ],
    "referral_network_notes": "W. P. Carey Career Services Center; 650+ partner orgs claimed school-wide; 140k+ alumni. Formal referral ease: unknown.",
    "difficulty_notes": "STEM; GMAT/GRE optional. Two tracks (corporate finance vs analytical methods). Less quant-bar than MFE peers.",
    "intl_student_notes": "STEM-designated (up to 36 months OPT). International priority/final rounds on admissions calendar. Exact Class of 2025 intl %: unknown this run.",
    "sources": [
      {
        "title": "ASU W. P. Carey – Facts and Figures (MS Finance Class of 2025 92%)",
        "url": "https://www.wpcarey.asu.edu/about/facts-figures",
        "access_date": "2026-10-26"
      },
      {
        "title": "W. P. Carey 2025–2026 Year in Review (MS-FIN 92% / $67,490)",
        "url": "https://wpcareymagazine.com/review/2025-2026-year-in-review/",
        "access_date": "2026-10-26"
      },
      {
        "title": "ASU W. P. Carey – MS Finance (MS-FIN) program page",
        "url": "https://wpcarey.asu.edu/masters-programs/finance",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official school Facts & Figures + Year in Review publish Class of 2025 MS-FIN 6-month employment % and average base; employer list remains marketing-grade.",
    "last_updated": "2026-10-26",
    "pathProgramId": "asu-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "uci-msf": {
    "school": "University of California, Irvine",
    "program": "Merage Master of Finance (MFin)",
    "degree": "MFin",
    "degree_family": "MSF",
    "schedule_note": "Full-time ~12-month (fall–winter–spring + summer session); Class of 2025 cohort in employment report graduated summer 2024.",
    "internship_rate": "unknown (MFin-specific internship % not isolated in 2025 annual employment report this run)",
    "full_time_placement": "91.4% of MFin Class of 2025 seekers employed within 6 months (64/70 seeking; official Merage 2025 Annual Employment Report, CSEA). Mean base $64,979; median $70,000 (n reporting salary=27 / 44.3% of hires). Financial services 42.6% of hires; Finance function 54.1%.",
    "full_time_placement_notes": "Class size 116; Permanent US work auth 29.1% / Non-permanent 70.7%. Knowledge rate 77%. Top multi-hires: State Street (4), Hyundai Capital America (2). Geography: North America 78.7% (West 75.4%), Asia 21.3%. Permanent-auth mean base $70,475 vs non-permanent $59,874.",
    "notable_employers": [
      "State Street (4)",
      "Hyundai Capital America (2)",
      "JPMorgan Chase and Co.",
      "Amazon",
      "Meta",
      "EY",
      "KPMG",
      "MassMutual",
      "Pathway Capital Management",
      "Avanath Capital Management",
      "ROTH MKM",
      "UCI Health Ventures"
    ],
    "notable_employers_notes": "From official 2025 MFin employer list / top-employer callouts in Merage employment report PDF.",
    "top_finance_firm_signal": "Moderate. Mix of asset servicing (State Street), regional/corporate finance, some bulge (JPM) and AM boutiques; not a dense elite IB/HF feeder like MIT/Princeton/Columbia MSFE.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Finance / financial analyst roles",
      "Asset / wealth management",
      "Risk management",
      "Real estate finance",
      "Corporate finance / venture associate"
    ],
    "referral_network_notes": "Merage School Career Center (Assess.Design.Propel.); alumni mock interviews/mentorship. Formal referral ease: unknown.",
    "difficulty_notes": "STEM-oriented Merage MFin; large intl share. Competitive SoCal market; salary outcomes materially below elite MFin peers.",
    "intl_student_notes": "Class of 2025: ~70.7% non-permanent US work authorization — heavily international. Asia placements ~21%. Confirm STEM CIP / OPT for Fall 2027.",
    "sources": [
      {
        "title": "Merage School 2025 Annual Employment Report PDF (MFin CSEA stats)",
        "url": "https://merage.uci.edu/_files/documents/career-center/Employment-Report_compiled_2025.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "Merage Master of Finance Career Impact",
        "url": "https://merage.uci.edu/programs/masters/master-finance/career-impact.html",
        "access_date": "2026-10-26"
      },
      {
        "title": "Merage MFin program overview",
        "url": "https://merage.uci.edu/programs/masters/master-finance/index.html",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official CSEA-conformant Merage 2025 employment PDF with MFin seeker n, 6-month employment %, salaries, industries, functions, geography, and employer list.",
    "last_updated": "2026-10-26",
    "pathProgramId": "uci-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "villanova-msf": {
    "school": "Villanova University",
    "program": "MS in Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "internship_rate": "unknown (not broken out in Class of 2025 outcomes summary located this run)",
    "full_time_placement": "91% of job-seeking May 2025 graduates secured an opportunity within 6 months (knowledge rate 97% = 33/34 May 2025 graduates). Average salary $87,024; average bonus $9,000.",
    "full_time_placement_notes": "Official VSB Issuu 'MSF Employment Outcomes Class of 2025' (published Apr 20, 2026); figures also summarized via MSFHQ citing that report. Disclaimer: employed includes FT/PT, entrepreneurship, fellowships, temp/contract, freelance, post-grad internships. Location skew: Greater Philadelphia 10, NY Metro 5, North Carolina 4.",
    "notable_employers": [
      "AllianceBernstein",
      "Bank of America",
      "BlackRock",
      "J.P. Morgan Private Bank",
      "Morgan Stanley",
      "Vanguard",
      "Wells Fargo",
      "T. Rowe Price",
      "Barings",
      "BTIG",
      "Hamilton Lane",
      "KeyBanc Capital Markets",
      "NatWest Markets",
      "PNC",
      "MetLife"
    ],
    "notable_employers_notes": "Sample employers from Class of 2025 outcomes summary (MSFHQ reprint of school materials).",
    "top_finance_firm_signal": "Moderate-high for Philly/NY AM and private bank pipeline (Vanguard, BlackRock, AB, JPM PB, MS, T. Rowe). Less bulge IB density than Vanderbilt/Florida lists.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Asset / wealth management analyst",
      "Private banking",
      "Corporate / markets analyst",
      "Investment management at AM giants"
    ],
    "referral_network_notes": "Villanova School of Business graduate career support; Philly–NY corridor alumni. Formal referral ease: unknown.",
    "difficulty_notes": "Class of 2025 profile (MSFHQ): cohort 45; 87% domestic / 13% international; avg GPA 3.47; avg age 23; heavily male (40/5).",
    "intl_student_notes": "Class of 2025 ~13% international — domestically skewed. Confirm STEM status and OPT pathway with VSB for Fall 2027.",
    "sources": [
      {
        "title": "Villanova School of Business – MSF Employment Outcomes Class of 2025 (Issuu)",
        "url": "https://issuu.com/villanovaschoolofbusiness/docs/msf_employment_outcomes_class_of_2025",
        "access_date": "2026-10-26"
      },
      {
        "title": "MSFHQ – Villanova MSF 2025 placements (cites school report)",
        "url": "https://msfhq.com/villanova-university-msf-2025-placement/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official VSB Issuu Class of 2025 employment outcomes with knowledge rate, 6-month opportunity %, salary/bonus, and employer sample; secondary MSFHQ used only to surface figures also attributed to that report.",
    "last_updated": "2026-10-26",
    "pathProgramId": "villanova-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "notredame-msf": {
    "school": "University of Notre Dame",
    "program": "Mendoza Master of Science in Finance (MSF)",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "June start (11-month / 38-credit STEM MSF) — summer start, not autumn-only.",
    "internship_rate": "unknown (accelerated summer-start format; internship % not published in 2025 employment report this run)",
    "full_time_placement": "100% of Class of 2025 job offers received by 6 months after graduation; 100% accepted by 6 months (official Mendoza 2025 MSF Employment Report). Mean base $85,000; median base $88,765; mean bonus $7,500; median bonus $7,231 (usable salary info 91.2%).",
    "full_time_placement_notes": "Industry: Financial Services 67.6%, Consulting 8.8%, Healthcare 8.8%, Real Estate 5.9%, Other 5.9%, CPG 2.9%. Function: Finance 79.4%, Consulting 11.8%, Other 8.8%. Regions: Midwest 41.2%, Northeast 23.5%, South 14.7%, Southwest/Mid-Atlantic 8.8% each, West 2.9%. Prior Class of 2024: 94% accepted @6mo; avg base ~$77k.",
    "notable_employers": [
      "Goldman Sachs",
      "Morgan Stanley",
      "Baird",
      "AllianceBernstein",
      "IMC Trading",
      "KPMG US",
      "Kaufman Hall",
      "Charles River Associates",
      "Ford Motor Company",
      "Optum",
      "GMO",
      "Maven Securities",
      "TIDAL",
      "Key Bank"
    ],
    "notable_employers_notes": "Featured/all-employer list from official 2025 MSF Employment Report PDF.",
    "top_finance_firm_signal": "Moderate-high. Named bulge (GS, MS), AM (AB, GMO), prop (IMC, Maven), and Midwest corporate/consulting mix. Strong Domers network more than pure NY IB feeder density.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Finance / financial analysis",
      "Financial consulting",
      "Corporate finance",
      "Private wealth management",
      "Trading / securities"
    ],
    "referral_network_notes": "Mendoza Career Success; ND alumni network claimed 144k+ / 250+ clubs. Formal referral ease: unknown.",
    "difficulty_notes": "Current class profile: 48 students; avg GPA 3.6; avg age 22; 25% women; 20 non-business majors; 34 undergrad institutions. Quant-heavy pivot MSF.",
    "intl_student_notes": "STEM-designated. Exact intl % unknown on public class profile (countries represented noted historically). International applicants urged to apply by Round 2 for visa timing. June start affects I-20/visa calendar.",
    "sources": [
      {
        "title": "Notre Dame Mendoza – 2025 MSF Employment Report PDF",
        "url": "https://content.mendoza.nd.edu/asset/cb554c03-56f7-4d36-a781-74969b5a536b/2025-MSF-Employment-Report.pdf",
        "access_date": "2026-10-26"
      },
      {
        "title": "Mendoza M.S. in Finance program page (June start + 2025 highlights)",
        "url": "https://mendoza.nd.edu/graduate-programs/finance-msf/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Mendoza Specialized Master's Employment Reports hub",
        "url": "https://mendoza-mscareers.nd.edu/about-us/employment-reports/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "high",
    "confidence_reason": "Official Mendoza 2025 MSF Employment Report PDF with 100% offer/accept @6mo, salaries, industry/function/region breakouts, and employer list.",
    "last_updated": "2026-10-26",
    "pathProgramId": "notredame-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "utd-msf": {
    "school": "University of Texas at Dallas",
    "program": "Jindal MS Finance",
    "degree": "MSF",
    "degree_family": "MSF",
    "schedule_note": "MS Finance Flex format (typical 12–24 months); STEM-designated. Confirm Flex vs any full-time day track for Fall 2027.",
    "internship_rate": "unknown (internships and project-based courses marketed; cohort % not published this run)",
    "full_time_placement": "unknown (no MSF-specific official placement % or CSEA first-destination PDF located this run)",
    "full_time_placement_notes": "Jindal MS Finance Flex careers page lists employer examples and role titles but does not publish Class of 2024/2025 seeker rates or mean/median base for the MSF cohort. University Career Center Jobs Data Report is school-wide, not MSF-breakout.",
    "notable_employers": [
      "Goldman Sachs",
      "JP Morgan Chase",
      "Bank of America",
      "Amazon",
      "Capital One",
      "Deloitte",
      "Ernst and Young",
      "KPMG",
      "Fidelity Investments",
      "Charles Schwab",
      "Houlihan Lokey",
      "CBRE",
      "Texas Instruments",
      "Fannie Mae",
      "State Farm"
    ],
    "notable_employers_notes": "Employers listed as having hired MS in Finance students on official Flex careers page — not a graduating-class hire census.",
    "top_finance_firm_signal": "Moderate (Dallas market). Named national banking/AM/consulting employers on examples list; placement density and IB vs corporate mix unknown without rates.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal.",
    "sample_alumni_paths": [
      "Financial Analyst / Senior Financial Analyst",
      "FP&A Analyst",
      "Credit / Risk / Treasury Analyst",
      "Investments Analyst",
      "Consultant / Associate tracks"
    ],
    "referral_network_notes": "Jindal Career Management Center; DFW employer proximity. Formal referral ease: unknown.",
    "difficulty_notes": "Flex/working-professional friendly format common; prior experience influences title/salary per school. Less elite-brand signal than Booth/Columbia/Vandy.",
    "intl_student_notes": "STEM-designated (up to 36 months OPT per school). Exact intl % and US placement for F-1 seekers: unknown this run.",
    "sources": [
      {
        "title": "UT Dallas Jindal – MS in Finance Flex Career Outcomes",
        "url": "https://fin.utdallas.edu/ms-finance-flex/career/",
        "access_date": "2026-10-26"
      },
      {
        "title": "UT Dallas – Master of Science in Finance fact sheet",
        "url": "https://academics.utdallas.edu/fact-sheets/jindal/master-of-science-in-finance/",
        "access_date": "2026-10-26"
      },
      {
        "title": "UT Dallas Career Center – Career Outcomes hub",
        "url": "https://career.utdallas.edu/career-resource-library/career-outcomes/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Official employer/role examples only; no MSF-specific Class of 2024/2025 placement %, salary, or seeker denominators located in open sources this run.",
    "last_updated": "2026-10-26",
    "pathProgramId": "utd-msf",
    "routeMismatch": false,
    "match": "same-route"
  },
  "florida-msft": {
    "school": "University of Florida",
    "program": "Warrington MS in Finance and Technology",
    "degree": "MS Finance and Technology",
    "degree_family": "other",
    "schedule_note": "Fall-only 1-year traditional track; first external class Fall 2027. Also offers UF-undergrad combination (4/5-yr) with combo first class Fall 2026 — intl slate should use traditional path.",
    "internship_rate": "unknown",
    "full_time_placement": "unknown",
    "full_time_placement_notes": "Inaugural traditional 1-year cohort starts Fall 2027 — no FinTech-program employment report exists yet. Do NOT substitute classic florida-msf (MS Finance combo) placement figures as this program's outcomes. Adjacent Warrington MS Finance (distinct restricted id florida-msf) publicly claims 100% placement Class of 2024–25 with avg start ~$102.8k — related college signal only, not transferable to florida-msft.",
    "notable_employers": [],
    "notable_employers_notes": "No florida-msft graduate employer list yet. Program marketing cites industry sectors (banks, fintech startups, investment firms, neobanks, consulting) and Florida fintech ecosystem (e.g. SoFi, Mastercard, MoonPay ops; FIS HQ) without program-specific hire counts.",
    "top_finance_firm_signal": "Unknown for this degree. Curriculum aims fintech/AI/blockchain/DeFi + core finance; college has strong classic MSF IB/PE pipeline, but that pipeline is not evidenced for FinTech MS yet.",
    "big_tech_or_top_firm_signal": "See top_finance_firm_signal (MSF schema v2 rename).",
    "sample_alumni_paths": [
      "unknown (no graduates from traditional track yet)",
      "Program-listed target titles (marketing, not outcomes): financial analyst, quantitative analyst, data analyst, blockchain developer, compliance/risk analyst"
    ],
    "referral_network_notes": "Warrington Business Career Services coaching + recruitment events + alumni network claimed on program page. Fintech Research Center 12–16 week industry project. Florida fintech hub narrative. Strength of FinTech-specific employer referrals unproven until first class places.",
    "difficulty_notes": "New program — recruiting brand thinner than classic UF MSF. STEM/CIP unstated on official FinTech pages (OPT STEM eligibility unclear). 3-year bachelor's from India/Australia/Bangladesh/Canada(excl Quebec)/Nepal/Pakistan not recognized by UF Admissions. Interview required if non-U.S. institution.",
    "intl_student_notes": "Traditional 1-year track is the external/intl pathway (distinct from restricted florida-msf combo-only). English proficiency required; interview if attended non-U.S. institution. STEM designation unknown as of 2026-10-26.",
    "restricted": false,
    "related_program_id": "florida-msf",
    "related_program_note": "Keep florida-msf as restricted UF-UG combo classic MSF (TFE #11). florida-msft is separate FinTech MS on primary slate per Collinn lock 2026-10-26.",
    "sources": [
      {
        "title": "UF Warrington MS in Finance and Technology program page",
        "url": "https://warrington.ufl.edu/graduate/masters-finance-technology/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Warrington news: MS Finance and Technology introduction (2026-10-20)",
        "url": "https://warrington.ufl.edu/news/warrington-masters-finance-and-technology/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Warrington specialized master's degrees, rankings and career outcomes (FinTech listed; no FinTech placement stats)",
        "url": "https://warrington.ufl.edu/news/uf-warrington-specialized-masters-programs-degrees-rankings-career-outcomes/",
        "access_date": "2026-10-26"
      },
      {
        "title": "Warrington 2024–2025 graduate outcomes (classic MSF 100% — adjacent only)",
        "url": "https://warrington.ufl.edu/news/2024-2025-graduate-outcomes/",
        "access_date": "2026-10-26"
      }
    ],
    "confidence": "low",
    "confidence_reason": "Inaugural Fall 2027 traditional cohort — zero program-specific placement/internship/salary data. Adjacent classic MSF stats explicitly not attributed. Career-page claims are aspirational.",
    "last_updated": "2026-10-26",
    "pathProgramId": "florida-msft",
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
