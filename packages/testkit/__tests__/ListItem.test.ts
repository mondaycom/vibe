import { test, expect, FrameLocator } from "@playwright/test";
import { ListItem } from "../components/ListItem";
import { listItemStory } from "./utils/url-helper";

let frame: FrameLocator;
let listItem: ListItem;
const listItemLocator = 'div[role="option"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - ListItem", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(listItemStory);
    frame = page.frameLocator(frameLocator);
    listItem = new ListItem(page, frame.locator(listItemLocator), "List Item");
    await page.reload();
    await listItem.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(listItem.getLocator()).toBeVisible();
  });

  test("should be clickable", async () => {
    await listItem.click();
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should handle multiple clicks", async () => {
    await listItem.click();
    await listItem.click();
    await listItem.click();
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should be hoverable", async () => {
    await listItem.hover();
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should have proper text content", async () => {
    const text = await listItem.getText();
    expect(text).toBe("List item");
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should maintain enabled state after interactions", async () => {
    await listItem.hover();
    await listItem.click();
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should maintain visibility after interactions", async () => {
    await listItem.hover();
    await listItem.click();
    await expect(listItem.getLocator()).toBeVisible();
  });

  test("should scroll into view when needed", async () => {
    await listItem.scrollIntoView();
    await expect(listItem.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await listItem.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await listItem.getAttributeValue("class");
    expect(className).toContain("ListItem-module");
  });

  test("should check if list item is enabled by default", async () => {
    await expect(listItem.getLocator()).toBeEnabled();
  });
});
