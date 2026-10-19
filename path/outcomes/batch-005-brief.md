# Batch-005 brief — Final catalog gap-fill (path)

**Access date:** 2026-10-20 (Asia/Hong_Kong)  
**Schema:** outcome-card-v2-catalog  
**Cards:** 11 (5 CS + 6 MBA)  
**Batches 001–004:** untouched (33901 / 30812 / 31735 / 37469)

## Counts

| Bucket | n | Confidence |
|--------|---|------------|
| CS required | 5 | medium 2 · low 3 |
| MBA required | 6 | high 4 · medium 2 |
| **Total** | **11** | |

**Upgrades:** none (no new Yale/JHU/Wisconsin FDS; no Columbia CS / UT CS / UCLA MSCS MS PDFs).

## Top findings

### CS
| Program | Signal | Confidence |
|---------|--------|------------|
| **UMass CICS MS** | Class of 2025 master’s: **65% working**, 27% looking; salary band **$110–129k** (25–50th pct of reporters) | medium (CICS aggregate) |
| **UCI MCS** | **87%** industry within 3 months **since 2017** (cumulative) | medium |
| Northwestern / UCSB / UNC | Qualitative / undergrad-risk pages only | low |

### MBA
| School | Placement | Comp | Confidence |
|--------|-----------|------|------------|
| **ASU Carey** | 72% @grad / **90% @90d** | avg base **$121,116** | high |
| **Scheller** | Class of 2026 **91% @3mo** | avg **$140,000** | high |
| **Olin** | **81% @3mo** | med base **$130k**; Tech 29% / Consulting 24% | high |
| **Owen** | **87% offers @90d**; internships **99%** | avg base **$148k+**; Amazon 12 hires | high |
| **Terry** | **>90% @3mo** (official claim) | exact $ graphics unreadable; P&Q ~$121k | medium |
| **Jindal FT** | **96% @3mo** (page) | **$140,175** base+bonus — not school-wide $83.9k | medium |

## Catalog coverage (path pause)

### Required batch-005 targets — COMPLETE
`northwestern-cs`, `umass-cs`, `uci-cs`, `ucsb-cs`, `unc-cs`, `asu-mba`, `georgia-mba`, `gatech-mba`, `washu-mba`, `vanderbilt-mba`, `utd-mba`

### Catalog rankedSchools coverage after batches 001–005 + master-list joins
All **63** catalog IDs now have either an outcome card with `catalog_id` or a master-list `catalog_id` join (batch-001 elite nulls backfilled in master-list for stanford/mit/berkeley/cmu/illinois/gatech/cornell/washington CS and stanford/harvard/penn MBA).

### Still thin / no numeric FDS (cards exist but low-conf or qualitative)
CS: northwestern-cs, ucsb-cs, unc-cs, yale-cs, jhu-cs, wisconsin-cs, duke-cs, brown-cs, nyu-cs (Courant), harvard-cs (mismatch), caltech-cs (no terminal MS)  
MBA generally stronger; Terry/Jindal medium pending cleaner CSEA PDFs.

### Still-open upgrade hunts (optional later — not blocking pause)
- Columbia **CS** MS FDS (not EE)
- UT Austin **CS** MS FDS
- UCLA **MSCS** FDS
- Deepen Yale / JHU / Wisconsin with official tables if published

**Recommendation:** Path can **pause** after batch-005 — required catalog gap-fill done.

## Outputs
1. `.../outcomes/batch-005.json`
2. `/workspace/path/outcomes/batch-005-brief.md`
3. `.../handoffs/to-site-batch-005.md`
4. `programs/master-list.json` (cs 41 + mba 32 = 73; elite catalog_id backfills)
