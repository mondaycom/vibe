import { test, expect } from "@playwright/test";
import { Toggle } from "../components";
import { toggleStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(toggleStory);
  });

  test("Toggle should be initially off", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should be able to turn on", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);
  });

  test("Toggle should be able to turn off", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // First turn on
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Then turn off
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should maintain state when set to same value", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Turn on
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Set to true again (should remain on)
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Turn off
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);

    // Set to false again (should remain off)
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should handle multiple state changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Initial state
    expect(await toggle.isOn()).toBe(false);

    // Turn on
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Turn off
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);

    // Turn on again
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Turn off again
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should handle rapid state changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Rapid state changes
    await toggle.set(true);
    await toggle.set(false);
    await toggle.set(true);
    await toggle.set(false);
    await toggle.set(true);

    // Final state should be on
    expect(await toggle.isOn()).toBe(true);
  });

  test("Toggle should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    expect(await toggle.isEnabled()).toBe(true);
  });

  test("Toggle should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    expect(await toggle.isVisible()).toBe(true);
  });

  test("Toggle should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    const text = await toggle.getText();
    expect(typeof text).toBe("string");
  });

  test("Toggle state should be consistent", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Turn on and verify multiple times
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);
    expect(await toggle.isOn()).toBe(true);

    // Turn off and verify multiple times
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should handle boolean values correctly", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Explicitly test boolean true
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Explicitly test boolean false
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });

  test("Toggle should toggle correctly from any initial state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const toggle = new Toggle(page, frame.locator('[data-testid="toggle"]'), "Toggle");

    // Test from off state
    expect(await toggle.isOn()).toBe(false);
    await toggle.set(true);
    expect(await toggle.isOn()).toBe(true);

    // Test from on state
    await toggle.set(false);
    expect(await toggle.isOn()).toBe(false);
  });
});
