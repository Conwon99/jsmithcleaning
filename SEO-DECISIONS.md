# SEO decisions

Record of deliberate deviations from the "Local Service Website SEO Master Guide"
audit, so they aren't "corrected" against the guide by mistake later.

## URL structure kept as-is (not migrated to `/locations/[town]/[category]`)

The guide's example URL pattern for location × service matrix pages is
`/locations/[town]/[category]`. This site uses `/[town]/[service-slug]`
instead (e.g. `/ayr/roof-cleaning`), which was already live and indexed.

This was a deliberate choice, not an oversight:

- The existing URLs already satisfy every URL rule that actually matters:
  lowercase, hyphenated, one click deep, keyword-rich, canonical HTTPS.
- The guide's `/locations/` prefix is an illustrative template convention,
  not a ranking factor — Google doesn't reward one shallow path pattern
  over another equally shallow one.
- Migrating 100+ live, indexed URLs would require generating and testing
  100+ redirects and touching the sitemap, every internal link, and every
  schema `url`/`item` field at once, for zero functional SEO gain and real
  risk of temporary ranking volatility.
- This site's taxonomy (10 granular service slugs × 10 towns) is more
  specific than the guide's coarser example (4 categories), which better
  matches how people actually search ("gutter cleaning ayr" vs. "exterior
  cleaning ayr").

The guide's actual underlying concerns — orphaned pages, missing hub links,
no breadcrumbs, no nearby-town/related-service cross-linking — are being
fixed without touching any URLs (see the phased SEO plan).

## Review count: 17

`TOTAL_REVIEW_COUNT` is set to **17** across schema (`BaseLayout.astro`) and
the on-page `GoogleReviewBadge`. This was previously inconsistent: schema
said 24, the badge said 17, and only 4 written testimonials were shown.
17 was chosen by the site owner as the correct working number, but has not
been independently verified against the actual Google Business Profile
review count. Confirm the real number against GBP and update both places
(and any future `src/data/business.ts` constant) if it's ever meaningfully
wrong — an inaccurate `aggregateRating.reviewCount` risks a Google manual
action for misleading structured data.

## Leftover placeholders removed (found during Phase 1)

This site was originally cloned from an Alba Exteriors template build.
Beyond the known SEO-guide gaps, Phase 1 also found and removed:

- The footer's Facebook icon and the schema `sameAs` array both linked to
  Alba Exteriors' own Facebook page — sending visitors to a different
  business. Removed pending the real J Smith Exterior Cleaning Facebook
  URL.
- The schema `sameAs` array also had an unfilled `YOUR_GOOGLE_BUSINESS_ID`
  placeholder. Removed pending the real Google Business Profile URL/CID.
- The footer "Service Area" map embed used a fabricated `pb=` string with
  literal zero coordinates (not a real place). Replaced with a working
  generic embed for "Ayrshire, Scotland" — a precise pin would need the
  business's real address, which isn't recorded anywhere in the codebase
  (schema only ever uses the broad `addressLocality: "Ayrshire"`).

**Still needed from the business owner**: real Facebook page URL, real
Google Business Profile URL/CID, and (optionally, for a precise map pin) a
real street address.
