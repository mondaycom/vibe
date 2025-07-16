import { test, expect, FrameLocator } from "@playwright/test";
import { Menu } from "../components/Menu";
import { menuStory } from "./utils/url-helper";

let frame: FrameLocator;
let menu: Menu;
const menuLocator = 'ul[data-testid="menu"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(menuStory);
    frame = page.frameLocator(frameLocator);
    menu = new Menu(page, frame.locator(menuLocator), "Menu");
    await page.reload();
    await menu.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(menu.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(menu.getLocator()).toBeVisible();
  });

  test("should click menu item by name", async () => {
    await menu.selectItem("Item 1");
    await expect(menu.getLocator()).toBeEnabled();
  });

  test("should handle clicking multiple menu items", async () => {
    await menu.selectItem("Item 1");
    await menu.selectItem("Item 2");
    await expect.soft(menu.getLocator()).toBeEnabled();
    await expect(menu.getLocator()).toBeVisible();
  });

  test("should handle hover operations", async () => {
    await menu.hover();
    await expect(menu.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await menu.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await menu.getAttributeValue("class");
    expect(className).toContain("Menu-module");
  });

  test("should check if menu items are enabled by default", async () => {
    const isDisabled = await menu.isMenuItemDisabled("Menu item 1");
    expect.soft(isDisabled).toBe(false);
    const isDisabled2 = await menu.isMenuItemDisabled("Menu item 2");
    expect.soft(isDisabled2).toBe(true);
    const isDisabled3 = await menu.isMenuItemDisabled("Menu item 3");
    expect(isDisabled3).toBe(false);
  });

  test("should get menu item name by index", async () => {
    const name = await menu.getMenuItemNameByIndex(0);
    expect.soft(name).toBe("Menu item 1");
    const name2 = await menu.getMenuItemNameByIndex(1);
    expect.soft(name2).toBe("Menu item 2");
    const name3 = await menu.getMenuItemNameByIndex(2);
    expect(name3).toBe("Menu item 3");
  });
});
