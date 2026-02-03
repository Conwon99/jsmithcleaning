import os
import re
from pathlib import Path

# Find all service page files
pages_dir = Path("src/pages")
service_files = []

for file_path in pages_dir.rglob("*.astro"):
    # Skip index pages and Home.tsx
    if file_path.name in ["index.astro", "Home.tsx"]:
        continue
    
    # Only process service pages
    if any(service in file_path.name for service in [
        "soft-washing", "roof-cleaning", "pressure-washing", 
        "gutter-cleaning", "upvc-cleaning", "patio-cleaning",
        "driveway-cleaning", "conservatory-cleaning", "brick-cleaning",
        "patio-driveway-cleaning"
    ]):
        service_files.append(file_path)

print(f"Found {len(service_files)} service files to process")

for file_path in service_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Remove import statements
        content = re.sub(r"import \{ BeforeAfterSection \} from '@/sections/BeforeAfterSection';\s*\n", "", content)
        content = re.sub(r"import \{ RoofCleaningBeforeAfter \} from '@/sections/BeforeAfterSection/RoofCleaningBeforeAfter';\s*\n", "", content)
        
        # Remove BeforeAfterSection component usage (multiline)
        content = re.sub(r"<!-- .*? Before & After.*?-->\s*<BeforeAfterSection[^>]*>.*?</BeforeAfterSection>\s*", "", content, flags=re.DOTALL)
        content = re.sub(r"<!-- .*? Before & After.*?-->\s*<BeforeAfterSection[^>]*/>\s*", "", content, flags=re.DOTALL)
        
        # Remove RoofCleaningBeforeAfter component usage
        content = re.sub(r"<!-- .*? Before & After.*?-->\s*<RoofCleaningBeforeAfter[^>]*/>\s*", "", content, flags=re.DOTALL)
        
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path.name}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print("Done!")
