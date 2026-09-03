export interface Location {
  slug: string;
  name: string;
  /** Nearby places mentioned alongside this town in copy (not necessarily their own pages) */
  nearby: string[];
  /** Slugs of other town pages (from this same list) to cross-link to as "nearby areas" */
  nearbyTownSlugs: string[];
}

export const locations: Location[] = [
  { slug: "ardrossan", name: "Ardrossan", nearby: ["Saltcoats", "Stevenston", "West Kilbride"], nearbyTownSlugs: ["saltcoats", "stevenston", "irvine"] },
  { slug: "ayr", name: "Ayr", nearby: ["Alloway", "Prestwick", "Troon"], nearbyTownSlugs: ["prestwick", "troon", "cumnock"] },
  { slug: "cumnock", name: "Cumnock", nearby: ["Auchinleck", "Ochiltree"], nearbyTownSlugs: ["ayr", "kilmarnock"] },
  { slug: "irvine", name: "Irvine", nearby: ["Kilwinning", "Stevenston", "Saltcoats"], nearbyTownSlugs: ["saltcoats", "stevenston", "ardrossan"] },
  { slug: "kilmarnock", name: "Kilmarnock", nearby: ["Dean", "Onthank", "Shortlees"], nearbyTownSlugs: ["cumnock", "irvine", "ayr"] },
  { slug: "largs", name: "Largs", nearby: ["Fairlie", "Skelmorlie", "Wemyss Bay"], nearbyTownSlugs: ["ardrossan", "saltcoats"] },
  { slug: "prestwick", name: "Prestwick", nearby: ["Ayr", "Monkton"], nearbyTownSlugs: ["ayr", "troon"] },
  { slug: "saltcoats", name: "Saltcoats", nearby: ["Ardrossan", "Stevenston", "Irvine"], nearbyTownSlugs: ["ardrossan", "stevenston", "irvine"] },
  { slug: "stevenston", name: "Stevenston", nearby: ["Saltcoats", "Ardrossan", "Irvine"], nearbyTownSlugs: ["saltcoats", "ardrossan", "irvine"] },
  { slug: "troon", name: "Troon", nearby: ["Barassie", "Loans", "Prestwick"], nearbyTownSlugs: ["prestwick", "ayr"] },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/** "Ayr, Alloway, Prestwick, and Troon" */
export function formatServiceArea(location: Location): string {
  const parts = [location.name, ...location.nearby];
  if (parts.length <= 2) return parts.join(" and ");
  return `${parts.slice(0, -1).join(", ")}, and ${parts[parts.length - 1]}`;
}

/** Location objects for this town's nearby-town cross-links */
export function getNearbyLocations(slug: string): Location[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  return location.nearbyTownSlugs
    .map((s) => getLocationBySlug(s))
    .filter((l): l is Location => Boolean(l));
}
