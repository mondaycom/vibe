import { test, expect, FrameLocator } from "@playwright/test";
import { Checkbox } from "../components";
import { checkboxStory } from "./utils/url-helper";

let frame: FrameLocator;
let checkbox: Checkbox;
const checkboxLocator = 'label[data-testid="checkbox"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Checkbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(checkboxStory);
    frame = page.frameLocator(frameLocator);
    checkbox = new Checkbox(page, frame.locator(checkboxLocator), "Checkbox");
    await page.reload();
    await checkbox.waitForElementToBeVisible();
  });

  test("Checkbox should be initially checked", async () => {
    await expect(checkbox.getLocator()).toBeChecked();
  });

  test("Checkbox should be able to be unchecked", async () => {
    await checkbox.setUnchecked();
    await expect(checkbox.getLocator()).not.toBeChecked();
  });

  test("Checkbox should be able to be checked after being unchecked", async () => {
    await checkbox.setUnchecked();
    await expect.soft(checkbox.getLocator()).not.toBeChecked();
    await checkbox.setChecked();
    await expect(checkbox.getLocator()).toBeChecked();
  });

  test("Checkbox should return its label text", async () => {
    const label = await checkbox.getLabel();
    expect.soft(label).toBe("Option");
    expect.soft(label).toBeTruthy();
    expect(typeof label).toBe("string");
  });

  test("Checkbox should toggle correctly with multiple check/uncheck operations", async () => {
    await expect.soft(checkbox.getLocator()).toBeChecked();
    await checkbox.setUnchecked();
    await expect.soft(checkbox.getLocator()).not.toBeChecked();
    await checkbox.setChecked();
    await expect.soft(checkbox.getLocator()).toBeChecked();
    await checkbox.setUnchecked();
    await expect(checkbox.getLocator()).not.toBeChecked();
  });

  test("Checkbox should be enabled by default", async () => {
    await expect(checkbox.getLocator()).toBeEnabled();
  });

  test("Checkbox should be visible by default", async () => {
    await expect(checkbox.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await checkbox.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await checkbox.getAttributeValue("class");
    expect(className).toContain("Checkbox-module");
  });
});
