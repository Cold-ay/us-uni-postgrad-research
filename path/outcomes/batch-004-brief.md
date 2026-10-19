# Batch-004 brief — Gap-fill outcomes (path)

**Access date:** 2026-10-20 (Asia/Hong_Kong)  
**Schema:** outcome-card-v2-catalog  
**Cards:** 17 (8 CS + 9 MBA)  
**Prior batches:** 001/002/003 untouched (33901 / 30812 / 31735 bytes)

## Counts

| Bucket | n | Confidence |
|--------|---|------------|
| CS gap-fill + 1 upgrade | 8 | high 3 · medium 2 · low 3 |
| MBA new catalog schools | 9 | high 9 |
| **Total** | **17** | |

**Upgrade:** `umich-cse-ms` ← batch-002 (new Michigan Engineering ECRC Master CSE AY25 PDF).  
**No upgrades:** Columbia CS (still no CS FDS), UT Austin CS, UCLA MSCS.

**Route mismatch:** `caltech-cs` — no terminal MS CS.

## Top findings

### CS
1. **Chicago MPCS (high)** — Class of 2024–25: avg salary **$167.4k**; SWE 50%; Tech 50% / Finance 19%; ~90% employed in-field 6–12 months.
2. **Michigan CSE upgrade (high)** — ECRC AY25: avg **$141,846** / median **$136k**; employers Microsoft, Apple, Jane Street, Jump, Palantir, Databricks, Stripe, Tesla…
3. **Purdue MS (medium)** — Official MS PDF: West avg **$137,273**; Amazon/Microsoft/Apple/LinkedIn/NVIDIA/TikTok…
4. **Rice MCS (medium)** — **93%** summer 2025 internship placement; FT % unknown.
5. **Wisconsin / JHU / Yale (low)** — anecdotes or employer examples only; Caltech flagged no terminal MS.

### MBA
| School | Key placement | Median/mean base | Note |
|--------|---------------|------------------|------|
| Foster | ~78% offers @3mo; 86% @6mo | med $142.8k | Tech **40.5%** |
| Tepper | 83% offers @3mo; 89% @6mo | med **$160k** | Consulting+Tech ~60% |
| McCombs | 74.6% offers @3mo; 80.2% @6mo | mean **$154k** | TX 72% |
| Johnson | **85%** offers @3mo | med **$175k** | Finance **41%** |
| Marshall | **71%** employed @90d | avg **$142k** | Soft 2025 |
| Kenan-Flagler | **88%** @3mo / **90%** @6mo | mean **$140k** | FS 25% |
| Goizueta | ~85% offers @3mo; 91% @6mo | med **$175k** | Consulting **41%** |
| Rice Jones | ~72% offers @3mo | med **$141.5k** | Energy+Consulting |
| Kelley | **92%** offers @90d | mean total comp **$163k** | Tech 23% industry |

## Still missing after this pass (catalog without cards)
**CS:** northwestern-cs, umass-cs, uci-cs, ucsb-cs, unc-cs (+ deeper FDS for yale/jhu/wisconsin)  
**MBA:** asu-mba, georgia-mba, gatech-mba, washu-mba, vanderbilt-mba, utd-mba  
**Upgrades still wanted:** Columbia **CS** (not EE), UT Austin CS, UCLA MSCS official MS FDS PDFs

## Outputs
1. `.../outcomes/batch-004.json`
2. `/workspace/path/outcomes/batch-004-brief.md`
3. `.../handoffs/to-site-batch-004.md`
4. `programs/master-list.json` updated (cs 37 + mba 27 = 64)
