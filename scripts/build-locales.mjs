import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../',import.meta.url);
export async function buildLocales() {
 const dictionaries = {};
 for (const locale of ['zh-Hant','zh-Hans']) dictionaries[locale] = JSON.parse(await readFile(new URL(`locales/${locale}.json`,root),'utf8'));
 if(JSON.stringify(Object.keys(dictionaries['zh-Hant']).sort())!==JSON.stringify(Object.keys(dictionaries['zh-Hans']).sort())) throw Error('Chinese dictionary keys do not match');
 await writeFile(new URL('dist/translations.js',root),`// Generated from locales/*.json.\nexport const dictionaries = ${JSON.stringify(dictionaries,null,2)};\n`);
}
await buildLocales();
