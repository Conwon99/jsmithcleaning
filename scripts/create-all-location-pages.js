import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const NEW_LOCATIONS = [
  { name: 'Glasgow', displayName: 'Glasgow', path: 'glasgow', nearbyAreas: 'Partick, Shawlands, and Pollokshields' },
  { name: 'Edinburgh', displayName: 'Edinburgh', path: 'edinburgh', nearbyAreas: 'Leith, Morningside, and Corstorphine' },
  { name: 'Cumbernauld', displayName: 'Cumbernauld', path: 'cumbernauld', nearbyAreas: 'Condorrat, Abronhill, and Kildrum' },
  { name: 'Airdrie', displayName: 'Airdrie', path: 'airdrie', nearbyAreas: 'Chapelhall, Caldercruix, and Plains' },
  { name: 'Motherwell', displayName: 'Motherwell', path: 'motherwell', nearbyAreas: 'Airbles, Craigneuk, and Wishaw' },
  { name: 'Coatbridge', displayName: 'Coatbridge', path: 'coatbridge', nearbyAreas: 'Whifflet, Coatdyke, and Airdrie' },
  { name: 'Bishopbriggs', displayName: 'Bishopbriggs', path: 'bishopbriggs', nearbyAreas: 'Bearsden, Kirkintilloch, and Lenzie' },
  { name: 'Renfrew', displayName: 'Renfrew', path: 'renfrew', nearbyAreas: 'Paisley, Inchinnan, and Erskine' },
  { name: 'Johnstone', displayName: 'Johnstone', path: 'johnstone', nearbyAreas: 'Paisley, Linwood, and Elderslie' },
  { name: 'Kilmarnock', displayName: 'Kilmarnock', path: 'kilmarnock', nearbyAreas: 'Dean, Onthank, and Shortlees' },
  { name: 'Irvine', displayName: 'Irvine', path: 'irvine', nearbyAreas: 'Kilwinning, Stevenston, and Saltcoats' },
  { name: 'Kilwinning', displayName: 'Kilwinning', path: 'kilwinning', nearbyAreas: 'Irvine, Dalry, and Stevenston' },
  { name: 'Saltcoats', displayName: 'Saltcoats', path: 'saltcoats', nearbyAreas: 'Ardrossan, Stevenston, and Irvine' },
  { name: 'Ardrossan', displayName: 'Ardrossan', path: 'ardrossan', nearbyAreas: 'Saltcoats, Stevenston, and West Kilbride' },
  { name: 'Stevenston', displayName: 'Stevenston', path: 'stevenston', nearbyAreas: 'Saltcoats, Ardrossan, and Irvine' },
  { name: 'Bathgate', displayName: 'Bathgate', path: 'bathgate', nearbyAreas: 'Livingston, Armadale, and Blackburn' },
  { name: 'Falkirk', displayName: 'Falkirk', path: 'falkirk', nearbyAreas: 'Grangemouth, Larbert, and Polmont' },
  { name: 'Grangemouth', displayName: 'Grangemouth', path: 'grangemouth', nearbyAreas: "Falkirk, Bo'ness, and Polmont" },
  { name: 'Musselburgh', displayName: 'Musselburgh', path: 'musselburgh', nearbyAreas: 'Dalkeith, Edinburgh, and Prestonpans' },
  { name: 'Dalkeith', displayName: 'Dalkeith', path: 'dalkeith', nearbyAreas: 'Bonnyrigg, Musselburgh, and Edinburgh' },
  { name: 'Bonnyrigg', displayName: 'Bonnyrigg', path: 'bonnyrigg', nearbyAreas: 'Dalkeith, Loanhead, and Edinburgh' },
];

const SERVICES = [
  'brick-cleaning', 'conservatory-cleaning', 'driveway-cleaning', 'gutter-cleaning',
  'patio-cleaning', 'patio-driveway-cleaning', 'pressure-washing', 'roof-cleaning',
  'soft-washing', 'upvc-cleaning'
];

async function readFile(p) {
  return await fs.readFile(path.join(ROOT, p), 'utf-8');
}

async function writeFile(p, content) {
  const full = path.join(ROOT, p);
  await fs.mkdir(path.dirname(full), { recursive: true });
  await fs.writeFile(full, content);
}

