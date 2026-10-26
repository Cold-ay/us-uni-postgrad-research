# Tuition & award change brief — as-of 2026-10-26 (Asia/Hong_Kong)

Weekly scan vs store baseline (batch1-costs / hktw-awards / funding cards / prc-awards as of 2026-10-20). Catalog: Cold-ay/us-uni-postgrad-research `dist/catalog.js`.

## Material changes (2)

### 1. texas-cs — tuition −$8 AY
| Field | Before (2026-10-20) | After (2026-10-26) |
| --- | --- | --- |
| AY tuition (nonresident Natural Sciences × 9 hours × 2) | $18,170 | $18,162 |
| Semester 9-hour rate | $9,085 | $9,081 |
| Period | 2026–27 | 2026–27 (unchanged) |
| 12-hour semester | $10,970 | $10,970 (unchanged) |

- **Source:** [UT Austin tuition tables PDF](https://catalog.utexas.edu/general-information/registration-tuition-and-fees/tuition-and-fees/tables-tuition-for-fall-and-spring/tables-tuition-for-fall-and-spring.pdf) (footer / CreationDate 10/22/26).
- **Site action:** patch `referenceCost` for `texas-cs` tuition → 18162; refresh costDetail rates.

### 2. SCH-045 Qualcomm Innovation Fellowship — 2027 cycle published
| Field | Before (2026-10-20) | After (2026-10-26) |
| --- | --- | --- |
| Amount | $50,000 per Entrant to departments (2026 rules) | $50,000 per Entrant to departments (2027 rules — unchanged) |
| Deadline | unknown for 2027 | Abstract due **Mon Oct 19, 2026 by 10:00 a.m.** (ASU Inner Circle); Official Rules defer to Website — **window closed** as of scan |
| State | 2026 cycle; 2027 unknown | 2027 North America cycle live; abstract closed |
| Rules URL | QIF-2026-official-rules PDF | [QIF-2027-official-rules-US-CANADA.pdf](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/QIF-2027-official-rules-US-CANADA.pdf) |

- **Also:** [Qualcomm press note Oct 12, 2026](https://www.qualcomm.com/news/releases/2026/10/qualcomm-launches-2027-innovation-fellowship-program-for-north-a.md); [ASU Inner Circle deadline notice](https://innercircle.engineering.asu.edu/2026/09/apply-for-the-2027-qualcomm-innovation-fellowship-by-oct-19/).
- **Site action:** update SCH-045 md + `dist/data.js`; swap rules PDF link; set deadline/state; expand `programIds` to 2027 rules list intersecting catalog (cmu-mscs, mit-cs, princeton-cs, stanford-cs, berkeley-cs, ucla-cs, ucsd-cs, ucsb-cs, illinois-cs, maryland-cs, columbia-cs, usc-cs, cornell-cs, michigan-cs, washington-cs, gatech-cs, texas-cs, wisconsin-cs, purdue-cs). PhD-team fellowship; not a master’s/MBA stipend.

## Unresolved (not a figure change)
- **SCH-066** Haas CRB: official pages still omit $20k; leave amount as previously flagged for re-check.

## Quiet watches (no package needed)
- 17/18 other batch1 cost pages unchanged; no new 2027–28 schedules.
- gatech Spring 2027 chart out; flat rate unchanged.
- texas-mba / michigan-mba / dartmouth-mba still prior-class or future-post dates.
- Time-sensitive awards still open as recorded: Soros (Oct 29), NVIDIA (Oct 30), Jane Street (Nov 13), Croucher (Nov 15), CSC self-financed (Nov 23–Dec 4), HKSES (Dec 31).

## Handoff files
- Structured: `/workspace/aid-scan-2026-10-26/CHANGE-HANDOFF.json`
- Store baselines updated in place for texas-cs + SCH-045.
