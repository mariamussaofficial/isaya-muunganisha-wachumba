import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://isayamuunganishawachumba.xyz',
  integrations: [sitemap()],
  output: 'static',
  compressHTML: true,
});
