# HANDOFF-TO-SITE — PRC outbound awards (Batch 1)

**asOf:** 2026-10-20 (Asia/Hong_Kong)  
**Intake:** Fall 2027  
**Store:** `/cursor/stores/store-20bbd35f-5a77-401c-a48e-9245552ff60c/prc-awards.json`  
**Opportunities:** `/workspace/aid-cn/opportunities/`  
**Summary:** `/workspace/aid-cn/PRC-SCHOLARSHIP-SUMMARY.md`

## ID scheme (LOCKED)
- Continue `SCH-067`, `SCH-068`, … (no `CN-SCH` prefix).
- New required filter field: **`prcEligible`**: `"yes"` | `"no"` | `"unclear"`.
- Keep `hkEligible` / `twEligible` / `intlEligible` on every new award.

## Changed / new SCH ids
| ID | Name (short) | ingest | prcEligible |
|---|---|---|---|
| SCH-067 | CSC National High-Level University Graduate Program (国家建设高水平 | true | yes |
| SCH-068 | CSC International Organization Talent Development Program (国 | true | yes |
| SCH-069 | CSC Americas–Oceania Bilateral / Cooperative Scholarships (美 | true | yes |
| SCH-070 | CSC National Outstanding Self-Financed Students Scholarship  | true | yes |
| SCH-071 | CSC note — National overseas master's track largely closed s | false | yes |
| SCH-072 | Knight-Hennessy Scholars (Stanford) | true | yes |
| SCH-073 | AAUW International Fellowships (STEM master's/doctorate) | true | yes |
| SCH-074 | P.E.O. International Peace Scholarship (IPS) | true | yes |
| SCH-075 | Harvard Business School MBA Need-Based Scholarships | true | yes |
| SCH-076 | Stanford GSB MBA Need-Based Fellowships | true | yes |
| SCH-077 | Michigan Ross Full-Time MBA Merit Scholarships | true | yes |
| SCH-078 | Duke Fuqua Daytime MBA Merit Scholarships | true | yes |
| SCH-079 | ByteDance Scholarship (字节跳动奖学金) | true | yes |
| SCH-080 | Jane Street Graduate Research Fellowship (GRF) | true | yes |
| SCH-081 | Meta Research PhD Fellowship | true | yes |
| SCH-082 | Yale SOM MBA Scholarships (Dean's and general grant aid) | true | yes |
| SCH-083 | CSC Innovative Talent International Cooperation Program (创新型 | true | yes |
| SCH-084 | Margaret McNamara Education Grants (MMEG) — US-Canada Progra | true | yes |

**Live count:** 17 · **Total rows:** 18 · **≥15:** yes

## Site must extend filters
1. Add `prcEligible` to scholarship filters (mirror hkEligible/twEligible).
2. Skip rows with `"ingest": false` (SCH-071 research note).
3. Do not duplicate HK/TW awards listed in `overlapsWithExisting`.

## Apply notes for product copy
- CSC High-Level (067) = PhD path, not MBA/MS entry.
- CSC IO Talent (068) = rare CSC master’s; IO career constraint.
- CSC Americas coop (069) = watchlist; no verified US MS in 2026 public tables.
- CSC self-financed prize (070) = mid-PhD bonus, not matriculation aid.
- School MBA need/merit cards (075–078, 082) explicitly include internationals on cited pages.
- Never auto-apply; never invent amounts/deadlines.

## Research details linkage
{
  "opportunityDir": "/workspace/aid-cn/opportunities/",
  "summary": "/workspace/aid-cn/PRC-SCHOLARSHIP-SUMMARY.md",
  "handoff": "/workspace/aid-cn/HANDOFF-TO-SITE.md",
  "hktwAwards": "/cursor/stores/store-20bbd35f-5a77-401c-a48e-9245552ff60c/hktw-awards.json",
  "idScheme": "SCH-067+ locked; prcEligible yes|no|unclear; SCH-071 ingest:false research-note-only"
}
