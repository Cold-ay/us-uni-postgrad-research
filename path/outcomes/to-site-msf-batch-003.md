# Handoff: path → site (msf-batch-003) — GREENLIGHT INGEST

**From:** agent `path`  
**To:** agent `site`  
**Date:** 2026-10-26 (Asia/Hong_Kong)  
**Batch:** `msf-batch-003`  
**Status:** **GREENLIGHT** — Collinn/gm locked MSF scope 2026-10-26. Batch 3 (TFE 18–30 remainder) ready to ingest alongside batches 1–2.

## What to ingest

1. **Outcome cards (batch 3 = TFE 18–30)**  
   Path: `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/outcomes/msf-batch-003.json`  
   - `meta.card_count` = 13  
   - Schema: `outcome-card-v2-msf`  
   - Do **not** overwrite `msf-batch-001.json` or `msf-batch-002.json`

2. **Master program list (LOCKED — already handed in batch 1)**  
   Path: `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/programs/msf-master-list-draft.json`  
   - Join on `program_id` / `catalog_id`

3. **Human brief**  
   Path: `/workspace/path/outcomes/msf-batch-003-brief.md`

4. **Quant/MFE (still separate — do NOT mix into primary MSF rank spine)**  
   Path: `/cursor/stores/store-b05aaf61-8e0b-4112-b42e-3a9fcd823bd0/outcomes/msf-quant-pending.json`

## program_ids in msf-batch-003

`cgu-msf`, `illinois-msf`, `tamu-msf`, `ohiostate-msf`, `msu-msf`, `auburn-msf`, `ucsd-rady-msf`, `illinois-tech-msf`, `temple-msf`, `lsu-msf`, `santaclara-msf`, `rit-msf`, `arizona-msf`

## Schema notes for site

- `catalog_id` = `program_id` for MSF scaffolding
- `top_finance_firm_signal` is the primary signal; `big_tech_or_top_firm_signal` is an alias
- Confidence badges: high | medium | low — do not invent numbers for `unknown` fields
- Name confirmations this batch:
  - `temple-msf` → Fox **MS Financial Analysis**
  - `santaclara-msf` → Leavey **MS Finance & Analytics (MSFA)**
  - `ohiostate-msf` → Fisher **Specialized Master in Finance (SMF)**
  - `ucsd-rady-msf` → Rady **Master of Quantitative Finance (MQF)** (renamed from Master of Finance; keep on primary spine)
  - `tamu-msf` → Mays **4+1 MS Finance — RESTRICTED** (TAMU undergrads only; external/intl N/A; same pattern as florida-msf)
  - `cgu-msf` → Drucker **MS in Finance**
  - `illinois-msf` → Gies **MS Finance** (not MSFE)

## Schedule / pathway flags (UI)

| program_id | flag |
|------------|------|
| tamu-msf | **RESTRICTED**: TAMU undergrad 4+1 only — external/intl N/A (combo-cohort outcomes only) |
| ucsd-rady-msf | Renamed **MQF**; ~12-mo on-site |
| santaclara-msf | On-campus STEM/F-1 vs **Online not F-1**; Fall/Spring |
| cgu-msf | Fall / Spring / Summer starts |
| ohiostate-msf | Autumn start; ~16-mo with summer internship |
| illinois-msf | Fall and Spring entry; 3 semesters |
| arizona-msf | ~9–16 mo; main campus + online; FINPREP possible |
| rit-msf | Fall or Spring rolling; optional co-op |
| temple-msf | 10- or 22-mo FT paths |
| lsu-msf | Fall and Spring; tiny cohort |

## Confidence distribution

- **high (3):** illinois-msf, ohiostate-msf, ucsd-rady-msf  
- **medium (6):** cgu-msf, tamu-msf, msu-msf, santaclara-msf, rit-msf, arizona-msf  
- **low (4):** auburn-msf, illinois-tech-msf, temple-msf, lsu-msf  

## Site ask

- Ingest batch-003 cards with confidence badges; preserve unknowns
- Scaffold catalog entries for these 13 ids
- Keep quant/MFE UI **separate** from primary MSF rank spine (MQF rename stays on primary id `ucsd-rady-msf` per gm lock — label display name MQF)
- Flag **RESTRICTED** `tamu-msf` (and florida-msf) as combo-only / external-intl N/A in schedule UI; Flag Santa Clara online/F-1 constraints
- Ship verified PR; report to gm

## Join key

`msf-master-list-draft.json` ↔ `msf-batch-003.json` on `program_id` / `catalog_id`.
