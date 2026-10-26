# Master of Finance (MSF)

Checked: 26 October 2026. Target intake: Fall 2027.

## Status

TFE Times 2026 ranks **1–30** are in the catalog (batches 1–4), plus unranked **florida-msft** (UF FinTech), **chicago-booth-mif** (Asness and Liew MiF), and **columbia-msfe** (MS in Financial Economics). Quant/MFE programs stay off this list.

- **tamu-msf** and **florida-msf** are access-restricted combination pathways (TAMU undergrad 4+1 and UF undergrad only). External / international applicants are N/A on those ids.
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
