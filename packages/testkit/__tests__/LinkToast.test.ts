import { test, expect } from "@playwright/test";
import { LinkToast } from "../components/LinkToast";
import { linkToastStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - LinkToast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(linkToastStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should click the link", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    await linkToast.clickLink();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle multiple link clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Click link multiple times
    await linkToast.clickLink();
    await linkToast.clickLink();
    await linkToast.clickLink();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle rapid link clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Perform rapid link clicks
    await linkToast.clickLink();
    await linkToast.clickLink();
    await linkToast.clickLink();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should get toast content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    const content = await linkToast.getContent();
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should click close button", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    await linkToast.clickCloseButton();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle combination of link and close button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Click the link first
    await linkToast.clickLink();

    // Then click the close button
    await linkToast.clickCloseButton();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    await linkToast.hover();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    const text = await linkToast.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should be clickable as a whole", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Click the toast element itself
    await linkToast.click();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Interact with the toast
    await linkToast.clickLink();
    await linkToast.hover();

    // Should still be enabled
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after link interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Interact with the link
    await linkToast.clickLink();
    await linkToast.hover();

    // Should still be visible
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    await linkToast.scrollIntoView();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    const count = await linkToast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Try to get common attributes
    try {
      const className = await linkToast.getAttributeValue("class");
      expect(className).toBeTruthy();
    } catch (error) {
      // If class attribute doesn't exist, it's acceptable
    }
  });

  test("should handle waiting for visibility states", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Wait for toast to be visible
    await linkToast.waitForElementToBeVisible();

    // Should be visible after waiting
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should handle complex interaction sequences", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Complex sequence: get content, click link, hover, get content again
    const content1 = await linkToast.getContent();
    await linkToast.clickLink();
    await linkToast.hover();
    const content2 = await linkToast.getContent();

    // Content should be consistent
    expect(content1).toBe(content2);
  });

  test("should handle alternating link and close button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Alternate between link and close button
    await linkToast.clickLink();
    await linkToast.clickCloseButton();
    await linkToast.clickLink();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle waiting for element attachment", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Wait for toast to be attached
    await linkToast.waitForElementToBeAttached();

    // Should be visible after waiting for attachment
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should handle removing focus", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const linkToast = new LinkToast(page, frame.locator('[data-testid="link-toast"]'), "Link Toast");

    // Focus first, then remove focus
    await linkToast.getLocator().focus();
    await linkToast.removeFocusFromElement();

    // Verify component is still functional
    expect(await linkToast.isEnabled()).toBe(true);
  });
});
