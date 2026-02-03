import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

try {
  // Copy sitemap-0.xml to sitemap.xml
  copyFileSync(
    join(distDir, 'sitemap-0.xml'),
    join(distDir, 'sitemap.xml')
  );
  console.log('✓ Created sitemap.xml from sitemap-0.xml');
} catch (error) {
  console.error('Error copying sitemap:', error.message);
  process.exit(1);
}

