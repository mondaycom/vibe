import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/__tests__/**/*.test.ts"],
    clearMocks: true,
    typecheck: {
      enabled: true
    },
    onConsoleLog(log) {
      if (log.includes("Component uses both")) return false;
    }
  }
});
