# Master of Finance (MSF) — catalog scaffold

Checked: 26 October 2026. Target intake: Fall 2027 (when a slate is approved).

## Status

**Schema and UI only.** This area exists so filters, navigation, compare, and i18n recognize a third degree family parallel to Computer science and Business.

- **No MSF program rows** are in `dist/catalog.js` yet.
- **No rankings, tuition, deadlines, or school dossiers** have been ingested for MSF.
- **Ingest is on hold** until gm / Collinn greenlight the program slate (batch1 not started).

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
