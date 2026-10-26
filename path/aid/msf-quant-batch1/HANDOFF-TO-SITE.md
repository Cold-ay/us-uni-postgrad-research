# Handoff to site — QUANT-BATCH1 (aid) — Quant/MFE SEPARATE TRACK

**asOf:** 2026-10-26 (Asia/Hong_Kong)  
**From:** aid  
**To:** site (ingest) · gm (package for Collinn)  
**Repo:** Cold-ay/us-uni-postgrad-research  
**CRITICAL:** This is a **quant-mfe SEPARATE TRACK**. Do **NOT** merge into primary MSF TFE batches 1–4 rank spine. All `tfeRank2026` null; ranking source = QuantNet 2026.

## What to ingest

### 1. Program costs → `dist/research-details.js` via `referenceCost` (catalog ids)

Changed / new program ids (8) — label track **quant-mfe**:

| catalog id | tuition | period | notes for costNote |
|---|---|---|---|
| `berkeley-mfe` | 98036 P&U (comp. 95353) | Class of 2028 proxy | **Spring-only**; STEM; living ~19.7k/2 terms |
| `cmu-mscf` | 71800/AY | 2026–27 | STEM; Fall-only; living PIT~30.5k NYC~33.3k; program total open |
| `baruch-mfe` | 42000 intl package | entire program | STEM; verify vs AEF catalog ~44.3k |
| `columbia-ieor-mfe` | 101592 (36×2822) | 2026–27 | STEM; ≠ `columbia-msfe`; fees~7.1k; living~31.6k AY |
| `gt-qcf` | 21935 OOC/sem | Fall 2026 | STEM; id **gt-qcf** not gatech-qcf; living~22.6–25.3k |
| `chicago-finmath` | 8017/100u (~100213@1250u) | 2026–27 | STEM; living null |
| `nyu-courant-mf` | 87336 (36×2426) | 2026–27 | STEM; **no program aid apps**; living null |
| `stanford-mcf` | **null** flat | 2026–27 Eng qtr | STEM null; 15.1k–23.2k/qtr; 45u |

Source JSON: `/workspace/aid-msf/quant-batch1-costs.json`  
Rule: never invent; missing ≠ 0; flag Spring-only / summer internship / STEM.

### 2. Shared awards → `dist/data.js` scholarships + `04-scholarships/opportunities/*.md`

| SCH | ingest | programIds |
|---|---|---|
| SCH-140 | true | berkeley-mfe |
| SCH-141 | true | cmu-mscf |
| SCH-142 | true | columbia-ieor-mfe |
| SCH-143 | true | columbia-ieor-mfe |
| SCH-144 | true | columbia-ieor-mfe |
| SCH-145 | true | chicago-finmath |
| SCH-146 | true | gt-qcf |
| SCH-147 | true | stanford-mcf |
| SCH-148 | **false** | berkeley-mfe (SIEML pathway) |
| SCH-149 | **false** | columbia-ieor-mfe (CUNY pathway) |
| SCH-150 | **false** | columbia-ieor-mfe (Brazil) |
| SCH-151 | **false** | stanford-mcf (Aalto Vuolteenaho) |
| SCH-152 | **false** | baruch-mfe (Gatheral current-student) |
| SCH-153 | **false** | nyu-courant-mf (no aid apps note) |
| SCH-154 | **false** | columbia-ieor-mfe (Shardashish India pref.) |

Source JSON: `/workspace/aid-msf/quant-batch1-awards.json`  
ID scheme: **SCH-140+** (avoids Batch3≤115, florida≤120, Batch4 116+, tamu 130+).

### 3. Do **not** re-ingest / do not merge

- Primary MSF TFE Batch1–4 awards SCH-085–115 and any Batch4 IDs.  
- HK/TW/PRC externals SCH-015–084 — flag overlaps only.  
- Do not attach columbia-ieor-mfe awards to `columbia-msfe` (CBS).  
- Do not create Baruch admit-time merit cards without a primary open award page.  
- Do not invent NYU Courant MF scholarships.

## Suggested site steps

1. Seed catalog ids for all 8 quant-mfe programs if not present; mark track/tag **quant-mfe / QuantNet**.  
2. Apply `referenceCost` + living bands where non-null; preserve nulls.  
3. Ingest SCH-140–147 only (`ingest:true`); keep 148–154 as research notes or skip UI.  
4. Surface Spring-only badge on `berkeley-mfe`.  
5. Confirm `gt-qcf` id spelling (not `gatech-qcf`) and `nyu-courant-mf` (not `nyu-courant`).

## Counts
- Costs attempted: **8/8**  
- Awards total: **15** (ingest true **8** / false **7**)  
- Gaps: see awards JSON `gaps` array and QUANT-BATCH1-BRIEF.md
