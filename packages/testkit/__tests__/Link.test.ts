import { test, expect, FrameLocator } from "@playwright/test";
import { Link } from "../components/Link";
import { linkStory } from "./utils/url-helper";

let frame: FrameLocator;
let link: Link;
const linkLocator = 'a[data-testid="link"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - Link", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(linkStory);
    frame = page.frameLocator(frameLocator);
    link = new Link(page, frame.locator(linkLocator), "Link");
    await page.reload();
    await link.waitForElementToBeVisible();
  });

  test("should be visible by default", async () => {
    await expect(link.getLocator()).toBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should be hoverable", async () => {
    await link.hover();
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should scroll into view when needed", async () => {
    await link.scrollIntoView();
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await link.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await link.getAttributeValue("class");
    expect(className).toContain("Link-module");
  });

  test("should click the link", async () => {
    await link.click();
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should handle multiple link clicks", async () => {
    await link.click();
    await link.click();
    await link.click();
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should get link text", async () => {
    const linkText = await link.getText();
    expect.soft(linkText).toBe("Read more");
    expect.soft(linkText).toBeTruthy();
    expect(linkText.length).toBeGreaterThan(0);
  });

  test("should get link href", async () => {
    const href = await link.getLinkHref();
    expect.soft(href).toBe("https://www.monday.com");
    expect.soft(href).toBeTruthy();
    expect(href.length).toBeGreaterThan(0);
  });

  test("should navigate to the link", async ({ page }) => {
    const newPagePromise = page.waitForEvent("popup");
    await link.click();
    const newPage = await newPagePromise;
    expect(newPage.url()).toContain("https://www.monday.com/");
    await newPage.close();
  });

  test("should handle waiting for visibility states", async () => {
    await link.waitForElementToBeVisible();
    await expect(link.getLocator()).toBeVisible();
  });

  test("should handle complex interaction sequences", async () => {
    const text1 = await link.getText();
    await link.click();
    await link.hover();
    const text2 = await link.getText();
    expect(text1).toBe(text2);
  });

  test("should maintain enabled state after interactions", async () => {
    await link.click();
    await link.hover();
    await expect(link.getLocator()).toBeEnabled();
  });

  test("should maintain visibility after link interactions", async () => {
    await link.click();
    await link.hover();
    await expect(link.getLocator()).toBeVisible();
  });
});
