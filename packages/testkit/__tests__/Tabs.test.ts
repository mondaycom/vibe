import { test, expect } from "@playwright/test";
import { Tabs } from "../components";
import { tabsStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(tabsStory);
  });

  test("Tabs should be able to select a tab", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    await tabs.selectTab("Tab 1");
    expect(await tabs.isTabSelected("Tab 1")).toBe(true);
  });

  test("Tabs should correctly identify selected tab", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Select a tab
    await tabs.selectTab("Tab 2");
    expect(await tabs.isTabSelected("Tab 2")).toBe(true);

    // Other tabs should not be selected
    expect(await tabs.isTabSelected("Tab 1")).toBe(false);
  });

  test("Tabs should return selected tab name", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    await tabs.selectTab("Tab 3");
    const selectedTabName = await tabs.getSelectedTabName();
    expect(selectedTabName).toBe("Tab 3");
  });

  test("Tabs should handle tab selection changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Select first tab
    await tabs.selectTab("Tab 1");
    expect(await tabs.isTabSelected("Tab 1")).toBe(true);
    expect(await tabs.getSelectedTabName()).toBe("Tab 1");

    // Select second tab
    await tabs.selectTab("Tab 2");
    expect(await tabs.isTabSelected("Tab 2")).toBe(true);
    expect(await tabs.getSelectedTabName()).toBe("Tab 2");

    // First tab should no longer be selected
    expect(await tabs.isTabSelected("Tab 1")).toBe(false);
  });

  test("Tabs should handle multiple tab selections", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    const tabNames = ["Tab 1", "Tab 2", "Tab 3"];

    for (const tabName of tabNames) {
      await tabs.selectTab(tabName);
      expect(await tabs.isTabSelected(tabName)).toBe(true);
      expect(await tabs.getSelectedTabName()).toBe(tabName);
    }
  });

  test("Tabs should maintain single selection", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Select first tab
    await tabs.selectTab("Tab 1");
    expect(await tabs.isTabSelected("Tab 1")).toBe(true);

    // Select second tab
    await tabs.selectTab("Tab 2");
    expect(await tabs.isTabSelected("Tab 2")).toBe(true);

    // First tab should no longer be selected
    expect(await tabs.isTabSelected("Tab 1")).toBe(false);
  });

  test("Tabs should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    expect(await tabs.isEnabled()).toBe(true);
  });

  test("Tabs should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    expect(await tabs.isVisible()).toBe(true);
  });

  test("Tabs should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    const text = await tabs.getText();
    expect(typeof text).toBe("string");
  });

  test("Tabs should handle rapid tab changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Rapidly change tabs
    await tabs.selectTab("Tab 1");
    await tabs.selectTab("Tab 2");
    await tabs.selectTab("Tab 3");

    // Final tab should be selected
    expect(await tabs.getSelectedTabName()).toBe("Tab 3");
  });

  test("Tabs should handle tab selection sequence", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Test sequence of tab selections
    await tabs.selectTab("Tab 1");
    expect(await tabs.getSelectedTabName()).toBe("Tab 1");

    await tabs.selectTab("Tab 2");
    expect(await tabs.getSelectedTabName()).toBe("Tab 2");

    await tabs.selectTab("Tab 3");
    expect(await tabs.getSelectedTabName()).toBe("Tab 3");

    // Go back to first tab
    await tabs.selectTab("Tab 1");
    expect(await tabs.getSelectedTabName()).toBe("Tab 1");
  });

  test("Tabs should handle selecting the same tab multiple times", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const tabs = new Tabs(page, frame.locator('[data-testid="tabs"]'), "Tabs");

    // Select tab multiple times
    await tabs.selectTab("Tab 1");
    expect(await tabs.isTabSelected("Tab 1")).toBe(true);

    await tabs.selectTab("Tab 1");
    expect(await tabs.isTabSelected("Tab 1")).toBe(true);

    expect(await tabs.getSelectedTabName()).toBe("Tab 1");
  });
});
