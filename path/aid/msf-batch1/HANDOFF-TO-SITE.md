# Handoff to site — MSF Batch1 (aid)

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  

## What to ingest

### 1. Program costs → `dist/research-details.js` via `referenceCost` (catalog ids)

Changed / new program ids (8):

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `mit-msf` | 96884 (alt 133007) | 2026–27 | **Summer start**; 12- vs 18-month |
| `princeton-msf` | 65210 /yr + SHP 4220 | 2026–27 | typically 2 years; living band published |
| `washu-msf` | 81500 / 102900 | Fall 2026 starters | 3 concentrations |
| `gsu-msf` | 49379 (OOC) | as published | evening Buckhead STEM; also GA/non-GA alts |
| `usc-msf` | 91476 + fees 3396 | 2025–26 rate estimate | STEM; not locked Fall 2027 |
| `brandeis-msf` | 44200 / 57200 | 2026–27 | STEM; living band published |
| `utah-msf` | 39000 | as published | fees included in fixed rate |
| `texas-msf` | 59700 non-TX | as published | **Summer start**; pre-enroll $2k in total |

Source JSON: `/workspace/aid-msf/batch1-costs.json`  
Rule: never invent; missing ≠ 0; label academic year; flag summer starts.

### 2. Shared awards → `dist/data.js` scholarships + `04-scholarships/opportunities/*.md`

| SCH | ingest | programIds |
|---|---|---|
| SCH-085 | true | mit-msf |
| SCH-086 | true | princeton-msf |
| SCH-087 | true | washu-msf |
| SCH-088 | true | gsu-msf |
| SCH-089 | true | usc-msf |
| SCH-090 | true | brandeis-msf |
| SCH-091 | true | utah-msf |
| SCH-092 | true | utah-msf |
| SCH-093 | true | texas-msf |
| SCH-094 | true | texas-msf |
| SCH-095 | **false** | utah-msf (alumni only / research note) |

Source JSON: `/workspace/aid-msf/batch1-awards.json`  
Next free ID was **SCH-085** (after PRC SCH-084).

### 3. Do **not** re-ingest / do not merge

- Forté / ROMBA / Consortium / Toigo (SCH-034–037) — MBA only.  
- Existing school MBA merit cards (SCH-025, SCH-052, SCH-056, etc.) — keep separate from new MSF cards.  
- HK/TW/PRC externals SCH-015–084 — flag overlaps only.

## Suggested site steps

1. Ensure catalog contains MSF Batch1 ids (`mit-msf` … `texas-msf`) — coordinate with brief if not yet seeded.  
2. Apply `referenceCost` (+ optional `livingCostBand`, `fundingNotes`, `scholarships: [SCH-…]`) per id.  
3. Add 10 opportunity Markdown files for SCH-085–094; skip SCH-095 or mark research-note.  
4. `npm run build` + `npm test`; PR to main; site owns merge.  
5. Reply to gm with PR URL + changed ids + as-of.

## Counts for gm

- Costs filled: **8 / 8**  
- New awards verified: **11** (10 ingest, 1 ingest:false)  
- Headline gaps: unpublished merit amounts (MIT/Princeton/WashU/USC/Texas); Brandeis $10k guarantee unverified for Fall 2027; living bands only Princeton+Brandeis; no new external finance degree awards beyond SCH-015–084.
