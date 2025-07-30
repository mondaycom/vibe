import { test, expect, FrameLocator, Dialog } from "@playwright/test";
import { List } from "../components/List";
import { listStory } from "./utils/url-helper";

let frame: FrameLocator;
let list: List;
const listLocator = 'ul[data-testid="list"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(listStory);
    frame = page.frameLocator(frameLocator);
    list = new List(page, frame.locator(listLocator), "List");
    await page.reload();
    await list.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(list.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(list.getLocator()).toBeVisible();
  });

  test("should click list item by name", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.selectItem("Board Power up");
    expect(alertText).toBe("On click!");
  });

  test("should handle multiple list item clicks by name", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.selectItem("Board Power up");
    expect.soft(alertText).toBe("On click!");
    await list.selectItem("Team Power up");
    expect(alertText).toBe("On click!");
  });

  test("should click list item by index", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.clickItemByIndex(0);
    expect(alertText).toBe("On click!");
  });

  test("should handle multiple list item clicks by index", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await list.clickItemByIndex(0);
    expect.soft(alertText).toBe("On click!");
    await list.clickItemByIndex(1);
    expect(alertText).toBe("On click!");
  });

  test("should handle hover operations", async () => {
    await list.hover();
    await expect(list.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await list.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await list.getAttributeValue("data-vibe");
    expect(attributeValue).toContain("List");
  });

  test("should check if list items are enabled by default", async () => {
    const isDisabled = await list.isItemDisabled("Board Power up");
    expect.soft(isDisabled).toBe(false);
    const isDisabled2 = await list.isItemDisabled("Team Power up");
    expect.soft(isDisabled2).toBe(false);
    const isDisabled3 = await list.isItemDisabled("Essentials");
    expect(isDisabled3).toBe(false);
  });

  test("should get list item text by index", async () => {
    const text = await list.getItemTextByIndex(0);
    expect.soft(text).toBe("Board Power up");
    const text2 = await list.getItemTextByIndex(1);
    expect.soft(text2).toBe("Team Power up");
    const text3 = await list.getItemTextByIndex(2);
    expect(text3).toBe("Essentials");
  });

  test("should get list item name by index", async () => {
    const name = await list.getItemTextByIndex(0);
    expect.soft(name).toBe("Board Power up");
    const name2 = await list.getItemTextByIndex(1);
    expect.soft(name2).toBe("Team Power up");
    const name3 = await list.getItemTextByIndex(2);
    expect(name3).toBe("Essentials");
  });
});
