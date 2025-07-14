import { test, expect, FrameLocator } from "@playwright/test";
import { SplitButton } from "../components/SplitButton";
import { splitButtonStory } from "./utils/url-helper";
import { Menu } from "../components/Menu";

let frame: FrameLocator;
let splitButton: SplitButton;
const splitButtonLocator = 'div[data-testid="split-button"]';
const menuLocator = 'ul[role="menu"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - SplitButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(splitButtonStory);
    frame = page.frameLocator(frameLocator);
    const menu = new Menu(page, frame.locator(menuLocator), "Menu");
    splitButton = new SplitButton(page, frame.locator(splitButtonLocator), "Split Button", menu);
    await page.reload();
    await splitButton.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should click primary button", async () => {
    await splitButton.clickPrimaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should click secondary button", async () => {
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle multiple primary button clicks", async () => {
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle multiple secondary button clicks", async () => {
    await splitButton.clickSecondaryButton();
    await splitButton.clickSecondaryButton();
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should handle alternating button clicks", async () => {
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await splitButton.hover();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should get primary button text", async () => {
    const text = await splitButton.getPrimaryButtonText();
    expect.soft(text).toBe("Button");
    expect.soft(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should maintain enabled state after interactions", async () => {
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await splitButton.clickPrimaryButton();
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await splitButton.scrollIntoView();
    expect(await splitButton.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await splitButton.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await splitButton.getAttributeValue("class");
    expect(className).toContain("SplitButton-module");
  });

  test("should handle waiting for visibility states", async () => {
    await splitButton.waitForElementToBeVisible();
    expect(await splitButton.isVisible()).toBe(true);
  });

  test("should open secondary button menu", async () => {
    if (await splitButton.isMenuExpanded()) {
      await splitButton.clickSecondaryButton();
    }
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isMenuExpanded()).toBe(true);
  });

  test("should close secondary button menu", async () => {
    if (!(await splitButton.isMenuExpanded())) {
      await splitButton.clickSecondaryButton();
    }
    await splitButton.clickSecondaryButton();
    expect(await splitButton.isMenuExpanded()).toBe(false);
  });
});
