# Path Outcomes Batch 002 — Brief (English)

**Access / update date:** 2026-10-20 (Asia/Hong_Kong)  
**Schema:** outcome-card-v2-catalog (`catalog_id`, `program_id`, `route_mismatch`, `route_mismatch_notes`)  
**Rule:** Open public sources only; gaps = **unknown**; batch-001 files **not** rewritten.

---

## Deliverables

| File | Path |
|------|------|
| Outcome cards | `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/outcomes/batch-002.json` |
| Master list (catalog joins updated) | `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/programs/master-list.json` |
| Handoff to site | `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/handoffs/to-site-batch-002.md` |

**Card count: 15** (9 CS-related + 6 MBA)

---

## Catalog join map (this batch)

| program_id | catalog_id | route_mismatch |
|------------|------------|----------------|
| columbia-mscs | columbia-cs | false |
| utaustin-mscs | texas-cs | false |
| ucla-mscs | ucla-cs | false (MSCS, not MEng) |
| umich-cse-ms | michigan-cs | false |
| usc-mscs | usc-cs | false |
| princeton-mscs | princeton-cs | **true** (Fall 2027 master's admissions suspended) |
| cmu-msml | **null** | **true** (not in catalog) |
| cmu-mcds | **null** | **true** (not in catalog) |
| gatech-omscs | gatech-cs | **true** (online vs campus) |
| booth-mba | chicago-mba | false |
| kellogg-mba | northwestern-mba | false |
| mit-sloan-mba | mit-mba | false |
| columbia-mba | columbia-mba | false |
| haas-mba | berkeley-mba | false |
| yale-som-mba | yale-mba | false |

**Documented batch-001 caveats (for site):** cornell-tech ≠ cornell-cs campus; uw Allen MS ≠ washington-cs PMP; mit-eecs-meng ↔ mit-cs adjacent.

---

## Top findings

### CS / specialized

1. **CMU MSML (high):** Official SCS Excel — **87%** employed; employers Meta, Microsoft, Apple, Capital One, Tesla; median **$160k**. **No catalog_id.**
2. **CMU MCDS (high):** **99%** employed; Databricks, Apple, Adobe, Bloomberg, Oracle, JPMorgan; median **$150k**. **No catalog_id.**
3. **Princeton CS master's (medium):** Official notice — **not accepting master's applications for Fall 2027**. Join to `princeton-cs` with mismatch flag.
4. **GT OMSCS (medium):** 2022 exit survey — 55% new job, 38% promotion, 48% higher salary, 95% worth it. **Not** campus MSCS 84.3% — mismatch to `gatech-cs`.
5. **USC MSCS (medium):** Scorecard 1-yr median earnings **$134,544**; 4-yr ~**$188,871**; 1,126 credentials 2024–25. Placement % **unknown**.
6. **Columbia / UT Austin / UCLA / Michigan CS MS (low):** No school first-destination PDFs retrieved; Columbia Scorecard ~**$161.9k** 1-yr earnings. UCLA card is **MSCS not MEng**.

### MBA

7. **Booth 2025 (high):** 89.1% offers / 87.8% accepts; Consulting 36.7%; median base **$175k**; BCG 52 / McKinsey 35 / Bain 30 / Amazon 20.
8. **Kellogg 2025 (high):** 88% offers / 86% accepts (3 mo), **90%** accepts (6 mo); Consulting 38%; median base **$175k**; total comp **$205k** (Kellogg).
9. **Sloan 2025 (high):** Official PDF — 91.0% offers (3 mo); Tech **23.3%**; median **$175k**; BCG 26 / McKinsey 20 / Amazon 12.
10. **CBS 2025 (high):** 92% offers / 90.2% accepts; Finance 35.4%; McKinsey & BCG **62 each**.
11. **Haas 2025 (high):** Tech **39%**; 86% offers / 84% accepts; median base **$167,250**; 45% equity.
12. **Yale SOM 2025 (high):** 82.1% offers / 79.9% accepts; Consulting 36.9%; median **$175k**; internship seekers **100%** accepted (Class of 2026).

---

## Confidence mix

- **high (8):** cmu-msml, cmu-mcds, booth, kellogg, sloan, columbia-mba, haas, yale-som  
- **medium (3):** usc-mscs, princeton-mscs, gatech-omscs  
- **low (4):** columbia-mscs, utaustin-mscs, ucla-mscs, umich-cse-ms  

---

## Gaps / suggested batch-003

- Dig official first-destination PDFs for Columbia Engineering, UT ECS, UCLA Samueli/CS, Michigan Engineering (403 blockers this run).
- Princeton: monitor reopen of master's admissions post-Fall 2027.
- MBA depth: Booth interactive report filters; Kellogg downloadable PDFs; CBS seeker denominator.
- Next CS targets: NYU Courant/Tandon, UCSD, UPenn CIS, Harvard SEAS CSE, CMU MSAII, Duke, Brown.
- Next MBA: Tuck, Ross, Stern, Fuqua, Darden, Anderson.
