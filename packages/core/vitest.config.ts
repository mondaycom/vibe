import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic"
    })
  ],
  define: {
    "process.env.NODE_ENV": '"test"'
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
