import { test, expect, FrameLocator } from "@playwright/test";
import { LoadingToast } from "../components/LoadingToast";
import { loadingToastStory } from "./utils/url-helper";

let frame: FrameLocator;
let loadingToast: LoadingToast;
const loadingToastLocator = 'div[data-testid="toast"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - LoadingToast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(loadingToastStory);
    frame = page.frameLocator(frameLocator);
    loadingToast = new LoadingToast(page, frame.locator(loadingToastLocator), "Loading Toast");
    await page.reload();
    await loadingToast.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    expect(await loadingToast.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await loadingToast.isVisible()).toBe(true);
  });

  test("should get toast content", async () => {
    const content = await loadingToast.getContent();
    expect.soft(content).toBe("General message toast");
    expect.soft(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });

  test("should click close button", async () => {
    await loadingToast.clickCloseButton();
    expect(await loadingToast.isEnabled()).toBe(true);
  });

  test("should be hoverable", async () => {
    await loadingToast.hover();
    expect(await loadingToast.isEnabled()).toBe(true);
  });

  test("should maintain enabled state after interactions", async () => {
    await loadingToast.hover();
    await loadingToast.click();
    expect(await loadingToast.isEnabled()).toBe(true);
  });

  test("should maintain visibility after interactions", async () => {
    await loadingToast.hover();
    await loadingToast.click();
    expect(await loadingToast.isVisible()).toBe(true);
  });

  test("should scroll into view when needed", async () => {
    await loadingToast.scrollIntoView();
    expect(await loadingToast.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await loadingToast.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await loadingToast.getAttributeValue("class");
    expect(className).toContain("Toast-module");
  });

  test("should handle waiting for visibility states", async () => {
    await loadingToast.waitForElementToBeVisible();
    expect(await loadingToast.isVisible()).toBe(true);
  });
});
