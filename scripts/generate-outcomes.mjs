import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

/** Research-only path cards with no catalog row — show on related catalog dossier when listed here. */
const UNLINKED_ATTACH_TO_CATALOG = {
  'cmu-msml': 'cmu-mscs',
  'cmu-mcds': 'cmu-mscs',
  'cmu-msaii': 'cmu-mscs',
};

/** Path outcome ids that differ from the brief/aid catalog ids. Never emit both spellings. */
const MSF_CATALOG_ID_ALIAS = {
  'ohiostate-msf': 'ohio-msf',
  'ucsd-rady-msf': 'ucsd-msf',
};

/** Batch3 primary slate only. Batch4 cards are wired from path-batch4-from-batch002-003.json, not leftover batch3 rows. */
const MSF_BATCH3_CATALOG_IDS = new Set([
  'bc-msf',
  'cgu-msf',
  'illinois-msf',
  'tamu-msf',
  'ohio-msf',
  'msu-msf',
  'auburn-msf',
  'ucsd-msf',
]);

function selectBatch3OutcomeCards(cards) {
  const selected = [];
  for (const card of cards) {
    const catalog_id = MSF_CATALOG_ID_ALIAS[card.catalog_id] || card.catalog_id;
    if (!MSF_BATCH3_CATALOG_IDS.has(catalog_id)) continue;
    selected.push({ ...card, catalog_id });
  }
  const ids = selected.map((card) => card.catalog_id);
  if (new Set(ids).size !== ids.length) {
    throw new Error(`Duplicate batch3 outcome catalog ids: ${ids.join(', ')}`);
  }
  if (ids.length !== MSF_BATCH3_CATALOG_IDS.size) {
    throw new Error(`Expected ${MSF_BATCH3_CATALOG_IDS.size} batch3 outcome cards, got ${ids.join(', ')}`);
  }
  return selected;
}

/** Batch4 extract. illinois-tech-msf remaps onto iit-msf; do not emit both spellings. */
const MSF_BATCH4_ALIAS = {
  'illinois-tech-msf': 'iit-msf',
};

const MSF_BATCH4_CATALOG_IDS = [
  'iit-msf',
  'temple-msf',
  'lsu-msf',
  'santaclara-msf',
  'rit-msf',
  'arizona-msf',
  'chicago-booth-mif',
  'columbia-msfe',
];

function selectBatch4OutcomeCards(cards) {
  const allowed = new Set(MSF_BATCH4_CATALOG_IDS);
  const selected = [];
  for (const card of cards) {
    const catalog_id = MSF_BATCH4_ALIAS[card.catalog_id] || card.catalog_id;
    if (!allowed.has(catalog_id)) {
      throw new Error(`Unexpected batch4 outcome catalog id ${card.catalog_id}`);
    }
    selected.push({ ...card, catalog_id });
  }
  const ids = selected.map((card) => card.catalog_id);
  if (new Set(ids).size !== ids.length) {
    throw new Error(`Duplicate batch4 outcome catalog ids: ${ids.join(', ')}`);
  }
  const missing = MSF_BATCH4_CATALOG_IDS.filter((id) => !ids.includes(id));
  if (missing.length || ids.length !== MSF_BATCH4_CATALOG_IDS.length) {
    throw new Error(`Expected 8 batch4 outcome cards, missing ${missing.join(', ') || 'none'}, got ${ids.join(', ')}`);
  }
  if (ids.includes('illinois-tech-msf')) {
    throw new Error('illinois-tech-msf must not be an outcome key');
  }
  return selected;
}

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
  const batch005 = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-005.json'), 'utf8'));
  const msfBatch001 = JSON.parse(await readFile(path.join(root, 'path/outcomes/msf-batch-001.json'), 'utf8'));
  const msfBatch002 = JSON.parse(await readFile(path.join(root, 'path/outcomes/msf-batch-002.json'), 'utf8'));
  const msfFloridaMsft = JSON.parse(await readFile(path.join(root, 'path/outcomes/msf-florida-msft.json'), 'utf8'));
  const msfBatch003 = JSON.parse(await readFile(path.join(root, 'path/outcomes/msf-batch-003.json'), 'utf8'));
  const msfBcFromBatch002 = JSON.parse(await readFile(path.join(root, 'path/outcomes/path-bc-msf-from-batch002.json'), 'utf8'));
  const msfBatch4 = JSON.parse(await readFile(path.join(root, 'path/outcomes/path-batch4-from-batch002-003.json'), 'utf8'));
  const idMap = JSON.parse(await readFile(path.join(root, 'path/outcomes/id-map.json'), 'utf8'));
  const msfBatch003Cards = selectBatch3OutcomeCards([
    ...msfBcFromBatch002.cards,
    ...msfBatch003.cards,
  ]);
  const msfBatch4Cards = selectBatch4OutcomeCards(msfBatch4.cards);

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
  ingestV2Batch(
    'batch-005',
    batch005.meta,
    batch005.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'msf-batch-001',
    msfBatch001.meta,
    msfBatch001.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'msf-batch-002',
    msfBatch002.meta,
    msfBatch002.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'msf-florida-msft',
    msfFloridaMsft.meta,
    msfFloridaMsft.cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'msf-batch-003',
    msfBatch003.meta,
    msfBatch003Cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );
  ingestV2Batch(
    'msf-batch4',
    msfBatch4.meta,
    msfBatch4Cards,
    outcomeCards,
    unlinkedOutcomeCards,
    outcomeAdjacentByCatalogId,
    outcomeSpecialtyByCatalogId,
  );

  const body = `// Generated from path/outcomes/batch-001.json through batch-005.json, msf-batch-001.json, msf-batch-002.json, msf-florida-msft.json, msf-batch-003.json (batch3 catalog ids only; ohiostate-msf→ohio-msf, ucsd-rady-msf→ucsd-msf), path-bc-msf-from-batch002.json, path-batch4-from-batch002-003.json (illinois-tech-msf→iit-msf), and id-map.json. Do not edit by hand.
export const outcomeBatchMeta = ${JSON.stringify(
    [batch001.meta, batch002.meta, batch003.meta, batch004.meta, batch005.meta, msfBatch001.meta, msfBatch002.meta, msfFloridaMsft.meta, msfBatch003.meta, msfBcFromBatch002.meta, msfBatch4.meta],
    null,
    2,
  )};
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
