import { test, expect, FrameLocator } from "@playwright/test";
import { Text } from "../components";
import { textStory } from "./utils/url-helper";

let frame: FrameLocator;
let text: Text;
const textLocator = 'div[data-testid="text"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - Text", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textStory);
    frame = page.frameLocator(frameLocator);
    text = new Text(page, frame.locator(textLocator), "Text");
    await page.reload();
    await text.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(text.locator).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(text.locator).toBeVisible();
  });

  test("should be hoverable", async () => {
    await text.hover();
    await expect(text.locator).toBeVisible();
  });

  test("should have proper text content", async () => {
    const textContent = await text.getText();
    expect.soft(textContent).toBe("Hi, I'm a text!");
    expect.soft(textContent).toBeTruthy();
    expect(textContent.length).toBeGreaterThan(0);
  });

  test("should maintain enabled state after interactions", async () => {
    await text.hover();
    await text.click();
    await expect(text.locator).toBeEnabled();
  });

  test("should maintain visibility after interactions", async () => {
    await text.hover();
    await text.click();
    await expect(text.locator).toBeVisible();
  });

  test("should scroll into view when needed", async () => {
    await text.scrollIntoView();
    await expect(text.locator).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await text.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await text.getAttributeValue("class");
    expect(className).toContain("Text-module");
  });

  test("should handle waiting for visibility states", async () => {
    await text.waitForElementToBeVisible();
    await expect(text.locator).toBeVisible();
  });

  test("should handle waiting for element attachment", async () => {
    await text.waitForElementToBeAttached();
    await expect(text.locator).toBeVisible();
  });
});
