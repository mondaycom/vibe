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
    await expect(button.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(button.getLocator()).toBeVisible();
  });

  test("should be clickable", async () => {
    await button.click();
    await expect(button.getLocator()).toBeEnabled();
  });

  test("should handle multiple clicks", async () => {
    await button.click();
    await button.click();
    await button.click();
    await expect.soft(button.getLocator()).toBeEnabled();
    await expect(button.getLocator()).toBeVisible();
  });

  test("should be hoverable", async () => {
    await button.hover();
    await expect(button.getLocator()).toBeVisible();
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
    await expect(button.getLocator()).toBeEnabled();
  });

  test("should maintain visibility after interactions", async () => {
    await button.hover();
    await button.click();
    await expect(button.getLocator()).toBeVisible();
  });

  test("should scroll into view when needed", async () => {
    await button.scrollIntoView();
    await expect(button.getLocator()).toBeVisible();
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
    await expect(button.getLocator()).toBeVisible();
  });

  test("should handle waiting for element attachment", async () => {
    await button.waitForElementToBeAttached();
    await expect(button.getLocator()).toBeVisible();
  });
});
