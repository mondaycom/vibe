import { test, expect, FrameLocator } from "@playwright/test";
import { ButtonToast } from "../components/ButtonToast";
import { buttonToastStory } from "./utils/url-helper";

let frame: FrameLocator;
let buttonToast: ButtonToast;
const buttonToastLocator = 'div[data-testid="toast"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - ButtonToast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(buttonToastStory);
    frame = page.frameLocator(frameLocator);
    buttonToast = new ButtonToast(page, frame.locator(buttonToastLocator), "ButtonToast");
    await page.reload();
    await buttonToast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await buttonToast.isVisible()).toBe(true);
  });

  test("should click the button", async () => {
    await buttonToast.clickButton();
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await buttonToast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await buttonToast.clickCloseButton();
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should handle combination of button and close button clicks", async () => {
    await buttonToast.clickButton();
    await buttonToast.clickCloseButton();
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await buttonToast.hover();
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await buttonToast.clickButton();
    await buttonToast.hover();
    expect(await buttonToast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after button interactions", async () => {
    await buttonToast.clickButton();
    await buttonToast.hover();
    expect(await buttonToast.isVisible()).toBe(true);
  });

  test("should maintain visibility after scrolling", async () => {
    await buttonToast.scrollIntoView();
    expect(await buttonToast.isVisible()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await buttonToast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await buttonToast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await buttonToast.waitForElementToBeVisible();
    expect(await buttonToast.isVisible()).toBe(true);
  });

  test("should handle complex interaction sequences", async () => {
    const content1 = await buttonToast.getContent();
    await buttonToast.clickButton();
    await buttonToast.hover();
    const content2 = await buttonToast.getContent();
    expect(content1).toBe(content2);
  });
});
