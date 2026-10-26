# Handoff to site — MSF Batch2 (aid)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**Note:** Batch1 ingest may still be in flight — do not assume SCH-085–095 already live before merging; allocate SCH-096+ after Batch1.

## What to ingest

### 1. Program costs → `dist/research-details.js` via `referenceCost` (catalog ids)

Changed / new program ids (8):

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `vanderbilt-msf` | 76700 + fees 2926 | 2026–27 | 9-month; living band published |
| `rochester-msf` | 78000 /yr | 2026–27 | STEM; 9- vs 16-mo (+$5500 internship fee) |
| `florida-msf` | **null** (est. 46377) | 2026–27 /cr | **UF UG combination only** — flag accessRestricted |
| `asu-msf` | 73500 / 99500 intl | as published | STEM; Corporate vs Analytical |
| `uci-msf` | 80848 | Fall 2026 cohort sched. | STEM; Fall 2027 rates not locked |
| `villanova-msf` | 57000 | 2026–27 | **July start**; STEM; gen fee $157/sem |
| `notredame-msf` | 74618 | 2026–27 | **June start**; STEM; COA $111,298 |
| `utd-msf` | 50000 OOS | as published | Cohort; TX resident $35,000 |

Source JSON: `/workspace/aid-msf/batch2-costs.json`  
Rule: never invent; missing ≠ 0; label academic year; flag summer starts + Florida access.

### 2. Shared awards → `dist/data.js` scholarships + `04-scholarships/opportunities/*.md`

| SCH | ingest | programIds |
|---|---|---|
| SCH-096 | true | vanderbilt-msf |
| SCH-097 | true | rochester-msf |
| SCH-098 | true | rochester-msf |
| SCH-099 | true | asu-msf |
| SCH-100 | true | uci-msf |
| SCH-101 | true | villanova-msf |
| SCH-102 | true | villanova-msf |
| SCH-103 | true | notredame-msf |
| SCH-104 | true | utd-msf |
| SCH-105 | **false** | vanderbilt-msf (Accelerator pathway) |
| SCH-106 | **false** | rochester-msf (partner/UR UG) |

Source JSON: `/workspace/aid-msf/batch2-awards.json`  
Next free ID after Batch1: **SCH-096**.

### 3. Do **not** re-ingest / do not merge

- Forté / ROMBA / Consortium / Toigo (SCH-034–037) — MBA only.  
- SCH-051 (Vanderbilt MBA), SCH-031 (ASU MBA), SCH-057 (UTD MBA) — keep separate from new MSF cards.  
- HK/TW/PRC externals SCH-015–084 / Batch1 SCH-085–095 — flag overlaps only.  
- No florida-msf award card in this batch.

## Suggested site steps

1. Ensure catalog contains MSF Batch2 ids (`vanderbilt-msf` … `utd-msf`) — coordinate with brief if not yet seeded.  
2. Apply `referenceCost` (+ optional `livingCostBand`, `fundingNotes`, `scholarships: [SCH-…]`) per id; for `florida-msf` store null tuition + accessRestricted note + optional estimate.  
3. Add 9 opportunity Markdown files for SCH-096–104; skip or research-note SCH-105–106.  
4. `npm run build` + `npm test`; PR to main; site owns merge.  
5. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs attempted / filled: **8 / 8** (florida sticker intentionally null + estimate)  
- New awards verified: **11** (9 ingest, 2 ingest:false)  
- Headline gaps: Florida UF-only access; unpublished merit amounts; UCI Fall 2027 fee not locked; Rochester 16-mo year-2 tuition missing; no new external finance degree awards beyond SCH-015–095.
