import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type UserConfig } from "vite";
import currentConfig from "./vite.config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const publishedModules = path.join(rootDir, "published-vibe", "node_modules");
const publishedRequire = createRequire(path.join(publishedModules, "package.json"));
const baseConfig = currentConfig as UserConfig;

const publishedSpecifiers = [
  // On Vibe 3 the style package is published as `monday-ui-style`, not `@vibe/style`.
  "monday-ui-style/dist/index.min.css",
  "@vibe/base",
  "@vibe/button",
  "@vibe/clickable",
  "@vibe/dialog",
  "@vibe/hooks",
  "@vibe/icon",
  "@vibe/icon-button",
  "@vibe/icons",
  "@vibe/layer",
  "@vibe/layout",
  "@vibe/loader",
  "@vibe/shared",
  "monday-ui-style",
  "@vibe/tooltip",
  "@vibe/typography"
];

const baseAliases = Array.isArray(baseConfig.resolve?.alias) ? baseConfig.resolve.alias : [];
const sharedAliases = baseAliases.filter(alias => {
  if (!("find" in alias) || typeof alias.find !== "string") return true;
  return (
    !alias.find.startsWith("@vibe/") &&
    !alias.find.startsWith("~@vibe/") &&
    !alias.find.startsWith("monday-ui-style") &&
    !alias.find.startsWith("~monday-ui-style")
  );
});

export default defineConfig({
  ...baseConfig,
  cacheDir: path.join(publishedModules, ".vite"),
  server: {
    ...baseConfig.server,
    port: 5221,
    strictPort: true
  },
  optimizeDeps: {
    ...baseConfig.optimizeDeps,
    exclude: []
  },
  resolve: {
    ...baseConfig.resolve,
    alias: [
      {
        find: "@vibe/core/tokens",
        replacement: publishedRequire.resolve("@vibe/core/tokens")
      },
      {
        find: "@vibe/core/next",
        replacement: publishedRequire.resolve("@vibe/core/next")
      },
      {
        find: "@vibe-original/core",
        replacement: publishedRequire.resolve("@vibe/core")
      },
      {
        find: "@vibe/core",
        replacement: path.join(rootDir, "src/original-vibe-core.js")
      },
      ...publishedSpecifiers.map(find => ({
        find,
        replacement: publishedRequire.resolve(find)
      })),
      ...sharedAliases
    ]
  }
});
