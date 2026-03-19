// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react(), keystatic()],
  output: 'server',
  adapter: vercel(),
});
