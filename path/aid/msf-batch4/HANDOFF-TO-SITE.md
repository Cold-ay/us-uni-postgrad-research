# Handoff to site — MSF Batch4 (aid)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**Note:** Batch1–3 ingest may still be in flight — allocate **SCH-116+** after Batch3 SCH-115; do not reuse SCH-015–115.

## What to ingest

### 1. Program costs → `dist/research-details.js` via `referenceCost` (catalog ids)

Changed / new program ids (8):

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `iit-msf` | 57750 (30×1925) | 2026–27 | STEM; fees itemized not summed |
| `temple-msf` | 34950 + fee 750 | 2026–27 | Display **MS Financial Analysis**; STEM; Aug academy |
| `lsu-msf` | **null** (est. ~46311 NR Tier2) | 2026–27 /hr | No MS assistantships; Online MSF ≠ this id |
| `santaclara-msf` | 56916 (36×1581) | 2026–27 | Display **MSFA**; on-campus STEM only |
| `rit-msf` | **null** ($2690/cr or $32271/sem) | 2026–27 | Credits null on program page; living ~20.4k |
| `arizona-msf` | 47500 NR (AZ 27200) | 2026–27 matrix | STEM ~9 mo Tucson |
| `chicago-booth-mif` | 123470 (Aut26 proxy) | 2026/27 | 15-mo STEM-eligible; living ~35.6k/3q |
| `columbia-msfe` | 155032 (2×77516) | 2026–27 | CF-blocked curl — jina-verified; living ~35.2k/yr |

Source JSON: `/workspace/aid-msf/batch4-costs.json`  
Rule: never invent; missing ≠ 0; label academic year; flag summer/non-autumn starts.

### 2. Shared awards → `dist/data.js` scholarships + `04-scholarships/opportunities/*.md`

| SCH | ingest | programIds |
|---|---|---|
| SCH-116 | true | iit-msf |
| SCH-117 | **false** | iit-msf (Chicago Talent Pipeline) |
| SCH-118 | true | temple-msf |
| SCH-119 | **false** | temple-msf (alumni 5%) |
| SCH-120 | true | santaclara-msf |
| SCH-121 | true | santaclara-msf |
| SCH-122 | **false** | santaclara-msf (SCU alumni) |
| SCH-123 | true | rit-msf |
| SCH-124 | **false** | rit-msf (Master Up US-resident) |
| SCH-125 | true | arizona-msf |
| SCH-126 | true | chicago-booth-mif |
| SCH-127 | true | columbia-msfe |

Source JSON: `/workspace/aid-msf/batch4-awards.json`  
Next free ID after Batch3: **SCH-116**.

### 3. Do **not** re-ingest / do not merge

- Forté / ROMBA / Consortium / Toigo (SCH-034–037) — MBA only (not Booth MiF / Columbia MSFE).  
- HK/TW/PRC externals SCH-015–084 / Batch1–3 SCH-085–115 — flag overlaps only.  
- No lsu-msf award card in this batch.  
- Do not create MBA cards for Booth/Columbia MBA-named fellowships.

## Suggested site steps

1. Ensure catalog contains Batch4 ids (`iit-msf` … `arizona-msf`, `chicago-booth-mif`, `columbia-msfe`) — coordinate with brief; set display names Temple→Financial Analysis, SCU→MSFA, Booth→MiF, Columbia→MSFE.  
2. Apply `referenceCost` (+ optional `livingCostBand`, `fundingNotes`, `scholarships: [SCH-…]`) per id; null stickers for `lsu-msf` / `rit-msf` with estimate notes.  
3. Add 8 opportunity Markdown files for SCH-116, 118, 120–121, 123, 125–127; skip or research-note SCH-117, 119, 122, 124.  
4. `npm run build` + `npm test`; PR to main; site owns merge.  
5. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs attempted / filled: **8 / 8** (lsu + rit stickers intentionally null + notes/estimates)  
- New awards verified: **12** (8 ingest, 4 ingest:false)  
- Headline gaps: LSU/RIT no flat stickers; LSU no SCH; Booth Aut27 rate unlocked; Columbia CF + unpublished fellowship $; SCU award table still F26-labeled; living missing for 5/8; no new external finance awards beyond SCH-015–115.
