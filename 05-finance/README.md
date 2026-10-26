# Master of Finance (MSF)

Checked: 26 October 2026. Target intake: Fall 2027.

## Status

TFE Times 2026 ranks **1–30** are in the catalog (batches 1–4), plus unranked **florida-msft** (UF FinTech), **chicago-booth-mif** (Asness and Liew MiF), **columbia-msfe** (MS in Financial Economics), and **tamu-qfin** (MS Quantitative Finance).

**quant-mfe** is a separate track (QuantNet 2026), not part of the TFE rank spine. Those eight rows keep `tfeRank2026` / catalog `rank` null:

| Catalog id | QuantNet 2026 | Notes |
| --- | --- | --- |
| berkeley-mfe | 5 | Spring-only. Tuition is Program & University Fees $98,036 |
| cmu-mscf | 3 | |
| baruch-mfe | 1 | Intl package $42,000. No admit-time scholarship card |
| columbia-ieor-mfe | 4 | IEOR MSFE. Not `columbia-msfe` (CBS) |
| gt-qcf | 8 | Alias `gatech-qcf` is not a row. OOC semester tuition |
| chicago-finmath | 7 | Illustrative 1,250-unit total |
| nyu-courant-mf | 11 | Alias `nyu-courant` is not a row. No program aid card |
| stanford-mcf | unlisted | Flat tuition null |

Do not copy columbia-ieor-mfe costs or SCH-142–144 onto columbia-msfe.

- **tamu-msf** and **florida-msf** are access-restricted combination pathways (TAMU undergrad 4+1 and UF undergrad only). External / international applicants are N/A on those ids.
- **tamu-qfin** is MS Quantitative Finance (MS-QFIN / STEM to Stocks), open to non-TAMU graduates via Math GradCAS. It is a separate row from **tamu-msf**: no flat tuition sticker, nonresident base estimate $30,110, program fee $15,000 per Fall and Spring semester, and no scholarship card.
- **ucsd-msf** is the Rady Master of Quantitative Finance (MQF, formerly MFin) and stays on this TFE spine.
- Path aliases `ohiostate-msf` and `ucsd-rady-msf` resolve to `ohio-msf` and `ucsd-msf`. They are not separate rows.
- **iit-msf** is Illinois Tech Stuart MS Finance. Path id `illinois-tech-msf` is `id_alias_legacy` only — not a second row.
- **temple-msf** display is MS in Financial Analysis (Fox), with an August Finance Academy before fall modules.
- **santaclara-msf** display is MS in Finance & Analytics (MSFA).
- **lsu-msf** has no flat tuition sticker and no scholarship card. **rit-msf** has no flat sticker.

## Catalog id convention (for future ingest)

When programs are added, each catalog row id should end with **`-msf`**, using the same school key as CS/MBA where possible:

| Pattern | Example | Notes |
| --- | --- | --- |
| `{school-key}-msf` | `mit-msf`, `wharton-msf`, `columbia-msf` | Preferred default |
| Locked suffix exceptions | `florida-msft`, `chicago-booth-mif`, `columbia-msfe`, `tamu-qfin` | Finance rows that do not use `-msf` |
| quant-mfe track | `berkeley-mfe`, `cmu-mscf`, `baruch-mfe`, `columbia-ieor-mfe`, `gt-qcf`, `chicago-finmath`, `nyu-courant-mf`, `stanford-mcf` | Separate QuantNet track. `tfeRank2026` null. Aliases `gatech-qcf` and `nyu-courant` are not rows |
| Existing CS/MBA keys | `stanford-cs`, `stanford-mba` | MSF sibling would be `stanford-msf` |

Do not invent rankings or tuition during scaffold work. Add rows only after an approved handoff lists explicit ids.

## Site integration

- Program area name in data: **`Finance`**
- Degree kind label: **`MSF`**
- Content folder: **`05-finance/programs/`** (dossiers appear here after ingest)
- Registry: `dist/areas.js`

## Related research

- [Computer science](../02-computer-science/README.md)
- [MBA / Business](../03-business/README.md)
- [Scholarship library](../04-scholarships/README.md)
