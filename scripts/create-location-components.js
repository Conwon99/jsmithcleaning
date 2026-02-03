import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locations = [
  {
    name: 'EastKilbride',
    displayName: 'East Kilbride',
    path: 'east-kilbride',
    description: 'in East Kilbride and surrounding areas'
  },
  {
    name: 'Hamilton',
    displayName: 'Hamilton',
    path: 'hamilton',
    description: 'in Hamilton and surrounding areas'
  },
  {
    name: 'NewtonMearns',
    displayName: 'Newton Mearns',
    path: 'newton-mearns',
    description: 'in Newton Mearns and surrounding areas'
  },
  {
    name: 'Bearsden',
    displayName: 'Bearsden',
    path: 'bearsden',
    description: 'in Bearsden and surrounding areas'
  },
  {
    name: 'Livingston',
    displayName: 'Livingston',
    path: 'livingston',
    description: 'in Livingston and surrounding areas'
  }
];

// Read template files
async function readTemplate(filePath) {
  return await fs.readFile(path.join(__dirname, '..', filePath), 'utf-8');
}

// Create HeroContent component
async function createHeroContent(location) {
  const template = await readTemplate('src/sections/Hero/components/PaisleyHeroContent.tsx');
  return template
    .replace(/PaisleyHeroContent/g, `${location.name}HeroContent`)
    .replace(/Paisley/g, location.displayName)
    .replace(/in Paisley and surrounding areas/g, location.description);
}

// Create Hero component
async function createHero(location) {
  const template = await readTemplate('src/sections/Hero/components/PaisleyHero.tsx');
  return template
    .replace(/PaisleyHero/g, `${location.name}Hero`)
    .replace(/PaisleyHeroContent/g, `${location.name}HeroContent`);
}

// Create ServiceIntro component
async function createServiceIntro(location) {
  const template = await readTemplate('src/sections/ServiceIntro/components/PaisleyServiceIntro.tsx');
  return template
    .replace(/PaisleyServiceIntro/g, `${location.name}ServiceIntro`)
    .replace(/in Paisley/g, `in ${location.displayName}`)
    .replace(/Paisley\?/g, `${location.displayName}?`);
}

// Create ServicesGrid component
async function createServicesGrid(location) {
  const template = await readTemplate('src/sections/ServicesSection/components/PaisleyServicesGrid.tsx');
  return template
    .replace(/PaisleyServicesGrid/g, `${location.name}ServicesGrid`)
    .replace(/\/paisley\//g, `/${location.path}/`);
}

// Create ServicesSection component
async function createServicesSection(location) {
  const template = await readTemplate('src/sections/ServicesSection/components/PaisleyServicesSection.tsx');
  return template
    .replace(/PaisleyServicesSection/g, `${location.name}ServicesSection`)
    .replace(/PaisleyServicesGrid/g, `${location.name}ServicesGrid`)
    .replace(/in Paisley/g, `in ${location.displayName}`)
    .replace(/Paisley\./g, `${location.displayName}.`);
}

// Create location index page
async function createLocationPage(location) {
  const template = await readTemplate('src/pages/paisley/index.astro');
  return template
    .replace(/PaisleyHero/g, `${location.name}Hero`)
    .replace(/PaisleyServiceIntro/g, `${location.name}ServiceIntro`)
    .replace(/PaisleyServicesSection/g, `${location.name}ServicesSection`)
    .replace(/\/paisley/g, `/${location.path}`)
    .replace(/Paisley/g, location.displayName)
    .replace(/in Paisley/g, `in ${location.displayName}`);
}

async function main() {
  for (const location of locations) {
    console.log(`Creating components for ${location.displayName}...`);
    
    // Create HeroContent
    const heroContent = await createHeroContent(location);
    await fs.writeFile(
      path.join(__dirname, '..', `src/sections/Hero/components/${location.name}HeroContent.tsx`),
      heroContent
    );
    
    // Create Hero
    const hero = await createHero(location);
    await fs.writeFile(
      path.join(__dirname, '..', `src/sections/Hero/components/${location.name}Hero.tsx`),
      hero
    );
    
    // Create ServiceIntro
    const serviceIntro = await createServiceIntro(location);
    await fs.writeFile(
      path.join(__dirname, '..', `src/sections/ServiceIntro/components/${location.name}ServiceIntro.tsx`),
      serviceIntro
    );
    
    // Create ServicesGrid
    const servicesGrid = await createServicesGrid(location);
    await fs.writeFile(
      path.join(__dirname, '..', `src/sections/ServicesSection/components/${location.name}ServicesGrid.tsx`),
      servicesGrid
    );
    
    // Create ServicesSection
    const servicesSection = await createServicesSection(location);
    await fs.writeFile(
      path.join(__dirname, '..', `src/sections/ServicesSection/components/${location.name}ServicesSection.tsx`),
      servicesSection
    );
    
    // Create location index page
    const locationPage = await createLocationPage(location);
    await fs.mkdir(path.join(__dirname, '..', `src/pages/${location.path}`), { recursive: true });
    await fs.writeFile(
      path.join(__dirname, '..', `src/pages/${location.path}/index.astro`),
      locationPage
    );
    
    console.log(`✓ Created ${location.displayName} components and page`);
  }
  
  console.log('All location components created!');
}

main().catch(console.error);
