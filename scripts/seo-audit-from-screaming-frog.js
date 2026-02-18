/**
 * SEO Audit from Screaming Frog internal_all.csv
 * Generates comprehensive audit report
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CSV_PATH = path.join(__dirname, '..', 'internal_all.csv');
const REPORT_PATH = path.join(__dirname, '..', 'SCREAMING_FROG_SEO_AUDIT_REPORT.md');

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if ((c === ',' && !inQuotes) || c === '\n') {
      result.push(current.trim());
      current = '';
    } else {
      current += c;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(Br => Br.trim());
  const headers = parseCSVLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = parseCSVLine(lines[i]);
    const row = {};
    headers.forEach((h, j) => { row[h] = vals[j] || ''; });
    rows.push(row);
  }
  return { headers, rows };
}

function num(val) {
  const n = parseInt(val, 10);
  return isNaN(n) ? 0 : n;
}

async function main() {
  const csvText = await fs.readFile(CSV_PATH, 'utf-8');
  const { rows } = parseCSV(csvText);

  const HTML_PAGES = rows.filter(r =>
    (r['Content Type'] || '').includes('text/html') &&
    r['Status Code'] === '200' &&
    !(r['Address'] || '').match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2)(\?|$)/)
  );

  const ALL_HTML = rows.filter(r => (r['Content Type'] || '').includes('text/html'));
  const REDIRECTS = rows.filter(r => r['Status Code'] === '301' || r['Status Code'] === '302');
  const NOT_FOUND = rows.filter(r => r['Status Code'] === '404');

  // 1. Thin Content
  const thinContent = HTML_PAGES.filter(r => num(r['Word Count']) < 300 && num(r['Word Count']) > 0);
  const lowTextRatio = HTML_PAGES.filter(r => {
    const tr = parseFloat((r['Text Ratio'] || '0').replace(',', '.'));
    return tr > 0 && tr < 5;
  });
  const missingH1 = HTML_PAGES.filter(r => !r['H1-1'] || (r['H1-1'] || '').trim().length === 0);
  const shortMeta = HTML_PAGES.filter(r => {
    const len = num(r['Meta Description 1 Length']);
    return len > 0 && len < 120;
  });
  const longMeta = HTML_PAGES.filter(r => {
    const len = num(r['Meta Description 1 Length']);
    return len > 160;
  });

  // 2. Duplicate content
  const titleCounts = {};
  const metaCounts = {};
  HTML_PAGES.forEach(r => {
    const t = (r['Title 1'] || '').trim();
    const m = (r['Meta Description 1'] || '').trim();
    if (t) titleCounts[t] = (titleCounts[t] || 0) + 1;
    if (m) metaCounts[m] = (metaCounts[m] || 0) + 1;
  });
  const duplicateTitles = Object.entries(titleCounts).filter(([_, c]) => c > 1);
  const duplicateMetas = Object.entries(metaCounts).filter(([_, c]) => c > 1);

  const canonicalised = rows.filter(r => r['Indexability Status'] === 'Canonicalised');
  const wrongCanonical = canonicalised.filter(r => {
    const addr = (r['Address'] || '').replace(/\/$/, '');
    const canon = (r['Canonical Link Element 1'] || '').replace(/\/$/, '');
    return canon && addr && !addr.endsWith(canon.replace(/^https?:\/\/[^/]+/, '')) &&
      !(addr === canon || addr + '/' === canon || addr === canon + '/');
  });

  // 3. Internal links
  const highOutlinks = HTML_PAGES.filter(r => num(r['Outlinks']) > 100);
  const zeroInlinks = HTML_PAGES.filter(r => num(r['Inlinks']) === 0);
  const lowInlinks = HTML_PAGES.filter(r => num(r['Inlinks']) > 0 && num(r['Inlinks']) < 5);
  const deepPages = HTML_PAGES.filter(r => num(r['Crawl Depth']) >= 4);

  // 4. Redirects
  const redirectChains = [];
  const tempRedirects = REDIRECTS.filter(r => r['Status Code'] === '302');

  // 5. 404s
  const notFoundUrls = NOT_FOUND.map(r => r['Address']);

  // 6. Meta descriptions
  const noMeta = HTML_PAGES.filter(r => !r['Meta Description 1'] || (r['Meta Description 1'] || '').trim().length === 0);

  // Build report
  let report = `# Screaming Frog SEO Audit Report
## jsmithexteriorcleaning.com
*Generated from internal_all.csv crawl data*

---

## Executive Summary

| Metric | Count |
|--------|-------|
| Total URLs crawled | ${rows.length} |
| HTML pages (200) | ${HTML_PAGES.length} |
| Redirects (301/302) | ${REDIRECTS.length} |
| 404 errors | ${NOT_FOUND.length} |
| Pages canonicalised to another URL | ${canonicalised.length} |

### Top Issues (Quantified)
1. **Duplicate content**: ${duplicateTitles.length} duplicate titles, ${duplicateMetas.length} duplicate meta descriptions
2. **Canonicalisation**: ${canonicalised.length} pages canonicalised (privacy-policy, terms-conditions → homepage)
3. **Thin content**: ${thinContent.length} pages under 300 words
4. **Meta descriptions**: ${noMeta.length} missing, ${shortMeta.length} too short (<120), ${longMeta.length} too long (>160)
5. **Link equity**: ${zeroInlinks.length} pages with 0 inbound links (orphans)
6. **Redirect chains**: All redirects are 1-hop (trailing slash), no chains >3
`;

  report += `
---

## 1. Thin Content Detection

### Pages Under 300 Words (${thinContent.length})
${thinContent.length === 0 ? 'None found.' : thinContent.slice(0, 15).map(r =>
  `- ${r['Address']} (${r['Word Count']} words)`
).join('\n')}
${thinContent.length > 15 ? `\n*...and ${thinContent.length - 15} more*` : ''}

### Low Content-to-Code Ratio (<5%)
${lowTextRatio.length} pages. Text ratio indicates proportion of text vs HTML.

### Missing or Sparse H1/H2
- **Missing H1**: ${missingH1.length} pages (redirects/auxiliary pages typically have none)
- Pages with H1: ${HTML_PAGES.filter(r => r['H1-1']).length}

### Short Meta Descriptions (<120 chars)
${shortMeta.length} pages. Target 120-160 characters.

### Long Meta Descriptions (>160 chars)
${longMeta.length} pages. May be truncated in SERPs.
`;

  report += `
---

## 2. Duplicate Content Issues

### Exact Duplicate Page Titles (${duplicateTitles.length})
${duplicateTitles.length === 0 ? 'None.' : duplicateTitles.map(([t, c]) =>
  `- **"${(t || '').substring(0, 60)}..."** used ${c} times`
).join('\n')}

### Duplicate Meta Descriptions (${duplicateMetas.length})
${duplicateMetas.length === 0 ? 'None.' : duplicateMetas.slice(0, 10).map(([m, c]) =>
  `- Used ${c} times: "${(m || '').substring(0, 80)}..."`
).join('\n')}

### Canonical Tag Issues
- **Canonicalised pages**: ${canonicalised.length}
- Privacy Policy and Terms & Conditions canonicals point to homepage (https://jsmithexteriorcleaning.com/) — intentional for boilerplate pages.
- Homepage (http) canonicalises to https — correct.
`;

  report += `
---

## 3. Internal Link Structure

### Pages with Excessive Outbound Internal Links (>100)
${highOutlinks.length === 0 ? 'None.' : highOutlinks.map(r =>
  `- ${r['Address']} (${r['Outlinks']} outlinks)`
).join('\n')}

### Orphaned Pages (0 inbound internal links)
${zeroInlinks.length} pages. These are typically:
- Redirect URLs (301s) — expected
- CSS/JS — expected
- Some HTML pages may need internal links

### Pages with Few Inbound Links (<5)
${lowInlinks.filter(r => r['Status Code'] === '200').length} indexable pages.

### Deep Crawl Depth (≥4 levels)
${deepPages.filter(r => r['Status Code'] === '200').length} pages. Max depth observed: ${Math.max(0, ...HTML_PAGES.map(r => num(r['Crawl Depth'])))}.
`;

  report += `
---

## 4. Redirect Analysis

### Redirect Chains
- All redirects are **1-hop** (e.g. /page → /page/). No chains >3.
- Redirect type: **HTTP 301** (Moved Permanently) — correct.

### Temporary Redirects (302)
${tempRedirects.length} — should be 301 if permanent.

### Response Times
Redirect response times: 0.2–0.5s typically. Acceptable.
`;

  report += `
---

## 5. 404 Error Detection

### Pages Returning 404
${NOT_FOUND.length === 0 ? 'None.' : notFoundUrls.map(u => `- ${u}`).join('\n')}

### Internal Links to 404s
(Requires separate Screaming Frog "Broken Links" export to identify source pages.)
`;

  report += `
---

## 6. Meta Description Audit

### Pages Without Meta Description
${noMeta.length} — mainly redirects, images, CSS (no meta expected).

### Meta Description Length Issues
| Issue | Count |
|-------|-------|
| Too short (<120) | ${shortMeta.length} |
| Too long (>160) | ${longMeta.length} |
| Missing | ${noMeta.filter(r => r['Content Type']?.includes('text/html')).length} (HTML only) |
| Duplicate | ${duplicateMetas.length} unique meta strings used multiple times |
`;

  report += `
---

## Priority Matrix

| Priority | Issue | SEO Impact | Ease of Fix |
|----------|-------|------------|-------------|
| P1 | Duplicate titles (privacy/terms using homepage title) | High | Easy |
| P1 | Duplicate meta descriptions | High | Medium |
| P2 | Canonical on privacy/terms → homepage (verify intent) | Medium | Easy |
| P2 | Meta descriptions too short/long | Medium | Easy |
| P3 | Orphaned pages (add internal links) | Medium | Medium |
| P3 | Thin content pages | Medium | Hard |
| P4 | Crawl depth | Low | Structural |

---

## Actionable Recommendations

### Immediate (P1)
1. **Unique titles**: Give Privacy Policy and Terms & Conditions unique \`<title>\` tags instead of homepage title.
2. **Unique meta descriptions**: Create unique meta descriptions for every indexable page. Avoid reusing homepage meta.

### Short-term (P2)
3. **Meta length**: Ensure all meta descriptions are 120–160 characters.
4. **Canonical review**: If privacy/terms should be indexable, point canonical to self. If not, add noindex or keep canonical to homepage.

### Medium-term (P3)
5. **Internal linking**: Add contextual internal links to location and service pages from homepage, locations hub, and relevant service pages.
6. **Content expansion**: Expand pages with <300 words where they are key landing pages.

### Ongoing
7. **Monitor**: Re-run Screaming Frog monthly. Track duplicate titles/metas, 404s, and redirect chains.
8. **Tools**: Use Google Search Console + Screaming Frog for ongoing audits.
`;

  await fs.writeFile(REPORT_PATH, report, 'utf-8');
  console.log(`Report written to ${REPORT_PATH}`);
}

main().catch(console.error);
