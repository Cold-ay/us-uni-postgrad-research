import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

export async function generateOutcomes() {
  const batch = JSON.parse(await readFile(path.join(root, 'path/outcomes/batch-001.json'), 'utf8'));
  const idMap = JSON.parse(await readFile(path.join(root, 'path/outcomes/id-map.json'), 'utf8'));
  const outcomeCards = {};
  for (const card of batch.cards) {
    const mapping = idMap.map[card.program_id];
    if (!mapping) throw new Error(`Missing id-map entry for ${card.program_id}`);
    const { catalogId, match, caveat } = mapping;
    const { program_id, ...rest } = card;
    outcomeCards[catalogId] = {
      ...rest,
      pathProgramId: program_id,
      match,
      ...(caveat ? { matchCaveat: caveat } : {}),
    };
  }
  const body = `// Generated from path/outcomes/batch-001.json + id-map.json. Do not edit by hand.\nexport const outcomeMeta = ${JSON.stringify(batch.meta, null, 2)};\nexport const outcomeCards = ${JSON.stringify(outcomeCards, null, 2)};\n`;
  await writeFile(path.join(root, 'dist/outcomes.js'), body);
  return { count: Object.keys(outcomeCards).length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { count } = await generateOutcomes();
  console.log(`Built dist/outcomes.js with ${count} outcome cards.`);
}
