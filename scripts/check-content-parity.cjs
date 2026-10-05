// Guard independently captured Wix content against accidental migration regressions.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const read = name => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const normalize = value => value.replace(/[\u200b\u00a0]/g, ' ').replace(/\s+/g, ' ').trim();
// Editorial quotation marks/apostrophes may differ; words and technical figures must not.
const narrativeText = value => normalize(value).replace(/[‘’'“”"]/g, '');
const sitePath = path.join(root, 'src/data/site.ts');
const site = { exports: {} };
vm.runInNewContext(ts.transpile(fs.readFileSync(sitePath, 'utf8'), {
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.CommonJS,
  esModuleInterop: true,
}), { exports: site.exports, require: createRequire(sitePath) }, { filename: sitePath });

const { projects, services } = site.exports;
const narratives = read('docs/wix-narrative-coverage.json');
const source = read('docs/wix-complete-source-text-2026-10-04.json');
const review = read('docs/content-review-holds-2026-10-05.json');
const coverage = read('docs/wix-complete-parity-review-2026-10-04.json');
const drafts = read('src/data/unfinished-projects.json');
const team = read('src/data/team.json');
const filmPath = path.join(root, 'src/data/featuredProjects.ts');
const film = { exports: {} };
vm.runInNewContext(ts.transpile(fs.readFileSync(filmPath, 'utf8'), {
  target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS,
}), { exports: film.exports }, { filename: filmPath });
const sourceSlides = read('docs/wix-home-film-source.json').slides;
for (const slide of sourceSlides) {
  const frame = film.exports.featuredProjects.find(item => item.title === slide.title);
  assert.ok(frame, `Missing authored Home slide: ${slide.title}`);
  if (slide.credit) assert.equal(frame.video ? 'Video courtesy: HDOT' : frame.credit, slide.credit);
}
for (const frame of film.exports.featuredProjects) {
  assert.ok(fs.existsSync(path.join(root, `public/images/${frame.image}.webp`)), `Missing film image: ${frame.image}`);
}

let paragraphs = 0;
for (const story of narratives) {
  const project = projects.find(item => `/projects/${item.slug}` === story.route);
  assert.ok(project, `Missing source story: ${story.route}`);
  const body = project.body.map(narrativeText);
  for (const paragraph of story.paragraphs) {
    assert.ok(body.includes(narrativeText(paragraph)), `Missing source paragraph in ${story.route}: ${paragraph.slice(0, 85)}`);
    paragraphs++;
  }
}
assert.equal(narratives.length, 30, 'Review story removals against the Wix source');
assert.equal(paragraphs, 102, 'Review paragraph removals against the Wix source');

const servicePages = [
  'Services (New)', 'Copy of Services (New)', 'Geotechnical Engineering (New)',
  'Services After Construction', 'Drilling and Subsurface Investigation (',
  'Materials Testing (New)', 'Forensic and Expert Witness (New)',
];
const strings = value => typeof value === 'string' ? [value]
  : Array.isArray(value) ? value.flatMap(strings)
    : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const serviceText = value => narrativeText(value)
  .replace('Both soil and concrete and widely', 'Both soil and concrete are widely')
  .replace(/[.!?]+$/, '');
const serviceCopy = serviceText(strings(services).join(' '));
const serviceParagraphs = new Set(servicePages.flatMap(name => source[name].blocks
  .filter(block => block.tag === 'P' && block.text.length > 100
    && !block.text.startsWith('We are a full-serve'))
  .map(block => serviceText(block.text))));
for (const paragraph of serviceParagraphs) {
  const hold = review.heldSourceParagraphs.find(item => serviceText(item.text) === paragraph);
  assert.ok(serviceCopy.includes(paragraph) || hold,
    `Missing service explanation without an owner-authorized hold: ${paragraph.slice(0, 85)}`);
}
// Holds are exact source paragraphs, not a blanket exemption from Wix fidelity.
const archivedServiceCopy = serviceText(strings(review.originalServices).join(' '));
for (const hold of review.heldSourceParagraphs) {
  const paragraph = serviceText(hold.text);
  assert.ok(serviceParagraphs.has(paragraph), `Unknown held source paragraph: ${paragraph.slice(0, 85)}`);
  assert.ok(archivedServiceCopy.includes(paragraph), 'Held source copy must remain recoverable in the review archive');
  assert.ok(!serviceCopy.includes(paragraph), 'An active review hold must not be publicly advertised');
}
assert.equal(review.heldSourceParagraphs.length, 16, 'New wording holds require an explicit owner review');
const appCopy = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const previewCopy = fs.readFileSync(path.join(root, 'src/data/aboutTopics.ts'), 'utf8');
const marketingCopy = narrativeText([serviceCopy, appCopy, previewCopy].join(' ')).toLowerCase();
for (const phrase of [
  'ensure that it never happens again', 'guarantee safety',
  'prevent any type of slope from failing', 'best of everyones ability',
  'all codes/regulations', 'day-to-day oversight', 'actively involved in every phase',
  'built to last', 'end-to-end project solutions', 'ensure lasting success', 'ensure satisfaction',
  'offshore platforms', 'chemical properties', 'trenchless utility installations',
  'excavation shoring design', 'dewatering evaluation', 'litigation support',
  'insurance claim investigations',
]) {
  assert.ok(!marketingCopy.includes(phrase), `Held public claim reintroduced: ${phrase}`);
}
assert.ok(!services.some(service => service.slug === 'forensic-expert-witness'));
assert.equal(site.exports.serviceDescriptionsUnderReview['forensic-expert-witness'],
  'Forensic & expert witness services', 'Preserve the held service URL/title for review');

const publicRoutes = new Set([
  ...projects.map(item => `/projects/${item.slug}`),
  ...drafts.filter(item => item.gallery).map(item => `/drafts/${item.slug}`),
]);
assert.equal(coverage.galleryTileCoverage.length, 48);
for (const tile of coverage.galleryTileCoverage) {
  assert.ok(publicRoutes.has(tile.route), `Wix gallery tile has no public destination: ${tile.sourceTitle}`);
}

const sourceRows = source['Team roster'].text.split('\n').filter(line => line.includes('\t') && !/^\s/.test(line));
assert.equal(sourceRows.length, 32, 'Source roster format changed; review before updating the guard');
assert.equal(team.length, sourceRows.length);
for (const row of sourceRows) {
  const fields = row.split('\t').map(normalize);
  const person = team.find(item => item.name === fields[0]);
  assert.ok(person, `Missing team member: ${fields[0]}`);
  assert.deepEqual([person.name, person.position, person.degree, person.licensed], fields,
    `Source qualification mismatch for ${fields[0]}`);
}

for (const item of [...projects, ...drafts.filter(item => item.gallery)]) {
  assert.ok(fs.existsSync(path.join(root, `public/images/${item.image}.webp`)), `Missing gallery image: ${item.image}`);
}

console.log(JSON.stringify({
  stories: narratives.length, paragraphs, serviceParagraphs: serviceParagraphs.size,
  ownerAuthorizedServiceHolds: review.heldSourceParagraphs.length,
  sourceFilmSlides: sourceSlides.length, featuredSlides: film.exports.featuredProjects.length,
  galleryTiles: coverage.galleryTileCoverage.length,
  publicGalleryEntries: publicRoutes.size, teamMembers: team.length, result: 'passed',
}, null, 2));
