import './build-locales.mjs';
import { generateResearch } from './generate-research.mjs';
import { generateOutcomes } from './generate-outcomes.mjs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const folders = ['01-sources', '02-computer-science', '03-business', '04-scholarships', '05-application-planning', 'templates'];
await generateResearch();
await generateOutcomes();
const notes = [];
async function visit(dir) {
  for (const item of await readdir(path.join(root, dir), { withFileTypes: true })) {
    const file = path.posix.join(dir, item.name);
    if (item.isDirectory()) await visit(file);
    else if (file.endsWith('.md')) {
      const body = await readFile(path.join(root, file), 'utf8');
      notes.push({ path: file, title: body.split('\n')[0].replace(/^# /, ''), body });
    }
  }
}
const overview = await readFile(path.join(root, 'README.md'), 'utf8');
notes.push({ path: 'README.md', title: 'Research overview', body: overview });
for (const dir of folders) await visit(dir);
await writeFile(path.join(root, 'dist/notes.js'), `export const notes = ${JSON.stringify(notes, null, 2)};\n`);
console.log(`Built research library: ${notes.length} documents. Static site ready in dist/.`);