/** For Paisley-based templates: Hero, ServiceIntro, ServicesGrid, ServicesSection, index */
function replacePaisleyTemplate(text, loc) {
  const n = loc.name, d = loc.displayName, p = loc.path, areas = loc.nearbyAreas;
  return text
    .replace(/PaisleyHeroContent/g, `${n}HeroContent`)
    .replace(/PaisleyHero/g, `${n}Hero`)
    .replace(/PaisleyServiceIntro/g, `${n}ServiceIntro`)
    .replace(/PaisleyServicesGrid/g, `${n}ServicesGrid`)
    .replace(/PaisleyServicesSection/g, `${n}ServicesSection`)
    .replace(/PaisleyContentSection/g, `${n}ContentSection`)
    .replace(/\/paisley\//g, `/${p}/`)
    .replace(/\/paisley/g, `/${p}`)
    .replace(/Paisley, Renfrew, and Johnstone/g, `${d}, ${areas}`)
    .replace(/Paisley, Renfrew, Johnstone, and the surrounding areas/g, `${d}, ${areas}, and the surrounding areas`)
    .replace(/the town centre, Renfrew, Johnstone, Linwood/g, areas)
    .replace(/\bPaisley\b/g, d)
    .replace(/\bpaisley\b/g, p)
    .replace(/Renfrew, Johnstone/g, areas);
}

/** For Hamilton-based service pages: replace location only */
function replaceHamiltonTemplate(text, loc) {
  const d = loc.displayName, p = loc.path, areas = loc.nearbyAreas;
  return text
    .replace(/Hamilton, Hillhouse, Fairhill/g, `${d}, ${areas}`)
    .replace(/\bHamilton\b/g, d)
    .replace(/\bhamilton\b/g, p)
    .replace(/Hillhouse, Fairhill/g, areas);
}

async function createHeroContent(loc) {
  const t = await readFile('src/sections/Hero/components/PaisleyHeroContent.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createHero(loc) {
  const t = await readFile('src/sections/Hero/components/PaisleyHero.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createServiceIntro(loc) {
  const t = await readFile('src/sections/ServiceIntro/components/PaisleyServiceIntro.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createServicesGrid(loc) {
  const t = await readFile('src/sections/ServicesSection/components/PaisleyServicesGrid.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createServicesSection(loc) {
  const t = await readFile('src/sections/ServicesSection/components/PaisleyServicesSection.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createContentSection(loc) {
  const t = await readFile('src/sections/PaisleyContentSection/index.tsx');
  return replacePaisleyTemplate(t, loc);
}

async function createIndex(loc) {
  const t = await readFile('src/pages/paisley/index.astro');
  return replacePaisleyTemplate(t, loc);
}

async function createServicePage(loc, service) {
  const t = await readFile(`src/pages/hamilton/${service}.astro`);
  return replaceHamiltonTemplate(t, loc);
}

async function main() {
  for (const loc of NEW_LOCATIONS) {
    console.log(`Creating ${loc.displayName}...`);

    await writeFile(`src/sections/Hero/components/${loc.name}HeroContent.tsx`, await createHeroContent(loc));
    await writeFile(`src/sections/Hero/components/${loc.name}Hero.tsx`, await createHero(loc));
    await writeFile(`src/sections/ServiceIntro/components/${loc.name}ServiceIntro.tsx`, await createServiceIntro(loc));
    await writeFile(`src/sections/ServicesSection/components/${loc.name}ServicesGrid.tsx`, await createServicesGrid(loc));
    await writeFile(`src/sections/ServicesSection/components/${loc.name}ServicesSection.tsx`, await createServicesSection(loc));
    await writeFile(`src/sections/${loc.name}ContentSection/index.tsx`, await createContentSection(loc));

    await writeFile(`src/pages/${loc.path}/index.astro`, await createIndex(loc));
    for (const s of SERVICES) {
      await writeFile(`src/pages/${loc.path}/${s}.astro`, await createServicePage(loc, s));
    }

    console.log(`  ✓ ${loc.displayName} (index + ${SERVICES.length} services)`);
  }
  console.log('Done.');
}

main().catch(console.error);
