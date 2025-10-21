/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

const componentsFolder = path.resolve(process.cwd(), "../../components");

const components = fs.readdirSync(componentsFolder).reduce((acc, component) => {
  const componentFolderPath = path.resolve(componentsFolder, component);
  if (fs.statSync(componentFolderPath).isDirectory()) {
    acc[`@vibe/${component}`] = path.join(componentFolderPath, "src/index.ts");
  }

  return acc;
}, {});

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic"
    })
  ],
  define: {
    "process.env.NODE_ENV": '"test"'
  },
  resolve: {
    alias: {
      "~monday-ui-style": path.resolve(process.cwd(), "../../node_modules/monday-ui-style"),
      "~": path.resolve(process.cwd(), "../../node_modules"),
      ...components
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
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
