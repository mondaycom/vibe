import { test, expect, FrameLocator } from "@playwright/test";
import { Button } from "../components";
import { buttonStory } from "./utils/url-helper";

let frame: FrameLocator;
let button: Button;
const buttonLocator = 'button[data-testid="button"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(buttonStory);
    frame = page.frameLocator(frameLocator);
    button = new Button(page, frame.locator(buttonLocator), "Button");
    await page.reload();
    await button.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await button.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await button.isVisible()).toBe(true);
  });

  test("should be clickable", async () => {
    await button.click();
    expect(await button.isEnabled()).toBe(true);
  });

  test("should handle multiple clicks", async () => {
    await button.click();
    await button.click();
    await button.click();
    expect.soft(await button.isEnabled()).toBe(true);
    expect(await button.isVisible()).toBe(true);
  });

  test("should be hoverable", async () => {
    await button.hover();
    expect(await button.isVisible()).toBe(true);
  });

  test("should have proper text content", async () => {
    const text = await button.getText();
    expect.soft(text).toBe("Button");
    expect.soft(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should maintain enabled state after interactions", async () => {
    await button.hover();
    await button.click();
    expect(await button.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await button.hover();
    await button.click();
    expect(await button.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await button.scrollIntoView();
    expect(await button.isVisible()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await button.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await button.getAttributeValue("class");
    expect(className).toContain("Button-module");
  });

  test("should handle waiting for visibility states", async () => {
    await button.waitForElementToBeVisible();
    expect(await button.isVisible()).toBe(true);
  });

  test("should handle waiting for element attachment", async () => {
    await button.waitForElementToBeAttached();
    expect(await button.isVisible()).toBe(true);
  });
});
