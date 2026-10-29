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

## Languages

The interface supports English, Traditional Chinese (`?lang=zh-Hant`) and Simplified Chinese (`?lang=zh-Hans`). Explicit URL language takes precedence over the saved browser preference. Program search accepts all three languages; stable IDs and filter values remain English internally. Comparison selections survive language changes.

Edit `locales/zh-Hant.json` and `locales/zh-Hans.json` when adding research or interface text. `scripts/build-locales.mjs` checks matching keys and generates `dist/translations.js` during the normal build. `scripts/convert-chinese.py` is an optional editorial helper (OpenCC 0.1.7); no Python dependency is needed to build or serve the website. Review converted terminology before release. Tests check narrative coverage, cost numbers, language precedence and multilingual search.

Program profiles, scholarship summaries, comparison views and source guidance are translated. Original Markdown notebooks, CSV exports and external source documents retain their original language. The interface explicitly labels these boundaries.

## Funding discovery and ranking display

Scholarship region chips use the explicit `prcEligible`, `twEligible` and `hkEligible` fields. Missing or unrecognised values remain `unclear`; selecting a region defaults to `yes`. Multiple regions use a union, then intersect with status, type and trimmed multilingual search. Counts on region chips include all recorded statuses; the result count reflects active filters. Reset clears all filters. Loans remain a distinct funding type. Application closure follows the record's explicit `closed` wording, never its badge color; records are not reclassified as currently open from absence of a closed label.

`programRanking()` supplies publisher, year and display group for cards, tables, details and comparison. Finance rows use TFE Times, Quant/MFE rows use QuantNet, and MBA/CS use U.S. News. Finance is split into separate display groups; sorting keeps each ranking together. Unknown ranks have no tie flag. QuantNet reproduction links are labelled IBKR Quant News to match the actual destination.

## Application requirements

Optional `applicationRequirements` on a `dist/research-details.js` entry, merged onto the program by catalog id the same way as `deadline`. The dossier section renders only when the object is present. `unknown` still shows, with a gap note. `optional` and `waived` stay distinct labels. Pure CS rows may omit `gmat`. Do not invent scores, fees, or cutoffs. There is no filter or comparison column for this field yet.

Shape (omit keys that do not apply): `gre` / `gmat` `{ status, detail, minScore? }`; `english` `{ toefl, ielts, waiver? }`; `gpa` `{ status, minimum?, scale?, detail }`; `lettersOfRecommendation` `{ status, count?, detail }`; `statementOfPurpose` `{ status, detail, alsoKnownAs? }`; `resume` / `transcripts` `{ status, detail }`; `interview` `{ status, detail }`; `applicationFee` `{ amountUsd?, waivers?, detail }`; `other` string[]; `advice`; `sources` `[label, url][]`; `as_of` `YYYY-MM-DD`.

Status values: GRE/GMAT `required|optional|waived|not_accepted|not_required|unknown`; English tests `required|optional|waived|not_required|unknown`; GPA `required|recommended|not_stated|unknown`; letters, statement, resume, and transcripts `required|optional|not_stated|unknown`; interview `required|by_invitation|not_used|unknown`.

Finance / MSF + Quant batch 1 (42 ids) comes from `brief/appreq-batch1a.json` through `brief/appreq-batch1d.json` via `scripts/merge-appreq-batch1-research-details.mjs`. CS batch 2 (33 ids) comes from `brief/appreq-batch2a.json` through `brief/appreq-batch2d.json` via `scripts/merge-appreq-batch2-research-details.mjs`. MBA batch 3 (30 ids) comes from `brief/appreq-batch3a.json` through `brief/appreq-batch3d.json` via `scripts/merge-appreq-batch3-research-details.mjs`. Each merge writes only `applicationRequirements` and leaves rankings, tuition, scholarships, outcomes, and availability restrictions in place. A `SCHEMA FIXTURE` string still triggers the dossier placeholder banner for demos; live rows do not use that marker.

## Consolidated application requirements

All current catalog rows carry the existing `applicationRequirements` research object. Each dossier displays one bordered application panel with a visible deadline, test statuses and numeric thresholds, recommendation count, documents and fee. Native details disclosures keep lengthy conditions, fee waivers, prerequisites and official source links inside the same panel. Research details retain their original language; interface labels support all three website languages. Optional, waived, unknown and absent values remain distinct, and an explicit $0 fee is preserved.

The ranking table and profile cards provide a direct requirements button. The comparison table has one requirements row, with each program's summary contained in its own cell and a link to its full panel. This presentation uses the existing research; it does not independently revalidate admissions policies or reinterpret alternative tests as cumulative requirements.

## npm cache configuration warnings

Vercel skips package installation (`installCommand: ""`) and invokes `node scripts/build.mjs` directly. This repository has no external package dependencies, so neither deployment step needs npm. If dependencies are added later, restore an appropriate install step and lockfile.

An npm warning about unknown **env config** `cache-dir` comes from an environment variable such as `npm_config_cache_dir` / `NPM_CONFIG_CACHE_DIR`, not from the application code. The supported npm cache option is `cache` (`npm_config_cache` / `NPM_CONFIG_CACHE`). Correct the variable in the shell or CI environment that supplies it; changing a package lifecycle script cannot prevent a warning emitted before that script runs. The direct Node deployment avoids invoking npm in this dependency-free build without suppressing other warnings.
