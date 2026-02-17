// astro.config.mjs
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-design-agency-website.com',
  base: '/',
  output: 'static',
  integrations: [],
  markdown: {
    syntaxHighlight: 'prism',
  },
  // Other custom configurations
});