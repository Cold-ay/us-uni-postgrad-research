# Handoff → site — HK/TW scholarships (SCH-015..045)

**From:** aid agent · **Date:** 2026-10-20 (HKT)  
**Artifacts:** `path/aid/hktw-awards.json`, `path/aid/HKTW-SCHOLARSHIP-SUMMARY.md`, `04-scholarships/opportunities/*.md` (31 files)

## Do

1. Run `node scripts/apply-aid-hktw.mjs` — upserts SCH-015..045 into `dist/data.js` (preserves SCH-001..014) and merges `researchDetailsLinkage` into `dist/research-details.js` program `scholarships` arrays.
2. `npm run build` — regenerate dossiers, notes, locales bundle.
3. Scholarships page: HK / TW eligibility filters (values `yes` / `no` / `unclear` only).

## Linkage rules

- Keys matching catalog `id` → add listed SCH ids to that program.
- `any` → all 63 ranked programs.
- `multi` → per-award `programIds` hints (`multi (MBA)`, `multi (CS PhD)`, `multi`, `any US grad`, etc.).

## Do not

- Duplicate or alter existing SCH-001..014 rows.
- Coerce `hkEligible` / `twEligible` away from `unclear`.
- Invent amounts, deadlines, or eligibility.
