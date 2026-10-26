# MSF batch3 handoff (TFE Times 2026 ranks 17–24)

**As of:** 2026-10-26 (Asia/Hong_Kong)  
**Outputs:** `/workspace/brief-handoffs/msf-batch3.json` and `/cursor/stores/store-b90a443b-7202-4733-bf49-1c54f6d542b4/msf-batch3.json`  
**Schema:** Matches `msf-batch1.json` / `msf-batch2.json` (dossier-core). Ranking source: TFE Times 2026 only.

## Summer / non-autumn start flags

| ID | Flag |
| --- | --- |
| **tamu-msf** | **May boot camps** (mini-mesters) immediately after admission, then fall/spring graduate year — summer-start structure for 4+1 admits (not a standalone autumn external matriculation) |
| **cgu-msf** | School calendar posts **Summer 2027** deadlines (priority Feb 1 / intl Mar 1 / dom Apr 1; classes May 17) but MSF at-a-glance lists **Spring/Fall** only — **confirm** whether MSF admits summer |
| bc-msf | Spring (Jan) entry for **Quantitative** track only — not summer |
| illinois-msf | Spring entry available — not summer |
| ohio / msu / auburn / ucsd | Autumn/Fall primary |

## Gaps / blockers

1. **tamu-msf (blocker for intl slate):** Classic Mays **MS Finance is TAMU-undergrad 4+1 only**. Not open to external/international standalone Fall 2027 applicants. Flat tuition **null** (calculator). Related **MS Quantitative Finance (MS-QFIN)** catalog admits non-TAMU graduates meeting prereqs — separate degree; deadlines/tuition not locked this pass.
2. **msu-msf (verify):** `broad.msu.edu` **Incapsula-blocked** live WebFetch/curl. Deadlines (Feb 1 / Mar 1) and tuition ($51k OOS / $46.5k in-state 2026–27) from **search-indexed** official pages — re-scrape live before hard publish. Years assigned for Fall 2027 entry.
3. **auburn-msf:** STEM **not stated** on fetched pages (`stem: null`). Credits **30** (curriculum) vs **31** (admissions). Flat tuition **null**; 2026–27 per-credit rates sourced. Deadline table has month/day only (Apr 1 intl / Jun 1 dom).
4. **ucsd-msf tuition:** TritonLink is **Fall 2026 cohort** unit rate ($1,693 × 52 = **$88,036**). Fall 2027 cohort rate **not posted** — proxy + campus fees ~$9,413.17/yr.
5. **cgu-msf tuition:** Unit rate labeled **2025–26** ($2,070) → est. $66,240 for 32 units. Fall intl final **Jun 1** on MSF page vs **Jul 5** on school-wide news — dossier uses MSF page.
6. **bc-msf STEM:** Only **Quantitative Finance track** is STEM; Regular track is not — flagged in `stemNote`.
7. **Professor reputation:** deferred (batch notes).

## Per-program one-liners

| Rank | ID | Deadline / tuition / duration |
| ---: | --- | --- |
| 17 | bc-msf | Fall rounds Oct 13’26→Jun 8’27; Spring Quant final Dec 15’26; **$71,940**; ~12 mo; Quant STEM |
| 18 | cgu-msf | Fall priority Feb 1 / intl Jun 1 / dom Aug 1; est. **$66,240** (25–26 rates); 32 u/~1 yr STEM |
| 19 | illinois-msf | Fall Oct 28’26→Jun 9’27 (intl May 5); intl **$76,443** / res **$57,846** (3 sem); 40 cr STEM |
| 20 | tamu-msf | TAMU 4+1 only — **external N/A**; tuition null; May boot camps; 36 cr |
| 21 | ohio-msf | Dec 11 / Feb 19 / May 28 intl / Jul 19 dom; NR **$68,093** / OH **$47,093**; ~16 mo STEM |
| 22 | msu-msf | Feb 1 / Mar 1 (**verify**); indexed **$51k** OOS / **$46.5k** in-state; ~30 cr/~12 mo STEM |
| 23 | auburn-msf | Apr 1 intl / Jun 1 dom; per-cr rates (no flat); 30–31 cr; STEM unstated |
| 24 | ucsd-msf | Oct 15’26→Jul 15’27; MQF tuition **$88,036** (F26 proxy); 52 u / 12–15 mo STEM |

## Next for site/gm

- Decide whether **tamu-msf** stays on intl Fall 2027 slate or is annotated/replaced with **MS-QFIN** research.
- Re-scrape **MSU Broad** when Incapsula allows; lock deadline years and tuition.
- Re-check **UCSD** Fall 2027 cohort TritonLink rate; **CGU** 2026–27 unit rate; Auburn STEM/credits.
- Professor-reputation pass still deferred.
