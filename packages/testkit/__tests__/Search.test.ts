import { test, expect, FrameLocator } from "@playwright/test";
import { Search } from "../components";
import { searchStory } from "./utils/url-helper";

let frame: FrameLocator;
let search: Search;
const searchLocator = "div[role='search']";
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(searchStory);
    frame = page.frameLocator(frameLocator);
    search = new Search(page, frame.locator(searchLocator), "Search");
    await page.reload();
    await search.waitForElementToBeVisible();
  });

  test("should be initially empty", async () => {
    expect(await search.isEmpty()).toBe(true);
  });

  test("should be able to set text", async () => {
    const testText = "Hello World";
    await search.setText(testText);
    expect.soft(await search.isEmpty()).toBe(false);
    expect(await search.getText()).toBe(testText);
  });

  test("should be able to clear text", async () => {
    await search.setText("Some text");
    expect.soft(await search.isEmpty()).toBe(false);
    await search.clear();
    expect(await search.isEmpty()).toBe(true);
  });

  test("should correctly identify empty state", async () => {
    expect.soft(await search.isEmpty()).toBe(true);
    await search.setText("Not empty");
    expect.soft(await search.isEmpty()).toBe(false);
    await search.clear();
    expect(await search.isEmpty()).toBe(true);
  });

  test("should handle multiple text changes", async () => {
    await search.setText("First text");
    expect.soft(await search.getText()).toBe("First text");
    await search.setText("Second text");
    expect.soft(await search.getText()).toBe("Second text");
    await search.clear();
    expect(await search.isEmpty()).toBe(true);
  });

  test("should handle empty string input", async () => {
    await search.setText("");
    expect(await search.isEmpty()).toBe(true);
  });

  test("should handle special characters", async () => {
    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await search.setText(specialText);
    expect.soft(await search.isEmpty()).toBe(false);
    expect(await search.getText()).toBe(specialText);
  });

  test("should handle numbers", async () => {
    const numberText = "123456789";
    await search.setText(numberText);
    expect.soft(await search.isEmpty()).toBe(false);
    expect(await search.getText()).toBe(numberText);
  });

  test("should handle long text", async () => {
    const longText =
      "This is a very long text that contains many characters and words to test the TextField component's ability to handle longer input values without any issues.";
    await search.setText(longText);
    expect.soft(await search.isEmpty()).toBe(false);
    expect(await search.getText()).toBe(longText);
  });

  test("should be enabled by default", async () => {
    expect(await search.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await search.isVisible()).toBe(true);
  });

  test("should get placeholder text", async () => {
    const placeholderText = await search.getPlaceholderText();
    expect(placeholderText).toBe("Placeholder text here");
  });

  test("should count elements correctly", async () => {
    const count = await search.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await search.getAttributeValue("class");
    expect(className).toContain("Search-module");
  });

  test("should be able to clear search using the clear search button", async () => {
    await search.setText("Hello World");
    expect.soft(await search.isEmpty()).toBe(false);
    expect.soft(await search.getText()).toBe("Hello World");
    await search.clickClearSearchButton();
    expect(await search.isEmpty()).toBe(true);
    expect(await search.getText()).toBe("");
  });
});
