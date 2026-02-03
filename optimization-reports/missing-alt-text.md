# Missing Alt Text Audit

## Images Missing Alt Attributes

This audit identifies images in the codebase that are missing descriptive `alt` attributes, which are essential for accessibility and SEO.

### Images with Empty or Missing Alt Text

1. **src/sections/SteamCleaningSection/index.tsx** (Line 14-18)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/486724052_122244670646213503_6894785614203771315_n.jpg`
   - Current: `alt=""`
   - Recommendation: Add descriptive alt text like "Steam cleaning service demonstration"

2. **src/sections/SteamCleaningSection/index.tsx** (Line 19-23)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/image9.jpg`
   - Current: `alt=""`
   - Recommendation: Add descriptive alt text like "Steam cleaning equipment in use"

3. **src/sections/VideoSection/index.tsx** (Line 15-19)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/486724052_122244670646213503_6894785614203771315_n.jpg`
   - Current: `alt=""`
   - Recommendation: Add descriptive alt text like "Video thumbnail showing cleaning service"

4. **src/sections/VideoSection/index.tsx** (Line 20-24)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/image9.jpg`
   - Current: `alt=""`
   - Recommendation: Add descriptive alt text like "Cleaning service video preview"

5. **src/sections/AdditionalServicesSection/index.tsx** (Line 47-48)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
   - Current: No alt attribute found
   - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

6. **src/sections/AdditionalServicesSection/index.tsx** (Line 74-75)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
   - Current: No alt attribute found
   - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

7. **src/sections/AdditionalServicesSection/index.tsx** (Line 101-102)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
   - Current: No alt attribute found
   - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

8. **src/sections/AdditionalServicesSection/index.tsx** (Line 128-129)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
   - Current: No alt attribute found
   - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

9. **src/sections/AirScrapingSection/index.tsx** (Line 47-48)
   - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
   - Current: No alt attribute found
   - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

10. **src/sections/AirScrapingSection/index.tsx** (Line 73-74)
    - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
    - Current: No alt attribute found
    - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

11. **src/sections/AirScrapingSection/index.tsx** (Line 99-100)
    - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/checked.png`
    - Current: No alt attribute found
    - Recommendation: Add `alt="Checkmark icon"` or use decorative image with `alt=""`

12. **src/sections/Header/components/DesktopMenu.tsx** (Line 7-8)
    - Image: `https://c.animaapp.com/mjbg2zzdHx1neY/assets/icon-1.svg`
    - Current: No alt attribute found
    - Recommendation: Add descriptive alt text or `alt=""` if decorative

### Background Images (CSS)

Note: Background images set via CSS (e.g., `background-image` in style attributes) cannot have alt text. Consider converting important background images to `<img>` tags where appropriate for SEO.

### Images with Proper Alt Text

The following images already have proper alt attributes:
- **src/components/Logo.tsx**: `alt="Alba Exteriors Logo"` ✓
- **src/sections/Footer/components/FooterColumn.tsx**: Logo has alt text ✓
- **src/pages/roof-cleaning.astro**: Logo images have alt text ✓
- **src/sections/ServiceIntro/index.tsx**: Logo has alt text ✓

## Recommendations

1. Add descriptive alt text to all images that convey information
2. Use empty `alt=""` for purely decorative images (like checkmark icons)
3. Consider converting important background images to `<img>` tags for better SEO
4. Ensure all service images have descriptive alt text including service type and location where relevant



