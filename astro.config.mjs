import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
const env = loadEnv("", process.cwd(), ["PUBLIC", "STORYBLOK"]);

export default defineConfig({
  site: "https://jvjdoprava.cz",
  integrations: [
    svelte(),
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "EU",
        cache: {
          clear: "auto",
          type: "memory",
        },
        rateLimit: 250,
      },
      enableFallbackComponent: true,
      customFallbackComponent: "storyblok/Fallback",
      components: {
        page: "storyblok/Page",
        // auto-add-component
        // do not remove the previous line so new components can be automatically added there
      },
    }),
    sitemap({
      entryLimit: 10000,
      filter: (page) => !page.includes("_partials"),
    }),
  ],
  vite: {},
  output: env.PUBLIC_PRODUCTION ? "static" : "server",
  adapter: env.PUBLIC_PRODUCTION ? undefined : cloudflare(),
});
