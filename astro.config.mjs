import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://zahrahakimi.github.io',
  base: '/zahrahakimi.github.io',
});


