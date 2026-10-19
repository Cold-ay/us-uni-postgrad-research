# Batch-003 brief — Outcome cards (path)

**Access date:** 2026-10-20 (Asia/Hong_Kong)  
**Schema:** outcome-card-v2-catalog  
**Cards:** 14 (8 CS-related + 6 MBA)  
**batch-001 / batch-002:** left untouched (sizes 33901 / 30812 bytes)

## Counts

| Bucket | n | Confidence mix |
|--------|---|----------------|
| CS / CSE-adjacent | 8 | high 2 · medium 2 · low 4 |
| MBA | 6 | high 6 |
| **Total** | **14** | |

**Route mismatches:** harvard-seas-cs-ms (CSE ≠ standalone MS CS), cmu-msaii (not in catalog), umd-mscs (dept-wide survey ≠ MS-only).

**batch-002 upgrades:** none. Columbia EE placement exists but is not CS; UT Austin / UCLA / Michigan CSE still lack MS-specific official FDS PDFs.

## Top findings

### CS
1. **Penn CIS MSE (high)** — SEAS Master's 2024 Career Plans PDF lists extensive CIS MSE employers (Amazon, Google, Meta, Palantir, Jane Street, Citadel, Stripe…). SEAS-wide: 83.1% employed/continued within 6 months; tech 33%; SWE 33%; median overall $112k. CIS-only % still unknown — do not confuse with MCIT.
2. **CMU MSAII (high, catalog_id null)** — SCS Excel: **100% employed**, median **$139k**, employers Google / C3.ai / Oracle / BNY Mellon / LUCA.ai; selectivity ~7.7%.
3. **UCSD CSE MS (medium)** — No current FDS %; College Scorecard CS master's 5-yr median earnings **$301,159** (4-yr $245,333) — earnings signal only.
4. **Harvard CSE (medium, mismatch)** — Official careers page: Tech 51% / Finance 14% / Grad 13% / Other 22% (2019–2021). Interdisciplinary CSE, not standalone MS CS.
5. **NYU Courant / Duke / Brown / UMD (low)** — Courant has no MSCS FDS (Tandon-wide 93.7%/$108k must not be attributed); Duke outcomes page empty of numbers; Brown qualitative titles only; UMD 93%/$105k is **department-wide Class of 2024** (959 grads), not MS-only.

### MBA (all high)
| School | 3-mo offers (approx) | Median base | Standout |
|--------|----------------------|-------------|----------|
| Tuck | 90% offers / 87% accepts | $175k | Consulting 41%; 6-mo 93%/91% |
| Ross | 86% offers / ~84% accepts | $170k | Consulting 33.5%; Amazon top hirer |
| Stern | 86.3% offers / 86% accepts | $175k | Finance 36.6%; internships 99.4% |
| Fuqua | 82.2% offers / 79% accepts | $160k | Broader industry mix (~45% outside C/F) |
| Darden | 90.2% offers / 89.3% accepts | $175k | Tech nearly doubled to 16.1%; 100% tracked |
| Anderson | 76.3% offers / 74.7% accepts | $160k (+12% YoY) | Tech 28.3% lead industry; CA 67.8% |

## Catalog joins applied
- nyu-mscs→nyu-cs · ucsd-mscs→ucsd-cs · upenn-mse-cis→penn-cs · harvard-seas-cs-ms→harvard-cs (mismatch) · duke-mscs→duke-cs · brown-mscs→brown-cs · umd-mscs→maryland-cs (mismatch) · cmu-msaii→null  
- tuck→dartmouth-mba · ross→michigan-mba · stern→nyu-mba · fuqua→duke-mba · darden→virginia-mba · anderson→ucla-mba

## Remaining gaps (priority for later batches)
- Official **Courant MSCS** FDS (not Tandon)
- **Duke MSCS** numeric outcomes
- **Brown ScM** placement/salary table
- **UCSD CSE** current MS first-destination report
- **MS-only** UMD / Wisconsin / Chicago MPCS FDS
- batch-002 upgrades: Columbia **CS** (not EE), UT Austin CS, UCLA MSCS, Michigan CSE MS PDFs

## Outputs
1. `/cursor/stores/.../outcomes/batch-003.json`
2. `/workspace/path/outcomes/batch-003-brief.md` (this file)
3. `/cursor/stores/.../handoffs/to-site-batch-003.md`
4. `programs/master-list.json` updated (added `cmu-msaii`; catalog joins refreshed)
