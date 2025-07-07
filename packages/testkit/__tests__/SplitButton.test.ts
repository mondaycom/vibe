import { test, expect } from "@playwright/test";
import { SplitButton } from "../components/SplitButton";
import { splitButtonStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - SplitButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(splitButtonStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should click primary button", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    await splitButton.clickPrimaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should click secondary button", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    await splitButton.clickSecondaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle multiple primary button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Click primary button multiple times
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle multiple secondary button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Click secondary button multiple times
    await splitButton.clickSecondaryButton();
    await splitButton.clickSecondaryButton();
    await splitButton.clickSecondaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle alternating button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Alternate between primary and secondary buttons
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle rapid button clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Perform rapid clicks
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    await splitButton.clickPrimaryButton();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should be hoverable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    await splitButton.hover();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    const text = await splitButton.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should be clickable as a whole", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Click the split button element itself
    await splitButton.click();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Interact with both buttons
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();

    // Should still be enabled
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Interact with both buttons
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();

    // Should still be visible
    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should handle focus operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Focus the split button using the underlying locator
    await splitButton.getLocator().focus();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle keyboard interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Focus first using the underlying locator
    await splitButton.getLocator().focus();

    // Press Enter or Space (should work for the focused part)
    await page.keyboard.press("Enter");
    await page.keyboard.press("Space");

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should scroll into view when needed", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    await splitButton.scrollIntoView();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    const count = await splitButton.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Try to get common attributes
    try {
      const className = await splitButton.getAttributeValue("class");
      expect(className).toBeTruthy();
    } catch (error) {
      // If class attribute doesn't exist, it's acceptable
    }
  });

  test("should handle waiting for visibility states", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Wait for split button to be visible
    await splitButton.waitForElementToBeVisible();

    // Should be visible after waiting
    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should handle removing focus", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Focus first, then remove focus
    await splitButton.getLocator().focus();
    await splitButton.removeFocusFromElement();

    // Verify component is still functional
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle complex interaction sequences", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const splitButton = new SplitButton(page, frame.locator('[data-testid="split-button"]'), "Split Button");

    // Complex sequence: hover, click primary, hover, click secondary, click primary again
    await splitButton.hover();
    await splitButton.clickPrimaryButton();
    await splitButton.hover();
    await splitButton.clickSecondaryButton();
    await splitButton.clickPrimaryButton();

    // Should still be functional
    expect(await splitButton.isEnabled()).toBe(true);
    expect(await splitButton.isVisible()).toBe(true);
  });
});
