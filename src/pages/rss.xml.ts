import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const articles = (await getCollection('news', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .slice(0, 50);
  const siteUrl = site?.toString().replace(/\/$/, '') ?? 'https://isayamuunganishawachumba.xyz';
  const items = articles.map((article) => {
    const url = `${siteUrl}/news/${article.id}`;
    return `<item><title><![CDATA[${article.data.title}]]></title><link>${url}</link><guid>${url}</guid><description><![CDATA[${article.data.excerpt}]]></description><pubDate>${article.data.publishedAt.toUTCString()}</pubDate></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Isaya Muunganisha Wachumba</title><link>${siteUrl}</link><description>Habari, trends, social media, burudani na maisha.</description><language>sw-TZ</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
