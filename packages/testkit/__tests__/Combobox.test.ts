import { test, expect, FrameLocator, Dialog } from "@playwright/test";
import { BaseElement, Combobox } from "../components";
import { comboboxStory } from "./utils/url-helper";

let frame: FrameLocator;
let combobox: Combobox;
const comboboxLocator = 'div[data-testid="dialog-content-container"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - Combobox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(comboboxStory);
    frame = page.frameLocator(frameLocator);
    combobox = new Combobox(page, frame.locator(comboboxLocator), "Combobox");
    await page.reload();
    await combobox.waitForElementToBeVisible();
  });

  test("should be able to select an option", async ({ page }) => {
    let alertText: string | null = null;
    page.on("dialog", async (dialog: Dialog) => {
      alertText = dialog.message();
      await dialog.accept();
    });
    await combobox.selectItem("Option 1");
    expect(alertText).toBe("clicked");
  });

  test("should be enabled by default", async () => {
    await expect(combobox.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(combobox.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await combobox.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await new BaseElement(
      combobox.getPage(),
      combobox.getLocator().locator("div").first(),
      "Combobox"
    ).getAttributeValue("data-testid");
    expect(attributeValue).toContain("combobox");
  });

  test("should be able to search for an option", async () => {
    await combobox.search("Option 1");
    expect(await combobox.isSearchResultVisible("Option 1")).toBe(true);
  });

  test("should be able to clear search", async () => {
    await combobox.search("Option 1");
    expect.soft(await combobox.isSearchResultVisible("Option 1")).toBe(true);
    let searchInputValue = await combobox.getSearchInputValue();
    expect.soft(searchInputValue).toBe("Option 1");
    await combobox.clearSearch();
    searchInputValue = await combobox.getSearchInputValue();
    expect(searchInputValue).toBe("");
  });

  test("should handle empty search", async () => {
    await combobox.search("");
    const searchInputValue = await combobox.getSearchInputValue();
    expect(searchInputValue).toBe("");
  });

  test("should handle special characters in search", async () => {
    const specialSearch = "Special!@#$%";
    await combobox.search(specialSearch);
    const searchInputValue = await combobox.getSearchInputValue();
    expect(searchInputValue).toBe(specialSearch);
  });

  test("should handle long search", async () => {
    const longSearch = "This is a very long search text that tests the combobox's ability to handle longer strings";
    await combobox.search(longSearch);
    const searchInputValue = await combobox.getSearchInputValue();
    expect(searchInputValue).toBe(longSearch);
  });

  test("should handle numeric search", async () => {
    const numericSearch = "12345";
    await combobox.search(numericSearch);
    const searchInputValue = await combobox.getSearchInputValue();
    expect(searchInputValue).toBe(numericSearch);
  });
});
