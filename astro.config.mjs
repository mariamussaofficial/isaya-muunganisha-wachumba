import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://YOUR-DOMAIN.xyz',
  integrations: [sitemap()],
  output: 'static',
  compressHTML: true,
});
