import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./check-app-dist"
  },
  resolve: {
    alias: {
      "~monday-ui-style": path.resolve(__dirname, "node_modules/monday-ui-style"),
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      services: path.resolve(__dirname, "src/services/"),
      helpers: path.resolve(__dirname, "src/helpers/"),
      utils: path.resolve(__dirname, "src/utils/")
    }
  }
});
