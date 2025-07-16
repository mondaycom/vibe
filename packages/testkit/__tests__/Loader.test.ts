import { test, expect, FrameLocator } from "@playwright/test";
import { Loader } from "../components/Loader";
import { loaderStory } from "./utils/url-helper";

let frame: FrameLocator;
let loader: Loader;
const loaderLocator = 'div[data-testid="loader"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Loader", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(loaderStory);
    frame = page.frameLocator(frameLocator);
    loader = new Loader(page, frame.locator(loaderLocator), "Loader");
    await page.reload();
    await loader.waitForElementToBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(loader.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(loader.getLocator()).toBeVisible();
  });

  test("should be hoverable", async () => {
    await loader.hover();
    await expect(loader.getLocator()).toBeEnabled();
  });

  test("should scroll into view when needed", async () => {
    await loader.scrollIntoView();
    await expect(loader.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await loader.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await loader.getAttributeValue("class");
    expect(className).toContain("Loader-module");
  });

  test("should handle waiting for visibility states", async () => {
    await loader.waitForElementToBeVisible();
    await expect(loader.getLocator()).toBeVisible();
  });
});
