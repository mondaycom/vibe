import { test, expect, FrameLocator, Dialog } from "@playwright/test";
import { List } from "../components/List";
import { listStory } from "./utils/url-helper";

let frame: FrameLocator;
let list: List;
const listLocator = 'ul[data-testid="list"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(listStory);
    frame = page.frameLocator(frameLocator);
    list = new List(page, frame.locator(listLocator), "List");
    await page.reload();
    await list.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await list.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await list.isVisible()).toBe(true);
  });

  test("should click list item by name", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.clickListItemByName("Board Power up");
    expect(alertText).toBe("On click!");
  });

  test("should handle multiple list item clicks", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.clickListItemByName("Board Power up");
    expect.soft(alertText).toBe("On click!");
    await list.clickListItemByName("Team Power up");
    expect(alertText).toBe("On click!");
  });

  test("should handle hover operations", async ({ page }) => {
    await list.hover();
    expect(await list.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await list.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await list.getAttributeValue("class");
    expect(className).toContain("List-module");
  });

  test("should check if list items are enabled by default", async () => {
    const isDisabled = await list.isListItemDisabled("Board Power up");
    expect.soft(isDisabled).toBe(false);
    const isDisabled2 = await list.isListItemDisabled("Team Power up");
    expect.soft(isDisabled2).toBe(false);
    const isDisabled3 = await list.isListItemDisabled("Essentials");
    expect(isDisabled3).toBe(false);
  });

  test("should get list item text by index", async () => {
    const text = await list.getListItemTextByIndex(0);
    expect.soft(text).toBe("Board Power up");
    const text2 = await list.getListItemTextByIndex(1);
    expect.soft(text2).toBe("Team Power up");
    const text3 = await list.getListItemTextByIndex(2);
    expect(text3).toBe("Essentials");
  });
});
