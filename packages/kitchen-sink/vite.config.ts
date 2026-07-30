import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      // Point directly at the monorepo's built packages/core so source changes
      // (after `yarn workspace @vibe/core build`) are picked up by both apps.
      "@vibe/core/tokens": path.resolve(__dirname, "../core/dist/tokens/tokens.css"),
      "@vibe/core": path.resolve(__dirname, "../core/dist/src/index.js"),
      "@vibe/icons": path.resolve(__dirname, "node_modules/@vibe/icons/dist/react/index.js"),
    },
  },
});
