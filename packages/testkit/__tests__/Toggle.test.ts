import { test, expect, FrameLocator } from "@playwright/test";
import { Toggle } from "../components";
import { toggleStory } from "./utils/url-helper";

let frame: FrameLocator;
let toggle: Toggle;
const toggleLocator = ".Toggle-module_wrapper";
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(toggleStory);
    frame = page.frameLocator(frameLocator);
    toggle = new Toggle(page, frame.locator(toggleLocator), "Toggle");
    await page.reload();
    await toggle.waitForElementToBeVisible();
  });

  test("should be initially on", async () => {
    expect(await toggle.isOn()).toBe(true);
  });

  test("should be able to turn on", async () => {
    await toggle.set(false);
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);
  });

  test("should be able to turn off", async () => {
    await toggle.set(false);
    expect.soft(await toggle.isOn()).toBe(false);
    await toggle.set(true);
    expect.soft(await toggle.isOn()).toBe(true);
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("should maintain state when set to same value", async () => {
    await toggle.set(true);
    expect.soft(await toggle.isOn()).toBe(true);
    await toggle.set(true);
    expect.soft(await toggle.isOn()).toBe(true);
    await toggle.set(false);
    expect.soft(await toggle.isOn()).toBe(false);
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("should be enabled by default", async () => {
    await expect(toggle.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(toggle.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await toggle.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await toggle.getAttributeValue("class");
    expect(className).toContain("Toggle-module");
  });
});
