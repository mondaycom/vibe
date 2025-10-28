/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function generateVibeComponentAliases() {
  const componentsFolder = path.resolve(__dirname, "../../components");
  const vibeComponents = {};

  if (fs.existsSync(componentsFolder)) {
    const componentDirs = fs.readdirSync(componentsFolder);

    componentDirs.forEach(component => {
      const componentFolderPath = path.resolve(componentsFolder, component);
      const srcPath = path.join(componentFolderPath, "src");

      if (fs.statSync(componentFolderPath).isDirectory() && fs.existsSync(srcPath)) {
        vibeComponents[`@vibe/${component}`] = srcPath;
      }
    });
  }

  return vibeComponents;
}

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic"
    })
  ],
  resolve: {
    alias: {
      ...generateVibeComponentAliases()
    }
  },
  define: {
    "process.env.NODE_ENV": '"test"'
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.mjs"],
    include: ["**/__tests__/**/*.test.[jt]s?(x)"],
    css: {
      modules: {
        classNameStrategy: "non-scoped"
      }
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "**/__tests__/**",
        "**/*.test.*",
        "**/*.spec.*",
        "**/dist/**",
        "**/*.config.*",
        "**/*.setup.*"
      ]
    }
  }
});
