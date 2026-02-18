const fs = require('fs');
const path = require('path');

// Find all service page files
function findServiceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findServiceFiles(filePath, fileList);
    } else if (file.endsWith('.astro')) {
      // Skip index pages
      if (file === 'index.astro' || file === 'Home.tsx') {
        return;
      }
      
      // Only process service pages
      const serviceNames = [
        'soft-washing', 'roof-cleaning', 'pressure-washing',
        'gutter-cleaning', 'upvc-cleaning', 'patio-cleaning',
        'driveway-cleaning', 'conservatory-cleaning', 'brick-cleaning',
        'patio-driveway-cleaning'
      ];
      
      if (serviceNames.some(name => file.includes(name))) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

const pagesDir = path.join(__dirname, '../src/pages');
const serviceFiles = findServiceFiles(pagesDir);

console.log(`Found ${serviceFiles.length} service files to process`);

let updatedCount = 0;

serviceFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Remove import statements
    content = content.replace(/import \{ BeforeAfterSection \} from '@/sections\/BeforeAfterSection';\s*\n/g, '');
    content = content.replace(/import \{ RoofCleaningBeforeAfter \} from '@/sections\/BeforeAfterSection\/RoofCleaningBeforeAfter';\s*\n/g, '');
    
    // Remove BeforeAfterSection component usage (multiline)
    content = content.replace(/<!-- [^\r\n]*Before & After[^\r\n]*-->\s*<BeforeAfterSection[^>]*>.*?<\/BeforeAfterSection>\s*/gs, '');
    content = content.replace(/<!-- [^\r\n]*Before & After[^\r\n]*-->\s*<BeforeAfterSection[^>]*\/>\s*/gs, '');
    
    // Remove RoofCleaningBeforeAfter component usage
    content = content.replace(/<!-- [^\r\n]*Before & After[^\r\n]*-->\s*<RoofCleaningBeforeAfter[^>]*\/>\s*/gs, '');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
      console.log(`Updated: ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nDone! Updated ${updatedCount} files.`);
