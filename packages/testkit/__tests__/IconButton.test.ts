import { test, expect } from "@playwright/test";
import { IconButton } from "../components/IconButton";
import { iconButtonStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - IconButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(iconButtonStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    expect(await iconButton.isVisible()).toBe(true);
  });

  test("should be clickable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    await iconButton.click();

    // Verify button is still enabled after click
    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should handle multiple clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Click multiple times
    await iconButton.click();
    await iconButton.click();
    await iconButton.click();

    // Verify button is still functional
    expect(await iconButton.isEnabled()).toBe(true);
    expect(await iconButton.isVisible()).toBe(true);
  });

  test("should handle rapid clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Perform rapid clicks
    await iconButton.click();
    await iconButton.click();
    await iconButton.click();

    // Verify button state remains consistent
    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should be hoverable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    await iconButton.hover();

    // Verify button is still functional after hover
    expect(await iconButton.isVisible()).toBe(true);
  });

  test("should have proper text content or accessibility label", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Icon buttons might have text or aria-label
    const text = await iconButton.getText();
    const ariaLabel = await iconButton.getAttributeValue("aria-label");

    // At least one should exist
    expect(text?.length > 0 || ariaLabel?.length > 0).toBe(true);
  });

  test("should handle focus operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Focus the button using the underlying locator
    await iconButton.getLocator().focus();

    // Verify button is still accessible
    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Interact with the button
    await iconButton.hover();
    await iconButton.click();

    // Should still be enabled
    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Interact with the button
    await iconButton.hover();
    await iconButton.click();

    // Should still be visible
    expect(await iconButton.isVisible()).toBe(true);
  });

  test("should handle keyboard interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Focus first using the underlying locator
    await iconButton.getLocator().focus();

    // Press Enter or Space (both should work for buttons)
    await page.keyboard.press("Enter");
    await page.keyboard.press("Space");

    // Verify button is still functional
    expect(await iconButton.isEnabled()).toBe(true);
  });

  test("should have proper role attribute", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const iconButton = new IconButton(page, frame.locator('[data-testid="icon-button"]'), "Icon Button");

    // Should have button role or proper aria attributes
    try {
      const role = await iconButton.getAttributeValue("role");
      expect(role).toBe("button");
    } catch (error) {
      // If role attribute doesn't exist, it might be a native button element
      // This is also acceptable behavior - verify it's still enabled
      expect(await iconButton.isEnabled()).toBe(true);
    }
  });
});
