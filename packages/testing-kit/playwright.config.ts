

import { defineConfig } from '@playwright/test';
import path from "path";
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({

  fullyParallel: false,
  workers: 1,
  reporter: [["html", { open: "never", outputFolder: path.join(__dirname, "/reports") }]],
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
  timeout: 60 * 1000,
});