import { defineConfig } from "@playwright/test";
import path from "path";

const listReporter = [
  "list",
  {
    printSteps: true
  }
] as const;

const githubReporter = ["github"] as const;

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  fullyParallel: true,
  workers: 6,
  reporter: [
    ["html", { open: "never", outputFolder: path.join(process.cwd(), "/reports") }],
    process.env.CI ? githubReporter : listReporter
  ],

  // Run your local dev server before starting the tests
  webServer: {
    command: "yarn start-server",
    url: "http://127.0.0.1:7008",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    stdout: "ignore",
    stderr: "pipe"
  },

  use: {
    headless: true,
    baseURL: "http://127.0.0.1:7008",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    actionTimeout: 30000,
    bypassCSP: true,
    launchOptions: {
      args: ["--disable-web-security"]
    }
  },
  timeout: 180 * 1000
});
