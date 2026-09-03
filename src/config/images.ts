/**
 * Shared image collection used across the site (home page, about, service pages).
 * Centralized to ensure consistency.
 */
export const siteImages = {
  /** Before/after showcase images */
  beforeAfter: {
    before: "/jsmith-softwashing-before.webp",
    after: "/jsmith-softwashing-after.webp",
  },
  /** Main result/portfolio image (used in DifferentiatorSection, BeforeAfter) */
  showcase: "/jsmith-softwashing-after.webp",
  /** Service images */
  services: {
    roofCleaning: "/services/roofcleaning.webp",
    pressureWashing: "/services/pressurewashing.webp",
    softWashing: "/jsmith-softwashing-after.webp",
    gutterCleaning: "/services/guttercleaning.webp",
    brickCleaning: "/services/brickcleaning.webp",
    conservatoryCleaning: "/services/conservatorycleaning.webp",
    drivewayCleaning: "/services/drivewaycleaning.webp",
    patioCleaning: "/services/patiocleaning.webp",
    upvcCleaning: "/services/upvccleaning.webp",
  },
  /** Company/brand */
  logo: "/jsmithcleaning.jpg",
  /** Hero/background - pressure washing as default for non-home pages */
  heroDefault: "/services/pressurewashing.webp",
} as const;
