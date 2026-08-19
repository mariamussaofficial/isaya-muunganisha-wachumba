# Isaya Muunganisha Wachumba

Production website for Isaya Muunganisha Wachumba, a Tanzania-focused digital media publication covering news, trends, social media, entertainment and life.

## Stack

- Astro + TypeScript
- Cloudflare Pages
- GitHub
- Static-first, SEO-first architecture
- Astro Content Collections for newsroom content

## Production

- Website: https://isayamuunganishawachumba.xyz
- Sitemap: https://isayamuunganishawachumba.xyz/sitemap-index.xml
- RSS: https://isayamuunganishawachumba.xyz/rss.xml
- AI-readable site information: https://isayamuunganishawachumba.xyz/llms.txt

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
```

## Cloudflare Pages

Build command: `npm run build`

Build output directory: `dist`

No build-time environment variables are required for the current static site.

## Content

News articles live in `src/content/news/` as Markdown/MDX-compatible content collection entries. Each article has structured metadata for title, excerpt, category, author, publication date, featured image, tags and draft state.

## SEO architecture

- Canonical URLs
- XML sitemap
- robots.txt
- RSS feed
- Organization and WebSite JSON-LD
- NewsArticle and BreadcrumbList JSON-LD
- Author pages
- Open Graph and X/Twitter metadata
- Mobile-friendly responsive templates
- Semantic article markup
- Search and 404 handling
- AI-readable `llms.txt`

## Editorial principles

Content should be original or properly attributed, fact-checked, clearly authored and reviewed before publication. AI may assist production workflows, but published news should receive editorial review.
