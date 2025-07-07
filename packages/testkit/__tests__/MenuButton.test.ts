import { test, expect } from "@playwright/test";
import { MenuButton } from "../components/MenuButton";
import { menuButtonStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - MenuButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(menuButtonStory);
  });

  test("should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    expect(await menuButton.isEnabled()).toBe(true);
  });

  test("should be visible by default", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    expect(await menuButton.isVisible()).toBe(true);
  });

  test("should open menu when calling openMenu()", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    await menuButton.openMenu();

    // Check that menu is expanded (aria-expanded should be true)
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");
  });

  test("should close menu when calling closeMenu()", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // First open the menu
    await menuButton.openMenu();

    // Then close it
    await menuButton.closeMenu();

    // Check that menu is collapsed (aria-expanded should be false)
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });

  test("should not change state when calling openMenu() on already opened menu", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Open the menu
    await menuButton.openMenu();

    // Call openMenu again
    await menuButton.openMenu();

    // Should still be expanded
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");
  });

  test("should not change state when calling closeMenu() on already closed menu", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Ensure menu is closed first
    await menuButton.closeMenu();

    // Call closeMenu again
    await menuButton.closeMenu();

    // Should still be collapsed
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });

  test("should toggle menu state correctly with multiple open/close operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Open -> Close -> Open -> Close sequence
    await menuButton.openMenu();
    let ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");

    await menuButton.closeMenu();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");

    await menuButton.openMenu();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");

    await menuButton.closeMenu();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });

  test("should handle rapid open/close operations", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Perform rapid operations
    await menuButton.openMenu();
    await menuButton.closeMenu();
    await menuButton.openMenu();
    await menuButton.closeMenu();

    // Should end up in closed state
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });

  test("should have proper text content", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    const text = await menuButton.getText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should be clickable", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Click should work without throwing
    await menuButton.click();

    // Check that the click had an effect (menu should be opened)
    const ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");
  });

  test("should handle click to toggle menu state", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Initial state should be closed
    let ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");

    // Click to open
    await menuButton.click();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");

    // Click to close
    await menuButton.click();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });

  test("should maintain consistent state between openMenu/closeMenu and click", async ({ page }) => {
    const frame = page.frameLocator('[title="storybook-preview-iframe"]');
    const menuButton = new MenuButton(page, frame.locator('[data-testid="menu-button"]'), "Menu Button");

    // Open with openMenu()
    await menuButton.openMenu();
    let ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");

    // Close with click()
    await menuButton.click();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");

    // Open with click()
    await menuButton.click();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("true");

    // Close with closeMenu()
    await menuButton.closeMenu();
    ariaExpanded = await menuButton.getAttributeValue("aria-expanded");
    expect(ariaExpanded).toBe("false");
  });
});
