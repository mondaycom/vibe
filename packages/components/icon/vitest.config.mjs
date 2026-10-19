import config from "@vibe/config/vitest.config";
import { defineConfig } from "vite";

export default defineConfig({
  ...config,
  test: {
    ...config.test,
    setupFiles: [],
    server: { deps: { inline: ["react-inlinesvg"] } }
  }
});
