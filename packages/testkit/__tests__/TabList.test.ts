import { test, expect, FrameLocator } from "@playwright/test";
import { TabList } from "../components";
import { tabsStory } from "./utils/url-helper";

let frame: FrameLocator;
let tabList: TabList;
const tabsLocator = 'ul[role="tablist"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - TabList", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(tabsStory);
    frame = page.frameLocator(frameLocator);
    tabList = new TabList(page, frame.locator(tabsLocator), "Tabs");
    await page.reload();
    await tabList.waitForElementToBeVisible();
  });

  test("should be able to select a tab", async () => {
    await tabList.selectTab("Second");
    expect(await tabList.isTabSelected("Second")).toBe(true);
  });

  test("should correctly identify selected tab", async () => {
    await tabList.selectTab("Second");
    expect.soft(await tabList.isTabSelected("Second")).toBe(true);
    expect(await tabList.isTabSelected("First")).toBe(false);
  });

  test("should return selected tab name", async () => {
    await tabList.selectTab("Third");
    const selectedTabName = await tabList.getSelectedTabName();
    expect(selectedTabName).toBe("Third");
  });

  test("should handle tab selection changes", async () => {
    await tabList.selectTab("First");
    expect.soft(await tabList.isTabSelected("First")).toBe(true);
    expect.soft(await tabList.getSelectedTabName()).toBe("First");
    expect.soft(await tabList.isTabSelected("Second")).toBe(false);
    await tabList.selectTab("Second");
    expect.soft(await tabList.isTabSelected("Second")).toBe(true);
    expect.soft(await tabList.getSelectedTabName()).toBe("Second");
    expect(await tabList.isTabSelected("First")).toBe(false);
  });

  test("should be enabled by default", async () => {
    await expect(tabList.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(tabList.getLocator()).toBeVisible();
  });

  test("should get tab name by index", async () => {
    const tabName = await tabList.getTabNameByIndex(0);
    expect.soft(tabName).toBe("First");
    const tabName2 = await tabList.getTabNameByIndex(1);
    expect.soft(tabName2).toBe("Second");
    const tabName3 = await tabList.getTabNameByIndex(2);
    expect(tabName3).toBe("Third");
  });

  test("should handle selecting the same tab multiple times", async () => {
    await tabList.selectTab("First");
    expect.soft(await tabList.isTabSelected("First")).toBe(true);
    await tabList.selectTab("First");
    expect.soft(await tabList.isTabSelected("First")).toBe(true);
    expect(await tabList.getSelectedTabName()).toBe("First");
  });

  test("should count elements correctly", async () => {
    const count = await tabList.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await tabList.getAttributeValue("class");
    expect(className).toContain("TabList-module");
  });
});
