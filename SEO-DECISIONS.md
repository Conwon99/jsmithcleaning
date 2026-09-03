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
  business. **Resolved**: now points to the real page,
  `https://www.facebook.com/JSmithExteriorCleaning/`.
- The schema `sameAs` array also had an unfilled `YOUR_GOOGLE_BUSINESS_ID`
  placeholder. **Resolved**: now uses the real Google Knowledge Graph
  entity, `https://www.google.com/search?kgmid=%2Fg%2F11yzw4g5jn` (also
  linked from the footer's Google icon).
- The footer "Service Area" map embed used a fabricated `pb=` string with
  literal zero coordinates (not a real place). Replaced with a working
  generic embed for "Ayrshire, Scotland" — a precise pin would need the
  business's real address, which isn't recorded anywhere in the codebase
  (schema only ever uses the broad `addressLocality: "Ayrshire"`).

**Still needed from the business owner**: a real street address, if a
precise map pin (rather than a general "Ayrshire, Scotland" embed) is
wanted.

## `patio-driveway-cleaning` removed entirely (owner decision, post-Phase 6)

Phase 3's audit had flagged this as needing a content decision (genuine
service vs. overlap with `patio-cleaning` + `driveway-cleaning`), and it
was initially kept as its own service with distinct copy. The business
owner later decided to drop it and offer only the two separate services.

Removed: the `patio-driveway-cleaning` entry from `src/data/services.ts`
and `src/data/faqs.ts`, its listing in `ServicesList.tsx`, its slug from
`astro.config.mjs`'s sitemap serialize list, and all 11 page files (the
root `/patio-driveway-cleaning` page plus one per town). Since these URLs
were live and indexed, added 301 redirects in `netlify.toml` from every
`/patio-driveway-cleaning` and `/[town]/patio-driveway-cleaning` URL to
the equivalent `/patio-cleaning` page, rather than letting them 404 and
losing their SEO value outright.

## `/projects` case-study page - blocked (Phase 4)

The guide calls for a projects/case-study page type (real jobs: before/after
photos + a description per project). This has **not** been built. Writing
genuine project write-ups (specific addresses, dates, outcomes) requires
real job photos and details from the business owner - inventing plausible-
sounding customer projects would be fabricated content, which risks more
harm than a missing page. Blocked pending real material from the owner.
`/reviews` (real testimonials, already collected) was built instead, since
that content already exists and doesn't have this problem.

## Unused images left in place (found during Phase 5)

While auditing images for WebP conversion, 31 files under `static/` (and
a duplicate `static/imgs/` folder) turned out to be unreferenced anywhere
in the code - leftover Alba Exteriors template assets (`alba-logo.png`,
`logo_bg_alba_exteriors_paisley.png`, etc.) and generic AI-generated
placeholder images. These were **left in place, not deleted**: some
(`before-roof.jpeg`, `after-roof.jpeg`, `about.jpg`) look like they could
be genuine real photos worth reusing for the still-unbuilt `/projects`
page, and deleting a file that turns out to matter is harder to undo than
leaving one that doesn't. Only images actually converted to WebP were
renamed/deleted (see the file list in the Phase 5 commit) - none of these
31 unreferenced files were touched.

## Broken footer links found, not fixed (Phase 6)

`FooterBottom.tsx` links to `/privacy-policy` and `/terms-conditions`, but
neither page exists in `src/pages` - both are dead 404 links, on every
page of the site. This is outside the SEO Master Guide checklist this
project worked through, so it wasn't fixed here. Not fixing it by writing
placeholder legal text either: a Privacy Policy and Terms & Conditions are
real legal documents (particularly relevant given the site's contact form
collects personal data) and need real content from the business owner or
a solicitor, not fabricated boilerplate. Flagging for the owner to action
separately.
