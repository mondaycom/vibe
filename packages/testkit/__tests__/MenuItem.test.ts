import { test, expect, FrameLocator } from "@playwright/test";
import { MenuItem } from "../components/MenuItem";
import { menuItemStory } from "./utils/url-helper";

let frame: FrameLocator;
let menuItem: MenuItem;
const menuItemLocator = 'li[role="menuitem"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - MenuItem", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(menuItemStory);
    frame = page.frameLocator(frameLocator);
    menuItem = new MenuItem(page, frame.locator(menuItemLocator), "Menu Item");
    await page.reload();
    await menuItem.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await menuItem.isVisible()).toBe(true);
  });

  test("should be clickable", async () => {
    await menuItem.click();
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should handle multiple clicks", async () => {
    await menuItem.click();
    await menuItem.click();
    await menuItem.click();
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await menuItem.hover();
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should have proper text content", async () => {
    const text = await menuItem.getText();
    expect.soft(text).toBe("Menu item");
    expect.soft(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should maintain enabled state after interactions", async () => {
    await menuItem.hover();
    await menuItem.click();
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await menuItem.hover();
    await menuItem.click();
    expect(await menuItem.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await menuItem.scrollIntoView();
    expect(await menuItem.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await menuItem.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await menuItem.getAttributeValue("class");
    expect(className).toContain("BaseMenuItem-module");
  });

  test("should check if menu item is enabled by default", async () => {
    expect(await menuItem.isDisabled()).toBe(false);
  });
});
