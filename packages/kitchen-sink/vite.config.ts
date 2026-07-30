import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@vibe/core/tokens": path.resolve(__dirname, "node_modules/@vibe/core/dist/tokens/tokens.css"),
      "@vibe/core": path.resolve(__dirname, "node_modules/@vibe/core/dist/src/index.js"),
      "@vibe/icons": path.resolve(__dirname, "node_modules/@vibe/icons/dist/react/index.js"),
    },
  },
});
