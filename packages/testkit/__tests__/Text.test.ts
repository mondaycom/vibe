import { test, expect, FrameLocator } from "@playwright/test";
import { Text } from "../components";
import { textStory } from "./utils/url-helper";

let frame: FrameLocator;
let text: Text;
const textLocator = 'div[data-testid="text"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Text", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textStory);
    frame = page.frameLocator(frameLocator);
    text = new Text(page, frame.locator(textLocator), "Text");
    await page.reload();
    await text.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await text.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await text.isVisible()).toBe(true);
  });

  test("should be hoverable", async () => {
    await text.hover();
    expect(await text.isVisible()).toBe(true);
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
    expect(await text.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await text.hover();
    await text.click();
    expect(await text.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await text.scrollIntoView();
    expect(await text.isVisible()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await text.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await text.getAttributeValue("class");
    expect(className).toContain("Text-module");
  });

  test("should handle waiting for visibility states", async () => {
    await text.waitForElementToBeVisible();
    expect(await text.isVisible()).toBe(true);
  });

  test("should handle waiting for element attachment", async () => {
    await text.waitForElementToBeAttached();
    expect(await text.isVisible()).toBe(true);
  });
});
