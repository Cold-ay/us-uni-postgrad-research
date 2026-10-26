# US postgraduate research — Fall 2027

A public reference for comparing US master’s routes in computer science, full-time MBA, and (when ingested) master’s in finance (MSF). No tuition budget or US location limit is applied. Hong Kong and Taiwan scholarship eligibility must be checked separately.

The website covers **30 MBA schools and 33 graduate CS departments** in the U.S. News April 2026 release, preserving ties through numeric rank 30. These are separate rankings. CS department positions do not rank the particular MS or MEng listed. **MSF catalog rows are not live yet** — the site exposes Finance filters and ingest rules in [06-finance/README.md](06-finance/README.md) for the authorized Fall 2027 brief.

- [Live website](https://us-uni-postgrad-research.vercel.app/)
- [Ranking provenance, caveats and complete lists](01-sources/us-news-april-2026.md)
- [Computer science](02-computer-science/README.md)
- [MBA](03-business/README.md)
- [Finance / MSF ingest (empty catalog)](06-finance/README.md)
- [Shared scholarship library](04-scholarships/README.md)
- [Research methodology and other sources](01-sources/source-guide.md)

Checked 19 October 2026. Ranked-school coverage is complete through the cutoff; program research remains preliminary. Eight profiles have 2026–27 tuition references. Other tuition, most individual faculty profiles, scholarship eligibility and internship outcomes remain explicitly unverified. No missing price is treated as zero, and no internship is described as easy based on ranking alone.

The direct U.S. News tables were inaccessible. Positions are reported from Clear Admit (MBA) and IvyPath Advisory (CS), with selected university cross-checks. Every profile carries a source link; the source note explains the verification limit.

Each program has a separate dossier. Shared awards live under `04-scholarships/opportunities` and are linked by ID; reusing a record across programs does not imply repeat eligibility or permission to combine awards.

`dist/catalog.js` and `dist/catalog-finance.js` store ranked schools (CS/MBA and MSF respectively); `dist/areas.js` defines filter areas; `dist/research-details.js` stores sourced findings. `npm run build` regenerates dossiers, the CSV and the notebook. See DEVELOPMENT.md for implementation details.
