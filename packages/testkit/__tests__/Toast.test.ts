import { test, expect, FrameLocator } from "@playwright/test";
import { linkToastStory, buttonToastStory, loadingToastStory } from "./utils/url-helper";
import { Toast } from "../components/Toast";

const toastLocator = 'div[data-testid="toast"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Button Toast", () => {
  let frame: FrameLocator;
  let toast: Toast;

  test.beforeEach(async ({ page }) => {
    await page.goto(buttonToastStory);
    frame = page.frameLocator(frameLocator);
    toast = new Toast(page, frame.locator(toastLocator), "Toast");
    await page.reload();
    await toast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await toast.isVisible()).toBe(true);
  });

  test("should click the button", async () => {
    await toast.clickButton();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await toast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should get button text", async () => {
    const buttonText = await toast.getButtonText();
    expect.soft(buttonText).toBe("Button");
    expect.soft(buttonText).toBeTruthy();
    expect(buttonText.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await toast.close();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should handle combination of button and close button clicks", async () => {
    await toast.clickButton();
    await toast.close();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await toast.hover();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await toast.clickButton();
    await toast.hover();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after button interactions", async () => {
    await toast.clickButton();
    await toast.hover();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should maintain visibility after scrolling", async () => {
    await toast.scrollIntoView();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await toast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await toast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await toast.waitForElementToBeVisible();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should handle complex interaction sequences", async () => {
    const content1 = await toast.getContent();
    await toast.clickButton();
    await toast.hover();
    const content2 = await toast.getContent();
    expect(content1).toBe(content2);
  });

  test("should have close button", async () => {
    expect(await toast.hasCloseButton()).toBe(true);
  });

  test("should have type", async () => {
    const type = await toast.getType();
    expect(type).toBe("normal");
  });
});

test.describe("Storybook - Unit Tests - Link Toast", () => {
  let frame: FrameLocator;
  let toast: Toast;

  test.beforeEach(async ({ page }) => {
    await page.goto(linkToastStory);
    frame = page.frameLocator(frameLocator);
    toast = new Toast(page, frame.locator(toastLocator), "Toast");
    await page.reload();
    await toast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await toast.isVisible()).toBe(true);
  });

  test("should click the link", async () => {
    await toast.clickLink();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should handle multiple link clicks", async () => {
    await toast.clickLink();
    await toast.clickLink();
    await toast.clickLink();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await toast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should get link text", async () => {
    const linkText = await toast.getLinkText();
    expect.soft(linkText).toBe("Link to action");
    expect.soft(linkText).toBeTruthy();
    expect(linkText.length).toBeGreaterThan(0);
  });

  test("should get link href", async () => {
    const linkHref = await toast.getLinkHref();
    expect.soft(linkHref).toBe("https://monday.com");
    expect.soft(linkHref).toBeTruthy();
    expect(linkHref.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await toast.close();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should handle combination of link and close button clicks", async () => {
    await toast.clickLink();
    await toast.close();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await toast.hover();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await toast.clickLink();
    await toast.hover();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after link interactions", async () => {
    await toast.clickLink();
    await toast.hover();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await toast.scrollIntoView();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await toast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await toast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await toast.waitForElementToBeVisible();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should handle complex interaction sequences", async () => {
    const content1 = await toast.getContent();
    await toast.clickLink();
    await toast.hover();
    const content2 = await toast.getContent();
    expect(content1).toBe(content2);
  });

  test("should navigate to the link", async ({ page }) => {
    const newPagePromise = page.waitForEvent("popup");
    await toast.clickLink();
    const newPage = await newPagePromise;
    expect(newPage.url()).toContain("https://monday.com/");
    await newPage.close();
  });

  test("should have close button", async () => {
    expect(await toast.hasCloseButton()).toBe(true);
  });

  test("should have type", async () => {
    const type = await toast.getType();
    expect(type).toBe("normal");
  });
});

test.describe("Storybook - Unit Tests - Loading Toast", () => {
  let frame: FrameLocator;
  let toast: Toast;

  test.beforeEach(async ({ page }) => {
    await page.goto(loadingToastStory);
    frame = page.frameLocator(frameLocator);
    toast = new Toast(page, frame.locator(toastLocator), "Toast");
    await page.reload();
    await toast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await toast.isVisible()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await toast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await toast.close();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await toast.hover();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await toast.hover();
    await toast.click();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await toast.hover();
    await toast.click();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await toast.scrollIntoView();
    expect(await toast.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await toast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await toast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await toast.waitForElementToBeVisible();
    expect(await toast.isVisible()).toBe(true);
  });

  test("should have close button", async () => {
    expect(await toast.hasCloseButton()).toBe(true);
  });

  test("should have type", async () => {
    const type = await toast.getType();
    expect(type).toBe("normal");
  });

  test("should be loading", async () => {
    expect(await toast.isLoading()).toBe(true);
  });
});
