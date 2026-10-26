# Handoff to site — tamu-qfin (aid singleton)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**Catalog id:** `tamu-qfin` (**new**) — keep `tamu-msf` accessRestricted / separate.

## What to ingest

### 1. Program cost → `dist/research-details.js` via `referenceCost`

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `tamu-qfin` | **null** flat (+ estimate **30110** OOS base 36×$836.40; alt program fee **15000**/F&S sem; resident base est. **10328**) | 2026–27 SBS proxy | Open external/intl via Math GradCAS; fees null sum; living null; STEM null; **≠ tamu-msf** |

Source JSON: `/workspace/aid-msf/tamu-qfin-costs.json`  
Brief cross-check: `/workspace/brief-handoffs/msf-tamu-qfin.json` (tuition null + $15k/F&S program fee — match).

Rule: never invent; missing ≠ 0; flag Fall 2027 rate lock gap + no flat sticker.

### 2. Shared awards → **nothing new**

| SCH | ingest | programIds |
|---|---|---|
| — | — | **No SCH cards** — none verified for tamu-qfin |

Source JSON: `/workspace/aid-msf/tamu-qfin-awards.json` (awards: `[]`)  
SCH scheme: Batch3 ended SCH-115; Batch4 may use SCH-116+. This singleton consumed **zero** SCH ids. Future tamu-qfin awards → **SCH-130+**.

### 3. Do **not** merge / do not overwrite

- **`tamu-msf`** — classic combo MSF; tuition null + accessRestricted; no award card from batch3.  
- Do not attach tamu-msf funding notes to tamu-qfin or vice versa.  
- HK/TW/PRC externals — flag overlaps only; do not recreate.

## Suggested site steps

1. Seed catalog id `tamu-qfin` (coordinate with brief) — label **MS Quantitative Finance (MS-QFIN)**; school Texas A&M Mays / Math.  
2. Apply `referenceCost`: tuition **null**, tuitionEstimate **30110** (OOS base), program-fee alt **15000**/F&S, fees null, livingCostBand null, stem null; `accessRestricted: false`; costNote from JSON.  
3. Ensure `tamu-msf` remains restricted / null sticker — **no merge**.  
4. Skip opportunity Markdown (zero awards).  
5. `npm run build` + `npm test`; PR to main; site owns merge.  
6. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs attempted / filled: **1 / 1** (flat null + verified fee/rate components; fees/living/STEM null by rule)  
- New awards verified: **0** (none verified — explicit)  
- SCH ids used: **none** (headroom SCH-130+ documented)  
- Headline: **external/intl OPEN**; program fee $15k/F&S; base tuition via SBS; ≠ tamu-msf.
