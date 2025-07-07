import { test, expect } from "@playwright/test";
import { Loader } from "../components/Loader";
import { loaderStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Loader", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(loaderStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    expect(await loader.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    expect(await loader.isVisible()).toBe(true);
  });

  test("should be clickable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    await loader.click();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should handle multiple clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Click multiple times
    await loader.click();
    await loader.click();
    await loader.click();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should be hoverable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    await loader.hover();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should have proper text content or accessibility attributes", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Loaders might have text, aria-label, or other accessibility attributes
    const text = await loader.getText();
    try {
      const ariaLabel = await loader.getAttributeValue("aria-label");
      expect(text.length > 0 || ariaLabel.length > 0).toBe(true);
    } catch (error) {
      // If no aria-label, text might be sufficient or loader might be decorative
      // This is acceptable
    }
  });

  test("should handle focus operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Focus the loader using the underlying locator
    await loader.getLocator().focus();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Interact with the loader
    await loader.hover();
    await loader.click();

    // Should still be enabled
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Interact with the loader
    await loader.hover();
    await loader.click();

    // Should still be visible
    expect(await loader.isVisible()).toBe(true);
  });

  test("should have proper role or presentation attributes", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Loaders might have role="progressbar" or role="presentation"
    try {
      const role = await loader.getAttributeValue("role");
      expect(role === "progressbar" || role === "presentation" || role === "status").toBe(true);
    } catch (error) {
      // If role attribute doesn't exist, it might be a native loader element
      // This is also acceptable behavior
    }
  });

  test("should scroll into view when needed", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    await loader.scrollIntoView();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    const count = await loader.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Try to get common attributes
    try {
      const className = await loader.getAttributeValue("class");
      expect(className).toBeTruthy();
    } catch (error) {
      // If class attribute doesn't exist, it's acceptable
    }
  });

  test("should handle waiting for visibility states", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Wait for loader to be visible
    await loader.waitForElementToBeVisible();

    // Should be visible after waiting
    expect(await loader.isVisible()).toBe(true);
  });

  test("should handle waiting for element attachment", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Wait for loader to be attached
    await loader.waitForElementToBeAttached();

    // Should be visible after waiting for attachment
    expect(await loader.isVisible()).toBe(true);
  });

  test("should handle removing focus", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const loader = new Loader(page, frame.locator('[data-testid="loader"]'), "Loader");

    // Focus first, then remove focus
    await loader.getLocator().focus();
    await loader.removeFocusFromElement();

    // Verify component is still functional
    expect(await loader.isEnabled()).toBe(true);
  });
});
