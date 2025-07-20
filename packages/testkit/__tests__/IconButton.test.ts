import { test, expect, FrameLocator } from "@playwright/test";
import { IconButton } from "../components/IconButton";
import { iconButtonStory } from "./utils/url-helper";

let frame: FrameLocator;
let iconButton: IconButton;
const iconButtonLocator = 'button[data-testid="icon-button"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - IconButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(iconButtonStory);
    frame = page.frameLocator(frameLocator);
    iconButton = new IconButton(page, frame.locator(iconButtonLocator), "Icon Button");
    await page.reload();
    await iconButton.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(iconButton.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should be clickable", async () => {
    await iconButton.click();
    await expect(iconButton.getLocator()).toBeEnabled();
  });

  test("should handle multiple clicks", async () => {
    await iconButton.click();
    await iconButton.click();
    await iconButton.click();
    await expect.soft(iconButton.getLocator()).toBeEnabled();
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should be hoverable", async () => {
    await iconButton.hover();
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should maintain enabled state after interactions", async () => {
    await iconButton.hover();
    await iconButton.click();
    await expect(iconButton.getLocator()).toBeEnabled();
  });

  test("should maintain visibility after interactions", async () => {
    await iconButton.hover();
    await iconButton.click();
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should scroll into view when needed", async () => {
    await iconButton.scrollIntoView();
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await iconButton.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await iconButton.getAttributeValue("class");
    expect(className).toContain("Button-module");
  });

  test("should handle waiting for visibility states", async () => {
    await iconButton.waitForElementToBeVisible();
    await expect(iconButton.getLocator()).toBeVisible();
  });

  test("should handle waiting for element attachment", async () => {
    await iconButton.waitForElementToBeAttached();
    await expect(iconButton.getLocator()).toBeVisible();
  });
});
