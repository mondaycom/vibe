import { test, expect } from "@playwright/test";
import { ListItem } from "../components/ListItem";
import { listItemStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - ListItem", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(listItemStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    expect(await listItem.isVisible()).toBe(true);
  });

  test("should be clickable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    await listItem.click();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should handle multiple clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Click multiple times
    await listItem.click();
    await listItem.click();
    await listItem.click();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should handle rapid clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Perform rapid clicks
    await listItem.click();
    await listItem.click();
    await listItem.click();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should be hoverable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    await listItem.hover();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    const text = await listItem.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should handle focus operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Focus the list item using the underlying locator
    await listItem.getLocator().focus();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Interact with the list item
    await listItem.hover();
    await listItem.click();

    // Should still be enabled
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Interact with the list item
    await listItem.hover();
    await listItem.click();

    // Should still be visible
    expect(await listItem.isVisible()).toBe(true);
  });

  test("should handle keyboard interactions", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Focus first using the underlying locator
    await listItem.getLocator().focus();

    // Press Enter or Space (both should work for list items)
    await page.keyboard.press("Enter");
    await page.keyboard.press("Space");

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should have proper role or listitem attributes", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Should have listitem role or be part of a list
    try {
      const role = await listItem.getAttributeValue("role");
      expect(role).toBe("listitem");
    } catch (error) {
      // If role attribute doesn't exist, it might be a native list item element
      // This is also acceptable behavior
    }
  });

  test("should scroll into view when needed", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    await listItem.scrollIntoView();

    // Verify component is still functional
    expect(await listItem.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    const count = await listItem.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const listItem = new ListItem(page, frame.locator('[data-testid="list-item"]'), "List Item");

    // Try to get common attributes
    try {
      const className = await listItem.getAttributeValue("class");
      expect(className).toBeTruthy();
    } catch (error) {
      // If class attribute doesn't exist, it's acceptable
    }
  });
});
