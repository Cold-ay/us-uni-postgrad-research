# Website development

Fieldnotes is a dependency-free static interface for the Fall 2027 research collection. It includes program search and subject filters, program details, persistent local comparison selections, scholarship search/status filters, linked funding records, source guidance, and a full-text notebook.

## Run locally

Requires Node.js 20.11 or newer.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. Set `PORT` to use another port. Run `npm test` for research integrity and search checks.

## Update the research

1. Edit the relevant original Markdown files.
2. Update structured profile summaries in `dist/data.js` when researched facts change. Keep source URLs, academic year, cost basis and uncertainty labels attached.
3. Run `npm run build` to regenerate `dist/notes.js` from all research notes and the dossier template.
4. Run `npm test`, then review the affected profiles and notebook.

`dist/notes.js` is generated. The remaining `dist/` files are maintained static source assets. No external fonts, runtime libraries, analytics or API keys are required. Comparisons are stored only in the browser's local storage; blocked storage falls back to the current session. The app does not submit applications or claim scholarship eligibility.

## Hosting

The `dist/` directory can be served by any static host, including a GitHub Pages deployment configured to publish this directory as an artifact. Paths are relative, so repository subpaths work. `.openai/hosting.json` records the separate owner-private Sites preview identity. GitHub repository visibility and hosted Site visibility are independent.

## Current coverage

Two preliminary program profiles and three scholarship records, checked 16 October 2026. This is an interface for existing research, not a completed nationwide survey. No faculty profiles, exact ranking positions or internship success rates have been fabricated.

## Ranked catalog update — 19 October 2026

Current coverage supersedes the initial seed counts above: 63 ranked-school entries (30 MBA, 33 CS including ties), eight prior-year tuition references and four shared funding records.

- `dist/catalog.js`: school, degree route, category, numeric rank and primary academic URL.
- `dist/research-details.js`: sourced program findings and exceptions; absent fields use explicit unknown states.
- `dist/rankings.js`: category-specific provenance, edition, format and pagination helpers.
- `scripts/generate-research.mjs`: regenerates one Markdown dossier per entry, ranking record and CSV before the notebook build. Edit data files rather than generated dossiers.

The ranking table shows all matches, grouped by category; cards paginate 12 at a time. Search covers school, degree and academic text. Comparisons are capped at four. Tuition filters exclude null values. Publish with the existing GitHub → Vercel integration after build and tests.
