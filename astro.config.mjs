import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://github.com/zahrahkm.github.io',
  base: '/zahrahakimi.github.io',
});


