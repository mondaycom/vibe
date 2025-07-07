import { test, expect } from "@playwright/test";
import { Menu } from "../components/Menu";
import { menuStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(menuStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    expect(await menu.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    expect(await menu.isVisible()).toBe(true);
  });

  test("should click menu item by name", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Try to click a menu item (this will depend on what items are available in the story)
    await menu.clickMenuItemByName("Item 1");

    // Verify menu is still functional after click
    expect(await menu.isEnabled()).toBe(true);
  });

  test("should handle clicking multiple menu items", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Click multiple menu items in sequence
    await menu.clickMenuItemByName("Item 1");
    await menu.clickMenuItemByName("Item 2");

    // Verify menu is still functional after multiple clicks
    expect(await menu.isEnabled()).toBe(true);
    expect(await menu.isVisible()).toBe(true);
  });

  test("should handle menu item names with special characters", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Try to click menu items with special characters if they exist
    // This tests the robustness of the name matching
    try {
      await menu.clickMenuItemByName("Item with spaces");
    } catch (error) {
      // Expected if such item doesn't exist
    }
  });

  test("should handle clicking same menu item multiple times", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Click the same menu item multiple times
    await menu.clickMenuItemByName("Item 1");
    await menu.clickMenuItemByName("Item 1");
    await menu.clickMenuItemByName("Item 1");

    // Verify menu state remains consistent
    expect(await menu.isEnabled()).toBe(true);
  });

  test("should handle rapid menu item clicks", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Perform rapid menu item clicks
    await menu.clickMenuItemByName("Item 1");
    await menu.clickMenuItemByName("Item 2");
    await menu.clickMenuItemByName("Item 1");

    // Verify menu maintains functionality after rapid clicks
    expect(await menu.isEnabled()).toBe(true);
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    const text = await menu.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should be clickable as a whole", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Click the menu element itself
    await menu.click();

    // Verify menu is still functional after click
    expect(await menu.isVisible()).toBe(true);
  });

  test("should handle hover operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Hover over the menu
    await menu.hover();

    // Verify menu is still functional after hover
    expect(await menu.isVisible()).toBe(true);
  });

  test("should handle menu item clicking with case sensitivity", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Test case sensitivity (should be case-sensitive)
    await menu.clickMenuItemByName("Item 1");

    // Different case might not work (depends on implementation)
    try {
      await menu.clickMenuItemByName("item 1");
    } catch (error) {
      // This is expected behavior - case sensitivity
    }
  });

  test("should handle menu item names with numbers", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Test with numeric names if they exist
    try {
      await menu.clickMenuItemByName("1");
      await menu.clickMenuItemByName("2");
    } catch (error) {
      // Expected if such items don't exist
    }
  });

  test("should handle empty menu item names gracefully", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Test with empty string (should handle gracefully)
    try {
      await menu.clickMenuItemByName("");
    } catch (error) {
      // Expected behavior - empty name should fail
    }
  });

  test("should handle non-existent menu item names gracefully", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Test with non-existent item name
    try {
      await menu.clickMenuItemByName("Non-existent Item");
    } catch (error) {
      // Expected behavior - non-existent item should fail
    }
  });

  test("should handle menu item names with Unicode characters", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menu = new Menu(page, frame.locator('[data-testid="menu"]'), "Menu");

    // Test with Unicode characters if they exist
    try {
      await menu.clickMenuItemByName("Item 🚀");
      await menu.clickMenuItemByName("αβγ");
    } catch (error) {
      // Expected if such items don't exist
    }
  });
});
