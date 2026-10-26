# Handoff to site — MSF Batch3 (aid)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**Note:** Batch1/Batch2 ingest may still be in flight — allocate **SCH-107+** after Batch2 SCH-106; do not reuse SCH-015–106.

## What to ingest

### 1. Program costs → `dist/research-details.js` via `referenceCost` (catalog ids)

Changed / new program ids (8):

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `bc-msf` | 71940 + fees ~196 | 2026–27 | STEM=Quant track only; living ~28.9k/9mo |
| `cgu-msf` | 66240 est. (32×2070) | 2025–26 rate | STEM; Summer start option; Fall 2027 rate not locked |
| `illinois-msf` | 67800 intl (+8643 fees) | 2026–27 | 3-semester; US res total 57846 |
| `tamu-msf` | **null** | n/a | **TAMU UG 4+1 only** — flag accessRestricted |
| `ohio-msf` | 68093 NR/intl T+F | 2026–27 | STEM 16-mo; OH res 47093 |
| `msu-msf` | 51000 OOS block | 2026–27 | STEM; in-state 46500 |
| `auburn-msf` | **null** (est. 35550 NR tuition) | 2026–27 /cr | 30-cr; open Fall admits |
| `ucsd-msf` | 83876 proxy | Fall **2025** cohort | Rady **MQF** (ex-MFin); F27 rates not locked |

Source JSON: `/workspace/aid-msf/batch3-costs.json`  
Rule: never invent; missing ≠ 0; label academic year; flag summer starts + TAMU access.

### 2. Shared awards → `dist/data.js` scholarships + `04-scholarships/opportunities/*.md`

| SCH | ingest | programIds |
|---|---|---|
| SCH-107 | true | bc-msf |
| SCH-108 | **false** | bc-msf (USNA McMullen pathway) |
| SCH-109 | true | cgu-msf |
| SCH-110 | true | illinois-msf |
| SCH-111 | true | ohio-msf |
| SCH-112 | true | ohio-msf |
| SCH-113 | true | msu-msf |
| SCH-114 | true | ucsd-msf |
| SCH-115 | **false** | ucsd-msf (UC graduate pathway $10k) |

Source JSON: `/workspace/aid-msf/batch3-awards.json`  
Next free ID after Batch2: **SCH-107**.

### 3. Do **not** re-ingest / do not merge

- Forté / ROMBA / Consortium / Toigo (SCH-034–037) — MBA only (BC ROMBA is MBA).  
- HK/TW/PRC externals SCH-015–084 / Batch1 SCH-085–095 / Batch2 SCH-096–106 — flag overlaps only.  
- No tamu-msf or auburn-msf award cards in this batch.  
- Do not create separate MBA cards for BC / Rady MBA-named fellowships.

## Suggested site steps

1. Ensure catalog contains MSF Batch3 ids (`bc-msf` … `ucsd-msf`) — coordinate with brief if not yet seeded; note `ucsd-msf` display name → Rady MQF.  
2. Apply `referenceCost` (+ optional `livingCostBand`, `fundingNotes`, `scholarships: [SCH-…]`) per id; for `tamu-msf` store null tuition + accessRestricted; for `auburn-msf` null + estimate note.  
3. Add 7 opportunity Markdown files for SCH-107, 109–114; skip or research-note SCH-108, 115.  
4. `npm run build` + `npm test`; PR to main; site owns merge.  
5. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs attempted / filled: **8 / 8** (tamu + auburn stickers intentionally null + notes/estimates)  
- New awards verified: **9** (7 ingest, 2 ingest:false)  
- Headline gaps: TAMU Aggie-only access; Auburn no sticker/no SCH; UCSD/CGU/BC Fall 2027 rates not locked; MSU tuition page Incapsula; unpublished merit $ except BC range + Ohio $6–18k; no new external finance degree awards beyond SCH-015–106.
