/**
 * Shared image collection used across the site (home page, about, service pages).
 * Centralized to ensure consistency.
 */
export const siteImages = {
  /** Before/after showcase images */
  beforeAfter: {
    before: "/bef1.png",
    after: "/af1.png",
  },
  /** Main result/portfolio image (used in DifferentiatorSection, BeforeAfter) */
  showcase: "/af1.png",
  /** Service images */
  services: {
    roofCleaning: "/services/roofcleaning.png",
    pressureWashing: "/services/pressurewashing.png",
    softWashing: "/af1.png",
    gutterCleaning: "/services/guttercleaning.jpg",
    brickCleaning: "/services/brickcleaning.png",
    conservatoryCleaning: "/services/conservatorycleaning.png",
    drivewayCleaning: "/services/drivewaycleaning.png",
    patioCleaning: "/services/patiocleaning.jpg",
    upvcCleaning: "/services/upvccleaning.jpg",
  },
  /** Company/brand */
  logo: "/jsmithcleaning.jpg",
  /** Hero/background - pressure washing as default for non-home pages */
  heroDefault: "/services/pressurewashing.png",
} as const;
