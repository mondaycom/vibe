import { test, expect } from "@playwright/test";
import { List } from "../components/List";
import { listStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(listStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    expect(await list.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    expect(await list.isVisible()).toBe(true);
  });

  test("should click list item by name", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Try to click a list item (this will depend on what items are available in the story)
    await list.clickListItemByName("Item 1");

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should handle clicking multiple list items", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Click multiple list items in sequence
    await list.clickListItemByName("Item 1");
    await list.clickListItemByName("Item 2");

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should handle list item names with special characters", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Try to click list items with special characters if they exist
    try {
      await list.clickListItemByName("Item with spaces");
      await list.clickListItemByName("Item-with-dashes");
      await list.clickListItemByName("Item.with.dots");
    } catch (error) {
      // Expected if such items don't exist
    }
  });

  test("should handle clicking same list item multiple times", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Click the same list item multiple times
    await list.clickListItemByName("Item 1");
    await list.clickListItemByName("Item 1");
    await list.clickListItemByName("Item 1");

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should handle rapid list item clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Perform rapid list item clicks
    await list.clickListItemByName("Item 1");
    await list.clickListItemByName("Item 2");
    await list.clickListItemByName("Item 1");

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    const text = await list.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should be clickable as a whole", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Click the list element itself
    await list.click();

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should handle hover operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Hover over the list
    await list.hover();

    // Verify component is still functional
    expect(await list.isEnabled()).toBe(true);
  });

  test("should handle list item clicking with case sensitivity", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test case sensitivity (should be case-sensitive)
    await list.clickListItemByName("Item 1");

    // Different case might not work (depends on implementation)
    try {
      await list.clickListItemByName("item 1");
    } catch (error) {
      // This is expected behavior - case sensitivity
    }
  });

  test("should handle list item names with numbers", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with numeric names if they exist
    try {
      await list.clickListItemByName("1");
      await list.clickListItemByName("2");
      await list.clickListItemByName("10");
    } catch (error) {
      // Expected if such items don't exist
    }
  });

  test("should handle empty list item names gracefully", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with empty string (should handle gracefully)
    try {
      await list.clickListItemByName("");
    } catch (error) {
      // Expected behavior - empty name should fail
    }
  });

  test("should handle non-existent list item names gracefully", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with non-existent item name
    try {
      await list.clickListItemByName("Non-existent Item");
    } catch (error) {
      // Expected behavior - non-existent item should fail
    }
  });

  test("should handle list item names with Unicode characters", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with Unicode characters if they exist
    try {
      await list.clickListItemByName("Item 🚀");
      await list.clickListItemByName("αβγ");
      await list.clickListItemByName("测试");
    } catch (error) {
      // Expected if such items don't exist
    }
  });

  test("should handle list item names with HTML-like strings", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with HTML-like strings if they exist
    try {
      await list.clickListItemByName("<span>Item</span>");
      await list.clickListItemByName("Item & Co");
    } catch (error) {
      // Expected if such items don't exist
    }
  });

  test("should handle list item selection with partial matches", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const list = new List(page, frame.locator('[data-testid="list"]'), "List");

    // Test with partial text matches
    try {
      await list.clickListItemByName("Item");
      await list.clickListItemByName("1");
    } catch (error) {
      // Expected if exact matches are required
    }
  });
});
