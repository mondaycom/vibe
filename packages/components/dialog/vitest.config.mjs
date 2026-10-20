import config from "@vibe/config/vitest.config";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      src: fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
