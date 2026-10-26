# Finance — Master of Science in Finance (MSF)

Authorized Fall 2027 MSF research runs parallel to the existing CS (~33) and MBA (~30) slates. **No programs are listed here until the brief delivers ranked schools and dossiers.** The live site already exposes Finance / MSF filters; an empty catalog is intentional.

## Catalog ingest

Add rows to `dist/catalog-finance.js` (`rankedSchoolsFinance` array). Each object matches the CS/MBA shape in `dist/catalog.js`:

| Field | Requirement |
| --- | --- |
| `id` | Stable slug; **prefer `{school-key}-msf`** (e.g. `mit-msf`, `columbia-msf`). Use `{school-key}-mf` only when the published degree title is “Master of Finance” and `-msf` would mislabel the route. |
| `area` | Always **`"Finance"`** (site filter value). |
| `degree` | Official program name from the school (verbatim; do not invent). |
| `rank` | From the authorized U.S. News reproduction only — no placeholder ranks. |
| `university`, `short`, `academic`, `programUrl` | Same rules as CS/MBA catalog rows. |

After adding rows:

1. Add `06-finance/programs/{id}.md` dossiers (or run `npm run build` to regenerate from research details).
2. Extend `dist/research-details.js` with sourced fields per `id`.
3. Add ranking provenance to `dist/rankings.js` when the brief fixes the reproduction source.
4. Run `npm run build` and `npm test`.

Shared scholarships stay in `04-scholarships/`; link by ID in research details. Do not assume MBA-only awards apply to MSF without verification.
