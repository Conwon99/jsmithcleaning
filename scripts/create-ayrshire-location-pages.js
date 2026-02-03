import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const NEW_LOCATIONS = [
  { name: 'Ayr', displayName: 'Ayr', path: 'ayr', nearbyAreas: 'Alloway, Prestwick, and Troon' },
  { name: 'Troon', displayName: 'Troon', path: 'troon', nearbyAreas: 'Barassie, Loans, and Prestwick' },
  { name: 'Prestwick', displayName: 'Prestwick', path: 'prestwick', nearbyAreas: 'Ayr, Monkton' },
  { name: 'Cumnock', displayName: 'Cumnock', path: 'cumnock', nearbyAreas: 'Auchinleck, and Ochiltree' },
  { name: 'Largs', displayName: 'Largs', path: 'largs', nearbyAreas: 'Fairlie, Skelmorlie, and Wemyss Bay' },
];

const SERVICES = [
  'brick-cleaning', 'conservatory-cleaning', 'driveway-cleaning', 'gutter-cleaning',
  'patio-cleaning', 'patio-driveway-cleaning', 'pressure-washing', 'roof-cleaning',
  'soft-washing', 'upvc-cleaning'
];

const SERVICE_DISPLAY = {
  'roof-cleaning': 'Roof Cleaning',
  'pressure-washing': 'Pressure Washing',
  'gutter-cleaning': 'Gutter Cleaning',
  'soft-washing': 'Soft Washing',
  'driveway-cleaning': 'Driveway Cleaning',
  'patio-cleaning': 'Patio Cleaning',
  'patio-driveway-cleaning': 'Patio & Driveway Cleaning',
  'brick-cleaning': 'Brick Cleaning',
  'conservatory-cleaning': 'Conservatory Cleaning',
  'upvc-cleaning': 'UPVC Cleaning',
};

async function readFile(p) {
  return await fs.readFile(path.join(ROOT, p), 'utf-8');
}

async function writeFile(p, content) {
  const full = path.join(ROOT, p);
  await fs.mkdir(path.dirname(full), { recursive: true });
  await fs.writeFile(full, content);
}

function replaceTemplate(text, loc, service) {
  let t = text
    .replace(/KilmarnockHeroContent/g, `${loc.name}HeroContent`)
    .replace(/KilmarnockHero/g, `${loc.name}Hero`)
    .replace(/KilmarnockServiceIntro/g, `${loc.name}ServiceIntro`)
    .replace(/KilmarnockServicesSection/g, `${loc.name}ServicesSection`)
    .replace(/KilmarnockContentSection/g, `${loc.name}ContentSection`)
    .replace(/\/kilmarnock\//g, `/${loc.path}/`)
    .replace(/\/kilmarnock/g, `/${loc.path}`)
    .replace(/Kilmarnock, Dean, Onthank, and Shortlees/g, `${loc.displayName}, ${loc.nearbyAreas}`)
    .replace(/Dean, Onthank, and Shortlees/g, loc.nearbyAreas)
    .replace(/\bKilmarnock\b/g, loc.displayName)
    .replace(/\bkilmarnock\b/g, loc.path);
  if (service) {
    const serviceDisplay = SERVICE_DISPLAY[service] || service;
    t = t.replace(/Roof Cleaning Kilmarnock/g, `${serviceDisplay} ${loc.displayName}`)
      .replace(/roof-cleaning/g, service)
      .replace(/Roof Cleaning/g, serviceDisplay);
  }
  return t;
}

async function main() {
  const indexTemplate = await readFile('src/pages/kilmarnock/index.astro');
  const roofTemplate = await readFile('src/pages/kilmarnock/roof-cleaning.astro');

  for (const loc of NEW_LOCATIONS) {
    console.log(`Creating ${loc.displayName}...`);
    const indexContent = replaceTemplate(indexTemplate, loc, null);
    await writeFile(`src/pages/${loc.path}/index.astro`, indexContent);

    for (const service of SERVICES) {
      let content = replaceTemplate(roofTemplate, loc, service);
      const serviceDisplay = SERVICE_DISPLAY[service] || service;
      content = content
        .replace(/Roof Cleaning Kilmarnock/g, `${serviceDisplay} ${loc.displayName}`)
        .replace(/roof-cleaning/g, service)
        .replace(/Roof Cleaning/g, serviceDisplay)
        .replace(/roof cleaning/g, serviceDisplay.toLowerCase())
        .replace(/roof-cleaning/g, service);
      content = content.replace(new RegExp(`"\\/kilmarnock\\/${service}"`, 'g'), `"/${loc.path}/${service}"`);
      content = content.replace(new RegExp(`\\/kilmarnock\\/${service}`, 'g'), `/${loc.path}/${service}`);
      await writeFile(`src/pages/${loc.path}/${service}.astro`, content);
    }
    console.log(`  ✓ ${loc.displayName} (index + ${SERVICES.length} services)`);
  }
  console.log('Done.');
}

main().catch(console.error);
