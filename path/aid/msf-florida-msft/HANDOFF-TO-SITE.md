# Handoff to site — florida-msft (aid singleton)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**Catalog id:** `florida-msft` (**new**) — keep `florida-msf` accessRestricted / separate.

## What to ingest

### 1. Program cost → `dist/research-details.js` via `referenceCost`

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `florida-msft` | **43478** OOS (+ alt **15976** in-state) | as published (≈ 2026–27 /cr × 30) | Open traditional Fall 2027; fees null; living null; STEM null; **≠ florida-msf** |

Source JSON: `/workspace/aid-msf/florida-msft-costs.json`  
Brief cross-check: `/workspace/brief-handoffs/msf-florida-msft.json` (tuition match confirmed against primary page).

Rule: never invent; missing ≠ 0; flag Fall 2027 rate lock gap + graduate-table row missing.

### 2. Shared awards → **nothing new**

| SCH | ingest | programIds |
|---|---|---|
| — | — | **No SCH cards** — none verified for florida-msft |

Source JSON: `/workspace/aid-msf/florida-msft-awards.json` (awards: `[]`)  
Next free after Batch2: SCH-107+ reserved for Batch3; this singleton consumed **zero** SCH ids. Future florida-msft awards → **SCH-120+** (or after Batch3 max).

### 3. Do **not** merge / do not overwrite

- **`florida-msf`** — classic combo MSF; tuition null + accessRestricted; no award card from batch2.  
- Do not attach florida-msf funding notes to florida-msft or vice versa.  
- HK/TW/PRC externals SCH-015–084 / Batch1–2 — flag overlaps only; do not recreate.

## Suggested site steps

1. Seed catalog id `florida-msft` (coordinate with brief if not yet present) — program label **MS in Finance and Technology**; school Florida Warrington.  
2. Apply `referenceCost` tuition **43478** (OOS), optional alt/in-state **15976**, fees null, livingCostBand null, stem null; `accessRestricted: false` for traditional track; costNote from JSON.  
3. Ensure `florida-msf` remains restricted / null sticker — **no merge**.  
4. Skip opportunity Markdown (zero awards). Optionally add research note that no program-tied SCH verified.  
5. `npm run build` + `npm test`; PR to main; site owns merge.  
6. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs attempted / filled: **1 / 1** (OOS sticker verified; fees/living/STEM null by rule)  
- New awards verified: **0** (none verified — explicit)  
- SCH ids used: **none** (headroom SCH-120+ documented)  
- Headline gaps: graduate cost table FinTech row missing; AY 2027–28 rates unlocked; assistantship language unverified vs Ph.D. policy; no living band; STEM unset.
