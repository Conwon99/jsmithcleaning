import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const LOCATIONS = ['kilmarnock', 'ayr', 'irvine', 'ardrossan', 'saltcoats', 'stevenston', 'troon', 'prestwick', 'cumnock', 'largs'];

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

async function main() {
  for (const loc of LOCATIONS) {
    for (const [service, imagePath] of Object.entries(SERVICE_HERO_IMAGES)) {
      const filePath = path.join(ROOT, 'src', 'pages', loc, `${service}.astro`);
      try {
        let content = await fs.readFile(filePath, 'utf-8');
        content = content.replace(
          /encodeURI\("\/[^"]+\.(png|jpg|jpeg)"\)/,
          `encodeURI("${imagePath}")`
        );
        await fs.writeFile(filePath, content);
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
