import { test, expect, FrameLocator } from "@playwright/test";
import { Tabs } from "../components";
import { tabsStory } from "./utils/url-helper";

let frame: FrameLocator;
let tabs: Tabs;
const tabsLocator = 'ul[role="tablist"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(tabsStory);
    frame = page.frameLocator(frameLocator);
    tabs = new Tabs(page, frame.locator(tabsLocator), "Tabs");
    await page.reload();
    await tabs.waitForElementToBeVisible();
  });

  test("should be able to select a tab", async () => {
    await tabs.selectTab("Second");
    expect(await tabs.isTabSelected("Second")).toBe(true);
  });

  test("should correctly identify selected tab", async () => {
    await tabs.selectTab("Second");
    expect.soft(await tabs.isTabSelected("Second")).toBe(true);
    expect(await tabs.isTabSelected("First")).toBe(false);
  });

  test("should return selected tab name", async () => {
    await tabs.selectTab("Third");
    const selectedTabName = await tabs.getSelectedTabName();
    expect(selectedTabName).toBe("Third");
  });

  test("should handle tab selection changes", async () => {
    await tabs.selectTab("First");
    expect.soft(await tabs.isTabSelected("First")).toBe(true);
    expect.soft(await tabs.getSelectedTabName()).toBe("First");
    expect.soft(await tabs.isTabSelected("Second")).toBe(false);
    await tabs.selectTab("Second");
    expect.soft(await tabs.isTabSelected("Second")).toBe(true);
    expect.soft(await tabs.getSelectedTabName()).toBe("Second");
    expect(await tabs.isTabSelected("First")).toBe(false);
  });

  test("should be enabled by default", async () => {
    expect(await tabs.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await tabs.isVisible()).toBe(true);
  });

  test("should get tab name by index", async () => {
    const tabName = await tabs.getTabNameByIndex(0);
    expect.soft(tabName).toBe("First");
    const tabName2 = await tabs.getTabNameByIndex(1);
    expect.soft(tabName2).toBe("Second");
    const tabName3 = await tabs.getTabNameByIndex(2);
    expect(tabName3).toBe("Third");
  });

  test("should handle selecting the same tab multiple times", async () => {
    await tabs.selectTab("First");
    expect.soft(await tabs.isTabSelected("First")).toBe(true);
    await tabs.selectTab("First");
    expect.soft(await tabs.isTabSelected("First")).toBe(true);
    expect(await tabs.getSelectedTabName()).toBe("First");
  });

  test("should count elements correctly", async () => {
    const count = await tabs.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await tabs.getAttributeValue("class");
    expect(className).toContain("TabList-module");
  });
});
