import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

/** Research-only path cards with no catalog row — show on related catalog dossier when listed here. */
const UNLINKED_ATTACH_TO_CATALOG = {
  'cmu-msml': 'cmu-mscs',
  'cmu-mcds': 'cmu-mscs',
  'cmu-msaii': 'cmu-mscs',
};

function normalizeBatch001Card(card, mapping) {
  const { program_id, ...rest } = card;
  const { catalogId, match, caveat } = mapping;
  return {
    key: catalogId,
    card: {
      ...rest,
      pathProgramId: program_id,
      match,
      ...(caveat ? { matchCaveat: caveat } : {}),
      routeMismatch: false,
    },
  };
}

function normalizeV2CatalogCard(card) {
  const { program_id, catalog_id, route_mismatch, route_mismatch_notes, ...rest } = card;
  const normalized = {
    ...rest,
    pathProgramId: program_id,
    routeMismatch: Boolean(route_mismatch),
    ...(route_mismatch_notes ? { routeMismatchNotes: route_mismatch_notes } : {}),
    match: route_mismatch ? 'different-route' : 'same-route',
    ...(route_mismatch && route_mismatch_notes ? { matchCaveat: route_mismatch_notes } : {}),
  };
  return { catalogId: catalog_id, card: normalized };
}

function isBatchUpgrade(card, batchMeta) {
  if (card.meta?.upgrade_of) return true;
  const upgradeIds = batchMeta?.upgrade_of_batch_002;
  return Array.isArray(upgradeIds) && upgradeIds.includes(card.program_id);
}

function ingestV2Batch(
  batchId,
  batchMeta,
  cards,
  outcomeCards,
  unlinkedOutcomeCards,
  outcomeAdjacentByCatalogId,
  outcomeSpecialtyByCatalogId,
) {
  for (const card of cards) {
    const { catalogId, card: normalized } = normalizeV2CatalogCard(card);
    const programId = card.program_id;

    if (catalogId === null) {
      unlinkedOutcomeCards[programId] = normalized;
      const attachCatalog = UNLINKED_ATTACH_TO_CATALOG[programId];
      if (attachCatalog) {
        if (!outcomeSpecialtyByCatalogId[attachCatalog]) outcomeSpecialtyByCatalogId[attachCatalog] = [];
        outcomeSpecialtyByCatalogId[attachCatalog].push(normalized);
      }
      continue;
    }

    const existing = outcomeCards[catalogId];
    if (existing && normalized.routeMismatch) {
      if (!outcomeAdjacentByCatalogId[catalogId]) outcomeAdjacentByCatalogId[catalogId] = [];
      outcomeAdjacentByCatalogId[catalogId].push(normalized);
      continue;
    }

    if (existing && !normalized.routeMismatch) {
      if (isBatchUpgrade(card, batchMeta)) {
        outcomeCards[catalogId] = normalized;
        continue;
      }
      throw new Error(
        `${batchId} would overwrite an existing outcome for ${catalogId} (${programId}); resolve merge rules first.`,
      );
    }

    outcomeCards[catalogId] = normalized;
  }
}

export async function generateOutcomes() {
  const batch001 = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-001.json'), 'utf8'));
  const batch002 = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-002.json'), 'utf8'));
  const batch003 = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-003.json'), 'utf8'));
  const batch004 = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-004.json'), 'utf8'));
  const idMap = JSON.parse(await readFile(path.join(root, 'path/outcomes/id-map.json'), 'utf8'));

  const outcomeCards = {};
  const unlinkedOutcomeCards = {};
  const outcomeAdjacentByCatalogId = {};
  const outcomeSpecialtyByCatalogId = {};

  for (const card of batch001.cards) {
    const mapping = idMap.map[card.program_id];
    if (!mapping) throw new Error(`Missing id-map entry for ${card.program_id}`);
    const { key, card: normalized } = normalizeBatch001Card(card, mapping);
    outcomeCards[key] = normalized;
  }

  ingestV2Batch(
    'batch-002',
    batch002.meta,
    batch002.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'batch-003',
    batch003.meta,
    batch003.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'batch-004',
    batch004.meta,
    batch004.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );

  const body = `// Generated from path/outcomes/batch-001.json, batch-002.json, batch-003.json, batch-004.json, and id-map.json. Do not edit by hand.
export const outcomeBatchMeta = ${JSON.stringify([batch001.meta, batch002.meta, batch003.meta, batch004.meta], null, 2)};
export const outcomeMeta = ${JSON.stringify(batch001.meta, null, 2)};
export const outcomeCards = ${JSON.stringify(outcomeCards, null, 2)};
export const unlinkedOutcomeCards = ${JSON.stringify(unlinkedOutcomeCards, null, 2)};
export const outcomeAdjacentByCatalogId = ${JSON.stringify(outcomeAdjacentByCatalogId, null, 2)};
export const outcomeSpecialtyByCatalogId = ${JSON.stringify(outcomeSpecialtyByCatalogId, null, 2)};
`;
  await writeFile(path.join(root, 'dist/outcomes.js'), body);
  return {
    linked: Object.keys(outcomeCards).length,
    unlinked: Object.keys(unlinkedOutcomeCards).length,
    adjacent: Object.values(outcomeAdjacentByCatalogId).flat().length,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const stats = await generateOutcomes();
  console.log(
    `Built dist/outcomes.js: ${stats.linked} linked cards, ${stats.unlinked} unlinked, ${stats.adjacent} adjacent evidence.`,
  );
}
