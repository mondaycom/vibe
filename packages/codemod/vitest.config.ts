import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["test/setup.ts"],
    include: ["**/__tests__/**/*.test.ts"],
    clearMocks: true,
    typecheck: {
      enabled: true
    },
    onConsoleLog(log) {
      if (log.includes("@vibe/codemod")) return false;
    }
  }
});
