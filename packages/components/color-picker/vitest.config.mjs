import config from "@vibe/config/vitest.config";
import { defineConfig, mergeConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");

export default mergeConfig(config, defineConfig({
  resolve: {
    alias: {
      "@vibe/core": path.resolve(repoRoot, "packages/core/src")
    }
  }
}));
