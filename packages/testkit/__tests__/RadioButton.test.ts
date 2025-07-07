import { test, expect } from "@playwright/test";
import { RadioButton } from "../components";
import { radioButtonStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - RadioButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(radioButtonStory);
  });

  test("RadioButton should be initially unchecked", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    expect(await radioButton.isChecked()).toBe(false);
  });

  test("RadioButton should be able to be checked", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    await radioButton.check();
    expect(await radioButton.isChecked()).toBe(true);
  });

  test("RadioButton should be able to be unchecked", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    await radioButton.check();
    expect(await radioButton.isChecked()).toBe(true);

    await radioButton.uncheck();
    expect(await radioButton.isChecked()).toBe(false);
  });

  test("RadioButton should return its label text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    const label = await radioButton.getLabel();
    expect(label).toBeTruthy();
    expect(typeof label).toBe("string");
  });

  test("RadioButton should toggle correctly with multiple check/uncheck operations", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    // Initial state
    expect(await radioButton.isChecked()).toBe(false);

    // Check
    await radioButton.check();
    expect(await radioButton.isChecked()).toBe(true);

    // Uncheck
    await radioButton.uncheck();
    expect(await radioButton.isChecked()).toBe(false);

    // Check again
    await radioButton.check();
    expect(await radioButton.isChecked()).toBe(true);
  });

  test("RadioButton should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    expect(await radioButton.isEnabled()).toBe(true);
  });

  test("RadioButton should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    expect(await radioButton.isVisible()).toBe(true);
  });

  test("RadioButton should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    const text = await radioButton.getText();
    expect(text).toBeTruthy();
    expect(typeof text).toBe("string");
  });

  test("RadioButton label should be consistent", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    const label1 = await radioButton.getLabel();
    const label2 = await radioButton.getLabel();

    expect(label1).toBe(label2);
  });

  test("RadioButton should maintain state correctly", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    // Check state
    await radioButton.check();
    expect(await radioButton.isChecked()).toBe(true);

    // Verify state is maintained
    expect(await radioButton.isChecked()).toBe(true);

    // Uncheck and verify
    await radioButton.uncheck();
    expect(await radioButton.isChecked()).toBe(false);
    expect(await radioButton.isChecked()).toBe(false);
  });

  test("RadioButton should handle rapid check/uncheck operations", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    // Rapid operations
    await radioButton.check();
    await radioButton.uncheck();
    await radioButton.check();
    await radioButton.uncheck();
    await radioButton.check();

    // Final state should be checked
    expect(await radioButton.isChecked()).toBe(true);
  });

  test("RadioButton should have non-empty label", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const radioButton = new RadioButton(page, frame.locator('[data-testid="radio-button"]'), "RadioButton");

    const label = await radioButton.getLabel();
    expect(label.length).toBeGreaterThan(0);
  });
});
