import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://zahrahakimi.com/',
  base: '/zahrahakimi.github.io',
});


