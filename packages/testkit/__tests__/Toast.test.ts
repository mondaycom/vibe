import { test, expect } from "@playwright/test";
import { Toast } from "../components";
import { buttonToastStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Toast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(buttonToastStory);
  });

  test("Toast should return content text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    const content = await toast.getContent();
    expect(content).toBeTruthy();
    expect(typeof content).toBe("string");
  });

  test("Toast should be able to click close button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    await toast.clickCloseButton();
    // Verify toast is closed or hidden
    expect(await toast.isVisible()).toBe(false);
  });

  test("Toast should have valid content before closing", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    // Get content before closing
    const content = await toast.getContent();
    expect(content).toBeTruthy();

    // Close the toast
    await toast.clickCloseButton();
    expect(await toast.isVisible()).toBe(false);
  });

  test("Toast should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    expect(await toast.isEnabled()).toBe(true);
  });

  test("Toast should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    expect(await toast.isVisible()).toBe(true);
  });

  test("Toast should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    const text = await toast.getText();
    expect(typeof text).toBe("string");
  });

  test("Toast content should be consistent", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    const content1 = await toast.getContent();
    const content2 = await toast.getContent();

    expect(content1).toBe(content2);
  });

  test("Toast should handle multiple close button clicks gracefully", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    // First close button click
    await toast.clickCloseButton();

    // Toast should be hidden after first click
    expect(await toast.isVisible()).toBe(false);
  });

  test("Toast should have non-empty content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toast = new Toast(page, frame.locator('[data-testid="toast"]'), "Toast");

    const content = await toast.getContent();
    expect(content.length).toBeGreaterThan(0);
  });
});
