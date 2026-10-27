// Only sourced findings belong here. Missing values are explicitly rendered as unverified.
// applicationRequirements is optional per catalog id (shape in dist/application-requirements.js
// and DEVELOPMENT.md). Omit the object to hide the dossier section. unknown is a gap, not a
// published rule. optional ≠ waived. Pure CS may omit gmat. Do not invent scores or cutoffs.
// Finance / MSF + Quant batch1 (42 ids), CS batch2 (33 ids), and MBA batch3 (30 ids), as_of 2026-10-27, are merged from brief/appreq-batch1{a,b,c,d}.json, brief/appreq-batch2{a,b,c,d}.json, and brief/appreq-batch3{a,b,c,d}.json.
const referenceCost = (tuition, url, detail, label = 'Academic-year tuition') => ({
  tuition, tuitionLabel: label, period: '2026–27',
  costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
  costDetail: detail,
  sources: [['Official tuition / budget', url]]
});
export const researchDetails = {
  'mit-cs': {
    kind: 'PhD route',
    availability: 'No external terminal master’s',
    availabilityType: 'restricted',
    orientation: 'Restricted · No external terminal MS',
    deadline: 'No external Fall 2027 MS deadline — EECS MEng is MIT-undergrad-only; external graduate admission is PhD-track only',
    tuition: 66720,
    tuitionLabel: 'Academic-year tuition (full regular graduate × 2 terms) — restricted route',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Availability: EECS MEng is open only to MIT undergraduates (not an external terminal MS).',
    costDetail: 'MIT Registrar Graduate tuition 2026–27: Full regular tuition $33,360 per fall/spring term → $66,720 AY. EECS MEng is a fifth-year bachelor’s/master’s path for MIT undergraduates in listed Course 6 programs only; MIT does not offer a general external-admission terminal MS in CS/EECS for Fall 2027 applicants. Published rate recorded for sticker reference with that availability restriction. Miscellaneous fees and living costs separate.',
    sources: [
      ['Official tuition / budget', 'https://registrar.mit.edu/registration-academics/tuition-fees/graduate'],
      ['MEng program', 'https://www.eecs.mit.edu/academics/undergraduate-programs/meng-program/'],
      ['EECS Admission Process', 'https://www.eecs.mit.edu/academics/graduate-programs/admission-process/'],
      ['EECS graduate admissions FAQs', 'https://www.eecs.mit.edu/academics/graduate-programs/admission-process/graduate-admissions-faqs/'],
      ['OGE EECS programs', 'https://oge.mit.edu/programs/electrical-engineering-and-computer-science/'],
    ],
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-061","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'MIT EECS does not offer a terminal master’s for external applicants. MEng is for MIT EECS undergrads; SM is typically PhD-en-route (or special programs like LGO).',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "EECS Graduate Admissions Information Letter and OGE program page: department does NOT require GRE scores for admission.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not used for EECS PhD admissions.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "International students: TOEFL iBT minimum 100; institute code 3514; department code 78 or 66. OGE: IELTS preferred over TOEFL; waiver may be available."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS minimum 7; electronic scores to MIT Graduate Admissions. EECS letter: IELTS can be used if TOEFL unavailable; same waiver cases as TOEFL."
        },
        "waiver": "EECS letter: TOEFL/IELTS may be waived e.g. if applicant has been in the U.S. at least two years, or if country's first language is English. OGE notes waiver of TOEFL/IELTS may be available."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "EECS letter: admission influenced by GPA but there is not an official cut-off."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters of recommendation required (EECS letter and OGE application requirements)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "OGE: Essay 1 research activities and goals; Essay 2 academic and intellectual journey. EECS letter refers to Statement of Objectives detailing research interests.",
        "alsoKnownAs": "statement of objectives; essays"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not explicitly listed on OGE EECS application-requirements block reviewed (online application, two essays, three LORs, transcripts, English scores)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts required; admitted students submit official transcript(s) to EECS Graduate Office. Do not send published papers or theses with application."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not stated on OGE EECS program page or EECS admissions information letter reviewed."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Applicants can request a fee waiver via OGE eligibility criteria / EECS fee-waiver link.",
        "detail": "OGE EECS listing: application fee $90.00."
      },
      "other": [
        "FLAG — NO EXTERNAL TERMINAL MASTER'S: Department does not offer admission for a terminal master's. Apply for PhD; SM earned en route if needed. MEng degrees restricted to MIT undergraduates only.",
        "Application opens Sep 15; deadline Dec 1 11:59 p.m. Eastern; Fall Term (September); Summer only for LGO.",
        "Extremely competitive; strong background in math, physics, engineering, or CS expected.",
        "PhD students typically supported by fellowship/RA/TA (tuition, stipend, medical insurance)."
      ],
      "advice": "Flag as PhD-only / no external MS for Fall 2027 slate. Requirements above are for the EECS PhD application path only.",
      "sources": [
        [
          "MIT OGE EECS program page",
          "https://oge.mit.edu/programs/electrical-engineering-and-computer-science/"
        ],
        [
          "MIT EECS Graduate Admissions Information Letter",
          "https://www.eecs.mit.edu/graduate-admissions-information-letter/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'caltech-cs': {
    kind: 'PhD route',
    availability: 'No standard terminal master’s',
    availabilityType: 'restricted',
    orientation: 'Restricted · PhD-only admissions',
    deadline: 'No external Fall 2027 MS deadline — CMS admits PhD-track only; MS by petition after courses (not open terminal MS)',
    tuition: 68574,
    tuitionLabel: 'Academic-year tuition (Institute graduate) — restricted / PhD-path MS only',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Availability: CMS admits only PhD-track students; MS awarded by petition, not as an open terminal master’s.',
    costDetail: 'Caltech Graduate Studies Estimated Budget 2026–27: Tuition $68,574 annual ($22,858/term × 3); Mandatory Fees $2,448 (total tuition+mandatory fees $71,022). Computing and Mathematical Sciences (CMS) catalog: only students who expect to pursue the Ph.D. are admitted; PhD students in good standing may petition to add the MS after course requirements. No open external terminal MS CS for Fall 2027. Published Institute tuition recorded with that availability note. Stipend packages typically cover tuition for funded PhD students.',
    sources: [
      ['Official tuition / budget', 'https://www.gradoffice.caltech.edu/financialsupport/budget'],
      ['CMS catalog special regulations (MS by petition)', 'https://catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/computing-and-mathematical-science-cms/'],
      ['CMS graduate programs', 'https://www.cms.caltech.edu/academics/grad'],
      ['CMS catalog regulations', 'https://www.catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/computing-and-mathematical-science-cms/'],
      ['Graduate admissions FAQ', 'https://gradoffice.caltech.edu/admissions/faq-applicants'],
    ],
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Caltech CMS: no direct terminal MS admissions. Applicants enter the PhD; MS may be awarded only in exceptional en-route cases.',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "CMS Graduate Programs FAQ: GRE not required for application for the 2026–2027 academic year.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "PhD STEM route; GMAT not used.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "optional",
          "minScore": null,
          "detail": "Grad Studies FAQ: English proficiency exams not required for admission; applicants whose native language is not English or who lack English-medium degree should demonstrate strong English. TOEFL recognized; self-report OK. Institution code 4034. No published minimum."
        },
        "ielts": {
          "status": "optional",
          "minScore": null,
          "detail": "IELTS, PTE, Duolingo and other certified exams recognized; not required for admission; no published minimum."
        },
        "waiver": "Exemptions noted for applicants who studied in the U.S. ≥2 years or received a degree where English is primary language of instruction (Grad Studies FAQ). ESL placement may occur after arrival."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": 4,
        "detail": "No minimum GPA. Most successful applicants have U.S. GPA ≥3.5/4.0 and/or top 5–10% of class (Grad Studies FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters required; online application accepts three maximum (Grad Studies FAQ / checklist)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essays required components of application (Grad Studies checklist: transcripts, 3 LORs, CV, essays).",
        "alsoKnownAs": "Essays / statement"
      },
      "resume": {
        "status": "required",
        "detail": "CV required (Grad Studies application checklist)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from each college/university attended required; upload most recent available with application."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Most options host visit days for select applicants; online interviews may be conducted when in-person visits not feasible (Grad Studies FAQ)."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Limited waivers for financial need or affiliated organizations; request in online application payment options with hardship documentation.",
        "detail": "$100 USD application fee (Graduate Studies Apply Online)."
      },
      "other": [
        "NO EXTERNAL TERMINAL MS: CMS catalog — only students who expect to pursue the Ph.D. are admitted; master’s awarded only in exceptional cases",
        "CMS FAQ: traditionally do not offer Master’s as a terminal degree",
        "Apply to PhD (CS / CMS / ACM / CDS options); deadline Dec 15 (CMS pages also mention Dec 1 review start)",
        "Full-time only; funding typically with PhD admission"
      ],
      "advice": "Do not treat as an external MS target—PhD-route only. Terminal MS not offered. GRE not required 2026–27.",
      "sources": [
        [
          "CMS Graduate Programs FAQ",
          "https://www.cms.caltech.edu/academics/grad"
        ],
        [
          "Catalog CMS special regulations (MS exceptional)",
          "https://www.catalog.caltech.edu/current/information-for-graduate-students/special-regulations-for-graduate-options/computing-and-mathematical-science-cms/"
        ],
        [
          "Grad Studies Apply Online (fee)",
          "https://gradoffice.caltech.edu/admissions/applyonline"
        ],
        [
          "Grad Studies FAQ for applicants",
          "https://gradoffice.caltech.edu/admissions/faq-applicants"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'princeton-cs': {
    kind: 'MSE / MEng',
    availability: 'Fall 2027 master’s intake suspended',
    availabilityType: 'closed',
    deadline: 'No Fall 2027 MS deadline — CS will not accept master\'s applications for Fall 2027 (MSE closed)',
    funding: 'The department describes funded master’s degrees, but has suspended Fall 2027 admission. This is not an available Fall 2027 funding opportunity.',
    tuition: 65210,
    tuitionLabel: 'Academic-year tuition (Graduate School regular rate) — applications suspended Fall 2027',
    period: '2026–27',
    costNote: '2026–27 sticker reference only. Availability: CS will not accept master’s applications for Fall 2027.',
    costDetail: 'Princeton CS department: will not accept applications to the master’s degree program for Fall 2027 admission (resource uncertainty); MSE/M.Eng. are normally fully funded via teaching assistantships when offered. Graduate School University Rates 2026–27: Tuition Regular Rate $65,210; SHP Fee $4,220 (total $69,430)—SHP not included in the tuition figure. Rate recorded as published sticker with clear closed/suspended availability for Fall 2027 entry; not a billable quote for new Fall 2027 master’s admits.',
    sources: [
      ['Master\'s degree (no F27 apps)', 'https://www.cs.princeton.edu/grad/masters-degree-requirements'],
      ['Official tuition / budget (Grad School rates)', 'https://gradschool.princeton.edu/financial-support/financial-support-model/funding-calendar-university-rates-costs'],
      ['Grad School Application Deadlines (no M.S.E. admission Fall 2027 for CS)', 'https://gradschool.princeton.edu/admission-onboarding/prepare/application-deadlines'],
      ['MSE track', 'https://www.cs.princeton.edu/grad/mse-track'],
    ],
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Princeton CS master\'s (MSE/M.Eng.): normally 2 years with 6 courses + thesis (MSE) or non-thesis M.Eng. Department is not accepting master\'s applications for Fall 2027 admission.',
    orientation: 'Restricted F27 · No apps · Curriculum 2yr when open',
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "Princeton Graduate School Computer Science field page: GRE General Test — Not Accepted (AY 2026–2027).",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS; GMAT not part of CS graduate admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "MSE English policy (still posted): applicants whose primary language is not English and without complete undergrad education in English must submit TOEFL or IELTS. MSE requires TOEFL speaking ≥28 legacy / 6 new scale. Ph.D. also accepts DET. Exemptions: primary language English; undergrad entirely in English (degree before enrollment); or ≥2 years full-time graduate study entirely in English."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted for MSE; speaking subsection equivalent 8 (per department MSE English requirement). Same exemption rules as TOEFL."
        },
        "waiver": "Exemptions per Grad School/department rules above; department does not control/approve exemptions—contact gsadmit@princeton.edu."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on CS admissions-requirements or Grad School CS field page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Princeton Graduate School CS FAQ/admissions materials require three letters for CS graduate applications (Ph.D. path still open). MSE applications not accepted Fall 2027."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement of Purpose required for Princeton graduate applications (≤1000 words per Grad School guidance). Writing sample/policy memo not required for CS.",
        "alsoKnownAs": "Academic Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé/CV required per Princeton Graduate School application materials."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts with online application; do not mail to department. Incomplete applications disadvantaged."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not stated on CS admissions-requirements page."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Fee waiver requests for financial hardship, qualifying programs, or recruiting-event codes via Grad School Application Fee Waiver Request.",
        "detail": "$90 per Grad School Computer Science field page (AY 2026–2027)."
      },
      "other": [
        "FLAG: Computer Science will NOT accept master's (MSE) applications for Fall 2027 admission (resource uncertainty). Ph.D. remains open (deadline Dec 15, 2026).",
        "When open, all admits start MSE thesis track; may switch to M.Eng. non-thesis in spring Y1; funded via TA typically.",
        "Fall admission only; no evening/weekend/summer courses."
      ],
      "advice": "NO EXTERNAL MS for Fall 2027. Do not apply to MSE this cycle. Revisit later or consider Ph.D. only if research-bound. Requirements above are from still-posted official pages for when MS reopens / Ph.D. parallel materials.",
      "sources": [
        [
          "CS Master's Degree (suspension notice)",
          "https://www.cs.princeton.edu/grad/masters-degree-requirements"
        ],
        [
          "CS Admissions Requirements",
          "https://www.cs.princeton.edu/grad/admissions-requirements"
        ],
        [
          "Princeton Grad School Computer Science field (AY 2026–2027)",
          "https://gradschool.princeton.edu/academics/degrees-requirements/fields-study/computer-science"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'washington-cs': {
    availability: 'PMP: no F-1 / J-1 applicants',
    availabilityType: 'restricted',
    orientation: 'Restricted · PMP part-time or PhD',
    tuition: 17130,
    tuitionLabel: 'Typical academic-year instructional fees (PMP, 15 credits) — no F-1/J-1',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Availability: PMP does not support F-1 or J-1 student visas.',
    costDetail: 'UW Allen School PMP Costs & Fees: as of autumn 2026, per-credit instructional fee $1,142 (same rate regardless of residency/citizenship). Typical enrollment 4–5 credits/quarter (12–15 credits/year) → typical academic-year instructional cost $17,130 at 15 credits; typical program cost $45,680 at required 40 credits. About $295/quarter additional mandatory student fees. Eligibility: PMP does not support F-1 or J-1; international students need another status allowing Seattle-area residence and part-time study. Traditional research MS/PhD funding routes differ—this catalog id maps to the published PMP fee schedule with that visa restriction.',
    sources: [
      ['Official tuition / budget (PMP costs)', 'https://www.cs.washington.edu/academics/graduate/pmp/program-overview/pmp-costs-fees/'],
      ['PMP eligibility (no F-1/J-1)', 'https://www.cs.washington.edu/academics/graduate/pmp/admissions/requirements/'],
      ['UW fee-based program rates PDF', 'https://finance.uw.edu/tuition-fees/files/docs/fee-programs/2026-27-fee-based-program-rates-5.7.2026.pdf'],
      ['PMP How to Apply (quarter deadlines)', 'https://www.cs.washington.edu/academics/graduate/pmp/admissions/how-apply/'],
      ['PMP admissions', 'https://www.cs.washington.edu/academics/graduate/pmp/admissions/'],
      ['PMP overview', 'https://www.cs.washington.edu/academics/graduate/pmp/'],
      ['PhD FAQ', 'https://www.cs.washington.edu/academics/graduate/phd-program/phd-admissions/faq/'],
    ],
    deadline: 'PMP Autumn: 1 Jul (month-day; year not labeled) · Winter: 2 Nov 2026 (winter 2027 extension) · Spring: 1 Feb',
    deadlineDate: null,
    academic: 'UW Allen School: no general full-time terminal MS for most external applicants. Options are part-time Professional Master\'s (PMP, local/working professionals) or PhD with possible en-route MS.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "PMP does not require GRE; no benefit to providing scores—any scores received will not be referenced during reviews.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of PMP admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 92,
          "detail": "Non-native English speakers must prove proficiency. TOEFL ≥92 (on/before 2026-01-20) or ≥4.5 (on/after 2026-01-21). UW ETS code 4854. Or degree with English as language of all instruction per Grad Policy 3.2."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Academic IELTS ≥7.0 via E-TRF to UW organization ID 365. DET ≥130 also accepted."
        },
        "waiver": "Degree for which English was language of all instruction (documentation required except degrees in Policy 3.2.1 countries). Residence-during-enrollment rules apply depending on whether country is English-speaking."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA stated on PMP Admissions/How to Apply; report cumulative GPA from each school; Scholaro conversion suggested for international GPAs."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required; optional third. Prefer supervisors/leads familiar with technical work; due by application deadline."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "~one page / ~750 words personal statement: academic/professional backgrounds, areas of interest, how PMP advances professional goals.",
        "alsoKnownAs": "Personal statement / statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume/CV with detailed job tasks and technical skills; no length/format limit."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts for all higher-ed institutions during application; official only after accepting offer."
      },
      "interview": {
        "status": "not_used",
        "detail": "Complete How to Apply checklist does not include an interview; decisions 3–4 weeks after deadline."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "UW Graduate School fee waivers for some domestic students with financial need; PMP does not offer department-level waivers.",
        "detail": "$90 non-refundable UW Graduate School application fee."
      },
      "other": [
        "FLAG: PMP-ONLY route on this catalog id; PMP unable to accept applicants requiring F-1 or J-1 student visas.",
        "Must physically reside in Seattle/Puget Sound at application and for program duration; part-time study eligibility in U.S.",
        "Established professional background in computing required.",
        "Academic background form (hardware/software/theory/applications) required upload.",
        "Three entry quarters: Autumn (Jul 1), Winter (Nov 1; Winter 2027 extended to Nov 2), Spring (Feb 1); no summer."
      ],
      "advice": "PMP ≠ full-time research MS; no F-1/J-1. Confirm eligibility before applying. Catalog id maps to PMP admissions page as specified.",
      "sources": [
        [
          "Allen School PMP Admissions",
          "https://www.cs.washington.edu/academics/graduate/pmp/admissions/"
        ],
        [
          "Allen School PMP How to Apply",
          "https://www.cs.washington.edu/academics/graduate/pmp/admissions/how-apply/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'harvard-cs': {
    kind: 'Related SM',
    availability: 'Related CSE degree · not standalone CS',
    availabilityType: 'alternative',
    orientation: 'Restricted · No external terminal CS SM',
    tuition: 67504,
    tuitionLabel: 'Program / full-year tuition (SEAS CSE SM) — related alternative, not a pure CS MS',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Availability: Computational Science and Engineering SM (related SEAS master’s), not a standalone CS MS.',
    costDetail: 'Harvard Griffin GSAS Cost of Attendance 2026–27: SEAS Computational Science and Engineering master of science (SM) full-year cost $67,504 (one-year program). CSE ME and Data Science SM use $67,504 first year / $33,752 subsequent listed terms. Per-course rates if less than full-time: $8,438 / $16,876 / $25,314 / $33,752 for 1–4 courses per term. Standard GSAS full tuition for other master’s/PhD years 1–2 is $59,048—not used here. Catalog harvard-cs uses this CSE-related SM figure with an alternative-route label; Harvard does not publish a separate terminal MS Computer Science under this id.',
    sources: [
      ['Official tuition / budget (GSAS COA)', 'https://gsas.harvard.edu/apply/cost-attendance-2026-2027'],
      ['CSE master\'s', 'https://seas.harvard.edu/masters-computational-science-and-engineering'],
      ['SEAS CSE How to Apply (Fall 2027; Dec 1, 2026)', 'https://seas.harvard.edu/masters-computational-science-and-engineering/how-apply'],
      ['GSAS Computational Science and Engineering (SM/ME Dec 01, 2026 05:00 pm)', 'https://gsas.harvard.edu/program/computational-science-and-engineering'],
      ['CS graduate program (PhD focus)', 'https://seas.harvard.edu/computer-science/graduate-program'],
      ['SM and ME course requirements', 'https://seas.harvard.edu/office-academic-programs/graduate-policies-procedures-and-forms/sm-and-me-degrees/sm-and-me-area'],
    ],
    deadline: 'Apps open (Fall 2027 CSE/Data Science portal open) · Deadline 1 Dec 2026 · 5:00 p.m. ET (CSE SM)',
    deadlineDate: '2026-12-01',
    academic: 'Harvard SEAS has no open terminal CS master\'s for external applicants. CS SM is for current Harvard PhD/A.B. students; related terminal master\'s are CSE and Data Science.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "SEAS CSE how-to-apply (updated 2026-09-04) and GSAS Engineering program page: General GRE and Subject GRE scores are optional for the upcoming cycle. No single factor used as a filter.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure SEAS CSE/Data Science master's do not use GMAT. SEAS FAQ notes GRE or GMAT is required only for Master of Design Engineering / MS-MBA Engineering Sciences (separate GSD/HBS applications)—not for CSE SM/ME.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "GSAS English proficiency (Fall 2027): non-native speakers without an undergraduate degree from an English-primary-instruction institution must submit TOEFL iBT. Minimum overall 5 (95 for tests taken prior to 2026-01-21) and Speaking 4.5 (23 prior to 2026-01-21). ETS code 3451; dept 99. Duolingo not accepted. Master's degree alone not accepted as proof."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic minimum overall 7 and Speaking 6.5 (GSAS). Send via IELTS E-Delivery to Harvard Griffin GSAS. Home/online Academic versions accepted."
        },
        "waiver": "Undergraduate degree from an institution where English is the primary language of instruction. US institutions where English was not primary but a significant portion was in English may petition GSAS (US institutions only). SEAS FAQ: no waivers for the English Language Proficiency Requirement beyond GSAS pathways. Scores for Fall 2027 must be from tests taken no earlier than 2025-01-05."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "SEAS CSE how-to-apply: no GPA cutoff / no minimum GPA requirement. Holistic review."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters required from faculty, advisors, and/or employment supervisors who can speak to graduate-study ability; no more than four. Register recommenders in GSAS application; Interfolio not accepted. Late letters may be added but review begins after Dec 1."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "About 1,000 words covering experiences (including training not on transcript), interests, and future goals.",
        "alsoKnownAs": "statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "CV/resume covering education, work experience, honors, awards, papers, and other achievements."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload electronic official or unofficial transcripts; do not mail hard copies. Fall grades can be updated after submission via Fall Grade Report."
      },
      "interview": {
        "status": "not_used",
        "detail": "SEAS CSE how-to-apply: interview not required and in-person interviews with admissions staff are not offered."
      },
      "applicationFee": {
        "amountUsd": 105,
        "waivers": "Fee-waiver eligibility determined by answering questions in the Application Fee section of the GSAS application; immediate system response.",
        "detail": "Harvard Griffin GSAS application fee $105 payable by credit card (non-refundable)."
      },
      "other": [
        "FLAG: Harvard CS PhD page confirms no standalone CS master's; related terminal master's are Computational Science and Engineering (SM/ME) and Data Science—do not treat as MS CS.",
        "Fall Term matriculation only; CSE/Data Science portal open for Fall 2027; GSAS deadline December 1, 2026.",
        "Select Engineering and Applied Sciences → Computational Science and Engineering → SM or ME.",
        "Do not apply to both Data Science and CSE.",
        "No formal prerequisites; successful applicants show calculus, linear algebra, DEs, probability/stats, programming (e.g. Python/R), and basic CS concepts.",
        "Master's candidates not eligible for SEAS financial aid."
      ],
      "advice": "Related CSE SM/ME for Fall 2027 (as_of 2026-10-27). Prefer how-to-apply + GSAS English/fee pages over CS PhD curriculum page. TOEFL uses new 0–6 scale minima for tests on/after 2026-01-21.",
      "sources": [
        [
          "SEAS CSE How to Apply (Fall 2027)",
          "https://seas.harvard.edu/masters-computational-science-and-engineering/how-apply"
        ],
        [
          "SEAS Master's in CSE overview",
          "https://seas.harvard.edu/masters-computational-science-and-engineering"
        ],
        [
          "SEAS CS graduate program (PhD; points to related master's)",
          "https://seas.harvard.edu/computer-science/graduate-program"
        ],
        [
          "Harvard Griffin GSAS English Proficiency",
          "https://gsas.harvard.edu/apply/applying-degree-programs/english-proficiency"
        ],
        [
          "Harvard Griffin GSAS Applying to Degree Programs (fee)",
          "https://gsas.harvard.edu/apply/applying-degree-programs"
        ],
        [
          "SEAS Graduate FAQs",
          "https://seas.harvard.edu/prospective-students/prospective-graduate-students/frequently-asked-questions-faqs-graduate"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cmu-mscs': {
    deadline: 'Apps open 9 Sep 2026 · Early 18 Nov 2026 · 3 p.m. EST · Final 9 Dec 2026 · 3 p.m. EST (Fall 2027 SCS)',
    deadlineDate: '2026-12-09',
    academic: 'Coursework MS (96–108 qualifying units, typically eight courses) with optional research and a thesis option. Most finish in three semesters; MS admission does not prefer students for the PhD.',
    sources: [
      ['SCS Graduate Admissions', 'https://www.cs.cmu.edu/education/graduate-admissions'],
      ['MS in Computer Science', 'https://csd.cs.cmu.edu/academics/masters/ms-in-computer-science'],
    ],
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: 'Coursework · Optional research · Thesis option · ~3 semesters',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Strongly recommended, especially without clear documentation of strong mathematical proficiency; if unable to provide scores, briefly explain in Statement of Purpose. Waived for applicants who graduated from or are enrolled at CMU. GRE at Home generally not accepted except limited historical windows. Institution 2074; dept 0402 (SCS).",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "MSCS uses GRE policy; GMAT not part of CSD MSCS requirements.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "If F-1/J-1 and English not native (spoken at home from birth): TOEFL preferred (iBT/Home). No ITP Plus for China. No waivers for non-native speakers (including prior U.S. study). Recent admits often TOEFL 105–114 (SCS Grad Admissions). Code 4256; dept 78."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted; mainland China applicants encouraged to take IELTS. Recent admits often 7–8. Duolingo also accepted (often 130–155 for admits). No minimum published as hard cutoff."
        },
        "waiver": "CSD/Griffin SCS does not issue English waivers for non-native speakers—prior U.S. or English-medium study does not waive."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on CSD MSCS admissions page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters required (up to five allowed in application); at least two from faculty or recent employers."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Concise 1–2 page essay: primary research interests, related experiences, and objective in pursuing MSCS.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV in PDF format."
      },
      "transcripts": {
        "status": "required",
        "detail": "PDF of most recent transcript from each college/university attended, even if no degree granted."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on CSD MSCS admissions page."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Financial or program-participant fee waiver info displayed when selecting program in online application.",
        "detail": "Early deadline fee $80/program if by Nov 18 2026 3pm EST; after that $100/program. Fall 2027 cycle: app opens Sep 9 2026; early Nov 18; final Dec 9 2026 3pm EST."
      },
      "other": [
        "Fall admit only (no Spring start for MSCS)",
        "Distinct from Fifth Year MS (CMU CS undergrads only; no fee)",
        "Program does not offer scholarships/financial assistance for MSCS at this time"
      ],
      "advice": "GRE strongly recommended≠required; explain if omitting. No English waivers. Prefer early deadline for $80 fee.",
      "sources": [
        [
          "CSD Master’s admissions (MSCS)",
          "https://csd.cmu.edu/academics/masters/admissions"
        ],
        [
          "SCS Graduate Admissions (fee/GRE/English)",
          "https://www.cs.cmu.edu/education/graduate-admissions"
        ],
        [
          "MSCS program page",
          "https://csd.cmu.edu/academics/masters/ms-in-computer-science"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'stanford-cs': {
    tuition: 69717,
    tuitionLabel: 'Academic-year tuition (Engineering, 11–18 units × 3 quarters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Graduate School of Engineering quarterly rate for 11–18 units is $23,239 (2026–27). Three academic-year quarters (Autumn–Spring) = $69,717. 8–10 units is $15,100/quarter. Per-unit above 18: $1,549. MS CS requires 45 units; HCP/online uses a different per-unit schedule. Living costs and Cardinal Care are separate.',
    sources: [
      ['Official tuition / budget', 'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates'],
      ['Master\'s admissions', 'https://www.cs.stanford.edu/admissions/masters-admissions'],
      ['MS degree requirements', 'https://www.cs.stanford.edu/masters-degree-requirements'],
      ['MS specializations', 'https://www.cs.stanford.edu/masters-specializations'],
      ['The Student Budget (graduate)', 'https://financialaid.stanford.edu/grad/budget/'],
      ['Estimate Your Graduate Charges', 'https://studentservices.stanford.edu/my-finances/tuition-fees/estimate-your-graduate-charges-0'],
      ['CS MS CA/RA overview', 'https://www.cs.stanford.edu/masters-course-assistant-and-research-assistant'],
      ['CS graduate application deadlines', 'https://www.cs.stanford.edu/admissions-graduate-application-deadlines'],
      ['Stanford Grad Admissions apply (11:59 p.m. Pacific Time)', 'https://gradadmissions.stanford.edu/apply/apply-now'],
    ],
    orientation: '45 units · 9 specializations · Coursework or research options',
    funding: 'CS MS pages and Stanford Grad Aid: no guaranteed department funding for MS; international students generally ineligible for Stanford/federal loans. Course/Research Assistant roles exist but are limited; PhD priority. Knight-Hennessy (SCH-002) listed in catalog but 2027 application closed.',
    confidence: 'high',
    unresolved: ["Fall 2027–28 Engineering rates not yet published","Exact unit plan for a typical 45-unit MS pathway (1 vs 2 years) varies by student"],
    asOf: '2026-10-20',
    scholarships: ["SCH-002","SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    deadline: 'Apps open 15 Sep 2026 · Deadline 8 Dec 2026 · 11:59 p.m. PT (Autumn / Fall 2027 entry)',
    deadlineDate: '2026-12-08',
    academic: '45-unit MS CS with Foundations, SSI, Breadth, Depth, and Electives on an approved program sheet. Nine predefined specializations (plus rare Individually Designed). Up to three years / nine non-summer quarters.',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "CS Graduate Application Checklists: GRE not required for PhD or MS. MS FAQ: GRE scores are not required and not considered from MS applicants.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS MS; GMAT not accepted/listed.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "TOEFL required unless exemption. University minima for admission consideration: TOEFL 90 (before Jan 21, 2026) or 4.5 (on/after). Institution code 4704. Scores within 24 months of deadline. Autumn 2027 earliest valid test date Sep 1, 2024 per Grad Admissions."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic accepted as TOEFL substitute; university minimum 7. Deliver via IELTS Results Service to Stanford University Graduate. Within 24 months of deadline."
        },
        "waiver": "Not required if: U.S. citizen/PR; self-declared first language English; earned U.S. bachelor’s/master’s/doctoral (or intl equiv) from university where all instruction in English; or ≥2 consecutive years professional/educational experience in English in past 10 years."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA on CS Master's Admissions or checklist. Bachelor’s (or equivalent) required; strong quantitative/analytical skills; CS bachelor’s not required."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Exactly three online letters (min=max). Prefer ≥2 academic. No Interfolio; no mailed/emailed/faxed letters."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "SoP ≤2 pages single-spaced: reasons for applying, preparation, research interests, career plans, background aiding evaluation of aptitude/motivation.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Submit resume in online application; include publications. Also supplemental form for publications/website."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload unofficial transcripts/e-transcripts for all institutions attended ≥1 year full-time (incl. Stanford NDO). Do not mail official unless contacted."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CS graduate application checklist or MS FAQ."
      },
      "applicationFee": {
        "amountUsd": 125,
        "waivers": "Stanford Grad Admissions fee waiver process (not detailed on CS checklist); see central Grad Admissions.",
        "detail": "$125 paid in online application by credit card."
      },
      "other": [
        "Autumn 2027 only for MS (incl. HCP): applications open Sep 15, 2026; deadline Dec 8, 2026; decisions ~Mar 2027.",
        "HCP (part-time) same admissions requirements; U.S. residence/employment constraints for eligibility.",
        "MS admission is not a path guarantee to Stanford PhD."
      ],
      "advice": "Degree-requirements page is curriculum only—use Admissions checklist + MS FAQ. GRE not considered. Confirm English exemption boxes carefully on Personal Background.",
      "sources": [
        [
          "CS Graduate Application Checklists",
          "https://www.cs.stanford.edu/admissions/graduate-application-checklists"
        ],
        [
          "CS Master's Admissions",
          "https://www.cs.stanford.edu/admissions/masters-admissions"
        ],
        [
          "CS Master's Admissions FAQ (GRE/English)",
          "https://www.cs.stanford.edu/admissions/masters-admissions-frequently-asked-questions"
        ],
        [
          "Stanford Grad Admissions Test Scores",
          "https://gradadmissions.stanford.edu/apply/test-scores"
        ],
        [
          "CS Graduate Application Deadlines",
          "https://www.cs.stanford.edu/admissions-graduate-application-deadlines"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'stanford-mba': {
    deadline: 'Round 2 · 6 Jan 2027 · 4:00 p.m. PT (Fall 2027 / 2026–27 cycle; R1 passed)',
    deadlineDate: '2027-01-06',
    sources: [
      ['MBA application deadlines (2026–27)', 'https://www.gsb.stanford.edu/programs/mba/admission/deadlines'],
      ['MBA program', 'https://www.gsb.stanford.edu/programs/mba'],
      ['MBA curriculum', 'https://www.gsb.stanford.edu/programs/mba/academic-experience/curriculum'],
      ['Bulletin GSB-MBA', 'https://bulletin.stanford.edu/programs/GSB-MBA'],
    ],
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-076","SCH-084"],
    academic: 'Stanford GSB MBA: 2 years (6 quarters), 90 units. Year 1 Foundations (leadership, analytic, management); Year 2 electives. Global experience required.',
    orientation: '2 years · 90 units · Foundations → electives',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid GMAT or GRE required for all MBA applicants; no preference; no minimum; no superscore—report one sitting. Interviews not granted without valid test score on file. EA not accepted for MBA (MSx-only option).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted as alternative to GRE; same rules (required, no minimum, no superscore).",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "Required if any undergrad courses (other than foreign language) taught in non-English unless later graduate degree exclusively in English. Min: TOEFL iBT 100 (before Jan 21 2026) or 5.0 (as of Jan 21 2026). iBT/Home/Paper Edition OK. Code 4704 Stanford University. Citizenship/work do not exempt. Valid 2 years; must be valid on round deadline."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall band 7.0 minimum. Report to Stanford University / Stanford GSB — MBA Program. Online IELTS accepted. PTE Academic also accepted (min 68); online PTE not accepted."
        },
        "waiver": "Not required if university taught all classes exclusively in English for undergrad or graduate degree. If that school is in a non-English primary-language country, explain in Additional Information—committee may still request a test. Citizenship and work experience do not exempt."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "U.S. bachelor’s or equivalent required; no numeric minimum GPA posted on Application Essentials."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters: one from current direct supervisor (or next-best alternative) and one from someone else who supervised you. No family or current/former direct reports. Recommenders must be sole authors."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay 1: What matters most to you, and why? (up to 650 words). Essay 2: Why Stanford for you? (up to 350 words). Joint MBA/MSx adds third essay (up to 350). Additional Information for extenuating circumstances—not an extra essay. Optional short-answer question on contributions.",
        "alsoKnownAs": "Essays"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé required (letter/A4 size); focus on achievements and impact. Do not include photos."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts with application; official only if admitted. Bachelor’s or equivalent required."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation only after application review; required before an offer of admission. Structured behavioral interview with alumni or admissions staff (remote or in person; no on-campus interview requests). Invite is positive but not a guarantee (~2–3 interviewees per seat)."
      },
      "applicationFee": {
        "amountUsd": 275,
        "waivers": "Military service waiver (active U.S., honorably discharged veterans, reserves—upload proof). Need-based waiver for extreme hardship (extra form; materials due Dec 18, 2026; first-come). Defer-eligible applicants: reduced fee $100.",
        "detail": "Nonrefundable $275; pay by deadline 4:00 p.m. PT for the round. Debit/credit accepted."
      },
      "other": [
        "2026–27 rounds: R1 Sep 9 2026 (notify Dec 9 2026); R2 Jan 6 2027 (Apr 1 2027); R3 Apr 7 2027 (May 27 2027); due 4:00 p.m. PT",
        "Apply once per application year",
        "If score expires before Jun 1 2027, send official scores when submitting application"
      ],
      "advice": "No GMAT/GRE waiver path for standard MBA—test early so interviews can be granted. Confirm English-instruction history carefully; citizenship does not waive English tests.",
      "sources": [
        [
          "Deadlines 2026–27",
          "https://www.gsb.stanford.edu/programs/mba/admission/deadlines"
        ],
        [
          "Application Essentials",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/application-essentials"
        ],
        [
          "Applying / fee overview",
          "https://www.gsb.stanford.edu/programs/mba/admission/application"
        ],
        [
          "Application fee",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/fee"
        ],
        [
          "Test scores",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/test-scores"
        ],
        [
          "English proficiency",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/test-scores/english-language-proficiency"
        ],
        [
          "Letters of recommendation",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/letters-recommendation"
        ],
        [
          "Essays",
          "https://www.gsb.stanford.edu/programs/mba/admission/application/essays"
        ],
        [
          "Interviews",
          "https://www.gsb.stanford.edu/programs/mba/admission/interviews"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'berkeley-cs': {
    tuition: 73766.5,
    tuitionLabel: 'Academic-year tuition and mandatory fees (MEng nonresident, continuing)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Registrar Master of Engineering (All M.Eng Degrees) per-semester continuing totals: residents $29,767.75; nonresidents $36,883.25 (includes tuition, Student Services Fee, campus/transit fees, PDST $16,850 resident / $17,843 nonresident, NRST $6,122.50 for nonresidents, IREF, and health insurance $4,103). Program is Fall+Spring only → nonresident AY $73,766.50. New students add $119 document fee in first semester ($37,002.25 first-semester nonresident total).',
    sources: [
      ['Official tuition / budget', 'https://registrar.berkeley.edu/tuition-fees/fee-schedule/'],
      ['Master of Engineering (MEng) EECS', 'https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/'],
    ],
    kind: 'MEng',
    orientation: 'Professional MEng · 1 year · Capstone · Leadership',
    funding: 'MEng is a professional/industry program; do not assume PhD-style funding. Specific MEng fellowships not verified on fee pages fetched; unresolved beyond fee schedule.',
    confidence: 'high',
    unresolved: ["Official MEng-specific living/COA band not captured (Haas MBA COA is separate)","Program-tied scholarships for MEng EECS not verified on pages retrieved","Fall 2027–28 rates not published"],
    asOf: '2026-10-20',
    deadline: 'Apps open (Fall 2027 cycle open) · Deadline 6 Jan 2027 · 8:59 p.m. PST (MEng EECS)',
    deadlineDate: '2027-01-06',
    academic: 'Full-time EECS MEng completed in one academic year (Fall and Spring) with a technical concentration, engineering leadership coursework, and a team capstone. Concentrations include Data Science, Computer Systems, and Visual Computing among others.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "EECS department no longer requires, accepts, or considers GRE scores (Apply page).",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "Pure EECS MEng; GMAT not used/accepted.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "Required if bachelor’s from non-English-primary country/region unless exempt. Fall 2027 Grad Division mins: tests Jun 1 2025–Jan 20 2026: total 90; on/after Jan 21 2026: total 5 with Speaking/Writing ≥4.5. iBT/Home only; no Duolingo/MyBest/ITP. Code 4833."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS/IELTS Online accepted (not Indicator/One Test Retake). Fall 2027: Jun 1 2025–Jan 20 2026 overall 7; on/after Jan 21 2026 overall 7 with Speaking/Writing ≥6.5."
        },
        "waiver": "Exempt if bachelor’s from country where English is primary in daily life and instruction; or U.S./U.S.-accredited English-instruction degree; or ≥1 year full-time academic coursework with B or better at regionally accredited U.S. institution (ESL/nonacademic courses do not qualify). Country table on Grad Division requirements page."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": 4,
        "detail": "MEng page: 3.0 minimum requirement; average admittee ~3.7. Grad Division: usually minimum 3.0 (B) on 4.0. Leave GPA blank if university outside USA."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "3 letters; mixture of academic and industry ideal; goals, accomplishments, technical and leadership skills."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose (why this program, what you will do, post-degree plans) plus Personal History Statement (background/path into field and how it supports success).",
        "alsoKnownAs": "Statement of Purpose / Personal History Statement"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not listed among required materials on EECS MEng Apply page (SOP, PHS, 3 LORs, transcripts, English if applicable)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload unofficial transcripts as PDFs; do not mail. Non-English/Spanish must be translated before upload. Official records handled per Grad Division after admit."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Timeline: January–February interviews only if admissions committee has additional questions."
      },
      "applicationFee": {
        "amountUsd": 135,
        "waivers": "U.S. citizens/current permanent residents with demonstrated financial need or eligible program participation may request waiver (Grad Division fee-waiver guidelines).",
        "detail": "Non-refundable $135 U.S. citizens/current PR; $155 all other applicants; plus 4.22% payment processing fee (Grad Division Fall 2027 requirements)."
      },
      "other": [
        "Degree route: MEng (professional/industry) — not research MS/PhD",
        "Fall 2027 deadline Jan 6, 2027 8:59pm PST; application open for Fall 2027",
        "Strong technical background equivalent to CS bachelor’s expected (programming, algorithms, data structures, systems, AI, theory)",
        "One academic year (Fall+Spring); concentrations include Data Science, Systems, Robotics, etc."
      ],
      "advice": "Program is MEng EECS (professional), not a research MS. GRE not accepted. Plan TOEFL/IELTS under Fall 2027 dual-scale rules. Interviews rare/by invitation only.",
      "sources": [
        [
          "MEng Apply",
          "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/apply/"
        ],
        [
          "MEng overview / admissions",
          "https://eecs.berkeley.edu/academics/graduate/industry-programs/meng/"
        ],
        [
          "Grad Division requirements (Fall 2027)",
          "https://grad.berkeley.edu/admissions/application-process/requirements/"
        ],
        [
          "Grad Division program listing (GRE No; deadline Jan 6 2027)",
          "https://grad.berkeley.edu/program/eecs-electrical-engineering-and-computer-sciences-meng/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'illinois-cs': {
    tuition: 40444,
    tuitionLabel: 'Academic-year tuition (MCS / Engineering, international or nonresident, Range I 12+ hours)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Registrar: Engineering and Engineering Related Programs (including Computer Science) — Nonresident or International Range I (12+ hours) $20,222/semester ($40,444 AY Fall+Spring). Resident Range I $10,636/semester ($21,272 AY). Range II (6–11 hours) nonresident/international $13,482/semester ($26,964 AY); Illinois Cost Calculator for MCS international at 9 credits matches Range II. Campus fees and living costs are extra. Online MCS uses a different per-credit schedule—not recorded here.',
    sources: [
      ['Official tuition / budget', 'https://www.registrar.illinois.edu/g-tuition-rates-2627/'],
      ['Credit-hour ranges', 'https://www.registrar.illinois.edu/g-tuition-cr-2627/'],
      ['MCS tuition page', 'https://siebelschool.illinois.edu/academics/graduate/professional-mcs/tuition-fees'],
      ['Cost calculator MCS international 9 cr', 'https://cost.illinois.edu/Home/Cost/I/G/10KS0112MCS/9/120268/120268'],
      ['Graduate FAQs', 'https://siebelschool.illinois.edu/admissions/graduate/faqs'],
      ['Application deadlines', 'https://siebelschool.illinois.edu/admissions/graduate/application-deadlines'],
      ['MCS program', 'https://siebelschool.illinois.edu/academics/graduate/professional-mcs'],
      ['Computer Science, MCS catalog 2026–27', 'https://catalog.illinois.edu/graduate/engineering/computer-science-mcs/'],
      ['Computer Science, MS catalog 2026–27', 'https://catalog.illinois.edu/graduate/engineering/computer-science-ms/'],
      ['M.S. Program', 'https://siebelschool.illinois.edu/academics/graduate/ms-program'],
    ],
    kind: 'MS / MCS',
    orientation: 'MCS or research MS · 32 credits · 8 tracks',
    funding: 'MCS: eligible to accept RA/TA if offered; opportunities limited and not guaranteed (Siebel MCS tuition page). Do not apply PhD funding policies to MCS/MS.',
    confidence: 'medium',
    unresolved: ["Which tuition schedule applies to research MS vs professional MCS for a given admit","Exact Fall 2027 rates","Intl eligibility for any named MCS scholarships beyond RA/TA statement"],
    asOf: '2026-10-20',
    deadline: 'MCS Urbana Fall: 1 May · 11:59 p.m. CT (annual month-day; year not labeled) · MS thesis Fall: 1 Dec · 11:59 p.m. CT',
    deadlineDate: null,
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Siebel School offers a 32-credit professional MCS (coursework-only; Urbana typically ≤3 consecutive semesters) and a separate 32-credit research MS (thesis via CS 599). Eight optional graduate tracks (AI, data science, security, etc.).',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Siebel School does not require GRE for any graduate programs. Scores recommended but not required; applicants may scan official score report PDF to application (official ETS report not required). MCS overview: no GRE required for admission.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not part of Siebel CS/MCS admissions; GRE is the only standardized test discussed.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "Illinois Graduate College English proficiency for admission (unless exempt). Full-status TOEFL iBT minimum 5.0 for scores dated after 2026-01-20 (103 prior to 2026-01-21); limited-status 4.0 (79 prior). Institution code 1836. Siebel also notes funding/TA speak minima separately."
        },
        "ielts": {
          "status": "required",
          "minScore": 7.5,
          "detail": "IELTS Academic full-status minimum 7.5; limited-status 6.5 (Graduate College). Send electronically to University of Illinois Urbana Champaign Graduate."
        },
        "waiver": "Exempt if post-secondary degree from U.S. or approved English-primary country within five years of proposed term; or ≥2 years post-secondary study or professional work in U.S./approved country within five years. Medium of instruction alone (if country not on exempt list) does not waive. Duolingo accepted for admission (115 limited / 135 full) but not for TA speak requirement."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Campus Graduate College: at least 3.0/4.0 in last two years of undergraduate study required for eligibility. MCS app-info recommends undergraduate GPA 3.2/4.0 or higher (recommended, not a hard MCS-only floor beyond campus rule)."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "MCS (Urbana/Chicago/Online): letters not required; will be considered if included (especially to justify experience in lieu of coursework). Research MS with thesis / PhD / MS Bioinformatics / BS-MS: three letters required. Checklist marks MCS LOR as None."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement of Purpose required (generally 1–2 pages: goals, background, work history, interests). Personal Statement also required for CS admissions (≤250 words).",
        "alsoKnownAs": "Academic Statement of Purpose; Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "CV/resume required as part of online application (education, jobs, research for MS/PhD, achievements, publications, awards, leadership)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload scanned unofficial transcripts (with grading scale) for each post-secondary institution; official credentials only if recommended for admission / after admit."
      },
      "interview": {
        "status": "unknown",
        "detail": "No interview requirement stated on MCS overview, MCS app-info, or Applications Process & Requirements pages reviewed."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "May qualify per Graduate College Application Fee Waivers; contact grad-admissions@siebelschool.illinois.edu with questions.",
        "detail": "Effective Spring 2026 cycle: $90 for all applicants (domestic and international), non-refundable, credit card with web application."
      },
      "other": [
        "Tracks: coursework MCS (campus Urbana, Chicago, Online) vs research MS with thesis—application materials differ (esp. LORs).",
        "MCS prereqs for non-CS bachelor's: OOP, data structures, algorithms, linear algebra, statistics/probability (or commensurate experience).",
        "Applicants already holding an equivalent CS/CE master's are not eligible for MS or MCS.",
        "Urbana/Chicago MCS Fall deadline May 1; Spring Oct 15 (CS MS Fall Dec 1)—confirm cycle on deadlines page.",
        "Personal Statement (≤250 words) is additional required essay beyond Academic SOP."
      ],
      "advice": "Given URL is professional MCS; research MS has stricter LOR (3). Report both under illinois-cs; site should distinguish MCS vs MS thesis checklists.",
      "sources": [
        [
          "MCS program overview",
          "https://siebelschool.illinois.edu/academics/graduate/professional-mcs"
        ],
        [
          "MCS Application Information",
          "https://siebelschool.illinois.edu/academics/graduate/professional-mcs/app-info"
        ],
        [
          "Applications Process & Requirements",
          "https://siebelschool.illinois.edu/admissions/graduate/applications-process-requirements"
        ],
        [
          "Application Checklist",
          "https://siebelschool.illinois.edu/admissions/graduate/application-checklist"
        ],
        [
          "Graduate FAQs",
          "https://siebelschool.illinois.edu/admissions/graduate/faqs"
        ],
        [
          "Illinois Grad College English Proficiency",
          "https://grad.illinois.edu/admissions/instructions/04c"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cornell-cs': {
    tuition: 29500,
    tuitionLabel: 'Academic-year tuition (Endowed research master’s MS)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Bursar: Endowed Research Master’s (M.S. and listed M.A./non-degree) $14,750/semester, $29,500/year (2026–27). CS MS admitted students receive full tuition, stipend, and health insurance via required TA-ships each of four semesters—so billed tuition is typically covered for admitted students. Separately, M.Eng is Professional Tier 1: $36,973/semester, $73,946/year (self-supported).',
    sources: [
      ['Official tuition / budget', 'https://bursar.cornell.edu/students-parents/tuition-rates-and-fees'],
      ['CS MS apply', 'https://www.cs.cornell.edu/master-science-computer-science/apply'],
      ['MEng apply', 'https://www.cs.cornell.edu/master-engineering-computer-science/apply'],
      ['Master of Science in Computer Science', 'https://www.cs.cornell.edu/master-science-computer-science'],
    ],
    kind: 'MS / MEng',
    orientation: 'MS research thesis · or MEng professional · Distinct routes',
    funding: 'Program pages emphasize distinct MS vs M.Eng routes; funding policies differ — do not assume PhD funding for either. Specific M.Eng/MS CS assistantship guarantees not verified on bursar page.',
    confidence: 'high',
    unresolved: ["Official living/COA band for Ithaca M.Eng/MS CS not fully captured","Program-tied scholarships for CS M.Eng/MS","Fall 2027 rates"],
    asOf: '2026-10-20',
    deadline: 'MS: 18 Jan for Fall (month-day as posted; year/timezone not labeled) · MEng Fall: 1 Feb; MEng Spring: 1 Oct',
    deadlineDate: null,
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Research MS is a selective four-semester (≈2-year) degree: 34 credits with 6–12 thesis credits, an outside minor, and a written thesis + oral. Professional MEng is a separate ~1-year coursework + capstone route.',
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "MS Apply: submitted GRE scores are masked and will not be reviewed. MEng Apply: GRE no longer required; submitting scores has no impact on decision.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "CS MS/MEng do not use GMAT.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Intl applicants must meet Grad School section mins (new scale): Speaking ≥5.5, Reading ≥4, Listening ≥3.5, Writing ≥4. CS MS and CS MEng both require these section minimums. Institution 2098; no dept code. Only TOEFL/IELTS accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Overall band ≥7.0 required (MS and MEng apply pages)."
        },
        "waiver": "See Cornell Graduate Admissions English Language Proficiency Requirements for exemptions and timelines."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum on CS MS/MEng apply pages. Early MEng Admit pathway notes cumulative undergrad GPA ≥2.7 minimum to apply (Cornell undergrads only)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "MS: 3 letters including ≥1 addressing expository skills and classroom/TA ability. MEng: 2 letters (recent grads: ≥2 academic; current Cornell CS: 1 letter + filler). Dual-route note: counts differ by program."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "MS: essay explaining how degree and anticipated thesis area fit career plans. MEng: Statement of Purpose ≤1000 words (interests, why Cornell CS MEng, qualifications, goals) plus Personal Statement ≤1000 words.",
        "alsoKnownAs": "Essay / Statement of Purpose / Personal Statement (MEng)"
      },
      "resume": {
        "status": "required",
        "detail": "Required for CS MEng (explicit on MEng Apply). CS MS Apply page does not list resume; MEng path requires current resume/CV."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts after latest term grades posted; official electronic transcripts before matriculation (Cornell undergrads exempt from that step)."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on CS MS or MEng apply pages."
      },
      "applicationFee": {
        "amountUsd": 105,
        "waivers": "MEng Duffield guide: application fee waivers generally not available for MEng applicants. Confirm MS Grad School waiver policy separately.",
        "detail": "$105 online at submit (Cornell MEng application guide; standard Grad School fee for Ithaca graduate applications)."
      },
      "other": [
        "TWO ROUTES: Research MS (4 semesters, TA-funded, strong preference Cornell undergrads with excellent TA/research record; deadline Jan 18 Fall) vs professional MEng (~2 semesters, self-funded; Fall Feb 1 / Spring Oct 1)",
        "MS is not a stepping stone to Cornell CS PhD",
        "Prereqs typically CS 2110/3110/2800/3410 equivalents"
      ],
      "advice": "External industry-oriented applicants usually target MEng. Research MS is small and prefers Cornell undergrads with TA excellence. GRE not considered.",
      "sources": [
        [
          "CS MS Apply",
          "https://www.cs.cornell.edu/master-science-computer-science/apply"
        ],
        [
          "CS MEng Apply",
          "https://www.cs.cornell.edu/master-engineering-computer-science/apply"
        ],
        [
          "MEng application guide (fee $105)",
          "https://www.duffield.cornell.edu/meng/admissions-meng-students/application-guide/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'gatech-cs': {
    tuition: 33080,
    tuitionLabel: 'Academic-year tuition (campus Master & PhD, out-of-country, 12+ hours × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Bursar 2026–27 Atlanta campus graduate Master & PhD Candidates: In-State $7,280/semester (12+ hrs) or $607/hr (1–11); Out-of-State $16,073/semester (12+) or $1,341/hr; Out-of-Country $16,540/semester (12+) or $1,379/hr. International-relevant figure uses Out-of-Country full-time: $16,540 × 2 = $33,080 AY. Mandatory student fees $608/semester at 4+ credits not included in the tuition figure. OMSCS ($227/hr) is excluded.',
    sources: [
      ['Official tuition / budget', 'https://bursar.gatech.edu/student/tuition/su27/su27_totals.pdf'],
      ['MSCS specializations', 'https://www.cc.gatech.edu/ms-computer-science-specializations'],
      ['Gatech Bursar Tuition & Fees', 'https://bursar.gatech.edu/tuition-fees'],
      ['Fall 2026 Tuition and Fee Rates PDF', 'https://bursar.gatech.edu/sites/default/files/2026-07/fa26_totals_page_0.pdf'],
      ['Graduate Costs (OSFA)', 'https://finaid.gatech.edu/costs/graduate-costs'],
      ['GT GradApp program info (MS CS deadlines)', 'https://gradapp.gatech.edu/portal/program-info?cmd=view-program&program=86097380-be9a-4631-6407-50f3d959f466'],
      ['MS CS admission requirements', 'https://www.cc.gatech.edu/ms-computer-science-admission-requirements'],
      ['MS Computer Science program', 'https://www.cc.gatech.edu/degree-programs/master-science-computer-science'],
      ['MSCS catalog', 'https://catalog.gatech.edu/programs/computer-science-ms/'],
    ],
    funding: 'Campus MS funding not automatic; GRA/GTA pay reduced tuition per BOR policy when appointed. Do not apply PhD funding assumptions to MS.',
    confidence: 'high',
    unresolved: ["Confirm Spring 2027 identical Out-of-Country 12+ rate","Which OSFA living table year (page shows multiple blocks)","Campus MS program-tied scholarships"],
    asOf: '2026-10-20',
    deadline: '1 Feb 2027 · 11:59 p.m. ET (Atlanta campus MS CS — Fall 2027; not OMSCS)',
    deadlineDate: '2027-02-01',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Campus MSCS is 30 hours with one required specialization (11 areas; specialization coursework 15–18 hours). Course, Project (9h), or Thesis (12h) options. Complete within six years; keep distinct from OMSCS.',
    orientation: '30 hours · 1 specialization · Course / project / thesis',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required for MSCS; if provided, scores will be considered. Especially helpful without relevant degree, >10 years out of school, or if concerned about application strength (CoC admission requirements).",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Campus MSCS does not list GMAT; GRE optional only.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "Department requires TOEFL ≥100 on older 0–120 scale; effective Jan 2026 new scale requirement 5.0. See Institute English Proficiency Requirements for who must submit."
        },
        "ielts": {
          "status": "required",
          "minScore": 7.5,
          "detail": "IELTS accepted: overall ≥7.5; section mins Reading 6.5, Listening 6.5, Speaking 6.5, Writing 5.5."
        },
        "waiver": "Per Institute English Proficiency Requirements (who is exempt); confirm on Grad Education English proficiency pages."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3,
        "scale": 4,
        "detail": "Desirable minimum GPA 3.0/4.0; most candidates score higher."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three recommendation letters requested within online application."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of purpose reviewed carefully (CoC admission requirements narrative); answer essay/SOP questions in application.",
        "alsoKnownAs": "Statement of purpose"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not explicitly enumerated on CoC MSCS admission-requirements page (SOP, LORs, tests, GPA highlighted)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official academic credentials/transcripts per Grad Education ready-to-apply guidance; scan officially issued documents."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on CoC MSCS admission-requirements page."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "Waivers for outstanding undergrad achievement / affiliated recruitment events; intl applicants must complete materials and English proficiency before waiver request.",
        "detail": "As of Aug 1 2023: $95 domestic / $105 international per application (non-refundable). amountUsd reflects domestic; intl pay 105."
      },
      "other": [
        "On-campus MSCS — distinct from OMSCS",
        "Fall admit only; deadline Feb 1",
        "Strong undergrad CS background including C programming highly recommended"
      ],
      "advice": "Do not confuse with OMSCS. GRE optional≠waived. IELTS bar 7.5 is high. Confirm resume upload prompts in GradApp.",
      "sources": [
        [
          "CoC MSCS admission requirements",
          "https://www.cc.gatech.edu/ms-computer-science-admission-requirements"
        ],
        [
          "Grad Education domestic ready-to-apply (fee $95)",
          "https://grad.gatech.edu/admissions/domestic/ready-to-apply"
        ],
        [
          "Grad Education international ready-to-apply (fee $105)",
          "https://grad.gatech.edu/admissions/international/ready-to-apply"
        ],
        [
          "Grad Education fee FAQ",
          "https://grad.gatech.edu/faq/knowledgebase.php?article=120"
        ],
        [
          "MSCS program page",
          "https://www.cc.gatech.edu/degree-programs/master-science-computer-science"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'texas-cs': {
    tuition: 18162,
    tuitionLabel: 'Academic-year tuition and fees (Natural Sciences nonresident graduate, 9 hours × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Graduate Nonresident Natural Sciences: 9 semester hours = $9,081 per semester → $18,162 for Fall+Spring. At 12 hours: $10,970/semester. Separately, the catalog lists Option III Computer Science (MSCompSci) total program fee estimate $10,000 (same resident/nonresident)—commonly associated with the online/CDSO pathway. Confirm with UTCS which schedule applies to a specific on-campus research MS offer.',
    sources: [
      ['Official tuition / budget', 'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/'],
      ['Tuition rates hub', 'https://onestop.utexas.edu/managing-costs/cost-tuition-rates/tuition-rates/'],
      ['PhD and MS research degrees', 'https://www.cs.utexas.edu/graduate/research-degrees'],
      ['Cost & aid', 'https://www.cs.utexas.edu/graduate/cost-and-aid'],
      ['UT tuition tables PDF (catalog)', 'https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/tables-tuition-for-fall-and-spring.pdf'],
      ['UTCS graduate apply / important dates', 'https://www.cs.utexas.edu/graduate/apply'],
      ['UT Graduate degrees & programs (CS Fall only; Dec. 15)', 'https://graduate.utexas.edu/degrees-programs'],
    ],
    funding: 'Master’s: no automatic funding. Teaching/research positions may be available; summer FoCS internships mentioned. PhD funding must not be applied to MS.',
    confidence: 'medium',
    unresolved: ["Confirm exact credit load used for COA packaging","Whether MSCompSci Option III $10,000 fee applies to the research MS route and how it stacks with Natural Sciences rates","Official graduate living-band for CS MS","Fall 2027 rates"],
    asOf: '2026-10-26',
    deadline: 'Apps open 15 Oct · Deadline 15 Dec (Fall only; month-day as posted — year not labeled on UTCS apply page)',
    deadlineDate: null,
    academic: 'On-campus research MSCS: breadth (3) + minor (2), then coursework (5 electives) or thesis (3 electives + 2 thesis courses); typically ~10 courses / ~2 years. Distinct from the online MSCS.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: 'Research MSCS · Coursework or thesis · ~2 years',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "CS Apply page Optional Materials: GRE General Score may be submitted if it would strengthen the application; opting out does not adversely impact. Official scores if submitting.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS; GMAT not listed on CS Apply page.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "International applicants must submit official TOEFL, IELTS, or DET unless exempt. Grad Admissions minima: TOEFL 79 (120 scale) or 4 (6-point scale) iBT. ETS code 6882. Institutional TOEFL ITP not accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic overall band 6.5 minimum. General Training not accepted. Electronic delivery to University of Texas at Austin."
        },
        "waiver": "Exempt if from a qualifying country list, or hold a bachelor’s from a U.S. or qualifying-country institution. Master’s-only from such institution does not waive. India is on UT qualifying-country list (bachelor’s from India can exempt)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "GPA ≥3.0 in upper-division courses and any graduate work completed required for eligibility. Competitive applicants typically have above-average GPA in CS coursework."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "At least three recommendation letters via MyStatus; supervisors or academic references. LOR deadline Dec 20 (application Dec 15)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "SoP on intellectual motivation, goals, experiences; why graduate study and why UTCS. See department Statement of Purpose Guidelines.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Current CS Apply page lists required materials (Grad Office materials, ≥3 LORs, SoP) and optional GRE only; does not name resume/CV as required or optional. Older department checklist PDFs mentioned optional CV—left not_stated for current cycle."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from every senior college per UT Graduate Admissions how-to-apply (MyStatus upload / SPEEDE / Parchment, etc.). Bachelor’s from regionally accredited U.S. institution or comparable foreign degree."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on CS Apply page."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Need-based waivers for U.S. citizens/PR first-time graduate applicants only (documentation via gradfeewaiver@austin.utexas.edu). Not available for international citizens.",
        "detail": "UT Graduate Admissions: U.S. graduate $65 / International graduate $90 (non-MBA/MPA). amountUsd = international rate."
      },
      "other": [
        "Application opens Oct 15; deadline Dec 15; LORs Dec 20; MS decisions ~Apr 1.",
        "On-campus research MS (thesis or coursework) distinct from 100% online MSCS.",
        "DET accepted university-wide (min 115) unless program prefers otherwise—CS Apply page silent on DET preference.",
        "Must also complete UT Office of Graduate & Postdoctoral Studies required application materials."
      ],
      "advice": "Research-degrees page is curriculum/overview—use /graduate/apply for checklist. Optional GRE ≠ waived. Confirm resume upload expectations in live portal.",
      "sources": [
        [
          "UTCS Apply (materials, GRE optional, GPA, LORs, SoP)",
          "https://www.cs.utexas.edu/graduate/apply"
        ],
        [
          "UT Graduate Admissions How to Apply (fee)",
          "https://graduate.utexas.edu/admissions/apply"
        ],
        [
          "UT Graduate Admissions International English",
          "https://graduate.utexas.edu/admissions/apply/international"
        ],
        [
          "UTCS Research Degrees overview",
          "https://www.cs.utexas.edu/graduate/research-degrees"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'michigan-cs': {
    tuition: 68038,
    tuitionLabel: 'Academic-year tuition (College of Engineering graduate, nonresident full-time × 2 full terms)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Registrar College of Engineering Graduate Full Term 2026–27: Michigan Non-Resident 9+ (Full-Time) $34,019 per full term; Michigan Resident $18,308. Typical academic year = Fall + Winter full terms → nonresident $68,038. CSE MS/MSE uses Engineering graduate rates. Master’s funding is not guaranteed at admission.',
    sources: [
      ['Official tuition / budget', 'https://ro.umich.edu/tuition-residency/tuition-fees/2026-2027/graduate/full-term/college-engineering-graduate-full-term'],
      ['Master’s in CSE', 'https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/'],
      ['CSE graduate admissions', 'https://cse.engin.umich.edu/academics/graduate/admissions/'],
      ['CSE how to apply', 'https://cse.engin.umich.edu/academics/graduate/admissions/apply/'],
    ],
    funding: 'CSE master’s pages historically note limited funding; do not assume PhD support. Specific 2026–27 MS funding guarantees not verified on tuition page.',
    confidence: 'high',
    unresolved: ["Mandatory fees + international student fee stack for CSE MS","Official living/COA for Engineering master’s","Program-tied MS scholarships/assistantships details","2027–28 rates (posted ~July 2027 per Ross MBA note pattern)"],
    asOf: '2026-10-20',
    deadline: 'Apps reopen mid-Sep (Rackham; late Aug/early Sep noted) · Master\'s deadline 15 Jan · 11:59 p.m. ET (FA 2027 cycle referenced on page)',
    deadlineDate: '2027-01-15',
    academic: 'CSE master’s requires 30 credits; thesis optional; normally finished in 1.5–2 years. MS vs MSE is primarily naming/eligibility by prior engineering bachelor’s.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: '30 credits · Optional thesis · 1.5–2 years',
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "CSE How to Apply / FAQs: GRE scores are neither required nor considered / not expected; committee will not consider any submitted scores.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not used for CSE Rackham MS/MSE admissions.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 84,
          "detail": "Non-native English speakers must demonstrate proficiency unless Rackham exemption met. Michigan Engineering Academic Services minima (College page CSE applicants are directed to follow): TOEFL iBT overall 84 before 2026-01-21 and 4.5 on/after 2026-01-21; ETS code 1839. CSE apply page points to Rackham exemptions."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "Academic IELTS minimum overall 6.5 (Michigan Engineering Academic Services English proficiency table). Official electronic scores to University of Michigan–Ann Arbor."
        },
        "waiver": "Rackham exemptions include: native English speaker; Puerto Rico applicant; completed all undergraduate education and earned undergraduate degree at English-only instruction institution; completed all graduate education and earned graduate degree at English-only instruction institution; current U-M student. One-year research-only master's typically does not qualify."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3.5,
        "scale": "4.0",
        "detail": "CSE Graduate Admissions: successful applicants usually have undergraduate GPA of at least 3.5/4.0 (not a hard requirement)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters via Rackham online recommendation system only (no email/mail/Interfolio). Suggested ≥2 from academia."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement of Purpose (≤3 pages) on academic/research background, career goals, and fit with CSE. Separate Personal Statement (≤500 words) also required—not identical to SOP.",
        "alsoKnownAs": "statement of purpose; personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume highlighting education, work, research publications, teaching, professional activities, volunteer service, honors/awards."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload electronic official transcripts for each bachelor’s/master’s/professional/doctoral degree earned or in progress; official to Rackham if recommended/admitted. Non-U.S.: follow Rackham country credentials guidance."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CSE How to Apply checklist or admissions FAQs reviewed."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Rackham fee waivers for U.S. citizens/permanent residents with demonstrated financial need (Pell and/or SAI <$1,500); request before submission. Individual programs may also offer waivers.",
        "detail": "Rackham: $75 U.S. citizens/permanent residents; $90 non-U.S. citizens; $10 current Rackham students. amountUsd records international rate commonly used for intl CS applicants."
      },
      "other": [
        "Master's (MS/MSE) deadline January 15 (Fall only); PhD Dec 15; SUGS separate.",
        "MS vs MSE: same requirements; MSE only if bachelor's in engineering.",
        "Admission to Master's typically without departmental financial aid.",
        "Cannot hold same CS MS/PhD already earned elsewhere and re-apply for same degree at Michigan."
      ],
      "advice": "GRE is not_accepted (not considered), not merely optional. Include both SOP and Personal Statement.",
      "sources": [
        [
          "CSE How to Apply",
          "https://cse.engin.umich.edu/academics/graduate/admissions/apply/"
        ],
        [
          "CSE Graduate Admissions",
          "https://cse.engin.umich.edu/academics/graduate/admissions/"
        ],
        [
          "CSE Graduate Admissions FAQs",
          "https://cse.engin.umich.edu/academics/graduate/admissions/faqs/"
        ],
        [
          "Master's in CSE overview",
          "https://cse.engin.umich.edu/academics/graduate/graduate-programs/masters-in-cse/"
        ],
        [
          "Rackham Application Fee",
          "https://rackham.umich.edu/admissions/applying/application-fee-and-payment/"
        ],
        [
          "Rackham Tests / English",
          "https://rackham.umich.edu/admissions/applying/tests/"
        ],
        [
          "Michigan Engineering Prepare Application Materials (English minima)",
          "https://academicservices.engin.umich.edu/prepare-your-application-materials/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ucsd-cs': {
    tuition: 38087.17,
    tuitionLabel: 'Academic-year registration fees total (graduate nonresident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UCSD Graduate Registration Fees 2026–27: California Nonresidents annual total $38,087.17 (includes systemwide tuition $13,722, Student Services Fee $1,344, campus fees, mandatory health insurance $6,660, and Nonresident Supplemental Tuition $15,102). California Residents annual total $22,985.17. CSE MS uses the standard graduate schedule (not self-supporting). One-time Enrollment Services Fee $115 is included in the published Fall/annual nonresident total. International visa administration fee $200 is separate.',
    sources: [
      ['Official tuition / budget', 'https://students.ucsd.edu/finances/fees/registration/2026-27/graduate.html'],
      ['MS program', 'https://cse.ucsd.edu/graduate/degree-programs/ms-program'],
      ['CSE Financial Opportunities', 'https://cse.ucsd.edu/graduate/financial-opportunities'],
      ['CSE graduate admissions', 'https://cse.ucsd.edu/graduate/admissions'],
      ['UCSD Grad application portal note', 'https://connect.grad.ucsd.edu/apply/'],
    ],
    funding: 'CSE: financial opportunities page lists TA info; MS funding not guaranteed. Do not apply PhD funding policies.',
    confidence: 'high',
    unresolved: ["FAO full COA living band URL amounts not captured in this pass","Fall 2027–28 fees"],
    asOf: '2026-10-20',
    deadline: 'Apps open 2 Sep 2026 · Deadline 16 Dec 2026 · 11:59 p.m. PST (Fall 2027)',
    deadlineDate: '2026-12-16',
    academic: 'UCSD CSE MS offers Thesis, Comprehensive Standard, or Comprehensive Interdisciplinary plans with CS or Computer Engineering majors. Breadth (12 units) + Depth (12 units) plus electives/research; thesis needs 8–12 units CSE 298.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: 'Thesis or comprehensive · Breadth + depth · ≥3 quarters',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required for PhD and MS applications for Fall 2027; applicants may still submit valid scores (ETS code 4836).",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of CSE graduate admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 85,
          "detail": "GEPA university-wide minimum TOEFL iBT 85 (prior scale) or 4.5 (new iBT scale). CSE checklist points to GEPA English page; code 4836. Required for international applicants unless WHED/U.S. exemption."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "GEPA university-wide minimum IELTS Academic Band Score 7."
        },
        "waiver": "Exempt if earned/will earn bachelor's, master's, or doctoral degree with grades of B (3.0) or better from a regionally accredited U.S. institution where English is sole language of instruction, or a foreign institution listing English as sole language of instruction on IAU WHED. DET (min 120) and PTE Academic (min 65) also accepted per GEPA."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "At least a B average (3.0 GPA) or equivalent required for admission; bachelor's or equivalent from accredited/recognized institution."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters required (additional allowed); typically academic/research advisors; professional/industry referees also acceptable."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "SoP submitted online; no specific word limit—address CS/CE accomplishments, qualifications, and graduate goals. Updates after submission not granted.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV upload required under Resume/CV section; post-submission updates not granted."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts uploaded for review; official transcripts to Graduate Division if offered admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CSE Admissions or Application Checklist pages."
      },
      "applicationFee": {
        "amountUsd": 135,
        "waivers": "GEPA need-based waivers for U.S. citizens/PRs/undocumented; international applicants not eligible for GEPA waiver. CSE offers limited fee waivers for international PhD applicants only (not MS)—request by Dec 2, 2026 3pm PST for Fall 2027 cycle.",
        "detail": "$135 U.S. citizens/PRs/undocumented; $155 international. Fall 2027 application window Sep 2–Dec 16, 2026 11:59pm PST."
      },
      "other": [
        "Fall quarter only; MS and PhD mutually exclusive (apply to one).",
        "BS preferred in CS/CE/EE/math but not required if minimum CSE background completed.",
        "Duplication of advanced degrees normally not permitted."
      ],
      "advice": "Use CSE Admissions + Application Checklist for Fall 2027; do not rely on MS curriculum page alone. Optional ≠ waived for GRE.",
      "sources": [
        [
          "UCSD CSE Graduate Admissions (Fall 2027)",
          "https://cse.ucsd.edu/graduate/admissions"
        ],
        [
          "CSE Graduate Application Checklist",
          "https://cse.ucsd.edu/graduate/cse-graduate-application-checklist"
        ],
        [
          "UCSD GEPA English Language Proficiency",
          "https://grad.ucsd.edu/admissions/requirements/international-students/english-proficiency.html"
        ],
        [
          "UCSD GEPA Application Fee",
          "https://grad.ucsd.edu/admissions/requirements/application-fee-and-fee-waiver/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'maryland-cs': {
    tuition: 34488,
    tuitionLabel: 'Academic-year tuition (graduate nonresident, 9 credits × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UMD Student Financial Services Fall 2026 & Spring 2027: graduate Non-Resident tuition $1,916/credit (Resident $913). Academic-year reference at 9 credits/semester (mandatory campus-fee plateau) = $17,244 × 2 = $34,488. Campus fees for 9+ credits: $738/semester ($1,476 AY) not included in the tuition figure. Extended Studies CS professional page lists the same out-of-state per-credit rate and estimates 30-credit total master’s tuition $57,480 (out-of-state). SHIP (~$2,939 AY) and international student fee $125/semester are separate. MS is 30 credits.',
    sources: [
      ['Official tuition / budget', 'https://billpay.umd.edu/GraduateTuition'],
      ['Extended Studies CS tuition', 'https://exst.umd.edu/professionals-post-baccalaureates/professional-graduate-programs/computer-science/tuition-and-fees'],
      ['MS prospective / catalog', 'https://www.cs.umd.edu/grad/ms-catalog'],
      ['Grad apply', 'https://www.cs.umd.edu/grad/apply'],
      ['CMSC catalog — different MS route', 'https://academiccatalog.umd.edu/graduate/programs/computer-science-cmsc/computer-science-ms/'],
      ['Rank 12 cross-check · May 2026', 'https://science.umd.edu/newsletters/cs/2026-05.html'],
      ['M.S. degree requirements', 'https://www.cs.umd.edu/grad/ms-policy-manual'],
      ['Catalog CSMS', 'https://academiccatalog.umd.edu/graduate/programs/computer-science-csms/computer-science-ms/'],
    ],
    availability: 'CSMS route · confirm catalog distinction',
    availabilityType: 'review',
    deadline: '4 Dec 2026 · MS application page',
    deadlineDate: '2026-12-04',
    funding: 'CS apply page; financial aid specifics for MS not fully verified. Do not assume PhD funding.',
    confidence: 'high',
    unresolved: ["Official FAO living-band dollar amounts (page referenced but not extracted)","Program-tied CS MS scholarships","2027–28 rates"],
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UMD CS MS is 30 credits with thesis (6 CMSC 799) or non-thesis scholarly paper. Four qualifying courses across four of eight areas; complete within five years.',
    orientation: '30 credits · Thesis or scholarly paper · 8 areas',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "CS Applying for Admission: GRE scores are not required. Holistic review.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not part of UMD CS graduate application materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 96,
          "detail": "Applicants whose native language is not English must submit official TOEFL or IELTS from the testing agency (self-reported not accepted). Grad School full-enrollment TOEFL iBT: Total 96 with section minima Reading 26 / Listening 24 / Speaking 22 / Writing 24 for tests on/before 2026-01-20; Overall 5 with section minima Reading/Listening/Writing 5 and Speaking 4.5 for tests on/after 2026-01-21. Code 5814."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic full enrollment: Overall 7; Reading/Listening/Writing 7; Speaking 6.5 (Graduate School). Electronic scores to UMD Graduate School e-download account."
        },
        "waiver": "Exempt if degree from regionally accredited U.S. institution or recognized institution in Grad School English-speaking countries list (must have studied in-country, not online/branch campus). CS apply page points to Grad School admissions for details."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA stated on CS apply page; holistic review. Competitive applicants typically show strong academic record / bachelor's in CS or closely related field."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters from individuals qualified to assess academic or research potential. Letter writers have two weeks past Dec 4, 2026 deadline to submit."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement describing academic background, research interests, and goals.",
        "alsoKnownAs": "statement of purpose / personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Current CV detailing academic and professional experience."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from all colleges attended; upload unofficial initially; official upon admission. Abroad: unofficial translations with application; certified official upon admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CS Applying for Admission checklist."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Department does not offer fee waivers; may be available through UMD Graduate School for eligible applicants.",
        "detail": "$75 non-refundable per program application."
      },
      "other": [
        "Program code CSMS (M.S.) vs CMSC (Ph.D.). Portal opens Jul 1, 2026; closes Dec 4, 2026; Fall entry only.",
        "Given URL ms-policy-manual is degree/policy for enrolled MS students—not admissions checklist; admissions facts taken from /grad/apply.",
        "Local note flagged PhD-en-route MS in catalog; CSMS remains listed as MS application code on admissions page—confirm route with department.",
        "Recommended prereq coursework includes algorithms, data structures, advanced CS (e.g. CMSC 330/420/451) and calculus/linear algebra."
      ],
      "advice": "Use /grad/apply for applicationRequirements; treat ms-policy-manual as degree rules only.",
      "sources": [
        [
          "UMD CS Applying for Admission",
          "https://www.cs.umd.edu/grad/apply"
        ],
        [
          "UMD CS M.S. Degree Requirements (policy manual)",
          "https://www.cs.umd.edu/grad/ms-policy-manual"
        ],
        [
          "UMD Graduate School English Language Proficiency",
          "https://gradschool.umd.edu/admissions/english-language-proficiency-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'columbia-cs': {
    tuition: 67728,
    tuitionLabel: 'Academic-year tuition (SEAS MS, $2,822/point × 12 points × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Columbia Engineering Graduate Tuition bulletin and SFS Graduate Engineering COA 2026–27: M.S. tuition $2,822 per credit/point. Full-time COA budgets 12 points/semester → $33,864/semester → $67,728 AY Fall+Spring. A typical 30-credit MS CS totals $84,660 in tuition across the degree (pace varies). Mandatory fees in the COA (health insurance, health service, university services, SEAS activities, document fee) and living costs are separate; CS is not listed with the IEOR/AI program fee.',
    sources: [
      ['Official tuition / budget', 'https://sfs.columbia.edu/content/graduate-engineering-cost-attendance'],
      ['SEAS graduate tuition bulletin', 'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/'],
      ['MS overview', 'https://www.cs.columbia.edu/education/ms/'],
      ['CS Admissions (MS deadlines table)', 'https://www.cs.columbia.edu/education/admissions8/'],
      ['MS Program Application FAQ', 'https://www.cs.columbia.edu/education/ms/appfaq/'],
      ['CVN Computer Science Master\'s (Fall 2027 / Spring 2027 year-labeled)', 'https://cvn.columbia.edu/content/computer-science-masters-degree'],
      ['MS requirements FAQ', 'https://www.cs.columbia.edu/education/ms/regfaq/'],
    ],
    orientation: '30 points · Pathways · ~3 semesters',
    funding: 'MS pathways page; department funding for MS not verified as guaranteed. Do not apply PhD funding.',
    confidence: 'medium',
    unresolved: ["Official Engineering COA living/fees table (fetch blocked/timeout)","Typical credits per academic year for billing","MS-specific scholarships","Fall 2027 rate"],
    asOf: '2026-10-20',
    deadline: 'Fall priority 15 Jan · Fall final/regular 15 Feb 2027 (CVN year-labeled for Fall 2027) · Spring 15 Oct',
    deadlineDate: '2027-02-15',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Columbia CS MS: ≥30 points, designed for ~3 semesters, with breadth, PDL, and ≥6 points at 6000-level. Eight faculty pathways plus Personalized/Thesis by invite.',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Fall 2027 Engineering brochure: GRE scores optional for 2027. CS FAQ points to SEAS application-requirements for official GRE policy. Code 2111.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "CS MS uses GRE optional policy; GMAT not listed among CS/SEAS MS materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 101,
          "detail": "TOEFL, IELTS, or PTE Academic required per CS FAQ unless SEAS exception. Recommended TOEFL iBT total 101 (recommended, not hard floor in FAQ). DET also listed on 2027 brochure. Code 2111. Scores must remain valid through start of classes."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Recommended IELTS 7 for admission (CS FAQ). Enter TRF / e-download to Columbia."
        },
        "waiver": "See SEAS policy for exceptions (e.g., degree from exempt countries); contact seasgradmit@columbia.edu. Brochure lists TOEFL/IELTS/DET/PTE if applicable."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA to apply; successful applicants typically GPA ≥3.5 (CS FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters of recommendation (SEAS Fall 2027 brochure Application Requirements). Electronic submission required."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal Statement (CS FAQ: typically 250–1000 words preferred; topics include reasons for program, experience, career goals). Listed on SEAS brochure.",
        "alsoKnownAs": "Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume or CV required (SEAS Fall 2027 brochure)."
      },
      "transcripts": {
        "status": "required",
        "detail": "University transcripts required (SEAS brochure). Non-English transcript policy administered by SEAS GSA."
      },
      "interview": {
        "status": "required",
        "detail": "Video Interview required for MS programs (SEAS Fall 2027 brochure)."
      },
      "applicationFee": {
        "amountUsd": 85,
        "waivers": "Confirm current SEAS waiver policy on application portal / admissions FAQs.",
        "detail": "$85 application fee (SEAS Fall 2027 brochure)."
      },
      "other": [
        "Fall priority Jan 15 / final Feb 15; Spring Oct 15",
        "Non-CS undergrad: typically ≥4 CS foundation/programming courses + 2 math, or Bridge pathway",
        "No Summer admit; Columbia does not defer admission"
      ],
      "advice": "Complete video interview. GRE optional for 2027. Prefer Jan 15 priority deadline.",
      "sources": [
        [
          "CS MS Application FAQ",
          "https://www.cs.columbia.edu/education/ms/appfaq/"
        ],
        [
          "SEAS Fall 2027 brochure (PDF)",
          "https://www.engineering.columbia.edu/sites/default/files/2026-09/Tri-fold_9-22-26.pdf"
        ],
        [
          "SEAS application requirements (official pointer)",
          "https://www.gradengineering.columbia.edu/graduate-admissions/application-requirements"
        ],
        [
          "CS MS program",
          "https://www.cs.columbia.edu/education/ms/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'purdue-cs': {
    tuition: 29918,
    tuitionLabel: 'Academic-year tuition and mandatory fees (CS & Engineering graduate, nonresident, 8+ hours × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Purdue Bursar Graduate Tuition and Fees 2026–27: Computer Science & Engineering flat rate (8+ credit hours) Non-Resident sub-total tuition $14,959/semester → $29,918 AY (includes General Service, Fitness/Wellness, Student Activity, Nonresident Tuition, and Differential General Service $562/semester). Indiana Resident CS&E sub-total $5,558/semester ($11,116 AY). International students add International Fee $200/semester ($400 AY) on top of the nonresident CS&E total ($15,159/semester; $30,318 AY). Separately, Professional Master’s “MA in Computer Science” is billed per credit ($1,413.25 nonresident/international; 30-credit estimate $42,397.50)—not used here; the catalog master’s curriculum page is the standard on-campus MS. Living costs extra.',
    sources: [
      ['Official tuition / budget', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/graduate-tuition-and-fees-2026-2027/'],
      ['Professional master’s fees (alternate schedule)', 'https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/professional-masters-program-fees-2026-2027/'],
      ['Master\'s program curriculum', 'https://www.cs.purdue.edu/graduate/curriculum/masters.html'],
      ['Application Steps and Process (Fall 2027 / Spring 2027 dates)', 'https://cs.purdue.edu/graduate/admission/steps.html'],
      ['Admission FAQ (Dec 1 / Oct 1 month-day)', 'https://www.cs.purdue.edu/graduate/admission/faq-application.html'],
    ],
    deadline: 'Fall 2027 start — 1 Dec 2026 · Spring 2027 start — 1 Oct 2026 (MS and PhD; West Lafayette)',
    deadlineDate: '2026-12-01',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Purdue CS MS: typically 3–4 semesters. Non-thesis 10 courses or thesis 8 courses + CS 69800. Required cores in Systems I/II and Algorithms plus breadth across areas.',
    orientation: '10 courses or thesis · Systems + algorithms cores · 3–4 semesters',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "CS Admissions: GRE is NOT required. FAQ: GRE scores are not required by the CS Admissions Committee.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS MS; GMAT not listed among CS application materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "Intl applicants whose native language is not English must demonstrate proficiency by deadline. University OGSPS minimums: TOEFL iBT total 80 (W18/S18/L14/R19) for exams before Jan 21, 2026; after that date overall 4.0 with section floors W4.0/S3.5/L3.5/R4.0. CS recommends competitive TOEFL 100 with no subscale <22 (legacy) or no subscale <4.5 (new scale). Code 1631 dept 78. Self-report + official ETS."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "University IELTS Academic minimum overall 6.5 (R6.5/L6.0/S6.0/W5.5). CS recommends overall ≥7.5 with no band <7.0 for competitiveness."
        },
        "waiver": "Grad School may waive TOEFL/IELTS (not TA speaking) if baccalaureate/graduate/professional degree within 36 months before admission from English-primary-instruction school in English native/official language country. CS notes submitting scores still helps funding/GTA. Duolingo accepted for Grad School admission (CS expects overall ≥135, no sub-score <135) but not for GTA eligibility."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3.5,
        "scale": "4.0",
        "detail": "Most successful applicants have major and cumulative GPAs above 3.5/4.0 (or 8.5/10 or 85/100). Institution quality considered. No absolute floor stated beyond holistic review; four-year bachelor’s (or equivalent) required before enrollment term."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "At least three letters submitted electronically by application deadline. Prefer academic/professional references able to comment on CS graduate readiness; research supervisor letter expected if applicable. MS: prefer junior/senior year professors."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement of Purpose (plus Personal History Statement) listed in CS application steps and admissions criteria.",
        "alsoKnownAs": "Academic Statement of Purpose (+ Personal History Statement)"
      },
      "resume": {
        "status": "required",
        "detail": "Resume listed among CS Prepare your documents steps and admissions criteria."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts required; upload per Grad School rules. Also CS Supplementary Form (PDF)."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on CS requirements/steps pages."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Domestic hardship and listed recruitment-program waivers per Purdue OGSPS How to Apply; currently enrolled Purdue students/alumni often fee-exempt.",
        "detail": "Purdue graduate application fee $60 domestic / $75 international (USD); one fee covers up to two campus/major selections. amountUsd records international rate."
      },
      "other": [
        "Fall 2027 CS deadline Dec 1, 2026; Spring 2027 Oct 1, 2026.",
        "CS Supplementary Form + Academic SoP + Personal History Statement required.",
        "Applicants from another CS grad program normally complete ≥1 year there; if master's, normally complete that degree before Purdue registration."
      ],
      "advice": "Curriculum page is not the admissions checklist—use CS graduate/admission/*. GRE not required ≠ waived. Aim CS-competitive English scores if seeking GTA.",
      "sources": [
        [
          "CS Admission Requirements",
          "https://www.cs.purdue.edu/graduate/admission/requirements.html"
        ],
        [
          "CS Application Steps (Fall 2027 deadlines)",
          "https://www.cs.purdue.edu/graduate/admission/steps.html"
        ],
        [
          "CS English Proficiency",
          "https://www.cs.purdue.edu/graduate/admission/english.html"
        ],
        [
          "CS Letters of Recommendation",
          "https://www.cs.purdue.edu/graduate/admission/letters_recommendation.html"
        ],
        [
          "Purdue OGSPS How to Apply (fee)",
          "https://www.purdue.edu/academics/ogsps/admissions/how-to-apply/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ucla-cs': {
    tuition: 38232.76,
    tuitionLabel: 'Academic-year tuition and mandatory fees (Academic Master, nonresident, continuing)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UCLA Registrar public fee tables Academic Master annual 2026–27 nonresident continuing total $38,232.76 (Tuition $13,722 + NRST $15,102 + Student Services Fee $1,344 + UCSHIP $7,516.98 + campus fees). California resident continuing total without NRST $23,130.76. Grad Division rounds these to about $38,233 / $23,131. New students add one-time Document Fee $97.43. CS MS uses the standard Academic Master schedule (not a self-supporting program). NRST PhD candidacy waiver does not apply to MS.',
    sources: [
      ['Official tuition / budget (Registrar public fees)', 'https://sa.ucla.edu/RO/Fees/Public/public-fees'],
      ['Grad Division tuition summary', 'https://grad.ucla.edu/funding/tuition/'],
      ['Financial aid COA', 'https://financialaid.ucla.edu/graduate-aid/cost-of-attendance'],
      ['CS Graduate Admissions', 'https://www.cs.ucla.edu/graduate-admissions/'],
      ['CS Graduate Application Requirements (Dec 15 23:59 PT; mid-Sep open)', 'https://www.cs.ucla.edu/graduate-requirements/'],
      ['UCLA Grad Division CS 2027–2028 requirements (deadline Dec 15, 2026)', 'https://grad.ucla.edu/gasaa/deptinfo/deptinfo.asp?academicyear=20272028&code=0201'],
      ['CS Grad Admissions FAQ', 'https://www.cs.ucla.edu/graduate-admission-frequently-asked-questions/'],
      ['Program requirements (Grad Division)', 'https://grad.ucla.edu/graduate-program-requirements/program-requirements-for-computer-science-7-2-2-2-2-2-2-2-2-2/'],
      ['Graduate student handbook', 'https://www.cs.ucla.edu/graduate-student-handbook/'],
    ],
    orientation: '36 units · Thesis or capstone · Flexible coursework',
    funding: 'The department explicitly does not guarantee TA, graduate student researcher or reader positions to MS students.',
    deadline: 'Apps mid-Sep · Deadline 15 Dec 2026 · 23:59 Pacific (MS/PhD Fall only — Grad Division 2027–28)',
    deadlineDate: '2026-12-15',
    academic: 'UCLA CS MS: nine 4-unit courses (B- or better) plus three CS 201 seminars. Thesis (CS 598) or Capstone project plans; no fixed core list — majority CS coursework.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "UCLA Grad Division 2026–2027 Computer Science admission requirements table: GRE: Not required. CS department page still carries Fall 2025–2026 optional-language for that prior cycle; for 2026–2027 cycle prefer Grad Division “Not required.” GMAT may not be substituted. Subject GRE not reviewed.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "CS Graduate Application Requirements: GMAT may not be substituted for the GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 87,
          "detail": "Intl / non-exempt: TOEFL iBT ≥87 (legacy) or overall ≥4.5 new scale (tests on/after Jan 21, 2026) per Grad English Requirements / CS page. UCLA code 4837; CS dept code 78. Valid within 2 years of application submit. Duolingo not accepted. FAQ also cites legacy subscores W25/S24/R21/L17."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall ≥7.0. Send to major department and Division of Graduate Education."
        },
        "waiver": "Exempt if bachelor’s or higher from accredited U.S. university or from country where English is sole language of instruction per WHED; or completed two years full-time study at such institutions. Citizenship alone does not exempt."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "University cumulative GPA ≥3.0 for consideration. Dept reviews ≥3.0; most competitive ≥3.5 undergrad and ≥3.50 any graduate study; average admitted ~3.60."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "At least three letters via online application by Dec 15. MS: prefer professors from junior/senior years. (ESAP MS has special 2-letter CS-faculty rule.)"
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "SOP 500-word limit in online application (prompts on Grad Division site). Also required Personal Statement 500-word limit. SOP serves as writing sample.",
        "alsoKnownAs": "Statement of Purpose (+ Personal Statement)"
      },
      "resume": {
        "status": "optional",
        "detail": "Resume/vitae not required; awards/distinctions/publications may be entered in online application sections instead."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload one official transcript per post-secondary institution in online application by Dec 15. Final official docs after offer. China/India specific degree-certificate rules on CS page. UCLA students: MyUCLA record OK."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed among CS graduate application requirements."
      },
      "applicationFee": {
        "amountUsd": 155,
        "waivers": "Need-based and special-program waivers for eligible U.S. citizens/PR (and listed programs) per Grad Admissions FAQs; upload docs in Fee Waiver section. No exceptions beyond stated criteria.",
        "detail": "UCLA Grad Admissions FAQ: $135 U.S. citizens/PR; $155 all other applicants. amountUsd = international rate."
      },
      "other": [
        "Fall only; deadline Dec 15 23:59 Pacific. Apply mid-Sep–Dec 15.",
        "Apply to MS or PhD—not both. Applicants who already hold an MS in CS or closely related field not considered for MS.",
        "MS funding: not eligible for departmental support; TA/GSR/reader not guaranteed; intl MS must show ≥~$65,000 first-year support for visa if admitted.",
        "Program-requirements Grad page is degree requirements (thesis/capstone), not admissions checklist—use CS graduate-requirements."
      ],
      "advice": "Use cs.ucla.edu/graduate-requirements/ + Grad Division 2026–2027 deptinfo for GRE. Do not rely on curriculum-only Grad program-requirements URL alone.",
      "sources": [
        [
          "UCLA CS Graduate Application Requirements",
          "https://www.cs.ucla.edu/graduate-requirements/"
        ],
        [
          "UCLA Grad Division 2026–2027 CS Admission Requirements",
          "https://grad.ucla.edu/gasaa/deptinfo/deptinfo.asp?academicyear=20262027&code=0201"
        ],
        [
          "UCLA English Requirements",
          "https://grad.ucla.edu/admissions/english-requirements/"
        ],
        [
          "UCLA Admissions FAQs (fee)",
          "https://grad.ucla.edu/admissions/faqs/"
        ],
        [
          "UCLA Grad Program Requirements CS (degree plans)",
          "https://grad.ucla.edu/graduate-program-requirements/program-requirements-for-computer-science-7-2-2-2-2-2-2-2-2-2/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'wisconsin-cs': {
    tuition: 24054.4,
    tuitionLabel: 'Academic-year tuition (graduate nonresident full-time × 2 terms)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UW System Tuition Schedule 2026–27 UW–Madison Graduate full-time Nonresident tuition $12,027.20/term → $24,054.40 AY Fall+Spring. Resident $5,363.76/term ($10,727.52 AY). Segregated fees $849.74/term ($1,699.48 AY) not included in the tuition figure. This is the standard graduate schedule used by the traditional CS MS/PhD track. Separately, the Professional Program MS (PMP) lists nonresident $1,503.40/credit (matches the graduate part-time nonresident rate); PMP is self-funded and not used as the primary figure here. Traditional-track funding/tuition remission is common but out of scope for this tuition reference.',
    sources: [
      ['Official tuition / budget', 'https://www.wisconsin.edu/budget-planning/download/tuition/2026-27-Tuition-Schedule-FINAL.pdf'],
      ['Bursar Fall 2026 announcement', 'https://bursar.wisc.edu/tuition-and-fees/fall-2026-increase'],
      ['Degree programs hub', 'https://www.cs.wisc.edu/grad/programs/'],
      ['Funding & COA', 'https://www.cs.wisc.edu/grad/programs/funding/'],
      ['Professional MS', 'https://www.cs.wisc.edu/grad/programs/pmp/'],
      ['CS Graduate Admissions (traditional Dec 15; PMP Feb 15)', 'https://www.cs.wisc.edu/grad/programs/admissions/'],
      ['Traditional CS MS/PhD', 'https://www.cs.wisc.edu/grad/programs/traditional/'],
      ['Guide: Computer Sciences MS', 'https://guide.wisc.edu/graduate/computer-sciences/computer-sciences-ms/computer-sciences-computer-sciences-ms/'],
    ],
    orientation: '30 credits · Optional thesis · Traditional vs PMP',
    deadline: 'Traditional MS/PhD Fall: 15 Dec (month-day; year not labeled) · PMP separate: 15 Feb (month-day)',
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UW–Madison traditional CS MS: 30 credits with 24 CS (≥15 core 700–889). Optional thesis/project via CS 790. Distinguish from Professional MS (PMP).',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required but may be considered if available (Guide + CS Admissions FAQ).",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "Guide Other Test(s) field: n/a for this named option.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 92,
          "detail": "Refer to Grad School Minimum Requirements (UW-1241): TOEFL ≥92 (tests before 2026-01-21) or ≥5.0 (on/after 2026-01-21). Institution code 1846. Conditional ranges with ESLAT exist with program approval."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS / IELTS Indicator minimum 7.0; Duolingo minimum 125 (Grad School)."
        },
        "waiver": "Exempt via U.S. bachelor's; U.S. master's/PhD/professional within 5 years of start; equivalent bachelor's abroad with English exclusive language of instruction documented; or ≥2 full-time graded semesters in English-exclusive instruction within 5 years (no ESL classes)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Grad School minimum: undergraduate GPA 3.00 on last 60 semester hours (or master's with ≥3.00); international applicants must show comparable achievement."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters required (Guide). Prefer academic recommenders; at most one work recommendation suggested if out of school."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay form; ~1–1.5 pages sufficient; background in CS and potential for traditional MS/PhD. Must complete supplemental application sections.",
        "alsoKnownAs": "Statement of purpose / reasons for graduate study"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Most up-to-date unofficial transcripts from all prior higher-ed institutions; international records original language + official English translation. Official if recommended for admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on Guide Admissions table or CS Admissions FAQs."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Department does not offer fee waivers; Grad School fee grants for eligible U.S. citizens/PRs; some program-purchased grants elsewhere.",
        "detail": "$75 application fee (up to three programs same term); international applicants pay additional $6 processing fee. Fall only; deadline Dec 15. Spring/summer not admitted for this option."
      },
      "other": [
        "Traditional MS/PhD single applicant pool—do not apply to both MS and PhD separately.",
        "DISTINCT from Professional MS (PMP) named option (separate admissions, Feb 15 deadline).",
        "Minimum background: some programming, data structures, machine organization; year of college calculus-level math.",
        "Contact admissions@cs.wisc.edu for traditional MS/PhD."
      ],
      "advice": "Guide named option Computer Sciences MS is traditional track; do not conflate with CS PMP. Optional GRE ≠ waived.",
      "sources": [
        [
          "UW–Madison Guide: Computer Sciences MS (Computer Sciences option) Admissions",
          "https://guide.wisc.edu/graduate/computer-sciences/computer-sciences-ms/computer-sciences-computer-sciences-ms/"
        ],
        [
          "UW–Madison CS Graduate Admissions",
          "https://www.cs.wisc.edu/grad/programs/admissions/"
        ],
        [
          "UW–Madison Grad School Requirements (English/GPA)",
          "https://grad.wisc.edu/apply/requirements/"
        ],
        [
          "UW–Madison Grad School Apply (fee)",
          "https://grad.wisc.edu/apply/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'penn-cs': {
    tuition: 52950,
    tuitionLabel: 'Academic-year tuition (SEAS on-campus master’s, 3 CUs × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Penn SRFS SEAS on-campus master’s 2026–27: tuition $8,825 per course unit (CU). Catalog CIS MSE requires 10 CUs; sample plans use 3 CUs in a typical Fall or Spring term → AY tuition reference $8,825 × 3 × 2 = $52,950. At 4 CUs/term: $35,300/semester ($70,600 AY). Mandatory fees at 3 CUs: General Fee $2,134 + Technology Fee $405 + Clinical Fee $385 (semester totals with tuition $29,399)—fees not included in the tuition figure. Full 10-CU degree tuition at $8,825 = $88,250. Online Engineering rates differ.',
    sources: [
      ['Official tuition / budget', 'https://srfs.upenn.edu/costs-budgeting/seas'],
      ['CIS MSE catalog', 'https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/'],
      ['Residential master’s CS admissions', 'https://gradadm.engineering.upenn.edu/residential-masters/computer-science/'],
      ['Penn Engineering How to Apply (Fall 2027 master\'s timeline)', 'https://gradadm.engineering.upenn.edu/how-to-apply/'],
      ['Penn Engineering Master\'s Programs (CIS early deadline noted)', 'https://gradadm.engineering.upenn.edu/masters/'],
      ['MSE in CIS requirements', 'https://www.cis.upenn.edu/mse-in-cis-requirements/'],
    ],
    deadline: 'Apps open 15 Sep 2026 · Early 1 Nov 2026 · 11:59 p.m. EST · Regular 1 Feb 2027 · 11:59 p.m. EST (CIS MSE Fall 2027)',
    deadlineDate: '2027-02-01',
    academic: 'Penn CIS MSE: 10 course units with four constrained cores (theory + systems rules), CIS electives, and optional thesis (CIS 9990). Complete within seven years; min GPA 2.7.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: '10 CUs · Constrained cores · Optional thesis',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Penn Engineering: GRE optional for current master's cycle (Fall 2027 open Sep 15, 2026–Feb 1, 2027). Omitting does not hurt; valid scores encouraged if available. Institution code 2888; scores valid 5 years; official scores by deadline.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CIS MSE; GMAT not listed on Penn Engineering How to Apply.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "International / non-US citizen/PR whose native language is not English must submit TOEFL iBT (code 2888), IELTS, or DET. No hard minimum for admission; recommended TOEFL 5.0 (or 100 legacy 0–120). At-home TOEFL accepted. Scores valid 2 years; exam by deadline."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted; recommended 7.5. Send electronically to “University of Pennsylvania School of Engineering and Applied Science.” At-home IELTS accepted."
        },
        "waiver": "Waived if by matriculation applicant: graduates from a U.S. program; attends school in a country where English is official language; or graduates from an institution where English is the medium of instruction (indicated on unofficial transcript). Waiver processed after submit (3–5 business days)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No admission minimum GPA stated on Penn Engineering How to Apply. CIS MSE expects strong undergrad math/CS preparation (OS, PL, DS, discrete math, linear algebra, algorithms/theory)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters for master's (three only for CIS Ph.D. / BE Ph.D. Medical Physics). Include one from a faculty member familiar with scholarly abilities. Submitted via application email link."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement ≤2 pages answering: interest in program; candidacy; benefit; contribution to Penn Engineering community; reasons for success; post-completion plans.",
        "alsoKnownAs": "Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Professional resume covering job skills, depth of professional experience, leadership."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcript from each university/college with course credit; English with grade key; name, institution, courses, credit hours, grades. Official transcripts only if admitted and enroll."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on Penn Engineering How to Apply."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "Auto-waived if US citizen/PR with proven low-income; Penn or U.S. military affiliation; or eligible US partner-institution Accelerated Master’s applicant.",
        "detail": "$95 nonrefundable with online application."
      },
      "other": [
        "Distinct from MCIT (conversion); non-CS undergrads directed toward MCIT/MAS-CS routes.",
        "Fall 2027 master's: early CIS deadline Nov 1, 2026 11:59pm EST; regular Feb 1, 2027; decisions by Apr 1.",
        "DET accepted (recommended 135)."
      ],
      "advice": "Apply via Penn Engineering Grad Admissions (not catalog curriculum page). Early Nov 1 for CIS if seeking early review. GRE optional≠waived. Confirm Fall 2027 fee/waiver categories on live how-to-apply.",
      "sources": [
        [
          "Penn Engineering How to Apply (Fall 2027)",
          "https://gradadm.seas.upenn.edu/how-to-apply/"
        ],
        [
          "Penn Engineering Master's Programs timeline",
          "https://gradadm.seas.upenn.edu/masters/"
        ],
        [
          "CIS MSE program overview",
          "https://www.cis.upenn.edu/mse-in-cis/"
        ],
        [
          "Catalog CIS MSE (curriculum)",
          "https://catalog.upenn.edu/graduate/programs/computer-information-science-mse/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'jhu-cs': {
    tuition: 68670,
    tuitionLabel: 'Academic-year tuition (WSE residential master’s / PhD full-time)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Johns Hopkins Whiting School of Engineering Cost of Attendance: WSE Residential Master’s and PhD Full-time Tuition $68,670 annually / $34,335 per semester (2026–27). The separately listed “Non-resident Fee” $6,868 annually is a part-time/non-resident enrollment status charge, not an out-of-state surcharge for on-campus full-time students—do not add it to the residential full-time figure. Matriculation fee $500 and living/insurance costs are separate. MSE CS is the full-time residential route.',
    sources: [
      ['Official tuition / budget', 'https://engineering.jhu.edu/education/graduate-studies/graduate-financial-aid/affording-your-education/'],
      ['MSE CS program', 'https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/'],
      ['MSE CS program (brochure landing)', 'https://www.cs.jhu.edu/mse-programs-original/'],
      ['MSE CS Admissions (deadlines)', 'https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/admissions/'],
      ['MSE CS program', 'https://www.cs.jhu.edu/academic-programs/graduate-studies/mse-programs/'],
      ['Catalogue MSE CS', 'https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/degree-programs/computer-science/computer-science-master-science-engineering/'],
    ],
    kind: 'MSE',
    orientation: '8+research or 10 courses · ~3 semesters · AI/HLT options',
    deadline: 'Fall: 15 Feb · 11:59 p.m. EST · Spring: 1 Oct · 11:59 p.m. EST (month-day; year not labeled)',
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'JHU CS MSE: 10 courses or 8 + research; ~3 semesters typical. Breadth across ≥4 of 5 areas; optional AI track and HLT concentration.',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "MSE CS admissions: GRE not required; listed as optional material. FAQ also states GRE scores are not reviewed by CS / not included in admissions review—optional≠waived; submitting may have no effect.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not used for Whiting MSE CS; only GRE discussed as optional/not reviewed.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "International / non-native English speakers: TOEFL ≥100 (ITP Level 1 and iBT Home Edition accepted). Institution code C559. Scores older than 2 years not accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS ≥7.0. Send to Johns Hopkins University, Whiting School of Engineering. Duolingo English Test ≥135 also listed."
        },
        "waiver": "See Whiting English proficiency waiver eligibility page linked from MSE FAQ. All non-native English speakers must take TOEFL, IELTS, or Duolingo per FAQ."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA stated on MSE CS admissions page; holistic review. Background equivalent to BS CS expected."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required via online application; only two guaranteed to be read regardless of how many submitted."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required; upload via online application (file ≤500KB, ~1–2 pages, 1-inch margins per FAQ).",
        "alsoKnownAs": "statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required among application materials."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcript copies for review; official transcript requested upon admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed among required MSE CS application materials on admissions or FAQ pages reviewed."
      },
      "applicationFee": {
        "amountUsd": 0,
        "waivers": "Whiting School $75 fee waived for Fall 2027 master's applicants; admissions page: Apply free / no application fees required.",
        "detail": "Applications free for Fall 2027 MSE CS (fee waived)."
      },
      "other": [
        "Fall 2027 deadline Feb 15 (11:59 p.m. EST); Spring 2027 Oct 1.",
        "Sample of work optional.",
        "Non-CS backgrounds need intermediate programming (C++ and Java), data structures, computer-system fundamentals, and mathematical foundations (coursework/research/work).",
        "HLT concentration and AI track available; distinct from Engineering for Professionals evening/online MS."
      ],
      "advice": "Prefer MSE Admissions + FAQ over program-requirements/curriculum pages. GRE optional≠waived; FAQ says scores not reviewed.",
      "sources": [
        [
          "MSE CS Admissions",
          "https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/admissions/"
        ],
        [
          "MSE Admissions FAQ",
          "https://www.cs.jhu.edu/academic-programs/graduate-studies/masters-computer-science/mse-faqs/"
        ],
        [
          "MSE CS program page",
          "https://www.cs.jhu.edu/academic-programs/graduate-studies/mse-programs/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'chicago-cs': {
    tuition: 66762,
    tuitionLabel: 'Program / full-time academic-year tuition (MPCS 9-course; 3 courses × 3 quarters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UChicago MPCS Tuition & Fees 2026–2027: estimated total tuition 9-Course MS $66,762; 12-Course MS $89,016. Quarterly schedule: 1 course $7,415; 2 $14,833; 3 $22,254; 4 $29,668. Full-time at 3 courses for Autumn–Winter–Spring = $22,254 × 3 = $66,762 (matches the 9-course program total). Quarterly Graduate Student Services Fee $520; lifetime transcript fee $84 (first quarter only); U-SHIP listed at $1,715 using the 2025–2026 rate—fees not included in the tuition figure. Immersion coursework, if required, is billed at the one-course rate extra.',
    sources: [
      ['Official tuition / budget', 'https://masters.cs.uchicago.edu/tuition-fees/'],
      ['MPCS admissions tuition', 'https://masters.cs.uchicago.edu/mpcs-admissions/tuition-fees/'],
      ['MPCS home', 'https://masters.cs.uchicago.edu/'],
      ['MPCS Application Deadlines (Autumn 2027 full-time)', 'https://masters.cs.uchicago.edu/application-deadlines/'],
    ],
    deadline: 'Autumn 2027 Full-Time MPCS: R1 2 Nov 2026 · R2 1 Feb 2027 · R3 3 May 2027 · all 11:59 p.m. CT',
    deadlineDate: '2026-11-02',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UChicago MPCS: 9-course MS (≥~9 months) with five cores + four electives, or 12-course MS (≈15–24 months) adding a specialization and internship/practicum options.',
    orientation: '9- or 12-course MPCS · Specializations · 9–24 months',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required; optional and may strengthen application especially without CS/math/related academic or professional background. Strong applicants often ≥50th %ile Verbal and ≥80th %ile Quant (admissions overview). School code 1832. Expired scores not accepted.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT optional alternative to GRE; code H9x-WG-56 (MPCS). Same guidance as GRE for non-technical backgrounds.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "If no waiver: TOEFL iBT. UChicagoGRAD required scores for Computer Science (MS): 100 total (pre–Jan 21 2026 scale) / 5.0 overall (on/post–Jan 21 2026). Institution 1832."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic for Computer Science (MS): 7.0 overall (UChicagoGRAD required-scores table)."
        },
        "waiver": "Primary-language attestation or education waiver: ≥1 full academic year in last 10 years as full-time degree-seeking student at accredited English-medium post-secondary in listed countries/territories (e.g., US, UK, Canada, Australia, Singapore, Ireland, etc.). System auto-applies if criteria met. Duolingo not accepted."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on MPCS application-requirements materials; holistic review."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required (academic or professional); encourage technical/quantitative examples; letterhead and professional/university email preferred. Application not reviewed until both submitted."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Short essay responses required in application.",
        "alsoKnownAs": "Short essay questions / short essay responses"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume or CV required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts from all colleges/universities attended, whether or not a degree was awarded."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MPCS application-requirements materials."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "May qualify for PSD fee waivers; see Physical Sciences Division fee-waiver policy.",
        "detail": "Non-refundable $90 application fee."
      },
      "other": [
        "Autumn 2027 FT rounds: Nov 2 2026; Feb 1 2027; May 3 2027 (11:59pm CT)",
        "Joint MBA/MPCS and 4+1 have different requirements",
        "Part-time available (no student-visa sponsorship for part-time)"
      ],
      "advice": "GRE/GMAT optional≠waived—helpful if non-CS background. Confirm live application-requirements URL (site paths have shifted).",
      "sources": [
        [
          "MPCS application requirements (search/official)",
          "https://masters.cs.uchicago.edu/application-requirements/"
        ],
        [
          "MPCS admissions hub",
          "https://masters.cs.uchicago.edu/mpcs-admissions/"
        ],
        [
          "MPCS deadlines Autumn 2027",
          "https://masters.cs.uchicago.edu/application-deadlines/"
        ],
        [
          "UChicagoGRAD English required scores (CS MS)",
          "https://grad.uchicago.edu/admissions/apply/english-language-requirements/required-scores/"
        ],
        [
          "UChicagoGRAD English proficiency / waivers",
          "https://grad.uchicago.edu/admissions/apply/english-language-requirements/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'duke-cs': {
    orientation: '30 credits · 3 semesters · Course/project/thesis',
    funding: 'The Graduate School’s CS MS page lists no financial aid available for the MS. External funding requires separate verification.',
    tuition: 69880,
    tuitionLabel: 'Academic-year tuition (Graduate School master’s full-time × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Duke Graduate School Tuition, Fees, and Ph.D. Stipend Schedule 2026–27: Master’s Students $34,940 per fall/spring semester → $69,880 AY. Summer I or II $17,470/term; after three full-time semesters, continuing/part-time $4,055 per unit. Master’s students must enroll full-time for at least three semesters. Mandatory fees (health, recreation, activity, student services; transcript fee first term) and health insurance are separate from the tuition figure. CS MS is 30 credits (coursework-only, thesis, or project).',
    sources: [
      ['Official tuition / budget', 'https://gradschool.duke.edu/financial-support/tuition-fees-and-phd-stipend-schedule/'],
      ['Cost to attend (master’s COA)', 'https://gradschool.duke.edu/financial-support/cost-attend/'],
      ['M.S. in Computer Science program page', 'https://gradschool.duke.edu/academics/programs-degrees/computer-science-ms/'],
      ['Duke Graduate School application deadlines (Fall 2027 master\'s)', 'https://gradschool.duke.edu/admissions/application-deadlines/'],
      ['MS requirements', 'https://cs.duke.edu/graduate/ms/ms-req'],
      ['Master\'s options', 'https://cs.duke.edu/graduate/ms/course-options'],
    ],
    deadline: '1 Feb 2027 · 11:59:59 p.m. EST (MS Computer Science — Fall 2027)',
    deadlineDate: '2027-02-01',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Duke CS MS: 30 credits over three full-time semesters. Course-only, project, or thesis; optional AI/ML or Cybersecurity concentrations; master’s exam required.',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE General required for Computer Science (MS) per Grad School GRE list and CS MS program page. GRE Subject optional (CS subject discontinued). Institution 5156; no dept code. Scores ≤5 years from Aug 1 of application year.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "CS MS requires GRE General; GMAT not listed as accepted alternate for CS MS.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "TOEFL/IELTS/Duolingo required if first language is not English (*waiver may apply). Grad School generally seeks TOEFL iBT ≥90 (pre–Jan 21 2026) or ≥5 (on/after Jan 21 2026). Code 5156."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic generally ≥7.0; Duolingo generally ≥125 with subscores. E-delivery to Duke University Graduate School."
        },
        "waiver": "Test waiver may apply for some applicants; Grad School English page / email grad-admissions@duke.edu — CS FAQ notes waiver granted only after admittance in some cases."
      },
      "gpa": {
        "status": "required",
        "minimum": null,
        "scale": 4,
        "detail": "Undergraduate GPA calculated on 4.0 scale required on application. No numeric cutoff stated; admitted CS students typically have very strong GPAs (CS FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "3 letters required (CS MS Grad School program page)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose required; Grad School instructions also list Life Experiences Statement.",
        "alsoKnownAs": "Statement of Purpose / Life Experiences Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé required (CS MS program page / Grad School instructions)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial with application; official upon admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on CS MS Grad School or CS FAQ pages."
      },
      "applicationFee": {
        "amountUsd": 105,
        "waivers": "Built into application for eligible U.S. citizens/PR with financial need, veterans/active duty, or qualifying pipeline programs (see Application Fee page).",
        "detail": "Nonrefundable $105 (Visa/Discover/Mastercard)."
      },
      "other": [
        "Fall only; deadline February 1",
        "No departmental financial aid for MS",
        "PhD GRE optional but MS GRE required—if switching PhD→MS, GRE must be in by MS deadline",
        "Optional concentrations: Cybersecurity; AI/ML"
      ],
      "advice": "GRE General is required for MS (unlike CS PhD optional). Plan English test early; fee $105.",
      "sources": [
        [
          "Grad School CS MS program page",
          "https://gradschool.duke.edu/academics/programs-degrees/computer-science-ms/"
        ],
        [
          "Grad School GRE requirements (CS MS required)",
          "https://gradschool.duke.edu/admissions/application-instructions/gre-scores/"
        ],
        [
          "Grad School application fee",
          "https://gradschool.duke.edu/admissions/application-instructions/application-fee/"
        ],
        [
          "Grad School English proficiency",
          "https://gradschool.duke.edu/admissions/application-instructions/english-language-proficiency-test-scores/"
        ],
        [
          "CS Graduate FAQ",
          "https://cs.duke.edu/graduate/faq"
        ],
        [
          "Application instructions",
          "https://gradschool.duke.edu/admissions/application-instructions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'umass-cs': {
    sources: [
      ['Graduate program and rank 25 cross-check', 'https://www.cics.umass.edu/academics/masters'],
      ['Official tuition / budget (Bursar)', 'https://www.umass.edu/bursar/tuition/graduate-tuition'],
      ['CICS MS campus tuition page', 'https://www.cics.umass.edu/academics/ms-computer-science-campus/ms-campus-tuition-and-fees'],
      ['CICS MS campus program', 'https://www.cics.umass.edu/academics/ms-computer-science-campus'],
      ['UMass Grad School MS Computer Science (application deadlines)', 'https://www.umass.edu/graduate/academics/master-science-computer-science'],
      ['CICS How to Apply — MS on campus', 'https://www.cics.umass.edu/academics/ms-computer-science-campus/how-apply-ms-program-campus'],
      ['MS degree requirements', 'https://www.cics.umass.edu/academics/academic-policies/graduate-programs-policies/ms-degree-requirements'],
      ['MS course requirements', 'https://www.cics.umass.edu/academics/academic-policies/graduate-programs-policies/ms-degree-requirements/ms-course-requirements'],
    ],
    tuition: 35613,
    tuitionLabel: 'Academic-year tuition (graduate out-of-state/international, 9 credits × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UMass Amherst Bursar 2026–27 Graduate Tuition and Fees: Out-of-state & International at 9 credits tuition $17,806.50/semester → $35,613 AY (full-time threshold is 9+ credits; 12+ credits tuition $19,532.50/semester → $39,065 AY). In-state 9-credit tuition $8,083/semester ($16,166 AY). Campus fees on the bursar schedule (Graduate Service Fee, Graduate Health Fee, Senate Tax) and Student Health Insurance are separate from the tuition figure. Separately, Manning CICS publishes Total Tuition & Mandatory Fees Out-of-State/International $60,750 for the campus MS (program-level estimate including listed mandatory fees)—not used as the primary AY figure; prefer bursar. MS is 30 credits.',
    deadline: 'Campus MS Fall: 15 Dec (month-day; year not labeled) · Online MS Fall: 1 Jun · Spring: 1 Oct',
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UMass Amherst CICS MS: 30 credits over ~2 years with four cores (Theory, Systems, ML + one) and ≥12 credits at 600+. Non-thesis; optional concentrations and Master\'s Project.',
    orientation: '30 credits · 4 cores · ~2 years · Concentrations',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Official GRE optional for MS; choosing not to submit will not harm chances. ETS code 3917. UMass graduates exempt from GRE requirement.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of CICS MS admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "Graduate School minimum: TOEFL combined 80 (tests before Jan 2026) or 4.0 (tests Jan 2026 or later). CICS how-to-apply defers to Grad School International Applicants page. Code 3917."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic minimum combined 6.5 (Graduate School). DET 115 and PTE Academic 53 also accepted."
        },
        "waiver": "May be waived for citizenship in listed English-speaking countries; bachelor's/master's from U.S. or listed countries; certain American University campuses; or currently enrolled full-time completing two academic years of U.S. college coursework before entrance (see Grad School International Applicants)."
      },
      "gpa": {
        "status": "required",
        "minimum": 2.75,
        "scale": "4.0",
        "detail": "Graduate School minimum undergraduate GPA 2.75/4.00; programs may expect higher. CICS emphasizes strong CS undergraduate preparation (listed core CS/math courses)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters; choose writers who can speak to research, community service, or work experience. Requested via Grad School application after submit."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement; suggestions include research/industry experience, computing for common good, and diversity/STEM impact. Grad School also requires a Short Essay (≤600 words) on community/group contribution.",
        "alsoKnownAs": "Personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required for MS application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial for application review; official required by Graduate School if admitted. Missing transcripts block evaluation."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CICS on-campus MS How to Apply page."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Current Five College undergraduates applying to master's-only programs do not pay admission fee; other Grad School waiver categories (McNair, GRE fee reduction, etc.).",
        "detail": "Nonrefundable $90 application fee payable online by credit card (UMass Graduate School)."
      },
      "other": [
        "Target on-campus MS (not online MS) for this catalog id.",
        "Terminal MS students ineligible for campus assistantships (Fall 2016+ cohort rule); grader/hourly roles possible after first semester.",
        "Undergraduate preparation checklist of CICS/MATH core courses strongly expected."
      ],
      "advice": "Use CICS How to Apply — MS Program (on Campus); degree-requirements page alone lacks admissions checklist.",
      "sources": [
        [
          "CICS How to Apply — MS Program (on Campus)",
          "https://www.cics.umass.edu/academics/ms-computer-science-campus/how-apply-ms-program-campus"
        ],
        [
          "UMass Graduate School How to Apply (fee)",
          "https://www.umass.edu/graduate/apply/how-apply"
        ],
        [
          "UMass Graduate School International Applicants (English)",
          "https://www.umass.edu/graduate/apply/international-applicants"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'rice-cs': {
    kind: 'MCS',
    orientation: '30 credits · Non-thesis MCS · ~3 semesters',
    deadline: '10 Feb 2027 · Early scholarship consideration',
    deadlineDate: '2027-02-10',
    funding: 'The on-campus program lists early scholarship consideration and limited TA/RA roles. Eligibility, amounts and international final deadline need confirmation; July 1 is labeled domestic.',
    sources: [
      ['Rank 27 cross-check', 'https://engineering.rice.edu/about/facts-rankings'],
      ['Official tuition / budget (Bursar Engineering)', 'https://bursar.rice.edu/tuition_fee_rates/graduate-programs/engineering'],
      ['GA Rice MCS', 'https://ga.rice.edu/programs-study/departments-programs/engineering/computer-science/computer-science-mcs/'],
      ['MCS program home', 'https://cs.rice.edu/academics/graduate-programs/master-computer-science'],
      ['MCS program', 'https://csweb.rice.edu/academics/graduate-programs/master-computer-science'],
    ],
    tuition: 66784,
    tuitionLabel: 'Academic-year tuition (Engineering master’s/PhD full-time × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Rice Bursar Engineering graduate rates 2026–27: Masters & PhD Full-Time Tuition $33,392/semester → $66,784 AY. Part-time approved $3,710 per credit (maximum $33,392/semester). MCS is a terminal non-thesis master’s requiring 30 credit hours (normally three semesters); catalog states MCS students are expected to pay full tuition with no university/department financial aid. GSA fee $45 AY, Student Organization $8, Health & Wellness Support $720 AY, and health insurance are separate. Online OMCS is a different per-credit schedule ($1,700/credit)—not used here.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'Rice MCS: 30-credit non-thesis professional master’s, normally 3 semesters, with specialization + internship + COMP 608.',
    asOf: '2026-10-20',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "MCS program page: GRE recommended, but not required. CS Graduate Program Application: applicants may optionally submit GRE general (not required). ETS code 6609. Subject GRE not required.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS MCS; GMAT not listed.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "Foreign nationals / non-native English speakers must show proficiency. CS app page: ≥90 iBT TOEFL or Home Edition (code 6609). Grad School: exams before Jan 21, 2026 min 90; on/after that date min 4.5. Alternatives: IELTS ≥7, Duolingo ≥115, U.S. degree, or post-secondary degree where official language of instruction is English (approved list)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Academic IELTS minimum overall 7. Report to “Rice University Graduate Admissions.”"
        },
        "waiver": "Proof of degree from accredited U.S. high school/college/university; or completion/expected completion of post-secondary degree from institution where official language of instruction is English (Grad School country/university lists)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "MCS admissions: 3.0+ GPA listed among what applicants should prepare."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "At least three letters via online application system (names/emails; recommenders upload)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose required (PDF upload per CS Graduate Program Application).",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "CV/Resume required (PDF; most current version)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Electronic transcripts from each college/university via application; official mailed transcripts required if offered admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MCS or CS graduate application pages."
      },
      "applicationFee": {
        "amountUsd": 85,
        "waivers": "Waivers rarely granted; contact gradapp@rice.edu if potentially eligible. Ph.D. has no fee (not MCS).",
        "detail": "$85 for MCS/MDS (on-campus and online) via online application credit card."
      },
      "other": [
        "On-campus MCS Fall 2027: early scholarship Feb 10, 2027; international deadline May 1, 2027; domestic Jul 1, 2027; rolling review continues.",
        "Spring 2027 also offered (early Oct 1 / final Nov 1, 2026).",
        "Non-thesis 30-hour professional degree; internship required; CPT after two full-time semesters for intl.",
        "Distinct from Online MCS / MAI / MDS."
      ],
      "advice": "Prefer CS Graduate Program Application page over marketing MCS page for fee/English/deadlines. GRE optional≠waived. Early Feb 10 for scholarship consideration.",
      "sources": [
        [
          "MCS program (admissions summary + Fall 2027 deadlines)",
          "https://csweb.rice.edu/academics/graduate-programs/master-computer-science"
        ],
        [
          "CS Graduate Program Application",
          "https://csweb.rice.edu/academics/graduate-programs/admission/graduate-program-application"
        ],
        [
          "Rice Grad School Language Proficiency",
          "https://graduate.rice.edu/admissions/language-proficiency-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'uci-cs': {
    kind: 'MS / MCS',
    orientation: '47 units · Thesis or exam · ~2 years research MS',
    deadline: 'MCS international: 15 Jan 2027; MS not verified',
    deadlineDate: '2027-01-15',
    sources: [
      ['Professional MCS admissions FAQ', 'https://mcs.ics.uci.edu/faq/'],
      ['Official tuition / budget (graduate fees)', 'https://reg.uci.edu/fees/2026-2027/graduate.html'],
      ['MCS fee schedule PDF', 'https://www.reg.uci.edu/fees/2026-2027/compsci.pdf'],
      ['Program comparison (MSCS vs MCS)', 'https://ics.uci.edu/academics/graduate-programs/program-comparison/'],
      ['Catalogue CS MS', 'https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/departmentofcomputerscience/computerscience_ms/'],
      ['MCS vs MSCS', 'https://mcs.ics.uci.edu/mcs-vs-mscs/'],
    ],
    tuition: 38784.44,
    tuitionLabel: 'Academic-year tuition and mandatory fees (graduate nonresident; research MSCS)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Prefer research MS; MCS labeled separately.',
    costDetail: 'UCI Registrar Graduate/Credential Student Fees 2026–27: Total Nonresident annual $38,784.44 (Tuition $13,722 + Student Services Fee $1,344 + campus fees + Student Health Insurance $7,771.86 + Nonresident Supplemental Tuition $15,102). California Resident annual $23,682.44 without NRST. Document Fee $87 new students only (not in annual total). Research Master of Science in Computer Science (MSCS) uses this academic graduate schedule. Separately, professional Master of Computer Science (MCS) cohort entering Fall 2026: Program Fee $63,500 total ($12,700/quarter × 5 quarters including Summer); first four quarters program-fee portion $50,800; registrar MCS schedule shows Total Fees Paid about $60,765.13 for Fall–Summer 2026–27 including campus fees and GSHIP—MCS is a different self-supporting schedule, not the primary research-MS figure.',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UCI research MS CS: ≥47 units with 4 core areas + electives; thesis or comprehensive exam. Distinct from the professional MCS (~15 months).',
    asOf: '2026-10-20',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "MCS How to Apply: GRE Optional (not required). ICS research MS/PhD FAQ directs to Grad Division GRE list; third-party/portal summaries list Computer Science and Master of Computer Science as Not Required (verify live GRE portal—portal inactive at scrape). Neither route requires GRE; MCS explicitly allows optional submission.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS routes; GMAT not listed.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "All graduate applicants must demonstrate English proficiency unless waived. Grad Division: TOEFL overall min 80 traditional / 4 new scale (Jan 2026+). Institution code 4859. No MyBest; Home Edition OK; ITP Plus/Essentials not accepted. Scores <2 years old."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall min 7 with no module <6. Electronic from test center only; Online/Indicator OK; One Skill Retake not accepted."
        },
        "waiver": "Waived if undergraduate or master’s degree from institution where English was sole language of instruction per World Higher Education Database (WHED)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "UCI Grad Division / ICS FAQ: university minimum cumulative undergrad GPA 3.0/4.0. Holistic review if below."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "MCS: 3 letters (highly recommend ≥2 academic professors). ICS research FAQ: Letters of Recommendation required component; Grad Division lists LOR for most programs—use count 3 as MCS-stated and typical Grad Division default."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "MCS: SoP on personal/academic/professional goals and fit. Research MS: SoP required (academic/research focus); Personal History Statement optional but highly recommended.",
        "alsoKnownAs": "Statement of Purpose (+ Personal History Statement for MCS required; research optional/highly recommended)"
      },
      "resume": {
        "status": "not_stated",
        "detail": "MCS How to Apply checklist does not list resume/CV. Research FAQ lists supplemental materials generically—resume not explicitly required on pages reviewed."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts from all post-secondary institutions for review; official if admitted. MCS: all institutions after high school."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not stated on MCS how-to-apply or ICS research admissions FAQ."
      },
      "applicationFee": {
        "amountUsd": 155,
        "waivers": "Fee waivers for certain U.S. citizens/PR per Grad Division; see Applying to UCI fee-waiver details.",
        "detail": "UCI Grad Division / MCS: $135 domestic (U.S. citizens & lawful PR) / $155 all other applicants. amountUsd = international rate."
      },
      "other": [
        "TWO ROUTES: research MS (catalogue CS MS; Dec 15 deadline with PhD) vs professional MCS (intl Jan 15, 2027; domestic Feb 15, 2027).",
        "MCS also requires Personal History Statement; recommends programming/algorithms/discrete+linear algebra + ≥1 year internship/professional experience.",
        "Cannot apply to different degree levels (MS and PhD) in same program; separate apps/fees if applying to multiple ICS programs.",
        "Fall quarter admission only for ICS."
      ],
      "advice": "Pick research MS vs MCS before applying—deadlines and emphasis differ. Catalogue page is degree requirements only. Confirm live GRE portal status for research CS when portal is active.",
      "sources": [
        [
          "MCS How to Apply (Fall 2027)",
          "https://mcs.ics.uci.edu/how-to-apply/"
        ],
        [
          "ICS Graduate Research Admissions FAQ",
          "https://ics.uci.edu/admissions-information-and-computer-science/graduate-admissions/graduate-research-admissions-faq/"
        ],
        [
          "UCI Grad Division Applying to UCI",
          "https://grad.uci.edu/admissions/applying-to-uci/"
        ],
        [
          "UCI Catalogue Computer Science MS",
          "https://catalogue.uci.edu/donaldbrenschoolofinformationandcomputersciences/departmentofcomputerscience/computerscience_ms/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'berkeley-mba': {
    tuition: 92755,
    tuitionLabel: 'Academic-year tuition and fees (Full-Time MBA, nonresident, excl. SHIP)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Haas Financial Aid 2026–27 Estimated Cost of Attendance (Full-Time MBA): Nonresident Year 1 Tuition & Fees Subtotal $92,755 (Fall+Spring; includes systemwide tuition, campus/class pass fees, Nonresident Supplemental Tuition $12,245, PDST $62,880, IREF). Resident Tuition & Fees Subtotal $80,510. Mandatory SHIP health insurance $8,206 AY is billed separately (waivable with comparable coverage); Direct billable with SHIP ≈ $100,881 nonresident / $88,716 resident. One-time Document Management Fee $119 for new students is not in COA. Registrar 2026–27 Fee Schedule Full-time MBA continuing semester totals align ($50,480.25 nonresident / $44,357.75 resident including SHIP). Haas marketing costs page still shows 2025–26 estimates — use FAO/registrar 2026–27 figures. Full-time MBA only — not EMBA/evening/online.',
    sources: [
      ['Official tuition / budget', 'https://haas.berkeley.edu/financial-aid/full-time-mba/cost/'],
      ['UC Berkeley Registrar Fee Schedule', 'https://registrar.berkeley.edu/tuition-fees/fee-schedule/'],
      ['Full-time MBA Academics', 'https://mba.haas.berkeley.edu/academics'],
      ['Haas Full-time MBA Admissions (2026–2027 deadlines)', 'https://mba.haas.berkeley.edu/admissions'],
      ['Application requirements', 'https://mba.haas.berkeley.edu/admissions/application'],
      ['Curriculum outline', 'https://haas.berkeley.edu/mba/academics/course-planning/curriculum-outline/'],
      ['Graduation requirements', 'https://haas.berkeley.edu/mba/academics/course-planning/graduation-requirements/'],
    ],
    funding: 'Haas merit/need scholarships via Haas Financial Aid; intl students typically considered for school scholarships — confirm on aid pages. BIO fees apply to F/J.',
    confidence: 'high',
    unresolved: ["Final Regents-approved 2026–27 vs estimate","2027–28 rates","Named Haas award cards"],
    asOf: '2026-10-20',
    deadline: 'Round 2 · 7 Jan 2027 (Haas FT 2026–2027 cycle; R1 passed; clock time not on round cards)',
    deadlineDate: '2027-01-07',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-027","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-066","SCH-072","SCH-074","SCH-084"],
    academic: 'Haas Full-Time MBA: ~21 months, ≥51 units with 11-course (20-unit) core, experiential course, and required internship.',
    orientation: '~21 months · ≥51 units · 11-course core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "All candidates must take GMAT, GMAT Focus, or GRE before the round deadline. No minimum score; quantitative section emphasized. Fall 2027: official scores from exams on/after Oct 1 2021. GRE code 0574. No test-waiver path stated on Haas GMAT/GRE page.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT/GMAT Focus accepted (institution N2VPT47). Required with GRE as alternative; no minimum. Updated scores considered if received ≥2 weeks before round notification deadline.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "If degree from country where primary official language is not English: TOEFL iBT former scale ≥90; new scale (post Jan 21 2026 framing on Haas language page) total ≥5 with Speaking/Writing ≥4.5. Fall 2027: exams on/after Jun 1 2025. Code 4833 dept 02. Preferred over IELTS."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Academic IELTS overall BAND ≥7 with Speaking/Writing ≥6.5. Fall 2027: exams on/after Jun 1 2025. Electronic from test center."
        },
        "waiver": "Exempt if degree from recognized institution in English-primary official language country (Haas lists many countries that do NOT qualify regardless of instruction language); OR ≥1 year full-time coursework with B or better at university in U.S./U.K./Australia/English-speaking Canada/Singapore (ESL/nonacademic/courses after apply excluded)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No published minimum GPA on Application page; class profile cites average ~3.65 as descriptive only."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two professional letters required; one from current direct supervisor."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required video essay (1–2 min: introduce yourself; what makes you feel alive and why) plus written Essay #2 on post-MBA goals and Haas resources/adaptability (300 words). Optional Distance Traveled (300) and Optional Statement (300).",
        "alsoKnownAs": "Video essay + written essays"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume via online application; PDF preferred."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from all undergraduate and graduate programs attended or attending."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews by invitation only and required for an offer of admission."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Available for U.S. citizens/PR/DACA with AmeriCorps/Peace Corps/military or financial need (EFC); citizenship on African Continent; Haas Thrive Fellows. Request by 11:59 pm PST of round deadline.",
        "detail": "Nonrefundable $250 payable in online application."
      },
      "other": [
        "2026–27 deadlines: R1 Sep 10 2026 (decision Dec 10 2026); R2 Jan 7 2027 (Mar 25 2027); R3 Apr 1 2027 (May 6 2027)",
        "GMAT/GRE/TOEFL must be taken on or before designated deadline"
      ],
      "advice": "No published GMAT/GRE waiver—plan to test. Video essay is required. Interview invitation is mandatory path to admission.",
      "sources": [
        [
          "Admissions hub / deadlines",
          "https://mba.haas.berkeley.edu/admissions"
        ],
        [
          "Application checklist",
          "https://mba.haas.berkeley.edu/admissions/application"
        ],
        [
          "GMAT and GRE",
          "https://mba.haas.berkeley.edu/admissions/gmat-and-gre"
        ],
        [
          "Language proficiency",
          "https://mba.haas.berkeley.edu/admissions/language-proficiency-requirements"
        ],
        [
          "Essays 2026–27",
          "https://mba.haas.berkeley.edu/admissions/essays"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cmu-mba': {
    tuition: 84186,
    tuitionLabel: 'Academic-year tuition (Tepper Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'CMU Student Financial Services Tepper Full-Time MBA and Accelerated MBA page for 2026–2027 lists Tuition $42,093 Fall 2026 + $42,093 Spring 2027 = $84,186 academic year. University fees (activity $248, transportation $302, technology $490 AY), health insurance ($3,352), and living expenses are separate; single-student total budget $120,798. Full-Time MBA is four semesters; Accelerated is three — figure is one academic year only. Laptop estimate $1,500 additional. Full-time MBA only — not part-time/online.',
    sources: [
      ['Official tuition / budget', 'https://www.cmu.edu/sfs/tuition/graduate/tepper/full-accel-mba.html'],
      ['2026–2027 Graduate Tuition index', 'https://www.cmu.edu/sfs/tuition/graduate/index.html'],
      ['MBA curriculum', 'https://www.cmu.edu/tepper/programs/mba/curriculum'],
      ['Apply to Full-Time MBA (deadlines table)', 'https://www.cmu.edu/tepper/programs/mba/admissions/apply-full-time-mba'],
      ['Full-Time MBA', 'https://www.cmu.edu/tepper/programs/mba/full-time'],
      ['MBA programs hub', 'https://www.cmu.edu/tepper/programs/mba/'],
      ['Curriculum map PDF', 'https://www.cmu.edu/sites/default/files/cmu-tepper-site-files/documents/full-time-mba-curriculum-map-24-25.pdf'],
    ],
    funding: 'Tepper MBA scholarships not detailed on SFS tuition page; check Tepper admissions financial aid. Do not invent amounts.',
    confidence: 'high',
    unresolved: ["Named Tepper MBA fellowship list/intl eligibility","2027–28 rates"],
    asOf: '2026-10-20',
    deadline: 'Round 2 · 8 Jan 2027 (Full-Time MBA; R1 passed; clock time not on table)',
    deadlineDate: '2027-01-08',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-050","SCH-062","SCH-064","SCH-065","SCH-072","SCH-074","SCH-084"],
    academic: 'Tepper Full-Time MBA: ~21 months, 192 units, mini-semester format with early electives and final-mini capstone. Accelerated option separate.',
    orientation: '~21 months · 192 units · Mini-semesters',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GMAT, GMAT Focus, GRE, or EA required unless approved test waiver. GRE code Carnegie Mellon Tepper 4883. Scores valid 5 years at submit. Waiver case-by-case for academic readiness; does not signal admission; scholarship eligibility unaffected. Pre-check eligibility form available.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT/GMAT Focus Full-Time MBA code 69H-XH-99; EA accepted (strong quant coursework and/or STEM professional experience expected). No superscore as official; holistic review of all submitted scores. Waiver alternative available case-by-case.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL required unless bachelor’s or graduate degree with sole language of instruction English. Recommended iBT 25 each section; new TOEFL iBT overall ≥5 with section ≥5. Code 2074 Carnegie Mellon Graduate Business. Valid 2 years."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Recommended IELTS overall 7 and 7 in each band. Select Carnegie Mellon and Tepper. Duolingo DET also accepted (recommended overall 120)."
        },
        "waiver": "Waived if bachelor’s (or graduate—recommend still testing) from institution where sole language of instruction was English. Non-U.S. degrees: documents must state English sole medium for entire university, or upload official Registrar letter."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No published minimum GPA. Prerequisite: one semester college-level calculus with letter grade B or better (or complete Tepper Calculus Fundamentals before matriculation)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional recommendation; ideally current/previous supervisor. GMAC Common LOR."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One required written essay (max 500 words)—choose 1 of 2 prompts (uncertainty/action or professional/personal transformation). Required video essay on post-MBA career goals (up to 2 minutes). Optional essay for gaps/context/reapplicant strengthening.",
        "alsoKnownAs": "Written essay + video goals essay"
      },
      "resume": {
        "status": "required",
        "detail": "1–2 page resume; standard 12-pt font; include Month/Year start and end dates for each role."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial scanned university transcripts (not web/portal downloads) from all undergrad/grad; degree name/conferral; grading scale; translations if needed. Official after admit."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Evaluative behavioral interview by invitation only and required. Invitations may begin within one week of deadline through decision date."
      },
      "applicationFee": {
        "amountUsd": 200,
        "waivers": "May earn waiver by attending a Tepper event; reapplicants within last year waived.",
        "detail": "$200 payable online by credit card at submission."
      },
      "other": [
        "Deadlines: R1 Sep 30 2026; R2 Jan 8 2027; R3 Mar 3 2027 (final for international FT); R4 May 5 2027; R4 Final Jun 15 2027",
        "Four-year bachelor’s or equivalent required",
        "Re Vera verification for admitted students who accept"
      ],
      "advice": "Plan GMAT/GRE/EA unless you obtain an approved waiver before/at review. Video essay is mandatory. International applicants: Round 3 is last FT round.",
      "sources": [
        [
          "Apply to Full-Time MBA",
          "https://www.cmu.edu/tepper/programs/mba/admissions/apply-full-time-mba"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'columbia-mba': {
    tuition: 93908,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA, August-entry first-year budget)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Columbia Business School Financial Aid Full-Time MBA and MBAxMS costs page lists 2026–27 August-entry Cost of Attendance with Tuition $93,908 (9-month first-year budget). Mandatory fees $6,783, health insurance $5,823, and living expenses are separate; first-year total budget $143,030. Continuing (second-year) budget also lists Tuition $93,908 (mandatory fees $6,678; second-year total budget $142,925). Note that tuition and fees generally increase 2–7% in the second year. Full-time MBA only — not Professional MBA or EMBA.',
    sources: [
      ['Official tuition / budget', 'https://business.columbia.edu/financial-aid/costs/full-time'],
      ['MBA academics', 'https://academics.business.columbia.edu/mba'],
      ['MBA options and deadlines (August 2027)', 'https://academics.business.columbia.edu/admissions/mba/options-deadlines'],
      ['Full-Time MBA Admissions', 'https://academics.business.columbia.edu/admissions/mba'],
      ['Degree requirements', 'https://academics.business.columbia.edu/mba/academics/degree-requirements'],
      ['Core curriculum', 'https://academics.business.columbia.edu/mba/academics/core-curriculum'],
    ],
    funding: 'Merit/need aid via CBS Financial Aid; international eligibility for scholarships typically yes for school awards but verify per award. Federal loans restricted.',
    confidence: 'high',
    unresolved: ["Direct WebFetch of costs page timed out once; figures from search+prior official synthesis — re-open page to confirm if needed","Named CBS fellowships list and intl flags","2027–28 tuition"],
    asOf: '2026-10-20',
    deadline: 'August-entry Round 2 · 5 Jan 2027 · 12:00 p.m. ET (August 2027 entry; R1 passed; apps open)',
    deadlineDate: '2027-01-05',
    academic: 'Columbia MBA: 4 terms, 60 credits (18 core + ≥42 electives). Cluster core with exemption options; Operations typically in term 2.',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-024","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    orientation: '4 terms · 60 credits · 18 core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Self-reported valid GMAT, EA, or GRE required at submission; FAQ states no test-score waiver under any circumstances. Valid 5 years; GRE code 6442. Highest total considered; no superscoring across sittings. Official after admit.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT Exam (10th) or Focus Edition or EA accepted (code QF8-N6-52). Required—no exemption.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "FAQ: International students are not required to submit TOEFL or similar language tests; GMAT/GRE verbal score sufficient; interview conducted in English."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "Not required per CBS MBA FAQ (same as TOEFL)."
        },
        "waiver": "N/A—language tests not required for MBA; proficiency assessed via GMAT/GRE verbal and interview."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Report GPA as on transcript; no published minimum cutoff on application-requirements page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One recommendation for first-time applicants (new one for reapplicants). Prefer current supervisor if ≥6 months full-time work; otherwise explain. Professional email; letterhead preferred."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two short answers (50 chars each: immediate post-MBA goal; summer after Y1) plus three essays (career goals 500w; team collaboration/inclusion 250w; co-create CBS experience 250w). Optional context essay ≤500w. August- and January-entry prompts on requirements page.",
        "alsoKnownAs": "Short answers + essays"
      },
      "resume": {
        "status": "required",
        "detail": "Current professional resume/CV; ideally one page, one-to-two acceptable."
      },
      "transcripts": {
        "status": "required",
        "detail": "PDF scans from each undergrad/grad institution attended; encrypted digital official copies after offer. Bachelor’s or equivalent required."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation only; cannot be requested. Admissions Office contacts selected candidates."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Full-time students; active-duty U.S. military; eligible displaced persons; Peace Corps or Teach For All currently in service (proof required). Automatic waiver for Deferred Enrollment Program.",
        "detail": "Nonrefundable US$250 (Visa/MasterCard in app preferred)."
      },
      "other": [
        "August- and January-entry options; use August-entry for Fall 2027 peer comparison",
        "Starter deadlines hub: https://academics.business.columbia.edu/admissions/mba/options-deadlines",
        "Deposit schedule varies by entry/round (e.g., August R1 US$6,000 then US$1,000)"
      ],
      "advice": "No GMAT/GRE/EA waiver—score required to submit. Skip TOEFL unless applying to a dual that needs it. Interview only if invited.",
      "sources": [
        [
          "MBA application requirements",
          "https://academics.business.columbia.edu/admissions/mba/application-requirements"
        ],
        [
          "MBA admissions overview",
          "https://academics.business.columbia.edu/admissions/mba"
        ],
        [
          "MBA FAQ (TOEFL / test waiver)",
          "https://academics.business.columbia.edu/admissions/mba/frequently-asked-questions"
        ],
        [
          "Options & deadlines",
          "https://academics.business.columbia.edu/admissions/mba/options-deadlines"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'dartmouth-mba': {
    tuition: 87536,
    tuitionLabel: 'Academic-year tuition (Tuck MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Tuck Cost of Attendance for Academic Year 2026–2027 lists Tuition $87,536 for Class of 2028 (on- or off-campus) and Class of 2027 (off-campus). Program fee is separate ($6,150 first-year / $5,440 second-year). Housing, food, and health insurance ($5,216) are separate. Footnote: tuition costs are for AY 2026–27 and subject to change; anticipate a 3–5% increase for 2027–28. First year is four terms; second year three terms on Tuck’s quarter schedule.',
    sources: [
      ['Official tuition / budget', 'https://tuck.dartmouth.edu/admissions/finance-your-degree/cost-attendance'],
      ['Academic experience', 'https://tuck.dartmouth.edu/mba/academic-experience'],
      ['Tuck Tuition and Costs', 'https://tuck.dartmouth.edu/admissions/finance-your-degree/tuition-and-costs'],
      ['Scholarships and Fellowships', 'https://tuck.dartmouth.edu/admissions/finance-your-degree/scholarships-and-fellowships'],
      ['Applying to Tuck (application deadlines)', 'https://www.tuck.dartmouth.edu/admissions/apply'],
      ['Required curriculum', 'https://tuck.dartmouth.edu/mba/academic-experience/required-curriculum'],
      ['Academic FAQs', 'https://tuck.dartmouth.edu/mba/academic-experience/academic-faqs'],
    ],
    funding: 'Tuck scholarships/fellowships pages under Finance Your Degree; intl eligibility typically yes for school merit aid — confirm each award.',
    confidence: 'high',
    unresolved: ["Named Tuck fellowship cards and intl flags","Exact Class of 2028 (Fall 2027 entry) tuition when published"],
    asOf: '2026-10-20',
    deadline: 'Round 2 · 5 Jan 2027 · 5:00 p.m. ET (Tuck; R1 passed)',
    deadlineDate: '2027-01-05',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-026","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Tuck MBA: 2 years, 76.5 credits (14-course core + electives). Integrated Y1 required curriculum; Y2 electives.',
    orientation: '2 years · 76.5 credits · 14-course core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Must self-report GMAT or GRE (all versions accepted; no superscore; no minimum). Valid at submit; GRE code 4887. Case-by-case GMAT/GRE waiver if ≥2 years post-grad work, native English OR bachelor’s sole English instruction, request before deadlines (R1/Consortium1 Aug 12 2026; R2/C2 Nov 9 2026; R3 Mar 5 2027)—not automatic; miss deadline → must submit score that round.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted (code Z04-NH-64). Same waiver request process/deadlines as GRE. Official scores for enrolling students; release early if score expires before Aug 1 2027.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Non-native English speakers must submit DET, IELTS Academic, PTE Academic, or TOEFL iBT unless bachelor’s from institution where English is sole language of instruction. No published minimum scores. TOEFL code D507. Online/at-home accepted. DET must be certified to Tuck before submit."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS Academic accepted; provide TRF number. No published minimum band on Apply page."
        },
        "waiver": "Non-native speakers qualify if bachelor’s degree from institution where English is sole language of instruction—self-indicate in Degrees section; no separate approval documents required for that waiver."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Report undergrad GPA and additional schools in Degrees section; committee calibrates across grading schemes—no published minimum."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two LORs (one new LOR if reapplicant from most recent cycle). Prefer current direct supervisor; explain if not. GMAC Common LOR questions. Professors/friends/family/coaches discouraged."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three required essays (2000 characters each): goals/growth/why Tuck; important aspect of who you are; supporting another person when difficult. Reapplicant essay additional. Optional information section (2000 chars).",
        "alsoKnownAs": "Application essays"
      },
      "resume": {
        "status": "required",
        "detail": "Upload resume; encouraged one page covering undergrad-and-after experiences."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcript for every undergrad/grad school attended including grading scale; certified English translation if needed; transfer school transcripts required. Official via Re Vera after enrollment."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "All admitted applicants interview before offer. Guaranteed interview if complete app (incl. tests + LORs) by Sep 1 2026 (R1/C1) or Dec 1 2026 (R2/C2) 5pm ET; otherwise invitational. Virtual and limited on-campus; 30–45 min with Tuck Admissions Associates."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Automatic one-time for listed groups (U.S. military active/veteran; recent Dartmouth/HACU/HBCU/TCU/Women’s College grads; UN LDCs; first-gen; Tuck undergrad programs; Discover Tuck visit attendees as of Jul 10 2026; etc.). Requestable with docs for Access Fellows, AmeriCorps, Forté, Fulbright, MLT, Pell, Peace Corps, TFA, etc.—≥2 business days before deadline.",
        "detail": "Nonrefundable $250 USD; processing fees may apply."
      },
      "other": [
        "Rounds: R1 Sep 24 2026 5pm ET; R2 Jan 5 2027; R3 Mar 24 2027 (+ Consortium Oct 15 2026 / Jan 5 2027)",
        "Short-/long-term goals in Application Specifics (300 characters each)",
        "International applicants encouraged R1/R2 for visa timing"
      ],
      "advice": "GMAT/GRE required unless approved waiver before round-specific waiver deadline. Early complete apps can lock a guaranteed interview. No published English score floors—submit a solid DET/IELTS/TOEFL/PTE if not waived.",
      "sources": [
        [
          "Applying to Tuck",
          "https://www.tuck.dartmouth.edu/admissions/apply"
        ],
        [
          "Interview with Tuck",
          "https://www.tuck.dartmouth.edu/admissions/interview"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'duke-mba': {
    tuition: 83700,
    tuitionLabel: 'Academic-year tuition (Daytime MBA, Class of 2028)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Fuqua Daytime MBA Tuition + Costs: for students beginning August 2026 (Class of 2028), tuition is currently $83,700 USD ($41,850 Fall + $41,850 Spring; includes $4,000 non-refundable deposit credited to Fall). 2026–27 first-year COA lists additional fees (health fee, MBA Association, pre-term fee, etc.) and living expenses separately; Total COA $118,974. Dual-degree blended rates differ. Daytime MBA only — not Executive/online formats.',
    sources: [
      ['Fuqua Daytime MBA Tuition + Costs', 'https://www.fuqua.duke.edu/programs/daytime-mba/tuition-costs'],
      ['Curriculum', 'https://www.fuqua.duke.edu/programs/daytime-mba/curriculum'],
      ['Daytime MBA Admissions Facts + Dates', 'https://www.fuqua.duke.edu/programs/daytime-mba/admissions-facts-dates'],
      ['Daytime MBA program', 'https://www.fuqua.duke.edu/programs/daytime-mba/'],
      ['Program format', 'https://www.fuqua.duke.edu/programs/daytime-mba/program-format'],
      ['Graduation requirements', 'https://www.fuqua.duke.edu/graduation-requirements'],
    ],
    funding: 'Merit-based scholarships: all applicants considered. International Student Loan Program available. Yellow Ribbon / CASE / Adams LRAP have separate criteria.',
    confidence: 'high',
    unresolved: ["Tuition for Class of 2029 (Fall 2027 entry)","Merit award ranges"],
    asOf: '2026-10-20',
    scholarships: ["SCH-008","SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-078","SCH-084"],
    deadline: 'Round 2 · 5 Jan 2027 (Daytime MBA 2026–2027 cycle; EA & R1 passed; clock time not on table)',
    deadlineDate: '2027-01-05',
    academic: 'Fuqua Daytime MBA: ~22 months, ≥79 credits with ~13 core courses then heavy electives; 6-week terms.',
    orientation: '~22 months · ≥79 credits · Flexible electives',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Self-reported GMAT, GMAT Focus, GRE, or EA required (application lists self-reported test scores among materials). No minimum; valid 5 years; unofficial OK at apply, official upon admit. GRE code 5156 / dept 4201. No Daytime MBA test-waiver path described on Application Instructions. Include individual sittings plus any GMAT Superscore.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT/GMAT Focus/EA accepted (code Q13-N5-32). Same policy as GRE—required component; no published waiver for Daytime MBA.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "Fuqua does not accept ESL test scores (TOEFL etc.); assesses English via other application components. Exception: dual MBA/MEM with Nicholas School requires ESL for the MEM side."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "ESL scores not accepted for Daytime MBA per Application Instructions / FAQ."
        },
        "waiver": "N/A—ESL tests not used; proficiency judged holistically (and in interview conducted in English)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Wide range of GPAs considered; no published minimum on Facts+Dates / Application Instructions."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One required recommendation via online forms only (new applicants). Prefer most recent professional setting. Optional bonus endorsements from Fuqua students/alumni (can unlock fee waiver if before pay)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required short answer (100 words: post-MBA career goals + alternate). Essay 1: 25 Random Things (≤2 pages / 750 words, numbered list). Essay 2: 3 ways you will contribute at Fuqua (≤1 page / 500 words). Optional circumstances essay ≤500 words.",
        "alsoKnownAs": "Short answer + essays"
      },
      "resume": {
        "status": "required",
        "detail": "Required one-page business resume in online application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Legible unofficial transcripts for degree-granting and related coursework institutions; include courses/grades/degree/date; translate/attest if not English. Official after admit."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation on rolling basis; all admitted applicants must interview. Alumni/staff/Admissions Fellows; on-campus (EA/R1/R2) or virtual; ~45–60 min; interviewer sees resume only. FAQ: interview required before offer."
      },
      "applicationFee": {
        "amountUsd": 225,
        "waivers": "Full waiver: campus visit/open house; International Applicant Symposium; Duke alumni; military; Peace Corps/AmeriCorps/TFA/Teach For All; listed partner orgs; Early Action round; UN LDC citizen; reapplicant ≤2 years; certain multi-day campus events. $75 discount: qualifying event attendance or Fuqua student/alumni endorsement before submit.",
        "detail": "Nonrefundable $225 USD (Visa/MasterCard)."
      },
      "other": [
        "Deadlines: Early Action Sep 2 2026 (binding); R1 Sep 30 2026; R2 Jan 5 2027; R3 Mar 25 2027",
        "International: apply EA/R1/R2 preferred for visas; FAQ also notes apply by R3 for visa processing",
        "Accelerated MBA: Rounds 1–3 only; Consortium Oct 15 & Jan 5"
      ],
      "advice": "Plan a GMAT/GRE/EA—no Daytime waiver published. Do not send TOEFL/IELTS for Daytime alone. Early Action is binding if admitted.",
      "sources": [
        [
          "Admissions Facts + Dates",
          "https://www.fuqua.duke.edu/programs/daytime-mba/admissions-facts-dates"
        ],
        [
          "Application Instructions",
          "https://www.fuqua.duke.edu/programs/daytime-mba/application-instructions"
        ],
        [
          "Daytime MBA FAQ",
          "https://www.fuqua.duke.edu/programs/daytime-mba/faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'texas-mba': {
    tuition: 61214,
    tuitionLabel: 'Academic-year tuition and fees (Full-Time MBA, Non-Texas resident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Texas McCombs Full-Time MBA Tuition & Financial Aid: Non-Texas Residents Year 1 (and Year 2) program installment $61,214; Texas Residents $55,196. First-year Fall 2026 / Spring 2027 estimated COA lists Tuition & Fees $61,214 nonresident / $55,196 resident (based on expected 15/14 credit hours first year; actual billed by enrolled hours). Separate nonrefundable $1,500 MBA student fee due the summer before enrollment is not in the $61,214. Two-year program totals published as $122,428 nonresident / $110,392 resident — not used as the annual figure. Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/tuition-financial-aid/'],
      ['Curriculum & concentrations', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/academics/curriculum/'],
      ['Full-Time MBA How to Apply (application deadlines)', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/admissions/application-process/'],
      ['Full-Time MBA', 'https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/'],
      ['Catalog degree requirements', 'https://catalog.utexas.edu/graduate/areas-of-study/business/business-administration/degree-requirements/'],
    ],
    funding: 'All Full-Time MBA applicants considered for merit scholarships regardless of citizenship; cash awards and out-of-state tuition waivers; $2,000 to full tuition. TA/RA limited; first-semester difficult; no residency change via assistantship.',
    confidence: 'medium',
    unresolved: ["Class of 2029 (Fall 2027 entry) tuition table not confirmed on page (Class of 2027 shown)","Exact international mandatory fees stack"],
    asOf: '2026-10-20',
    scholarships: ["SCH-009","SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    deadline: 'Round 2 · 15 Jan 2027 · 11:59 p.m. CT (Full-Time MBA; R1 passed)',
    deadlineDate: '2027-01-15',
    academic: 'McCombs Full-Time MBA: ~21 months, 62 hours (23 core + 37 electives) with Custom Core flexibility in year 1.',
    orientation: '~21 months · 62 hours · Custom Core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "All FT MBA applicants must submit GMAT, GMAT Focus, GRE, or EA unless: expired (5+ years) score submitted with proof; OR merit-based General Test Waiver approved before submit; OR dual-degree in participating program. No preference / no minimum. GRE code 6882. Self-report + official agency report for current scores. Waiver admits must enroll in Accelerated Foundations (1-week quant prep).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT/GMAT Focus/EA accepted (school code 396-44-40). Same required-or-waiver framework. Superscore received from GMAC considered for quant readiness; class-profile reporting uses highest single-sitting total.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "International applicants must submit TOEFL, IELTS, or DET unless McCombs waiver criteria met. UT Graduate Admissions minimum TOEFL iBT 79 (or 4 on 6-point scale). McCombs page does not post a higher program minimum. Scores in hand before submit. ETS code 6882."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic overall 6.5 minimum per UT Graduate Admissions. DET also accepted (min 115). Send via IELTS electronic delivery to University of Texas at Austin."
        },
        "waiver": "U.S. citizens/PR do not submit. International waiver if: lived/worked full-time in U.S. or English-only official-language country ≥2 of past 4 years; OR hold master’s from U.S./English-only country; OR educated solely in English for undergrad/prior grad in a country where English is not the only official language. Check box in application; processed 7–10 business days after submit. Note: UT Grad exemption list (e.g. India bachelor’s) differs from McCombs-specific waiver text—follow McCombs application checkboxes."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Bachelor’s from regionally accredited U.S. institution or comparable foreign degree required. No numeric minimum GPA on McCombs application-process page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One recommendation from someone who supervised work and/or assessed performance; professional strongly preferred. Explain non-supervisor choice in optional statement. Form includes competency ratings + three narrative prompts."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two required essays (250 words each) for 2025–2026 cycle refresh: (1) why McCombs MBA / how you used the program; (2) core value example and impact. Optional statement 250 words for gaps/recommender/academics.",
        "alsoKnownAs": "MBA essay prompts"
      },
      "resume": {
        "status": "required",
        "detail": "Professional résumé in application. Typically ≥2 years full-time post-bachelor’s work experience required for admission (calculated to enrollment); teaching/military/government count."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts twice: in McCombs application before fee, then again to Office of Graduate Admissions after fee. Official from every higher-ed institution except junior/technical college. Domestic transcripts produced within past calendar year. Non-English: official English translations with originals."
      },
      "interview": {
        "status": "required",
        "detail": "Video Assessment required for all applicants shortly after submit (6 prompts, 90 seconds each; 7 days to complete after platform access)—structured consistent assessment. Separately, virtual behavioral interview with McCombs Ambassador Committee is encouraged but not required and open to all applicants (20–30 min)."
      },
      "applicationFee": {
        "amountUsd": 200,
        "waivers": "UT Grad fee-waiver process (need-based docs) explicitly not available for MBA/MPA programs per Graduate Admissions apply page.",
        "detail": "MBA (and dual with MBA): $200 nonrefundable via MyStatus 1–2 business days after application submission (UT Graduate Admissions)."
      },
      "other": [
        "Rounds: Oct 15 2026 / Jan 15 2027 / Apr 1 2027 (11:59 p.m. CT)",
        "Only online application must meet deadline—video assessment and Ambassador interview may finish after deadline",
        "Re Vera employment/recommendation verification (~$85) if admitted",
        "Essay prompts labeled refreshed for 2025–2026 cycle on live page as of scrape"
      ],
      "advice": "Request merit test waiver before submitting if eligible; dual-degree applicants skip waiver petition. Complete Video Assessment within 7 days. Confirm English waiver path matches McCombs checkboxes, not only UT Grad country list.",
      "sources": [
        [
          "McCombs FT MBA application process",
          "https://www.mccombs.utexas.edu/graduate/mba/full-time-mba/admissions/application-process/"
        ],
        [
          "UT Grad how to apply / MBA fee $200",
          "https://graduate.utexas.edu/admissions/apply"
        ],
        [
          "UT Grad international English mins",
          "https://graduate.utexas.edu/admissions/apply/international"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'yale-mba': {
    tuition: 90900,
    tuitionLabel: 'Academic-year tuition (Yale SOM MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Yale SOM Affording Your MBA Cost Information lists Cost of Attendance 2026–27 with Tuition $90,900 and Program Fee $500 (Total Tuition and Fees $91,400). Living expenses, books, transportation, and Yale Health insurance ($3,764) are separate; total single-student budget $128,976. Joint-degree fees may differ.',
    sources: [
      ['Official tuition / budget', 'https://som.yale.edu/programs/mba/affording-your-mba/cost-information'],
      ['Integrated curriculum', 'https://som.yale.edu/programs/mba/curriculum'],
      ['Affording Your MBA', 'https://som.yale.edu/programs/mba/affording-your-mba'],
      ['MBA Application Information (deadlines)', 'https://som.yale.edu/programs/mba/admissions/application-information'],
      ['MBA Admissions', 'https://som.yale.edu/programs/mba/admissions'],
      ['MBA program', 'https://som.yale.edu/programs/mba'],
      ['MBA curriculum (catalog)', 'https://catalog.yale.edu/management/full-time-mba/mba-curriculum/'],
      ['Core courses', 'https://catalog.yale.edu/management/courses/mba-core-courses/'],
    ],
    funding: 'All full-time MBA students complete Scholarship Application after admission for Yale SOM scholarships; international students eligible for school scholarships (country-specific awards also exist). Median award figure is Class of 2027 statistic, not a guarantee.',
    confidence: 'high',
    unresolved: ["2027–28 tuition","Full list of named SOM fellowships"],
    asOf: '2026-10-20',
    scholarships: ["SCH-005","SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-082","SCH-084"],
    deadline: 'Round 2 · 6 Jan 2027 (Fall 2027 / 2026–27 cycle; R1 passed; clock time not on table)',
    deadlineDate: '2027-01-06',
    academic: 'Yale SOM MBA: 2 years, 72 units. Integrated Year-1 core (Orientation + Organizational Perspectives) then Year-2 electives; summer internship required.',
    orientation: '2 years · 72 units · Integrated core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Verified GMAT or GRE required; Yale SOM does not waive the test score requirement for any applicant. GRE code 3986. Scores valid 5 years and must be valid on submit date; official report by Post-Submission Materials Deadline. Highest score credited; all reported scores considered. No minimum.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT (including online/newer shorter versions) required alternatively to GRE—no preference. Send to Yale School of Management MBA, Full-Time via mba.com. LSAT also accepted for law-school-path candidates (email mba.admissions@yale.edu for instructions). No waivers.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "TOEFL not required for international MBA applicants. Fluency in English required for admission; assessed in part via video questions."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "IELTS and PTE Academic not required for international MBA applicants."
        },
        "waiver": "N/A—English proficiency exams are not required; video questions help assess communication/English skills."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated. Report GPA only if listed on transcript; otherwise leave blank and check 'No GPA reported on transcript.' Class Profile has ranges."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two professional recommendations; ideally one from most recent supervisor. Silver Scholars: one academic + one professional. Letters in English (translation OK)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Choose one of three essay prompts (500-word limit): biggest commitment; most meaningful community; or most significant challenge. Optional Information section truly optional. After submit + fee: video questions (two recorded prompts, 60 seconds each) and ETS Behavioral Assessment (~25 minutes).",
        "alsoKnownAs": "Essay; video questions; Behavioral Assessment"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required; typically one page unless >10 years experience. Focus on accomplishments/impact."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from every college/university attended (undergrad, graduate, study abroad, transfer, non-degree for credit). Unofficial OK to apply; official if enroll. Non-English: original + notarized English translation. Three-year international degrees may apply."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "All admitted applicants will have had an interview. Invitations rolling within round; 30-minute blind interview with 2Y student, recent alum, or Admissions. Waitlisted candidates may interview later rounds."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Sliding scale: $175 if earning <$50k/year; $125 if <$25k/year (based on reported compensation; verified if enroll). Full waivers: U.S. military/veterans; alumni/students of ~700 economic-diversity U.S. colleges (≥35% Pell); Girls Who Invest alumni; Forté MBALaunch; Peace Corps; current Yale students; MLT MBA Prep Fellows; Teach for America/China/India/Teach for All; QuestBridge seniors/alumni. Request ≥48 hours before deadline.",
        "detail": "Standard fee $250 with income-based sliding scale."
      },
      "other": [
        "2026–27 deadlines: R1 Sep 15 2026; R2 Jan 6 2027; R3 Apr 7 2027.",
        "Consortium and QuestBridge Graduate School Match pathways available.",
        "Silver Scholars Program for college seniors (same application with recommender differences).",
        "Full-time work experience strongly encouraged but not required (avg ~5 years)."
      ],
      "advice": "GMAT/GRE required with no waivers—do not treat as optional. No TOEFL/IELTS needed. Complete video questions and Behavioral Assessment promptly after fee payment.",
      "sources": [
        [
          "Yale SOM MBA Application Information",
          "https://som.yale.edu/programs/mba/admissions/application-information"
        ],
        [
          "Yale SOM MBA Application Guide",
          "https://som.yale.edu/programs/mba/admissions/application-information/application-guide"
        ],
        [
          "Yale SOM MBA Admissions FAQ",
          "https://som.yale.edu/programs/mba/admissions/application-information/faq"
        ],
        [
          "Yale SOM International Students",
          "https://som.yale.edu/programs/mba/admissions/application-information/international-students"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'virginia-mba': {
    tuition: 83328,
    tuitionLabel: 'Academic-year tuition (Darden MBA, Non-Virginia domicile)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Darden Tuition, Fees & Billing for Class of 2028: Fall 2026 / Spring 2027 Tuition $41,664 per semester for Non-Virginia domicile and International students → $83,328 AY. Virginia domicile tuition $39,505/semester → $79,010 AY. Comprehensive and activity fees are separate; published Fall/Spring Tuition & Fees (excl. case fees) are $44,000 Non-VA / $41,500 VA per semester ($88,000 / $83,000 AY). COA Class of 2028 lists Tuition & Fees $88,000 Non-VA / $88,240 International / $83,000 Virginia, plus case fees $1,100. Health insurance $4,220 billed in Fall if on UVA plan. Full-time residential MBA — not EMBA.',
    sources: [
      ['Official tuition / budget', 'https://www.darden.virginia.edu/mba/tuition-financial-aid/tuition-fees-billing'],
      ['Cost of Attendance', 'https://www.darden.virginia.edu/mba/tuition-financial-aid/cost-of-attendance'],
      ['MBA academics', 'https://www.darden.virginia.edu/mba/academics'],
      ['MBA Apply Deadlines (2026–27 / Class of 2029)', 'https://www.darden.virginia.edu/mba/admissions/apply/deadlines'],
      ['Darden 2026–27 Full-Time MBA Application Live', 'https://www.darden.virginia.edu/programs/blog/2026-27-full-time-mba-application-live'],
      ['MBA program', 'https://www.darden.virginia.edu/mba/'],
      ['Core curriculum', 'https://www.darden.virginia.edu/mba/academics/core-curriculum'],
      ['Full-Time MBA', 'https://www.darden.virginia.edu/mba'],
    ],
    asOf: '2026-10-20',
    deadline: 'Round 2 · 7 Jan 2027 (Full-Time MBA Class of 2029 / Aug 2027; EA & R1 passed; clock time not on table)',
    deadlineDate: '2027-01-07',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-029","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Darden Full-Time MBA: ~21 months, 57 credits (25.5 core). Integrated case-method Y1 core; Y2 electives.',
    orientation: '~21 months · 57 credits · Case core',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Verified GRE accepted equally with GMAT (prior/current), EA, MCAT, LSAT unless approved test waiver. ETS code 4629. Report all valid scores; cancelled/expired noted in counts only. Verified score within 1 week of round deadline for completeness. No minimum. Waiver case-by-case (strong GPA vs class avg ~3.5, analytical degree/coursework, ≥3 years quant/analytical work, optional SAT/ACT/CPA/CFA).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT Previous/Current Editions accepted; GMAC code KC7-0X-86. Superscores accepted and all valid attempts reviewed. EA/MCAT/LSAT also accepted equivalently. Waiver path as in GRE detail—waiver ≠ optional for all.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Required if bachelor's medium of instruction was not English. TOEFL code 5820. No minimum requirement; average TOEFL cited as 106. Valid 2 years. Unofficial scores needed before submit; official to Darden."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted (search University of Virginia - Darden School of Business). PTE and Duolingo English Test also accepted (DET: UVA Darden). No published minimum."
        },
        "waiver": "Not required if bachelor's degree from university where medium of instruction was English. Master's/PhD with English MOI (if bachelor's was not) — English test strongly recommended."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA. Holistic review across academics, professional experience, personal qualities."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One recommendation required; optional second if new insights. Prefer recent professional supervisor. Electronic ratings grid + short answers (interaction; peer comparison; constructive feedback given)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "2026–27 cycle: two short answers (200 words each)—(1) Relationships Matter Here: what classmates should know not on resume; (2) Careers With Purpose: short-term post-MBA goal (industry/function/geography/size/mission) and long-term alignment—plus one 90-second video essay (random Admissions Committee prompt).",
        "alsoKnownAs": "Short answer questions; video essay"
      },
      "resume": {
        "status": "required",
        "detail": "Typically one-page if <10 years experience. Separate employment history section in application; quantify impact; personal interests welcome."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts for all degree-related coursework uploaded. Non-English: full literal translation with official transcript. Official transcripts from degree-granting institutions before start if matriculating. Three-year bachelor's degrees recognized if equivalent."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interview required before acceptance; by invitation after review (Admissions Committee or Second Years). Early Action offers limited open interview slots applicants can schedule before submitting."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Event reductions: $100 off (to $150) for partner/off-site Darden events or qualifying webinars; $150 off (to $100) for in-person Charlottesville or Darden DC Metro events (May 1 2026–May 1 2027 attendance). Full waivers: 2025–26 reapplicants; U.S. military veterans/active duty; current/recently separated government employees; National Service alumni (AmeriCorps/Peace Corps/TFA/Teach for All); first-generation college students; UVA alumni/current UVA grad students; alumni of Virginia colleges. Reductions not stackable.",
        "detail": "Nonrefundable $250 application fee."
      },
      "other": [
        "Class of 2029 / Aug 2027 matriculation. Deadlines: EA Sep 9 2026; R1 Oct 7 2026; R2 Jan 7 2027; R3 Mar/Apr/May 1 2027.",
        "Future Year Scholars deferred pathway for college seniors (separate 2026 deadlines).",
        "Does not admit applicants who already hold an AACSB-accredited MBA.",
        "Accounting and statistics recommended before matriculation (not prerequisites)."
      ],
      "advice": "Verified test or approved waiver required—optional ≠ waived. Apply test waiver 3–4 weeks before target round. International applicants strongly encouraged Early Action/R1; Round 3 by Apr 1 for visa timing.",
      "sources": [
        [
          "Darden MBA Application Deadlines",
          "https://www.darden.virginia.edu/mba/admissions/apply/deadlines"
        ],
        [
          "Darden MBA Application Guidelines",
          "https://www.darden.virginia.edu/mba/admissions/apply/guidelines"
        ],
        [
          "Darden MBA Admissions FAQ",
          "https://www.darden.virginia.edu/mba/admissions/faq"
        ],
        [
          "Darden International Students",
          "https://www.darden.virginia.edu/mba/admissions/apply/international-students"
        ],
        [
          "Darden 2026–27 Application Deadlines/Essays blog",
          "https://www.darden.virginia.edu/programs/blog/darden-full-time-mba-application-2026-27"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'penn-mba': {
    tuition: 87970,
    tuitionLabel: 'Academic-year tuition',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: '2026–27 university fees: $5,038; published annual budget: $135,441. Extra-curricular activities can add costs.',
    sources: [
      ['Official tuition / budget', 'https://mba.wharton.upenn.edu/tuition-financial-aid/'],
      ['Application timeline & deadlines 2026–27', 'https://mba.wharton.upenn.edu/application-timeline-deadlines/'],
      ['Admissions process / application guide', 'https://mba.wharton.upenn.edu/admissions/admissions-process/'],
      ['Wharton MBA home', 'https://mba.wharton.upenn.edu/'],
      ['MBA curriculum', 'https://mba.wharton.upenn.edu/mba-curriculum/'],
      ['Program details & duration', 'https://mba.wharton.upenn.edu/mba-program-details/'],
    ],
    orientation: '~20 months · 19 CU · Core + major',
    internship: 'Individual career advising is described on the MBA page. Internship placement rate and international outcomes have not been verified.',
    deadline: 'Round 2 · 5 Jan 2027 · 5:00 p.m. ET (Fall 2027 / 2026–27 cycle; R1 passed)',
    deadlineDate: '2027-01-05',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-022","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Wharton MBA: ~20 months, 19 CU (9 core + major + electives). Fixed and flexible core; at least one of 22 majors.',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "All applicants must submit GMAT (classic or Focus) or GRE; test center or at-home accepted. Self-report OK; official scores if admitted. Valid within 5-year window by round (e.g. R1 Sep 8 2021–Sep 8 2026). Code GRE 6802. AWA not currently required. No minimum posted.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GMAT Focus accepted as alternative to GRE. Code G56-97-73. Same validity windows. No minimum posted.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL iBT required if degree not from English-instruction institution. Code D810-99. English tests valid ~2 years by round window. No minimum score posted (Class of 2022 average TOEFL was 115 for those who took it—historical, not a cutoff)."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted along with TOEFL iBT, PTE, and Duolingo English Test. No minimum posted on Application Guide."
        },
        "waiver": "Waived if you earned a degree from an institution where English was the language of instruction (Application Guide). FAQ also: undergrad or Master’s in English-speaking country or English-instruction institution—include waiver letter + documentation in application. PTE and DET also accepted."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on Application Guide; non-4.0 scales should not be converted—report as on transcript."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter from someone well acquainted with work performance, preferably current/former supervisor. GMAC Common LOR. Carey JD/MBA still requires two."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay 1 short-forms: immediate post-MBA goal (50 words) + medium/long-term goals (150 words). Essay 2: how you will add meaningful value to Wharton community (350 words). Reapplicant essay 250 words if applicable. Additional Information optional (500 words).",
        "alsoKnownAs": "Essays"
      },
      "resume": {
        "status": "required",
        "detail": "Current one-page résumé as PDF (≤10 MB); highlight skills, experience, leadership, growth. No password/macros."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts from all undergrad/grad programs (unofficial or self-report template OK). Official required if admitted. Non-English records need authorized English translation."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews by invitation only after application review. No candidate admitted without an interview. Format: Team-Based Discussion (virtual) plus short one-on-one (Interview Process page)."
      },
      "applicationFee": {
        "amountUsd": 275,
        "waivers": "U.S. military active duty or veteran (follow in-app instructions). Moelis Advance Access fee is $100 with separate hardship/military waiver path.",
        "detail": "Non-refundable $275 payable by credit card with application (Visa/MC/AmEx)."
      },
      "other": [
        "2026–27 rounds: R1 Sep 8 2026; R2 Jan 5 2027; R3 Mar 31 2027; Deferred Apr 21 2027 (5:00 p.m. ET except Deferred 11:59 p.m. ET)",
        "Every application gets two independent reads",
        "Bachelor’s from accredited U.S. college or foreign equivalent required"
      ],
      "advice": "Apply R1/R2 if needing a student visa or as reapplicant. No general GMAT/GRE waiver—plan to test. Prepare for TBD interview format if invited.",
      "sources": [
        [
          "Application timeline & deadlines 2026–27",
          "https://mba.wharton.upenn.edu/application-timeline-deadlines/"
        ],
        [
          "Application Guide / requirements",
          "https://mba.wharton.upenn.edu/application-guide/"
        ],
        [
          "Admissions FAQs",
          "https://mba.wharton.upenn.edu/admissions-faqs/"
        ],
        [
          "Interview process",
          "https://mba.wharton.upenn.edu/interview-process/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'chicago-mba': {
    tuition: 89976,
    tuitionLabel: 'Academic-year tuition',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Three quarters / nine months, MBA Class of 2028 reference. Published estimated attendance budget: $132,449. Booth says 2027–28 tuition will be released in spring 2027.',
    sources: [
      ['Official tuition / budget', 'https://www.chicagobooth.edu/mba/full-time/admissions/cost'],
      ['Full-Time MBA Admissions (deadlines table)', 'https://www.chicagobooth.edu/mba/full-time/admissions'],
      ['Full-Time MBA', 'https://www.chicagobooth.edu/mba/full-time'],
      ['MBA curriculum', 'https://www.chicagobooth.edu/mba/academics/curriculum'],
      ['Full-Time MBA FAQ', 'https://www.chicagobooth.edu/mba/full-time/faq'],
    ],
    orientation: '~21 months · 2000 units · Flexible curriculum',
    deadline: 'Round 2 · 7 Jan 2027 · 11:59 p.m. CT (Fall matriculation; R1 passed)',
    deadlineDate: '2027-01-07',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-023","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Chicago Booth Full-Time MBA: ~21 months, 2,000 units. Highly flexible curriculum with LEAD + foundations + function areas + electives.',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid GRE or GMAT required for most applicants (5-year validity; no superscores). Optional only if current UChicago undergraduate or graduate of a UChicago program. Outside that, FAQ: no waiver for any reason. GRE code 0685.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT/GMAT Focus accepted (code H9X-9F-34). Required except UChicago undergrad/alumni optional path. Official scores after admit/accept unless expiring sooner.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 104,
          "detail": "When English proof required: TOEFL iBT pre–Jan 21 2026 ≥104 (PBT 600); on/post Jan 21 2026 minimum 5.0. Code 1832-02. No MyBest. Scores valid 2 years. Below-min applicants may still apply; admission contingent on demonstrated proficiency at interview or other language requirements."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic minimum overall 7 when English exam required. PTE 70 and Duolingo 135 also listed."
        },
        "waiver": "Exempt if undergrad/postgrad degree from listed English-instruction countries (incl. U.S., UK, Ireland, Australia, NZ, Canada, Singapore, Hong Kong, South Africa, etc.); OR degree outside those countries where English was sole language of instruction (provide URL/documentation); OR living and working full time in U.S. ≥2 years. Citizenship alone does not exempt. Committee may still require a score."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Undergraduate degree from accredited U.S. college/university or equivalent required; no published minimum GPA on requirements/how-to-apply pages."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter preferably from current supervisor; explain if unable. Online form only (no email/post/fax)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Four required short-answer prompts (300 characters each): immediate post-MBA goal; long-term goal; upload image + significance; fun fact/unique about yourself. Optional clarification essay (max 300 words).",
        "alsoKnownAs": "Short answer prompts"
      },
      "resume": {
        "status": "required",
        "detail": "Professional resume highlighting experiences relevant to Full-Time MBA candidacy."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial scans (both sides) of all postsecondary institutions at apply; official after admission. Non-English: official record + authorized English translation. 3-year Bologna degrees accepted."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Invitation-only after application review; virtual interview required for admission (does not guarantee admit). Plus brief video simulation exercise with interview invitation."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Military; full-time undergrad (non-UChicago); government/nonprofit full-time; UChicago employee/student; prior-year FT MBA applicant; select Booth Admissions virtual event attendees before submit. Not need-based. Scholars fee waived.",
        "detail": "$250 due at submission."
      },
      "other": [
        "Fall matriculation only; R1 Sep 15 2026 11:59pm CT; R2 Jan 7 2027; R3 Apr 1 2027; Booth Scholars Apr 1 2027",
        "STEM-eligible MBA for OPT purposes"
      ],
      "advice": "Assume GMAT/GRE required unless UChicago affiliate. English exam may be waived under published criteria—document medium of instruction if claiming. Interview + video sim are part of admit path.",
      "sources": [
        [
          "Admissions hub / deadlines",
          "https://www.chicagobooth.edu/mba/full-time/admissions"
        ],
        [
          "How to apply checklist",
          "https://www.chicagobooth.edu/mba/full-time/admissions/how-to-apply"
        ],
        [
          "Requirements",
          "https://www.chicagobooth.edu/mba/full-time/admissions/requirements"
        ],
        [
          "International applicants / English mins",
          "https://www.chicagobooth.edu/mba/full-time/admissions/international-students"
        ],
        [
          "Full-Time MBA FAQ",
          "https://www.chicagobooth.edu/mba/full-time/faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'northwestern-mba': {
    tuition: 88536,
    tuitionLabel: 'Two-Year MBA · First-year tuition',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Two-Year MBA first-year tuition. Published first-year estimated budget: $130,072, including a loan-fee allowance; other MBA formats have different budgets.',
    sources: [
      ['Official tuition / budget', 'https://kellogg.northwestern.edu/admissions/financial-aid/ft-fin-aid/'],
      ['Full-Time MBA Admissions (application dates table)', 'https://www.kellogg.northwestern.edu/programs/full-time-mba/admissions'],
      ['How to apply (Full-Time)', 'https://www.kellogg.northwestern.edu/admissions/ft-admissions/ft-how-to-apply/'],
      ['Full-Time MBA program', 'https://www.kellogg.northwestern.edu/programs/full-time-mba/'],
      ['Two-Year MBA', 'https://www.kellogg.northwestern.edu/programs/full-time-mba/two-year-mba-program/'],
      ['Majors & pathways', 'https://www.kellogg.northwestern.edu/programs/full-time-mba/academics/majors-pathways/'],
      ['AY26-27 policy manual (PDF)', 'https://www.kellogg.northwestern.edu/-/media/ay26-27-mba-mbai-mim-policy-manual.pdf'],
    ],
    orientation: '2Y · 6 quarters · ≥20.5 credits · Optional majors',
    deadline: 'Round 2 · 6 Jan 2027 (Two-Year / Full-Time MBA; R1 passed; clock time not on table)',
    deadlineDate: '2027-01-06',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-032","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Kellogg Two-Year MBA: 6 quarters, ≥20.5 credits, summer work experience required. Optional majors; distinct One-Year MBA path.',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "How-to-apply: submit GMAT or GRE from a single sitting (no superscores); no preference; no minimum. Scores valid 5 years; complete application before score expiration. GRE code 7921. (Evening & Weekend MBA has different optional/waiver rules—this item is Full-Time.)",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT code 6WZ-3J-89. Single sitting only; same validity/no-minimum policy as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Non-native English speakers must show proficiency. If exemption criteria not met, evaluated via application/interview plus valid TOEFL, IELTS, or Duolingo. No numeric minimums posted on FT international-candidates page. Committee may require a score from any candidate."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted with TOEFL/DET when a score is needed; no posted minimum on FT international page."
        },
        "waiver": "Satisfied without test if: undergrad/grad degree from U.S. college/university; OR undergrad/grad degree where English was only language of instruction (provide URL/docs); OR worked in U.S. or English-speaking nation ≥2 consecutive years within last 5 years."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Bachelor’s or equivalent by matriculation required. No numeric minimum GPA on how-to-apply. Encourage pre-enrollment intro calculus and statistics."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two LORs; ideally one current supervisor/manager and one other professional evaluator of performance/leadership. Additional letters neither required nor encouraged. Prompts: navigating differing perspectives (300 words); performance vs peers (300); most important constructive feedback (250)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One written essay for all programs (550 words max; Part I career path/why now; Part II contribution to classmates). Five video essay questions (~60 seconds each; video essays due 96 hours after application deadline; link on status page after submit+payment). Reapplicants: growth essay 250 words.",
        "alsoKnownAs": "Written essay / video essays"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume/CV plus detailed employment history section. Strongly recommend ≥2 years full-time work upon matriculation (except Kellogg Future Leaders deferred)."
      },
      "transcripts": {
        "status": "required",
        "detail": "List all colleges/universities/study abroad; upload transcripts. Official hard copies only upon matriculation. Non-English records need original + authorized verbatim English translation. Conferred date or diploma required before matriculation."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "All interviews virtual. Invitations emailed on rolling basis through evaluation period until decision release; timing not indicative of status. Scheduled interview time cannot be changed; cancel via Admissions if needed."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Active duty U.S. military or U.S. veterans (pay stub/command letter or DD-214). Candidates employed by Teach For America, Title 1 schools, AmeriCorps, or Peace Corps within past three years (supporting evidence). Non-refundable.",
        "detail": "$250 via credit card in application; do not send payment directly to Kellogg."
      },
      "other": [
        "2026–27 FT MBA rounds: R1 Sep 9 2026; R2 Jan 6 2027; R3 Mar 31 2027.",
        "One full-time Kellogg program application per year; may select one alternate FT program and/or Evening & Weekend with short interest paragraph.",
        "All Kellogg Full-Time MBA programs STEM-designated.",
        "Internationals encouraged to apply R1 or R2 for visa timing; application name must match passport for I-20."
      ],
      "advice": "Use FT how-to-apply + international-candidates pages (not EW optional-test rules). Video essays are after deadline (+96h)—plan tech setup. GMAT/GRE required for Full-Time per how-to-apply.",
      "sources": [
        [
          "Full-Time MBA admissions hub",
          "https://www.kellogg.northwestern.edu/programs/full-time-mba/admissions"
        ],
        [
          "How to apply — Full-Time MBA",
          "https://www.kellogg.northwestern.edu/admissions/ft-admissions/ft-how-to-apply/"
        ],
        [
          "International candidates / English",
          "https://www.kellogg.northwestern.edu/admissions/ft-admissions/ft-international-candidates/"
        ],
        [
          "Application live / essay changes blog (Jun 10 2026)",
          "https://www.kellogg.northwestern.edu/news/blog/2026/06/10/full-time-mba-application-live/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'harvard-mba': {
    tuition: 84760,
    tuitionLabel: 'Academic-year tuition',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Nine-month, single-student budget: $130,318, excluding a $1,500 computer estimate. Summer housing and optional activities can add costs.',
    sources: [
      ['Tuition and attendance budget', 'https://www.hbs.edu/mba/financial-aid/tuition-assistance/cost-of-attendance'],
      ['Curriculum', 'https://www.hbs.edu/mba/academic-experience/curriculum'],
      ['Case method', 'https://www.hbs.edu/mba/academic-experience/the-case-method'],
      ['Need-based scholarships', 'https://www.hbs.edu/mba/financial-aid/tuition-assistance'],
      ['MBA application dates (Class of 2029)', 'https://www.hbs.edu/mba/admissions/application-dates'],
      ['MBA admissions', 'https://www.hbs.edu/mba/admissions'],
      ['MBA program', 'https://www.hbs.edu/mba'],
      ['Degree requirements', 'https://www.hbs.edu/mba/handbook/academic-information-and-policies/degree-requirements'],
    ],
    orientation: '2 years · RC then EC · Case method',
    academic: 'HBS MBA: 2 years. Year 1 Required Curriculum; Year 2 Elective Curriculum (30 credits). Case-method RC core listed on HBS site.',
    funding: 'HBS need-based scholarships are open to admitted domestic and international students. Aid applications follow admission; personal eligibility and amount are assessed individually.',
    scholarships: ["SCH-004","SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-075","SCH-084"],
    deadline: 'Round Two · 5 Jan 2027 · 12:00 p.m. ET (Class of 2029 / matriculating fall 2027; R1 passed)',
    deadlineDate: '2027-01-05',
    asOf: '2026-10-20',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid GRE or GMAT required from all applicants; no waivers under any circumstances; no minimum score; no preference between tests. Must take test before submitting application. Unofficial OK at submission; official score must be sent to HBS. Highest single sitting used if multiple.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted equally with GRE; same no-waiver / no-minimum policy. Official scores required.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL, IELTS, PTE, or Duolingo required if undergraduate institution was not sole-English-instruction. No formal minimum to apply; Admissions Board discourages TOEFL below 5 (1–6 scale) or 109 (0–120), PTE below 75, Duolingo below 145. Official scores to HBS (TOEFL code 3444)."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted; discouraged below 7.5. No formal minimum. Official scores required."
        },
        "waiver": "Not required if undergraduate institution’s sole language of instruction was English. Graduate degree taught in English: English test recommended but not required."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Equivalent of U.S. bachelor’s required. No minimum GPA stated on application-process / international pages (FAQ lists GPA questions—confirm portal/FAQ answers if needed)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two recommendations. Prefer one current/former supervisor. Prompts: compare applicant to well-qualified peers; most important constructive feedback given and applicant’s response. Due with application deadline; 48-hour grace for recommenders only."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three short essays (Application Guide 2026–2027); exact word limits not printed on public Guide PDF—confirm in online application. Also Post-MBA Goals section. Post-interview written reflection required within 24 hours if interviewed.",
        "alsoKnownAs": "Essays / Post-MBA Goals / Post-Interview Reflection"
      },
      "resume": {
        "status": "required",
        "detail": "Standard business resume or CV; simple format; minimize jargon. Employment section covers three most recent jobs (responsibilities, accomplishments, significant challenge). Up to three awards and three activities."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts from all undergrad/grad institutions where a degree was earned; unofficial OK for application. If admitted, official original-language transcripts + word-for-word English translations via WES."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "30-minute interview by invitation only with MBA Admissions Board member who reviewed the application; campus, hub cities, or Zoom. Invitation is positive interest but not admission guarantee. Post-interview reflection required within 24 hours."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Need-based waiver via request form after starting application. All active-duty military applicants do not pay. 2+2 deferred application fee $100 with same military/need-based waiver paths.",
        "detail": "Nonrefundable $250 (credit card) for regular MBA application."
      },
      "other": [
        "Class of 2029 (matriculating fall 2027): Round One Sep 9 2026; Round Two Jan 5 2027 (submit by 12:00pm ET). Apply in one round only per year.",
        "2+2 deferred: deadline Apr 28 2027; application opens Dec 2026.",
        "Strongly recommend ≥2 years full-time work experience by enrollment; college seniors use 2+2."
      ],
      "advice": "No GMAT/GRE waivers. Essay word limits: confirm in apply portal (Guide says three short essays without numeric limits). Prefer application-process + Application Guide 2026–2027 PDF.",
      "sources": [
        [
          "Application dates (Class of 2029)",
          "https://www.hbs.edu/mba/admissions/application-dates"
        ],
        [
          "Application process",
          "https://www.hbs.edu/mba/admissions/application-process"
        ],
        [
          "International applicants / English",
          "https://www.hbs.edu/mba/admissions/application-process/international-applicants"
        ],
        [
          "MBA Application Guide 2026–2027 PDF",
          "https://apply.hbs.edu/www/documents/HBS%20MBA%20Application%20Guide%202026-2027.pdf"
        ],
        [
          "Contact / fee FAQ",
          "https://apply.hbs.edu/register/ContactMBAAdmissions"
        ],
        [
          "Application Q&A blog (LOR count/waivers)",
          "https://www.hbs.edu/mba/blog/answering-your-questions-about-the-hbs-mba-application"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'mit-mba': {
    tuition: 91892,
    tuitionLabel: 'Annual tuition + MBA program fee',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Published figure includes the mandatory $2,200 annual MBA program fee. Living costs and full-degree total are not recorded here.',
    sources: [
      ['Official tuition / budget', 'https://mitsloan.mit.edu/mba/admissions/financing-your-education'],
      ['MBA how to apply / deadlines', 'https://mitsloan.mit.edu/mba/admissions/how-to-apply'],
      ['MBA admissions', 'https://mitsloan.mit.edu/mba/admissions'],
      ['Explore MBA program', 'https://mitsloan.mit.edu/mba/explore-program'],
      ['MBA curriculum', 'https://mitsloan.mit.edu/mba/explore-program/mba-curriculum'],
      ['Degree requirements handbook', 'https://mbapolicyhandbook.mit.edu/degree-requirements/'],
    ],
    deadline: 'Round 2 · 12 Jan 2027 · 3:00 p.m. ET (2027 entry; R1 passed)',
    deadlineDate: '2027-01-12',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-025","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-061","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'MIT Sloan MBA: 2 years / 4 semesters, 144 units. Required Fall Core then customized electives across Sloan/MIT/Harvard.',
    orientation: '2 years · 144 units · Fall Core → electives',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid GMAT (Focus or 10th Edition) or GRE required by deadline for all applicants; self-reported online/test-center OK; official via GRE code 3791. No preference; no minimum. EA not accepted. Evaluation focuses on single-attempt scores; GMAT Superscore appears as additional data point but should not negatively impact. Multiple complete sittings allowed (no mix-and-match sections).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT Focus or 10th Edition required alternative to GRE. Send to MIT – MIT Sloan School of Management. AWA not required. Same no-EA / single-sitting evaluation policy.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "MIT Sloan does not accept TOEFL scores. English proficiency assessed during the interview."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "MIT Sloan does not accept IELTS scores. English proficiency assessed during the interview."
        },
        "waiver": "N/A — English tests not part of MBA application; proficiency evaluated at interview."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Four-year undergrad degree or three-year non-U.S. equivalent by matriculation. No minimum GPA (FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional LOR preferred (ideally manager/supervisor); not family. Plus two additional professional references (contact only; may be contacted). LOR must arrive by round deadline."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Cover letter to Admissions Committee (≤300 words excl. address/salutation) with professional example(s) showing fit to MIT Sloan criteria. Video Question 1 (≤90 sec, single take). Video Question 2 (random open-ended). Interview invitees submit additional short-answer before interview.",
        "alsoKnownAs": "Cover letter / video questions"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume (Times New Roman 10pt; Word or PDF): education, work results bullets, extras. Employment history up to three entries with compensation; entrepreneurs provide formation/partnership/revenue details."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scan/upload transcripts from all colleges/universities attended; certified translation if not English. No digitally signed/encrypted uploads. No hard copies at apply. Official signed/sealed if admitted. Relevant coursework/certs section (calculus, stats, CFA/CPA, MITx, etc.)."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Required if invited; invitation = advanced consideration, not admit guarantee. Virtual behavioral interview (~30 min) with Admissions Committee member; Eastern Time. Short-answer response due before interview."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Current Peace Corps members; Veteran or Active Duty U.S. Military. No retroactive waivers after online payment.",
        "detail": "Non-refundable $250 USD online."
      },
      "other": [
        "2027 entry rounds: R1 Sep 29 2026 (decision mid-Dec 2026); R2 Jan 12 2027 (early Apr 2027); due 3:00pm ET. LGO has designated round.",
        "Organizational chart required (circle your role in red).",
        "Dual HKS or DUSP: apply MIT Sloan in Round 2 concurrently.",
        "Reapplicants: full new application; short-answer on changes."
      ],
      "advice": "No TOEFL/IELTS path—prepare for English assessment at interview. Do not omit organizational chart. EA not a substitute for GMAT/GRE.",
      "sources": [
        [
          "How to Apply",
          "https://mitsloan.mit.edu/mba/admissions/how-to-apply"
        ],
        [
          "MBA Admissions FAQ",
          "https://mitsloan.mit.edu/mba/admissions/frequently-asked-questions"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'nyu-mba': {
    tuition: 92658,
    tuitionLabel: 'First-year tuition',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'First-year, nine-month budget: $140,668, including $2,040 LAUNCH orientation fee and a loan-fee allowance.',
    sources: [
      ['Official tuition / budget', 'https://www.stern.nyu.edu/programs-admissions/full-time-mba/financial-aid/tuition-cost-attendance'],
      ['Full-time MBA admissions deadlines', 'https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/deadlines'],
      ['Full-time MBA admissions', 'https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions'],
      ['Fall-start program outline', 'https://www.stern.nyu.edu/portal-partners/academic-affairs-advising/mba-programs/full-time-mba/full-time-mba-fall-start'],
      ['Curriculum', 'https://www.stern.nyu.edu/programs-admissions/full-time-mba/academics/curriculum'],
    ],
    deadline: '3rd Deadline · 15 Jan 2027 · 11:59 p.m. ET (Full-time MBA Fall 2027; 1st/2nd passed)',
    deadlineDate: '2027-01-15',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-028","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Stern Full-Time MBA: 2 years, 60 credits. Required + menu core in Y1, electives/specializations in Y2, summer internship typical.',
    orientation: '2 years · 60 credits · Menu core + specializations',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid standardized test required for Full-time MBA (Fall 2027 cycle). GRE accepted with no preference vs GMAT/EA/LSAT/MCAT/DAT. No minimum score; highest overall sitting used (no GMAT superscore). Codes: GRE 4455. Case-by-case standardized test waiver by request (deadline Apr 1, 2027); NYU undergrad alumni with final GPA ≥3.20 get automatic waiver (NYU + MBA). Andre Koo Tech MBA is separately test-optional for 2027—not this Full-time MBA route.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GMAT Focus (or EA/LSAT/MCAT/DAT) accepted as the required standardized test for Full-time MBA. Code 5TF-HW-35. Same waiver paths as GRE. No minimum; highest overall sitting.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL required unless native English speaker or undergrad/grad degree taught in English. No minimum score to apply; highest score considered (MyBest not used). Valid 2 years at submission. Code 2582. DET also accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted as English proficiency alternative; same waiver rules as TOEFL. No minimum posted. Report to New York University - MBA and Graduate Admissions."
        },
        "waiver": "Not required if native language is English, or undergraduate/graduate degree was taught in English. Students who completed a university degree in India are not required to submit TOEFL/IELTS/DET. DET also accepted (report NYU Stern, MBA & Graduate Admissions)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Stern states no minimum cumulative GPA; evaluates varied grading systems holistically (Transcripts & Degrees)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One EQ Endorsement required, preferably from current supervisor (explain in application if not). Second EQ Endorsement optional. More than two allowed but not encouraged. Immediate family may not write. Online form with EQ-specific question."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay 1 Professional Aspirations (500 words max): short-term career goals and why Stern MBA. Essay 2 Personal Expression / Pick Six (six images + captions PDF). Essay 3 Additional Information optional (500 words).",
        "alsoKnownAs": "Essays / Pick Six"
      },
      "resume": {
        "status": "required",
        "detail": "Upload résumé covering full-time post-university work and education; internships/part-time/extracurriculars/volunteer may be included (Professional Information)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial scanned transcripts from all undergrad/grad institutions for application (courses, credits, grades, degree name). Official transcripts + degree conferral required before enrollment if admitted. Four-year bachelor’s or foreign equivalent (three-year OK for listed countries e.g. India)."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews by invitation only after complete application; conducted virtually by trained admissions professionals. Initial notification may be interview invite, waitlist, or denial. NYU x NYU page: interview required for admission to any full-time MBA and offered by invitation only. May be waitlisted/denied without interview."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Economic hardship (case-by-case); U.S. military active/veteran (docs); Teach for America/India; Forté MBALaunch/On Demand alumni; NYU undergrad alumni (no form); reapplicants within past two cycles fee not required. Request form before paying (non-refundable once paid).",
        "detail": "NYU Stern application fee $250 (stated on NYU x NYU / Stern page as the Stern application fee). Application not processed until fee received."
      },
      "other": [
        "Fall 2027 Full-time MBA deadlines: Sep 15 2026 / Oct 15 2026 / Jan 15 2027 / Apr 15 2027 (11:59 p.m. ET)",
        "Program selection required: Full-time MBA vs Luxury & Retail vs Andre Koo Tech (apply to only one)",
        "Also accepts EA, LSAT, MCAT, DAT for standardized test requirement",
        "International applicants encouraged to apply earlier for visa timing"
      ],
      "advice": "Full-time MBA still requires a test unless waiver approved—do not confuse with 2027 Andre Koo Tech test-optional policy. Submit waiver ≥3 weeks before apply. Pick Six must be a single PDF.",
      "sources": [
        [
          "Deadlines (Fall 2027)",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/deadlines"
        ],
        [
          "Admissions hub",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions"
        ],
        [
          "Standardized tests / English",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/standardized-tests"
        ],
        [
          "Essays",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/essays"
        ],
        [
          "EQ Endorsement",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/eq-endorsement"
        ],
        [
          "Professional information / resume",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/professional-information"
        ],
        [
          "Transcripts & degrees",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/transcripts-degrees"
        ],
        [
          "Notification & interviews",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/admissions/notification-process"
        ],
        [
          "Fee $250 (NYU x NYU page)",
          "https://www.stern.nyu.edu/programs-admissions/full-time-mba/academics/nyuxnyu"
        ],
        [
          "Fee waiver request",
          "https://admissions.stern.nyu.edu/register/applicationfeewaiverrequest"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'michigan-mba': {
    tuition: 83946,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA, non-Michigan resident / international)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Michigan Ross Full-Time MBA Tuition & Financial Aid: 2026–2027 rates approved by the Board of Regents in June 2026 — Non-Michigan Residents/International $83,946 per academic year; Michigan Residents $78,586. Mandatory fees $246.89 per full term; International Student Services Fee $500 per term for F/J visa students. Living-cost guidance (books, food & housing, personal, loan fees) is separate. 2027–2028 rates to be posted July 2027. Full-time MBA only — not Weekend/Online/EMBA.',
    sources: [
      ['Full-Time MBA Tuition & Financial Aid', 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid'],
      ['Full-Time MBA', 'https://michiganross.umich.edu/graduate/full-time-mba'],
      ['Affording Your MBA', 'https://michiganross.umich.edu/graduate/full-time-mba/admissions/tuition-financial-aid/affording-your-mba'],
      ['Full-Time MBA Admissions (deadlines)', 'https://michiganross.umich.edu/graduate/full-time-mba/admissions'],
      ['Full-time MBA curriculum', 'https://michiganross.umich.edu/graduate/full-time-mba/curriculum'],
      ['Core course requirements', 'https://rossweb.bus.umich.edu/academics/curriculum/core-curriculum/full-time-mba/'],
    ],
    orientation: '2 years · 57 credits · MAP core',
    internship: 'MAP is a required seven-week consulting project preparing students for internships and careers. A project is not a guaranteed paid internship.',
    funding: 'Automatic merit scholarship consideration on admission; $10,000 to full tuition. No separate application. Federal loans US-only; internationals use private loans. True Grit and several awards open to domestic and international students per affording page.',
    confidence: 'high',
    unresolved: ["2027–28 tuition for Fall 2027 matriculants","Exact Dean’s Impact stipend amount"],
    asOf: '2026-10-20',
    scholarships: ["SCH-006","SCH-007","SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-077","SCH-084"],
    deadline: 'Round 2 · 4 Jan 2027 · 11:59 p.m. ET (Full-Time MBA; R1 passed)',
    deadlineDate: '2027-01-04',
    academic: 'Ross Full-Time MBA: 2 years, 57 credits. Prescribed Y1 core with MAP; Y2 electives; summer internship required.',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "May submit GMAT, GRE, or Executive Assessment, OR (not both) a Statement of Quantitative Academic Readiness—no separate pre-approval. Self-report or unofficial OK; official if accepted. Highest total sitting used (no mix-and-match). Scores must be unexpired at application. MCAT/LSAT/PCAT/DAT/OAT may be cited inside the Statement alternative.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT accepted as Option 1 standardized test; same either-test-or-Statement rule as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "If native language is not English, demonstrate proficiency via TOEFL iBT (code 1839), PTE, IELTS, or Duolingo. Scores must be active/unexpired at enrollment. No numeric minimums posted on Full-Time MBA application-requirements page."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted as TOEFL alternative; send to University of Michigan–Ann Arbor. No numeric minimum on Ross FT MBA requirements page."
        },
        "waiver": "Exempt if undergraduate degree from accredited institution where primary language of instruction was English. Alternative: essay demonstrating immersive academic/professional English use (e.g., ≥1 year job with English as primary communication within past 3 years; or English-instruction academic transcripts)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "U.S. bachelor’s equivalent required by application time. Transcripts should include graduation GPA; no minimum GPA stated on checklist."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One recommendation via GMAC Common Recommendation Form. Current/former supervisor ideal; else client, project manager, or professional mentor."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Part 1 Career Aspirations (300 words): short-term goal + how Ross MBA/program offerings help in first post-MBA role. Part 2 Impact and Growth (200 words): choose 1 of 3 prompts. Optional essay (250 words) for outliers (gaps, academic outliers, recommender choice, etc.) per Class of 2029 admissions blog; checklist page emphasizes Parts 1–2.",
        "alsoKnownAs": "Admissions essays"
      },
      "resume": {
        "status": "required",
        "detail": "Current education and professional experience with months/years matching application; community service and hobbies/interests encouraged; strongly suggested ≤1 page."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial undergrad/grad transcripts (+ degree docs) with application; official if accepted. Internationals: diploma/degree date docs; certified translations if not English; WES authentication if admitted."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation only; conducted by Ross alum or current MBA student. Timeline shared a few weeks after deadline."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "Waived for: U.S. military active/veterans; Peace Corps/AmeriCorps/Teach for America/China/India/Teach for All partners who served; current U-M graduate students; UN least-developed-country citizens (verified); current Fulbright Scholars for U.S. grad school; Ross FT MBA reapplicants within past 5 years; applicants who register and attend ≥1 Michigan Ross FT MBA event before applying. No other waiver reasons.",
        "detail": "Non-refundable $250."
      },
      "other": [
        "Class of 2029 / Fall 2027: R1 Sep 8 2026; R2 Jan 4 2027; R3 Mar 29 2027 (11:59pm ET).",
        "Consortium path: R1 Oct 15 / R2 Jan 5 (Consortium deadlines); no separate Ross app if applying via Consortium (still answer Ross essay questions plus Consortium essays).",
        "Ross Deferred MBA pathway for graduating students.",
        "Statement of Quantitative Academic Readiness is a fulfillment option, not a ‘waived’ badge—optional ≠ waived."
      ],
      "advice": "Choose either test scores or Quantitative Readiness Statement—not both. English mins not posted—plan competitive scores. Event attendance can waive $250 fee.",
      "sources": [
        [
          "Full-Time MBA Admissions hub",
          "https://michiganross.umich.edu/graduate/full-time-mba/admissions"
        ],
        [
          "Application requirements",
          "https://michiganross.umich.edu/graduate/full-time-mba/admissions/application-requirements"
        ],
        [
          "Class of 2029 essays/dates blog",
          "https://michiganross.umich.edu/graduate/full-time-mba/admissions/admissions-blog/2026/06/17/class-2029-new-essays-key-application"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cornell-mba': {
    orientation: '~21 months · 60 credits · ~20.5 core',
    academic: 'Cornell Two-Year MBA: ~21 months, 60 credits with ~20.5-credit core, immersion, and required summer internship.',
    internship: 'The Two-Year MBA curriculum explicitly requires an internship in the summer between years. Placement is not guaranteed by this requirement.',
    programUrl: 'https://business.cornell.edu/admissions/graduate/mba/curriculum/',
    tuition: 88934,
    tuitionLabel: 'Academic-year tuition (Two-Year Cornell MBA, Ithaca)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Cornell SC Johnson / Johnson Two-Year MBA Tuition & financing Estimated cost of attendance for Fall/Spring term (academic year 2026–27) lists Tuition $88,934. Separate first-year fee $1,500 (core course packs/materials, charged first semester only), student activity fees $100, health fee $600; living costs separate. Total estimated COA $127,278. Two-Year Ithaca full-time MBA — not Cornell Tech MBA or EMBA.',
    sources: [
      ['Official tuition / budget', 'https://business.cornell.edu/admissions/graduate/mba/tuition-financing/'],
      ['Two-Year MBA curriculum', 'https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/curriculum/'],
      ['Cornell MBA application deadlines & important dates', 'https://business.cornell.edu/admissions/graduate/mba/application-guide/important-dates/'],
      ['Cornell MBA admissions', 'https://business.cornell.edu/admissions/graduate/mba/'],
      ['Two-Year MBA', 'https://www.johnson.cornell.edu/programs/full-time-mba/two-year-mba/'],
      ['MBA curriculum', 'https://business.cornell.edu/admissions/graduate/mba/curriculum/'],
      ['Two-year residential MBA', 'https://courses.cornell.edu/programs/two-year-residential-mba/'],
    ],
    asOf: '2026-10-20',
    deadline: 'Round 2 · 5 Jan 2027 · 11:59 p.m. ET (Two-Year FT MBA; R1 passed)',
    deadlineDate: '2027-01-05',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-033","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-058","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT, GRE, or EA accepted; no minimum. Middle 80% applicants historically GMAT ~660–740 (descriptive). Valid 5 years. Standardized test waiver may be requested in application if STEM/business/quant degree with ≥3.0 GPA (or equiv), CPA/CFA, or analytical full-time work—approval not guaranteed; decision in 5–7 business days. Future Leaders: GRE/GMAT required, no waiver. GRE code 8296.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT/GMAT 10th/EA accepted (Two-Year MBA code 5JW-BM-96). Same waiver policy as GRE. Sage Scholarship requires a test score even if waiver otherwise available.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "If English not native and no university degree in listed English-speaking country: TOEFL iBT overall ≥100 with ≥25 each section (or CEFR level 5). No MyBest/superscore; no TOEFL Essentials. Institution 2098 dept 02. Valid 2 years."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall 7.0 with Speaking and Writing ≥7.0. DET overall 120 also accepted. Electronic to Cornell Two Year MBA Admissions."
        },
        "waiver": "Exempt if native citizen of U.S./UK/Ireland/Australia/NZ/South Africa/Ghana/Canada; OR university degree from those countries; OR degree from non-English country with official documentation that sole language of instruction was English. India/Pakistan/Philippines/Hong Kong/Singapore citizenship alone does not exempt. Residency/work experience alone does not waive."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Bachelor’s required for enrollment; report grades as on transcript (do not convert non-4.0 scales). No published minimum GPA cutoff."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional LOR required; up to two allowed. GMAC Common LOR. Supervisor/colleague/client preferred."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Goals statement (short-/long-term role/company/industry + leverage unique qualities) plus choice of one required essay (Impact 350w OR Table of Contents/creative ≤350w or multimedia). Optional essay (required for reapplicants).",
        "alsoKnownAs": "Goals statement + admissions essay"
      },
      "resume": {
        "status": "required",
        "detail": "Professional resume on application checklist; also list of activities."
      },
      "transcripts": {
        "status": "required",
        "detail": "Academic records for all post-secondary coursework/degrees; unofficial OK to apply; official by deposit deadline if enrolling. Certified English translation if needed."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "After preliminary review: invitation to interview, waitlist without interview, or denial (Important Dates). Final decisions after interview on rolling basis by round final-notification date."
      },
      "applicationFee": {
        "amountUsd": 250,
        "waivers": "U.S. military service members/veterans; Forté MBALaunch; Peace Corps; Teach for America alumni; current Cornell students—email coordinator before submit (≥3 business days before deadline).",
        "detail": "Nonrefundable $250 USD."
      },
      "other": [
        "Two-Year Ithaca MBA requirements—not Johnson Cornell Tech MBA",
        "Rounds: R1 Sep 17 2026; Consortium early Oct 15 2026; R2/Consortium traditional Jan 5 2027; R3 Apr 6 2027",
        "Enrollment deposits $1,500 + $1,500; Re Vera background check on matriculation"
      ],
      "advice": "Test optional only with approved waiver—Sage Scholarship needs a score. Confirm English waiver country list carefully (e.g., India citizenship ≠ auto-exempt).",
      "sources": [
        [
          "Application guide checklist",
          "https://business.cornell.edu/admissions/graduate/mba/application-guide/"
        ],
        [
          "Requirements & FAQs",
          "https://business.cornell.edu/admissions/graduate/mba/application-guide/mba-application-requirements-faqs/"
        ],
        [
          "Important dates",
          "https://business.cornell.edu/admissions/graduate/mba/application-guide/important-dates/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'vanderbilt-mba': {
    orientation: '2 years · ≥62 credits · Concentrations',
    academic: 'Owen Full-Time MBA: 2 years, ≥62 credits across eight modules; required cores, ethics, and at least one 12-credit concentration.',
    internship: 'The program describes individualized career support and preparation before internships. Placement difficulty and international-specific results have not been evaluated.',
    tuition: 76700,
    tuitionLabel: 'Academic-year tuition (Owen Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Vanderbilt Owen MBA Tuition & Financing and Student Accounts Graduate/Professional Tuition and Fees 2026–2027 both list Owen Graduate School of Management Tuition $76,700 per year. Separate first-year direct costs include Maintenance Fee $1,250, Transcript Fee $100 (first Fall), Student Services Fee $694, Student Health Fee $882; health insurance and living expenses are additional. Full-time MBA only — not Executive MBA.',
    sources: [
      ['Official tuition / budget', 'https://business.vanderbilt.edu/mba/admissions/tuition-financing-scholarships/'],
      ['Student Accounts 2026–27 grad/prof fees', 'https://www.vanderbilt.edu/stuaccts/fees/tuition_fees_2026-27_grad_prof/'],
      ['MBA program', 'https://business.vanderbilt.edu/mba/'],
      ['MBA Admissions (Fall 2027 deadlines)', 'https://business.vanderbilt.edu/mba/admissions/'],
      ['MBA Application Instructions (11:59 p.m. CT)', 'https://business.vanderbilt.edu/mba/admissions/application-instructions/'],
      ['Applications for Fall 2027 Open August 19', 'https://business.vanderbilt.edu/news/2026/08/14/vanderbilt-business-applications-fall-2027-open-august-19/'],
      ['MBA curriculum', 'https://business.vanderbilt.edu/mba/curriculum/'],
      ['Owen catalog 2025-26 PDF', 'https://registrar.vanderbilt.edu/documents/Owen-Graduate-School-of-Management-Catalog-2025-26.pdf'],
    ],
    deadline: 'Round 2 · 6 Jan 2027 · 11:59 p.m. CT (Fall 2027; R1 passed; apps opened 19 Aug 2026)',
    deadlineDate: '2027-01-06',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-051","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Official GMAT, GRE, or Executive Assessment required unless an approved test waiver is granted before the round deadline. GRE code 1871. Official score must arrive from testing service for a complete application. No numeric minimum published.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT, GRE, or EA accepted. GMAT/EA: select Vanderbilt University (no school code). Waiver via separate request form (≥~2 weeks before deadline recommended) based on quantitative coursework, quant/analytical work, CPA/CFA/other certs. Cannot waive if a score already submitted. Waiver ≠ admission decision.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Official English exam required for international applicants unless waiver. Accepts TOEFL (code 1871). No numeric minimum published on Application Instructions page. Scores valid 2 years."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted (code 1871). DET and TOEFL Essentials also accepted. No numeric minimum published on Application Instructions."
        },
        "waiver": "Waiver if undergraduate degree in a country where English is the official language; or lived/worked past 2+ years in such a country; or ≥90th percentile on GMAT/GRE verbal. India treated as English official language for this purpose. Mark qualifications on International Applicants page."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on Application Instructions; Class Profile lists median undergraduate GPA (e.g., 3.5 Class of 2028 profile on overview)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional recommendation due by application deadline. Prefer direct supervisor/client/project manager. Vanderbilt form or GMAC Common LOR. Non-English letters need professional translation + certification uploaded by recommender."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two required short written statements: (1) career journey + two post-MBA paths to explore (400-word limit); (2) challenge/stressful situation response and learning (300-word limit). Optional explanatory statement for gaps/context. Required video response (unscripted small-talk prompts) in application.",
        "alsoKnownAs": "Short written statements; video response"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume typically sufficient; detailed work history also in application. Most students ≥2 years experience; class average ~4–6 years post-baccalaureate."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcript from every college/university attended. Four-year U.S. bachelor's or equivalent required. Non-English: original + certified English translation. Official records before enrollment if admitted."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Evaluative interviews by invitation after complete application; virtual or on-campus (Discover Vanderbilt Business / weekday visit). Behavioral format. Rolling invitations."
      },
      "applicationFee": {
        "amountUsd": 200,
        "waivers": "Not detailed on Application Instructions checklist (fee stated as $200).",
        "detail": "$200 MBA application fee."
      },
      "other": [
        "Fall 2027 deadlines: R1 Oct 1 2026; R2 Jan 6 2027; R3 Mar 10 2027; R4 May 5 2027. Due 11:59 p.m. Central.",
        "International final apply-by Apr 5 2027 for visa timing.",
        "Pathway2MBA / VU2MBA deferred paths for graduating seniors (Rounds 3–4).",
        "Dual-degree applicants must also apply to partner program; LSAT/MCAT not accepted in lieu of GMAT/GRE/EA."
      ],
      "advice": "Score or approved waiver required—optional ≠ waived. Request waiver early; English numeric floors not posted—confirm portal/testing instructions.",
      "sources": [
        [
          "Vanderbilt MBA Application Instructions",
          "https://business.vanderbilt.edu/mba/admissions/application-instructions/"
        ],
        [
          "Vanderbilt MBA Admissions Overview (Fall 2027 deadlines)",
          "https://business.vanderbilt.edu/mba/admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ucla-mba': {
    orientation: '~22 months · 10-course core · Capstone',
    academic: 'UCLA Anderson Full-Time MBA: ~22 months with a ten-course core foundation, customizable electives, and a two-quarter Capstone Project.',
    internship: 'The capstone provides hands-on client work; it is not itself a guaranteed paid internship.',
    tuition: 82734,
    tuitionLabel: 'Academic-year MBA program fees (Full-Time MBA, self-supporting)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UCLA Anderson Full-Time MBA Financing Estimated Financial Aid Budget for Academic Year 2026–2027 lists Estimated MBA Program Fees $82,734 (Summer 2026 $10,635 + Fall/Winter/Spring $24,033 each). UCLA Registrar Self-Supporting Degree Fees 2026–27 lists Management MBA new students $82,733/year (continuing $79,452) — $1 difference from Anderson’s quarterly sum; Anderson budget figure used. Self-supporting flat program fee (no resident/nonresident split). Mandatory UCLA fees $2,105 and health insurance $8,668 AY are separate; total mandatory charges $93,507; total estimated student budget $137,951. Full-time MBA only — not FEMBA/EMBA.',
    sources: [
      ['Official tuition / budget', 'https://www.anderson.ucla.edu/degrees/full-time-mba/financing'],
      ['Registrar self-supporting fees 2026–27', 'https://registrar.ucla.edu/fees-residence/self-supporting-degrees'],
      ['Full-Time MBA academics', 'https://www.anderson.ucla.edu/degrees/full-time-mba/academics'],
      ['Full-Time MBA Admissions (rounds)', 'https://www.anderson.ucla.edu/degrees/full-time-mba/admissions'],
      ['Full-Time MBA Admissions FAQ (11:59 p.m. PT)', 'https://www.anderson.ucla.edu/degrees/full-time-mba/admissions/faq'],
      ['Full-Time MBA', 'https://www.anderson.ucla.edu/degrees/full-time-mba/'],
      ['Full-Time MBA', 'https://www.anderson.ucla.edu/degrees/full-time-mba'],
      ['Customizable schedule', 'https://www.anderson.ucla.edu/degrees/full-time-mba/academics/customizable-schedule'],
      ['Grad Division MBA requirements', 'https://grad.ucla.edu/graduate-program-requirements/program-requirements-for-management-mba-6-2-2-2-2-2-2/'],
    ],
    deadline: 'Round 2 · 6 Jan 2027 · 11:59 p.m. PT (Full-Time MBA; R1 passed)',
    deadlineDate: '2027-01-06',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-046","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Test score not required. Applicants may submit GRE, GMAT, GMAT Focus, or EA, or opt out and instead submit a brief MBA-readiness essay showing quantitative/analytical prep (coursework, certifications, professional experience, expired scores). No minimum if submitting; highest total sitting used (no superscore). English proficiency optionality does NOT apply. GRE code 0771.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT/GMAT Focus/EA optional under same flexible policy as GRE. Code 2NZ-2F-24. UCLA Law/Medicine concurrent students may use LSAT/MCAT respectively.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 87,
          "detail": "UCLA Grad admission minimum TOEFL iBT 87 (before Jan 21 2026) or 4.5 (on/after Jan 21 2026). Anderson FAQ: almost all admits score over 100 iBT. Code 4837-02 for Anderson MBA. Valid within 2 years of application submission; not later than round deadline. Work experience in English does not waive."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall 7.0 minimum (UCLA Grad). Anderson FAQ notes almost all admits ≥7.0. Send to Uni of California, Los Angeles-Anderson School of Management."
        },
        "waiver": "Exempt with bachelor’s or higher from accredited U.S. university or from a country/institution where English is the sole language of instruction per WHED. Citizenship, U.S. residence, and work experience are not substitutes. Anderson emphasizes education in English—not work—as the key factor."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Four-year bachelor’s or equivalent required to enroll; three-year undergrad may be admitted if profile strong. No numeric minimum GPA; do not convert non-4.0 scales."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two recommendations for new applicants (one new for reapplicants), preferably direct supervisor/manager in work setting. Online form with standard prompts."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three short essays for 2026–2027: (1) short-/long-term goals + Anderson resources (250 words); (2) how classmates will describe you / values as leader (250); (3) first thing you’d tell classmates (50). Optional extenuating-circumstances essay (250). Test-optional applicants also submit MBA-readiness essay.",
        "alsoKnownAs": "Short essay prompts"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé must be submitted; ideally one page, max two. Does not replace Employment section of application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scanned academic records with application; official hard copies only if invited to interview (upon request). International: multiple docs per International Students page + translations."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation only after review; an interview must be completed to be admitted. Zoom or in person (~30 min), usually by trained second-year students; blind except résumé. All candidates being considered for admission are interviewed."
      },
      "applicationFee": {
        "amountUsd": 200,
        "waivers": "U.S. military applicants; current UCLA graduate students; SIEML program participants—upload docs in application; do not pay first (no refunds).",
        "detail": "$200 online application fee. Applications for Class of 2029 noted as opening Aug 1, 2025 on requirements page."
      },
      "other": [
        "Rounds: Oct 1 2026 / Jan 6 2027 / Apr 7 2027 (decisions Dec 11 2026 / Mar 26 2027 / May 14 2027)",
        "Early career and college seniors may apply; most students have work experience",
        "Apply to only one Anderson program per year"
      ],
      "advice": "Test-optional ≠ English-optional. If skipping GMAT/GRE, invest in the readiness essay with quant evidence. Plan for interview if competitive—required to receive an offer.",
      "sources": [
        [
          "FT MBA Admissions hub",
          "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions"
        ],
        [
          "Requirements",
          "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions/requirements"
        ],
        [
          "Admissions FAQ (fee, English, interview)",
          "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions/faq"
        ],
        [
          "UCLA Grad English requirements",
          "https://grad.ucla.edu/admissions/english-requirements/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'indiana-mba': {
    availability: '+Flex delivery · confirm visa implications',
    availabilityType: 'review',
    orientation: '2 years · Integrated Core · +Flex Y2',
    academic: 'Kelley Full-Time +Flex MBA: 2 years with Integrated Core then majors/electives; Year 2 may be on campus or Flex online.',
    degree: 'Full-Time +Flex MBA',
    tuition: 55695,
    tuitionLabel: 'Academic-year tuition (Full-Time residential MBA, nonresident / international)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Kelley Full-Time MBA 2026–27 annual expense budget: Nonresidents/international Tuition $55,695; Indiana residents $29,573. Mandatory fees $2,423 (both); housing/food, books, transportation, and personal expenses separate. Nonresident total budget $84,129; resident $58,007. Residential Full-Time MBA (Bloomington) — not online-only; +Flex Year 2 online option does not change this published tuition line.',
    sources: [
      ['Official tuition / budget', 'https://kelley.iu.edu/programs/full-time-mba/admissions/tuition-aid-scholarships.html'],
      ['Full-Time MBA academics', 'https://kelley.iu.edu/programs/full-time-mba/academics/index.html'],
      ['How to Apply (application deadlines table)', 'https://kelley.iu.edu/programs/full-time-mba/admissions/process-timeline.html'],
      ['Full-Time MBA FAQ', 'https://kelley.iu.edu/programs/full-time-mba/admissions/faq.html'],
      ['Full-Time MBA program', 'https://kelley.iu.edu/programs/full-time-mba/'],
      ['Curriculum & experience', 'https://kelley.iu.edu/programs/full-time-mba/why-kelley/curriculum-experience.html'],
      ['Full-Time MBA', 'https://kelley.iu.edu/programs/full-time-mba/index.html'],
      ['Majors & minors', 'https://kelley.iu.edu/programs/full-time-mba/academics/majors-minors/index.html'],
    ],
    deadline: 'Round 2 Phase 2 · 5 Jan (month-day; year not labeled on official table; portal Fall 2027; R1 Phase 2 Oct 15 passed if same annual cycle)',
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-048","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GMAT or GRE typically required (scores ≤5 years old at application). Self-report unofficial in Phase 1; official required in Phase 2 if advancing. Best scores considered; seek verbal/quant balance. GRE code IU Bloomington 1324. Candidates may apply with waiver by indicating in Phase 1 (no separate waiver application on admissions requirements page)—committee weighs strong prior academics (esp. quant), CPA/CFA or equivalents. FAQ also describes email waiver request path with resume/transcripts/300-word statement and round-tied deadlines—prefer Phase 1 indication per current admissions requirements page; confirm if portal still uses email path.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted (code 8ZG-41-37 Full-Time MBA). Same typical-requirement + Phase 1 waiver indication as GRE. Strong scores help differentiate; some consulting/IB employers still ask for scores.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "International applicants whose native language is not English: TOEFL iBT min 100 (120 scale) or 5 (6-point scale). Scores ≤2 years old. Code 1324. Required before submitting application."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS band min 7.0, or DET 130. Scores ≤2 years old."
        },
        "waiver": "Automatically waived for international applicants who earned undergrad or post-grad degree from an institution where English was the language of instruction; indicate in application or optional essay."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Transcripts with cumulative GPA from each institution required; no numeric minimum GPA stated on Full-Time MBA admissions requirements page. Baseline expectation: algebra, spreadsheets, statistics familiarity."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional recommendation; current or recent supervisor preferred."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal essays in Phase 2 (if invited). Admissions requirements emphasize communication skills, unique background, and career goals; exact prompts not fully enumerated on public how-to-apply/requirements pages—confirm in Kelley Application Portal.",
        "alsoKnownAs": "Personal essays"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required to start Phase 1 (Kelley Graduate Application Form is free). Most applicants ≥2 years into career."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial during application process; official before enrollment. International: document degree as recognized U.S. bachelor’s equivalent."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Two-phase process: Phase 1 (form + resume) free. If invited to Phase 2, portal requirements may include admissions interview; full application reviewed once documentation received and interview complete."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Phase 1 is free. University application fee paid in Phase 2 if invited.",
        "detail": "$75 university application fee in Phase 2 (how-to-apply checklist)."
      },
      "other": [
        "Fall 2027 start (portal). Rounds with Phase 1 / Phase 2 deadlines: R1 Oct 1 / Oct 15; R2 Dec 15 / Jan 5; R3 Feb 15 / Mar 1; R4 Apr 1 / Apr 15 (international candidates no later than Round 2 recommended).",
        "+Flex: decide end of Year 1 whether Year 2 on campus or Kelley Direct online (visa implications for internationals).",
        "Consortium school; KAAP deferred admission for college seniors (U.S. citizens/PR; deadline June 1)."
      ],
      "advice": "Phase 1 free—resume only to start. Confirm essay prompts and any email-vs-portal waiver mechanics in portal/FAQ. English DET accepted (130).",
      "sources": [
        [
          "How to apply / process timeline",
          "https://kelley.iu.edu/programs/full-time-mba/admissions/process-timeline.html"
        ],
        [
          "MBA admission requirements",
          "https://kelley.iu.edu/programs/full-time-mba/admissions/index.html"
        ],
        [
          "International applicants",
          "https://kelley.iu.edu/programs/full-time-mba/admissions/international-applicants.html"
        ],
        [
          "FAQ",
          "https://kelley.iu.edu/programs/full-time-mba/admissions/faq.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'utd-mba': {
    orientation: '~18–21 months · 53 hours · Cohort',
    academic: 'UT Dallas Full-Time MBA Cohort: ~18–21 months, 53 hours (32 core + 21 electives), lock-step with pre-fall boot camp.',
    programUrl: 'https://mba.utdallas.edu/academics/full-time-mba/curriculum/',
    tuition: 36532,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA, Nonresident; Fall I + Spring I)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UT Dallas MBA Cost & Tuition Plan 2026–2027 Estimated Variable Tuition (Full-Time MBA): Nonresident Cost $18,266 Fall I + $18,266 Spring I = $36,532 academic year (matches Bursar Non-Resident/Graduate Variable 2026–27 rate at 12+ SCH). Resident Cost $9,111/semester ($18,222 AY). Separate MBA/program Fees column $1,500 Fall I + $1,700 Spring I = $3,200 AY (MGT supplemental $100/SCH) not included in the $36,532. Published full-program Nonresident Tuition on 53 credits $60,307 + Fees $5,300 = $65,607 — full-duration totals, not used as the annual figure. School states all Full-Time admits get ≥$1,000 merit scholarship qualifying for resident rates; nonresident sticker used per OOS-primary rule. Full-time MBA only — not Professional/Online.',
    sources: [
      ['Official tuition / budget', 'https://mba.utdallas.edu/tuition-value/'],
      ['Bursar tuition rates 2026–27', 'https://bursar.utdallas.edu/tuition/tuition-rates/'],
      ['Full-Time MBA academics', 'https://mba.utdallas.edu/academics/full-time-mba/'],
      ['Full-Time MBA Admissions (deadlines table)', 'https://mba.utdallas.edu/admissions/full-time-mba/'],
      ['MBA programs hub', 'https://mba.utdallas.edu/'],
      ['Full-Time MBA curriculum', 'https://mba.utdallas.edu/academics/full-time-mba/curriculum/'],
      ['Catalog Business Administration', 'https://catalog.utdallas.edu/2026/graduate/programs/jsom/business-administration'],
    ],
    deadline: 'Round 2 · 8 Jan (month-day; year not labeled on official FT MBA deadlines table; fall start; R1 Oct 15 passed if same annual cycle)',
    deadlineDate: null,
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-057","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE accepted equally with GMAT Focus. Program is not test-optional. GRE school code R6897. Upload unofficial score; official required if admitted. Automatic waiver path for PhD/PharmD/DBA or U.S.-based MD/JD or MCAT/LSAT report; other waivers evaluated on Academic Readiness, Quantitative/Analytic Strength, Leadership/Professional Maturity, Supplemental Evidence (not guaranteed). Scholarship eligibility generally requires a submitted GMAT/GRE.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT Focus or GRE required (not test-optional). No strict minimum; FT MBA Class of 2023 average GMAT ~689 (650–700 mid range cited on admissions FAQ). GMAT codes via Jindal GMAC listing. Waiver paths same as GRE detail.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "International applicants must provide English proficiency. UT Dallas Graduate Admissions: TOEFL iBT min 80 (tests on/before 2026-01-26) or 4 (after 2026-01-26); PBT 550. School code 6897. Scores <2 years old at admission."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic minimum 6.5 (UT Dallas Graduate Admissions). DET min 105 and PTE Academic min 67 also accepted university-wide."
        },
        "waiver": "Automatically waived if bachelor's/master's earned through instruction and examination in English; or native country primary language is English (UTD recognized list). MBA FAQ also cites U.S. bachelor's/master's and English-instruction degree."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "UT Dallas Graduate Admissions expects overall GPA of 3.0 (4.0 scale) or better for graduate admission; MBA review is holistic."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter from a professional contact (need not be an employer). Submit via online LOR system or PDF to mba@utdallas.edu."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of purpose plus a second essay (each 300–500 words) via applicant portal. Second essay prompts strategies for continued personal/professional success and 5/10/15-year vision after the FT MBA and how the program helps.",
        "alsoKnownAs": "Statement of purpose; second essay"
      },
      "resume": {
        "status": "required",
        "detail": "Detailed résumé of all work history required. Two years post-baccalaureate work experience required; exceptions considered for internship experience or strong academic record."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload official digital copies of transcripts from all universities attended (unofficial copies not accepted for review upload). If admitted, official transcripts sent directly from issuing university."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews by invitation only for Full-Time MBA candidates."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Automatically waived for UT Dallas alumni, active-duty military, and veterans.",
        "detail": "$75 for domestic and international candidates."
      },
      "other": [
        "Fall-only Full-Time MBA cohort (18-month). Incomplete files not reviewed.",
        "Rounds (month-day on table; years unlabeled on FT MBA page): Oct 15 / Jan 8 / Mar 1 / May 1 then rolling.",
        "MS/MBA dual path: apply to MS per MS rules; combining FT MBA cohort with MS occurs after MBA admission.",
        "Seat fee $750 within 10 days of admit (programming fee, not tuition deposit)."
      ],
      "advice": "GMAT/GRE required unless waiver granted—optional ≠ waived. Scholarship competition typically needs a test score. Use Grad Admissions English minima alongside MBA checklist.",
      "sources": [
        [
          "UT Dallas Full-Time MBA Admissions",
          "https://mba.utdallas.edu/admissions/full-time-mba/"
        ],
        [
          "UT Dallas MBA Admissions FAQ",
          "https://mba.utdallas.edu/admissions/"
        ],
        [
          "UT Dallas Graduate Admissions International Students (English)",
          "https://graduate-admissions.utdallas.edu/apply-to-ut-dallas/international-students/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'usc-mba': {
    orientation: '2 years · 63 units · PRIME',
    academic: 'Marshall Full-Time MBA: 2 years, 63 units (24 core + electives) with PRIME and summer internship option.',
    internship: 'Career Launchpad provides career planning and networking preparation. This is support, not a verified internship placement guarantee.',
    tuition: 86295,
    tuitionLabel: 'Academic-year tuition (Marshall Full-Time MBA, first year)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'USC Marshall Full-Time MBA Tuition & Fees based on 2026–2027 rates: First-year Tuition $86,295; Second-year Tuition $78,450. Separate first-year line items: USC Central Services and Health Fees $1,922, MBA Program Fees $3,000, PRIME Fee $3,850, Student Health Insurance $3,988 — first-year published total $99,055 (excludes housing/living). Second-year total $84,481. Rates may rise ~3–5% annually; official USC rates at arr.usc.edu. Full-time MBA only — not IBEAR/part-time.',
    sources: [
      ['Official tuition / budget', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/tuition-fees'],
      ['Full-Time MBA program', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba'],
      ['Full-Time MBA Admissions (deadlines)', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/admissions'],
      ['Full-Time MBA curriculum', 'https://www.marshall.usc.edu/full-time-mba-curriculum'],
      ['MBA programs', 'https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/'],
    ],
    deadline: 'Round 2 · 5 Jan 2027 (Full-Time MBA; R1 passed; clock time not on table)',
    deadlineDate: '2027-01-05',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-056","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE optional for Full-Time MBA; may submit as additional data point. No minimum score. If submitting GRE, ETS code 4852. Official score report must also be sent if scores submitted.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT or GRE optional; GMAT code 389-9C-23. No minimum. Upload official test-taker score report and send school report if submitting.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL required for most international applicants (U.S. permanent residents excluded). USC Grad Admission states no university-wide admission score minimums; ISE placement thresholds for master's (Spring 2027+ apps): TOEFL iBT 90/20 each section (pre-2026-01-21) or 4.5/4 each (on/after 2026-01-21). Institution code 4852."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS Academic accepted. USC Grad Admission master's ISE placement: Overall 6.5 with 6.0 each band (not a university-wide admission floor). Send to University of Southern California."
        },
        "waiver": "Exempt per USC English Language Proficiency Policies (U.S. citizens/PRs; qualifying Anglophone bachelor's/master's/doctorate; native English in qualifying countries). Marshall also does not require English exam if bachelor's (or equivalent) from a non-U.S. institution where sole medium of instruction is English, with official school documentation (transcript/diploma/letter)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": "4.0",
        "detail": "No minimum GPA required. Class Profile shows average GPA on 4.0 scale; international applicants need not convert to 4.0."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Marshall neither requires nor accepts letters of recommendation as part of the Full-Time MBA admissions process."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay(s) required in online application (prompts in application). Optional essay available (e.g., second MBA, reapplicant updates).",
        "alsoKnownAs": "Essay(s)"
      },
      "resume": {
        "status": "required",
        "detail": "Professional résumé required in online application. Most students have work experience; minimum ~2 years recommended (not a hard floor)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload copies of official academic transcripts with application. Non-English transcripts: original plus translated copy. Bachelor's degree or equivalent required."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on Marshall Full-Time MBA Admissions requirements page."
      },
      "applicationFee": {
        "amountUsd": 0,
        "waivers": "No application fee charged.",
        "detail": "There is no application fee for the Full-Time MBA."
      },
      "other": [
        "Fall 2027 rounds: R1 Oct 15 2026; R2 Jan 5 2027; R3 Mar 1 2027; R4 Apr 15 2027; R5 rolling after Apr 15 2027.",
        "Consortium for Graduate Study in Management member; eligible U.S. citizens/PRs/DACA may apply via Consortium common application.",
        "All majors welcome; bachelor's only educational prerequisite."
      ],
      "advice": "Optional GMAT/GRE ≠ waived. LOR not accepted—do not send. Confirm English waiver documentation early for MOI-English non-U.S. degrees.",
      "sources": [
        [
          "USC Marshall Full-Time MBA Admissions",
          "https://www.marshall.usc.edu/programs/graduate-programs/mba-programs/full-time-mba/admissions"
        ],
        [
          "USC Graduate Admission English Proficiency",
          "https://gradadm.usc.edu/lightboxes/international-students-english-proficiency/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'gatech-mba': {
    orientation: '~22 months · 54 hours · Intl elective',
    academic: 'Scheller Full-Time MBA: ~22 months, 54 hours (21 core + 33 electives incl. international elective); summer internship.',
    tuition: 44956,
    tuitionLabel: 'Academic-year tuition (Full-time MBA, Out-of-State)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Georgia Tech Scheller Full-time MBA Tuition and Financing: Out-of-State $44,956/Year; In-State $30,548/Year; Out-of-Country $46,260/Year. Mandatory Fees $1,516/Year (plus $100 international student fee when applicable). Confirmed on Bursar Fall 2026 MBA chart: Out-of-State tuition $22,478 at 12+ credit hours/semester → $44,956 AY; institute fees $758/semester → $1,516 AY. Full-time MBA only — not Evening MBA.',
    sources: [
      ['Official tuition / budget', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/tuition-and-financing/index.html'],
      ['Bursar Fall 2026 MBA tuition PDF', 'https://bursar.gatech.edu/student/tuition/fa26/fa26_mba.pdf'],
      ['Full-time MBA curriculum', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/curriculum/index.html'],
      ['Full-time MBA Admissions (Fall 2027 deadlines)', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/index.html'],
      ['Full-time MBA program', 'https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/'],
      ['Catalog MBA', 'https://catalog.gatech.edu/programs/mba/'],
    ],
    deadline: 'Round 2 · 8 Jan 2027 (Fall 2027 Start Full-time MBA; R1 passed; clock time not on table)',
    deadlineDate: '2027-01-08',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-054","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Accepts GRE (or GMAT/GMAT Focus) within past five years; highest overall score reviewed. Institute GRE code 5248. Test-optional path: applicants may apply without disclosing scores (MBA Supplemental → test-optional essay, 2,000 characters). International applicants strongly recommended to submit a score for admission/funding competitiveness. Supplemental EA/LSAT/MCAT may be provided as extra info.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT or GMAT Focus accepted; Full-time MBA GMAT code HWK-54-37. Beginning Aug 2027 GMAC Superscore appears on reports—committee reviews Superscore and individual sittings. Same test-optional path as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 95,
          "detail": "International applicants must submit valid TOEFL or IELTS unless exempt per Georgia Tech Graduate Studies English Proficiency Requirements. TOEFL min 95 (0–120) or 5 (new 1–6 scale); scores valid 2 years."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS minimum overall 7. Exceptions per Grad Studies English Proficiency Requirements."
        },
        "waiver": "Exceptions listed on Georgia Tech Graduate Studies English Proficiency Requirements page (U.S. permanent residents noted as exempt on Scheller international page synthesis—confirm Grad Studies list)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Accredited four-year bachelor’s from any academic background; no numeric minimum GPA stated on Full-time MBA admissions page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two professional LORs expected (portal allows up to three). One should be current or former manager. Common Letter of Recommendation (GMAC) accepted."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three required essays (2,000 characters each incl. spaces): Career goals; Community building; Ten facts. Optional essay 500 words. Reapplicant essay 250 words if applicable. Test-optional applicants also complete preparedness essay (2,000 characters).",
        "alsoKnownAs": "MBA essays"
      },
      "resume": {
        "status": "required",
        "detail": "Up-to-date résumé required; post-graduate work experience and leadership/community experiences considered. Typically ≥2–3 years post-grad work preferred; average ~5 years."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from undergrad and any graduate enrollment; scanned official copies OK for initial review. Official transcripts must be received/processed by Georgia Tech Graduate Education before official admission invitation."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews by invitation only (virtual or in-person). May include admissions, career services, and a current MBA student. Fall 2027 interview windows listed by round on admissions page."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "Institute Application Fee Waivers: U.S. veterans/military, U.S. first-generation college students, financial hardship. Department-level waivers: contact mba@scheller.gatech.edu.",
        "detail": "$95 domestic; $105 international. Paid online."
      },
      "other": [
        "Fall 2027 start only; rounds: R1 Oct 5 2026; R2 Jan 8 2027; R3 Mar 5 2027; R4 Apr 30 2027. Majority of merit funding in R1–R2; internationals encouraged by R2.",
        "STEM-designated MBA (OPT extension eligibility).",
        "MBA Early Admission for Undergraduates deferred path available for U.S. undergrads."
      ],
      "advice": "Test-optional ≠ automatic waiver of English proficiency. Internationals: submit TOEFL/IELTS unless Grad Studies exempt; strongly consider submitting GMAT/GRE for funding.",
      "sources": [
        [
          "Full-time MBA Admissions",
          "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/index.html"
        ],
        [
          "International applicants / English",
          "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/international-applicants.html"
        ],
        [
          "Test-optional FAQs",
          "https://www.scheller.gatech.edu/explore-programs/mba-programs/full-time-mba/admissions/test-optional-info.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'washu-mba': {
    orientation: '2 years · 67 credits · Optional specializations',
    faculty: 'The specialization page identifies Patrick Moreton as faculty advisor for Strategy and Consulting. This is an advising role, not confirmation of research supervision availability.',
    sources: [
      ['Official tuition / budget', 'https://olin.washu.edu/programs/mbas/full-time-mba/cost-aid-scholarships.php'],
      ['Bulletin 2026–27 master\'s financial (PDF)', 'https://bulletin.wustl.edu/grad/business/graduate-masters/financial/financial.pdf'],
      ['Curriculum', 'https://olin.washu.edu/programs/mbas/full-time-mba/curriculum.php'],
      ['Official tuition / budget', 'https://olin.washu.edu/programs/mbas/full-time-mba/specializations.php'],
      ['Full-Time MBA How to Apply (Fall 2027 deadlines)', 'https://olin.washu.edu/programs/mbas/full-time-mba/apply.php'],
      ['Full-Time MBA program', 'https://olin.washu.edu/programs/mbas/full-time-mba/'],
      ['Full-Time MBA', 'https://olin.washu.edu/programs/mbas/full-time-mba/index.php'],
    ],
    tuition: 72700,
    tuitionLabel: 'Academic-year tuition (Olin Full-Time MBA; 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'WashU Olin Full-Time MBA Cost, Aid and Scholarships (posted Spring 2026) for candidates starting Fall 2026: Tuition $72,700 ($36,350/semester) under Academic Year 2026–27 — equals two flat-rate semesters. Program Fee $900, Student Government Fee $130, Health and Wellness Fee $350 per semester (fees not in the $72,700). Published Total $150,920 ($37,730/semester) is the four-semester / full-program estimate (4 × $36,350 tuition + 4 × $1,380 fees = $150,920), not used as the annual tuition field. Bulletin 2026–27 lists Full-Time MBA $36,350 per semester (four semesters standard). Page note calling the $72,700 \'entire program\' conflicts with semester math and bulletin; AY figure used. Full-time MBA only — not Flex/EMBA.',
    deadline: 'Round 2 · 7 Jan 2027 · 11:59 p.m. CT (Full-Time MBA Fall 2027; R1 passed)',
    deadlineDate: '2027-01-07',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-052","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Olin Full-Time MBA: 2 years, 67 credits (25 core + 42 electives). Optional specializations; electives can start in year 1.',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE recommended but not required. GRE code 6929. Online GRE accepted. No separate waiver needed—applications may be submitted without scores. Committee weighs undergraduate GPA, quant academic/professional evidence, advanced degrees, CPA/CFA, military officer rank, or expired GMAT/GRE if no score submitted.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT recommended but not required (code R4T-WG-61). Online GMAT accepted. Entirely optional per FT MBA FAQ; scores can strengthen admission/scholarship competitiveness.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "Most international (non-U.S. citizen/PR) applicants must submit TOEFL iBT/Home: 5.0 overall new scale OR ≥90 overall old scale (also notes 4.5 threshold language on page—use posted table). ETS code 6929. Scores valid through application deadline; expired not accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic 6.5. Gateway English 495 and Duolingo 125 also accepted. Send electronically to Washington University in St. Louis Graduate Programs/Admissions."
        },
        "waiver": "Exemption possible per WashU official exemptions list; request in application portal (Office of the Provost reviews). Citizens of countries listed in FT MBA English proficiency policy section may not need scores. Committee may still request a score."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on How to Apply page."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Letters of recommendation are not required (official FT MBA FAQ)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required personal statement (500-word max) on life experiences shaping graduate school decision and how Olin helps long-term goals; Career Prompt (100-word max) on ideal immediate post-MBA career. Optional essay (250-word max).",
        "alsoKnownAs": "Personal statement; Career Prompt"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume required (longer accepted but concision encouraged). No minimum work experience years; median ~4.3 years cited in FAQ."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial academic transcripts for review; U.S. bachelor's equivalent required at enrollment (most international 3-year degrees OK). Official transcripts before orientation if enrolling. Non-English: original language + English translation. WES/ECE not required."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview/video interview not listed on current How to Apply required items or FT MBA FAQ PDF as of research date."
      },
      "applicationFee": {
        "amountUsd": 0,
        "waivers": "No application fee; no waiver needed.",
        "detail": "Full-Time MBA charges no application fee."
      },
      "other": [
        "Fall 2027 deadlines: R1 Oct 8 2026; R2 Jan 7 2027; R3 Feb 25 2027; R4 Apr 15 2027; then rolling (11:59 p.m. CT).",
        "Holistic review; intentionally small class.",
        "Up to 9 transfer credits possible post-enrollment under AACSB/B-or-better rules (separate from admissions)."
      ],
      "advice": "GMAT/GRE optional ≠ waived requirement—there is no hard test requirement. Confirm English exemption early in portal. Do not rely on older news posts that listed LOR/KIRA if current apply checklist omits them.",
      "sources": [
        [
          "WashU Olin Full-Time MBA How to Apply",
          "https://olin.washu.edu/programs/mbas/full-time-mba/apply.php"
        ],
        [
          "WashU Olin Full-Time MBA Application FAQ (PDF)",
          "https://olin.washu.edu/docs/programs/ftmba-faqs.pdf"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'usc-cs': {
    tuition: 43872,
    tuitionLabel: 'Academic-year tuition (Viterbi graduate engineering, 8 units × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'USC Viterbi Graduate Tuition Fall 2026–Summer 2027: $2,742 per unit (same for on-campus and DEN@Viterbi). MS Computer Science requires 32 units (thesis option adds 4). Typical full-time pace in Viterbi COA examples is 8 units/semester → AY tuition $2,742 × 8 × 2 = $43,872. Full 32-unit program tuition at the published rate = $87,744. Mandatory fees about $922/semester (health center, Topping, programming, transportation; first semester adds one-time $55 orientation) not included in the tuition figure. Health insurance separate.',
    sources: [
      ['Official tuition / budget', 'https://viterbigradadmission.usc.edu/programs/masters/tuition-funding/tuition-funding-masters/'],
      ['32-unit MS COA PDF', 'https://viterbigradadmission.usc.edu/wp-content/uploads/2026/03/2026-2027-Tuition-and-Fees-32.pdf'],
      ['Viterbi MS CS', 'https://viterbigradadmission.usc.edu/programs/masters/msprograms/computer-science/ms-computer-science/'],
      ['USC Viterbi Master\'s Application Deadlines', 'https://viterbigradadmission.usc.edu/programs/masters/apply/'],
      ['USC CS Master\'s programs', 'https://www.cs.usc.edu/academic-programs/masters/'],
      ['MS CS General', 'https://www.cs.usc.edu/academic-programs/masters/computer-science-general/'],
    ],
    deadline: 'Fall 2027 final 15 Jan 2027 · 11:59 p.m. PT · Scholarship consideration 15 Dec (Fall 2027 row; year not printed on that cell)',
    deadlineDate: '2027-01-15',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'USC Viterbi MS CS (General): 32 units with CSCI 570 + electives; thesis and many specializations available; FT often 1.5–2 years.',
    orientation: '32 units · CSCI 570 · Specializations / thesis',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "GRE not required for 2027 Master's applications to Viterbi (including MSCS). Official pages do not invite optional GRE submission for 2027 MS.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of Viterbi MSCS admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "International applicants must demonstrate English proficiency (TOEFL/IELTS/etc.). USC does not set university-wide admission score minimums; ISE exam exemption typically at TOEFL iBT ≥90 with ≥20 each section (pre-2026-01-21) or ≥4.5 with ≥4 each section (on/after 2026-01-21) for master's. Code 4852. Scores within 24 months of application submit."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS Academic accepted; ISE exemption typically overall ≥6.5 with ≥6 each band for master's (placement guideline, not a university-wide admission cutoff)."
        },
        "waiver": "Exempt if USC degree holder/enrolled; bachelor's from U.S. or qualifying Anglophone country (English only official language + language of instruction)—Spring 2027+ policy: entire program need not be Anglophone but degree must be issued by institution in U.S./qualifying Anglophone country (dual-degree exception); completed master's/doctoral from qualifying Anglophone country; or native English speaker from qualifying countries. No waiver for English-taught programs in non-Anglophone countries."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA stated on Viterbi MSCS program page; bachelor's required or in progress; holistic review. Eligibility coursework listed for non-CS bachelor's."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Letter of Recommendation listed as Optional on Viterbi MSCS Application Requirements."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal Statement required with online application.",
        "alsoKnownAs": "Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Registrar-issued transcripts (electronic/scanned) from all colleges/universities; unofficial student-portal transcripts not acceptable for Viterbi. Hard copies after admission if instructed."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on Viterbi MSCS or Ready to Apply pages."
      },
      "applicationFee": {
        "amountUsd": 120,
        "waivers": "Not detailed on Ready to Apply page for Viterbi master's; confirm USC Graduate Admission waiver policy if needed.",
        "detail": "$120 application fee (Ready to Apply). Fall deadlines: Dec 15 scholarship consideration; Jan 15 final. Spring Oct 15."
      },
      "other": [
        "OPT STEM eligible.",
        "32-unit general MSCS; thesis option adds units.",
        "Also available via DEN@Viterbi online."
      ],
      "advice": "Use Viterbi Grad Admission MSCS page (not department curriculum page alone). Optional LOR ≠ waived requirement elsewhere.",
      "sources": [
        [
          "USC Viterbi MS in Computer Science admissions",
          "https://viterbigradadmission.usc.edu/programs/masters/msprograms/computer-science/ms-computer-science/"
        ],
        [
          "USC Viterbi Ready to Apply (fee)",
          "https://viterbigradadmission.usc.edu/programs/masters/apply/ready-to-apply/"
        ],
        [
          "USC Viterbi Master's FAQ (GRE/English)",
          "https://viterbigradadmission.usc.edu/programs/masters/faq/"
        ],
        [
          "USC Graduate Admission English Proficiency (Spring 2027+)",
          "https://gradadm.usc.edu/prospective-international-students/english-proficiency/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'yale-cs': {
    tuition: 52400,
    tuitionLabel: 'Academic-year tuition (GSAS full-time master’s)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Yale Graduate School of Arts and Sciences Tuition and Fees 2026–27: full-time study $26,200 per term → $52,400 AY. Half-time $13,100/term; one-quarter time $6,550/term. Continuous Registration Fee $880/term; Yale Health Hospitalization/Specialty Coverage $3,764 for twelve months—fees not included in the tuition figure. CS one-year MS is typically eight courses (four per term for visa full-time); two-year research/TF track exists with limited places. Most one-year MS students pay tuition themselves.',
    sources: [
      ['Official tuition / budget', 'https://gsas.yale.edu/resources/graduate-financial-aid/tuition-and-fees'],
      ['Student Accounts GSAS rates', 'https://student-accounts.yale.edu/tuition-and-fees'],
      ['MS program', 'https://engineering.yale.edu/academic-study/departments/computer-science/graduate-study/master-science-program'],
      ['GSAS Dates & Deadlines (CS MS Jan 2, 2027; Fall 2027 reply Apr 15)', 'https://gsas.yale.edu/admissions/phdmasters-application-process/dates-deadlines'],
      ['GSAS Computer Science', 'https://gsas.yale.edu/programs-of-study/computer-science'],
      ['GSAS PhD/Master\'s application process (Fall 2027 app available)', 'https://gsas.yale.edu/admissions/phdmasters-application-process'],
    ],
    deadline: 'Apps open (Fall 2027 application available) · Deadline 2 Jan 2027 · 11:59 p.m. ET (CS MS)',
    deadlineDate: '2027-01-02',
    academic: 'Yale CS terminal MS: one-year (8 courses) or selective two-year (6 courses + thesis + teaching). Visa students on one-year track take 4 degree courses per term.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: '1-year (8 courses) or 2-year thesis · Terminal MS',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE General Test required for Computer Science MS (GSAS standardized testing table, 2026–2027 cycle). PhD: GRE not accepted. Institution code 3987. Program FAQ: no absolute cut-offs; accepted students generally ~90th percentile.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not used for Yale CS MS (GMAT only noted for Management PhD at GSAS).",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "TOEFL iBT required of most non-native English speakers (or IELTS Academic). No published hard minimum on GSAS testing page; CS MS FAQ states if TOEFL required they generally look for totals well above 100. Code 3987."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS Academic accepted via E-Delivery to Yale GSAS; no hard minimum published on GSAS testing page. IELTS Online / One Skill Retake / General Training not accepted."
        },
        "waiver": "Exempt if undergraduate degree from college/university where English is primary language of instruction and studied in residence ≥3 years. No exemption based on advanced degree (MA/MS/PhD) alone."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on GSAS CS program page or Engineering MS program page; FAQ says GPA considered with scores, recommendations, personal statement."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters of recommendation via GSAS application (standard for all PhD/Master's applicants)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of academic purpose required (GSAS prompt; typically 500–1000 words per GSAS application guidance). FAQ: research experience not required for this professional MS.",
        "alsoKnownAs": "Statement of academic purpose / personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required for all GSAS PhD/Master's applicants."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts from all prior colleges/universities uploaded with application; official later if needed."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on GSAS application process or Engineering MS program pages."
      },
      "applicationFee": {
        "amountUsd": 105,
        "waivers": "Fee waivers for PhD/Master's applicants via special program/status or documented financial hardship; request form deadline Jan 2; U.S. and non-U.S. citizens eligible to request.",
        "detail": "US $105 non-refundable for degree-seeking applicants. MS deadline January 2, 11:59pm ET. Fall entry only."
      },
      "other": [
        "Apply via Yale GSAS (not Engineering department portal).",
        "One-year terminal MS most common; selective two-year MS with teaching fellowship + thesis also offered.",
        "Need CS coursework beyond basic programming/data structures (advanced algorithms, systems/architecture); MOOCs not accepted as formal preparation.",
        "No financial aid for one-year MS; two-year has tuition fellowship + small stipend."
      ],
      "advice": "GRE required for MS only (opposite of PhD). Confirm 2026–2027 GSAS testing table each cycle.",
      "sources": [
        [
          "Yale Engineering CS Master of Science Program",
          "https://engineering.yale.edu/academic-study/departments/computer-science/graduate-study/master-science-program"
        ],
        [
          "Yale GSAS Computer Science program page",
          "https://gsas.yale.edu/programs-of-study/computer-science"
        ],
        [
          "Yale GSAS Standardized Testing Requirements",
          "https://gsas.yale.edu/admissions/phdmasters-application-process/standardized-testing-requirements"
        ],
        [
          "Yale GSAS PhD/Master's Application Process",
          "https://gsas.yale.edu/admissions/phdmasters-application-process"
        ],
        [
          "Yale GSAS Application Fees & Fee Waivers",
          "https://gsas.yale.edu/admissions/phdmasters-application-process/application-fees-fee-waivers"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'brown-cs': {
    tuition: 43908,
    tuitionLabel: 'Academic-year tuition (ScM Computer Science, 4 courses × per-course rate)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Brown Student Financial Services / Graduate Funding COA 2026–27: Computer Science master’s per-course rate $10,977. Standard track for ScM CS is 8 courses; COA budgets 2 courses/term → AY tuition $21,954 × 2 = $43,908. Estimated total program tuition at the published rate = $87,816. Mandatory fees in the COA (~$1,596 AY at the 2+2 pattern) and health insurance are separate. Program may also be completed as 8 courses in one year.',
    sources: [
      ['Official tuition / budget', 'https://sfs.brown.edu/tuition-and-fees/graduate'],
      ['COA by program (CS)', 'https://gradfunding.brown.edu/cost-attendance-program'],
      ['Graduate Programs ScM Computer Science (deadlines)', 'https://graduateprograms.brown.edu/graduate-program/computer-science-scm'],
      ['MS overview', 'https://cs.brown.edu/degrees/masters/'],
      ['Brown CS Applying to Master\'s', 'https://cs.brown.edu/degrees/masters/applications/'],
      ['SPS Deadlines and Credits (CS Fall Jan. 15)', 'https://masters.brown.edu/admissions/tuition-aid/deadlines-credits'],
      ['Comprehensive track requirements', 'https://cs.brown.edu/degrees/masters/reqs/'],
    ],
    deadline: 'Fall: 15 Jan (month-day; year not labeled) · Spring: 1 Nov · Fifth-year Fall: 1 May',
    deadlineDate: null,
    academic: 'Brown CS ScM: 8 graded graduate courses within ~2 years (or ~1.5–16 months accelerated). Comprehensive or AI/ML tracks; optional professional internships and CSCI 2980 research project.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: '8 courses · Comprehensive or AI/ML · ~1.5–2 years',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE General not required but score submission is encouraged. GRE Subject not required. If supplied, strong results expected (CS applications page).",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Pure CS ScM; GMAT not part of program requirements.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 105,
          "detail": "Required for intl applicants whose native language is not English unless exempt. TOEFL iBT on/before Jan 20 2026: min 105. On/after Jan 21 2026: min 5.0 (5.5+ strongly recommended). No MyBest/Superscores. Code 3094."
        },
        "ielts": {
          "status": "required",
          "minScore": 8,
          "detail": "IELTS minimum overall 8.0 per CS ScM program page (above general master’s recommended 7)."
        },
        "waiver": "Not required if degree from institution where English is sole language of instruction, or from listed countries (Australia, Bahamas, Botswana, Cameroon, Canada except Quebec, Ethiopia, Ghana, Ireland, Kenya, Lesotho, Liberia, Malawi, New Zealand, Nigeria, Zimbabwe, South Africa, Sierra Leone, Swaziland, Tanzania, Gambia, Uganda, UK, West Indies, Zambia)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on CS ScM graduateprograms page; seeks outstanding students with CS/equivalent background."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "3 letters for external applications; 2 for Brown fifth-year. Recent grads (≤3 years) / current students: at least 2 from professors who can speak to CS coursework."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Master’s application process requires Personal Statement and/or short-answer/program questions (see application).",
        "alsoKnownAs": "Personal Statement / program questions"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required (CS ScM application requirements)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial OK for application; official only for enrolling students. Non-U.S. degrees: WES/ECE/The Evaluation Company evaluation required before enrollment. Undergrads: include Fall grades when available."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on CS ScM program or CS applications pages."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "Need-based waiver via form in application; veterans/active-duty military eligible with documentation (Master’s Programs FAQ).",
        "detail": "Dollar amount not stated on CS ScM or CS applications pages as of scrape; confirm in online application."
      },
      "other": [
        "On-campus ScM (Comprehensive) and AI/ML track (campus or online) — same degree family",
        "Fall deadline Jan 15 (intl & final); Spring Nov 1 (intl Oct 1); fifth-year May 1 Fall / Nov 1 Spring",
        "Prereq-style background: intro programming, algorithms/DS, systems or SE, discrete math/probability, linear algebra + one advanced CS course"
      ],
      "advice": "GRE optional but encouraged. IELTS bar is high (8.0). Distinguish on-campus Comprehensive vs AI/ML track. Fee amount confirm in portal.",
      "sources": [
        [
          "CS ScM application requirements",
          "https://graduateprograms.brown.edu/graduate-program/computer-science-scm"
        ],
        [
          "Brown CS Applying",
          "https://cs.brown.edu/degrees/masters/applications/"
        ],
        [
          "Master’s application process",
          "https://masters.brown.edu/admissions/application-process"
        ],
        [
          "Master’s Programs FAQ (fee waivers)",
          "https://masters.brown.edu/admissions/masters-programs-faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'nyu-cs': {
    tuition: 58224,
    tuitionLabel: 'Academic-year tuition (GSAS Courant, $2,426/point × 12 points × 2 semesters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Courant GSAS—not Tandon.',
    costDetail: 'NYU Bursar 2026–27 Tuition and Fees PDF: Graduate School of Arts and Science All Programs $2,426 per credit/point, plus Registration & Services fee $503 for the first credit and $81 per additional credit each term. GSAS states a full-time load is typically 12 points/semester → tuition $29,112/semester → $58,224 AY Fall+Spring (R&S fees ~$1,394/term not included in the tuition figure). Courant MSCS requires 30 points (36 with concentration); full 30-point tuition at $2,426 = $72,780. Do not use Tandon Engineering rates ($2,626/point).',
    sources: [
      ['Official tuition / budget (Bursar PDF)', 'https://www.nyu.edu/content/dam/nyu/bursar/documents/2026-2027%20Tuition%20and%20Fees.pdf'],
      ['GSAS tuition & fees', 'https://gsas.nyu.edu/admissions/financial-aid/tuition-fees.html'],
      ['Courant Master\'s prospective overview (Feb 12 Fall / Nov 1 Spring)', 'https://cs.nyu.edu/dynamic/masters/prospective-overview/'],
      ['GSAS ARC Computer Science (MSCS deadlines; 5PM ET)', 'https://gsas.nyu.edu/admissions/arc/programs/computer-science.html'],
      ['MS-CEI Admissions (Fall 2027 deadline February 12)', 'https://cs.nyu.edu/ms-cei/admissions.html'],
      ['Current MSCS requirements', 'https://cs.nyu.edu/home/master/current_mscsreq.html'],
      ['Bulletin MSCS', 'https://bulletins.nyu.edu/graduate/arts-science/programs/computer-science-courant-ms/'],
    ],
    deadline: 'MSCS Fall 12 Feb 2027 (CEI year-labeled Fall 2027; GSAS month-day Feb 12) · 5 p.m. ET · Spring 1 Nov',
    deadlineDate: '2027-02-12',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'NYU Courant MSCS: 30-credit standard with three foundations + application + capstone, or 36-credit AI / Systems-Security concentrations. Full-time typically ~2 years; max 5 years.',
    orientation: '30 or 36 credits · Foundations + capstone · ~2 years FT',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GSAS Computer Science program page: GRE Optional for M.S. in Computer Science—applicants are not expected or required to submit GRE; may submit (official scores not needed at application time). Courant MS admissions FAQ: GRE recommended but not required.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "Courant MS admissions FAQ: GMAT and LSAT are not accepted as substitutes for the GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "GSAS: official TOEFL, IELTS, or Duolingo required unless exempt. Courant FAQ guidance: TOEFL above 100 iBT (also cites historical paper 620 / computer 260). Institution code 2596; use TOEFL department code 99 (not 00)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Courant FAQ: IELTS minimum band score 7.0. Send electronically to New York University, Graduate School of Arts and Science."
        },
        "waiver": "Exempt if native English speaker; OR U.S. citizen/permanent resident; OR completed (or will complete) a baccalaureate or master's degree at an institution where the language of instruction is English (GSAS Computer Science page)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA published on GSAS CS or Courant MS admissions FAQ; FAQ cites strong academic performance in relevant coursework."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "GSAS requires three letters of recommendation for degree applications; Courant FAQ expects positive specific letters. Submit via GSAS online system (no Interfolio)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "GSAS CS: Statement of Academic Purpose—past/present work, educational objectives, career goals, reasons for field and NYU GSAS; should not exceed two double-spaced pages.",
        "alsoKnownAs": "statement of academic purpose"
      },
      "resume": {
        "status": "required",
        "detail": "GSAS Application Resource Center: résumé or curriculum vitae is a required component of a complete application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Academic transcripts required per GSAS ARC complete-application list."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed for MSCS on GSAS Computer Science program page (video statement noted as optional/highly recommended for Information Systems MS only)."
      },
      "applicationFee": {
        "amountUsd": 115,
        "waivers": "See GSAS application-fee / aid policies on ARC; not detailed as CS-specific on program page.",
        "detail": "GSAS application fee for most programs is $115 (Data Science $130; Math in Finance $150—not MSCS)."
      },
      "other": [
        "Fall admission deadline Feb 12; Spring Nov 1 (GSAS CS page; 5 p.m. Eastern).",
        "Given URL current_mscsreq.html is degree/curriculum requirements (30/36-credit options, foundations)—not admissions checklist; admissions from GSAS ARC + Courant MS admissions FAQ.",
        "MSCS technical prereqs (FAQ): deep C; OOP (Java/C++); data structures; math (induction, asymptotics, probability, combinatorics, sets); Windows/Unix familiarity.",
        "Do not conflate with Tandon CS programs."
      ],
      "advice": "Prefer GSAS Computer Science ARC + Courant MS admissions FAQ over the curriculum requirements URL for applicationRequirements.",
      "sources": [
        [
          "NYU GSAS Computer Science program requirements & deadlines",
          "https://gsas.nyu.edu/admissions/arc/programs/computer-science.html"
        ],
        [
          "NYU GSAS Application Resource Center",
          "https://gsas.nyu.edu/admissions/arc.html"
        ],
        [
          "NYU GSAS Letters of Recommendation",
          "https://gsas.nyu.edu/admissions/arc/letters-of-recommendation.html"
        ],
        [
          "Courant Master's Program Admissions FAQs",
          "https://cs.nyu.edu/dynamic/masters/prospective-overview/masters-program-admissions-faqs/"
        ],
        [
          "Courant MSCS degree requirements (curriculum; not admissions)",
          "https://cs.nyu.edu/home/master/current_mscsreq.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'northwestern-cs': {
    tuition: 70986,
    tuitionLabel: 'Academic-year tuition (TGS master’s full-time 3–4 units × 3 quarters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Northwestern Evanston Graduate Financial Aid / TGS Master’s COA 2026–27: full-time 3–4 credits/units $23,662 per quarter. Academic-year Fall+Winter+Spring = $70,986. Single unit $8,418; two units $16,836. Health Services Fee $298/quarter (F/W/S); NU-SHIP annual premium $5,996—fees not included in the tuition figure. MS Computer Science requires 12 graduate units (typically 3–4 quarters). McCormick SFS also lists $23,662/quarter full-time for several engineering master’s schedules.',
    sources: [
      ['Official tuition / budget (TGS master’s COA)', 'https://www.northwestern.edu/evanston-graduate-financial-aid/getting-started/tuition-cost-of-attendance/tgs/masters.html'],
      ['McCormick graduate tuition', 'https://www.northwestern.edu/sfs/tuition/graduate/mccormick.html'],
      ['CS Graduate Programs hub', 'https://www.mccormick.northwestern.edu/computer-science/academics/graduate/'],
      ['CS Graduate Admissions (Fall 2027 open + MS staged dates)', 'https://www.mccormick.northwestern.edu/computer-science/academics/graduate/admissions/'],
      ['TGS Application Deadlines', 'https://www.tgs.northwestern.edu/admission/application-procedures/application-deadlines.html'],
      ['MS program', 'https://www.mccormick.northwestern.edu/computer-science/academics/graduate/masters/'],
      ['Catalog CS MS', 'https://catalogs.northwestern.edu/tgs/computer-science/computer-science-ms/'],
    ],
    deadline: 'Apps open 15 Sep 2026 · MS Fall 2027 staged: by 30 Nov · 31 Dec · 28 Feb · 15 Jun (portal may close when full)',
    deadlineDate: '2026-11-30',
    academic: 'Northwestern CS MS: 12 graduate units, typically 3–4 quarters. Default course-only (Plan C); optional thesis (A) or project (B).',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    orientation: '12 units · 3–4 quarters · Course/thesis/project',
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "CS Admissions: GRE scores are neither required nor reviewed for the 2026–2027 masters program application (GRE required for PhD). FAQ: GRE not required for master's.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not used for Northwestern CS MS (TGS); GRE is the only optional/required standardized exam discussed by department.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "TGS: all applicants must prove English proficiency via TOEFL iBT / IELTS Academic / MET unless waiver approved. Master's TOEFL iBT minimum 80 for exams before 2026-01-21; all applicants minimum 4.5 after 2026-01-21. School code 1565. CS FAQ notes median TOEFL among offers was 108 (descriptive, not a published floor)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "TGS minimum IELTS Academic score = 7. At-home Indicator accepted when organization Northwestern University - The Graduate School is selected."
        },
        "waiver": "Waiver may be requested if undergraduate or graduate degree from institution that instructs primarily in English; request after application submission; approval at program/TGS discretion. DuoLingo and TOEFL Essentials not accepted by TGS."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No published minimum beyond TGS. FAQ: average GPA for offers ~3.82 (descriptive). Leave GPA in home-institution scale; department converts."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "CS Admissions Tips: minimum of two letters required; three highly recommended. TGS application requirements list two letters."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement required (TGS description); Personal Statement also per TGS. CS tips emphasize clear focus on specialization and faculty interest.",
        "alsoKnownAs": "Academic Statement; Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required among supplemental materials and McCormick/TGS checklists."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload scanned unofficial transcripts/PDFs with application; official may be required upon admission. Do not mail hard copies unless asked."
      },
      "interview": {
        "status": "not_used",
        "detail": "CS Admissions: primarily for PhD applicants, faculty may conduct interviews; not described as part of MS review."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "CS FAQ: application fee waivers are not available for master's applicants. TGS waivers mainly for eligible PhD/MFA domestic applicants.",
        "detail": "TGS application fee $95 non-refundable (credit/debit with card logo)."
      },
      "other": [
        "Fall quarter only; terminal MS option distinct from PhD (select MS only if seeking terminal master's).",
        "Fall 2027 entry applications opened Sep 15, 2026; rolling decision windows (e.g. submit by Nov 30 → decision by Jan 10; portal may close early when cohort full).",
        "No financial aid for terminal MS.",
        "Competitive background: CS degree or equivalent of at least a minor (multiple languages, data structures, discrete math)."
      ],
      "advice": "MS GRE is not_accepted (not reviewed), unlike PhD where GRE is required for 2026–2027.",
      "sources": [
        [
          "Northwestern CS Graduate Admissions",
          "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/admissions/"
        ],
        [
          "Northwestern CS Admissions FAQ",
          "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/admissions/faq.html"
        ],
        [
          "Northwestern CS Master's overview",
          "https://www.mccormick.northwestern.edu/computer-science/academics/graduate/masters/"
        ],
        [
          "TGS Application Fee",
          "https://www.tgs.northwestern.edu/admission/application-procedures/application-requirements/fee.html"
        ],
        [
          "TGS Test Scores / English",
          "https://www.tgs.northwestern.edu/admission/application-procedures/application-requirements/test-scores.html"
        ],
        [
          "TGS Application Requirements",
          "https://www.tgs.northwestern.edu/admission/application-procedures/application-requirements/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ucsb-cs': {
    tuition: 40984.68,
    tuitionLabel: 'Academic-year tuition and mandatory fees (graduate nonresident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UCSB Graduate Division 2026–27 Quarterly Fees: Nonresident yearly total $40,984.68 (Tuition $13,722 + Student Service Fee $1,344 + Campus Based Fees $1,279.53 + Tech Fee $152.40 + Student Health Insurance $9,384.75 + Nonresident Supplemental Tuition $15,102). Resident yearly total without NRST $25,882.68. NRST reduction for advanced-to-candidacy doctoral students does not apply to MS. MS Computer Science uses the standard graduate fee schedule.',
    sources: [
      ['Official tuition / budget', 'https://www.graddiv.ucsb.edu/fees-costs/26-27-quarterly'],
      ['Fees & costs hub', 'https://www.graddiv.ucsb.edu/fees-costs'],
      ['Catalog MS CMPSC', 'https://catalog.ucsb.edu/programs/MSCMPSC'],
      ['Grad Division MS Computer Science program (Fall 2027 final Dec 16, 2026)', 'https://www.graddiv.ucsb.edu/graduate-programs/departments/computer-science'],
      ['Grad Division portal MS CMPSC-MS-0', 'https://engage.graddiv.ucsb.edu/portal/programs?cmd=prog&code=CMPSC-MS-0'],
      ['CS How to Apply (points to Grad Division deadline)', 'https://cs.ucsb.edu/education/graduate/how-to-apply'],
      ['CS Master\'s degree overview', 'https://cs.ucsb.edu/education/graduate/masters-degree'],
      ['Master\'s degree', 'https://www.cs.ucsb.edu/education/graduate/masters-degree'],
    ],
    deadline: 'Fall 2027 final — 16 Dec 2026 (Wednesday)',
    deadlineDate: '2026-12-16',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-045","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UCSB CS MS: 42 units with major+breadth across Theory/Systems/Applications; finish via thesis, project, or comprehensive exam.',
    orientation: '42 units · Thesis/project/exam · ~2 years',
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "CS department does not require GRE and is prohibited from reviewing GRE scores for any applicants; do not upload GRE scores.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of UCSB CS graduate admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "CS department minimum TOEFL iBT total 5.0 (new scale, exams on/after 2026-01-21) or 100 (exams before 2026-01-21); higher than UCSB university minimum 4.0/80. Institution code 4835."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Overall Band 7 (department/Grad Division CS listing)."
        },
        "waiver": "Exempt if completed undergraduate or graduate degree at an institution where verified sole official language of instruction is English (U.S. regionally accredited or WHED sole-English listing). DET also accepted: CS department minimum 130 (university minimum 120)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Minimum 3.0 cumulative undergraduate GPA; non-4.0 scales re-calculated in context during review. Bachelor's in science, engineering, or mathematics required by department."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters of recommendation submitted online via Grad Division application."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose (academic/research background and interests) plus separate Personal History Statement (minimum 250 words, narrative form, no duplication of SoP).",
        "alsoKnownAs": "Statement of Purpose; Personal History Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume or CV submitted in online application (Grad Division CS checklist)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts from all post-secondary institutions uploaded online; official/final required after SIR if admitted."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on CS How to Apply or Grad Division CS requirements pages."
      },
      "applicationFee": {
        "amountUsd": 135,
        "waivers": "Fee waiver request available via Grad Division for eligible applicants after Academic Program and Citizenship pages; see Requesting an Application Fee Waiver.",
        "detail": "$135 U.S. citizens/permanent residents; $155 all other applicants. Non-refundable."
      },
      "other": [
        "Fall-only admissions (deadline listed on Grad Division CS directory; Dec 15 cycle commonly posted—confirm live directory for Fall 2027).",
        "Duolingo English Test accepted (CS minimum 130).",
        "External MS open; Five-Year MS is current UCSB undergraduates only.",
        "PhD Application Support Program is PhD-focused; MS uses standard Grad Division portal."
      ],
      "advice": "Prefer Grad Division CS department directory + CS How to Apply over degree-requirements-only masters page. GRE uploads will not be reviewed.",
      "sources": [
        [
          "UCSB CS How to Apply",
          "https://cs.ucsb.edu/education/graduate/how-to-apply"
        ],
        [
          "UCSB Grad Division Computer Science program requirements",
          "https://www.graddiv.ucsb.edu/graduate-programs/departments/computer-science"
        ],
        [
          "UCSB Grad Division How to Complete Online Application (fee/English)",
          "https://www.graddiv.ucsb.edu/admissions/how-complete-online-application"
        ],
        [
          "UCSB CS Master's Degree (curriculum; not admissions checklist)",
          "https://www.cs.ucsb.edu/education/graduate/masters-degree"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'unc-cs': {
    tuition: 39421,
    tuitionLabel: 'Academic-year tuition (MSCS nonresident semester maximum × 2)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total. Cashier PDF notes rates not final until NC System Board of Governors approval.',
    costDetail: 'UNC Cashier Graduate and Professional Tuition and Fees Fall 2026–Spring 2027: Master of Science in Computer Science (mscs) Non-Resident $2,190.06 per credit hour, semester maximum $19,710.50 (9+ hours) → $39,421 AY Fall+Spring. NC Resident MSCS $1,153.56/credit, semester max $10,382. Campus-based mandatory fees $1,063/semester ($2,126 AY) not included in the tuition figure. Student health insurance is separate. Rates marked not final until Board of Governors approval.',
    sources: [
      ['Official tuition / budget (Cashier PDF)', 'https://cashier.unc.edu/wp-content/uploads/sites/259/2026/04/graduate-and-professional-tuition-and-fees-fall-2026-spring-2027.pdf'],
      ['Graduate programs tuition hub', 'https://cashier.unc.edu/tuition-fees/graduate-programs/'],
      ['Catalog CS GRAD', 'https://catalog.unc.edu/graduate/schools-departments/computer-science/'],
      ['CS Admissions Deadline (year-labeled fellowship/RA/final)', 'https://cs.unc.edu/graduate/graduate-admissions/admissions-deadline/'],
      ['UNC Grad School Computer Science program sheet', 'https://gradschool.sites.unc.edu/computer-science/'],
      ['MS requirements', 'https://cs.unc.edu/graduate/ms/'],
    ],
    deadline: 'Final 9 Mar 2027 · Fellowship recommend 15 Dec 2026 · RA/TA recommend 5 Jan 2027 (MS/PhD Fall only)',
    deadlineDate: '2027-03-09',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-016","SCH-017","SCH-018","SCH-019","SCH-020","SCH-021","SCH-038","SCH-039","SCH-040","SCH-041","SCH-042","SCH-043","SCH-044","SCH-059","SCH-062","SCH-064","SCH-072","SCH-073","SCH-074","SCH-079","SCH-080","SCH-081","SCH-084"],
    academic: 'UNC CS MS (Fall 2026+): 30 credits with four-category breadth, program product, technical writing, and comprehensive exam. Typically ≤4 semesters FT; 5-year limit.',
    orientation: '30 credits · 4 breadth categories · ≤4 semesters FT',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required but recommended; no penalty for omitting scores; no minimum GRE score. Holistic review.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "GMAT not part of UNC CS graduate admissions materials.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "Graduate School recommended minimum TOEFL iBT 90 (tests before 2026-01-26) or 5 (tests on/after 2026-01-26). Code 5816. Required for international applicants unless exemption. CS FAQ: no score automatically disqualifies review."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "Graduate School recommended minimum IELTS 7; Duolingo English Test also accepted (recommended minimum 110)."
        },
        "waiver": "Exemptions for applicants from sole-official-English countries (listed); degree from accredited U.S. university; or degree from university where English is sole language of instruction with official verification (see Grad School Instructions)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Graduate School minimum: bachelor's (four-year or equivalent) and average grade of B (cumulative GPA 3.0) or better."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three current letters via Grad School application (email addresses of recommenders required)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "1–2 pages: objectives; CS fields of interest; relevant qualifications not elsewhere; titles for vague transcript courses; list of courses taken/planned not yet on transcript.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV with degrees, work/volunteer, research, publications, awards; optional international standardized tests (e.g., GATE) may be listed."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts from each university attended uploaded in application; official only if admitted."
      },
      "interview": {
        "status": "unknown",
        "detail": "CS admissions pages do not list a required interview; Grad School notes some programs may require on-site pre-admission interview—CS MS not specified."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "Grad School fee waiver categories available; request within online application with documentation.",
        "detail": "Non-refundable $95.00 per program. Fall-only CS entry. Deadlines for Fall 2027 cycle posted: fellowship consideration Dec 15, 2026; RA/TA Jan 5, 2027; final Mar 9, 2027."
      },
      "other": [
        "Cannot apply for both MS and PhD in same semester.",
        "Select up to five Areas of Interest and list up to five faculty (or 'Any faculty').",
        "MS program page (cs.unc.edu/graduate/ms/) is degree requirements, not the admissions checklist."
      ],
      "advice": "Use CS Graduate Admissions + UNC Grad School Instructions; confirm Fall 2027 deadline page for final dates.",
      "sources": [
        [
          "UNC CS Admission to Graduate Programs",
          "https://cs.unc.edu/graduate/graduate-admissions/"
        ],
        [
          "UNC CS Admissions Deadline",
          "https://cs.unc.edu/graduate/graduate-admissions/admissions-deadline/"
        ],
        [
          "UNC CS Graduate Admissions FAQ",
          "https://cs.unc.edu/graduate/graduate-admissions/admissions-faq/"
        ],
        [
          "UNC Graduate School Instructions for Graduate Applicants",
          "https://gradschool.unc.edu/admissions/instructions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'washington-mba': {
    tuition: 60180,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA, nonresident; 3 quarters)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UW Foster Full-Time MBA Tuition and Financing: Non-resident $20,060 tuition per quarter + $403 fees; Resident $14,166 tuition + $403 fees. Academic-year (three-quarter) nonresident tuition = 3 × $20,060 = $60,180 (tuition+fees AY ≈ $61,389). Published Total Estimated Program Cost (six quarters / two years) is $122,778 nonresident / $87,414 resident — full-program totals, not used as the annual tuition field. Cohort rate held for both years once enrolled. Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/tuition-and-fees/'],
      ['Full-time MBA curriculum', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/curriculum/'],
      ['Full-time MBA Admissions (2026–2027 deadlines)', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/admissions/'],
      ['Full-time MBA', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/'],
      ['Course descriptions', 'https://foster.uw.edu/academics/degree-programs/full-time-mba/course-descriptions/'],
    ],
    deadline: 'Round 2 · 5 Jan 2027 · 11:59 p.m. PDT (Full-time MBA 2026–2027; R1 passed; final for internationals)',
    deadlineDate: '2027-01-05',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-047","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Foster Full-Time MBA: 2 years, 88 credits. Integrated Y1 core; customized Y2 electives; summer internship/project.',
    orientation: '2 years · 88 credits · Integrated core',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE optional; GMAT 10th Edition, GMAT Focus, or GRE encouraged. GRE code 4854. Highest overall single-attempt score used; GMAT Superscore not incorporated for 2027 cycle. Test Optional path requires 'Test Optional Summary of Qualifications' (150 words max on analytical/quantitative preparedness). Optional ≠ waived requirement—applicants may apply without scores.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT optional (code 459-75-46 on requirements table; FAQ also lists 459-75-20—confirm live portal). EA not accepted for Full-time MBA. Test Optional available with short-answer evidence; internationals strongly encouraged to submit a score.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "If native language is not English: TOEFL minimum 5 (100 iBT for tests before Jan 21, 2026). Code 4854. Official scores required before offer; valid 2 years on application submit date."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS 7.0 or higher (code 365). Duolingo 130+ also accepted (University of Washington Graduate Admissions)."
        },
        "waiver": "Met via bachelor's/master's/doctoral degree from accredited institution with English as medium of instruction, subject to UW residency conditions for MOI degrees and documentation (except listed English-speaking countries). Living/working in U.S. alone does not satisfy. Requirement cannot be waived outside Policy 3.2 pathways."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3,
        "scale": "4.0",
        "detail": "No absolute minimum for Foster; GPA of 3.0 (B) or better is generally the standard for a competitive candidate. Report last 90 quarter / 60 semester graded credits on 4.0 scale per Grad School instructions. Below 3.0 reviewed holistically with test scores and other materials. UW Grad School Test Optional guidance also references ≥3.0 in most recent degree."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two recommendations required (up to three allowed). Preferably professional contacts. Short-answer questions plus written assessment (strengths, improvement areas, leadership, interpersonal skills, motivation, accomplishments)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two required essays: (1) Post-MBA Plans 550–750 words; (2) Foster Mission Statement 350–550 words. Optional Essay (≤500 words) and Optional Nurturing Our Community Essay (350–550 words).",
        "alsoKnownAs": "Required Essays (Post-MBA Plans; Foster Mission Statement)"
      },
      "resume": {
        "status": "required",
        "detail": "Reverse-chronological work experience; up to three pages allowed; include education, activities, community involvement since high school."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload scanned PDFs of original transcripts from completed four-year U.S. bachelor's (or equivalent) and other institutions attended. Include grading keys; English translation for non-English docs. Officials only after accepting offer."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Required video interview invitation emailed 1–3 business days after round deadline (~1 week to complete). Separate admissions interview by invitation only (Zoom), typically 3–5 weeks after deadline; must complete if invited to remain under consideration."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Foster does not offer program fee waivers; limited need-based waivers may be available via UW Graduate School.",
        "detail": "Non-refundable $90 paid by credit card in online application."
      },
      "other": [
        "2026–27 cycle: R1 Oct 1 2026; R2 Jan 5 2027 (final for internationals); R3 Mar 23 2027. One application per academic year; fall intake only.",
        "Consortium applicants supported; test optional available via Consortium as well.",
        "Disclose AI assistance per Foster Integrity Statement if used to refine (not create) essays."
      ],
      "advice": "Test optional ≠ waived—still must complete Test Optional Summary. Round 2 is final international deadline. Official English scores must arrive by deadline.",
      "sources": [
        [
          "Foster Full-time MBA Admissions",
          "https://foster.uw.edu/academics/degree-programs/full-time-mba/admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'unc-mba': {
    tuition: 74192,
    tuitionLabel: 'Academic-year tuition and mandatory fees (Full-Time MBA, Non-North Carolina resident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UNC Kenan-Flagler Full-Time MBA Tuition & Financial Aid 2026–2027: Non-North Carolina residents Tuition and mandatory fees $74,192; North Carolina residents $55,470. Living-expenses allowance $29,420 AY; nonresident total with living $103,612 / resident $84,890. School notes tuition and fees are an estimate pending state budget approval and are finalized the summer before each fall; expect 3–10% annual increases. Mandatory fees include $345 orientation fee and $1,030 MBASA dues (latter paid to association). Full-time MBA only.',
    sources: [
      ['Official tuition / budget', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/tuition-financial-aid/'],
      ['Full-Time MBA academics', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/academics/'],
      ['Full-Time MBA Requirements and Deadlines (2026-2027)', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/requirements-deadlines/'],
      ['Full-Time MBA Apply (Class of 2029 / Aug 2027)', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/apply/'],
      ['Full-Time MBA program', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/'],
      ['Curriculum & concentrations', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/academics/curriculum/'],
      ['Full-Time MBA FAQs', 'https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/faq/'],
    ],
    deadline: 'Round 2 · 6 Jan 2027 · 11:59 p.m. ET (Full-Time MBA Class of 2029 / Aug 2027; R1 passed)',
    deadlineDate: '2027-01-06',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-049","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Kenan-Flagler Full-Time MBA: ~21 months, 62 credits with ~14 core courses then concentrations/electives.',
    orientation: '~21 months · 62 credits · Module calendar',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GMAT or GRE required unless GMAT/GRE waiver approved via in-app form by round waiver deadline. Self-report unofficial OK; official after admit/enroll before first day. No superscoring across dates. Codes: GRE 5046; GMAT D40-HL-72. Waiver criteria examples: ≥3.2 GPA with STEM/business/econ/analytical coursework from U.S. institution; advanced terminal degree; 5+ years quant/analytical work; CFA/U.S. CPA; strong EA/PCAT/MCAT.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted equivalently to GRE; same waiver framework. Code D40-HL-72.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "Required if English is not native language unless exempt. Posted minimum total score TOEFL 5 (new scale as listed on requirements page); preferred speaking 5. Self-report + official by deadline. Code 5816. PTE Academic also accepted (min 68). DET accepted (min 120)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS minimum overall 7.0; preferred speaking 7.5. Search University of North Carolina, Chapel Hill – Kenan-Flagler Business School – MBA when sending."
        },
        "waiver": "Not required if (1) undergrad or graduate degree at a U.S. college/university, or (2) education completed exclusively in English in an English-speaking country. Committee may still request scores in some cases."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA as admission cutoff on requirements page. Working knowledge of financial accounting, statistics, economics, and calculus encouraged (no prerequisite courses). 3.2 GPA appears only as one GMAT/GRE waiver criterion example."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One professional LOR required, preferably supervisor (current/former). GMAC Common LOR. Academic LOR not recommended; if no full-time postgrad work, part-time/summer internship recommender OK. 10-business-day grace past deadline for LORs (delays processing)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay 1 required (250 words): MBA goals/path and unique background. Essay 2 required (250): which core value (impact/innovation/inclusion/integrity) resonates + example. Essay 3 optional (250). Essay 4 required for reapplicants only (100). Plus video essay: two on-screen questions, 2 minutes total, two attempts.",
        "alsoKnownAs": "Essays / Video essay"
      },
      "resume": {
        "status": "required",
        "detail": "Brief professional overview; typically one page (max two); reverse chronological with titles and dates."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts of all baccalaureate and graduate work including transfers, summer/extension, single courses. Non-English: certified literal English translation with originals. Three-year bachelor’s eligible with diploma/degree certificate."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Select candidates invited after complete application. In-person or virtual; committee has no format preference."
      },
      "applicationFee": {
        "amountUsd": 150,
        "waivers": "U.S. military active/veteran; Peace Corps/AmeriCorps/Teach for America; Forté MBA Launch (incl. undergrad); MLT Fellow; Access member/Fellow. Indicate in application; docs may be requested. No fee waivers for Consortium applicants. No refunds once paid.",
        "detail": "$150 nonrefundable, payable by credit card."
      },
      "other": [
        "2026–27 rounds: Sep 30 2026 / Jan 6 2027 / Mar 3 2027 / Apr 21 2027 (11:59 p.m. ET); Round 3 final for international applicants",
        "Separate earlier GMAT/GRE waiver deadlines per round (e.g. R1 waiver Sep 9 2026)",
        "Optional Vetter Dean’s Fellows essays if applying to that fellowship",
        "Typical ~5 years work experience; no minimum stated",
        "Enrollment deposit $1,500 if admitted"
      ],
      "advice": "Meet the earlier waiver deadline if seeking to skip GMAT/GRE. Round 3 is last for internationals. Complete video essay thoughtfully—counts with written essays.",
      "sources": [
        [
          "Requirements and deadlines",
          "https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/admissions/requirements-deadlines/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'emory-mba': {
    tuition: 79200,
    tuitionLabel: 'Academic-year tuition (Goizueta Two-Year Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Emory Student Accounts 2026–2027 Tuition & Fee Schedule lists Traditional MBA Program annual tuition $79,200 ($39,600 Fall + $39,600 Spring). Goizueta Cost of Full-Time MBA page publishes Total Tuition $158,400 and Total MBA Tuition & Fees $163,549 for the two-year degree (mandatory fees $4,904 program-level; application/transcript $245). Other annual estimated costs ~$38,444 (living, books, health insurance, parking). Two-Year full-time MBA only — not One-Year/Evening/EMBA.',
    sources: [
      ['Official tuition / budget', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions/tuition'],
      ['Emory Student Accounts 2026–27 schedule (PDF)', 'https://studentaccounts.emory.edu/_includes/documents/2026-2027-tuition-and-fee-schedule_final-3.pdf'],
      ['Two-Year MBA FAQ', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/faq'],
      ['Two-Year MBA Admissions (deadlines)', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions'],
      ['Apply to Full-Time MBA (11:59PM ET; 26–27 cycle)', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions/application'],
      ['Two-Year MBA program', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/'],
      ['Two-Year MBA academics', 'https://goizueta.emory.edu/full-time-mba/two-year-mba/academics'],
      ['Catalog Full-Time MBA', 'https://goizueta.catalog.emory.edu/degreeprograms/graduate/fulltimemba'],
    ],
    deadline: 'Round 2 · 6 Jan 2027 · 11:59 p.m. ET (Two-Year FT MBA 26–27 cycle; R1 passed)',
    deadlineDate: '2027-01-06',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-030","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'Goizueta Two-Year MBA: 4 semesters, 69 credits. Core-heavy Y1; electives/concentrations and experiential learning in Y2.',
    orientation: '2 years · 69 credits · Concentrations',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Full-time MBA applicants required to take GMAT/GMAT Focus, GRE, or Executive Assessment (EA); valid MCAT or LSAT also accepted. Scores valid 5 years; submit all sittings. Official scores required for admission decision. Test Waiver Application available for 2026–27 cycle (conferred bachelor’s + ≥2 years post-undergrad full-time work); decisions ~10–14 business days. Two-Year waiver request deadlines: R1 Sep 16 2026; R2 Dec 1 2026; R3 Mar 3 2027. Codes: GRE/TOEFL 3984; GMAT Two-Year C3Q-71-17 (FAQ).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GMAT Focus accepted (or GRE/EA/MCAT/LSAT). Same official-score and Test Waiver rules as GRE. Prefer early testing; free Goizueta practice tests offered.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 5,
          "detail": "TOEFL iBT 5.0 or higher recommended if English proficiency not otherwise demonstrated. Also accepts Duolingo (120+ recommended) and PTE Academic (68+ recommended). Scores are recommended proficiency levels, not automatic thresholds."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS 7.0 or higher recommended when a proficiency test is needed."
        },
        "waiver": "English proficiency test generally not required if bachelor’s or graduate degree from institution where English is primary language of instruction, or ≥2 years full-time professional experience within past 5 years where English was primary business communication language. Goizueta may still request a test if materials do not show readiness."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Eligibility cites strong undergraduate academic record; no numeric minimum GPA on Two-Year admissions/application pages. Class of 2028 average GPA 3.43 (profile only)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two professional recommendations preferred; at least one from someone who knows you in current role (direct supervisor, project manager, or client). GMAC Common Recommendation Form accepted in lieu of Goizueta form."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "3 short answers (40 words each: short-term post-MBA goals; how experience + Goizueta MBA help; fun fact) + 2 essays (300 words each: risk/pursuit prompt; lived-experience evolution prompt) + optional essay (500 words). Required video essay (small-talk prompt) in application portal.",
        "alsoKnownAs": "Short answers / written essays / video essay"
      },
      "resume": {
        "status": "required",
        "detail": "One- or two-page résumé with employment (locations, titles, dates, most recent first) and education (attendance dates, degrees)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scanned university transcripts for evaluation from all undergrad/grad institutions attended (must show institution, name, degree/date if applicable, GPA, courses/grades). Not personal downloads. Official transcripts required at enrollment deposit if admitted."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "On-campus or virtual interviews by invitation only after complete application review. All admitted students have been interviewed (~30 minutes, business attire, bring résumé)."
      },
      "applicationFee": {
        "amountUsd": 175,
        "waivers": "Automatic for U.S. military service members/veterans on submission. Forte MBA Launchers, current Peace Corps Volunteers, and Teach for America employees: email MBAapplication@emory.edu (do not pay then seek reimbursement). Getting It Done 101 workshop participants receive fee waiver.",
        "detail": "$175 required from all MBA applicants (including re-applicants within two years)."
      },
      "other": [
        "Fall 2027 / Class of 2029 cycle rounds: R1 Sep 30 2026; R2 Jan 6 2027; R3 Mar 17 2027; then rolling until ~2 weeks before start if seats remain (deadlines 11:59pm ET).",
        "Eligibility: typically ≥2 years post-undergrad full-time work (unless joint degree); bachelor’s degree; competitive test scores.",
        "All Goizueta MBA programs STEM-designated.",
        "International applicants: sealed transcripts, résumé, official GMAT/GRE, TOEFL if applicable, two recommendations, essays, fee."
      ],
      "advice": "Prefer how-to-apply page for checklist. Request test waiver early vs round deadlines. Scholarships: apply by Round 2 for full consideration. Optional ≠ waived — waiver needs approved Test Waiver Application.",
      "sources": [
        [
          "Two-Year MBA Admissions",
          "https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions"
        ],
        [
          "Apply / application requirements",
          "https://goizueta.emory.edu/full-time-mba/two-year-mba/admissions/application"
        ],
        [
          "Full-Time MBA FAQ (codes/fee)",
          "https://goizueta.emory.edu/full-time-mba/two-year-mba/faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'georgia-mba': {
    tuition: 36000,
    tuitionLabel: 'Academic-year tuition (Full-Time MBA Athens, Non-Resident)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'UGA Terry Full-Time MBA Tuition and Fees 2026–2027: Non-Resident Tuition $36,000; Georgia Resident $14,064; Out-of-Country $37,032. Student Fees $1,494 (all) — Total Tuition + Fees 1 Year Non-Resident $37,494 / Resident $15,558 / Out-of-Country $38,526. One-time nonrefundable MBA Program Fee $500 and PreMBA Coursework $170 separate. UGA Bursar Fall 2026/Spring 2027: MBA Athens Out-of-State 12+ hrs $18,000/semester (= $36,000 AY). Full-time Athens MBA only — not Online/Executive/Fast Track Professional MBA.',
    sources: [
      ['Official tuition / budget', 'https://www.terry.uga.edu/mba/fulltime/admissions/tuition/'],
      ['UGA Bursar tuition & fees 2026–27', 'https://busfin.uga.edu/finance-division/bursar/students-parents/bursar-tuition-fees/2026-2027/'],
      ['Full-Time MBA curriculum', 'https://www.terry.uga.edu/mba/fulltime/curriculum/'],
      ['Full-Time MBA Admissions (deadlines)', 'https://www.terry.uga.edu/mba/fulltime/admissions/'],
      ['Full-Time MBA program', 'https://www.terry.uga.edu/mba/fulltime/'],
    ],
    deadline: 'Round 2 · 10 Jan 2027 · 11:59 p.m. ET (Full-Time MBA; R1 passed; recommended for internationals)',
    deadlineDate: '2027-01-10',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-053","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'UGA Terry Full-Time MBA: ~22 months, 61 credits with Y1 cores/analytics, Y2 legal + dual capstones + electives; summer internship.',
    orientation: '~22 months · 61 credits · Dual capstones',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Self-reported GMAT, GRE, or Executive Assessment (EA); no minimum score. Official scores required only after admission. Select applicants may request test-score waiver case-by-case if meeting stated criteria (e.g., ≥2 years U.S. military or relevant progressive full-time work or current other UGA grad program PLUS strong U.S. academics / advanced degree / quantitative cert / strong quant coursework). Meeting criteria does not guarantee waiver. Strong scores help for consulting/finance recruiting and assistantships/scholarships.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT, GRE, or EA accepted; no minimum. Same waiver process as GRE. Official reports after admit.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "Required if degree from non-U.S. accredited institution in a country where English is not primary/official language. Preferred mins: TOEFL 100 overall (exams before Jan 21 2026) or 5.0 overall (exams on/after Jan 22 2026). Official scores only after admission. International students still need TOEFL/IELTS even if GMAT/GRE waived."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS 7.0 overall band preferred when English proficiency required."
        },
        "waiver": "English proficiency required for degrees from non-U.S. institutions in non-English-primary/official-language countries; see FTMBA International Student Applicants page for full list. GMAT/GRE waiver does not waive English tests."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Baccalaureate (or foreign equivalent) from regionally accredited institution. Candidates expected to have minimum 3.0 GPA; may still apply below 3.0 with optional written statement addressing academic performance."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters; professional recommendations preferred."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three short written responses (250 words max each: career goals; persistence challenge; something classmates wouldn’t learn from résumé) + one optional written response (250 words). Optional video essay (2 minutes max).",
        "alsoKnownAs": "Short written responses / optional video essay"
      },
      "resume": {
        "status": "required",
        "detail": "One-page business résumé, reverse chronological; quantify impact; include education/employment dates, titles, FT/PT."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial copies from each institution attended for college credit for application; official transcripts required after admission."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "By invitation after application review. Virtual available for internationals and domestics unable to travel. Campus Visit Day may include Admissions Committee interview, lunch with students, class visit."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "",
        "detail": "$100 application fee paid online at submission. Fee waiver details not enumerated on main Full-Time MBA admissions requirements list."
      },
      "other": [
        "≥2 years professional post-bachelor work experience before entering program (strongly preferred for 2-Year and MBA-MSBA STEM track).",
        "Fall 2027 rounds (11:59pm ET): R1 Oct 10 2026; R2 Jan 10 2027 (recommended intl); R3 Mar 10 2027 (final intl; recommended for merit/assistantships); R4 May 10 2027; then rolling.",
        "Dual-degree applicants use Round 4 as final deadline."
      ],
      "advice": "Optional video ≠ required. Test waiver is case-by-case (not automatic). Internationals: English tests still required when criteria apply even if GMAT/GRE waived.",
      "sources": [
        [
          "Full-Time MBA Admissions / How to Apply",
          "https://www.terry.uga.edu/mba/fulltime/admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'asu-mba': {
    tuition: null,
    tuitionLabel: null,
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'ASU W. P. Carey Full-time MBA Cost and aid page publishes only estimated total tuition and fees for the 21-month program — Resident $66,000, Nonresident $120,000, International $130,000 — with no academic-year or per-semester breakdown. Separate enrollment deposit $1,000 and matriculation fee $500. No official 2026–27 academic-year tuition figure found without inventing a split of the program total; tuition field left null. Full-time MBA only — not Online/Executive.',
    sources: [
      ['Full-time MBA (Fall 2027 how to apply / deadlines)', 'https://www.wpcarey.asu.edu/mba-programs/full-time'],
      ['Full-time MBA academics', 'https://www.wpcarey.asu.edu/mba-programs/full-time/academics'],
      ['Full-time MBA', 'https://wpcarey.asu.edu/mba-programs/full-time'],
      ['Academics', 'https://wpcarey.asu.edu/mba-programs/full-time/academics'],
      ['Degree Search major', 'https://degrees.asu.edu/masters-phd/major/ASU00/BAFULLMBA/w-p-carey-mba---full-time-program'],
    ],
    deadline: 'Round II · 1 Dec 2026 (Full-time MBA Fall 2027; Round I passed; clock time not on table)',
    deadlineDate: '2026-12-01',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-031","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    academic: 'ASU W. P. Carey Full-Time MBA: ~21 months, 60 credits, with summer internship between years and Strategic Management capstone.',
    orientation: '~21 months · 60 credits · Internship',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GMAT or GRE required; send official scores (GRE institution 4007; GMAT 0GZ-1R-80). ASU does not accept GRE General Test at-home. Case-by-case waiver: request via optional essay in application with justification (W. P. Carey Full-time MBA How to apply).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE required (institutional code 0GZ-1R-80). Waiver eligibility via optional essay request; not an automatic/program-wide waiver.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Required if native language is not English. W. P. Carey states graduate minimums may be higher than ASU general; exact Full-time MBA numeric mins not printed on program page. ASU Grad general (exams before Jan 21 2026): iBT 80; on/after Jan 21 2026: total 4. ASU does not accept TOEFL iBT Home/Paper Edition or Essentials for this WPC MBA page note (Home Edition accepted university-wide only for exams on/after Jan 21 2026 per Admission Services). Confirm current WPC MBA threshold with admissions."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "Accepted as proof of English proficiency when required. ASU Grad general Academic overall ≥6.5; W. P. Carey may set higher—exact Full-time MBA IELTS min not printed on program How-to-apply page."
        },
        "waiver": "ASU English proficiency exemptions apply (citizenship on ASU English-speaking country list; U.S. degree; medium-of-instruction documentation; other form-based exemptions on Admission Services English proficiency page). WPC Full-time MBA: international applicants follow same process as domestic plus English proof if required; after admission, visa/financial guarantee steps."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": 4,
        "detail": "ASU Degree Search (BAFULLMBA): minimum cumulative GPA 3.00 (4.00 scale) in last 60 hours of first bachelor’s, or 3.00 in an applicable master’s."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Degree Search requires two letters commenting on motivation, commitment, achievements, work experience, and success potential. Online application collects recommender contact (name, affiliation, work email)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Admission essay / short essay responses in graduate application (personal statements not accepted). Degree Search: responses to short-answer questions.",
        "alsoKnownAs": "Admission essay / short-answer questions"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume with positions held and Month/Year employment dates."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial acceptable at application; if admitted, official transcripts from every college/university awarding bachelor’s or higher. ASU alumni need not resubmit ASU transcripts. International: original language + official English translation."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "ASU Degree Search: personal interview arranged by invitation only must be completed before an offer of admission."
      },
      "applicationFee": {
        "amountUsd": 70,
        "waivers": "Military and Citizen Service fee waiver for U.S. Military, Teach for America, Peace Corps, or AmeriCorps—email wpcareymasters@asu.edu before submitting.",
        "detail": "$70 domestic; $115 international (non-refundable). Applications not processed until fee received."
      },
      "other": [
        "Fall 2027 rounds: R1 Oct 15 2026; R2 Dec 1 2026; R3 (Priority International) Feb 1 2027; R4 (Final) Apr 1 2027; rolling until Jul 15 2027",
        "STEM-designated Full-time MBA; August start; ~21 months",
        "Enrollment deposit $1,000 + matriculation fee $500 after admission"
      ],
      "advice": "Treat GMAT/GRE as required unless you document a strong waiver case in the optional essay. Confirm W. P. Carey–specific English score floors with admissions—program page says they may exceed ASU Grad mins but does not print the number. Interview is invitation-only before any offer.",
      "sources": [
        [
          "Full-time MBA How to apply / deadlines",
          "https://www.wpcarey.asu.edu/mba-programs/full-time"
        ],
        [
          "ASU Degree Search BAFULLMBA admission requirements",
          "https://degrees.asu.edu/masters-phd/major/ASU00/BAFULLMBA/w-p-carey-mba---full-time-program/"
        ],
        [
          "ASU International graduate English proficiency",
          "https://admission.asu.edu/apply/international/graduate/english-proficiency"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'rice-mba': {
    tuition: 79116,
    tuitionLabel: 'Academic-year tuition (Jones Full-Time MBA)',
    period: '2026–27',
    costNote: '2026–27 reference, not a Fall 2027 quote or full-degree total.',
    costDetail: 'Rice Business Full-Time MBA Tuition and Fees: Tuition for 2026–27 Full-Time MBA (and MD/MBA) $79,116 per year ($39,558/semester flat rate). Required fees annual total $1,323 (GSA $45, Student Organization $8, Health & Wellness Support $720, MBA Activity $550) — not included in the $79,116. Optional health insurance $3,448; estimated textbooks $2,600. Confirmed on Rice Graduate Tuition, Fees, and Expenses 2026–2027 (MBA Degree, Full-Time Program Tuition annual $79,116). Full-time MBA only — not Hybrid/Professional/Executive/Online.',
    sources: [
      ['Official tuition / budget', 'https://business.rice.edu/rice-mba/full-time-mba/tuition-and-financial-aid'],
      ['Rice graduate tuition & fees 2026–27', 'https://ga.rice.edu/graduate-students/student-services-organizations/tuition-fees-expenses/'],
      ['Full-time MBA curriculum', 'https://business.rice.edu/rice-mba/full-time-mba/curriculum'],
      ['MBA Admissions Requirements / Guide (Class of 2029 deadlines)', 'https://business.rice.edu/mba-admissions/guide'],
      ['Full-Time MBA program', 'https://business.rice.edu/rice-mba/full-time-mba/'],
      ['Full-Time MBA', 'https://business.rice.edu/rice-mba/full-time-mba'],
    ],
    deadline: 'Round 2 · 6 Jan 2027 · 11:59 p.m. CT (Full-Time MBA Class of 2029; R1 passed; apps open)',
    deadlineDate: '2027-01-06',
    academic: 'Rice Jones Full-Time MBA: ~22 months, 54 credits with required core + Global Field Experience, then elective specializations.',
    asOf: '2026-10-20',
    scholarships: ["SCH-015","SCH-017","SCH-019","SCH-020","SCH-034","SCH-035","SCH-036","SCH-037","SCH-038","SCH-055","SCH-062","SCH-064","SCH-072","SCH-074","SCH-084"],
    orientation: '~22 months · 54 credits · Global Field Experience',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Standardized test required for Full-Time MBA; GRE accepted alongside GMAT, GMAT Focus, and Executive Assessment. Unofficial OK to apply; official if enroll. Code GRE 7502. Full-Time candidates may request standardized test waiver (form inside started application; submit ≥10 days before apply). Deferred Enrollment: follow FT MBA process but GMAT waivers not available. No minimum / no preference.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GMAT Focus accepted (code 3WS-WD-92 for Full-Time). Same required-or-waiver framework as GRE. EA also accepted for Full-Time.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "FT MBA checklist: international applicants whose most recent degree was not primarily taught in English must show proficiency via TOEFL or IELTS. Rice Graduate Studies minima: TOEFL iBT 90 (tests before Jan 21 2026) or 4.5 (on/after Jan 21 2026). Unofficial OK to apply; official at enrollment. Code 6609 (Rice University)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic accepted; Rice Graduate Studies minimum overall 7. Report to Rice University Graduate Admissions."
        },
        "waiver": "MBA guide/checklist: proficiency required if most recent degree not primarily taught in English. Rice Grad also waives with U.S. degree or degree from institution where English is official language of instruction / listed countries & universities. Duolingo ≥115 accepted at university level (MBA checklist PDF emphasizes TOEFL/IELTS)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on MBA Admissions Guide; undergraduate degree required. Holistic review includes GPA among quantitative factors."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "At least one letter required; prefer current/former supervisor. Maximum two letters. GMAC Common LOR. Deferred: one may be academic but one must be from work/extracurricular supervisor."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two required short answers (100 words each) on short- and long-term career goals, plus required creative essay (≤500 words written or 1–3 min video) telling the story of a meaningful photo. Optional essay 500 words for clarifications / PMBA no-test reasoning.",
        "alsoKnownAs": "Short answers / Creative essay"
      },
      "resume": {
        "status": "required",
        "detail": "Professional résumé required (generally one page). Extracurricular section also in application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts for each earned/in-progress degree for application (degree name + conferral date if awarded). Undergrad degree required. If enroll: official U.S. transcripts; non-U.S. degrees require third-party evaluation (WES or The Evaluation Company)."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "After preliminary review, committee may invite Rice Video Interview plus conversation interview (Zoom; in-person when available)—by invite only for Deferred/FT/Professional MBA. Not receiving an invite before decision release does not automatically mean denial."
      },
      "applicationFee": {
        "amountUsd": 200,
        "waivers": "U.S. military (active/veteran); MLT MBA Prep Fellows; Forté MBALaunch; MD/MBA dual applicants; Rice alumni; Build the Class alumni referrals; attendees of Recruiting & Admissions events (virtual/on-campus/fairs).",
        "detail": "US$200.00 application fee after submit before committee review."
      },
      "other": [
        "Class of 2029 applications open; FT rounds: Oct 16 2026 / Jan 6 2027 / Mar 31 2027 / Jun 1 2027 domestic-only (11:59 p.m. CT)",
        "R1–R2 complete apps get priority merit scholarship consideration (FT MBA)",
        "One Rice Business graduate program per cycle"
      ],
      "advice": "Start application early to access test-waiver form (≥10 days before deadline). Round 4 domestic only. Non-U.S. transcripts need evaluation at enrollment.",
      "sources": [
        [
          "MBA Admissions Guide / requirements & deadlines",
          "https://business.rice.edu/mba-admissions/guide"
        ],
        [
          "FT MBA application checklist PDF",
          "https://business.rice.edu/sites/default/files/App_checklist_FT-MBA.pdf"
        ],
        [
          "Rice Grad language proficiency",
          "https://graduate.rice.edu/admissions/language-proficiency-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'mit-msf': {
    academic: 'MIT Sloan MFin: 12- or 18-month formats starting summer. Tuition 2026–27: $96,884 (12-mo) / $133,007 (18-mo). Single app deadline Jan 5, 2027 (3pm ET); decisions March 2027.',
    orientation: 'Summer start · 12 or 18 months · TFE #1 (2026)',
    duration: '12-month (summer+fall+spring) or 18-month (adds second fall).',
    tracks: ["12-month MFin","18-month MFin","Low-residency summer option if 15.401+15.402 completed pre-entry"],
    coreNotes: 'Quantitative finance curriculum; Python proficiency expected by matriculation; interview by invitation.',
    credits: null,
    stem: null,
    summerStart: true,
    tuition: 96884,
    tuitionAlt: 133007,
    tuitionLabel: 'Program tuition 12-month format (2026–27 AY)',
    tuitionAltLabel: 'Program tuition 18-month format (2026–27 AY)',
    period: '2026–27',
    costNote: 'SUMMER START (July), not autumn Fall. 12-month = summer+fall+spring; 18-month adds second fall. Low-residency summer option with reduced tuition if 15.401+15.402 completed pre-entry. Not a Fall-2027-only quote.',
    costDetail: 'Alternate format: Program tuition 18-month format (2026–27 AY) $133,007. Required course packs included in tuition; textbooks separate. See MIT SFS graduate COA for non-tuition budget (tuition on SFS page should be ignored per MFin page). SUMMER START (July), not autumn Fall. 12-month = summer+fall+spring; 18-month adds second fall. Low-residency summer option with reduced tuition if 15.401+15.402 completed pre-entry. Not a Fall-2027-only quote. Official MFin tuition page; course packs included; textbooks/living separate. Not a Fall-2027-only quote. SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-085. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-085. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Application deadline (2027 entry) · 2027-01-05 · 3:00 p.m. ET',
    deadlineDate: '2027-01-05',
    asOf: '2026-10-26',
    scholarships: ["SCH-085"],
    sources: [
      ['How to apply / deadline', 'https://mitsloan.mit.edu/mfin/admissions/how-to-apply'],
      ['Official tuition / budget', 'https://mitsloan.mit.edu/mfin/admissions/tuition-and-financial-aid'],
      ['Admissions hub', 'https://mitsloan.mit.edu/mfin/admissions'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://mitsloan.mit.edu/mfin/admissions/how-to-apply',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE optional for 2027 entry; strongly encouraged if available; no negative inference if omitted. School code 3845."
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT Focus or 10th Edition optional; strongly encouraged if available. Send to MIT Sloan School of Management. Evaluation focuses on single-attempt scores."
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "detail": "MIT Sloan does not require an English proficiency exam and does not accept TOEFL or IELTS."
        },
        "ielts": {
          "status": "not_required",
          "detail": "MIT Sloan does not require an English proficiency exam and does not accept TOEFL or IELTS."
        },
        "waiver": "English ability assessed during the interview process; TOEFL/IELTS not accepted."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on how-to-apply page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters. Current students: 2 academic + 1 professional (internship); working professionals: 1 professional + 1 academic + 1 either. At least one must address quantitative abilities. Online submission; max 2 pages."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three short-answer questions, each ≤200 words: (1) academic/professional experiences for MFin success; (2) short- and long-term goals and how MFin helps; (3) personal qualities advancing program mission. Also two video questions (90-sec story + random open-ended).",
        "alsoKnownAs": "Short-answer questions / video questions"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume; Times New Roman 10pt; Word or PDF; reverse chronological education, FT work (>4 months), internships, other experience."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scan/upload transcripts from all colleges/universities attended. 4-year bachelor’s or 3-year non-US equivalent by matriculation. Non-English: original + certified translation. Official sealed transcripts required if admitted."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews required and by invitation only; virtual; scheduled in Eastern Time. Early denial possible without interview."
      },
      "applicationFee": {
        "amountUsd": 150,
        "waivers": "Possible for current Peace Corps members and Veteran or Active Duty U.S. Military Personnel; no retroactive waivers.",
        "detail": "Non-refundable $150 USD paid online before submit."
      },
      "other": [
        "List coursework in linear algebra, multivariable calculus, probability, statistics",
        "Python proficiency preferred; expected prior to matriculation if admitted without it",
        "Professional certifications / non-degree coursework optional",
        "Summer (July) start for 2027 entry — not autumn Fall"
      ],
      "advice": "Intl applicants: no TOEFL/IELTS accepted—English judged at interview. Deadline Jan 5, 2027 3pm ET. Strong quant + Python readiness. Apply early enough for recommenders.",
      "sources": [
        [
          "How to apply",
          "https://mitsloan.mit.edu/mfin/admissions/how-to-apply"
        ],
        [
          "Admissions hub",
          "https://mitsloan.mit.edu/mfin/admissions"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'princeton-msf': {
    academic: 'Princeton M.Fin.: Fall 2027 apps open; deadline Dec 15, 2026 11:59pm ET. Four-semester curriculum + summer internship. AY 2026–27 tuition $65,210 (+ SHP $4,220).',
    orientation: 'Fall start · ~2 years · TFE #2 (2026)',
    duration: 'Four semesters (2 years) designed length; some admits may be specified for compressed track in admission letter.',
    tracks: ["Quantitative Asset Management","Data Science & Financial Technologies","Valuation & Macroeconomic Analysis","Optional CSML Graduate Certificate (2-year students)"],
    coreNotes: 'Required summer internship between Y1–Y2; Quant Camp (June) and Math & Career Camp before fall; strong econ/quant emphasis.',
    credits: '5 core + 11 electives (at least 5 electives at 500+; 5 from List 1).',
    stem: null,
    summerStart: false,
    tuition: 65210,
    tuitionAlt: null,
    tuitionLabel: 'Academic-year regular graduate tuition (per year, 2026–27)',
    tuitionAltLabel: null,
    period: '2026–27',
    costNote: 'M.Fin. typically 4 semesters / 2 academic years (compressed 2-semester option for select admits after admission). Two-year tuition ≈ 2×$65,210 before SHP; SHP charged each year of enrollment. Missing ≠ full-degree total. Fall 2027 intake context.',
    costDetail: 'Student Health Plan (SHP) fee $4,220 AY; tuition+SHP total $69,430 per year (Graduate School rates). M.Fin. typically 4 semesters / 2 academic years (compressed 2-semester option for select admits after admission). Two-year tuition ≈ 2×$65,210 before SHP; SHP charged each year of enrollment. Missing ≠ full-degree total. University regular tuition rate; M.Fin. is typically 2 academic years (4 semesters). Living costs separate. Living cost band from official COA: $33,141–$39,770 (Princeton Graduate School published living expenses 2026–27: $33,141 (10 months) / $39,770 (12 months) — housing, food, personal, books & supplies.).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-086. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-086. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: {
      low: 33141,
      high: 39770,
      basis: 'Princeton Graduate School published living expenses 2026–27: $33,141 (10 months) / $39,770 (12 months) — housing, food, personal, books & supplies.',
    },
    deadline: 'Fall 2027 application deadline · 2026-12-15 · 11:59 p.m. Eastern',
    deadlineDate: '2026-12-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-086"],
    sources: [
      ['Fall 2027 apps open', 'https://bcf.princeton.edu/news/apply-for-the-fall-2027-master-in-finance-program/'],
      ['Graduate School Finance field', 'https://gradschool.princeton.edu/academics/degrees-requirements/fields-study/finance'],
      ['Apply page', 'https://bcf.princeton.edu/academic-programs/master-in-finance/apply-for-the-master-in-finance-program/'],
      ['Official tuition / budget', 'https://gradschool.princeton.edu/financial-support/financial-support-model/funding-calendar-university-rates-costs'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://bcf.princeton.edu/news/apply-for-the-fall-2027-master-in-finance-program/',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE General Test optional/not required for Finance field (AY 2026–27). Code 2672; no department code."
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT accepted instead of GRE; optional/not required. Code WC1-L5-59."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Required if primary language is not English and no exemption. Grad School sets no overall minimum; department-specific mins not listed on Finance field page. TOEFL iBT (center or Home); institution 2672."
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS Academic (incl. Online) accepted; Indicator and One Skill Retake not accepted. No overall Grad School minimum stated."
        },
        "waiver": "Exempt if primary language is English; or undergrad instruction entirely in English with degree before enrollment; or ≥2 academic years full-time graduate study entirely in English as of application open. DET also accepted. BCF page: required unless undergrad entirely in English or ≥1 year full-time graduate instruction entirely in English."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on BCF apply or Grad School Finance field pages."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three required. With ≥2 years FT work: two may be employers, at least one academic. Without FT work: two academic references required. Grad field page notes one may be from current/former employer."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement and academic statement of purpose required (per BCF apply page). Grad School also lists Academic Statement of Purpose and Personal Statement as application elements.",
        "alsoKnownAs": "Personal statement / academic statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV listed among Grad School application elements (employment, service, education, honors, activities)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Academic transcripts including math courses taken. Upload via Grad School application; Finance Course List also required."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not described on BCF apply or Grad School Finance field pages as of scrape."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "See Grad School application fee / waiver pages (not fully scraped this pass).",
        "detail": "Fee $90 per Grad School Finance field page."
      },
      "other": [
        "Apply via Princeton Graduate School portal",
        "Finance (FIN) Course List required in application",
        "Statement of Financial Resources required",
        "Fall 2027 deadline Dec 15, 2026 11:59pm EST",
        "Responses by March 15; reply by April 15"
      ],
      "advice": "Intl: plan TOEFL/IELTS/DET early; scores must be valid as of application open (Fall 2026+ policy). Highly selective (~40 of 800+). Strong math/quant prep. Iran residency OFAC note on Grad School eligibility page (as of Aug 24, 2026).",
      "sources": [
        [
          "BCF Apply",
          "https://bcf.princeton.edu/academic-programs/master-in-finance/apply-for-the-master-in-finance-program/"
        ],
        [
          "Grad School Finance field",
          "https://gradschool.princeton.edu/academics/degrees-requirements/fields-study/finance"
        ],
        [
          "English proficiency",
          "https://gradschool.princeton.edu/admission-onboarding/prepare/english-proficiency"
        ],
        [
          "Prepare application",
          "https://gradschool.princeton.edu/admission-onboarding/prepare"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'washu-msf': {
    academic: 'WashU Olin MSF: three concentrations. Fall 2026-start tuition $81,500 (Corporate, 2 sem) or $102,900 (Quant / WAM, 3 sem) + per-semester fees.',
    orientation: '2–3 semesters · 3 concentrations · TFE #3 (2026)',
    duration: 'Corporate: 2 semesters (~10 months). Quantitative / Wealth & Asset Management: 3 semesters.',
    tracks: ["Corporate Finance","Quantitative Finance","Wealth & Asset Management"],
    coreNotes: 'Three distinct MSF concentrations; tuition and length differ.',
    credits: 'Corporate example: 30.5 credits (23 required + 7.5 electives) per curriculum page.',
    stem: null,
    summerStart: false,
    tuition: 81500,
    tuitionAlt: 102900,
    tuitionLabel: 'Corporate Finance concentration total tuition (Fall 2026 starters, 2 semesters)',
    tuitionAltLabel: 'Quantitative OR Wealth & Asset Management total tuition (Fall 2026 starters, 3 semesters)',
    period: '2026–27 (Fall 2026 starters; Fall 2027 cohort rates not yet separately posted as of asOf)',
    costNote: 'Flat program tuition; three concentrations with different length/cost. Page labels costs for candidates starting Fall 2026. Living/health insurance not in tuition. Fall 2027 intake context.',
    costDetail: 'Alternate format: Quantitative OR Wealth & Asset Management total tuition (Fall 2026 starters, 3 semesters) $102,900. Per semester posted Spring 2026: program fee $900 + student government $100 + health/wellness $350 = $1,350/semester. Corporate (2 sem) ≈ $2,700 fees; Quant/W&AM (3 sem) ≈ $4,050 fees. Health insurance separate (required). Flat program tuition; three concentrations with different length/cost. Page labels costs for candidates starting Fall 2026. Living/health insurance not in tuition. Flat program tuition for Fall 2026 start candidates; living/health insurance separate.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-087. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-087. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Concentration-specific deadlines not fully captured this pass — site/brief to fill on next scrape of apply pages.',
    deadlineDate: null,
    asOf: '2026-10-26',
    scholarships: ["SCH-087"],
    sources: [
      ['Official tuition / budget', 'https://olin.washu.edu/programs/specialized-masters/ms-in-finance/cost-aid-scholarships.php'],
      ['Corporate curriculum', 'https://olin.washu.edu/programs/specialized-masters/ms-in-corporate-finance/curriculum.php'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://olin.washu.edu/programs/specialized-masters/ms-in-finance/cost-aid-scholarships.php',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE not required but recommended for most candidates. GRE code 6929. Online GMAT/GRE accepted."
      },
      "gmat": {
        "status": "optional",
        "detail": "Not required but recommended. MS Finance GMAT code R4T-WG-53. Official scores released when submitting application."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Intl applicants must submit official English scores valid through application deadline. TOEFL iBT/Home: 5.0 overall (new scale) OR ≥90 old scale (page also lists 4.5). ETS code 6929.",
          "minScore": 90
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS Academic minimum 6.5. Send electronically selecting Washington University in St. Louis Graduate Programs.",
          "minScore": 6.5
        },
        "waiver": "Exemption possible per university exemption criteria; request in application portal; Office of the Provost reviews. Also accept GATEWAY English (495) and Duolingo (125)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA on on-campus SMP apply page; committee considers strong undergraduate GPA among factors if omitting test."
      },
      "lettersOfRecommendation": {
        "status": "not_stated",
        "count": null,
        "detail": "Official on-campus specialized master’s checklist does not list letters of recommendation."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement (500-word max) on life experiences shaping decision to apply and how Olin helps long-term goals. Plus required career essay (100-word max) on ideal post-graduation career. Optional essay 250 words.",
        "alsoKnownAs": "Personal statement / career essay"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts accepted for decision; official required before orientation if enrolling. Bachelor’s equivalent at enrollment; most intl 3-year degrees OK. Non-English: original + English translation. WES/ECE not required."
      },
      "interview": {
        "status": "not_stated",
        "detail": "On-campus SMP apply page does not list an interview (online SMP lists application video interview)."
      },
      "applicationFee": {
        "amountUsd": 0,
        "waivers": "N/A — no fee charged.",
        "detail": "No application fee for on-campus specialized master’s programs."
      },
      "other": [
        "Prerequisites vary by concentration: Quant Finance & Wealth/Asset Management need Statistics + Calculus I; Corporate Finance reviewed holistically",
        "Fall 2027 rounds: Oct 8 2026, Jan 7, Feb 25, Apr 15 2027 then rolling"
      ],
      "advice": "Intl: English scores by deadline; apply earlier rounds for visa time. No app fee. Confirm concentration prerequisites (esp. Quant). Optional GMAT/GRE still recommended for many.",
      "sources": [
        [
          "On-campus SMP apply",
          "https://olin.washu.edu/programs/specialized-masters/on-campus-smp-apply.php"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'gsu-msf': {
    academic: 'GSU Robinson MSF: STEM; evening Buckhead. Fall 2027 rounds Oct 26 2026 → rolling. Costs: GA $38,822 / non-GA $47,987 / out-of-country $49,379.',
    orientation: 'Fall · 12 or 16 months · evening · TFE #4 (2026)',
    duration: '12-month (3 semesters) or 16-month (4 semesters).',
    tracks: ["12-month path","16-month path","Fintech certificate option / FinTech Lab"],
    coreNotes: 'Focus corporate finance, valuation, financial data analytics, fintech; STEM.',
    credits: 'Three-semester path ~30 credit hours across listed FI/MBA courses.',
    stem: true,
    summerStart: false,
    tuition: 49379,
    tuitionAlt: null,
    tuitionLabel: 'Out-of-country residents published program cost',
    tuitionAltLabel: null,
    period: '2026–27 · as published on program page (Fall 2027 cycle; subject to change)',
    costNote: 'Evening weekday program at Buckhead Center (5:30–9:45 p.m.); STEM-designated. 12- or 16-month options. Costs may be offset with graduate assistantship (see awards). Fall 2027 intake context.',
    costDetail: 'Nonrefundable seat deposit $250. Published figures are program costs; GA residents $38,822; non-GA $47,987. Tuition subject to change. Evening weekday program at Buckhead Center (5:30–9:45 p.m.); STEM-designated. 12- or 16-month options. Costs may be offset with graduate assistantship (see awards). Published program costs; seat deposit $250 nonrefundable. GA / living separate. Evening weekday classes (5:30–9:45 p.m.) at Buckhead Center — working-professional friendly; STEM-designated.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-088. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-088. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Round 2 · 2027-01-25',
    deadlineDate: '2027-01-25',
    asOf: '2026-10-26',
    scholarships: ["SCH-088"],
    sources: [
      ['Official tuition / budget', 'https://www.gsu.edu/program/finance-ms/'],
      ['Application process', 'https://robinson.gsu.edu/masters-programs/ms-finance-application-process/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://www.gsu.edu/program/finance-ms/',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "GMAT or GRE score is not required for admission. Strongly encouraged if transcripts/work do not show quantitative readiness; may help scholarships. GRE code 5251."
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not required. Optional for quant signal/scholarships. GMAT code QCK-ZW-99."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Robinson international page states TOEFL 101+ for master’s (also elsewhere lists 90+). Code 5251. Page has conflicting 101 vs 90 figures—use higher/confirm with admissions.",
          "minScore": 101
        },
        "ielts": {
          "status": "required",
          "detail": "Robinson international page states IELTS 7.5+ (also elsewhere lists 6.5+). Confirm with admissions.",
          "minScore": 7.5
        },
        "waiver": "Waiver if baccalaureate/graduate degree from accredited US institution or country where English is official language of instruction per GSU exemption list; or birth country on English-speaking exemption list."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on MS Finance application-process page."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Not required; welcome to submit via online application or sealed envelope from recommender."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required personal statement/essay ≤750 words: why Robinson and this program for short- and long-term goals, and why you are a good fit. Optional essay ≤250 words for extenuating circumstances.",
        "alsoKnownAs": "Required essay / personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Updated résumé required; work experience preferred but not required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial OK at application; one official copy from each prior institution if admitted."
      },
      "interview": {
        "status": "required",
        "detail": "Mandatory video interview in online application (one recording opportunity). Second in-person/Skype interview only if admissions notifies."
      },
      "applicationFee": {
        "amountUsd": 50,
        "waivers": "Not stated on MS Finance application-process page.",
        "detail": "$50 application fee with online application."
      },
      "other": [
        "Evening weekday STEM program (Buckhead)",
        "Intl F-1 applicants must apply by Round 3 (Mar 15, 2027) for Fall 2027",
        "Demonstrate quantitative readiness in application"
      ],
      "advice": "Intl: hard Round 3 deadline for visa seekers; English mins listed inconsistently (101/7.5 vs 90/6.5)—verify with rcbgradadmissions@gsu.edu. Quant background critical without GRE/GMAT.",
      "sources": [
        [
          "MS Finance application process",
          "https://robinson.gsu.edu/masters-programs/ms-finance-application-process/"
        ],
        [
          "Program page",
          "https://www.gsu.edu/program/finance-ms/"
        ],
        [
          "International applicants",
          "https://robinson.gsu.edu/admissions/international-applicants/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'usc-msf': {
    academic: 'USC Marshall MSF: Fall start, 16 months, 36 units, STEM. Deadlines Nov 1 2026 / Jan 15 2027 / Apr 15 2027. Est. tuition+fees ~$94,872 at 2025–26 rates.',
    orientation: 'Fall · 16 months · 36 units · TFE #5 (2026)',
    duration: '16 months / three terms (Fall–Spring–Fall); summer internship opportunity.',
    tracks: ["Full-time MSF","Progressive Degree (USC undergrads)"],
    coreNotes: 'STEM-eligible; core includes quantitative methods, accounting, microeconomics, corporate finance, valuation, investments.',
    credits: '36 units (19.5 core + 16.5 electives).',
    stem: true,
    summerStart: false,
    tuition: 91476,
    tuitionAlt: null,
    tuitionLabel: 'Estimated tuition for 36-unit / 3-semester program at 2025–26 per-unit rate ($2,541/unit)',
    tuitionAltLabel: null,
    period: '2026–27 estimate (estimate using 2025–26 rates (page notes typical 3–5% annual increases; Fall 2027 rates not locked))',
    costNote: 'STEM. Fall start only. Official USC tuition published annually; this is an estimate at time of publishing on Marshall page. Fall 2027 intake context.',
    costDetail: 'Mandatory fees total $3,396 over 3 semesters as published; total estimated tuition+fees $94,872. Excludes housing, health insurance, transport, food. STEM. Fall start only. Official USC tuition published annually; this is an estimate at time of publishing on Marshall page. Page total estimated COA tuition+mandatory fees $94,872 excluding housing/health/transport/food. Not a locked Fall 2027 quote.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-089. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-089. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Round 2 · 2027-01-15',
    deadlineDate: '2027-01-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-089"],
    sources: [
      ['Admissions / deadlines', 'https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/admissions'],
      ['Official tuition / budget', 'https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/tuition-fees'],
      ['Program hub', 'https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/admissions',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Submission of GRE or GMAT optional per MSF admissions FAQ."
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional per MSF admissions page/FAQ."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Intl applicants: TOEFL or IELTS required unless USC English waiver. Grad Admission placement guidelines for master’s (not hard admit mins): TOEFL iBT ≥90 with ≥20 each section (pre-Jan 21 2026) or ≥4.5 with ≥4 each (new scale). Code 4852. Programs may set higher.",
          "minScore": 90
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS Academic/Online: master’s placement guideline 6.5 overall with 6 each band. Select University of Southern California — Graduate Admission.",
          "minScore": 6.5
        },
        "waiver": "Exempt if degree from USC; bachelor’s from US or qualifying Anglophone country; completed master’s/doctoral from country where English is sole official language and language of instruction; or native English from listed countries. Not waived for English-taught programs in non-Anglophone countries or work experience."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated for standard MSF (PDP pathway notes ≥3.0 USC GPA for USC undergrads only)."
      },
      "lettersOfRecommendation": {
        "status": "not_stated",
        "count": null,
        "detail": "Standard MSF admissions criteria list does not include letters of recommendation (PDP pathway requires ≥1 from USC faculty)."
      },
      "statementOfPurpose": {
        "status": "not_stated",
        "detail": "Standard MSF admissions criteria list does not include a statement/essay (PDP requires ≤500-word essay).",
        "alsoKnownAs": null
      },
      "resume": {
        "status": "required",
        "detail": "Resume listed among application criteria."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from all colleges/universities attended. USC does not accept WES in lieu of official institutional records. Country-specific rules for foreign degrees."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "KIRA video interview by invitation only after application submitted."
      },
      "applicationFee": {
        "amountUsd": 175,
        "waivers": "Not stated on MSF admissions page.",
        "detail": "$175 application fee."
      },
      "other": [
        "Fall start only",
        "Intl strongly encouraged Round 1 or 2 (Round 3 decision not guaranteed for intl)",
        "Financial docs + passport for I-20 after admission (not for admit decision itself per page notes)",
        "STEM OPT extension eligible"
      ],
      "advice": "Intl: apply Round 1/2 for visa; meet USC English policy or waiver. No LOR/essay on standard checklist—confirm in portal. Official scores/transcripts by deadline for timely decision.",
      "sources": [
        [
          "MSF Admissions",
          "https://www.marshall.usc.edu/programs/graduate-programs/specialized-masters/ms-finance/admissions"
        ],
        [
          "USC English proficiency",
          "https://gradadm.usc.edu/prospective-international-students/english-proficiency/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'brandeis-msf': {
    academic: 'Brandeis MSF: 9-mo ($44,200) or 16-mo ($57,200 tuition across terms) for 2026–27. Fall rounds Nov 1 / Jan 15 / Mar 1 / Apr 15.',
    orientation: 'Fall (or Spring) · 9 or 16 months · STEM · TFE #6 (2026)',
    duration: '9 months (34 credits) or 16 months (44 credits); part-time 2–3 years also offered.',
    tracks: ["9-month","16-month with concentrations: Corporate Finance & Valuation, Asset Management, Risk Management, FinTech","Part-time","Dual degrees"],
    coreNotes: 'STEM-designated; CFA Institute / GARP partner notes on program page.',
    credits: '34 (9-mo) or 44 (16-mo).',
    stem: true,
    summerStart: false,
    tuition: 44200,
    tuitionAlt: 57200,
    tuitionLabel: 'MSF 9-month tuition (2026–27; Fall+Spring)',
    tuitionAltLabel: 'MSF 16-month tuition total (Y1 $40,040 + Y2 fall $17,160)',
    period: '2026–27',
    costNote: 'STEM. Fall 2027 and Spring 2027 starts available for MSF. Living expenses published on same calculator (food/housing $20,970 for 9 months).',
    costDetail: 'Alternate format: MSF 16-month tuition total (Y1 $40,040 + Y2 fall $17,160) $57,200. 9-month / Y1: fees $220. 16-month Y2 fall: fees $60. Orientation fee $100 first term (FAQ/admissions materials). Health insurance estimate $4,685 (waivable) on tuition calculator. STEM. Fall 2027 and Spring 2027 starts available for MSF. Living expenses published on same calculator (food/housing $20,970 for 9 months). Official graduate tuition calculator; living/health separate. Living cost band from official COA: $20,970 (Brandeis SFS 2026–27 MSF estimated living: Food and Housing $20,970 (9 months); plus books $750, transport $495, personal $3,340; health insurance $4,685 listed separately.).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-090. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-090. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: {
      low: 20970,
      high: null,
      basis: 'Brandeis SFS 2026–27 MSF estimated living: Food and Housing $20,970 (9 months); plus books $750, transport $495, personal $3,340; health insurance $4,685 listed separately.',
    },
    deadline: 'Fall Priority Deadline 1 (Business & Economics) · 2026-11-01',
    deadlineDate: '2026-11-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-090"],
    sources: [
      ['Program page', 'https://www.brandeis.edu/global/business/msf.html'],
      ['Graduate admissions deadlines', 'https://www.brandeis.edu/global/admissions/'],
      ['Official tuition / budget', 'https://www.brandeis.edu/student-financial-services/tuition-calculator/graduate-tuition.html'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://www.brandeis.edu/global/business/msf.html',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE entirely optional. Unofficial OK at apply; official if enroll. Valid 5 years. Code 3092."
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT entirely optional. Select Brandeis University — Office of Graduate Admissions — All Graduate Programs."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Required unless waiver. Recommend TOEFL iBT ≥5.0 (new scale; equiv. ≥100 pre-Jan 21 2026) or TOEFL ITP ≥627. Code 3122.",
          "minScore": 100
        },
        "ielts": {
          "status": "required",
          "detail": "Recommend IELTS ≥7.0 (Indicator and Online accepted).",
          "minScore": 7
        },
        "waiver": "Waiver if: on-campus bachelor’s with ≥3 full-time academic years English-only instruction; or ≥1 full-time academic year on-campus graduate study English-only; or FT US work ≥2 consecutive years within last 4 years (≥35 hrs/wk post-bachelor’s). Duolingo ≥130 or PTE ≥68 also accepted as alternatives."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on Graduate Admissions master’s requirements page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One required (up to two). Professional or academic. If 2+ years FT work, professional letter strongly encouraged. Second letter should arrive within 5 days of complete for guaranteed evaluation."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose required; program-specific prompt and word count in online application.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Current résumé with education and employment; include internships/part-time if little FT experience."
      },
      "transcripts": {
        "status": "required",
        "detail": "Bachelor’s (or equivalent 3-year intl). Unofficial for review; official upon enrollment. Institutions with degree or ≥12 credits not on another transcript; max 4 schools listed."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on master’s application requirements page."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "Fee waiver available if eligible (see fees-waivers page).",
        "detail": "$75 online application fee unless waiver."
      },
      "other": [
        "MSF prerequisites: Financial Management + Quantitative Methods (B or better, ≥3 credits each) OR CFA Level I OR approved Coursera/EdX",
        "9-month MSF: meaningful finance work experience expected (often ≥2 years FT or significant finance internships); otherwise consider 16-month",
        "Spring 2027 or Fall 2027 entry available"
      ],
      "advice": "Intl: meet English waiver or submit TOEFL/IELTS/Duolingo/PTE; recommended floors are guidance not hard cutoffs. Complete MSF prereqs before/after apply as allowed. Choose 9- vs 16-month track based on experience.",
      "sources": [
        [
          "Master’s application requirements",
          "https://www.brandeis.edu/graduate-admissions/apply/masters.html"
        ],
        [
          "International applicants / English",
          "https://www.brandeis.edu/graduate-admissions/apply/international.html"
        ],
        [
          "IBS admissions FAQ",
          "https://www.brandeis.edu/global/admissions/faq.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'utah-msf': {
    academic: 'Utah Eccles MSF: $39,000 flat (30 cr @ $1,300). Fall 2027: priority Feb 1 / intl Apr 1 / scholarship Jun 1 / final Aug 1.',
    orientation: 'Fall · 30 credits · $39k · TFE #7 (2026)',
    duration: '30 credits; typical completion timing per academics page (verify).',
    tracks: ["MSF full program","Express Admit / Fast Track options for qualifying applicants"],
    coreNotes: 'Prerequisites: intro accounting + financial management (B or better) before decision.',
    credits: '30',
    stem: null,
    summerStart: false,
    tuition: 39000,
    tuitionAlt: null,
    tuitionLabel: 'Full 30-credit program tuition at $1,300/credit (resident = nonresident)',
    tuitionAltLabel: null,
    period: '2026–27 · as published (fixed program rate; not labeled to a single AY on page)',
    costNote: 'Same rate for residents and non-residents. Fall 2027 and Spring 2027 starts. No graduate assistantships or fellowships from the program (per page).',
    costDetail: 'Program page: fixed rate includes all standard fees. Living separate. Same rate for residents and non-residents. Fall 2027 and Spring 2027 starts. No graduate assistantships or fellowships from the program (per page). Program page: $39,000 for 30 credits; living separate.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-091, SCH-092. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-091, SCH-092. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Fall 2027 Priority · 2027-02-01',
    deadlineDate: '2027-02-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-091","SCH-092"],
    sources: [
      ['Admissions / deadlines', 'https://eccles.utah.edu/programs/master-of-science-in-finance/admissions/'],
      ['Official tuition / budget', 'https://eccles.utah.edu/programs/master-of-science-in-finance/tuition-scholarships-financial-aid/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://eccles.utah.edu/programs/master-of-science-in-finance/admissions/',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "Official admissions requirements and FAQ list do not include GRE/GMAT; not listed among required materials."
      },
      "gmat": {
        "status": "not_required",
        "detail": "Not listed among required admissions materials on MSF admissions or FAQ pages."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Intl: TOEFL iBT min 90 (pre-Jan 21 2026) or 5 (on/after Jan 21 2026). Program mins higher than general Admissions Office.",
          "minScore": 90
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS Academic (in-person) minimum 7.0.",
          "minScore": 7
        },
        "waiver": "Exemptions per University of Utah Admissions Office site. Duolingo English Test min 120 also accepted. Official score required before final decision."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Bachelor’s with cumulative undergraduate GPA ≥3.0 from accredited college/university (or equivalent). Optional essay recommended if below."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required (not family/friends). Prefer professional if FT experience; faculty/advisors/internship OK. Fast Track (GPA ≥3.5 + prereqs B+) and Express Admit can forgo LORs."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two short essays 300–750 words: (1) overcoming adversity; (2) why MSF and career goals. Optional essay for weaknesses. Plus required video essay ≤2 minutes. Express Admit: no written essays/LORs if apply by Oct 31, 2026.",
        "alsoKnownAs": "Written essays / video essay"
      },
      "resume": {
        "status": "required",
        "detail": "Chronological career history with dates, duties; education and certifications; international travel for school/work/residence (not vacations)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial from all HE institutions at apply (must show name, courses, grades, GPAs). Official after admission. Intl: NACES course-by-course eval (university covers cost after English score received)."
      },
      "interview": {
        "status": "unknown",
        "detail": "Live interview not listed as required on admissions page; required video essay. Scholarship page notes interviews may factor scholarship decisions."
      },
      "applicationFee": {
        "amountUsd": 65,
        "waivers": "Not stated on MSF admissions page.",
        "detail": "$55 domestic / $65 international; non-refundable."
      },
      "other": [
        "Prerequisites (B or better) before admit decision: Intro Accounting + Financial Management (or Series 7 / CFA L1 for finance prereq); Sophia Learning alternatives",
        "Fall 2027: Priority Feb 1 2027; Intl Apr 1 2027; Scholarship Jun 1; Final Aug 1",
        "Fast Track and Express Admit pathways"
      ],
      "advice": "Intl: Apr 1 2027 intl deadline for Fall 2027 F-1; allow time for transcript eval + official English. Complete prereqs early. Hybrid/evening options exist.",
      "sources": [
        [
          "MSF Admissions",
          "https://eccles.utah.edu/programs/master-of-science-in-finance/admissions/"
        ],
        [
          "MSF FAQ",
          "https://eccles.utah.edu/programs/master-of-science-in-finance/faq/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'texas-msf': {
    academic: 'Texas McCombs MSF: summer start, 10 months. Intl final Round 2 (Jan 12/19 2027). Non-TX total $59,700; TX $55,600 (incl. $2k seat fee).',
    orientation: 'Summer start · 10 months · TFE #8 (2026)',
    duration: '10 months (Summer–Fall–Spring).',
    tracks: ["Full-time MSF","MS Bridge (UT undergrads)"],
    coreNotes: 'GRE/GMAT optional; video assessment via Kira; 2 recommendations.',
    credits: null,
    stem: null,
    summerStart: true,
    tuition: 59700,
    tuitionAlt: null,
    tuitionLabel: 'Non-Texas resident total program tuition (incl. $2,000 pre-enrollment fee)',
    tuitionAltLabel: null,
    period: '2026–27 · as published on MSF tuition page (class of 2028 / summer-start cycle)',
    costNote: 'SUMMER START (July) — ~10-month in-residence. Non-TX breakdown: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Fall 2027 intake context.',
    costDetail: 'Non-refundable $2,000 pre-enrollment tuition fee required to secure seat (included in $59,700 total). Texas resident total $55,600. Intl students also responsible for international health insurance + ISSS fees (amounts not on MSF tuition page). SUMMER START (July) — ~10-month in-residence. Non-TX breakdown: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Non-TX: Summer $11,900 + Fall $22,900 + Spring $22,900 + $2,000 pre-enroll = $59,700. Books/living/laptop/optional fees extra. Intl health + ISSS fees extra. SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-093, SCH-094. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-093, SCH-094. MBA-only merit cards (e.g. SCH-025, SCH-052, SCH-056) are not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Round 2 Step1 / Steps2-3 (FINAL for international) · 2027-01-12',
    deadlineDate: '2027-01-12',
    asOf: '2026-10-26',
    scholarships: ["SCH-093","SCH-094"],
    sources: [
      ['Application process / deadlines', 'https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/admissions/application-process/'],
      ['Official tuition / budget', 'https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/admissions/tuition-financial-aid/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/admissions/application-process/',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE/GMAT optional for all applicants; no disadvantage if omitted. If submitting, upload official score report and send official scores (GRE code 6882)."
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional. MSF GMAT code 396-44-78."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Intl must submit official TOEFL, IELTS, or DET unless exempt. Grad Admissions minimum TOEFL 79 iBT (or 4 on 6-point scale). Code 6882.",
          "minScore": 79
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS Academic overall band 6.5 minimum (General Training not accepted). Electronic delivery to University of Texas at Austin.",
          "minScore": 6.5
        },
        "waiver": "Exempt if from qualifying country list or hold bachelor’s from US or qualifying country (master’s alone does not waive). DET min 115. Qualifying countries include India, Singapore, UK, Australia, Canada (except Quebec), etc."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on MSF application-process page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters; at least one from professor/academic connection. If undergrad completed >3 years ago, professional-only may be appropriate. No personal/family."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required essay max 500 words: personal/academic/professional path to MSF, short- and long-term goals, post-grad employment vision, how MSF helps. Optional second essay max 500 words for concerns.",
        "alsoKnownAs": "MSF application essay questions"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Employment history section collects post-bac FT employers/internships; standalone résumé not explicitly labeled on application-process page."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts all higher-ed institutions in Step 1; Grad School requires unique official transcript from every senior college attended (Step 2). Translations if not English."
      },
      "interview": {
        "status": "required",
        "detail": "Step 3: required McCombs MS Video Assessment via Kira within 7 days of fee payment (all applicants). Page also notes interviewing selected applicants before decisions."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Managed by Office of Graduate Admissions (not MS Programs); see Grad School waiver info.",
        "detail": "$65 domestic / $90 international; invoice 1–3 business days after Step 1 submit."
      },
      "other": [
        "Three steps: McCombs app + Grad School checklist + Kira video assessment",
        "Round 2 is final deadline for international students",
        "Summer (July) start ~10-month program — not autumn Fall",
        "Academic supplements section to clarify quantitative coursework titles"
      ],
      "advice": "Intl: apply by Round 2 (Jan 2027); English score unless exempt (India on qualifying list). Complete Kira within 7 days of fee. Official transcripts promptly to avoid delay.",
      "sources": [
        [
          "MSF Application Process",
          "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/admissions/application-process/"
        ],
        [
          "MSF FAQ",
          "https://www.mccombs.utexas.edu/graduate/specialized-masters/ms-finance/admissions/faq/"
        ],
        [
          "UT Graduate International",
          "https://graduate.utexas.edu/admissions/apply/international"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'vanderbilt-msf': {
    academic: 'Vanderbilt Owen MSF: STEM, 9 months, August start with Mod 0. Fall 2027 apps open Aug 19 2026; rounds Sep 10 / Oct 29 / Jan 13 / Feb 24 / Apr 28; intl visa final Apr 5 2027. Tuition 2026–27 $76,700.',
    orientation: 'Fall (Aug) · 9 months · STEM · TFE #9 (2026)',
    duration: '9 months (Mod 0 summer + Mods 1–4).',
    tracks: ["Investment Banking concentration","Investment Management concentration","Financial Analytics concentration","General Finance concentration","JD/MSF dual"],
    coreNotes: 'STEM-designated; Mod 0 Financial Economics I + professional development; core modeling/valuation/reporting then ~50% electives. GMAT/GRE not required for MSF this cycle.',
    credits: 'At least 33 credit hours typical (modular 2-credit courses); concentrations require 12 elective hrs.',
    stem: true,
    summerStart: false,
    tuition: 76700,
    tuitionAlt: null,
    tuitionLabel: 'Owen MS Finance tuition (2026–27 AY; 9-month program)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27',
    costNote: '9-month full-time MSF. Tuition subject to change annually. Financial Aid COA also lists Owen MBA/MSF/MAcc/MMark First Year direct costs total $79,626 (tuition $76,700 + fees). All applicants auto-considered for partial merit scholarships; no need-based scholarships. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $2,926. Mandatory direct fees from Owen MSF tuition page / Student Accounts: Transcript $100 + Maintenance (MSF) $1,250 + Student Health Fee $882 + Student Services Fee $694 = $2,926. Health insurance $4,244 (waivable with comparable coverage) separate. Loan fees on COA page are financing estimates, not billed fees. 9-month full-time MSF. Tuition subject to change annually. Financial Aid COA also lists Owen MBA/MSF/MAcc/MMark First Year direct costs total $79,626 (tuition $76,700 + fees). All applicants auto-considered for partial merit scholarships; no need-based scholarships. Living cost band from official COA: $27,057–$32,270 (Owen MSF page Average Living Expenses sum Housing $16,030 + Food $7,488 + Personal $2,013 + Transportation $1,526 = $27,057. VU Financial Aid graduate COA First Year Indirect Total $32,270 (includes books $500 + housing $16,128 + food $7,714 + personal & health insurance $6,186 + transportation $1,526 + loan fees $216).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-096. MBA-only merit (SCH-051) is not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-096. MBA-only merit (SCH-051) is not attached to this MSF route.',
    livingCostBand: {
      low: 27057,
      high: 32270,
      basis: 'Owen MSF page Average Living Expenses sum Housing $16,030 + Food $7,488 + Personal $2,013 + Transportation $1,526 = $27,057. VU Financial Aid graduate COA First Year Indirect Total $32,270 (includes books $500 + housing $16,128 + food $7,714 + personal & health insurance $6,186 + transportation $1,526 + loan fees $216).',
    },
    deadline: 'Round 1 · 2026-09-10 · 11:59 p.m. Central',
    deadlineDate: '2026-09-10',
    asOf: '2026-10-26',
    scholarships: ["SCH-096"],
    sources: [
      ['Admissions / deadlines', 'https://business.vanderbilt.edu/masters-in-finance/admissions/'],
      ['Application instructions', 'https://business.vanderbilt.edu/masters-in-finance/admissions/application-instructions/'],
      ['Official tuition / budget', 'https://business.vanderbilt.edu/masters-in-finance/admissions/tuition-financial-aid/'],
      ['Curriculum / STEM', 'https://business.vanderbilt.edu/masters-in-finance/curriculum/'],
      ['Apps open Fall 2027', 'https://business.vanderbilt.edu/news/2026/08/14/vanderbilt-business-applications-fall-2027-open-august-19/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['VU Costs – Graduate 2026–27', 'https://www.vanderbilt.edu/financialaid/costs-graduate/'],
      ['Student Accounts Grad/Prof Tuition 2026–27', 'https://www.vanderbilt.edu/stuaccts/fees/tuition_fees_2026-27_grad_prof/'],
    ],
    programUrl: 'https://business.vanderbilt.edu/masters-in-finance/admissions/',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Test-optional specialized master’s; may submit GRE if it adds value."
      },
      "gmat": {
        "status": "optional",
        "detail": "Test-optional; may submit GMAT if it adds value."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Official English exam or approved waiver required. Accepts TOEFL, IELTS, Duolingo, TOEFL Essentials. Code 1871 for TOEFL/IELTS. No numeric floor stated on application-instructions page."
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS accepted; school code 1871. No numeric minimum stated on application-instructions page."
        },
        "waiver": "Waiver if: undergrad degree in country where English is official language (India counted); OR lived/worked past 2+ years in such country; OR ≥90th percentile verbal on GMAT/GRE. Mark qualifications on International Applicants page."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on application-instructions page. Four-year U.S. bachelor’s or equivalent required."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter required by deadline. Prefer online form. Managers, professors, or professional colleagues OK; native-language letter + professional translation acceptable."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required personal statement on purpose for MSF and alignment of background/skills/interests. Optional second statement for gaps/concerns. Plus required video essay (unscripted small-talk prompts).",
        "alsoKnownAs": "Personal statement / essays / video essay"
      },
      "resume": {
        "status": "required",
        "detail": "Current professional resume (employer-ready format) with education, work/internships, activities, interests."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial from every college/university at apply (name, institution, courses, grades, GPA, scale, degree date). Official prior to enrollment. Translations if not English. 3-year degrees: strongly recommend IEE/TEC course-by-course equivalency."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Essential; by invitation on rolling basis after complete application. Asynchronous Kira: 4 oral + 1 written response. Denial/waitlist possible without interview; offer of admission requires evaluative interview."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Not detailed on application-instructions page (check FAQ/admissions for exceptions).",
        "detail": "$100 application fee for MS Finance."
      },
      "other": [
        "Apr 5, 2027 final deadline for international applicants (visa processing)",
        "Complete apps due 11:59pm Central on round deadline",
        "Preliminary Financial Declaration for intl (no bank statements at apply)"
      ],
      "advice": "Intl: Apr 5 2027 hard final; English waiver or official scores early (10–14 days to post). 3-year degree holders: get credential eval ready. Interview invitation needed for admit.",
      "sources": [
        [
          "Application instructions",
          "https://business.vanderbilt.edu/masters-in-finance/admissions/application-instructions/"
        ],
        [
          "Admissions overview",
          "https://business.vanderbilt.edu/masters-in-finance/admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'rochester-msf': {
    academic: 'Rochester Simon MS in Finance (STEM): Fall start; 9-mo or 16-mo internship track. Tuition 2026–27 $78,000/year (+$5,500 internship option). Fall rounds Oct 15 / Jan 5 / Mar 1 / May 1 (years for 2027 entry).',
    orientation: 'Fall · 9 or 16 months · STEM · TFE #10 (2026)',
    duration: '9-month non-internship track or 16-month internship track.',
    tracks: ["9-month non-internship","16-month internship","Investment Management and Financial Analysis","Corporate Financial Strategy and Investment Banking","Financial Technology and Innovation"],
    coreNotes: 'STEM-designated; GMAT/GRE optional; title verified as MS in Finance (not MSBA Finance track).',
    credits: '14 courses typical (core + 4 electives); catalog notes ~36 credit hours.',
    stem: true,
    summerStart: false,
    tuition: 78000,
    tuitionAlt: 5500,
    tuitionLabel: 'Full-Time MS in Finance tuition per year (2026–27 AY)',
    tuitionAltLabel: 'Optional Internship Track fee (in addition)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 (rates accurate as of 2025-11-14 per Simon page)',
    costNote: 'STEM. Tracks: 9-month non-internship vs 16-month internship (+$5,500 fee). Tuition published as $/year — 9-mo track typically one billed year; 16-mo may extend across a second academic year (second-year tuition not separately itemized on page — missing ≠ 0 for multi-year total). Fall entry for MS Finance per admissions FAQs (curriculum page spring banner appears shared/MS-wide — treat Fall as SoT for Finance). Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $1,827. Activity Fee $800/year + Mandatory Health Fee $1,027/year (health fees are estimates pending NY State approval in June). Health Insurance $3,906/year separate. Intl: ISO Fee $140/year + International Student Programming Fee $900 one-time. Optional Internship Track fee $5,500. STEM. Tracks: 9-month non-internship vs 16-month internship (+$5,500 fee). Tuition published as $/year — 9-mo track typically one billed year; 16-mo may extend across a second academic year (second-year tuition not separately itemized on page — missing ≠ 0 for multi-year total). Fall entry for MS Finance per admissions FAQs (curriculum page spring banner appears shared/MS-wide — treat Fall as SoT for Finance). Living cost band from official COA: $22,505 (Simon published 2026–27 MSF living: Housing $10,206 + Food $6,273 + Travel $2,250 + Personal $2,466 + Books $1,310 = $22,505/year (excludes health insurance).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-097, SCH-098.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-097, SCH-098.',
    livingCostBand: {
      low: 22505,
      high: null,
      basis: 'Simon published 2026–27 MSF living: Housing $10,206 + Food $6,273 + Travel $2,250 + Personal $2,466 + Books $1,310 = $22,505/year (excludes health insurance).',
    },
    deadline: 'Round 1 · 2026-10-15 · 11:59 p.m. ET',
    deadlineDate: '2026-10-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-097","SCH-098"],
    sources: [
      ['Program hub', 'https://simon.rochester.edu/programs/full-time-ms-in-finance'],
      ['Curriculum / tracks', 'https://simon.rochester.edu/programs/full-time-ms-in-finance/curriculum'],
      ['Admissions / Fall deadlines', 'https://simon.rochester.edu/programs/full-time-ms/admissions'],
      ['Full-Time MS deadlines (alt calendar)', 'https://simon.rochester.edu/full-time-ms-deadlines'],
      ['Official tuition / budget', 'https://simon.rochester.edu/programs/full-time-ms/tuition-financial-aid'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://simon.rochester.edu/programs/full-time-ms-in-finance',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Option to apply without GMAT/GRE. Encouraged to review standardized test guidance / class profile middle 80% if deciding whether to submit. GRE code 2972."
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional. Full-Time MS in Finance GMAT code WX9-8R-36. Single test-date scores; Superscore considered only as additional data."
      },
      "english": {
        "toefl": {
          "status": "required",
          "detail": "Required for intl whose native language is not English (TOEFL iBT / Home / Essentials). Preferred minimum referenced on admissions page but numeric value not clearly extractable from page text this pass. Code 7260."
        },
        "ielts": {
          "status": "required",
          "detail": "IELTS (incl. Indicator) accepted. Preferred minimum referenced but numeric not clearly extractable from admissions page text."
        },
        "waiver": "Waived if attended ≥3 academic years post-secondary taught solely in English AND received bachelor’s or master’s from English-instruction college/university. Upload supporting waiver documentation. Duolingo also accepted. Proof of English proficiency required for visa issuance."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No hard minimum GPA on admissions checklist; scholarship guidance example mentions 3.2+ as one factor among many."
      },
      "lettersOfRecommendation": {
        "status": "not_stated",
        "count": null,
        "detail": "Official FAQ: Simon does not accept letters of recommendation."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One required essay for MS (word count on checklist 400–700; 2026 sneak-peek blog lists 250–500 for goals/backup/fit prompts—confirm live application). Video essay is MBA-only / not in MS application per 2026 requirements blog.",
        "alsoKnownAs": "Required essay"
      },
      "resume": {
        "status": "required",
        "detail": "Business-formatted résumé (not CV), recommend ≤2 pages; quantify accomplishments."
      },
      "transcripts": {
        "status": "required",
        "detail": "School-issued transcripts scanned/uploaded for each college; undergrad and graduate if applicable. English or certified translation. Proof of degree conferral."
      },
      "interview": {
        "status": "not_used",
        "detail": "Per 2026 application-requirements blog, optional video essay is for MBA candidates only and not included in MS application. FAQ/checklist do not list a live MS interview."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Active-duty military/veterans; University of Rochester alumni; official US community/country service (e.g., TFA, Peace Corps); live webinar/event attendees. Request ≥5 business days before deadline and before submit.",
        "detail": "Non-refundable $90 USD by credit card in application."
      },
      "other": [
        "Fall entry only for MS Finance",
        "No official academic prerequisites for MS Finance",
        "3-year bachelor’s accepted",
        "Merit scholarships automatic with application review (>90% of incoming MS get merit aid per site)"
      ],
      "advice": "Intl: English test or documented waiver; scores needed for visa. No LORs accepted—strengthen essay/resume/quant profile. Apply early rounds for faster decision and scholarship pools.",
      "sources": [
        [
          "Full-Time MS Admissions",
          "https://simon.rochester.edu/programs/full-time-ms/admissions"
        ],
        [
          "Admissions FAQs",
          "https://simon.rochester.edu/programs/full-time-ms/admissions/admissions-faqs"
        ],
        [
          "Fee waiver",
          "https://simon.rochester.edu/programs/full-time-ms/admissions/admissions-faqs/fee-waiver"
        ],
        [
          "Standardized tests",
          "https://simon.rochester.edu/programs/full-time-ms/admissions/admissions-faqs/standardized-tests"
        ],
        [
          "2026 application requirements blog",
          "https://simon.rochester.edu/blog/admissions-blog/sneak-peek-2026-full-time-application-requirements"
        ],
        [
          "MS Finance hub",
          "https://simon.rochester.edu/programs/full-time-ms-in-finance"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'florida-msf': {
    academic: 'Florida Warrington MSF: 32-credit UF undergrad combination only (not open externally). Deadlines Aug 30 / Oct 4 / Nov 11 within UF cycle. Tuition not published as flat MSF total. Related FinTech MS launches Fall 2027 for traditional applicants.',
    orientation: 'UF combo only · 32 credits · TFE #11 (2026) — external gap',
    duration: '32 credits; combination bachelor’s/master’s with courses in years 3–4 (typically finish both in ~4 years).',
    tracks: ["Combination bachelor’s/master’s (UF undergrads only)","Elective focus areas: corporate finance / markets & institutions / investments","Related: MS in Finance and Technology (traditional 1-year + combination) — Fall 2027 launch"],
    coreNotes: 'CFA University Affiliation. STEM not stated on MSF program page (null). External Fall 2027 applicants should not treat classic MSF as open.',
    credits: '32 (16 graduate credits may be taken before finishing bachelor’s; 12 double-count).',
    stem: null,
    summerStart: false,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'Tuition not yet verified',
    tuitionAltLabel: null,
    tuitionEstimate: 46377,
    tuitionEstimateLabel: 'Estimate only: 32 graduate credits × $1,449.28 non-resident graduate rate (2026–27) = $46,376.96 — NOT a published MSF program sticker',
    period: '2026–27 per-credit schedule (program has no flat sticker)',
    costNote: 'ACCESS RESTRICTED (UF undergrad combination only; external/international N/A). CRITICAL ACCESS FLAG: William R. Hough MS in Finance is a combination/accelerated pathway — applications are only sought from current University of Florida undergraduates (apply in second year; min ~3.6 GPA). Not an open external Fall 2027 MSF for HK/TW/PRC applicants. 32 credits; 16 graduate credits may be taken before bachelor\'s finish; 12 credits double-count. Florida resident graduate rate $532.52/credit → 32× = $17,040.64. Combination + Bright Futures/Prepaid may further reduce cost for eligible FL students only. Missing program sticker ≠ 0.',
    costDetail: 'Estimate only: 32 graduate credits × $1,449.28 non-resident graduate rate (2026–27) = $46,376.96 — NOT a published MSF program sticker: $46,377. Per-credit graduate rates already include listed mandatory fee components (CITF, financial aid, technology, A&S, athletic, health, transportation). No separate MSF program fee schedule published. CRITICAL ACCESS FLAG: William R. Hough MS in Finance is a combination/accelerated pathway — applications are only sought from current University of Florida undergraduates (apply in second year; min ~3.6 GPA). Not an open external Fall 2027 MSF for HK/TW/PRC applicants. 32 credits; 16 graduate credits may be taken before bachelor\'s finish; 12 credits double-count. Florida resident graduate rate $532.52/credit → 32× = $17,040.64. Combination + Bright Futures/Prepaid may further reduce cost for eligible FL students only. Missing program sticker ≠ 0. Current UF undergraduates only per program admissions page.',
    funding: 'Program-tied funding verified 2026-10-26: .',
    fundingNotes: 'Program-tied funding verified 2026-10-26: .',
    livingCostBand: null,
    deadline: 'Early application · August 30 (year within UF sophomore cycle — not a standalone Fall 2027 external deadline)',
    deadlineDate: null,
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Official tuition / budget', 'https://warrington.ufl.edu/graduate/masters-finance/'],
      ['Official tuition / budget', 'https://warrington.ufl.edu/admissions-aid/cost-aid/graduate/'],
      ['MS Finance and Technology (related)', 'https://warrington.ufl.edu/graduate/masters-finance-technology/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['UF 2026–27 Tuition and Fees (per credit)', 'https://cfo.ufl.edu/student-financial-resources/current-and-former-students/2026-27-academic-year-tuition-and-fees/'],
    ],
    programUrl: 'https://warrington.ufl.edu/graduate/masters-finance/',
    accessRestricted: true,
    accessNote: 'Current UF undergraduates only per program admissions page.',
    availability: 'UF undergrad combination only · external / international N/A',
    availabilityType: 'restricted',
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "MSF Program does not require a GMAT nor GRE score. SAT/ACT from UF undergrad record are electronically accessible; minimum expected SAT combined math+reading 1350/1600 or ACT math 31/36.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Applicants may submit a GMAT score to enhance the application; any GMAT received is included in comprehensive review. Program does not require GMAT.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "Applications sought only from current UF undergraduates; English proficiency not listed on MSF page for this pathway."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "Same as TOEFL — UF undergrad combo pathway only."
        },
        "waiver": "N/A for eligible UF undergraduates (program does not admit external/international applicants)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3.6,
        "scale": "4.0",
        "detail": "Keep overall GPA above a 3.6; minimum 3.6 overall GPA expected for application. Average application GPA for MSF classes of 2026 and 2027 was 3.91."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters of recommendation emailed directly to Mrs. Hunt (Tayla.Hunt@warrington.ufl.edu) by recommenders."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of purpose describing chosen career path and firms of interest; focus on junior summer internship targets with accompanying Excel/Word table of firms, caliber criteria, and recruitment process.",
        "alsoKnownAs": "Statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume formatted for finance industry; must include all post-high school education and employment and ongoing international affiliations/research funding per Florida Statute."
      },
      "transcripts": {
        "status": "required",
        "detail": "UF transcripts available electronically to MSF Admissions Committee from Student Information System; applicants do not need to order/email transcripts."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Candidates selected to interview should demonstrate characteristics appropriate for graduate business courses and qualifications expected by firms in their statement of purpose."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "",
        "detail": "MSF program page does not state an application fee. Warrington specialized master's materials reference the UF Graduate School application; MBA section of masters-admissions page cites $30, but MSF combo page itself is silent."
      },
      "other": [
        "RESTRICTED: applications only sought from current UF undergraduates (combination bachelor's/master's).",
        "Pre-application form after first-year spring grades; full application in second year.",
        "SAT/ACT used from UF record (not GRE/GMAT).",
        "Complete required summer credits before third year; FIN/general business majors must complete 4000-level FIN prerequisites."
      ],
      "advice": "External and international applicants are not eligible for classic florida-msf; see florida-msft (MS Finance and Technology) for an open path. Documented here for eligible UF undergrads only.",
      "sources": [
        [
          "MS Finance program / how to apply",
          "https://warrington.ufl.edu/graduate/masters-finance/"
        ],
        [
          "Warrington Master's & MBA Admissions",
          "https://warrington.ufl.edu/admissions-aid/masters-admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'asu-msf': {
    academic: 'ASU Carey MS-FIN: STEM; Aug start; 9–16 months. Fall 2027: Dec 1 / Feb 1 (intl priority) / Apr 1 (intl final) / Jul 1 (+ rolling to Jul 15). Est. intl tuition+fees Corporate ~$73,500 / Analytical ~$99,500.',
    orientation: 'Fall (Aug) · 9–16 months · STEM · TFE #12 (2026)',
    duration: '9–16 months (Analytical methods optional third semester).',
    tracks: ["Corporate finance","Analytical methods (extended)","CFA Level I alignment"],
    coreNotes: 'STEM-designated; CFA Institute University Affiliation; GMAT/GRE optional; Tempe campus.',
    credits: null,
    stem: true,
    summerStart: false,
    tuition: 73500,
    tuitionAlt: 99500,
    tuitionLabel: 'MS-FIN Corporate finance track — estimated total tuition and fees, International',
    tuitionAltLabel: 'MS-FIN Analytical methods track — estimated total tuition and fees, International',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 · as published on W. P. Carey MS-FIN cost page (Fall 2027 cycle; subject to ABOR change)',
    costNote: 'STEM. Starts August; length 9–16 months (Corporate vs Analytical methods). Resident / Nonresident / International estimates: Corporate $43,500 / $70,000 / $73,500; Analytical $61,500 / $95,000 / $99,500. Same figures on main program page as of asOf. Fall 2027 intake context.',
    costDetail: 'Alternate format: MS-FIN Analytical methods track — estimated total tuition and fees, International $99,500. Mandatory fees reference: $500. One-time non-refundable enrollment deposit $500 required before registration (in addition to estimated totals as published). Estimated totals are labeled tuition and fees combined. STEM. Starts August; length 9–16 months (Corporate vs Analytical methods). Resident / Nonresident / International estimates: Corporate $43,500 / $70,000 / $73,500; Analytical $61,500 / $95,000 / $99,500. Same figures on main program page as of asOf.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-099. MBA-only merit (SCH-031) is not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-099. MBA-only merit (SCH-031) is not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Round I (Early Decision) · 2026-12-01',
    deadlineDate: '2026-12-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-099"],
    sources: [
      ['Program / cost / deadlines', 'https://wpcarey.asu.edu/masters-programs/finance'],
      ['Application process', 'https://www.wpcarey.asu.edu/masters-programs/finance/application-process'],
      ['Official tuition / budget', 'https://wpcarey.asu.edu/masters-programs/finance/cost-financial-aid'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://wpcarey.asu.edu/masters-programs/finance',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Test scores not required for admission. Applicants may submit GRE to demonstrate potential; ASU does not accept GRE General Test at-home exam. Institution code 4007.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Test scores not required. Optional GMAT may be submitted; W. P. Carey GMAT code 0GZ-1R-80.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "Required for non-native English speakers. ASU graduate minimum: TOEFL iBT 80 if taken before Jan 21, 2026; minimum 4 on new scale if on/after Jan 21, 2026. W. P. Carey states its graduate minimums may be higher than ASU but does not publish a program-specific number on the MS-FIN page. Does not accept TOEFL iBT Home Edition if taken prior to Jan 21, 2026, Paper Edition, or Essentials."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic overall band at least 6.5 (ASU graduate minimum). W. P. Carey may set higher unpublished program minimums."
        },
        "waiver": "ASU English proficiency exemptions (citizenship list, U.S. degree, medium-of-instruction, etc.) via Admission Services forms after applying. See admission.asu.edu English proficiency page."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "ASU Degree Search: minimum cumulative GPA of 3.00 in last 60 semester / 90 quarter hours of first bachelor's, or 3.00 in applicable master's."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter of recommendation; provide recommender name, affiliation, and work email. Should comment on motivation, commitment, achievements, work experience, and likely success (Degree Search)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Admission essay / short-answer question responses in graduate application. Personal statements will not be accepted and will delay review. Essay prompts are in the graduate application.",
        "alsoKnownAs": "Admission essay / short-answer question responses"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume must include positions held and clearly indicate dates of employment in Month/Year format."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial OK at application; if admitted, official transcripts from every college/university awarding bachelor's or higher required. ASU attendees need not submit ASU transcripts. International: original language + official English translation."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on MS-FIN application-process page."
      },
      "applicationFee": {
        "amountUsd": 115,
        "waivers": "Military and Citizen Service: U.S. Military, Teach for America, Peace Corps, or AmeriCorps — email wpcareymasters@asu.edu before applying. Domestic fee $70.",
        "detail": "$70 domestic; $115 international. Non-refundable; applications not processed until fee received."
      },
      "other": [
        "Bachelor's or master's from regionally accredited institution in business/management, economics, statistics, CS, or other STEM areas (Degree Search).",
        "Three-year undergraduate degree with no additional coursework may qualify — contact wpcareymasters@asu.edu.",
        "$500 non-refundable enrollment deposit after admission."
      ],
      "advice": "International priority Round II Feb 1, 2027; international final Round III Apr 1, 2027. Submit English proof and allow visa/financial guarantee time after admission.",
      "sources": [
        [
          "MS-FIN application process",
          "https://www.wpcarey.asu.edu/masters-programs/finance/application-process"
        ],
        [
          "MS-FIN program hub",
          "https://wpcarey.asu.edu/masters-programs/finance"
        ],
        [
          "ASU Degree Search Finance MS",
          "https://degrees.asu.edu/masters-phd/major/ASU00/BAFINMS/finance-ms/"
        ],
        [
          "ASU graduate English proficiency",
          "https://admission.asu.edu/apply/international/graduate/english-proficiency"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'uci-msf': {
    academic: 'UCI Merage MFin: STEM, 12 months, 52 units. Rounds Oct 15 / Dec 1 / Feb 1 / Apr 1 / May 15 / Jul 15 (years for Fall 2027). Program fee Fall 2026 cohort $80,848 (Fall 2027 TBD).',
    orientation: 'Fall · 12 months · STEM · TFE #13 (2026)',
    duration: '12 months / four quarters.',
    tracks: ["Asset & Wealth Management","Quantitative Finance","Investment Banking","Corporate Finance","Fintech","Real Estate"],
    coreNotes: 'STEM-designated; CFA-aligned; GMAT/GRE optional; interview by invitation; $150 app fee.',
    credits: '52 units (6 core + 7 electives) + three-quarter Career Center ProSeminar.',
    stem: true,
    summerStart: false,
    tuition: 80848,
    tuitionAlt: null,
    tuitionLabel: 'Master of Finance program fee total — cohort entering Fall 2026 (4 quarters × $20,212)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 schedule for Fall 2026 entering cohort (posted 2026-08-14). Fall 2027 entering cohort rates NOT separately published as of asOf — do not treat as locked Fall 2027 quote.',
    costNote: 'STEM. 12-month / 4-quarter full-time MFin (52 units). Merage financial-aid page points to Registrar fee assessment; living budget published for nine months (F/W/S) only — summer living not in that table. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $9,985. Mandatory campus fees on Fall 2026 cohort schedule (excl. optional UCGPC ~$7): Student Services Access $1,096 + Assoc. Grad Students $56 + Student Center $617.27 + Bren Events $92 + Recreation $352 + Student Health Insurance $7,771.86 ≈ $9,985.13. Total fees paid on schedule $90,833.13 including program fee. STEM. 12-month / 4-quarter full-time MFin (52 units). Merage financial-aid page points to Registrar fee assessment; living budget published for nine months (F/W/S) only — summer living not in that table. Living cost band from official COA: $21,992–$38,640 (Merage MFin nine-month budget (Fall/Winter/Spring): Books $2,009 + Personal $3,489 + Transportation $3,663 + Room & Board Living at Home $12,831 (= $21,992) to Off-Campus Apartments $29,479 (= $38,640). On-campus Palo Verde R&B $17,222 mid. Does not include Summer quarter.).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-100.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-100.',
    livingCostBand: {
      low: 21992,
      high: 38640,
      basis: 'Merage MFin nine-month budget (Fall/Winter/Spring): Books $2,009 + Personal $3,489 + Transportation $3,663 + Room & Board Living at Home $12,831 (= $21,992) to Off-Campus Apartments $29,479 (= $38,640). On-campus Palo Verde R&B $17,222 mid. Does not include Summer quarter.',
    },
    deadline: 'Round 1 · 2026-10-15',
    deadlineDate: '2026-10-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-100"],
    sources: [
      ['Admissions / deadlines', 'https://merage.uci.edu/programs/masters/master-finance/admissions.html'],
      ['Program overview', 'https://merage.uci.edu/programs/masters/master-finance/index.html'],
      ['FAQs', 'https://merage.uci.edu/programs/masters/master-finance/faqs.html'],
      ['Official tuition / budget', 'https://www.reg.uci.edu/fees/2026-2027/finance.pdf'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Merage MFin Financial Aid', 'https://merage.uci.edu/programs/masters/master-finance/financial-aid.html'],
    ],
    programUrl: 'https://merage.uci.edu/programs/masters/master-finance/admissions.html',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE is not required. Optional; strongly recommended if GPA under 3.0 per FAQs. Scores valid up to five years. GRE code 4859.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Not required; optional additional data point. GMAT code 0DP-7R-40.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "International students if applicable. Minimum TOEFL iBT 80/120 or 4.0/6.0 (new scale). Valid up to two years. Institution code 4859."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic minimum overall 7, with no individual module less than 6. Electronic scores only from test center."
        },
        "waiver": "Waived if undergraduate or graduate degree from a U.S. institution or institution where English was the sole language of instruction per World Higher Education Database (WHED)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA published on admissions page. FAQs recommend GMAT/GRE if GPA under 3.0 as evidence of quantitative/verbal skills."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two references (academic or professional)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two essays (one video and one written).",
        "alsoKnownAs": "Essays (written + video)"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from all institutions attended to earn an undergraduate degree (English translation if applicable). WES evaluations not accepted (FAQ)."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interview by invitation only."
      },
      "applicationFee": {
        "amountUsd": 150,
        "waivers": "Available for attending select recruitment events. Fees paid prior to waiver approval are non-refundable.",
        "detail": "$150 application fee."
      },
      "other": [
        "3-year bachelor's (except UK) generally needs additional master's/PGD for U.S. 4-year equivalence — see FAQs.",
        "Recommended: quantitative coursework (calculus, statistics, economics), accounting exposure, strong analytics."
      ],
      "advice": "International students must submit all materials including LORs by applicable deadline for visa processing. Round 3 Feb 1 priority for UCI housing / recommended for internationals; Round 4 Apr 1 international student deadline.",
      "sources": [
        [
          "MFin Admissions",
          "https://merage.uci.edu/programs/masters/master-finance/admissions.html"
        ],
        [
          "MFin FAQs",
          "https://merage.uci.edu/programs/masters/master-finance/faqs.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'villanova-msf': {
    academic: 'Villanova MSF: STEM; summer July start (Jul 26 2027); 11 months / 30 credits. Tuition 2026–27 $57,000. Rounds Nov 15 / Jan 15 (intl) / Mar 15 / Jun 1.',
    orientation: 'Summer (July) start · 11 months · STEM · TFE #14 (2026)',
    duration: '11 months full-time (July start).',
    tracks: ["Full-time MSF","MSF Fellows (assistantship / 50% tuition discount + stipend — separate app)","MSF-to-MBA credit transfer option (up to 12 credits)"],
    coreNotes: 'STEM-designated; CFA Institute University Affiliation; July in-person start; GMAT/GRE optional if waiver criteria met.',
    credits: '30',
    stem: true,
    summerStart: true,
    tuition: 57000,
    tuitionAlt: null,
    tuitionLabel: 'Entire MSF program tuition 2026–27 ($1,900 per credit)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27',
    costNote: 'STEM. Full-time ~11 months; starts in person in July (summer start). Intl I-20 funding proof: tuition $57,000 + living $15,000 + health insurance $2,360 = $74,360 (+ $157/sem general fee). Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $314. University general fee $157 each semester. Two semesters ≈ $314; exact semester count depends on July–start calendar (confirm billable terms). Mandatory health insurance listed for I-20 proof $2,360 (intl). STEM. Full-time ~11 months; starts in person in July (summer start). Intl I-20 funding proof: tuition $57,000 + living $15,000 + health insurance $2,360 = $74,360 (+ $157/sem general fee). Living cost band from official COA: $15,000 (Villanova MSF international students page: Living Expenses $15,000 required for funding proof (plus health insurance $2,360).). SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-101, SCH-102.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-101, SCH-102.',
    livingCostBand: {
      low: 15000,
      high: null,
      basis: 'Villanova MSF international students page: Living Expenses $15,000 required for funding proof (plus health insurance $2,360).',
    },
    deadline: 'Round 1 · 2026-11-15',
    deadlineDate: '2026-11-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-101","SCH-102"],
    sources: [
      ['Official tuition / budget', 'https://www.villanova.edu/university/business/academics/graduate-programs/msf/admissions.html'],
      ['Program hub / STEM', 'https://www.villanova.edu/university/business/academics/graduate-programs/msf.html'],
      ['FAQs (July start)', 'https://www.villanova.edu/university/business/academics/graduate-programs/msf/faqs.html'],
      ['Curriculum Summer 2027', 'https://www.villanova.edu/university/business/academics/graduate-programs/msf/curriculum.html'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Villanova MSF International Students', 'https://www.villanova.edu/university/business/academics/graduate-programs/msf/international-students.html'],
    ],
    programUrl: 'https://www.villanova.edu/university/business/academics/graduate-programs/msf/admissions.html',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Not required if: undergrad GPA ≥3.3 with quantitative major; OR master's in technical/quantitative field with GPA ≥3.0; OR advanced degree (MBA, JD, MD, PhD). Otherwise GMAT or GRE required. Waiver form available.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Same conditional policy as GRE — optional if waiver criteria met; otherwise required. Contact Shea McCormick with questions.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "For applicants whose native language is not English and who graduated from a non-U.S. institution in a country where English is not official. Minimum 90 on 120 scale or 4.5 on 1–6 scale. VSB TOEFL code 2959."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic minimum 7. Send to Villanova University – Villanova School of Business."
        },
        "waiver": "U.S. institution graduates not required. Also: undergraduate degree in the U.S. or lived in the U.S. for the past two years — contact Grad Business Office for waiver."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No absolute minimum GPA published for admission. Undergrad GPA ≥3.3 (quantitative major) is one path to GMAT/GRE optional status."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter; professional preferred (current/previous supervisor; internships OK). Academic OK if no work experience. No personal/family recommendations."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One essay on short- and long-term career plans; how Villanova MSF meets professional goals; academic/personal/professional motivation.",
        "alsoKnownAs": "Essay"
      },
      "resume": {
        "status": "required",
        "detail": "Business resume with educational and professional information."
      },
      "transcripts": {
        "status": "required",
        "detail": "One official transcript from each postsecondary institution with ≥9 credit hours. Unofficial OK for review; official degree-bearing before classes. Non-U.S. studies: WES or ECE course-by-course evaluation required (no other services)."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MSF admissions page."
      },
      "applicationFee": {
        "amountUsd": 65,
        "waivers": "",
        "detail": "Non-refundable $65, paid by credit card on online application."
      },
      "other": [
        "Program starts in July (full-time ~11 months).",
        "International deadline Round 2 Jan 15 recommended for visa.",
        "Econometrics / macro / math of economics recommended prerequisites (not required)."
      ],
      "advice": "Apply by Round 2 (Jan 15) as international. WES/ECE course-by-course required before review for non-U.S. credentials. STEM OPT extension eligible after program.",
      "sources": [
        [
          "MSF Admissions",
          "https://www.villanova.edu/university/business/academics/graduate-programs/msf/admissions.html"
        ],
        [
          "MSF International Students",
          "https://www.villanova.edu/university/business/academics/graduate-programs/msf/international-students.html"
        ],
        [
          "MSF FAQs",
          "https://www.villanova.edu/university/business/academics/graduate-programs/msf/faqs.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'notredame-msf': {
    academic: 'Notre Dame Mendoza MSF: STEM; June summer start; 38 credits / ~11 months. Tuition 2026–27 $74,618. Rounds Sep 10 EA / Oct 20 / Jan 7 (intl) / Mar 17.',
    orientation: 'Summer (June) start · ~11 months · STEM · TFE #15 (2026)',
    duration: '11-month on-campus program (June start through following spring).',
    tracks: ["Full-time MSF (quant-focused pivot curriculum)"],
    coreNotes: 'STEM-designated; GMAT/GRE not required for U.S.-degree applicants; international applicants need GMAT or waiver. Video assessment + 4-slide deck required.',
    credits: '38',
    stem: true,
    summerStart: true,
    tuition: 74618,
    tuitionAlt: null,
    tuitionLabel: 'MSF tuition for 2026–2027 academic year (Summer + Fall/Spring)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27',
    costNote: 'SUMMER START. STEM. Start Date June (summer). 38 credit hours. Tuition split on COA: Summer $21,604 + Fall/Spring $53,014 = $74,618. Total program COA published $111,298 including living. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $2,600. Financial Aid COA: Summer fees $400 + Fall/Spring fees $2,200 (= program fee $1,600 + student fees $600 on Mendoza breakdown) = $2,600. Mendoza page also lists Program Fee $1,600 (Fall/Spring) and Student Fees $400 summer / $600 Fall/Spring. STEM. Start Date June (summer). 38 credit hours. Tuition split on COA: Summer $21,604 + Fall/Spring $53,014 = $74,618. Total program COA published $111,298 including living. Living cost band from official COA: $21,285 (ND Financial Aid MSF COA housing and food: Summer $3,465 + Fall/Spring $17,820 = $21,285. Books/supplies $400+$1,750; personal $700+$6,720; transportation $525+$2,700 also published.). SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-103.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-103.',
    livingCostBand: {
      low: 21285,
      high: null,
      basis: 'ND Financial Aid MSF COA housing and food: Summer $3,465 + Fall/Spring $17,820 = $21,285. Books/supplies $400+$1,750; personal $700+$6,720; transportation $525+$2,700 also published.',
    },
    deadline: 'Early Action · 2026-09-10',
    deadlineDate: '2026-09-10',
    asOf: '2026-10-26',
    scholarships: ["SCH-103"],
    sources: [
      ['Program hub', 'https://mendoza.nd.edu/graduate-programs/finance-msf/'],
      ['Apply / deadlines', 'https://mendoza.nd.edu/graduate-programs/finance-msf/apply/'],
      ['Official tuition / budget', 'https://mendoza.nd.edu/graduate-programs/finance-msf/tuition-financial-aid/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['ND Financial Aid Finance (MSF) costs', 'https://financialaid.nd.edu/apply-or-renew/graduate-students/graduate-program-costs/finance-msf/'],
    ],
    programUrl: 'https://mendoza.nd.edu/graduate-programs/finance-msf/',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE not required if applicant has or will have undergraduate degree from a U.S. college/university prior to enrollment. Applicants from colleges/universities outside the U.S. must submit valid GMAT or apply for GMAT waiver. Scores ≤5 years. GRE code 6998.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Not required for U.S. bachelor's holders/expected graduates. Required for non-U.S. institution applicants unless waiver granted via waiver form. GMAT code XM7-2D-68.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Non-U.S. citizen applicants (and U.S. citizens with extensive international study) must submit English proficiency. Mendoza MSF page accepts TOEFL; does not publish a minimum score. Mendoza TOEFL code 2456. ND Graduate School publishes TOEFL iBT 80 (pre-Feb 2026; Speaking ≥23) or 4.5 avg / no section <4.0 (updated) — cite Grad School separately; confirm with Mendoza if program-specific floor differs."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted on Mendoza MSF page; minimum not published there. ND Graduate School lists IELTS 7.0 composite."
        },
        "waiver": "May be waived if completed at least six full-time semesters or nine full-time quarters at a university where English is the primary language (transcripts verify; committee may request more)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on MSF apply page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One recommendation; someone familiar with professional or academic background who can offer detailed assessment."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Written statement ≤500 words: detailed post-master's career plans; how background + Notre Dame studies equip you; short- and long-term goals with industry and function.",
        "alsoKnownAs": "Written statement"
      },
      "resume": {
        "status": "required",
        "detail": "One-page resume summarizing education, work experience, skills, accomplishments."
      },
      "transcripts": {
        "status": "required",
        "detail": "From all colleges/universities attended including summer and graduate study. International transcripts need official English translation. Unofficial OK for application; official final with proof of graduation before enrollment if admitted. Degree audits not accepted."
      },
      "interview": {
        "status": "required",
        "detail": "Video assessment required after application submission (Admissions Committee questions); must complete to move forward. Not framed as optional invitation-only live interview."
      },
      "applicationFee": {
        "amountUsd": 50,
        "waivers": "U.S. Active Duty Military or Veterans; current/former Peace Corps; current/former Teach for America — contact msf.business@nd.edu.",
        "detail": "$50 non-refundable; pay via application status page after submit. Application incomplete until paid."
      },
      "other": [
        "Applicant Snapshot: required 4-slide PDF deck (no audio/video).",
        "Optional supplemental essay for additional context.",
        "Also accepts PTE Academic and Duolingo for English (mins not on Mendoza MSF page)."
      ],
      "advice": "International applicants strongly encouraged to apply by Round 2 for visa timing. Non-U.S. undergrad degree holders: plan GMAT or GMAT waiver early.",
      "sources": [
        [
          "MSF Application",
          "https://mendoza.nd.edu/graduate-programs/finance-msf/apply/"
        ],
        [
          "MSF program hub",
          "https://mendoza.nd.edu/graduate-programs/finance-msf/"
        ],
        [
          "ND Graduate School international English (mins reference)",
          "https://graduateschool.nd.edu/admissions/international-students/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'utd-msf': {
    academic: 'UTD Jindal MS Finance: STEM, 36 credits. Flex deadlines May 1 fall / Oct 1 spring / Mar 1 summer. Cohort ~12 mo: OOS $50k / in-state $35k; foreign deadline Apr 30. Flex COA via UTD tuition plans.',
    orientation: 'Fall/Spring/Summer Flex or summer Cohort · 36 cr · STEM · TFE #16 (2026)',
    duration: 'Flex: typically ~1.5 years (some take 2); Cohort: ~12 months.',
    tracks: ["Flex MS Finance (self-paced; multiple concentrations)","MS Finance Cohort (~12 months)","Concentrations: Financial Analyst; Corporate Finance/IB; Real Estate; FinTech; Risk Management; Energy Financial Management; Financial Management"],
    coreNotes: 'STEM-designated (catalog). GMAT/GRE optional. Calculus/statistics prerequisites (or OPRE courses).',
    credits: '36 minimum',
    stem: true,
    summerStart: true,
    tuition: 50000,
    tuitionAlt: 35000,
    tuitionLabel: 'MS Finance Cohort out-of-state / non-Texas total tuition and fees for the degree',
    tuitionAltLabel: 'Cohort program in-state tuition+fees total',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 · as published on MS Finance Cohort page (Fall 2027 cycle; subject to change)',
    costNote: 'CFA-aligned cohort; ~12-month, 36 semester credit hours. Summer start of sequence (Semester 1 summer courses). High-achieving admits auto-considered for scholarship levels applied to tuition; awards do NOT create in-state tuition status. Cohort students excluded from general JSOM graduate scholarship portal — contact program director. Fall 2027 intake context.',
    costDetail: 'Published $50,000 (OOS) / $35,000 (TX resident) are total tuition and fees for the degree (includes program activities, internship/capstone, communication training, career coaching, business school per-credit fee). Living and health insurance extra. Paid in two installments (fall and spring). CFA-aligned cohort; ~12-month, 36 semester credit hours. Summer start of sequence (Semester 1 summer courses). High-achieving admits auto-considered for scholarship levels applied to tuition; awards do NOT create in-state tuition status. Cohort students excluded from general JSOM graduate scholarship portal — contact program director. SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-104. MBA-only merit (SCH-057) is not attached to this MSF route.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-104. MBA-only merit (SCH-057) is not attached to this MSF route.',
    livingCostBand: null,
    deadline: 'Flex — Fall regular · 2027-05-01',
    deadlineDate: '2027-05-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-104"],
    sources: [
      ['2026 Graduate Catalog — Finance', 'https://catalog.utdallas.edu/2026/graduate/programs/jsom/finance'],
      ['MS Finance FAQ', 'https://jindal.utdallas.edu/ms-finance-faq/'],
      ['Official tuition / budget', 'https://fin.utdallas.edu/ms-finance-cohort/'],
      ['MS degree options', 'https://fin.utdallas.edu/masters-degree-options/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['JSOM Graduate Scholarships (cohort exclusion note)', 'https://jindal.utdallas.edu/student-resources/scholarships/graduate-scholarships/'],
    ],
    programUrl: 'https://catalog.utdallas.edu/2026/graduate/programs/jsom/finance',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT/GRE not required; optional submission. Score used only if provided. GRE school code R6897.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional; use listed GMAT program codes when submitting.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "International applicants: TOEFL minimum 80 iBT; score ≤2 years from application date. Institutional code 6897 (FAQ)."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS minimum 6.5. Also accepts PTE minimum 67."
        },
        "waiver": "Waived if bachelor's or master's earned through instruction/examination in English, or native country's primary language is English (UTD list). U.S. degree holders waived."
      },
      "gpa": {
        "status": "recommended",
        "minimum": null,
        "scale": "4.0",
        "detail": "No hard minimum published. Cumulative GPA used in holistic review; currently average admitted GPA is 3.3 (FAQ / MS admissions)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "MS Finance FAQ and MS Finance Cohort page: one letter of recommendation (professional; no specific format). Note: general Jindal MS Programs Admission page states three LORs (or one if ≥2 years post-baccalaureate experience) — program-specific MS Finance materials say one."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal objectives statement — one-page typed essay outlining academic interests and goals (cohort page: one-page typed; general MS page: one-page double-spaced).",
        "alsoKnownAs": "Personal objectives statement"
      },
      "resume": {
        "status": "required",
        "detail": "Detailed résumé of work history; work experience not required for MS degrees."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from all colleges/universities; international degree certificate if applicable. Unofficial OK for decision; official before enrollment."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on MS Finance FAQ or Cohort application section."
      },
      "applicationFee": {
        "amountUsd": 75,
        "waivers": "UT Dallas students/alumni automatic waiver; military and listed Graduate Application Fee Waiver Program (U.S. citizens/PRs) per Graduate Admissions deadlines-and-fees page.",
        "detail": "$75 non-refundable via application/Applicant Portal (UTD Graduate Admissions)."
      },
      "other": [
        "Calculus knowledge required for MS Finance; OPRE 6303 available if missing.",
        "Fall deadline May 1 (FAQ); Cohort page notes Apr 30 foreign / May 31 domestic for cohort track — confirm track.",
        "Also accepts PTE (min 67)."
      ],
      "advice": "International: submit English scores and credentials early; May 1 fall deadline (or cohort foreign Apr 30). STEM program; ISSO handles I-20.",
      "sources": [
        [
          "MS Finance FAQ",
          "https://jindal.utdallas.edu/ms-finance-faq/"
        ],
        [
          "MS Finance Cohort application",
          "https://fin.utdallas.edu/ms-finance-cohort/"
        ],
        [
          "Jindal MS Programs Admission",
          "https://jindal.utdallas.edu/admission-requirements/masters/"
        ],
        [
          "UTD Graduate Admissions deadlines and fees",
          "https://graduate-admissions.utdallas.edu/apply-to-ut-dallas/deadlines-and-fees/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'florida-msft': {
    academic: 'UF Warrington MS in Finance and Technology (florida-msft): DISTINCT from classic florida-msf combo MSF. Traditional 1-year / 30 credits / Fall-only / 8-week modules; first traditional class Fall 2027. Deadlines Mar 1 (early) / May 1 (final) 2027. Tuition on program page: OOS $43,478 / in-state $15,976. Open to traditional external applicants (business bachelor’s preferred). STEM null. Not on TFE MSF spine.',
    orientation: 'Fall 2027 launch · 1 year / 30 cr · FinTech MS (≠ classic MSF) · TFE n/a',
    duration: '1 year (traditional master’s); combination bachelor’s/master’s 4 or 5 years (UF undergrads).',
    tracks: ["Traditional 1-year master’s (external applicants; first class Fall 2027) — PRIMARY for intl slate","Bachelor’s/master’s combination (UF on-campus undergrads; 4-yr or 5-yr; combo first class Fall 2026)","On campus · 8-week modular schedule · Fall entry only"],
    coreNotes: 'DISTINCT from florida-msf (classic MS in Finance = UF-undergrad combination-only; TFE #11). This FinTech MS fuses investments/derivatives/valuation with AI/ML, blockchain, DeFi, NLP/genAI, financial intermediation & technology. GMAT/GRE not required (optional). Business major preferred; other majors case-by-case. Intl: English proficiency + Warrington interview for non-U.S. institution attendees; 3-year bachelor’s from India/Australia/Bangladesh/Canada(excl. Quebec)/Nepal/Pakistan not recognized. STEM designation not stated on program pages → null. 12–16 week industry project via Fintech Research Center (news). Minimum eight Finance graduate electives required (page).',
    credits: '30',
    stem: null,
    summerStart: false,
    tuition: 43478,
    tuitionAlt: 15976,
    tuitionLabel: 'Out-of-state / non-resident program tuition as listed on MS Finance and Technology page (intl-relevant sticker)',
    tuitionAltLabel: 'In-state / Florida resident program tuition (as listed on FinTech page)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 · As published on program page (arithmetically = UF 2026–27 graduate per-credit × 30 credits). Fall 2027 / AY 2027–28 billing rates not yet published — sticker may change',
    costNote: 'OPEN traditional 1-year track (external/intl) launches Fall 2027 — DISTINCT from florida-msf (classic MS Finance = UF undergrad combination only; accessRestricted). 30 credits; on campus Gainesville; 8-week modular; Fall entry only. Program page Costs: In-state $15,976 / Out-of-state $43,478 (verified 2026-10-26). Alias URL https://warrington.ufl.edu/graduate/masters-fintech/ shows same figures. Warrington graduate cost table does NOT yet list \'MS in Finance and Technology\' as a row (MS Marketing shows identical OOS/in-state figures — do not assume identity of programs). Combination 4/5-yr track is UF Finance majors only — not this catalog id\'s primary path. STEM designation not stated on official FinTech pages → stem null. Living band not published for this program → livingCostBand null (UF SFA general 2026–27 grad living expenses exist campus-wide but are not program-tied).',
    costDetail: 'Alternate format: In-state / Florida resident program tuition (as listed on FinTech page) $15,976. No separate program fee, professional-development fee, or deposit itemized on the FinTech program page. Published In-state/Out-of-state figures arithmetically match UF 2026–27 graduate per-credit totals for 30 credits (rates already include listed mandatory fee components). Missing separate fee line ≠ 0. OPEN traditional 1-year track (external/intl) launches Fall 2027 — DISTINCT from florida-msf (classic MS Finance = UF undergrad combination only; accessRestricted). 30 credits; on campus Gainesville; 8-week modular; Fall entry only. Program page Costs: In-state $15,976 / Out-of-state $43,478 (verified 2026-10-26). Alias URL https://warrington.ufl.edu/graduate/masters-fintech/ shows same figures. Warrington graduate cost table does NOT yet list \'MS in Finance and Technology\' as a row (MS Marketing shows identical OOS/in-state figures — do not assume identity of programs). Combination 4/5-yr track is UF Finance majors only — not this catalog id\'s primary path. STEM designation not stated on official FinTech pages → stem null. Living band not published for this program → livingCostBand null (UF SFA general 2026–27 grad living expenses exist campus-wide but are not program-tied). Traditional 1-year master\'s open to external applicants (business major preferred; other majors case-by-case). Combination track is UF on-campus undergrads only — do not conflate with florida-msf classic combo MSF.',
    funding: 'No verified program-tied scholarship for florida-msft traditional Fall 2027 admits (as of 2026-10-26). SCH ids consumed: none.',
    fundingNotes: 'No verified program-tied scholarship for florida-msft traditional Fall 2027 admits (as of 2026-10-26). SCH ids consumed: none.',
    livingCostBand: null,
    deadline: 'Early decision (1-year traditional, Fall 2027 launch) · 2027-03-01',
    deadlineDate: '2027-03-01',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Official tuition / budget', 'https://warrington.ufl.edu/graduate/masters-finance-technology/'],
      ['MS FinTech alias URL (same program)', 'https://warrington.ufl.edu/graduate/masters-fintech/'],
      ['News: program introduction (deadlines / Fall 2027 launch)', 'https://warrington.ufl.edu/news/warrington-masters-finance-and-technology/'],
      ['Graduate costs table (FinTech row not yet listed)', 'https://warrington.ufl.edu/admissions-aid/cost-aid/graduate/'],
      ['Classic MSF (DISTINCT / combo-only — do not conflate)', 'https://warrington.ufl.edu/graduate/masters-finance/'],
      ['UF 2026–27 Tuition and Fees (per-credit cross-check)', 'https://cfo.ufl.edu/student-financial-resources/current-and-former-students/2026-27-academic-year-tuition-and-fees/'],
      ['Graduate catalog PDF — Finance and Technology (30 cr)', 'https://gradcatalog.ufl.edu/graduate/colleges-departments/business/finance-insurance-real-estate/finance-and-technology/finance-and-technology.pdf'],
      ['TFE Times 2026 (not on classic MSF spine)', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://warrington.ufl.edu/graduate/masters-finance-technology/',
    accessRestricted: false,
    accessNote: 'Traditional 1-year master\'s open to external applicants (business major preferred; other majors case-by-case). Combination track is UF on-campus undergrads only — do not conflate with florida-msf classic combo MSF.',
    availability: 'Traditional 1-year open · Fall 2027 first class',
    availabilityType: 'verify',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Official page: test scores are not required but applicants may submit GMAT or GRE to enhance the application. UF code 5812.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Same as GRE: not required; optional submission of GMAT or GRE allowed (UF code 5812).",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 4.5,
          "detail": "UF Admissions international graduate page lists TOEFL iBT & Home Edition minimum 4.5 overall; subsections Reading/Listening/Speaking/Writing each 4.0 (new TOEFL scale as posted). School code 5812. Required for international applicants unless exemption applies."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic minimum 6.5 via IELTS Results Service E-Delivery to University of Florida."
        },
        "waiver": "UF may exempt applicants from countries where English is the only official language; those who attended non-U.S. institutions where English is the only official language of instruction; or who earned a degree in the U.S. / English-only-official-language country / English-only-instruction institution (see UF Grad International exemptions list). Warrington FinTech page also refers applicants to UF international English requirements."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "3.0 upper-division undergraduate GPA required (U.S. degrees only, per FinTech application requirements)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two recommenders who have supervised the applicant (professor, employer, adviser, volunteer coordinator). Letters from students, peer leaders, or relatives not accepted. Contacts entered in application; recommenders emailed after submission."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of purpose 400–600 words: motivations, candidacy, how program advances career goals.",
        "alsoKnownAs": "statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "1–2 page resume/CV covering post-high school education and employment, international affiliations/research funding, experience, accomplishments, leadership, and outside commitments (Florida Statute / UF graduate requirement also applies)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload transcripts (English and native language) from all post-secondary institutions. Unofficial OK for review; official required in first term if admitted. UF students: do not submit UF transcript."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Warrington interviews candidates who attended a non-U.S. institution as part of admissions."
      },
      "applicationFee": {
        "amountUsd": 30,
        "waivers": "UF Office of Admissions does not provide graduate application fee waivers.",
        "detail": "$30 non-refundable Graduate School application fee per program (UF Admissions how-to-apply)."
      },
      "other": [
        "Bachelor’s from accredited institution; business major preferred (other majors case-by-case).",
        "Graduate School application + Information for Residency Classification.",
        "International: UF does not recognize 3-year bachelor’s from India, Australia, Bangladesh, Canada (excl. Quebec), Nepal, Pakistan; other 3-year degrees reviewed individually.",
        "International: upload diploma/degree certification (English + native); letter of expected graduation if diploma not yet received.",
        "DISTINCT from florida-msf (classic MS Finance / combo-restricted)."
      ],
      "advice": "OPEN external/intl traditional 1-year track launching Fall 2027 (early Mar 1 / final May 1, 2027). Do not conflate with florida-msf. STEM/CIP not stated on FinTech pages.",
      "sources": [
        [
          "MS Finance and Technology application requirements",
          "https://warrington.ufl.edu/graduate/masters-finance-technology/"
        ],
        [
          "UF Graduate Admissions how to apply (fee)",
          "https://admissions.ufl.edu/apply/graduate/"
        ],
        [
          "UF Grad International English proficiency",
          "https://admissions.ufl.edu/apply/graduate/international/"
        ],
        [
          "Classic MSF DISTINCT",
          "https://warrington.ufl.edu/graduate/masters-finance/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'bc-msf': {
    academic: 'BC Carroll MSF: 10 courses/~12 mo FT. Quant STEM (Fall Aug or Spring Jan); Regular Fall only. Fall 2027 rounds Oct 13’26–Jun 8’27; Spring Quant final Dec 15’26. Tuition 2026–27 $71,940 ($2,398/cr × 30).',
    orientation: 'Fall (Aug) or Spring Quant · ~12 months · Quant STEM · TFE #17 (2026)',
    duration: 'Full-time ~12 months (10 courses); part-time ~20 months.',
    tracks: ["Full-time Regular Finance (Fall only)","Full-time Quantitative Finance STEM (Fall or Spring)","Part-time MSF (Fall or Spring)","Fifth-year BC undergrad pathway"],
    coreNotes: 'Only the Quantitative Finance track is STEM-designated. Regular track is not STEM. Managerial Statistics 0-credit online prerequisite before arrival. GMAT/GRE required (waiver request available). $100 app fee. 10 hours community service required to graduate.',
    credits: '10 courses / typically 30 credit hours',
    stem: true,
    stemNote: 'STEM applies to Quantitative Finance track only (official MSF page). Regular track not STEM-designated.',
    summerStart: false,
    tuition: 71940,
    tuitionAlt: null,
    tuitionLabel: 'Carroll MSF program total — 30 credits × $2,398/credit (2026–27 AY)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 (rates typically announced in April; effective summer start of AY)',
    costNote: 'Full-time MSF: 10 courses / 30 credits / ~12 months. Regular Finance track Fall (Aug) entry only; Quantitative Finance track is STEM-designated and offers Fall Aug 2027 and Spring Jan 2027 entry. Same published per-credit tuition applies to both tracks; merit funding page does not limit awards to STEM/Quant track. Fall 2027 students will be billed on the AY rate in force when enrolled (2027–28 rates typically announced April 2027 — not published as of asOf; 2026–27 used as current published schedule).',
    costDetail: 'Mandatory fees reference: $196. Graduate Student Activity Fee $73/semester × 2 (Fall+Spring, 7+ credits) + Initial BC ID Card $50 = $196. Summer term with <7 credits may add $42 activity fee (not assumed). Medical Insurance $4,723 (Fall $2,083 + Spring $2,604) separate / waivable with comparable coverage. Full-time MSF: 10 courses / 30 credits / ~12 months. Regular Finance track Fall (Aug) entry only; Quantitative Finance track is STEM-designated and offers Fall Aug 2027 and Spring Jan 2027 entry. Same published per-credit tuition applies to both tracks; merit funding page does not limit awards to STEM/Quant track. Fall 2027 students will be billed on the AY rate in force when enrolled (2027–28 rates typically announced April 2027 — not published as of asOf; 2026–27 used as current published schedule). Living cost band from official COA: $28,928 (Carroll Tuition & Aid 2026–27 nine-month estimates: Housing $17,204 + Food $5,973 + Transportation $1,800 + Personal $2,651 + Books and Supplies $1,300 = $28,928 (excludes medical insurance).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-107.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-107.',
    livingCostBand: {
      low: 28928,
      high: null,
      basis: 'Carroll Tuition & Aid 2026–27 nine-month estimates: Housing $17,204 + Food $5,973 + Transportation $1,800 + Personal $2,651 + Books and Supplies $1,300 = $28,928 (excludes medical insurance).',
    },
    deadline: 'Fall 2027 — Round 1 · 2026-10-13',
    deadlineDate: '2026-10-13',
    asOf: '2026-10-26',
    scholarships: ["SCH-107"],
    sources: [
      ['MSF program / curriculum / deadlines', 'https://www.bc.edu/bc-web/schools/carroll-school/graduate/ms-programs/ms-in-finance.html'],
      ['Admission deadlines hub', 'https://www.bc.edu/bc-web/schools/carroll-school/graduate/admission.html'],
      ['Official tuition / budget', 'https://www.bc.edu/bc-web/schools/carroll-school/graduate/admission/tuition-and-aid.html'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['BC Student Services Tuition & Fees', 'https://www.bc.edu/offices/student-services/billing-student-accounts/tuition-fees.html'],
    ],
    programUrl: 'https://www.bc.edu/bc-web/schools/carroll-school/graduate/ms-programs/ms-in-finance.html',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Applicants must submit GMAT or GRE from within past five years. Full-time and part-time MSF applicants may request GMAT/GRE waiver consideration before completing application. GRE school code 3033. Class profile Fall 2026 avg GRE 319 (context only).",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT Exam or GMAT Focus accepted. School code 44x-J5-96. Waiver request available for FT and PT MSF. No preference between GMAT/GRE. Fall 2026 FT avg GMAT Focus 644 (context).",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "Non-U.S. citizens/PRs: TOEFL iBT traditional minimum 100; TOEFL iBT (New) minimum 5. Scores within past two years. MyBest not accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 7.5,
          "detail": "IELTS minimum 7.5. Also PTE 68; Duolingo 130."
        },
        "waiver": "Completed four-year bachelor's or two-year master's (or higher) entirely at English-medium institution (MOI on transcript or official letter); OR ≥2 years full-time post-degree work in U.S. or country where English is official language. No separate waiver form required if eligible."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA required (FAQ). Fall 2026 FT average undergrad GPA 3.58 (profile)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One required; up to three accepted. Academic (professors) or professional (supervisors/managers). Online recommendation forms."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required essay ≤500 words: past experiences, short- and long-term goals, why MSF at Boston College. Optional essay for uncovered aspects.",
        "alsoKnownAs": "Required essay"
      },
      "resume": {
        "status": "required",
        "detail": "Resume or CV outlining education and professional experience including part-time/internships with months and years; recommend 1–2 pages."
      },
      "transcripts": {
        "status": "required",
        "detail": "Four-year bachelor's (or equivalent) required. Self-reported transcript at application; official if admitted. Non-U.S.: English translation + third-party degree verification (SpanTran/TEC or WES) if admitted."
      },
      "interview": {
        "status": "not_used",
        "detail": "MSF application materials page does not list an interview. FAQ interview-by-invitation applies to Ph.D. programs, not MSF."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Reapplicants: contact Graduate Admissions before submitting for fee waiver (FAQ).",
        "detail": "Nonrefundable $100 USD."
      },
      "other": [
        "Quantitative Finance STEM track selected on enrollment form after admission (not separate application).",
        "Spring 2027 entry available for Quantitative Track only.",
        "Fifth-year BC undergrad pathway exists with separate requirements page."
      ],
      "advice": "International applicants strongly encouraged to apply by starred early deadlines for visa. Part-time not F-1 sponsored. Quant track STEM OPT extension path.",
      "sources": [
        [
          "MS in Finance (application & requirements)",
          "https://www.bc.edu/bc-web/schools/carroll-school/graduate/ms-programs/ms-in-finance.html"
        ],
        [
          "Graduate Admission FAQ",
          "https://www.bc.edu/bc-web/schools/carroll-school/graduate/admission/graduate-admission-faq.html"
        ],
        [
          "Admission deadlines hub",
          "https://www.bc.edu/bc-web/schools/carroll-school/graduate/admission.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cgu-msf': {
    academic: 'CGU Drucker MSF: STEM, 32 units/~1 yr. Spring/Fall primary starts. Fall 2027 priority Feb 1 / intl final Jun 1 / dom Aug 1. Est. tuition 32×$2,070=$66,240 (2025–26 rates).',
    orientation: 'Fall/Spring (+ summer TBD) · ~1 year · STEM · TFE #18 (2026)',
    duration: 'About 1 year full-time (two semesters possible).',
    tracks: ["Full-time in-person MSF","CFA Affiliated University curriculum","Asset Management Practicum"],
    coreNotes: 'STEM-designated (OPT up to 36 months stated). AACSB. GMAT/GRE required with waivers. Interview required. $80 app fee. Financial accounting prerequisite.',
    credits: '32 units',
    stem: true,
    stemNote: null,
    summerStart: true,
    tuition: 66240,
    tuitionAlt: null,
    tuitionLabel: 'Estimated program tuition — 32 units × $2,070/unit (2025–26 published rate; 2026–27 rate not posted as of asOf)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 · 2025–26 unit rate on program page (covers Summer 2025–Spring 2026). Fall 2027 intake will use later AY rates — not locked.',
    costNote: 'SUMMER START. Drucker School MS in Finance; STEM; 32 units; ~1 year full-time; starts Spring, Summer, or Fall (Fall 2027 classes begin Aug 30, 2027). Same per-unit rate for CA resident / nonresident / international. Tuition figure is 32×$2,070 using 2025–26 published rate marked on program page — do not treat as locked Fall 2027 sticker.',
    costDetail: 'Mandatory fees reference: $2,490. Student Fee $245 + Technology Fee $150 = $395/semester × 2 semesters = $790. International Student Services Fee (F-1): $802 fall + $898 spring = $1,700 (2025–26; covers annual accident/sickness plan + admin). Total fees shown $2,490 for two-semester full-time path. 2026–27 fees not separately published as of asOf. Drucker School MS in Finance; STEM; 32 units; ~1 year full-time; starts Spring, Summer, or Fall (Fall 2027 classes begin Aug 30, 2027). Same per-unit rate for CA resident / nonresident / international. Tuition figure is 32×$2,070 using 2025–26 published rate marked on program page — do not treat as locked Fall 2027 sticker. Living cost band from official COA: $25,000 (CGU International Students Estimated Annual Cost of Attendance (affidavit PDF, revised 2/2026): Living Expenses $25,000 for CGU Programs. Financial Aid COA 2025–26 also budgets Housing $12,500 + Personal $2,500 + Transportation $2,500 per semester for full unit loads.). SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-109.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-109.',
    livingCostBand: {
      low: 25000,
      high: null,
      basis: 'CGU International Students Estimated Annual Cost of Attendance (affidavit PDF, revised 2/2026): Living Expenses $25,000 for CGU Programs. Financial Aid COA 2025–26 also budgets Housing $12,500 + Personal $2,500 + Transportation $2,500 per semester for full unit loads.',
    },
    deadline: 'Fall 2027 — Priority · 2027-02-01',
    deadlineDate: '2027-02-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-109"],
    sources: [
      ['Official tuition / budget', 'https://www.cgu.edu/academics/program/ms-finance/'],
      ['Drucker 2027 deadlines news (apps open)', 'https://www.cgu.edu/news/2026/08/drucker-school-application-deadlines-for-2027-how-to-apply/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['CGU Tuition & Fees', 'https://www.cgu.edu/admissions/cost-aid/tuition-fees/'],
      ['CGU Financial Aid & Fellowships', 'https://www.cgu.edu/admissions/cost-aid/financial-aid-fellowships/'],
      ['CGU Intl Cost of Attendance / Affidavit (rev 2/2026)', 'https://my.cgu.edu/international-services/wp-content/uploads/sites/6/2026/02/CGU-International-Students-Cost-of-Attendance_2026.pdf'],
    ],
    programUrl: 'https://www.cgu.edu/academics/program/ms-finance/',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE or GMAT required (waivers available). Scores within past five years. ETS/GRE code 4053. Waiver paths include business bachelor's from AACSB/EQUIS school; BS in finance/accounting/business analytics/STEM; ≥4 units stats/calculus B+ or better; certain professional licenses; 5+ years quantitative work; partner-institution alumni — email admissions@cgu.edu when application started.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE required with same waiver policy. GMAT code DZK-QS-08.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 95,
          "detail": "Non-native English speakers: TOEFL minimum 95 (old scale) / 5 (new score scale) for direct entry. Code 4053. Lower scores may enter via International Scholars Program (TOEFL 75/4)."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS 7.0 with no sub-score less than 6.5 for direct entry. Also PTE 66; Duolingo 125 for direct entry."
        },
        "waiver": "Citizens/PRs of English sole-official-language countries; degree from U.S. or those countries; recent U.S. academic English pre-master's/bridge; or degree where English is a primary language of instruction for majority of courses with documentation."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No GPA minimum published on MSF page or Drucker 2027 how-to-apply news (Associate Dean: no score cutoffs / no GPA minimums)."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Optional. If submitting, recommender emails letter to admissions@cgu.edu with applicant full name. News post: no longer required."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Applicant questionnaire: five short responses ≤100 words each (motivation; goals; alignment with Drucker ideals; contribution; biggest challenge). Upload to status page after online application.",
        "alsoKnownAs": "Applicant questionnaire"
      },
      "resume": {
        "status": "required",
        "detail": "Up-to-date resume required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Sealed official transcript from every undergrad/grad institution that granted a degree; electronic to admissions@cgu.edu OK. Unofficial for review; official upon admission. Bachelor's from regionally accredited college required."
      },
      "interview": {
        "status": "required",
        "detail": "Required for admission upon review of application; decision not issued until interview complete. Drucker news: every applicant who completes an application is interviewed."
      },
      "applicationFee": {
        "amountUsd": 80,
        "waivers": "",
        "detail": "$80 non-refundable (university requirements on MSF page)."
      },
      "other": [
        "Prerequisite: Financial Accounting (coursework B or better at accredited institution or approved equivalent) before entering.",
        "Fall 2027: priority Feb 1, 2027; international final June 1, 2027 (program page) / June 5, 2027 (Drucker news table — slight date conflict; verify closer to cycle).",
        "STEM designated."
      ],
      "advice": "International final deadline earlier than domestic for visa. Reach out to Drucker recruiters early; interview is mandatory after complete file.",
      "sources": [
        [
          "MS Finance program / application guidelines",
          "https://www.cgu.edu/academics/program/ms-finance/"
        ],
        [
          "Drucker 2027 deadlines how to apply",
          "https://www.cgu.edu/news/2026/08/drucker-school-application-deadlines-for-2027-how-to-apply/"
        ],
        [
          "CGU International Applicants (English mins)",
          "https://www.cgu.edu/admissions/international-applicants/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'illinois-msf': {
    academic: 'Illinois Gies MSF: STEM, ~3 semesters / 40 cr. Fall 2027 rounds Oct 28’26–Jun 9’27 (intl final May 5). Est. intl tuition+fees $76,443 / resident $57,846 (2026–27 3-sem).',
    orientation: 'Fall or Spring · ~15 months / 40 cr · STEM · TFE #19 (2026)',
    duration: '3 standard semesters (~15 months typical for Fall start).',
    tracks: ["Asset Management specialization","Corporate Finance specialization","Data Analytics and Fintech specialization","Quantitative Finance specialization","Finance Research specialization","Concentrations: Accountancy; Data Analytics in Finance; Quantitative Finance","UIUC Fast Track / Accelerated pathways for current Illinois undergrads"],
    coreNotes: 'STEM-designated (up to 36 months OPT stated). GMAT/GRE optional. $90 app fee. Video essays required.',
    credits: 'Minimum 40 graduate credit hours (at least 28 in Finance)',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 67800,
    tuitionAlt: 57846,
    tuitionLabel: 'Gies MSF international tuition total — 3 semesters × $22,600 (2026–27 estimates)',
    tuitionAltLabel: 'US resident tuition+campus fees estimate — 3 semesters (2026–27 rates)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 estimates (table shows Fall \'26 / Spring \'27 / Fall \'27 sequence for Fall 2026 cohort). Fall 2027 entrants: analogous 3-semester sequence; later-term rates may change — tuition guarantee locks entering-cohort rate once enrolled.',
    costNote: 'MSF assessed per semester (not per credit), up to 20 credits/semester. US resident 3-semester total tuition+fees $57,846 (tuition $49,437 + fees $8,409). International total tuition+fees $76,443. Open external admits (not a UF/TAMU-style combination). Fall 2027 intake context.',
    costDetail: 'Alternate format: US resident tuition+campus fees estimate — 3 semesters (2026–27 rates) $57,846. Mandatory fees reference: $8,643. Campus fees international $2,881 × 3 semesters = $8,643 (2026–27 estimates on Gies MSF tuition page). Non-refundable deposit $1,750 credited to tuition after 10th day of first semester. MSF assessed per semester (not per credit), up to 20 credits/semester. US resident 3-semester total tuition+fees $57,846 (tuition $49,437 + fees $8,409). International total tuition+fees $76,443. Open external admits (not a UF/TAMU-style combination). Living cost band from official COA: $21,402–$29,705 (Registrar 2026–27 Grad additional expenses (intl): Food & Housing $16,512 + Books & Supplies $1,800 + Other $3,090 = $21,402 per academic year. Gies MSF domestic COA PDF lists Additional Expenses $9,935/semester (Food & Housing $7,490 + Books $900 + Other $1,545) → ×3 semesters = $29,705 (lifestyle-dependent).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-110.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-110.',
    livingCostBand: {
      low: 21402,
      high: 29705,
      basis: 'Registrar 2026–27 Grad additional expenses (intl): Food & Housing $16,512 + Books & Supplies $1,800 + Other $3,090 = $21,402 per academic year. Gies MSF domestic COA PDF lists Additional Expenses $9,935/semester (Food & Housing $7,490 + Books $900 + Other $1,545) → ×3 semesters = $29,705 (lifestyle-dependent).',
    },
    deadline: 'Fall 2027 — Round 1 · 2026-10-28',
    deadlineDate: '2026-10-28',
    asOf: '2026-10-26',
    scholarships: ["SCH-110"],
    sources: [
      ['Program hub / STEM', 'https://giesbusiness.illinois.edu/msf'],
      ['Admissions / deadlines', 'https://giesbusiness.illinois.edu/msf/admissions'],
      ['Official tuition / budget', 'https://giesbusiness.illinois.edu/msf/tuition'],
      ['Curriculum / credits', 'https://giesbusiness.illinois.edu/msf/curriculum'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Gies MSF Estimated COA PDF (domestic 26–27)', 'https://giesbusiness.illinois.edu/docs/default-source/default-document-library/estimated-cost-of-attendance---gies-msf-domestic-26-27-(1).pdf?sfvrsn=787204dc_2'],
      ['Illinois Registrar 26/27 Grad Additional Expenses', 'https://www.registrar.illinois.edu/tuition-fees/tuition-fee-rates/tf-rates-academic-year/g-additional-expenses-2627/'],
    ],
    programUrl: 'https://giesbusiness.illinois.edu/msf',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE optional. Committee may request official scores if unable to decide from submitted materials. Institution code 1836. Upload unofficial score to portal while awaiting official.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional; same policy as GRE. Official to UIUC code 1836.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 103,
          "detail": "Non-native speakers without Graduate College exemption: Full-status TOEFL iBT 103 (scores prior to 1/21/26) or 5.0 (scores after 1/20/26). Limited-status: 79 / 4.0. Official scores required; dated after Aug 1, 2025. Code 1836."
        },
        "ielts": {
          "status": "required",
          "minScore": 7.5,
          "detail": "Full-status IELTS Academic 7.5; limited-status 6.5. Also Duolingo full 135 / limited 115."
        },
        "waiver": "Graduate College English proficiency exemptions apply (see Grad College English Proficiency Requirements). Limited-status admits take English Placement Test on arrival; may require ESL coursework."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Illinois Graduate College minimum: GPA 3.0 (A=4.0) for last two years of undergraduate study. Programs may require higher; MSF page does not state a higher floor. Optional essay strongly recommended if GPA ≤3.0."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two references from academic and/or professional sources; signed and dated. Late LORs (>7 days after deadline) move application to next round."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Academic Statement of Purpose 300–500 words total (background prep; how program helps goals; academic interests). Plus two short personal statements ≤250 words each.",
        "alsoKnownAs": "Academic Statement of Purpose + personal statements"
      },
      "resume": {
        "status": "required",
        "detail": "Professional résumé ≤2 pages (education, work, internships, training, associations, leadership)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Most recent unofficial transcripts with name, institution, legend/scale. Diploma/certificate of degree if bachelor's earned. Official upon arrival if admitted. Check Grad College country requirements for U.S. bachelor's equivalence."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Required video essay component (3 randomly assigned questions, ~3 minutes). Live interview by invitation only if materials insufficient; decisions may be made with or without interview."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "",
        "detail": "Non-refundable $90 for domestic and international. Cannot be processed without payment."
      },
      "other": [
        "Select program Finance → Finance - MS in Grad College portal.",
        "Optional essay available; scholarship acknowledgment in Financial Aid section for merit/need consideration.",
        "Passport/funding proof for internationals only after admission offer."
      ],
      "advice": "Fall 2027 Round 4 May 5, 2027 is final deadline for international applicants needing a new visa. Apply early for scholarship consideration.",
      "sources": [
        [
          "MSF Admissions",
          "https://giesbusiness.illinois.edu/msf/admissions"
        ],
        [
          "Illinois Graduate College minimum requirements",
          "https://grad.illinois.edu/admissions/graduate-admissions-minimum-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'tamu-msf': {
    academic: 'TAMU Mays MSF: TAMU-undergrad 4+1 only; May boot camps then FT year; 36 cr. Tuition via calculator (null flat). External Fall 2027 gap — related MS-QFIN may accept non-TAMU grads (verify deadlines).',
    orientation: 'TAMU combo + May boot camps · 36 cr · TFE #20 (2026) — external gap',
    duration: '36 credit hours; May Boot Camp A + summer self-study + August Boot Camp B, then fall/spring full-time graduate year (Sophomore Start spreads hours across undergrad years).',
    tracks: ["4+1 MS Finance — Texas A&M undergraduates only","Sophomore Start","Senior Start (May grads; limited seats)","PPIE 3+2 for ISEN undergrads","Related external-capable: MS Quantitative Finance (MS-QFIN / STEM to Stocks) — 36 hours; separate from classic MSF"],
    coreNotes: 'Classic MSF is combination/4+1 for enrolled TAMU undergrads only. Summer May start flag (boot camps). STEM designation for classic MSF not confirmed on fetched pages this pass (null). MS-QFIN is STEM-oriented quantitative pathway accepting non-TAMU grads per catalog.',
    credits: '36',
    stem: null,
    stemNote: null,
    summerStart: true,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'Tuition not yet verified',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 · No open external Fall 2027 sticker',
    costNote: 'SUMMER START. ACCESS RESTRICTED (TAMU undergrad 4+1 only; external/international N/A). CRITICAL ACCESS FLAG: Mays MS Finance is a 4+1 / combination pathway. Official page and catalog: All applicants must currently be enrolled as undergraduates at Texas A&M University (sophomore-start and senior-start tracks). Not an open external Fall 2027 MSF for HK/TW/PRC applicants. 36 credit hours, College Station in-person. External applicants seeking finance master\'s are pointed by Mays marketing to other programs (e.g., Master of Financial Management) — out of this MSF id scope.',
    costDetail: 'No flat MSF program sticker published for external admits. ISSS 2025 one Fall-or-Spring estimate lists MS Finance student total $38,188 including tuition/fees/insurance and living for one major term only — not a full-degree sticker; not used as Fall 2027 program total (missing ≠ invent multi-term sum). CRITICAL ACCESS FLAG: Mays MS Finance is a 4+1 / combination pathway. Official page and catalog: All applicants must currently be enrolled as undergraduates at Texas A&M University (sophomore-start and senior-start tracks). Not an open external Fall 2027 MSF for HK/TW/PRC applicants. 36 credit hours, College Station in-person. External applicants seeking finance master\'s are pointed by Mays marketing to other programs (e.g., Master of Financial Management) — out of this MSF id scope. May mini-mester boot camps follow admission for the TAMU 4+1 pathway (summer structure; not an open external autumn matriculation). Do not merge with tamu-qfin / MS Quantitative Finance. Current Texas A&M undergraduates only (sophomores/seniors) per Mays 4+1 MS Finance and TAMU catalog. SUMMER START — matriculation is not a standard autumn-only Fall intake.',
    funding: 'No verified program-tied scholarship for tamu-msf — Aggie 4+1 only, not open to external Fall 2027 admits (as of 2026-10-26).',
    fundingNotes: 'No verified program-tied scholarship for tamu-msf — Aggie 4+1 only, not open to external Fall 2027 admits (as of 2026-10-26).',
    livingCostBand: null,
    deadline: '2027–28 cycle opens · 2027-04-01 · TAMU undergrad 4+1 only (external / international N/A) · Rising sophomores / seniors only',
    deadlineDate: '2027-04-01',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Official tuition / budget', 'https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/'],
      ['Program details / May boot camps', 'https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/program-details/'],
      ['MS Quantitative Finance catalog (related)', 'https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/quantitative-finance-ms/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['TAMU Catalog MS in Finance', 'https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/ms/'],
    ],
    programUrl: 'https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/',
    accessRestricted: true,
    accessNote: 'Current Texas A&M undergraduates only (sophomores/seniors) per Mays 4+1 MS Finance and TAMU catalog.',
    availability: 'TAMU undergrad 4+1 only · external / international N/A',
    availabilityType: 'restricted',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Minimum 50th percentile on quantitative portion. Waived for those with GPA of 3.5 or higher in STEM, Business, or ECON majors. Program details: Sophomore Start also notes minimum 50th percentile GRE Q with minimum GPA 3.0 emphasis.",
        "minScore": null
      },
      "gmat": {
        "status": "unknown",
        "detail": "GMAT not mentioned on 4+1 MS Finance hub or program-details pages; GRE is the listed standardized test.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "Program restricted to current Texas A&M undergraduates; English proficiency exams not listed among admission requirements."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "Same — TAMU undergrad 4+1 pathway only."
        },
        "waiver": "N/A for eligible TAMU undergraduates (external/international N/A)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3.25,
        "scale": "4.0",
        "detail": "Minimum GPA 3.25 overall; 3.5 for FINC majors (hub). Program-details Sophomore Start text also cites minimum GPA 3.0 with GRE Q ≥50th percentile — hub list is the primary published requirement set."
      },
      "lettersOfRecommendation": {
        "status": "not_stated",
        "count": null,
        "detail": "LOR not listed among published admission requirements on hub or program-details pages."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay required (listed on admission requirements).",
        "alsoKnownAs": "Essay"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcript required at application."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Program-details: Apply through April 15 to be interviewed in the spring semester. Not stated whether every applicant is interviewed."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "",
        "detail": "Application fee not stated on 4+1 MS Finance hub or program-details pages."
      },
      "other": [
        "RESTRICTED: all applicants must currently be enrolled as undergraduates at Texas A&M University (College Station).",
        "Attend information session (listed requirement).",
        "Prerequisites (B or better) due after admission by end of spring following application: ACCT 209/229/640 and ECON 202 or 203.",
        "Sophomore Start and Senior Start pathways; few spots for seniors (senior start needs ≥1 commercial internship)."
      ],
      "advice": "External and international applicants are not eligible for classic tamu-msf 4+1; see tamu-qfin for a separate open quantitative path. Pages currently emphasize Fall 2026 entry cycles; 2027–28 cycle opens Apr 1, 2027.",
      "sources": [
        [
          "4+1 MS Finance hub",
          "https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/"
        ],
        [
          "Program details",
          "https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/program-details/"
        ],
        [
          "TAMU catalog MS Finance",
          "https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/ms/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ohio-msf': {
    academic: 'OSU Fisher SMF: STEM, 36 cr/~16 mo, Autumn only (Aug 24 2027). Deadlines Dec 11’26 / Feb 19 / May 28 intl / Jul 19 dom. Est. NR/intl $68,093 / OH $47,093 (2026–27).',
    orientation: 'Autumn (Aug) · ~16 months · STEM · TFE #21 (2026)',
    duration: 'About 16 months / 3 semesters (36 credits; enables summer internship).',
    tracks: ["Corporate Finance / Investment Banking pathway","Investment Management pathway","Risk Management pathway","Real Estate pathway","Domestic students (autumn 2026+): optional online final semester"],
    coreNotes: 'STEM-designated. GMAT/GRE optional. Kira video interview required. $60 domestic / $70 intl app fee. Autumn term only.',
    credits: '36',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 68093,
    tuitionAlt: 47093,
    tuitionLabel: 'Fisher SMF non-resident and international estimated tuition and fees — 36 credit hours / 3 semesters (2026–27)',
    tuitionAltLabel: 'Ohio resident tuition+fees estimate — 36 credits / 3 semesters (2026–27)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 academic year estimates (subject to change for future terms)',
    costNote: 'Specialized Master in Finance (SMF); STEM; 16 months / 3 semesters; Autumn entry only (Autumn 2027 classes begin Aug 24, 2027). Ohio resident tuition and fees $47,093. Forever Buckeye / residency pathways may change classification for some students — not assumed for intl.',
    costDetail: 'Alternate format: Ohio resident tuition+fees estimate — 36 credits / 3 semesters (2026–27) $47,093. Published $68,093 already includes General Fee, Tuition & Instruction Fee, Student Activity Fee, Student Union Fee, Recreation Fee, Learning-Technology Fee, COTA Bus Fee. Student Health Insurance $4,108 (9 months) separate; international students cannot waive. Specialized Master in Finance (SMF); STEM; 16 months / 3 semesters; Autumn entry only (Autumn 2027 classes begin Aug 24, 2027). Ohio resident tuition and fees $47,093. Forever Buckeye / residency pathways may change classification for some students — not assumed for intl. Living cost band from official COA: $21,502 (Fisher SMF page Estimated Other Expenses (9 months): Housing, food & misc. $19,986 + Books and Supplies $1,516 = $21,502 (excludes Student Health Insurance $4,108). Program spans 16 months — summer/living beyond 9 months not itemized on page.).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-111, SCH-112.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-111, SCH-112.',
    livingCostBand: {
      low: 21502,
      high: null,
      basis: 'Fisher SMF page Estimated Other Expenses (9 months): Housing, food & misc. $19,986 + Books and Supplies $1,516 = $21,502 (excludes Student Health Insurance $4,108). Program spans 16 months — summer/living beyond 9 months not itemized on page.',
    },
    deadline: 'Priority 1 (merit aid) · 2026-12-11',
    deadlineDate: '2026-12-11',
    asOf: '2026-10-26',
    scholarships: ["SCH-111","SCH-112"],
    sources: [
      ['Program hub / STEM', 'https://fisher.osu.edu/graduate/smf'],
      ['Applying & deadlines', 'https://fisher.osu.edu/graduate/smf/admissions/applying-fisher'],
      ['Official tuition / budget', 'https://fisher.osu.edu/graduate/smf/admissions/tuition-funding'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
    ],
    programUrl: 'https://fisher.osu.edu/graduate/smf',
    id_alias_legacy: ["ohiostate-msf"],
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GMAT or GRE optional (no preference). Scores valid 5 years. From Oct 1, 2024 only GRE taken at an ETS testing center accepted (not at-home); valid at-home GRE before that date still accepted. Apply without scores by answering YES to the no-score question.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GMAT or GRE optional (no preference). Scores valid 5 years. Holistic review; test scores may strengthen application if submitted.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "TOEFL iBT or Home Edition minimum 79 (4.0 on updated TOEFL launched Jan 2026). MyBest not accepted. Official scores ≤2 years old. ETS code 1592."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic or Online minimum 7.0. One Skill Retake not accepted. Fisher international page lists 7.0 (university GPAdmissions general page lists 6.5)."
        },
        "waiver": "Exempt if citizen of, or bachelor’s+ from, listed English-speaking countries/territories (Fisher international applicants page / gpadmissions.osu.edu). Duolingo also accepted (min 120). Degree from U.S. university also commonly cited for TOEFL waiver in Fisher FAQs."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No numeric minimum GPA stated on SMF applying page. Four-year bachelor’s (or equivalent) required; OSU generally does not treat 3-year bachelor’s as equivalent."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Two references required (Admissions may contact). Formal letters of recommendation are optional; if supplied, recommenders email to FCOB-grad_apps@osu.edu with application ID. Apps may be reviewed before optional letters arrive."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Required essay: short- and long-term goals and how/why SMF helps achieve them. Recommended max 750 words. Optional supplemental essay (max ~500 words).",
        "alsoKnownAs": "Essay"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required; may exceed one page covering employment, extracurriculars, languages, military if applicable."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts from each undergrad/grad institution where credit earned (scanned official for review; verified electronic to GPADOCS@osu.edu or mailed). International: original language + certified English translation."
      },
      "interview": {
        "status": "required",
        "detail": "Required Kira online recorded video interview for every applicant; application not reviewed until complete. Live interviews on a need-basis only."
      },
      "applicationFee": {
        "amountUsd": 60,
        "waivers": "International applicants pay $70.",
        "detail": "Nonrefundable $60 USD domestic (U.S. citizens/permanent residents/asylees); $70 international. Paid by credit card with online application."
      },
      "other": [
        "No prerequisite courses; no post-undergrad work experience required (~75% of admits have <1 year).",
        "Quantitative aptitude valued via coursework or GMAT/GRE.",
        "AI policy: original voice required; limited AI for proofreading/brainstorming with disclosure; AI-generated content may disqualify.",
        "Autumn 2027 application open; rolling review; priority/final deadlines posted on applying page."
      ],
      "advice": "Complete Kira video early; optional GMAT/GRE can help if quant background is thin. Apply early for merit aid (Priority 1 Dec 11, 2026).",
      "sources": [
        [
          "Applying & deadlines",
          "https://fisher.osu.edu/graduate/smf/admissions/applying-fisher"
        ],
        [
          "International applicants / English minima",
          "https://fisher.osu.edu/graduate/international-applicants"
        ],
        [
          "Program hub",
          "https://fisher.osu.edu/graduate/smf"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'msu-msf': {
    academic: 'MSU Broad MS Finance: STEM (news), ~30 cr/~12 mo. Indexed deadlines Feb 1 / Mar 1 (years for 2027 entry). Indexed tuition 2026–27 $51k OOS / $46.5k in-state. VERIFY — Incapsula blocked live scrape.',
    orientation: 'Fall · ~12 months / 30 cr · STEM · TFE #22 (2026) — verify live',
    duration: '~12 months full-time (typical; confirm on program page).',
    tracks: ["Full-time in-person MS Finance"],
    coreNotes: 'STEM-designated (Broad news: two master’s programs earned STEM designation includes Finance). Live page scrape blocked — STEM/curriculum details should be re-confirmed on site.',
    credits: '30',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 51000,
    tuitionAlt: 46500,
    tuitionLabel: 'Broad MSF out-of-state / international block tuition and departmental fees total (2026–27 AY)',
    tuitionAltLabel: 'In-state program tuition 2026–27 (indexed tuition page)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 academic year (as stated on Broad MSF program page)',
    costNote: 'STEM; 30 credits; 12 months full-time on-campus only. Tuition page (broad.msu.edu/masters/finance/tuition/) was Incapsula-blocked to WebFetch/curl during research; dollar figures taken from live program overview page which publishes the same 2026–27 block amounts. 40% non-sponsored financial-support claim sourced from Wayback snapshot of the tuition page (archive 2026-05-18 still showed prior-year stickers $49,500/$45,000 but same 40% language). Open external admits. Fall 2027 intake context.',
    costDetail: 'Alternate format: In-state program tuition 2026–27 (indexed tuition page) $46,500. Published $51,000 (OOS) / $46,500 (in-state) covers tuition charges for credits and departmental fees. Does not cover additional university fees, textbooks, course materials, or laptop (per tuition-page language mirrored on program overview and Wayback snapshot). Billed in three equal installments at start of each semester. STEM; 30 credits; 12 months full-time on-campus only. Tuition page (broad.msu.edu/masters/finance/tuition/) was Incapsula-blocked to WebFetch/curl during research; dollar figures taken from live program overview page which publishes the same 2026–27 block amounts. 40% non-sponsored financial-support claim sourced from Wayback snapshot of the tuition page (archive 2026-05-18 still showed prior-year stickers $49,500/$45,000 but same 40% language). Open external admits.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-113.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-113.',
    livingCostBand: null,
    deadline: 'Round 1 · 2027-02-01 · Month/day from indexed Broad admissions page; year assigned for Fall 2027 entry — verify on live page',
    deadlineDate: '2027-02-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-113"],
    sources: [
      ['Official tuition / budget', 'https://broad.msu.edu/masters/finance/'],
      ['Admissions (indexed)', 'https://broad.msu.edu/masters/finance/admissions/'],
      ['Tuition (indexed)', 'https://broad.msu.edu/masters/finance/tuition/'],
      ['STEM designation news', 'https://broad.msu.edu/news/two-broad-masters-programs-earn-stem-designation/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Wayback Broad MSF Tuition page', 'https://web.archive.org/web/20260518190554/https://broad.msu.edu/masters/finance/tuition/'],
    ],
    programUrl: 'https://broad.msu.edu/masters/finance/',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE minimum 310 verbal+quantitative combined, or GMAT. Scores <5 years old. Waiver may be requested at application; current MSU undergrads in good academic standing eligible to waive.",
        "minScore": 310
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT minimum 600 (code QH0-5P-69) or GRE. Waiver may be requested; current MSU undergrads in good standing eligible to waive.",
        "minScore": 600
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "International: TOEFL iBT minimum 100 (paper 600 / computer 250). School code 1465, dept 4102. Lower/no scores may allow provisional admission per university rules."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS band minimum 7."
        },
        "waiver": "Not detailed beyond provisional admission language for lower/missing scores; confirm with program."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Four-year undergrad degree with cumulative GPA 3.0 or higher expected."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required; at least one desirably from a faculty member (course or research). Address listed on admissions page for mailed letters."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of objectives included in overall record review (cited under Admission Criteria).",
        "alsoKnownAs": "Statement of objectives"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not listed in Application Requirements checklist on MS Finance admissions page (work experience is an admission criterion)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scanned transcripts and degree certificates in online application; original/certified required if recommended for admission."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not mentioned on MS Finance admissions page."
      },
      "applicationFee": {
        "amountUsd": 50,
        "waivers": "",
        "detail": "$50 due at application submission."
      },
      "other": [
        "At least two years full-time post-bachelor work experience normally expected; waivable for exceptional candidates.",
        "Prerequisites: equivalents of MTH 124 Survey of Calculus I and STT 315 Intro Probability and Statistics for Business.",
        "Major code 6016, Major: Finance.",
        "Working knowledge of Internet, word processing, spreadsheets."
      ],
      "advice": "Incapsula often blocks automated fetches of broad.msu.edu — verify live page before applying. Request GMAT/GRE waiver only if clearly eligible.",
      "sources": [
        [
          "Admissions (official)",
          "https://broad.msu.edu/masters/finance/admissions/"
        ],
        [
          "Program hub",
          "https://broad.msu.edu/masters/finance/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'auburn-msf': {
    academic: 'Auburn Harbert MSF: fall only; 30–31 cr; STEM not stated. Deadlines Apr 1 intl / Jun 1 dom (years for entry year). Tuition per-credit 2026–27 $643 AL / $1,975 NR + $241/cr professional — no flat total.',
    orientation: 'Fall only · 30–31 cr · STEM unstated · TFE #23 (2026)',
    duration: 'Full-time on-campus (fall admit); online modality also offered (separate page). Exact months not stated as a single figure on hub — typically multi-semester.',
    tracks: ["Full-time on-campus","Online MS Finance","MBA dual option"],
    coreNotes: 'STEM designation not stated on fetched Harbert MSF pages — stem null. GMAT/GRE with experience/GPA waivers. Fall only for on-campus.',
    credits: '30 (curriculum page) / 31 (admissions page) — verify',
    stem: null,
    stemNote: null,
    summerStart: false,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'Tuition not yet verified',
    tuitionAltLabel: null,
    tuitionEstimate: 35550,
    tuitionEstimateLabel: 'Estimate only: non-resident graduate tuition for 30-credit non-thesis MSF assuming two semesters at ≥9 credits each — 2 × ($1,975 × 9) = $35,550. NOT a published flat program sticker.',
    period: '2026–27 per-credit / fee schedule (no flat MSF sticker)',
    costNote: 'Open Fall-only on-campus admits (also online modality). Bulletin non-thesis = 30 hours (admissions page text said 31 — use bulletin/curriculum 30). No published flat program tuition. Resident estimate 2 × ($643 × 9) = $11,574 tuition + same professional/services structure. Financial assistance page points to loans via Office of Financial Aid — no verified open applicant-facing merit SCH amounts. Fall 2027 intake context.',
    costDetail: 'Estimate only: non-resident graduate tuition for 30-credit non-thesis MSF assuming two semesters at ≥9 credits each — 2 × ($1,975 × 9) = $35,550. NOT a published flat program sticker.: $35,550. Estimate components (2026–27): College of Business Graduate professional fee $241/credit × 30 = $7,230; Student Services Fee $1,002 × 2 semesters = $2,004; Confirmation Fee $450 one-time; Graduation Fee $40 one-time → ≈ $9,724. Actual semester count / credit load changes fees. Alabama resident credit tuition $643/cr (capped at 9 hrs). Open Fall-only on-campus admits (also online modality). Bulletin non-thesis = 30 hours (admissions page text said 31 — use bulletin/curriculum 30). No published flat program tuition. Resident estimate 2 × ($643 × 9) = $11,574 tuition + same professional/services structure. Financial assistance page points to loans via Office of Financial Aid — no verified open applicant-facing merit SCH amounts.',
    funding: 'No verified open applicant-facing merit scholarship for auburn-msf (as of 2026-10-26). Loans pointer only; no SCH card.',
    fundingNotes: 'No verified open applicant-facing merit scholarship for auburn-msf (as of 2026-10-26). Loans pointer only; no SCH card.',
    livingCostBand: null,
    deadline: 'Fall — International · April 1 (year not labeled on table — use April 1 of entry year, e.g. 2027-04-01 for Fall 2027)',
    deadlineDate: null,
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Program hub', 'https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/'],
      ['Admissions / deadlines / 31 cr', 'https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/admissions.html'],
      ['Curriculum / 30 cr', 'https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/curriculum.html'],
      ['Official tuition / budget', 'https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/tuition-financial-assistance.html'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Auburn Bulletin Basic Charges (eff. Fall 2026)', 'https://bulletin.auburn.edu/generalinformation/financialinformation/basicchargesrevisedmay/'],
      ['Auburn Bulletin MS Finance', 'https://bulletin.auburn.edu/thegraduateschool/graduatedegreesoffered/finance_ms/'],
    ],
    programUrl: 'https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Official GMAT (preferred) or GRE required unless waiver granted. Waiver: bachelor’s from regionally accredited institution plus (2+ yrs exp & 3.50+ GPA) OR (4+ yrs & 3.25+) OR (6+ yrs & 3.0+) OR (8+ yrs) OR terminal degree. Case-by-case additional waivers. Waiver ≠ admission.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "Official GMAT preferred or GRE, unless waiver (same criteria as GRE). Online waiver request available; advisor appointment advised.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "International: TOEFL iBT 79+ with ≥16 each section (pre-Jan 21, 2026); after Jan 21, 2026 iBT26 total 4.5+ with ≥4.0 each section. ETS code 1005. DET also accepted (115+ with 110+ sections)."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS overall band 6.5 or higher."
        },
        "waiver": "Prior degree from regionally accredited U.S. institution may remove English score requirement once official transcript with degree received; other exemptions case-by-case after official transcript."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 2.75,
        "scale": "4.0",
        "detail": "MSF program page states bachelor’s required but no program-specific GPA floor. Auburn Graduate School typically expects ≥2.75 undergrad GPA (or ≥3.0 grad GPA or acceptable GRE/GMAT). Competitive admission; class size limited."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters of recommendation on checklist."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal Statement required on application checklist.",
        "alsoKnownAs": "Personal Statement"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official undergraduate university transcript(s). International: original language + certified English translation; diploma/certificate."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MS Finance admissions checklist."
      },
      "applicationFee": {
        "amountUsd": 60,
        "waivers": "Active military: Graduate School application fee waiver with confirmation letter. International pay $70.",
        "detail": "Graduate School: $60 domestic / $70 international (nonrefundable), paid online with application."
      },
      "other": [
        "Bachelor’s from recognized university/college required.",
        "Apply via Graduate School as Finance (Non-Thesis); fall admit only; 31 credit hours non-thesis.",
        "Duolingo English Test accepted for internationals."
      ],
      "advice": "If seeking GMAT/GRE waiver, schedule admissions advisor appointment before submitting waiver. International deadline earlier (Apr 1) than domestic (Jun 1).",
      "sources": [
        [
          "MS Finance admissions",
          "https://harbert.auburn.edu/degrees-programs/graduate/ms-finance/admissions.html"
        ],
        [
          "Graduate School international instructions",
          "https://graduate.auburn.edu/admissions/international-instructions.php"
        ],
        [
          "Graduate School bulletin admissions",
          "https://bulletin.auburn.edu/thegraduateschool/admissions/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'ucsd-msf': {
    academic: 'UCSD Rady MQF (ex-MFin): STEM, 52 units, 12–15 mo. Fall 2027 rounds Oct 15’26–Jul 15’27 (intl Round 4 Jun 1). Program tuition Fall 2026 cohort $88,036 (+ ~$9.4k/yr campus fees); Fall 2027 rate TBD.',
    orientation: 'Fall · 12–15 months / 52 u · STEM · TFE #24 (2026)',
    duration: '12 or 15 months; minimum 52 credit units; fees billed quarterly.',
    tracks: ["Master of Quantitative Finance (STEM)"],
    coreNotes: 'Official title is MQF (renamed from MFin). STEM-designated. GRE/GMAT required (waiver criteria for some U.S. quantitative bachelor’s). Interview required (async). $150 app fee. Strong quantitative prerequisites (calculus required; linear algebra recommended).',
    credits: '52 units',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 83876,
    tuitionAlt: null,
    tuitionLabel: 'Rady Master of Quantitative Finance (MQF; formerly Master of Finance) Fall 2025 cohort tuition — 52 units × $1,613/unit. PROXY for Fall 2027 — Fall 2026/2027 cohort rates not published as of asOf.',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 proxy (Fall 2025 cohort schedule on TritonLink (updated Mar 2026). Fall 2027 entering cohort rates NOT published — labeled proxy only.)',
    costNote: 'Catalog id ucsd-msf maps to Rady finance master\'s now branded Master of Quantitative Finance (MQF); prior Master of Finance (MFin) name superseded. Self-supported; STEM-oriented quant curriculum; 52 units; billed quarterly. Deposit $1,500. QuantNet-adjacent but kept on TFE MSF slate per brief. Exclude deeper MFE/MSCF-style programs — this is the TFE #24 Rady entry. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $8,483. TritonLink 2025–26 Rady MQF campus/registration fees for Fall+Winter+Spring (excl. per-unit tuition) ≈ $8,483.44 including Student Services Fee, campus fees, SHIP $5,820, Rady Activity Fee, Document Fee $100. Program is 12 or 15 months — Summer quarter fees additional and not fully itemized in the F/W/S annual table. Intl Student Visa Fee $150 one-time separate. Catalog id ucsd-msf maps to Rady finance master\'s now branded Master of Quantitative Finance (MQF); prior Master of Finance (MFin) name superseded. Self-supported; STEM-oriented quant curriculum; 52 units; billed quarterly. Deposit $1,500. QuantNet-adjacent but kept on TFE MSF slate per brief. Exclude deeper MFE/MSCF-style programs — this is the TFE #24 Rady entry. Brief dossier records a separate Fall 2026 cohort proxy of $88,036 (52 × $1,693/unit). Catalog tuition uses the aid Fall 2025 cohort proxy $83,876 (52 × $1,613/unit). Fall 2027 entering-cohort rate is unpublished.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-114.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-114.',
    livingCostBand: null,
    deadline: 'Round 1 · 2026-10-15',
    deadlineDate: '2026-10-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-114"],
    sources: [
      ['Official tuition / budget', 'https://students.ucsd.edu/finances/fees/registration/previous/2025-26/rady.html'],
      ['MQF program hub', 'https://rady.ucsd.edu/programs/master-quantitative-finance/'],
      ['Admissions / deadlines', 'https://rady.ucsd.edu/programs/master-quantitative-finance/admissions/'],
      ['Tuition & aid (points to TritonLink)', 'https://rady.ucsd.edu/programs/master-quantitative-finance/tuition-aid.html'],
      ['Official tuition / budget', 'https://students.ucsd.edu/finances/fees/registration/2026-27/rady.html'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Rady Fellowships', 'https://rady.ucsd.edu/programs/fellowships/'],
    ],
    programUrl: 'https://rady.ucsd.edu/programs/master-quantitative-finance/',
    id_alias_legacy: ["ucsd-rady-msf"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GRE or GMAT required; application incomplete until scores verified. GRE code 4836. Waiver consideration if: bachelor’s from accredited U.S. university physically in U.S.; quantitative major; college Calculus with A/B (not Pass); cumulative GPA ≥3.00/4.00 (below 3.00 exceptional only). Request to MQF@rady.ucsd.edu with transcripts+resume.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE required. GMAT code 3NS-ZK-27. Single-sitting GMAT considered; Superscore may be supplemental. Same U.S.-degree waiver criteria as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 85,
          "detail": "University-wide TOEFL iBT minimum 85 (new scale 4.5); Rady competitive scores above 100. Institution code 4836. MyBest not accepted. DET min 120; PTE Academic min 65 also accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic Band 7 minimum. Official results from test center to Rady/UCSD."
        },
        "waiver": "Exempt if bachelor’s/master’s/doctoral with grades B (3.0)+ from regionally accredited U.S. institution with English sole instruction, or foreign institution listed in WHED as English sole language of instruction. No other documentation substitutes for WHED."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3,
        "scale": "4.0",
        "detail": "No hard MQF GPA floor stated for admission; GRE/GMAT waiver requires ≥3.00 cumulative undergrad GPA. Calculus (B+) required background; Linear Algebra (B+) highly recommended."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Recommendations not required; applicants without one not disadvantaged. Optional if recommender adds meaningful context."
      },
      "statementOfPurpose": {
        "status": "optional",
        "detail": "Statement of Purpose optional; ≤500 words, double-spaced, 12-pt. Why good MQF candidate and how Rady features benefit career; other academic/personal info welcome.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Up-to-date resume/CV; highlight quantitative/technical prep, coursework, MOOCs, research, programming, portfolios (e.g. GitHub), internships."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial PDF transcripts (front/back) in application; official after offer. International: certified English translation; admitted internationals must submit WES or TEC course-by-course evaluation after provisional admission."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Interviews required for admission and by invitation only; online asynchronous platform; live interview reserved in some cases. Reviewed 4–8 weeks after complete application."
      },
      "applicationFee": {
        "amountUsd": 150,
        "waivers": "",
        "detail": "$150 non-refundable for all applicants; credit card online or check (app held until check received)."
      },
      "other": [
        "Strong quant foundation required; high GRE/GMAT quant expected.",
        "Programming/stats experience favorably considered (Python, SAS, STATA, MatLab, R, etc.).",
        "Fall 2027 rounds posted on admissions page (R1 Oct 15, 2026 through R5 Jul 15, 2027 domestic)."
      ],
      "advice": "Do not rely on optional SoP/LOR alone if quant evidence is thin—submit strong GRE/GMAT unless clearly waiver-eligible. Round 4 is fellowship & international deadline.",
      "sources": [
        [
          "MQF admissions",
          "https://rady.ucsd.edu/programs/master-quantitative-finance/admissions/"
        ],
        [
          "MQF program hub",
          "https://rady.ucsd.edu/programs/master-quantitative-finance/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'iit-msf': {
    academic: 'IIT Stuart MS Finance: STEM, ≥30 cr, FT 12–15 mo. Fall priorities Jan 31 / Apr 15; intl outside US regular Jun 15. Tuition 2026–27 $1,925/cr ≈ $57,750.',
    orientation: 'Fall/Spring · 12–15 months · STEM · TFE #25 (2026)',
    duration: 'Full-time typically 12–15 months; part-time about 2 years.',
    tracks: ["Financial Technology","Portfolio Management","Risk Management","Corporate Finance and Valuation","Quantitative Modeling and Trading","Mathematical Finance","AMP Plus One (Illinois Tech undergrads)","Dual degrees (MBA / JD combinations available)"],
    coreNotes: 'STEM-designated; F-1 eligible. No GMAT/GRE required. Evening/Saturday downtown Chicago classes. Min 3.0 undergrad GPA stated.',
    credits: 'At least 30 semester credit hours (10 courses × 3)',
    stem: true,
    stemNote: null,
    summerStart: null,
    tuition: 57750,
    tuitionAlt: null,
    tuitionLabel: 'Estimated tuition — 30 credits × $1,925/credit (Stuart School of Business 2026–27)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27',
    costNote: 'STEM-designated MS Finance; ≥30 semester credit hours; F-1 eligible. Open external admits (AMP Plus One is Illinois Tech undergrad pathway, not a restriction on external MS admits). Fall 2027 priorities Jan 31 / Apr 15; intl outside US regular Jun 15. Same per-credit rate domestic/intl. SUMMER TERM UNCONFIRMED: the university graduate calendar lists a Summer term; Stuart MSF summer admits are not confirmed on the program page.',
    costDetail: 'Mandatory (2026–27 Stuart schedule): Activity Fee FT grad $125/semester; Student Service Fee new FT (entering Summer 2023+) $800 one-time; Opt-in U-Pass $155/semester; Health Insurance $2,510/year (billed Fall; waivable with comparable coverage). App fee $100; deposit $300. Semester count depends on FT pace (typically 12–15 months) — do not invent multi-semester fee total. STEM-designated MS Finance; ≥30 semester credit hours; F-1 eligible. Open external admits (AMP Plus One is Illinois Tech undergrad pathway, not a restriction on external MS admits). Fall 2027 priorities Jan 31 / Apr 15; intl outside US regular Jun 15. Same per-credit rate domestic/intl. SUMMER TERM UNCONFIRMED: the university graduate calendar lists a Summer term; Stuart MSF summer admits are not confirmed on the program page.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-116.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-116.',
    livingCostBand: null,
    deadline: 'Fall — Priority 1 · 2027-01-31 · Summer term unconfirmed for Stuart MSF',
    deadlineDate: '2027-01-31',
    asOf: '2026-10-26',
    scholarships: ["SCH-116"],
    sources: [
      ['Program hub / STEM / curriculum', 'https://www.iit.edu/academics/programs/finance-ms'],
      ['Official tuition / budget', 'https://www.iit.edu/admissions-aid/graduate-admission/admission-dates-and-deadlines'],
      ['Official tuition / budget', 'https://www.iit.edu/student-accounting/tuition-and-fees/current-tuition-and-fees/current-stuart-school-business'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Stuart Scholarships and Aid', 'https://www.iit.edu/stuart/admission-aid/scholarships-and-aid'],
      ['Graduate Student Scholarships', 'https://www.iit.edu/admissions-aid/tuition-and-aid/scholarships/graduate-student-scholarships'],
    ],
    programUrl: 'https://www.iit.edu/academics/programs/finance-ms',
    id_alias_legacy: ["illinois-tech-msf"],
    applicationRequirements: {
      "gre": {
        "status": "not_required",
        "detail": "Program page: No GMAT or GRE scores required. University graduate checklist: master’s applicants may optionally submit GRE.",
        "minScore": null
      },
      "gmat": {
        "status": "not_required",
        "detail": "Program page: No GMAT or GRE scores required.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 80,
          "detail": "International: TOEFL iBT 80+ (pre-Jan 21, 2026: 80 overall with 15 each subsection; on/after Jan 21, 2026: 4.5 overall with 4.5 each subsection). Conditional admission possible below minima."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS 6.5 overall with 6.0 each subsection. DET 115 overall (110 each subsection) also accepted."
        },
        "waiver": "Degree from listed English-speaking countries with ≥2 years attendance; intensive English (ELS 112 / NCUK EAP); or 60 semester hours at U.S. institution within last 36 months (per IIT English page pathways)."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Official transcripts with minimum cumulative undergrad GPA 3.0/4.0 for regular admission (program and university)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "Program page silent on LOR count; Illinois Tech graduate checklist: most master’s require one letter (up to three). Contact Graduate Admission to confirm Stuart MS Finance exact count."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One-page statement of purpose with goals and objectives (program page). University portal may also prompt short professional-statement questions (~150–200 words).",
        "alsoKnownAs": "Statement of purpose / Professional statement"
      },
      "resume": {
        "status": "required",
        "detail": "All Illinois Tech graduate applicants required to submit a résumé (university checklist)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcript submission; scan official PDFs of all post-secondary institutions; degree certificate if completed."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MS Finance program admissions requirements."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Current Illinois Tech students or alumni eligible for fee waiver via enrollment history on application.",
        "detail": "Graduate application fee $100 (credit card only); exceptions for Design/Law/IELP."
      },
      "other": [
        "Completed online application required.",
        "STEM-designated; on-campus Chicago.",
        "Catalog notes LORs strongly encouraged for master’s even where optional by unit—confirm Stuart expectation."
      ],
      "advice": "Program explicitly drops GRE/GMAT; emphasize quant coursework and SoP. Confirm whether Stuart requires the default 1 LOR.",
      "sources": [
        [
          "Finance MS program / admissions",
          "https://www.iit.edu/academics/programs/finance-ms"
        ],
        [
          "Graduate admission checklist",
          "https://www.iit.edu/admissions-aid/graduate-admission/domestic-students/admission-requirements-and-checklist"
        ],
        [
          "International English requirements",
          "https://www.iit.edu/admissions-aid/graduate-admission/international-students/admission-and-english-language-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'temple-msf': {
    academic: 'Temple Fox Financial Analysis MS: STEM, 30 cr, 10 or 22 mo FT. Fall open Aug 1; Dec 15 early / Mar 1 intl&scholarship / Jun 30 final. Est. tuition $34,950 + $750 fee (2026–27).',
    orientation: 'Fall (+ Aug academy) · 10 or 22 months · STEM · TFE #26 (2026)',
    duration: 'Full-time 10 or 22 months; part-time ~2 years.',
    tracks: ["Financial Analysis MS (STEM) — primary TFE match","Related Fox: Quantitative Finance MS; Financial and Quantitative Analysis MS","CFA University Affiliation (Levels I–III CBOK)"],
    coreNotes: 'STEM-designated. Official title is Financial Analysis MS (not plain \'MS in Finance\'). August Finance Academy kickoff then Fall I/II and Spring I/II modules. GMAT/GRE optional (required if GPA <3.0 per bulletin). $60 app fee. Prereqs: accounting, finance, micro/macro, statistics B or better.',
    credits: '30',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 34950,
    tuitionAlt: null,
    tuitionLabel: 'Estimated tuition — 30 credits × $1,165/credit (Fox specialized master’s 2026–27; PA and OOS same)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 credit rate (Temple Graduate Bulletin Cost and Aid)',
    costNote: 'Official title Master of Science in Financial Analysis (STEM) — TFE lists Temple MS Finance. Full-time 10 or 22 months; part-time ~2 years. August Finance Academy precedes fall modules. Open external/intl admits. Program marketing also listed $1,165 for 2025–26; bulletin 2026–27 confirms same specialized-master rate. Fall 2027 intake context. NON-AUTUMN: August Finance Academy kickoff before Fall modules (not a full summer-only matriculation).',
    costDetail: 'Mandatory fees reference: $750. One-time program fee $750 in term of admission (Graduate Bulletin footnote for Fox specialized master’s / MBA). Living separate. Official title Master of Science in Financial Analysis (STEM) — TFE lists Temple MS Finance. Full-time 10 or 22 months; part-time ~2 years. August Finance Academy precedes fall modules. Open external/intl admits. Program marketing also listed $1,165 for 2025–26; bulletin 2026–27 confirms same specialized-master rate. NON-AUTUMN: August Finance Academy kickoff before Fall modules (not a full summer-only matriculation).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-118.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-118.',
    livingCostBand: null,
    deadline: 'Early admissions · 2026-12-15',
    deadlineDate: '2026-12-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-118"],
    sources: [
      ['Program hub', 'https://www.temple.edu/academics/degree-programs/financial-analysis-ms-bu-fian-ms'],
      ['Admissions / deadlines', 'https://www.temple.edu/academics/degree-programs/financial-analysis-ms-bu-fian-ms/admissions'],
      ['Bulletin curriculum / STEM', 'https://bulletin.temple.edu/graduate/scd/fox/financial-analysis-ms/'],
      ['Official tuition / budget', 'https://bulletin.temple.edu/graduate/cost-aid/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Fox Grad Scholarships & Financial Aid', 'https://www.temple.edu/academics/schools-and-colleges/fox-school-of-business-and-management/fox-grad-scholarships-financial-aid'],
    ],
    programUrl: 'https://www.temple.edu/academics/degree-programs/financial-analysis-ms-bu-fian-ms',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Standardized test scores optional. If submitted, GRE code 2906; scores within last 5 years. Official scores from GRE or GMAT.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "Optional; GMAT code 72S3T52; within last 5 years if submitted.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "Required if no bachelor’s/graduate degree from a U.S. institution. Temple Graduate School minima: TOEFL iBT 79 (4.5 on/after Jan 21, 2026); PTE 53; Duolingo 110; LanguageCert 70. Fox program page does not state higher Fox-specific floors."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS Academic 6.5 (Temple Graduate School minimum)."
        },
        "waiver": "May be waived if undergrad/grad degree from a country where English is commonly used; admissions auto-reviews waiver eligibility from academic history. Also waived with U.S. bachelor’s/graduate degree."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Bachelor’s degree; should have minimum overall 3.0 GPA. Prerequisites: semester of statistics, finance, accounting, micro and macroeconomics. Quant background scrutinized."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 1,
        "detail": "One letter required; professional references from immediate supervisor preferred; academic acceptable. Enter contact in app; recommenders upload."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "One 500-word Statement of Goals covering past experiences/motivation, expected change, values/skills beyond academics, and career goals. Evaluated for content, clarity, professionalism.",
        "alsoKnownAs": "Statement of Goals"
      },
      "resume": {
        "status": "required",
        "detail": "Current résumé/CV detailing professional experience required regardless of employment status."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from each institution with credit; copies OK for review; officials required if admitted. Extra docs (marksheet/diploma) for non-U.S. institutions per Grad School guidelines."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Once complete, candidates invited to a virtual interview (invite only)."
      },
      "applicationFee": {
        "amountUsd": 60,
        "waivers": "",
        "detail": "$60 application fee after submitting Fox online application."
      },
      "other": [
        "Rolling admissions; Fall: opens Aug 1; early Dec 15; scholarship & international Mar 1; final Jun 30.",
        "Select Fox School of Business (FSOB) in portal."
      ],
      "advice": "Apply by Mar 1 for scholarship and international visa timing. Optional GMAT/GRE only if it strengthens a thin quant profile.",
      "sources": [
        [
          "Financial Analysis MS admissions",
          "https://www.temple.edu/academics/degree-programs/financial-analysis-ms-bu-fian-ms/admissions"
        ],
        [
          "Program hub",
          "https://www.temple.edu/academics/degree-programs/financial-analysis-ms-bu-fian-ms"
        ],
        [
          "Temple Grad School international documents / English minima",
          "https://grad.temple.edu/admissions/international-applicants/required-application-documents"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'lsu-msf': {
    academic: 'LSU Ourso MS Finance: 36 cr / 3 semesters; Fall+Spring admits. Grad School deadlines May 15 fall / Oct 15 spring. Tuition via LSU schedule (null flat). STEM not stated on MSF page.',
    orientation: 'Fall/Spring · 36 cr / ~3 sem · STEM unstated · TFE #27 (2026)',
    duration: '36-hour full-time three-semester program (~12 months typical).',
    tracks: ["Accounting focus","Actuarial Science focus","Corporate Finance focus","Economics focus","ISDS focus","Internal Audit focus","Investments focus","Statistics focus","Customized focus","Accelerated BS/MS (undergrad path)","JD/MS dual","Related: MS in Financial Economics (10 months) — separate degree"],
    coreNotes: 'STEM designation not stated on fetched MS Finance department page (stem null). Separate MS Financial Economics exists. Targets ~3.2 GPA / GMAT ≥600 (historical waiver language for high GPA). Small cohort (~25). Business core prereqs required.',
    credits: '36',
    stem: null,
    stemNote: null,
    summerStart: false,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'Tuition not yet verified',
    tuitionAltLabel: null,
    tuitionEstimate: 46311,
    tuitionEstimateLabel: 'Estimate only (NOT a published flat sticker): non-resident Tier 2 tuition+mandatory fees for 36 credits paced 12+12+12 as Fall 2026 $15,441.15 + Spring 2027 $15,429.15 + third major-term 12h using Fall 2026 NR Tier 2 $15,441.15 ≈ $46,311. Third Fall 2027 rate not published — proxy. Alternative Summer 2027 12h NR $9,843.25 (summer schedule is untiered) would yield ≈ $40,714 for Fall+Spring+Summer — pacing not locked on department page.',
    period: '2026–27 graduate tuition schedule (no flat MSF sticker)',
    costNote: 'On-campus Ourso MS Finance: 36-hour full-time three-semester program; Fall and Spring admits. Finance is Tier 2 differential tuition (LSU Differential Tuition FAQ). Separate LSU Online MS Finance ($970/cr × 36 = $34,920 marketed) is a different modality — out of this id’s primary sticker. Department page: We currently do not offer any assistantships for the masters program for the coming academic year. STEM not stated on MS Finance page (stem null). Open external admits (Accelerated BS/MS is undergrad path, not a restriction). Fall 2027 intake context. Non-resident Tier 2 tuition estimate (not a program sticker) is about $46,311.',
    costDetail: 'Estimate only (NOT a published flat sticker): non-resident Tier 2 tuition+mandatory fees for 36 credits paced 12+12+12 as Fall 2026 $15,441.15 + Spring 2027 $15,429.15 + third major-term 12h using Fall 2026 NR Tier 2 $15,441.15 ≈ $46,311. Third Fall 2027 rate not published — proxy. Alternative Summer 2027 12h NR $9,843.25 (summer schedule is untiered) would yield ≈ $40,714 for Fall+Spring+Summer — pacing not locked on department page.: $46,311. LSU graduate schedules already include mandatory fees in the published hour totals. No separate MSF program fee listed (MBA/DMAE professional fees do not apply to MS Finance). On-campus Ourso MS Finance: 36-hour full-time three-semester program; Fall and Spring admits. Finance is Tier 2 differential tuition (LSU Differential Tuition FAQ). Separate LSU Online MS Finance ($970/cr × 36 = $34,920 marketed) is a different modality — out of this id’s primary sticker. Department page: We currently do not offer any assistantships for the masters program for the coming academic year. STEM not stated on MS Finance page (stem null). Open external admits (Accelerated BS/MS is undergrad path, not a restriction).',
    funding: 'No lsu-msf scholarship card. Department: no master’s assistantships for the coming academic year; no verified open merit process or amounts (as of 2026-10-26).',
    fundingNotes: 'No lsu-msf scholarship card. Department: no master’s assistantships for the coming academic year; no verified open merit process or amounts (as of 2026-10-26).',
    livingCostBand: null,
    deadline: 'Fall admission (Graduate School) · 2027-05-15 · Department page: Grad School sets May 15 for Fall; advises intl to apply ~10 months early',
    deadlineDate: '2027-05-15',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Official tuition / budget', 'https://www.lsu.edu/business/finance/master-finance.php'],
      ['Catalog Finance M.S.', 'https://catalog.lsu.edu/preview_program.php?catoid=35&poid=14335'],
      ['FY26–27 graduate tuition PDF', 'https://www.lsu.edu/bgtplan/Tuition-Fees/2026-2027/grad.pdf'],
      ['Graduate School apply / deadlines', 'https://www.lsu.edu/graduateschool/admissions/apply.php'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Differential Tuition FAQ (Finance = Tier 2)', 'https://www.lsu.edu/bgtplan/Tuition-Fees/differential-tuition-faq.pdf'],
    ],
    programUrl: 'https://www.lsu.edu/business/finance/master-finance.php',
    applicationRequirements: {
      "gre": {
        "status": "unknown",
        "detail": "Department page discusses GMAT (target 600) and a Fall 2021 GMAT waiver for well-qualified candidates (>3.5 GPA + good references). GRE not mentioned on department MS Finance page; Graduate School says aptitude tests are department-determined.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "Department targets GMAT 600+ (code 6373) with balanced verbal/quant. Page still states: For Fall 2021, GMAT waived for well-qualified candidates (>3.5 GPA and good references)—reconfirm whether waiver remains for Fall 2027. Holistic review of full package.",
        "minScore": 600
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 79,
          "detail": "Department: TOEFL ≥550 PBT / 213 CBT / 79 iBT (code 6373). Graduate School also accepts IELTS 6.5, PTE 59, Duolingo 110, Michigan English Test 53."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "Graduate School international admissions minimum IELTS 6.5 (department page only cites TOEFL explicitly)."
        },
        "waiver": "Exempt if native English and/or educated in U.S. or listed English-official countries per LSU Graduate School international page; bachelor’s from accredited U.S. institution."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3.2,
        "scale": "4.0",
        "detail": "Department targets ~3.2 undergrad GPA. Graduate School requires ≥3.0 undergrad (and ≥3.0 on any completed graduate work)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": null,
        "detail": "Letters of recommendation required (important for success assessment); no specific count or form stated on department page—use letterhead. Confirm count in Grad School application portal."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of purpose on Grad School application must include career goal and reasons for MS Finance (used to tailor program of study).",
        "alsoKnownAs": "Statement of purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé listed among materials to send / Grad School requires CV/resume with application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts via Pinkie Gordon Lane Graduate School; unofficial OK for review, official for enrollment. International: official transcripts + degree certificates + certified translations."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not stated on department MS Finance admissions section."
      },
      "applicationFee": {
        "amountUsd": 50,
        "waivers": "Limited domestic waivers (service orgs, need-based, military); international applicants do not qualify for Grad School fee waivers.",
        "detail": "$50 domestic/permanent resident; $70 international; nonrefundable; per application."
      },
      "other": [
        "Work experience encouraged but not required.",
        "Undergrad should approximate business core (calc, micro/macro, accounting year, stats through regression, business law, marketing, management, finance, production/OR) + office software proficiency.",
        "Small program (~25 census; ~5–10 admits/semester); fall and spring entry.",
        "Fall 2021 GMAT-waiver wording on live page may be stale—email finance@lsu.edu / advisor before relying on it."
      ],
      "advice": "Treat GMAT as expected unless department confirms current waiver. Apply early (intl advised ~10 months ahead; Grad School Fall intl deadline May 1 university-level / department cites May 15).",
      "sources": [
        [
          "MS Finance department admissions",
          "https://www.lsu.edu/business/finance/master-finance.php"
        ],
        [
          "Graduate School before you apply / fee",
          "https://www.lsu.edu/graduateschool/admissions/before_you_apply.php"
        ],
        [
          "International admissions / English",
          "https://www.lsu.edu/graduateschool/admissions/international_admissions.php"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'santaclara-msf': {
    academic: 'SCU Leavey MSFA: on-campus STEM, 36 u, ~9 mo FT. Fall priority Apr 1 / final Jun 1. Est. tuition $56,916 (2026–27). Online path non-STEM/non-F1.',
    orientation: 'Fall/Spring · ~9–16 months · on-campus STEM · TFE #28 (2026)',
    duration: 'As little as 9 months full-time; about 16 months part-time.',
    tracks: ["On-campus MSFA (STEM / F-1 eligible)","Online MSFA (not STEM; not F-1 eligible)"],
    coreNotes: 'Official title is MS in Finance & Analytics (not plain MS Finance). On-ground STEM-designated; online is not. Evening/weekend classes. Calculus & statistics recommended. GMAT/GRE or waiver.',
    credits: '36 academic units (22 core + 10 elective + 4 experiential)',
    stem: true,
    stemNote: 'STEM applies to on-ground MSFA only; Online MSFA not STEM-designated per Leavey FAQ.',
    summerStart: false,
    tuition: 56916,
    tuitionAlt: null,
    tuitionLabel: 'Estimated tuition — 36 units × $1,581/unit (MSFA 2026–27 on program page)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27',
    costNote: 'Official title MS in Finance & Analytics (MSFA). On-campus STEM / F-1 eligible; Online MSFA is NOT STEM and NOT F-1 eligible — use on-campus path for intl. ~9 months FT / ~16 months PT. Fall mid-September and Spring late March/early April starts for on-campus. Fall 2027 intake context.',
    costDetail: 'Enrollment deposit MSFA $1,000 (credited to first-quarter tuition). Graduate Business Student Association Fee $50/quarter appears on Leavey bulletin financial info (2025–26 bulletin listed MSFA at prior $1,520/unit — use live program page $1,581 for 2026–27). Health insurance TBD / separate. Official title MS in Finance & Analytics (MSFA). On-campus STEM / F-1 eligible; Online MSFA is NOT STEM and NOT F-1 eligible — use on-campus path for intl. ~9 months FT / ~16 months PT. Fall mid-September and Spring late March/early April starts for on-campus.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-120, SCH-121.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-120, SCH-121.',
    livingCostBand: null,
    deadline: 'Fall on-campus — Priority · 2027-04-01',
    deadlineDate: '2027-04-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-120","SCH-121"],
    sources: [
      ['Official tuition / budget', 'https://www.scu.edu/business/ms/ms-finance-and-analytics/'],
      ['Leavey MS hub', 'https://www.scu.edu/business/ms/'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Leavey Graduate Business Scholarships', 'https://www.scu.edu/business/scholarships/'],
    ],
    programUrl: 'https://www.scu.edu/business/ms/ms-finance-and-analytics/',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "GMAT/GRE scores or test waiver required in application materials. No preference GMAT vs GRE. No minimum; MS programs averages cited ~GRE 309 / GMAT 650. Valid 5 years. Strong quant/technical applicants may request waiver; waiver applicants risk less merit scholarship eligibility.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE or approved waiver. Code BV3-WB-51. Same waiver/scholarship notes as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "Non-native English: TOEFL old iBT min 90 (pre-2026) or new TOEFL 4.5 (2026 iBT); DET 110. Code 4851 / BusinessCAS B888. Valid 2 years."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS 6.5 minimum (page typo shows 'ELTS')."
        },
        "waiver": "May meet via ≥50th percentile verbal on GMAT/GRE, or degree from accredited U.S. university, or degree in last 4 years from Australia, Anglophone Canada, Ireland, New Zealand, UK, or U.S. with English sole instruction."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated; class profile average GPA 3.18. Bachelor’s required (all majors)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "2 letters of recommendation (*waived for SCU Alumni Pathway). Prefer professional network; academic/volunteer OK especially for recent grads."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement required among application materials.",
        "alsoKnownAs": "Personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Official transcripts (*waived for Alumni Pathway). International bachelor’s: NACES course-by-course evaluation with cumulative GPA and U.S. equivalency required even if English transcript."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Qualified applicants invited to interview in person or via Zoom; decision typically within ~2 weeks after final interview."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Waived for Santa Clara University Alumni Pathway applicants. Bulletin lists non-refundable application fee $100.",
        "detail": "Non-refundable application fee $100 (Leavey Graduate Business Bulletin Other Fees)."
      },
      "other": [
        "No prerequisites; Calculus I & Statistics recommended.",
        "Work experience not required.",
        "On-campus MSFA is STEM/F-1 eligible; Online MSFA not F-1/STEM OPT.",
        "Fall on-campus priority Apr 1 / final Jun 1 (table on program page).",
        "Pre-courses: Intro Financial Accounting and Getting Started with R (may be waived with prior coursework)."
      ],
      "advice": "For F-1, use on-campus MSFA only. Submitting GMAT/GRE improves merit scholarship odds vs waiver path.",
      "sources": [
        [
          "MSFA program / application steps",
          "https://www.scu.edu/business/ms/ms-finance-and-analytics/"
        ],
        [
          "Leavey Graduate Business Bulletin financial / fees",
          "https://www.scu.edu/bulletin/graduate/leavey-school-of-business/chapter-3/index.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'rit-msf': {
    academic: 'RIT Saunders Finance MS: STEM-OPT FT, Fall/Spring rolling. Tuition per RIT grad schedule (null flat). Credits not on program page (null). Flexible FinTech-heavy curriculum.',
    orientation: 'Fall/Spring rolling · STEM-OPT (FT) · TFE #29 (2026)',
    duration: 'Flexible; typically completable in about one academic year full-time (confirm plan of study). Co-op optional.',
    tracks: ["Full-time (STEM-OPT eligible)","Part-time (not STEM-OPT eligible per program table)","Elective focus areas: AI/ML, advanced financial analytics, algorithmic trading / FinTech"],
    coreNotes: 'STEM-OPT Visa Eligible for full-time on-campus (program table). GMAT/GRE optional (recommended for international degrees). CFA-oriented curriculum.',
    credits: null,
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'Tuition not yet verified',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 graduate tuition',
    costNote: 'RIT graduate billing 2026–27: $2,690/credit if <12 credits/sem OR fixed $32,271/sem for 12–18 credits. Finance MS total credit hours NOT stated on rit.edu/study/finance-ms this pass (secondary sources cite 31 — left null). On-campus only; Fall or Spring; STEM-OPT eligible for full-time. Open external admits. Use RIT estimate tool once plan of study / credits confirmed. Fall 2027 intake context.',
    costDetail: 'No flat program sticker. Graduate billing: $2,690/credit when under 12 credits per semester, or $32,271 per semester for 12–18 credits. Total depends on credit pacing; Finance MS credit hours are not stated on the program page. When FT (9+ credits/sem): Student Activity Fee $235/sem + Student Health Services Fee $315/sem. International students automatically enrolled/billed for RIT health insurance (amount not on estimate page this pass). No Finance MS flat total published. RIT graduate billing 2026–27: $2,690/credit if <12 credits/sem OR fixed $32,271/sem for 12–18 credits. Finance MS total credit hours NOT stated on rit.edu/study/finance-ms this pass (secondary sources cite 31 — left null). On-campus only; Fall or Spring; STEM-OPT eligible for full-time. Open external admits. Use RIT estimate tool once plan of study / credits confirmed. Living cost band from official COA: $20,386 (RIT Estimate Graduate Education Costs page (linked from Finance MS): estimated living expenses (housing and meals) $17,370/year + estimated transportation, books, supplies, and personal expenses $3,016/year = $20,386. General graduate estimate — not a Finance-MS-only COA table.).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-123.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-123.',
    livingCostBand: {
      low: 20386,
      high: null,
      basis: 'RIT Estimate Graduate Education Costs page (linked from Finance MS): estimated living expenses (housing and meals) $17,370/year + estimated transportation, books, supplies, and personal expenses $3,016/year = $20,386. General graduate estimate — not a Finance-MS-only COA table.',
    },
    deadline: 'Fall / Spring — Rolling · Program page: Application Deadline = Rolling for full-time and part-time. Apply early for visa timing; no fixed final date published on program page.',
    deadlineDate: null,
    asOf: '2026-10-26',
    scholarships: ["SCH-123"],
    sources: [
      ['Program hub / STEM-OPT / rolling', 'https://www.rit.edu/study/finance-ms'],
      ['Official tuition / budget', 'https://www.rit.edu/admissions/graduate/estimate-education-costs'],
      ['Graduate admission deadlines overview', 'https://www.rit.edu/admissions/graduate-admission-deadlines-and-requirements'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Graduate Funding Sources', 'https://www.rit.edu/admissions/financial-aid/graduate-funding-sources'],
      ['RIT Tuition and Fees (grad table)', 'https://www.rit.edu/admissions/tuition-and-fees'],
    ],
    programUrl: 'https://www.rit.edu/study/finance-ms',
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE or GMAT optional, but recommended for individuals with degrees from international universities.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "GRE or GMAT optional; recommended for international-university degree holders.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 88,
          "detail": "Program table: TOEFL 88 / 4.5 (new scale). Also DET 130, LanguageCert Academic 74, PTE Academic 60. Some internationals may get English test waiver per RIT policy. Conditional admission possible below minimum."
        },
        "ielts": {
          "status": "required",
          "minScore": 6.5,
          "detail": "IELTS 6.5. Balanced subscores expected."
        },
        "waiver": "May be considered if worked/studied in U.S. last two years; bachelor’s/master’s from English-medium university in RIT waiver territory list; or citizen of listed territories with English-medium secondary school. See RIT graduate apply page."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Baccalaureate from accredited university; minimum cumulative GPA 3.0 (or equivalent) recommended."
      },
      "lettersOfRecommendation": {
        "status": "optional",
        "count": null,
        "detail": "Letters of recommendation are optional for Finance MS. (RIT College of Business master’s generally excepted from required LOR rule on university apply page.)"
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement of educational objectives required (open-ended; may address why program, career goals, non-academic qualities, prior experience, why RIT).",
        "alsoKnownAs": "Personal statement of educational objectives"
      },
      "resume": {
        "status": "required",
        "detail": "Current resume or curriculum vitae required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Copies of official transcripts (English) of all prior undergrad/grad coursework including transfer credit."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on Finance MS admissions details."
      },
      "applicationFee": {
        "amountUsd": 65,
        "waivers": "Current RIT students and RIT alumni not required to pay; fee waived within 24 hours of submission for them. Other waiver categories per Grad FAQ.",
        "detail": "Non-refundable $65 graduate application fee (RIT Graduate How to Apply)."
      },
      "other": [
        "STEM-OPT eligible; on-campus only.",
        "Fall priority Jan 15 / standard Mar 1; Spring rolling.",
        "International F-1 must study full-time."
      ],
      "advice": "International-degree applicants should strongly consider submitting GRE/GMAT despite optional status.",
      "sources": [
        [
          "Finance MS admissions",
          "https://www.rit.edu/study/finance-ms"
        ],
        [
          "Graduate how to apply / fee / English",
          "https://www.rit.edu/admissions/graduate/apply"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'arizona-msf': {
    academic: 'Arizona Eller MSF: STEM, 30 cr, ~9 mo Tucson. Deadlines Oct 15 early / May 15 intl / Jun 1 FINPREP / Aug 1 final (years for F27). Tuition NR $47,500 / AZ $27,200 (2026–27).',
    orientation: 'Fall · ~9 months · STEM · TFE #30 (2026)',
    duration: 'As few as 9 months (on-campus); online 12+ months.',
    tracks: ["Tucson on-campus MSF","Online MSF","Dual degrees: MBA, MSBA, MSA, JD"],
    coreNotes: 'STEM-designated. GMAT/GRE waived for Fall 2027 (admissions). FINPREP online module may be required. CFA prep supported.',
    credits: '30',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 47500,
    tuitionAlt: 27200,
    tuitionLabel: 'Non-resident tuition — Tucson on-campus MS Finance 9-month / 30 units (Eller Matrix 2026–27)',
    tuitionAltLabel: 'Arizona resident tuition — 9-month Tucson MSF (2026–27 matrix)',
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 (Eller graduate programs matrix PDF dated Aug 2026)',
    costNote: 'STEM; ~9 months Tucson on-campus; 30 units. Open external/intl. Prefer matrix sticker ($47,500 NR / $27,200 AZ) as official 2026–27 program matrix; ROI page itemization differs by ~$78. Fall 2027 intake context.',
    costDetail: 'Alternate format: Arizona resident tuition — 9-month Tucson MSF (2026–27 matrix) $27,200. Matrix footnote: tuition and fees subject to change. ROI page itemizes AZ resident 9-mo total $27,122 and Non-AZ $47,422 (slightly below matrix round numbers) including program fees/fees lines; $500 seat fee due after admission applied toward tuition if student attends. FINPrep non-credit summer module $2,500 separate if required. Online MSF listed separately $37,500 ($1,250/unit) — different modality. STEM; ~9 months Tucson on-campus; 30 units. Open external/intl. Prefer matrix sticker ($47,500 NR / $27,200 AZ) as official 2026–27 program matrix; ROI page itemization differs by ~$78.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-125.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-125.',
    livingCostBand: null,
    deadline: 'Fall Early Admission · 2026-10-15 · Bullet list used; same page also mentions Dec 1 preferred intl / Feb 1 — confirm',
    deadlineDate: '2026-10-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-125"],
    sources: [
      ['Program hub / STEM', 'https://eller.arizona.edu/programs/masters/finance/ms-finance'],
      ['Admissions / deadlines', 'https://eller.arizona.edu/programs/masters/finance/ms-finance/admissions'],
      ['Official tuition / budget', 'https://eller.arizona.edu/sites/default/files/2026-08/Matrix-2026-2027.pdf'],
      ['TFE Times 2026', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Eller MSF Cost / ROI', 'https://eller.arizona.edu/programs/masters/finance/ms-finance/roi'],
    ],
    programUrl: 'https://eller.arizona.edu/programs/masters/finance/ms-finance',
    applicationRequirements: {
      "gre": {
        "status": "waived",
        "detail": "GMAT/GRE requirement waived for Fall 2027 (stated on admissions page Application Strengths and Required Materials). Historical note on page also describes alternate waiver paths (Finance/Accounting/STEM degree with ≥3.3 GPA, CFA levels, Charter)—but Fall 2027 policy is explicit waiver.",
        "minScore": null
      },
      "gmat": {
        "status": "waived",
        "detail": "GMAT (or GRE) waived Fall 2027. School code 4832 if somehow submitting. Page still mentions older waiver alternatives; treat Fall 2027 as waived.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "International / non-native: Eller FAQ requires iBT TOEFL ≥100. Score <2 years old at first MSF class unless living/studying in U.S. since test. Code 4832."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS overall ≥7.0 with ≥6.0 each section (Eller FAQ / UA Grad College)."
        },
        "waiver": "Waived if completed a four-year bachelor’s from a U.S. college/university and have not returned home for an extended period (FAQ); also if completed a degree program in the U.S. Check country requirements on UA Graduate College site."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Minimum GPA 3.00. UA Grad College enforces ≥3.0 on last 60 undergrad units or 12 grad credits (rare exception >2.95 with strong credentials)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "2 Letters of Reference: names and contact information. Academia or industry; should address study/quantitative skills."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Statement of Purpose: academic/professional goals in finance; typically 1–2 typed double-spaced pages to Finance Department Admissions Committee.",
        "alsoKnownAs": "Statement of Purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required in application package."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from all colleges/universities except UA (include grade key if not 4.0 scale). International: original language + English translation; official sealed."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed among Required Application Materials."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "UA Graduate College does not waive application fees (general email requests not considered).",
        "detail": "UA Graduate College degree-seeking application fee $90 nonrefundable."
      },
      "other": [
        "No work experience required.",
        "Prefer B.S./B.A. in business-related field; other fields may need summer FinPrep/prereq modules.",
        "International: financial guarantee; affidavit of domicile for AZ residents.",
        "Fall deadlines include Oct 15 early; May 15 international; Aug 1 final."
      ],
      "advice": "Fall 2027 GMAT/GRE waived—do not delay for a test. Non-finance majors should plan FinPrep if notified.",
      "sources": [
        [
          "MSF admissions",
          "https://eller.arizona.edu/programs/masters/finance/ms-finance/admissions"
        ],
        [
          "MSF FAQs (English / GPA)",
          "https://eller.arizona.edu/programs/masters/finance/ms-finance/faqs"
        ],
        [
          "UA Grad application fees",
          "https://grad.arizona.edu/admissions/procedures/application-fees"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'chicago-booth-mif': {
    academic: 'Chicago Booth MiF (locked add): STEM-eligible, 15 mo / 4 quarters. Early Review from Oct 1’26; Round One Jan 7’27. Total tuition Aut 2026 matriculants $123,470 (proxy).',
    orientation: 'Autumn · 15 months · STEM-eligible · locked add (no TFE rank)',
    duration: '15 months (four quarters); summer internship after first three quarters.',
    tracks: ["Asset Management specialization (recommended, not required)","Investment Banking specialization","Fintech specialization"],
    coreNotes: 'STEM-eligible for OPT (FAQ). GMAT/GRE required (UChicago undergrad/alumni waiver). Interview required for admission. First cohort graduated 2025. Locked add — not on TFE 2026 list.',
    credits: '13 courses / 1300 units of coursework (Booth units)',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 123470,
    tuitionAlt: null,
    tuitionLabel: 'Total tuition four-quarter program — Autumn 2026 matriculants (proxy for Autumn 2027 until updated)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 proxy (Autumn 2026 matriculant total; Autumn 2027 rate not published) · 2026/27 (Autumn 2026 matriculant totals on Booth MiF Cost page)',
    costNote: 'Asness and Liew Master in Finance (MiF); STEM-eligible for OPT (FAQ); 15 months / four quarters; summer internship after first three quarters. Accelerated 10-month track discontinued. Autumn 2027 cohort rates may change — confirm when updated. Locked add (no TFE 2026 rank). AUTUMN MATRICULATION with a summer internship between academic terms (not a summer start). Tuition is the Autumn 2026 matriculant proxy until the Autumn 2027 rate is published.',
    costDetail: 'Three-quarter COA table tuition (not the four-quarter program total): $93,282. Catalog tuition is the Autumn 2026 four-quarter total proxy. Mandatory fees reference: $2,674. From 2026/27 Estimated COA (Three Quarters): Student Services Fee $1,560 + Lifetime Credentials Fee $84 + Administrative Service Fee $1,030 = $2,674. Full tuition charged over four quarterly installments. Books $549 in 3-quarter COA. Health insurance allowance embedded in Misc. Personal Expenses; university health rates TBD on page. Asness and Liew Master in Finance (MiF); STEM-eligible for OPT (FAQ); 15 months / four quarters; summer internship after first three quarters. Accelerated 10-month track discontinued. Autumn 2027 cohort rates may change — confirm when updated. Locked add (no TFE 2026 rank). Living cost band from official COA: $35,580 (Booth MiF 2026/27 Estimated COA (Three Quarters): Housing and Food $26,010 + Misc. Personal Expenses $7,770 + Transportation $1,800 = $35,580. Fourth quarter / internship summer living not separately itemized on page.). AUTUMN MATRICULATION with a summer internship between academic terms (not a summer start). Tuition is the Autumn 2026 matriculant proxy until the Autumn 2027 rate is published.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-126. MBA-only Forté, ROMBA, Consortium, and Toigo awards (SCH-034–037) are not attached.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-126. MBA-only Forté, ROMBA, Consortium, and Toigo awards (SCH-034–037) are not attached.',
    livingCostBand: {
      low: 35580,
      high: null,
      basis: 'Booth MiF 2026/27 Estimated COA (Three Quarters): Housing and Food $26,010 + Misc. Personal Expenses $7,770 + Transportation $1,800 = $35,580. Fourth quarter / internship summer living not separately itemized on page.',
    },
    deadline: 'Early Review · 2026-10-01 · Starting Oct 1, 2026; decisions rolling until mid-December 2026; submit by 11:59 p.m. CT',
    deadlineDate: '2026-10-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-126"],
    sources: [
      ['How to apply / deadlines', 'https://www.chicagobooth.edu/master-in-finance/admissions/how-to-apply'],
      ['Official tuition / budget', 'https://www.chicagobooth.edu/master-in-finance/admissions/cost-financial-aid'],
      ['FAQ / STEM / duration', 'https://www.chicagobooth.edu/master-in-finance/faq'],
    ],
    programUrl: 'https://www.chicagobooth.edu/master-in-finance/admissions/how-to-apply',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Valid GMAT or GRE required; no preference. Test waiver if current UChicago undergraduate or graduated from a UChicago program. Current students in UChicago graduate programs NOT eligible for waiver.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE required except UChicago undergrad/alumni waiver (not for current UChicago grad students).",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "International non-native English speakers: TOEFL, IELTS Academic, or PTE. TOEFL code 1832-02. Scores valid 2 years. At-home/online proctored accepted. No numeric minimum published on how-to-apply page."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS Academic accepted; no numeric minimum on how-to-apply page."
        },
        "waiver": "Exempt if undergrad/postgrad degree from listed countries (incl. Antigua & Barbuda, Australia, Bahamas, Barbados, Canada, Dominica, Grenada, Guyana, Hong Kong, Ireland, Jamaica, New Zealand, St. Kitts & Nevis, St. Lucia, St. Vincent & Grenadines, Singapore, South Africa, Trinidad & Tobago, UK, US); OR degree outside those countries with English as only language of instruction; OR living and working full-time in U.S. ≥2 years. Citizenship alone does not exempt. Committee may still require a score."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated. Holistic review of background, experiences, grades, and tests."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters from people who know you well with specific examples of academic performance/contributions; prefer substance over title. Online form only (no mail/fax)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two essays: (1) How Booth MiF helps immediate and long-term career goals (max 300 words); (2) Something about who you are outside classroom/work—activity pursued for its own sake (max 400 words). Optional clarification section. Plus required video essay ≤60 seconds introducing yourself and a non-career pursuit.",
        "alsoKnownAs": "Essay questions + video essay"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not listed on MiF How to Apply checklist."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial scans of all postsecondary transcripts (both sides) with application; official transcripts upon admission. Non-English records need official record + authorized English translation."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Invitation-only after application evaluation; 100% virtual with admissions staff; required for admission (interview ≠ guarantee). Also brief video simulation exercise with interview invite."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "",
        "detail": "How-to-apply checklist does not state an application fee amount; confirm in online application system."
      },
      "other": [
        "Recommended advanced quantitative coursework and coding exposure (e.g., Linear Algebra, Statistics, Multivariable Calculus, Python, C++).",
        "Early Review from Oct 1, 2026 (rolling to mid-Dec); Round One Jan 7, 2027.",
        "Submit by 11:59 p.m. CT on deadline day."
      ],
      "advice": "Prepare for video essay and possible interview simulation. UChicago undergrads/alumni should claim test waiver; others must submit GMAT/GRE.",
      "sources": [
        [
          "How to apply",
          "https://www.chicagobooth.edu/master-in-finance/admissions/how-to-apply"
        ],
        [
          "MiF FAQ",
          "https://www.chicagobooth.edu/master-in-finance/faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'columbia-msfe': {
    academic: 'Columbia MSFE (locked add): STEM-eligible, 4 semesters / ≥48 cr, late Aug start. App deadline ~Jan 28 2027 (verify). Est. tuition ~$77,516/yr ×2 (indexed; CF-blocked live).',
    orientation: 'Late Aug · ~2 years · STEM-eligible · locked add (no TFE rank)',
    duration: 'Four semesters full-time (~2 academic years); begins late August; typically includes ≥6-week summer internship.',
    tracks: ["Academia Track","Industry Track"],
    coreNotes: 'STEM-eligible. PhD-level finance core + MBA electives. Thesis seminar required. Administered with Program for Financial Studies. Locked add.',
    credits: 'Minimum 48 credits (16 full-term courses) including thesis seminar; max 52.5 under flat tuition',
    stem: true,
    stemNote: null,
    summerStart: false,
    tuition: 155032,
    tuitionAlt: null,
    tuitionLabel: 'Estimated total tuition two years — $77,516/year × 2 (MSFE Student Budget 2026–27)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    period: '2026–27 indexed MSFE budgets on CBS MS Programs costs page',
    costNote: 'MS in Financial Economics (MSFE); STEM-eligible; four fall/spring semesters; min 48 credits / max 52.5 under flat rate; begins late August; typical ≥6-week summer internship. Live costs page Cloudflare-blocked to direct curl; figures verified via jina.ai fetch of the same official URL showing Student Budget 2026–27 Year 1/2 tables ($77,516 tuition each year). Wayback Apr 2026 still showed prior 2025–26 MSFE $75,256 — live updated. Tuition generally increases 2–7% noted on page — Fall 2027 entrants’ Year 2 may differ. Locked add (no TFE 2026 rank). AUTUMN MATRICULATION (late August) with a summer internship between academic terms (not a summer start).',
    costDetail: 'CF-BLOCKED VERIFY: $155,032 = 2 × $77,516 from a jina fetch of the official MS programs costs URL after Cloudflare blocked direct curl. Re-verify in a browser before relying on the figure. Mandatory fees reference: $11,517. Mandatory fees Year 1 $5,811 + Year 2 $5,706 = $11,517 (University services & support, program, health services, and Y1 one-time document fee components per page footnotes). Health Insurance $5,823/year separate in budget table. MS in Financial Economics (MSFE); STEM-eligible; four fall/spring semesters; min 48 credits / max 52.5 under flat rate; begins late August; typical ≥6-week summer internship. Live costs page Cloudflare-blocked to direct curl; figures verified via jina.ai fetch of the same official URL showing Student Budget 2026–27 Year 1/2 tables ($77,516 tuition each year). Wayback Apr 2026 still showed prior 2025–26 MSFE $75,256 — live updated. Tuition generally increases 2–7% noted on page — Fall 2027 entrants’ Year 2 may differ. Locked add (no TFE 2026 rank). Living cost band from official COA: $35,226 (MSFE Student Budget 2026–27 (per year): Food & Housing $30,231 + Personal Expenses $3,636 + Transportation $1,359 = $35,226 (excludes books $1,290 and health insurance $5,823). Same living lines Year 1 and Year 2.). AUTUMN MATRICULATION (late August) with a summer internship between academic terms (not a summer start).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-127. MBA-only Forté, ROMBA, Consortium, and Toigo awards (SCH-034–037) are not attached.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-127. MBA-only Forté, ROMBA, Consortium, and Toigo awards (SCH-034–037) are not attached.',
    livingCostBand: {
      low: 35226,
      high: null,
      basis: 'MSFE Student Budget 2026–27 (per year): Food & Housing $30,231 + Personal Expenses $3,636 + Transportation $1,359 = $35,226 (excludes books $1,290 and health insurance $5,823). Same living lines Year 1 and Year 2.',
    },
    deadline: 'Application submission · 2027-01-28 · Listed on MS admissions / MSFE academics pages; MSFE academics also shows Jan 21, 2027 in a duplicate widget — use Jan 28 and confirm on deadlines page',
    deadlineDate: '2027-01-28',
    asOf: '2026-10-26',
    scholarships: ["SCH-127"],
    sources: [
      ['MSFE academics / STEM / structure', 'https://academics.business.columbia.edu/msfe/academics'],
      ['MS admissions hub', 'https://academics.business.columbia.edu/admissions/ms'],
      ['Official tuition / budget', 'https://business.columbia.edu/financial-aid/costs/ms-programs'],
      ['MSFE program hub', 'https://academics.business.columbia.edu/msfe'],
      ['CBS Academics Tuition and Financial Aid (MS fellowships)', 'https://academics.business.columbia.edu/tuition-and-financial-aid'],
    ],
    programUrl: 'https://academics.business.columbia.edu/msfe/academics',
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Self-reported valid GRE or GMAT required with application; no exceptions. Valid 5 years; submit ≥1 week before expiry. Official scores if admitted. GRE code 7432. Highest score used; no superscoring across sittings. Accepts GMAT 10th Edition and Focus.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GRE required (no preference). MS Admissions GMAT code QF8-N6-46. Same validity/official-score rules as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "International students without bachelor’s/master’s/doctoral degree from English-instruction institution must take TOEFL, PTE, or IELTS. Self-report/scan with application; official if admitted. TOEFL ETS code 2141. No numeric minimum on requirements page. Scores must be valid at submission (typically 2 years per FAQ)."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "IELTS accepted; select Columbia Business School. No numeric minimum on requirements page."
        },
        "waiver": "Exempt only if degree from institution where English is the language of instruction; no exception requests accepted."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA. Class profile (entering 2025) average undergrad GPA 3.9 for context only."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters required from professors or managers who know your work; preferably one professor and one manager/supervisor. Up to four allowed. Applicant must not draft letters. Submit via online application."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "MSFE: short answer — immediate post-MS professional goal (max 50 characters); Essay 1 — educational goals and academic/professional achievements most contributory to development (max 500 words); Essay 2 — expected career track and how MSFE helps attain goals, be specific (max 500 words).",
        "alsoKnownAs": "Essays / short answer"
      },
      "resume": {
        "status": "required",
        "detail": "Resume or CV required covering academic credentials and relevant experience since high school (employment, campus paid/volunteer, other business/academic experience)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Bachelor’s or equivalent required. Scan/PDF transcripts from each undergrad/grad institution attended; encrypted digital officials if admitted."
      },
      "interview": {
        "status": "unknown",
        "detail": "Interview not listed on MS Application Requirements checklist."
      },
      "applicationFee": {
        "amountUsd": 100,
        "waivers": "Active duty U.S. military; current Peace Corps, Teach for America, Teach for China, or Teach for India with proof of service. Email apply@gsb.columbia.edu after submitting application.",
        "detail": "Nonrefundable US$100 via online application."
      },
      "other": [
        "NOT the IEOR MFE — this is CBS MSFE.",
        "Prerequisites (complete before program start at advanced undergrad level): Linear Algebra & Matrix Theory; two semesters Calculus (multivariable preferred); computer programming (Python preferred); Probability; Statistics; Macroeconomics preferred.",
        "AI: idea generation/editing allowed; generating complete responses violates Honor Code.",
        "MSFE deadline Jan 14, 2027 noon ET; applications open Aug 5, 2026 per deadlines page."
      ],
      "advice": "Ensure prereq coursework plan before matriculation. Distinguish CBS MSFE from Columbia IEOR MFE when researching.",
      "sources": [
        [
          "MS application requirements",
          "https://academics.business.columbia.edu/admissions/ms/application-requirements"
        ],
        [
          "MS FAQ",
          "https://academics.business.columbia.edu/admissions/ms/frequently-asked-questions"
        ],
        [
          "MSFE hub",
          "https://academics.business.columbia.edu/msfe"
        ],
        [
          "MS application deadlines",
          "https://academics.business.columbia.edu/admissions/ms/application-deadlines"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'tamu-qfin': {
    academic: 'TAMU Mays MS-QFIN (tamu-qfin): DISTINCT from restricted tamu-msf 4+1. 36-cr non-thesis joint Finance+Math. Catalog opens to non-TAMU graduates with prereqs (external/intl pathway exists). Program fee $15k/Fall&Spring sem (SBS); flat tuition null. Fall 2027 deadlines not posted. STEM CIP null. Not on TFE MSF spine (related tamu-msf = #20).',
    orientation: 'External/intl open per catalog · 36 cr · TFE n/a (≠ tamu-msf #20)',
    duration: '36 semester credit hours, non-thesis (catalog). Calendar length (e.g. 1 vs 2 years) not stated on catalog page as of scrape.',
    tracks: ["MS-QFIN / MSQF “STEM to Stocks” — joint Adam C. Sinn '00 Department of Finance + Department of Mathematics","36-hour non-thesis Master of Science in Quantitative Finance","Audience per catalog: STEM and Finance majors; current TAMU sophomores/juniors/seniors OR non-Texas A&M graduates meeting prerequisites"],
    coreNotes: 'DISTINCT from tamu-msf (classic MS Finance = Texas A&M undergraduate 4+1 / combination only; TFE #20; external/intl N/A). Catalog (MS-QFIN): admission available to current Texas A&M sophomore, junior and senior students OR non-Texas A&M graduates who complete equivalent prerequisites (ACCT 209 or 229/640; ECON 202 or 203; MATH 171+172 or 151+152 or equivalents) with B or higher by end of TAMU spring semester immediately following admission. Highly recommended: Linear Algebra, Differential Equations, Statistics, coding experience. Careers listed: complex security research, data/analytics, fintech, model development, portfolio management, quantitative trading, risk management, software development. Access to Mays Graduate Career Management Center / career coaching. STEM OPT/CIP designation not stated on catalog or Artsci Math pages → stem null. Fall 2027 deadlines/tuition total/start term gaps flagged.',
    credits: '36',
    stem: null,
    stemNote: null,
    summerStart: null,
    tuition: null,
    tuitionAlt: 15000,
    tuitionLabel: 'No flat sticker · estimate only (not program tuition)',
    tuitionAltLabel: 'Quantitative Finance program fee per Fall/Spring semester (SBS fee schedule / billing explanations; not full program tuition)',
    tuitionEstimate: 30110,
    tuitionEstimateLabel: 'Nonresident graduate base tuition only — 36 SCH × $836.40 (SBS Graduate & Certificate Non-Resident Fall 2026 / Spring 2027 schedule). NOT a published flat MS-QFIN sticker; excludes program fee, college fees, insurance, living. Fall 2027 / AY 2027–28 rates not published as of asOf.',
    fees: null,
    period: '2026–27 · Rate components from Fall 2026 / Spring 2027 SBS schedules (proxy). Fall 2027 billing rates not locked',
    costNote: 'No flat MS-QFIN tuition sticker (tuition null). Estimate only — not a published program total: nonresident graduate base tuition $30,110 = 36 × $836.40 (SBS 2026–27 Non-Resident GR). Excludes the $15,000 Quantitative Finance program fee per Fall & Spring semester, unsummed college fees, insurance, and living. Fall 2027 / AY 2027–28 rates are not locked. OPEN external/intl per official catalog: admission available to current Texas A&M sophomore/junior/senior students OR non-Texas A&M graduates meeting prerequisites (ACCT/ECON/MATH with B or higher). External/intl pathway via Department of Mathematics GraduateCAS (artsci Math master\'s appinfo). DISTINCT from tamu-msf (classic MS Finance = TAMU undergrad 4+1 only; accessRestricted). 36 credit hours, non-thesis, joint Finance + Mathematics (\'STEM to Stocks\'). No flat program tuition on Mays/catalog — use SBS rates + calculator. Program fee $15,000/Fall&Spring sem (SBS). STEM/CIP designation not stated on official QFIN catalog/Math pages → stem null. Living band not program-published → livingCostBand null. Calendar length (1 vs 2 years) not stated on catalog.',
    costDetail: 'Nonresident graduate base tuition only — 36 SCH × $836.40 (SBS Graduate & Certificate Non-Resident Fall 2026 / Spring 2027 schedule). NOT a published flat MS-QFIN sticker; excludes program fee, college fees, insurance, living. Fall 2027 / AY 2027–28 rates not published as of asOf: $30,110. Alternate format: Quantitative Finance program fee per Fall/Spring semester (SBS fee schedule / billing explanations; not full program tuition) $15,000. Resident graduate base tuition estimate only (costDetail only — not a sticker and not tuitionAlt): 36 SCH × $286.89 = $10,328 (SBS 2026–27 Resident GR DoD). SBS Billing & Fee Explanations: Quantitative Finance Prog Fee $15,000 per semester (Fall/Spring only) for MS Quantitative Finance students. Same dollar amount listed on 2026–27 Non-Resident and Resident GR DoD PDFs under \'MS in Quantitative Finance\' $15,000. MAYS Masters Program Fee ($244.45/SCH or flat $2,200 at 9+ SCH) and Business college fees also appear on SBS schedules — whether stacked with QFIN fee for every enrollee is not itemized as a full-degree total on program pages. Term count for traditional external path not published → cannot sum program fees into verified full-degree fees integer (missing ≠ invent). OPEN external/intl per official catalog: admission available to current Texas A&M sophomore/junior/senior students OR non-Texas A&M graduates meeting prerequisites (ACCT/ECON/MATH with B or higher). External/intl pathway via Department of Mathematics GraduateCAS (artsci Math master\'s appinfo). DISTINCT from tamu-msf (classic MS Finance = TAMU undergrad 4+1 only; accessRestricted). 36 credit hours, non-thesis, joint Finance + Mathematics (\'STEM to Stocks\'). No flat program tuition on Mays/catalog — use SBS rates + calculator. Program fee $15,000/Fall&Spring sem (SBS). STEM/CIP designation not stated on official QFIN catalog/Math pages → stem null. Living band not program-published → livingCostBand null. Calendar length (1 vs 2 years) not stated on catalog. Catalog + Math GradCAS: open to non-Texas A&M graduates (and current TAMU UG). Math Master\'s departmental deadlines (take precedence over GradCAS site): Fall intl May 15 / domestic July 1; Spring intl Sept 15 / domestic Dec 1. Do NOT reuse classic tamu-msf 4+1 Lightning/Round dates (TAMU undergrads only). Mays 4+1 MSF marketing is separate. No flat MS-QFIN program total on Mays or catalog pages. SBS Billing & Fee Explanations lists \'Quantitative Finance Prog Fee\' $15,000/Sem (Fall/Spring only) for MS Quantitative Finance students (same dollar amount as MAYS MSF Program Fee). 2024–25 Resident GR DoD PDF also lists \'MS in Quantitative Finance\' $15,000. Use TAMU tuition calculator (tuition.tamu.edu) for base tuition/fees by residency + hours; living/insurance separate. Not a Fall-2027-only locked quote; fee schedules can change.',
    funding: 'No verified program-tied scholarship for tamu-qfin (as of 2026-10-26). Awards array empty. SCH ids consumed: none (reserve SCH-130+). Do not attach tamu-msf funding notes.',
    fundingNotes: 'No verified program-tied scholarship for tamu-qfin (as of 2026-10-26). Awards array empty. SCH ids consumed: none (reserve SCH-130+). Do not attach tamu-msf funding notes.',
    livingCostBand: null,
    deadline: 'Math GradCAS departmental dates (not a dedicated MS-QFIN Mays board; not tamu-msf 4+1): Fall international · 2027-05-15 · Fall domestic July 1; Spring international Sept 15 / domestic Dec 1. Confirm with the Mathematics department before filing. Fall 2027 billing rates not locked',
    deadlineDate: '2027-05-15',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['MS Quantitative Finance catalog (eligibility + 36 hours)', 'https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/quantitative-finance-ms/'],
      ['College of Arts & Sciences — Quantitative Finance M.S.', 'https://artsci.tamu.edu/mathematics/academics/graduate/quantitative-finance-ms.html'],
      ['Official tuition / budget', 'https://sbs.tamu.edu/billing-payments/billing-fee-explanations/'],
      ['SBS 2024–25 Resident GR DoD (MS in Quantitative Finance $15,000)', 'https://sbs.tamu.edu/documents/2024-2025%20Resident%20GR%20DoD.pdf'],
      ['Mays Apply — master’s via BusinessCAS', 'https://mays.tamu.edu/apply/'],
      ['Classic 4+1 MS Finance (DISTINCT / TAMU-undergrad-only — do not conflate)', 'https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/'],
      ['TFE Times 2026 (context only — classic tamu-msf #20; this program not ranked)', 'https://tfetimes.com/best-finance-program-rankings/'],
      ['Math Master\'s Application Information (GraduateCAS + deadlines)', 'https://artsci.tamu.edu/mathematics/academics/graduate/masters/appinfo-ms.html'],
      ['Math Graduate Financial Support (no MS support)', 'https://artsci.tamu.edu/mathematics/academics/graduate/support.html'],
      ['SBS 2026–27 Non-Resident GR DoD (tuition $836.40/SCH; MS QFIN $15,000)', 'https://sbs.tamu.edu/documents/2026-2027-NonResident-GR-DoD.pdf'],
      ['SBS 2026–27 Resident GR DoD (tuition $286.89/SCH; MS QFIN $15,000)', 'https://sbs.tamu.edu/documents/2026-2027-Resident-GR-DoD.pdf'],
      ['TAMU tuition calculator', 'https://tuition.tamu.edu'],
      ['Adam C. Sinn \'00 Department of Finance (CFA exam scholarships for enrolled)', 'https://mays.tamu.edu/departments/finance/'],
    ],
    programUrl: 'https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/quantitative-finance-ms/',
    accessRestricted: false,
    accessNote: 'Catalog + Math GradCAS: open to non-Texas A&M graduates (and current TAMU UG). Math Master\'s departmental deadlines (take precedence over GradCAS site): Fall intl May 15 / domestic July 1; Spring intl Sept 15 / domestic Dec 1. Do NOT reuse classic tamu-msf 4+1 Lightning/Round dates (TAMU undergrads only). Mays 4+1 MSF marketing is separate.',
    availability: 'External / international open via Math GradCAS · non-TAMU graduates eligible',
    availabilityType: 'verify',
    applicationRequirements: {
      "gre": {
        "status": "unknown",
        "detail": "No MS-QFIN-specific GRE policy found on official catalog or Artsci Math QFIN page as of scrape. Do not reuse classic tamu-msf 4+1 GRE rules. Confirm via Adam C. Sinn Department of Finance / BusinessCAS.",
        "minScore": null
      },
      "gmat": {
        "status": "unknown",
        "detail": "Not stated on MS-QFIN catalog or Artsci QFIN page.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "unknown",
          "minScore": null,
          "detail": "No MS-QFIN-specific English minima posted on catalog/Artsci QFIN pages. Mays master’s applications generally use BusinessCAS; confirm TOEFL/IELTS rules on the live QFIN/BusinessCAS materials."
        },
        "ielts": {
          "status": "unknown",
          "minScore": null,
          "detail": "Not stated on MS-QFIN-specific official pages reviewed."
        },
        "waiver": "Unknown for MS-QFIN; not invented from other Mays programs."
      },
      "gpa": {
        "status": "unknown",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on MS-QFIN catalog page. Classic tamu-msf GPA floors must not be copied here."
      },
      "lettersOfRecommendation": {
        "status": "unknown",
        "count": null,
        "detail": "Not listed on MS-QFIN catalog / Artsci pages."
      },
      "statementOfPurpose": {
        "status": "unknown",
        "detail": "Not listed on MS-QFIN catalog / Artsci pages.",
        "alsoKnownAs": ""
      },
      "resume": {
        "status": "unknown",
        "detail": "Not listed on MS-QFIN catalog / Artsci pages."
      },
      "transcripts": {
        "status": "unknown",
        "detail": "Not itemized on MS-QFIN catalog page; expect standard graduate transcript upload via application system—confirm BusinessCAS checklist."
      },
      "interview": {
        "status": "unknown",
        "detail": "Not stated on MS-QFIN official pages reviewed."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "",
        "detail": "Fee not posted on MS-QFIN catalog/Artsci pages; Mays master’s applications processed via BusinessCAS (mays.tamu.edu/apply)—confirm current BusinessCAS fee at submission."
      },
      "other": [
        "Catalog eligibility OPEN to current TAMU sophomores/juniors/seniors OR non-Texas A&M graduates with equivalent prerequisites (ACCT 209 or 229/640; ECON 202 or 203; MATH 171+172 or 151+152 or equivalents) with B or higher by end of TAMU spring immediately following admission.",
        "Highly recommended: Linear Algebra, Differential Equations, Statistics, coding experience.",
        "36-hour non-thesis joint Finance + Mathematics (“STEM to Stocks”).",
        "DISTINCT from tamu-msf (classic 4+1 MS Finance = TAMU-undergrad-only)."
      ],
      "advice": "OPEN external/intl per catalog. Fall 2027 application dates/requirements checklist not posted on dedicated QFIN marketing page as of 2026-10-27—flag gap; contact Finance (Jose Quiros) / BusinessCAS before applicant-facing claims. Never conflate with restricted tamu-msf.",
      "sources": [
        [
          "MS Quantitative Finance catalog (eligibility)",
          "https://catalog.tamu.edu/graduate/colleges-schools-interdisciplinary/business/finance/quantitative-finance-ms/"
        ],
        [
          "Arts & Sciences Quantitative Finance M.S.",
          "https://artsci.tamu.edu/mathematics/academics/graduate/quantitative-finance-ms.html"
        ],
        [
          "Mays Apply — master’s via BusinessCAS",
          "https://mays.tamu.edu/apply/"
        ],
        [
          "Classic 4+1 MS Finance DISTINCT",
          "https://mays.tamu.edu/graduate/masters/4plus1/ms-finance/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'berkeley-mfe': {
    academic: 'Berkeley Haas MFE: spring-only start (no Fall). Spring 2028 rounds Dec 1\'26 / Jan 27 / Apr 1 / Jul 1\'27 (+ late Jul 15). FT tuition proxy Class of 2028 $95,353 (+$98,036 P&U fees). STEM. QuantNet #5.',
    orientation: 'Spring start · 1-yr FT / 2-yr Flex · QuantNet #5 · SEPARATE TRACK',
    duration: '1-year full-time (spring start) or 2-year Flex part-time',
    tracks: ["Full-time 1-year MFE","Flex 2-year MFE (same curriculum)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #5 (tie). Spring-only; internship typically mid-program. STEM CIP 27.0305 Financial Mathematics (BIO memo).',
    credits: 28,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: true,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 5,
    tuition: 98036,
    tuitionAlt: null,
    tuitionLabel: 'Program & University Fees Class of 2028 FT (enter Jan 2027) — proxy until Spring 2028 / Class of 2029 COA posted; tuition component line $95,353',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: 2683,
    period: '2026–27 · Class of 2028 FT Spring 2027–Fall 2027 (proxy for Spring 2028 enterers)',
    costNote: 'SEPARATE TRACK quant-mfe. SPRING-ONLY — no Fall admit (Spring 2028 rounds Dec 1\'26–Jul 1\'27). STEM CIP 27.0305. Flex 2-yr part-time $3,353/unit from Spring 2027 (28 units). Spring 2028 COA not posted as of asOf — Class of 2028 used as proxy.',
    costDetail: 'Tuition component inside Program & University Fees: $95,353. Catalog tuition is the published Program & University Fees figure. Mandatory fees reference: $2,683. Campus Fee $2,282 + IREF $282 + Documentation Mgmt Fee $119 = $2,683 (Class of 2028 COA). Health Insurance $8,206 (SHIP; waivable with comparable coverage). BIO intl fee $56/sem noted separately. Academic billed program charge published as Program & University Fees $98,036 (tuition component $95,353). Total estimated COA $126,510 incl. living/insurance/books. SEPARATE TRACK quant-mfe. SPRING-ONLY — no Fall admit (Spring 2028 rounds Dec 1\'26–Jul 1\'27). STEM CIP 27.0305. Flex 2-yr part-time $3,353/unit from Spring 2027 (28 units). Spring 2028 COA not posted as of asOf — Class of 2028 used as proxy. Haas COA for Class of 2028 (Spring 2027–Fall 2027): tuition $95,353; Program & University Fees $98,036; total estimated COA $126,510 incl. living/insurance. Spring 2028 (Class of 2029) figures not yet posted — re-verify. Flex 2-year: $3,353/unit from Spring 2027; 28 units listed for part-time path. Living cost band from official COA: $19,674 (Haas MFE Class of 2028 FT Est Living Expenses $9,837 × 2 terms = $19,674 (instruction dates only; excludes internship/non-instruction breaks).). SPRING-ONLY badge: no Fall admission.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-140.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-140.',
    livingCostBand: {
      low: 19674,
      high: null,
      basis: 'Haas MFE Class of 2028 FT Est Living Expenses $9,837 × 2 terms = $19,674 (instruction dates only; excludes internship/non-instruction breaks).',
    },
    deadline: 'Spring 2028 Round 1 · 2026-12-01 · 9:00 a.m. ET · SPRING-ONLY — no Fall admission',
    deadlineDate: '2026-12-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-140"],
    sources: [
      ['Admissions / Spring 2028 deadlines', 'https://mfe.haas.berkeley.edu/admissions'],
      ['Official tuition / budget', 'https://haas.berkeley.edu/financial-aid/master-of-financial-engineering/cost/'],
      ['Grad Division program page', 'https://grad.berkeley.edu/program/master-of-financial-engineering-mfe/'],
      ['STEM CIP memo (BIO)', 'https://internationaloffice.berkeley.edu/sites/default/files/master_of_financial_engineering_stem_memo.pdf'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
    ],
    programUrl: 'https://mfe.haas.berkeley.edu/admissions',
    availability: 'SPRING-ONLY · Spring only (January) — NO Fall admission; Spring 2028 cycle relevant for ~Fall 2027 app window',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Require GMAT, GMAT Focus, GRE, or GRE General Test at home (valid 5 years; for Spring 2027 entry not older than Jan 1, 2022). Optional only if (a) PhD earned/will earn before MFE start, OR (b) U.S. four-year bachelor with final cumulative GPA ≥3.70/4.00 (no rounding; non-U.S. bachelor and non-4.0 scales ineligible). Committee may still request a score. GRE codes 4833 / dept 4399.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT or GMAT Focus accepted interchangeably with GRE under same required/optional-eligibility rules above. Send to UC Berkeley Haas MFE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "TOEFL iBT/Home Edition minimum 90 (institution 4833, dept 82). MyBest and TOEFL ITP/Duolingo not accepted. Haas Knowledge also notes revised TOEFL scale ≥4.5 for exams after January 2026—confirm which scale applies to Spring 2028 entry when registering."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall BAND ≥7; TOEFL preferred. Send TRF electronically to UC Berkeley Graduate Division."
        },
        "waiver": "Degree from country where official language is English; OR ≥1 year full-time coursework with grades B or better at a U.S. university (ESL/non-English/nonacademic/future courses excluded). Degrees from listed regions (e.g. India, PRC, Taiwan, most of Europe, etc.) do not meet country waiver even if instruction was English."
      },
      "gpa": {
        "status": "required",
        "minimum": 3,
        "scale": "4.0",
        "detail": "Satisfactory scholastic average, usually minimum 3.0 in upper-division work (Haas MFE requirements)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 2,
        "detail": "Two letters from academic or professional evaluators of quantitative ability. Co-workers/tutors/friends/family inadmissible. Professional email required (no free personal providers per Haas Knowledge)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Series of essay questions in application; anti-plagiarism screening. Supplemental Information questions required (N/A if not applicable). Reapplicants within 2 years have special instructions.",
        "alsoKnownAs": "essays"
      },
      "resume": {
        "status": "not_stated",
        "detail": "Resume/CV not separately named on the requirements overview; work experience preferred but not required—confirm checklist in online application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scans of official transcripts from all undergraduate and graduate programs attended. Degree from accredited institution before MFE start."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Invitation-only; do not request. May cover prerequisites/resume topics; sometimes more than one interview. Interviewers are not the admissions committee."
      },
      "applicationFee": {
        "amountUsd": 275,
        "waivers": "Not detailed on MFE requirements page beyond ETS GRE fee reduction partnership context.",
        "detail": "Non-refundable $275 application fee (credit card preferred; check/money order to UC Regents)."
      },
      "other": [
        "Video essay required (webcam/mic; up to 2 attempts; ≤2 minutes).",
        "Prerequisites: strong quant background (linear algebra, multivariate calculus, differential equations, numerical analysis, advanced stats/probability); programming exposure (C++, Python); stats/econometrics (e.g. R); ML concepts.",
        "SPRING-ONLY start (January); no Fall admission. Full-time 1-year and Flex 2-year both spring start.",
        "Spring 2028 rounds: Dec 1 2026; Jan 27; Apr 1; Jul 1 2027 (late to Jul 15 space-available)."
      ],
      "advice": "Spring-only — do not list as Fall admit. Spring 2027 apps closed; Spring 2028 cycle opens later in 2026 per admissions hub.",
      "sources": [
        [
          "Admissions hub (Spring-only + Spring 2028 rounds)",
          "https://mfe.haas.berkeley.edu/admissions"
        ],
        [
          "Application requirements",
          "https://mfe.haas.berkeley.edu/admissions/requirements"
        ],
        [
          "International applicants English",
          "https://mfe.haas.berkeley.edu/admissions/international"
        ],
        [
          "Haas Knowledge: admissions requirements",
          "https://knowledge.haas.berkeley.edu/knowledge/mfe/what-are-the-admissions-requirements"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'cmu-mscf': {
    academic: 'CMU MSCF: Fall-only; R1 Dec 1\'26 / R2 Mar 1\'27. Tuition $71,800/AY 2026–27. ~16 mo Pittsburgh or NYC. STEM. QuantNet #3.',
    orientation: 'Fall start · ~16 mo · QuantNet #3 · SEPARATE TRACK',
    duration: '~16 months (Fall–Spring–summer internship–Fall); mandatory Aug orientation from Aug 1',
    tracks: ["Pittsburgh campus","New York City campus (same live instruction)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #3. Full-time only; required summer internship. STEM (program/industry STEM-OPT; verify CIP on I-20).',
    credits: null,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 3,
    tuition: 71800,
    tuitionAlt: null,
    tuitionLabel: 'MSCF tuition academic year 2026–27 (Fall+Spring) Pittsburgh or NYC — $35,900/semester',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: 1040,
    period: '2026–27 AY',
    costNote: 'SEPARATE TRACK quant-mfe. Fall-only entry; mandatory Aug orientation from Aug 1; required summer internship. STEM (verify CIP on I-20). QuantNet ~$104.6k total not used as official. PIT COA total $110,408 / NYC $112,606 incl. living/insurance/loan fees (as of Jul/Jun 2026 on SFS). Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $1,040. Pittsburgh AY required fees: Student Activities $248 + Transportation $302 + Technology $490 = $1,040. NYC: Technology $490 (no activities/transport on SFS table). Health Insurance PIT $3,352 / NYC $3,258 (AY). Summer Session rates set by college — total program tuition over ~16 mo (3 academic semesters + required summer internship) not published as a flat sticker; illustrative 3×$35,900=$107,700 unverified for summer billing. SEPARATE TRACK quant-mfe. Fall-only entry; mandatory Aug orientation from Aug 1; required summer internship. STEM (verify CIP on I-20). QuantNet ~$104.6k total not used as official. PIT COA total $110,408 / NYC $112,606 incl. living/insurance/loan fees (as of Jul/Jun 2026 on SFS). CMU SFS MSCF: $71,800 AY tuition ($35,900/sem). Program ~16 months (Fall, Spring, required summer internship, final Fall). Total program tuition depends on summer billing — re-confirm with MSCF; QuantNet lists ~$104.6k (not official). Living cost band from official COA: $30,504–$33,252 (CMU SFS MSCF 2026–27 AY living: PIT Housing $14,752 + Food $8,664 + Personal $4,098 + Travel $2,990 = $30,504; NYC Housing $15,952 + Food $9,570 + Personal $4,142 + Travel $3,588 = $33,252 (excludes books $2,212 and health insurance).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-141.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-141.',
    livingCostBand: {
      low: 30504,
      high: 33252,
      basis: 'CMU SFS MSCF 2026–27 AY living: PIT Housing $14,752 + Food $8,664 + Personal $4,098 + Travel $2,990 = $30,504; NYC Housing $15,952 + Food $9,570 + Personal $4,142 + Travel $3,588 = $33,252 (excludes books $2,212 and health insurance).',
    },
    deadline: 'Round 1 application · 2026-12-01',
    deadlineDate: '2026-12-01',
    asOf: '2026-10-26',
    scholarships: ["SCH-141"],
    sources: [
      ['Admissions / deadlines', 'https://www.cmu.edu/mscf/admissions'],
      ['FAQ (duration, internship, Fall-only)', 'https://www.cmu.edu/mscf/admissions/faq'],
      ['Official tuition / budget', 'https://www.cmu.edu/sfs/tuition/graduate/mscf.html'],
      ['Curriculum', 'https://www.cmu.edu/mscf/academics/curriculum'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['MSCF Tuition & Financial Aid', 'https://www.cmu.edu/mscf/admissions/tuition-financial-aid'],
    ],
    programUrl: 'https://www.cmu.edu/mscf/admissions',
    availability: 'Fall 2027 (Aug orientation; Fall-only entry)',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Official valid GRE or GMAT required (not both). Scores within 5 years and valid at application; accept arrival within 2 weeks of deadline. Self-report highest; GRE program code 7383. Application not reviewed without official score.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted in lieu of GRE (code MSCF/Tepper 69H-XH-17). Either GRE or GMAT required.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "International candidates must take Duolingo, TOEFL (code B522 Carnegie Mellon–MSCF), or IELTS unless waiver criteria met. Scores valid 2 years at application. No numeric minimum posted on MSCF admissions page."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "Accepted; select Carnegie Mellon University and Computational Finance. Minimum not posted on MSCF admissions page."
        },
        "waiver": "Waiver if ≥2 years at undergrad institution earning bachelor’s where sole language of instruction was English (by Jul 31 of entry-year context per page wording—verify cycle year) OR graduate degree taught entirely in English. Documentation rules apply for non-U.S./non-English-official-language countries."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA on MSCF admissions page; class profile shows average GPA 3.80 (descriptive, not a cutoff)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three LORs; prefer ability to speak to math/stats/CS/applied finance, English communication, teamwork. Recent students: ≥1 academic; prefer ≥1 professional. App not forwarded until all 3 received."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Two short-answer essays (350 words max each) after selecting post-MSCF career path; plus required 90-second video essay; optional essay ≤2 pages.",
        "alsoKnownAs": "essays / video essay"
      },
      "resume": {
        "status": "required",
        "detail": "1–2 pages; standard 12-pt font; must include month/year start and end for each position."
      },
      "transcripts": {
        "status": "required",
        "detail": "Upload legible scans of official transcripts/degree certificates for ALL institutions (incl. exchange/transfer). Internet printouts/unofficial copies not accepted for upload standard stated. Non-English: official translation; WES evaluations not accepted (WES standards as guideline only). Official sealed upon admit."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Invite-only on-campus or Zoom; requests for interview not considered. Clarifies quant prep, career fit, professional communication."
      },
      "applicationFee": {
        "amountUsd": 125,
        "waivers": "Fee waived for reapplicants who applied for 2026 when reapplying for Fall 2027.",
        "detail": "$125 payable online by credit card at submission."
      },
      "other": [
        "Prerequisites: Calc I–II, linear algebra, calculus-based probability, ≥1 semester OOP (C++/Java/Python/C#); remediation before enrollment possible.",
        "Four-year bachelor’s or foreign equivalent required before start.",
        "Fall-only; mandatory on-campus Orientation from Aug 1.",
        "Fall 2027 rounds: R1 Dec 1 2026; R2 Mar 1 2027."
      ],
      "advice": "Fall-only with Aug 1 orientation and required summer internship path. GRE/GMAT hard required.",
      "sources": [
        [
          "MSCF Admissions",
          "https://www.cmu.edu/mscf/admissions"
        ],
        [
          "MSCF Admissions FAQ",
          "https://www.cmu.edu/mscf/admissions/faq"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'baruch-mfe': {
    academic: 'Baruch MFE: Fall-only; rounds Nov 1 / Dec 1 / Jan 15 / Mar 15\'27. Package tuition ~$27.7k NY / $42k OOS (verify AEF). 36 cr / 3 sem. STEM. QuantNet #1.',
    orientation: 'Fall start · 3 semesters · QuantNet #1 · SEPARATE TRACK',
    duration: 'Three semesters (Fall admission only)',
    tracks: ["Full-time","Part-time (same admissions standard)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #1. GRE/GMAT not required — Quantitative Background Assessment (QBA) instead. STEM CIP 27.0305 (catalog).',
    credits: 36,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 1,
    tuition: 42000,
    tuitionAlt: null,
    tuitionLabel: 'Entire-program tuition package out-of-state / international (MFE About page) — NY residents $27,675',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: null,
    period: '2026–27 · Entire 3-semester program package (About) vs catalog Fall 2025+ rates',
    costNote: 'SEPARATE TRACK quant-mfe. Fall-only; 3 semesters / 36 credits; STEM. F-1/J-1 pay non-resident. Prefer About package $42k intl as published program sticker; flag catalog AEF path may bill higher. Fall 2027 intake context.',
    costDetail: 'Enrollment-based fees catalog ~$179.60/sem FT (Tech $125 + Consolidated $15 + Senate $1.45 + Activity $38.15). Academic Excellence Fee (AEF) for MS Financial Engineering $375/credit. Catalog estimate OOS: 36 cr × ($855 non-res + $375 AEF) = $44,280 tuition+AEF before enrollment fees — diverges from About-page $42,000 package; re-verify bursar package for Fall 2027. About page still showed stale 2023–24 deadlines as of fetch — package dollars may lag. SEPARATE TRACK quant-mfe. Fall-only; 3 semesters / 36 credits; STEM. F-1/J-1 pay non-resident. Prefer About package $42k intl as published program sticker; flag catalog AEF path may bill higher. Official About page: $27,675 NY / $42,000 OOS+intl for entire program. Catalog also lists Academic Excellence Fee $375/credit for MS Financial Engineering — package figures may need re-verify against current bursar. QuantNet lists higher tuition figure — not used as official. Living cost band not published for this program (null, not zero).',
    funding: 'No verified open admit-time merit scholarship for baruch-mfe (as of 2026-10-26). The Jim Gatheral award is for current students and is not ingested.',
    fundingNotes: 'No verified open admit-time merit scholarship for baruch-mfe (as of 2026-10-26). The Jim Gatheral award is for current students and is not ingested.',
    livingCostBand: null,
    deadline: 'Fall 2027 Round 1 · 2026-11-01',
    deadlineDate: '2026-11-01',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Application process / Fall 2027 deadlines', 'https://mfe.baruch.cuny.edu/application-process/'],
      ['Official tuition / budget', 'https://mfe.baruch.cuny.edu/about/'],
      ['Catalog FINENGR-MS', 'https://baruch-graduate.catalog.cuny.edu/programs/FINENGR-MS'],
      ['Tuition & AEF catalog', 'https://baruch-graduate.catalog.cuny.edu/fees-expenses-financial-aid/tuition-and-fees'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['Baruch Bursar Tuition', 'https://adminfinance.baruch.cuny.edu/bursar/tuition/'],
    ],
    programUrl: 'https://mfe.baruch.cuny.edu/application-process/',
    availability: 'Fall 2027 only',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "GRE/GMAT no longer required; no place on application to submit scores; if attached separately they will not be taken into account. All applicants take Quantitative Background Assessment (QBA) instead.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "Same as GRE: not accepted / not considered; QBA replaces standardized tests.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "not_required",
          "minScore": null,
          "detail": "TOEFL scores are not required. English communication assessed at admission interviews."
        },
        "ielts": {
          "status": "not_required",
          "minScore": null,
          "detail": "Not required per MFE application-process page."
        },
        "waiver": "N/A — English tests not required; assessed in interviews."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated; baccalaureate from accredited 4-year U.S. college or foreign equivalent required."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters from individuals who can comment on skills for MFE success; no requirement that one be professor or industry."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal essay must answer: why Financial Engineering; why Baruch MFE; envisioned career path after graduating.",
        "alsoKnownAs": "personal essay"
      },
      "resume": {
        "status": "unknown",
        "detail": "Not explicitly listed on current Fall 2027 application-process page (older Weissman PDF mentioned resume). Confirm live application checklist."
      },
      "transcripts": {
        "status": "required",
        "detail": "Scan transcripts from ALL schools attended into one file and upload. Official transcripts required only after admission offer."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Two virtual Zoom interview rounds before offer; primarily technical (math, finance, C++). Selected applicants contacted; cannot request interview."
      },
      "applicationFee": {
        "amountUsd": null,
        "waivers": "",
        "detail": "Current Fall 2027 MFE application-process page does not state fee amount. Older Weissman graduate application instructions PDF listed $75 non-refundable (also contained outdated GRE language)—treat fee as unconfirmed until live portal/Weissman confirms."
      },
      "other": [
        "Mandatory Quantitative Background Assessment (QBA): Calculus, Linear Algebra, Probability, Finance, Brainteasers; online timed; open book; no internet/AI; honor code.",
        "Prerequisites (B or better): Calc 2 semesters; Probability 1; Linear Algebra 1; C++ 1 semester/certificate; Finance 1 semester or relevant work.",
        "Fall-only admission; Fall 2027 rounds Nov 1 / Dec 1 / Jan 15 / Mar 15 (plus Apr 1 for Spring Pre-MFE seminar students only).",
        "Apply in only one round per year."
      ],
      "advice": "GRE/GMAT not accepted—prepare for QBA + technical interviews. English tests not required.",
      "sources": [
        [
          "Application process Fall 2027",
          "https://mfe.baruch.cuny.edu/application-process/"
        ],
        [
          "Weissman Graduate Admissions deadlines hub",
          "https://weissman.baruch.cuny.edu/graduate-studies/admissions-requirements/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'columbia-ieor-mfe': {
    academic: 'Columbia IEOR MSFE: Fall-only deadline Jan 15, 2027; decisions mid–late Apr. ~$101,592 tuition (36×$2,822). STEM. QuantNet #4.',
    orientation: 'Fall start · ~3 semesters · QuantNet #4 · SEPARATE TRACK',
    duration: 'Typically three semesters full-time (Fall start); IEOR budgets 36-credit programs over three semesters',
    tracks: ["MSFE (Fall only)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #4. Official page: STEM-certified / F-1 STEM OPT eligible. Not CBS MSFE.',
    credits: 36,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 4,
    tuition: 101592,
    tuitionAlt: null,
    tuitionLabel: 'Estimated program tuition 36 points × $2,822/point (2026–27 SEAS M.S. rate)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: 7099,
    period: '2026–27 rates × 36 points (3-semester MSFE)',
    costNote: 'SEPARATE TRACK quant-mfe. columbia-ieor-mfe (IEOR MSFE) ≠ columbia-msfe (CBS MS Financial Economics). STEM-certified. Fall matriculation. Do not mix with CBS costs. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $7,099. Illustrative 3-semester fee stack from 2026–27 Bulletin: IEOR master\'s program fee FT $1,144 + University Services & Support $703×3=$2,109 + Health & Related Services $759×3=$2,277 + International Services $175×3=$525 + Activities (first-year FT $480 + continuing FT $460)=$940 + Document fee $105 one-time ≈ $7,100. Exact billing depends on enrollment pace. IEOR department tuition page still showed 2024–25 $2,584/cr / $93,024 for 36-cr — superseded by Bulletin 2026–27 $2,822/point. ISSO I-20 estimate for MS Financial Engineering: Tuition & Fees $78,998 + Living $31,625 = $110,623 per academic year (issuance estimate; not full 3-sem sticker). SEPARATE TRACK quant-mfe. columbia-ieor-mfe (IEOR MSFE) ≠ columbia-msfe (CBS MS Financial Economics). STEM-certified. Fall matriculation. Do not mix with CBS costs. Columbia SFS Graduate Engineering 2026–27: $2,822 per point. IEOR lists MSFE as 36-credit program. 36×$2,822=$101,592 tuition (fees extra; IEOR +$1,144 program fee noted on SFS). Older IEOR tuition page still showed 2024–25 $2,584 — use SFS 2026–27. Distinct from CBS MS Financial Economics (columbia-msfe on primary slate). Living cost band from official COA: $31,625 (Columbia ISSO estimated living expenses for Engineering MS Financial Engineering $31,625 per academic year (I-20/DS-2019 issuance; actual may differ).). columbia-ieor-mfe (IEOR MSFE) is not columbia-msfe (CBS MS Financial Economics). Do not copy these costs onto columbia-msfe.',
    funding: 'Program-tied funding verified 2026-10-26: SCH-142, SCH-143, SCH-144. These awards belong to columbia-ieor-mfe only. Do not attach them to columbia-msfe (CBS MSFE).',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-142, SCH-143, SCH-144. These awards belong to columbia-ieor-mfe only. Do not attach them to columbia-msfe (CBS MSFE).',
    livingCostBand: {
      low: 31625,
      high: null,
      basis: 'Columbia ISSO estimated living expenses for Engineering MS Financial Engineering $31,625 per academic year (I-20/DS-2019 issuance; actual may differ).',
    },
    deadline: 'Fall MS Financial Engineering deadline · 2027-01-15',
    deadlineDate: '2027-01-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-142","SCH-143","SCH-144"],
    sources: [
      ['Official tuition / budget', 'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/'],
      ['IEOR MSFE program', 'https://ieor.columbia.edu/financial-engineering-msfe'],
      ['IEOR graduate timelines', 'https://ieor.columbia.edu/graduate-programs-timelines'],
      ['Columbia Engineering application deadlines', 'https://www.engineering.columbia.edu/admissions-aid/graduate-admissions/how-apply/application-requirements'],
      ['SFS Graduate Engineering COA 2026–27', 'https://sfs.columbia.edu/content/graduate-engineering-cost-attendance'],
      ['IEOR tuition page (may lag)', 'https://ieor.columbia.edu/tuition-and-fees'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['Columbia Engineering Bulletin Fees (IEOR program fee)', 'https://bulletin.columbia.edu/columbia-engineering/graduate-studies/graduate-tuition-fees-payments/fees/'],
      ['ISSO Eng graduate estimated expenses PDF', 'https://isso.columbia.edu/sites/isso.columbia.edu/files/content/rates/eng.pdf'],
    ],
    programUrl: 'https://ieor.columbia.edu/financial-engineering-msfe',
    availability: 'Fall 2027 only (no Spring MSFE)',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "Columbia Engineering: GRE not required for 2027 admission cycle (Spring 2027 and Fall 2027). Scores may be submitted optionally; non-submitters not penalized. Official scores required if admitted and scores were provided. School code 2111. IEOR FAQ still advises preparing GRE historically—policy for 2027 is optional.",
        "minScore": null
      },
      "gmat": {
        "status": "optional",
        "detail": "IEOR FAQ: GMAT not a requirement; may be included as supplementary material with personal statement file.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": null,
          "detail": "Required if undergrad degree earned outside Australia, Canada, Ghana, Ireland, Kenya, New Zealand, Nigeria, Singapore, UK, USA (incl. transfers/joint programs). TOEFL iBT/Home, IELTS Academic, PTE Academic, or Duolingo accepted (one test). No hard minimum to apply; IEOR notes may need to improve English if TOEFL ≤4.5 (post-Jan 21 2026 scale) or ≤99 (pre), IELTS ≤7.5, PTE ≤68, DET ≤130."
        },
        "ielts": {
          "status": "required",
          "minScore": null,
          "detail": "Accepted as one of the English options under Engineering rules above."
        },
        "waiver": "Exception if master’s earned/will be completed in Australia, Canada, Ghana, Ireland, Kenya, New Zealand, Nigeria, Singapore, UK, or USA. Application also guides based on background. IEOR: waive if entirety of undergrad or graduate degree in an English-speaking country (per FAQ)."
      },
      "gpa": {
        "status": "recommended",
        "minimum": 3,
        "scale": "4.0",
        "detail": "IEOR FAQ: 3.0/4.0 GPA preferred; most successful applicants above 3.0. Not a hard stated cutoff."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three LORs. ≥2 academic unless bachelor’s earned >5 years before application (then academic strongly encouraged but not required)."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Personal statement required (Engineering application materials).",
        "alsoKnownAs": "personal statement"
      },
      "resume": {
        "status": "required",
        "detail": "Résumé or CV required."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from every post-secondary institution attended; translations if not issued in English."
      },
      "interview": {
        "status": "required",
        "detail": "Mandatory Video Interview for MS applications after submit + fee paid (Status Portal): 3 random behavioral questions; 90 seconds to consider; 3 minutes to record answers to all three. Engineering overview also notes an additional interview may be requested."
      },
      "applicationFee": {
        "amountUsd": 85,
        "waivers": "Possible for U.S. citizens/PR enrolled in U.S. school with financial need and U.S. military/veterans via Application Fee Waiver Request Form.",
        "detail": "$85 non-refundable via online application."
      },
      "other": [
        "≠ columbia-msfe (CBS). This id is IEOR Engineering MSFE.",
        "MSFE Fall start only (IEOR FAQ).",
        "MSFE prep: calculus, linear algebra, probability, statistics; differential equations helpful; Python essential; finance concepts (derivatives, risk, portfolio, markets).",
        "Publications optional.",
        "Only one Columbia Engineering program application per term."
      ],
      "advice": "Distinguish from CBS columbia-msfe. Video interview is mandatory for MS. GRE optional for Fall 2027 Engineering cycle.",
      "sources": [
        [
          "Columbia Engineering application requirements",
          "https://www.engineering.columbia.edu/admissions-aid/graduate-admissions/how-apply/application-requirements"
        ],
        [
          "IEOR Master of Science Admissions FAQs",
          "https://ieor.columbia.edu/masters-admissions-faqs"
        ],
        [
          "IEOR MSFE program",
          "https://ieor.columbia.edu/financial-engineering-msfe"
        ],
        [
          "Engineering Fall 2027 brochure (PDF)",
          "https://www.engineering.columbia.edu/sites/default/files/2026-09/Tri-fold_9-22-26.pdf"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'gt-qcf': {
    academic: 'GT QCF: Fall 2027 early Oct 15\'26 / std Dec 5 / finals Mar 15 & May 1\'27. 36 cr; Fall ~1.5 yr. STEM stated. QuantNet #8. Per-hr tuition Fall 2026 rates.',
    orientation: 'Fall or Spring · 36 cr · QuantNet #8 · SEPARATE TRACK',
    duration: 'Fall traditional ~1.5 years (w/ summer internship); Spring fast track ~1 year (no internship) or extended 1.5–2 years',
    tracks: ["Fall traditional (internship)","Spring fast track","Spring traditional/extended","Full-time or part-time (same daytime schedule)","Optional MS-QCF / MS-CSE shared-credit path"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #8. Program site calls it a STEM degree. Catalog: 36 credit hours.',
    credits: 36,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 8,
    tuition: 21935,
    tuitionAlt: null,
    tuitionLabel: 'Out-of-Country MSQCF full-time semester tuition (≥12 cr) Fall 2026 bursar — OOS $21,316; IS $9,103',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: 758,
    period: '2026–27 · Fall 2026 rates (proxy until Fall 2027 posted)',
    costNote: 'SEPARATE TRACK quant-mfe. id=gt-qcf (NOT gatech-qcf). Fall and Spring admits; STEM. Use Out-of-Country for typical HK/TW/PRC F-1. GA/GTA rates on fa26_gra.pdf are assistantship-reduced — do not confuse with full sticker. Fall 2027 intake context.',
    costDetail: 'Catalog tuition is Out-of-Country full-time semester tuition (≥12 credits), not a full-program total. Out-of-state and in-state semester rates are in the tuition label. Mandatory fees reference: $758. Mandatory Institute Fees $758/sem at 4+ credits (Fall 2026). International Student Fee (ISF) $100/term for F/J. Health insurance TBD on bursar totals page. Per-hour: IS $759 / OOS $1,778 / OOC $1,829. Program 36 credits — flat program total not published; Fall traditional path includes summer internship (~1.5 yr). Fall 2027 rates not posted as of asOf — Fall 2026 used as current published schedule. SEPARATE TRACK quant-mfe. id=gt-qcf (NOT gatech-qcf). Fall and Spring admits; STEM. Use Out-of-Country for typical HK/TW/PRC F-1. GA/GTA rates on fa26_gra.pdf are assistantship-reduced — do not confuse with full sticker. GT bursar Fall 2026 MSQCF: IS $759/hr ($9,103 ≥12 cr); OOS $1,778/hr ($21,316); Out-of-country $1,829/hr ($21,935) + mandatory fees. 36-credit degree → rough multi-semester total depends on load/residency; do not invent flat program total. Fall traditional track ~1.5 years with summer internship. Living cost band from official COA: $22,612–$25,256 (GT Financial Aid Out-of-Country graduate COA excluding tuition/fees: on-campus $22,612 / off-campus $25,256 per year (Housing+Food+Books+Personal+Transport; OOC table omits average loan costs).).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-146.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-146.',
    livingCostBand: {
      low: 22612,
      high: 25256,
      basis: 'GT Financial Aid Out-of-Country graduate COA excluding tuition/fees: on-campus $22,612 / off-campus $25,256 per year (Housing+Food+Books+Personal+Transport; OOC table omits average loan costs).',
    },
    deadline: 'Fall 2027 Early · 2026-10-15 · Fall and Spring admits; Fall 2027 Early is the primary date',
    deadlineDate: '2026-10-15',
    asOf: '2026-10-26',
    scholarships: ["SCH-146"],
    sources: [
      ['Official tuition / budget', 'https://bursar.gatech.edu/student/tuition/fa26/fa26_qcf.pdf'],
      ['Application requirements / deadlines', 'https://qcf.gatech.edu/prospective-students/application-requirements'],
      ['Prospective (STEM wording)', 'https://qcf.gatech.edu/prospective-students'],
      ['Curriculum / 36 credits', 'https://qcf.gatech.edu/student-life/academics-curriculum'],
      ['GT Catalog MS QCF', 'https://catalog.gatech.edu/programs/quantitative-computational-finance-ms/'],
      ['Fall 2026 bursar MSQCF rates PDF', 'https://bursar.gatech.edu/student/tuition/fa26/fa26_totals.pdf'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['QCF Tuition & Funding (page still shows 2023–24 narrative)', 'https://qcf.gatech.edu/prospective-students/tuition-costs-and-funding-opportunites'],
      ['GT Graduate Costs', 'https://finaid.gatech.edu/costs/graduate-costs'],
    ],
    programUrl: 'https://qcf.gatech.edu/prospective-students/application-requirements',
    availability: 'Fall 2027 or Spring 2027 (dual intake)',
    accessRestricted: false,
    id_alias_legacy: ["gatech-qcf"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Official GRE or GMAT required unless waived: 4-year U.S. undergrad GPA ≥3.7 OR Ph.D. Scores valid 5 years; higher quant score used if multiple. Institute GRE/TOEFL code 5248. Unofficial OK to evaluate; official needed before offer.",
        "minScore": null
      },
      "gmat": {
        "status": "required",
        "detail": "GMAT accepted (code HWK-54-37) but applicants with GMAT must apply through College of Business home unit. Same waiver rules as GRE.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 4.5,
          "detail": "TOEFL or IELTS only (Duolingo not accepted per QCF FAQ). GT Catalog: TOEFL iBT overall ≥4.5 (Speaking ≥3.5; Writing/Listening/Reading ≥4) on new scale; page notes prior iBT 90 ≈ 4.5. Also degree-from-approved-country or English-medium institution pathways."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic overall 7.0 (Writing 5.5; Speaking/Listening/Reading 6.5) per GT Catalog."
        },
        "waiver": "GT Catalog approved methods: degree from approved-country institution; degree from English-medium institution (MOI letter may be required); USG campus ESL completion; or meeting TOEFL/IELTS minima. QCF international page highlights collegiate degree where English was sole official language of instruction."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA; holistic review with emphasis on quantitative coursework and quant test scores (QCF FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three recommenders (academic and/or professional). Minimum 2 of 3 needed for Grad Education to forward application."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Essay ≤750 words on academic/professional motivation and post-degree career vision; plus short-answers (project ≤750; programming ≤500; optional weaknesses ≤250).",
        "alsoKnownAs": "essay / short-answer questions"
      },
      "resume": {
        "status": "required",
        "detail": "Resume required (QCF Admissions FAQ)."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcripts uploaded; official may be required if admitted. International: native + English translations of transcripts and degree docs."
      },
      "interview": {
        "status": "by_invitation",
        "detail": "Competitive candidates invited to ~30-minute behavioral Zoom interview with Associate Director (resume/projects/academic history)."
      },
      "applicationFee": {
        "amountUsd": 95,
        "waivers": "QCF states it does not provide application fee waivers.",
        "detail": "$95 domestic / $105 international (e-check or credit card)."
      },
      "other": [
        "U.S.-equivalent 4-year bachelor’s required.",
        "Quant background: Calc I–III, linear algebra, probability & statistics, differential equations; programming preferred (Python/R/C++/SAS).",
        "Fall and Spring enrollment; Fall traditional ~1.5 yr with summer internship.",
        "Fall 2027 deadlines: Early Oct 15 2026; Standard Dec 5 2026; Final intl outside US Mar 15 2027; Final US/PR/intl-in-US May 1 2027 (closes May 15)."
      ],
      "advice": "GRE/GMAT required except U.S. 3.7+/PhD waiver. Duolingo not accepted.",
      "sources": [
        [
          "QCF application requirements / deadlines",
          "https://qcf.gatech.edu/prospective-students/application-requirements"
        ],
        [
          "QCF admissions FAQ",
          "https://qcf.gatech.edu/prospective-students/admissions-faq"
        ],
        [
          "QCF international students",
          "https://qcf.gatech.edu/prospective-students/international-students"
        ],
        [
          "GT Catalog English Language Proficiency",
          "https://catalog.gatech.edu/admissions/grad/english-language-proficiency/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'chicago-finmath': {
    academic: 'Chicago MSFM: Autumn\'27 R1 Nov 2\'26 / R2 Feb 1\'27. $8,017/100 units; 1,250 units. STEM. QuantNet #7.',
    orientation: 'Autumn (in-person) · ~5 quarters · QuantNet #7 · SEPARATE TRACK',
    duration: 'In-person typically five quarters (~15 months); online ~1 year (program descriptions)',
    tracks: ["In-person MSFM (Autumn start)","Online MSFM (Jan / June starts)","Degree concentrations available (in-person)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #7. Official: USCIS-approved STEM field / 24-mo STEM OPT. Credits expressed as UChicago units (not semester hours).',
    credits: 1250,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 7,
    tuition: 100213,
    tuitionAlt: null,
    tuitionLabel: 'Illustrative program tuition if 1,250 units × ($8,017 / 100 units) 2026–27 in-person — unit total from brief/curriculum; confirm exact unit load',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: null,
    period: '2026–27',
    costNote: 'SEPARATE TRACK quant-mfe. In-person Autumn start; online also January/June. STEM. Enrollment deposit $3,000 credited to first Autumn tuition. Bursar PSD confirms FinMath In-Person 100 units = $8,017. Flat sticker only if unit total known — 1,250 u illustrative from brief (null if curriculum unit total changes). Fall 2027 intake context.',
    costDetail: 'Published in-person rate: $8,017 per 100 units. Catalog tuition $100,213 is illustrative at 1,250 units, not a locked flat sticker if the unit load changes. Quarterly Student Services Fee $520; Student Insurance 2026 $1,839/qtr if USHIP; one-time lifetime transcript fee $84 first quarter. Exact fee total depends on number of quarters enrolled (~5 qtr typical in-person). Do not invent multi-quarter fee sum beyond published per-quarter amounts. SEPARATE TRACK quant-mfe. In-person Autumn start; online also January/June. STEM. Enrollment deposit $3,000 credited to first Autumn tuition. Bursar PSD confirms FinMath In-Person 100 units = $8,017. Flat sticker only if unit total known — 1,250 u illustrative from brief (null if curriculum unit total changes). Official: $8,017 per 100 units for 2026–27; degree requires 1,250 units (250 core + 100 computing + 900 elective). Quarterly Student Services Fee $520; USHIP 2026 $1,839 if enrolled; one-time transcript fee $84. Enrollment deposit $3,000 credited to first Autumn tuition. Living cost band not published for this program (null, not zero).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-145.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-145.',
    livingCostBand: null,
    deadline: 'In-person Autumn 2027 Round 1 · 2026-11-02',
    deadlineDate: '2026-11-02',
    asOf: '2026-10-26',
    scholarships: ["SCH-145"],
    sources: [
      ['Apply / deadlines', 'https://finmath.uchicago.edu/admissions/apply/'],
      ['Official tuition / budget', 'https://finmath.uchicago.edu/admissions/tuition/'],
      ['Curriculum / 1250 units', 'https://finmath.uchicago.edu/page/curriculum'],
      ['International / STEM OPT', 'https://finmath.uchicago.edu/admissions/international-students/'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['UChicago Bursar PSD 2026–27 FinMath rates', 'https://bursar.uchicago.edu/Tuition-and-Fees/Tuition-and-Fees-2026-27/Tuition-and-Fees-2026-27-Physical-Sciences-Division'],
    ],
    programUrl: 'https://finmath.uchicago.edu/admissions/apply/',
    availability: 'Autumn 2027 (in-person); online also Jan 2027 / June 2027',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "optional",
        "detail": "GRE not required; welcome to enhance application. Self-report then official ETS (institution 1832; dept 0799 Mathematical Science–Other). Valid if exam within 5 years of deadline.",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "Do not submit GMAT scores (or high school transcripts, theses, publications)—not considered.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "TOEFL iBT or IELTS Academic required unless exception. PSD policy minimum TOEFL 90 or IELTS 7; FinMath prefers significantly higher. Exams within 2 years of deadline. TOEFL code 1832 / dept 72."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic (not General Training) accepted; minimum 7 per PSD policy."
        },
        "waiver": "Waived if (a) English primary language of communication/schooling since childhood; OR (b) ≥1 academic year full-time at accredited English-medium post-secondary in listed countries/territories within past 10 years (incl. Antigua, Australia, Bahamas, Barbados, Canada, Dominica, Grenada, Guyana, Hong Kong, Ireland, Jamaica, NZ, St. Kitts/Nevis, St. Lucia, St. Vincent, Singapore, South Africa, Trinidad & Tobago, UK, USA). English-medium elsewhere / high school / part-time-research-only do not qualify."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No minimum GPA stated on application-requirements page."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three letters; at least one professional reference."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three candidate statements ≤250 words each (shortcoming/steps; program-city-career alignment; additional profile info).",
        "alsoKnownAs": "candidate statements"
      },
      "resume": {
        "status": "required",
        "detail": "Resume/CV with entire work history including start/end dates, locations, full- vs part-time."
      },
      "transcripts": {
        "status": "required",
        "detail": "Transcripts from all previous colleges/universities. Unofficial uploads for review; official final with degree conferral before enrollment if admitted."
      },
      "interview": {
        "status": "not_used",
        "detail": "No live interview listed among required documents. Two video statements are required application components (not a live interview)."
      },
      "applicationFee": {
        "amountUsd": 90,
        "waivers": "Not stated on Apply page.",
        "detail": "$90 per application submitted (Apply page)."
      },
      "other": [
        "Two video statements required.",
        "Math prereqs: multivariable calculus, linear algebra, probability; programming ideally C++/Python/OOP.",
        "Work experience encouraged but not required.",
        "In-person Autumn 2027 rounds: Nov 2 2026; Feb 1 2027. Online also January/June starts."
      ],
      "advice": "In-person is Autumn start; online has Jan/June starts. GMAT not accepted. GRE optional.",
      "sources": [
        [
          "Application requirements",
          "https://finmath.uchicago.edu/admissions/application-requirements/"
        ],
        [
          "Apply / deadlines / fee",
          "https://finmath.uchicago.edu/admissions/apply/"
        ],
        [
          "Admission FAQ",
          "https://finmath.uchicago.edu/admissions/admission-faq/"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'nyu-courant-mf': {
    academic: 'NYU Courant Math Finance: FT deadline Feb 12 (2027 cycle — verify year). 36 points / 3 sem. GSAS ~$2,426/cr. STEM CIP 27.0305. QuantNet #11.',
    orientation: 'Fall FT · 3 semesters · QuantNet #11 · SEPARATE TRACK',
    duration: 'Full-time three semesters (~18 months) with summer internship between 2nd and 3rd; part-time typically ~3 years',
    tracks: ["Full-time MS","Part-time MS","Advanced Certificate","Non-degree (≤12 points)","MBA/MS dual (current FT only)","Optional August summer bootcamp"],
    coreNotes: 'SEPARATE TRACK quant-mfe. QuantNet 2026 #11 (tie). Bulletin CIP 27.0305 — STEM OPT typically applicable; confirm on I-20. GRE required (GMAT not accepted).',
    credits: 36,
    stem: true,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: 11,
    tuition: 87336,
    tuitionAlt: null,
    tuitionLabel: 'Estimated tuition 36 points × GSAS $2,426/credit (2026–27 NYU Bursar)',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: 4425,
    period: '2026–27 GSAS rate × 36 points',
    costNote: 'SEPARATE TRACK quant-mfe. id=nyu-courant-mf (NOT nyu-courant). FT Fall-only; summer internship between sem 2–3; optional August bootcamp. STEM. Program states it does not accept applications for financial assistance. Fall 2027 intake context.',
    costDetail: 'Mandatory fees reference: $4,425. GSAS Registration & Services Fee $503/semester + $81 per credit. Illustrative 3-semester FT path: 3×$503 + 36×$81 = $1,509 + $2,916 = $4,425 (assumes all 36 points billed under GSAS R&S schedule). Confirm actual semester credit splits with program. SEPARATE TRACK quant-mfe. id=nyu-courant-mf (NOT nyu-courant). FT Fall-only; summer internship between sem 2–3; optional August bootcamp. STEM. Program states it does not accept applications for financial assistance. NYU Bursar 2026–27: Graduate School of Arts and Science All Programs $2,426 per credit + $503 registration/services fee + $81 per-credit R&S fee. 36-point degree → tuition $87,336 before fees. Program points to NYU tuition calculator. Living cost band not published for this program (null, not zero).',
    funding: 'NYU Courant Mathematics in Finance does not accept applications for program financial assistance (as of 2026-10-26). No program scholarship card is ingested.',
    fundingNotes: 'NYU Courant Mathematics in Finance does not accept applications for program financial assistance (as of 2026-10-26). No program scholarship card is ingested.',
    livingCostBand: null,
    deadline: 'Full-time Fall (all materials to GSAS) · 2027-02-12 · Program page lists February 12 without year; assigned to Fall 2027 cycle — re-confirm on GSAS for 2027',
    deadlineDate: '2027-02-12',
    asOf: '2026-10-26',
    scholarships: [],
    sources: [
      ['Admissions / deadlines', 'https://math-finance.cims.nyu.edu/admissions/'],
      ['Academics / 36 points', 'https://math-finance.cims.nyu.edu/academics/'],
      ['NYU Bulletin Mathematics in Finance MS', 'https://bulletins.nyu.edu/graduate/arts-science/programs/mathematics-finance-ms/'],
      ['Official tuition / budget', 'https://www.nyu.edu/content/dam/nyu/bursar/documents/2026-2027%20Tuition%20and%20Fees.pdf'],
      ['QuantNet 2026 (IBKR mirror)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
    ],
    programUrl: 'https://math-finance.cims.nyu.edu/admissions/',
    availability: 'Fall 2027 (full-time Fall-only); part-time Fall or Spring',
    accessRestricted: false,
    id_alias_legacy: ["nyu-courant"],
    applicationRequirements: {
      "gre": {
        "status": "required",
        "detail": "Official general GRE required for M.S. (FT and PT). Subject GRE in math/physics/other quant encouraged. Highly quantitative PhD holders may email cims-mathfin-app@nyu.edu with transcript to request GRE waiver. GSAS code 2596. Most accepted students >90th percentile quant (descriptive).",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "GMAT not accepted for standard M.S. (Courant admissions page). Dual MathFin/MBA may use GMAT or GRE for GSAS; GMAT otherwise not a substitute for GRE per GSAS test-scores page.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 100,
          "detail": "TOEFL/IELTS/Duolingo required unless native English, U.S. citizen/PR, or baccalaureate/master’s at English-instruction institution. GSAS recommends TOEFL ≥100 (legacy) / ≥5 (new scale from Jan 2026), DET ≥130, IELTS ≥7; lower scores may still apply. Code 2596; TOEFL Essentials/ITP not accepted."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS accepted; GSAS recommends overall band ≥7."
        },
        "waiver": "Native English speaker; OR U.S. citizen/PR; OR completed/will complete baccalaureate or master’s where language of instruction is English (supporting letter if transcript unclear)."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "No required minimum GPA (Courant admissions FAQ)."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three LORs; ≥2 from instructors of advanced math/quant/CS/engineering. FT: ≥1 math-focused and ≥1 CS/programming-focused preferred. Manager letter OK if significant work experience."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "Three topics ≤150 words each (career motivation; interesting math/science fact; research/class/internship). Optional separate Personal Statement for extra info.",
        "alsoKnownAs": "statement of purpose / statement of academic purpose"
      },
      "resume": {
        "status": "required",
        "detail": "Professional CV/resume with education, employment (company/division/dates/location/responsibilities), non-academic activities."
      },
      "transcripts": {
        "status": "required",
        "detail": "One official academic transcript from each post-secondary institution (upload in online application); official scores/transcripts needed to complete review."
      },
      "interview": {
        "status": "required",
        "detail": "Full-time applicants must submit a short video statement (≤5 minutes) addressing a challenging experience/project relevance to quant finance OR a preferred quant-finance area and fit. Not a live interview; required application video."
      },
      "applicationFee": {
        "amountUsd": 150,
        "waivers": "Not stated on Courant admissions page.",
        "detail": "Non-refundable $150 (Courant admissions FAQ)."
      },
      "other": [
        "FT Fall-only (deadline Feb 12); PT Aug 1 Fall / Dec 1 Spring.",
        "After submit: no updated grades/resumes/experience accepted.",
        "Apply to only one Courant Math Finance program at a time."
      ],
      "advice": "GRE required (GMAT not accepted for standard MS). Required video statement for FT/PT MS.",
      "sources": [
        [
          "Courant Math Finance admissions",
          "https://math-finance.cims.nyu.edu/admissions/"
        ],
        [
          "GSAS Mathematics in Finance requirements",
          "https://gsas.nyu.edu/admissions/arc/programs/mathematics-in-finance.html"
        ],
        [
          "GSAS Test Scores",
          "https://gsas.nyu.edu/admissions/arc/test-scores.html"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
  'stanford-mcf': {
    academic: 'Stanford ICME MCF: Autumn\'27 deadline Jan 29, 2027 (11:59pm PST). 45 units / 5–6 qtrs. Eng tuition $15.1k–$23.2k/qtr. QuantNet unranked. STEM verify CIP.',
    orientation: 'Autumn start · 45 units · QuantNet n/a · SEPARATE TRACK',
    duration: '45 units; typically 5–6 full-time quarters (~1.5–2 years)',
    tracks: ["MCF track within ICME MS","HCP part-time (separate path)"],
    coreNotes: 'SEPARATE TRACK quant-mfe. Not listed on 2026 QuantNet ranking scrape — program-stated only. Small cohort (~10–15; ~5% admit per FAQ). GRE/GMAT not required/accepted for ICME MS. STEM: CIP not stated on MCF pages — verify on I-20 (Engineering MS typically STEM).',
    credits: 45,
    stem: null,
    stemNote: null,
    summerStart: false,
    springOnly: false,
    track: 'quant-mfe',
    rankingSource: 'QuantNet 2026',
    tfeRank2026: null,
    quantNetRank2026: null,
    tuition: null,
    tuitionAlt: null,
    tuitionLabel: 'No flat program sticker — Graduate Engineering quarterly: 11–18 units $23,239; 8–10 units $15,100 (2026–27). 45 units over typically 5–6 full-time quarters',
    tuitionAltLabel: null,
    tuitionEstimate: null,
    tuitionEstimateLabel: null,
    fees: null,
    period: '2026–27 Graduate Engineering rates',
    costNote: 'SEPARATE TRACK quant-mfe. Not on QuantNet 2026 list. STEM not stated on MCF pages → stem null (verify CIP on I-20). Admissions need-blind; no guaranteed MS funding. HCP part-time path exists. Fall 2027 intake context.',
    costDetail: 'No flat program tuition (tuition null). Graduate Engineering quarterly rates 2026–27: 8–10 units $15,100; 11–18 units $23,239. 45 units over typically 5–6 quarters. Do not sum these into a program total. Campus health insurance and other required fees not itemized on MCF pages; see Stanford Student Services for quarterly fees. Do not invent multi-quarter total. SEPARATE TRACK quant-mfe. Not on QuantNet 2026 list. STEM not stated on MCF pages → stem null (verify CIP on I-20). Admissions need-blind; no guaranteed MS funding. HCP part-time path exists. Stanford Student Services 2026–27 Engineering: $15,100 (8–10 units/qtr) or $23,239 (11–18). Degree 45 units over typically 5–6 full-time quarters — flat program total not published; do not invent. HCP part-time path exists separately. Living cost band not published for this program (null, not zero).',
    funding: 'Program-tied funding verified 2026-10-26: SCH-147.',
    fundingNotes: 'Program-tied funding verified 2026-10-26: SCH-147.',
    livingCostBand: null,
    deadline: 'ICME MS external applicants Autumn 2027–28 · 2027-01-29 · 11:59 p.m. PST',
    deadlineDate: '2027-01-29',
    asOf: '2026-10-26',
    scholarships: ["SCH-147"],
    sources: [
      ['ICME application deadlines', 'https://icme.stanford.edu/academics-admission/icme-application-deadlines'],
      ['MCF admissions hub', 'https://mcf.stanford.edu/admissions'],
      ['MCF FAQ (units, duration, tuition pointer)', 'https://mcf.stanford.edu/frequently-asked-questions'],
      ['Official tuition / budget', 'https://studentservices.stanford.edu/tuition-rates/2026-2027-graduate-and-professional-tuition-rates'],
      ['QuantNet 2026 (IBKR mirror — MCF not listed)', 'https://www.interactivebrokers.com/campus/ibkr-quant-news/2026-quantnet-ranking-of-best-financial-engineering-programs/'],
      ['ICME Graduate Funding', 'https://icme.stanford.edu/academics-admission/graduate-funding'],
    ],
    programUrl: 'https://icme.stanford.edu/academics-admission/icme-application-deadlines',
    availability: 'Autumn Quarter 2027–28 only (external applicants)',
    accessRestricted: false,
    applicationRequirements: {
      "gre": {
        "status": "not_accepted",
        "detail": "GRE not required; GRE scores will not be accepted or considered for MS or PhD application packets (ICME application + FAQ).",
        "minScore": null
      },
      "gmat": {
        "status": "not_accepted",
        "detail": "GMAT not mentioned as an accepted substitute; ICME explicitly rejects GRE consideration. Treat GMAT as not part of ICME packet.",
        "minScore": null
      },
      "english": {
        "toefl": {
          "status": "required",
          "minScore": 90,
          "detail": "Per Stanford Graduate Admissions: TOEFL iBT ≥90 (tests before Jan 21 2026) or ≥4.5 (on/after Jan 21 2026) unless exempt. ICME defers to central Grad Admissions."
        },
        "ielts": {
          "status": "required",
          "minScore": 7,
          "detail": "IELTS Academic minimum 7 for admission consideration unless exempt."
        },
        "waiver": "Exempt if U.S. citizen/PR; first language English; U.S. bachelor’s/master’s/doctoral or international equivalent from university where all instruction in English; OR ≥2 consecutive years full-time professional/educational experience in English in past 10 years."
      },
      "gpa": {
        "status": "not_stated",
        "minimum": null,
        "scale": null,
        "detail": "Enter GPA as on transcript; do not convert scales. No ICME minimum stated."
      },
      "lettersOfRecommendation": {
        "status": "required",
        "count": 3,
        "detail": "Three required (optional 4th backup). Strongly recommend ≥1 from university professor; Interfolio not accepted; letters may arrive up to 1 week after deadline."
      },
      "statementOfPurpose": {
        "status": "required",
        "detail": "MS track: short-answer career goals / how CME-MS helps (program supplemental). Also Enriching the Learning Community ≤500 words. PhD-oriented SOP prompt on page is for PhD; MS uses supplemental short answers + academic interest MCF track selection.",
        "alsoKnownAs": "statement / short answers / enriching the learning community"
      },
      "resume": {
        "status": "required",
        "detail": "ICME requires CV/resume upload for complete application."
      },
      "transcripts": {
        "status": "required",
        "detail": "Unofficial transcript uploads for institutions attended ≥1 year full-time; official upon accept."
      },
      "interview": {
        "status": "unknown",
        "detail": "No interview listed among ICME MS application components on official application/FAQ pages."
      },
      "applicationFee": {
        "amountUsd": 125,
        "waivers": "GRE Fee Reduction, Program Participation, and School-Based waivers via Stanford Grad Admissions (request ≥10 business days before deadline). School of Engineering graduate fee waiver also referenced from ICME page.",
        "detail": "Stanford graduate application fee $125 nonrefundable."
      },
      "other": [
        "Apply to ICME MS and select MCF track in program supplemental Academic Interest.",
        "Required course-preparation form (list advanced math/CS/stats/etc.).",
        "External MS Autumn 2027-28 deadline Jan 29 2027 11:59pm PST; admission Autumn only for external applicants.",
        "HCP part-time option available for MS via SCPD."
      ],
      "advice": "GRE not accepted. Select MCF track inside ICME MS application. Autumn-only for external applicants.",
      "sources": [
        [
          "ICME graduate program application",
          "https://icme.stanford.edu/academics-admission/icme-graduate-program-application"
        ],
        [
          "ICME admissions & application FAQ",
          "https://icme.stanford.edu/academics-admission/admissions-application-faq"
        ],
        [
          "ICME application deadlines",
          "https://icme.stanford.edu/academics-admission/icme-application-deadlines"
        ],
        [
          "MCF admissions hub",
          "https://mcf.stanford.edu/admissions"
        ],
        [
          "Stanford Grad Admissions application fee",
          "https://gradadmissions.stanford.edu/apply/application-fee"
        ],
        [
          "Stanford Grad Admissions test scores (English)",
          "https://gradadmissions.stanford.edu/apply/test-scores"
        ]
      ],
      "as_of": "2026-10-27"
    },
  },
};
