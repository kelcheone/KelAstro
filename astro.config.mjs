import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
// add titles to code blocks;
import partytown from "@astrojs/partytown";
import codeblocks from "@thewebforge/astro-code-blocks";
import icon from "astro-icon";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    codeblocks({
      copyButtonTooltip: "Copied to clipboard",
      copyButtonTitle: "Copy code",
    }),
    mdx({
      shikiConfig: {
        theme: "dracula",
        langs: [],
        wrap: true,
        transformers: [],
      },
    }),
    sitemap(),
    tailwind(),
    preact(),
    partytown(),
    icon(),
    sentry(),
    spotlightjs(),
    playformCompress(),
  ],
  site: "https://www.kelche.co",
  base: "/",
  trailingSlash: "always",
});
