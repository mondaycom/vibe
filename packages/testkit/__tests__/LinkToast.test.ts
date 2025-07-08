import { test, expect, FrameLocator } from "@playwright/test";
import { LinkToast } from "../components/LinkToast";
import { linkToastStory } from "./utils/url-helper";

let frame: FrameLocator;
let linkToast: LinkToast;
const linkToastLocator = 'div[data-testid="toast"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - LinkToast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(linkToastStory);
    frame = page.frameLocator(frameLocator);
    linkToast = new LinkToast(page, frame.locator(linkToastLocator), "Link Toast");
    await page.reload();
    await linkToast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should click the link", async () => {
    await linkToast.clickLink();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle multiple link clicks", async () => {
    await linkToast.clickLink();
    await linkToast.clickLink();
    await linkToast.clickLink();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await linkToast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should get link text", async () => {
    const linkText = await linkToast.getLinkText();
    expect.soft(linkText).toBe("Link to action");
    expect.soft(linkText).toBeTruthy();
    expect(linkText.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await linkToast.clickCloseButton();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should handle combination of link and close button clicks", async () => {
    await linkToast.clickLink();
    await linkToast.clickCloseButton();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await linkToast.hover();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await linkToast.clickLink();
    await linkToast.hover();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after link interactions", async () => {
    await linkToast.clickLink();
    await linkToast.hover();
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await linkToast.scrollIntoView();
    expect(await linkToast.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await linkToast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await linkToast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await linkToast.waitForElementToBeVisible();
    expect(await linkToast.isVisible()).toBe(true);
  });

  test("should handle complex interaction sequences", async () => {
    const content1 = await linkToast.getContent();
    await linkToast.clickLink();
    await linkToast.hover();
    const content2 = await linkToast.getContent();
    expect(content1).toBe(content2);
  });

  test("should navigate to the link", async ({ page }) => {
    const newPagePromise = page.waitForEvent("popup");
    await linkToast.clickLink();
    const newPage = await newPagePromise;
    expect(newPage.url()).toContain("https://monday.com/");
    await newPage.close();
  });
});
