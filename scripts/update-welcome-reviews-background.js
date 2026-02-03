import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SERVICE_HERO_IMAGES = {
  'roof-cleaning': '/services/roofcleaning.png',
  'pressure-washing': '/services/pressurewashing.png',
  'soft-washing': '/af1.png',
  'brick-cleaning': '/services/brickcleaning.png',
  'conservatory-cleaning': '/services/conservatorycleaning.png',
  'driveway-cleaning': '/services/drivewaycleaning.png',
  'gutter-cleaning': '/services/guttercleaning.jpg',
  'patio-cleaning': '/services/patiocleaning.jpg',
  'patio-driveway-cleaning': '/services/pressurewashing.png',
  'upvc-cleaning': '/services/upvccleaning.jpg',
};

const LOCATIONS = ['kilmarnock', 'ayr', 'irvine', 'ardrossan', 'saltcoats', 'stevenston', 'troon', 'prestwick', 'cumnock', 'largs'];

async function updateFile(filePath, imagePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  // Replace <WelcomeSection client:load /> with <WelcomeSection client:load backgroundImage="..." />
  content = content.replace(
    /<WelcomeSection client:load \/>/,
    `<WelcomeSection client:load backgroundImage="${imagePath}" />`
  );
  // Replace <ReviewsSection client:load /> with <ReviewsSection client:load backgroundImage="..." />
  content = content.replace(
    /<ReviewsSection client:load \/>/,
    `<ReviewsSection client:load backgroundImage="${imagePath}" />`
  );
  await fs.writeFile(filePath, content);
}

async function main() {
  // Main service pages
  for (const [service, imagePath] of Object.entries(SERVICE_HERO_IMAGES)) {
    const filePath = path.join(ROOT, 'src', 'pages', `${service}.astro`);
    try {
      await updateFile(filePath, imagePath);
      console.log(`Updated ${service}.astro -> ${imagePath}`);
    } catch (err) {
      if (err.code === 'ENOENT') console.log(`Skip ${service}.astro (not found)`);
      else throw err;
    }
  }

  // Location service pages
  for (const loc of LOCATIONS) {
    for (const [service, imagePath] of Object.entries(SERVICE_HERO_IMAGES)) {
      const filePath = path.join(ROOT, 'src', 'pages', loc, `${service}.astro`);
      try {
        await updateFile(filePath, imagePath);
        console.log(`Updated ${loc}/${service}.astro -> ${imagePath}`);
      } catch (err) {
        if (err.code === 'ENOENT') console.log(`Skip ${loc}/${service}.astro (not found)`);
        else throw err;
      }
    }
  }

  console.log('Done.');
}

main().catch(console.error);
