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
    await expect(splitButton.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(splitButton.getLocator()).toBeVisible();
  });

  test("should click primary button", async () => {
    await splitButton.clickPrimaryButton();
    await expect(splitButton.getLocator()).toBeEnabled();
  });

  test("should handle multiple primary button clicks", async () => {
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();
    await splitButton.clickPrimaryButton();
    await expect(splitButton.getLocator()).toBeEnabled();
  });

  test("should be hoverable", async () => {
    await splitButton.hover();
    await expect(splitButton.getLocator()).toBeEnabled();
  });

  test("should get primary button text", async () => {
    const text = await splitButton.getPrimaryButtonText();
    expect.soft(text).toBe("Button");
    expect.soft(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should scroll into view when needed", async () => {
    await splitButton.scrollIntoView();
    await expect(splitButton.getLocator()).toBeEnabled();
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
    await expect(splitButton.getLocator()).toBeVisible();
  });

  test("should open secondary button menu", async () => {
    await splitButton.openMenu();
    expect(await splitButton.isMenuExpanded()).toBe(true);
  });

  test("should close secondary button menu", async () => {
    await splitButton.closeMenu();
    expect(await splitButton.isMenuExpanded()).toBe(false);
  });
});
