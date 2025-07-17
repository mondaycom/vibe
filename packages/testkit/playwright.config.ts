import { defineConfig } from "@playwright/test";
import path from "path";

// Optimize worker count based on environment
const getWorkerCount = () => {
  return process.env.WORKERS && process.env.CI ? process.env.WORKERS : "50%";
};

// Optimize test timeout based on environment
const getTestTimeout = () => {
  return process.env.CI ? 240 * 1000 : 180 * 1000; // 4 min in CI, 3 min locally
};

// Optimize web server timeout based on environment
const getWebServerTimeout = () => {
  return process.env.CI ? 180 * 1000 : 120 * 1000; // 3 min in CI, 2 min locally
};

// Optimize action timeout based on environment
const getActionTimeout = () => {
  return process.env.CI ? 45000 : 30000; // 45 sec in CI, 30 sec locally
};

// Optimize retries count based on environment
const getRetriesCount = () => {
  return process.env.CI ? 1 : 0; // 1 retry in CI, 0 retries locally
};

// Optimize global timeout based on environment
const getGlobalTimeout = () => {
  return process.env.CI ? 60 * 60 * 1000 : 30 * 60 * 1000; // 1 hr in CI, 30 min locally
};

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Run tests in parallel
  fullyParallel: true,

  // Number of workers to use
  workers: getWorkerCount(),

  // Reporter to use
  reporter: [
    ["html", { open: "never", outputFolder: path.join(process.cwd(), "/reports") }],
    [
      "list",
      {
        printSteps: true
      }
    ]
  ],

  // Web server to use
  webServer: {
    command: "yarn start-server",
    url: "http://127.0.0.1:7008",
    reuseExistingServer: !process.env.CI,
    timeout: getWebServerTimeout(),
    stdout: "ignore",
    stderr: "pipe"
  },

  // Test configuration
  use: {
    headless: true,
    baseURL: "http://127.0.0.1:7008",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    actionTimeout: getActionTimeout(),
    bypassCSP: true,
    launchOptions: {
      args: ["--disable-web-security"]
    }
  },

  // Timeout for tests
  timeout: getTestTimeout(),

  // Retries for tests
  retries: getRetriesCount(),

  // Global timeout for whole test suites
  globalTimeout: getGlobalTimeout()
});
