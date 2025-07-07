import { test, expect } from "@playwright/test";
import { Steps } from "../components";
import { stepsStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Steps", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(stepsStory);
  });

  test("Steps should be able to click back button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    await steps.clickBackButton();
    // Test passes if no error is thrown
  });

  test("Steps should be able to click next button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    await steps.clickNextButton();
    // Test passes if no error is thrown
  });

  test("Steps should return back button enabled state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const isEnabled = await steps.isBackButtonEnabled();
    expect(typeof isEnabled).toBe("boolean");
  });

  test("Steps should return next button enabled state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const isEnabled = await steps.isNextButtonEnabled();
    expect(typeof isEnabled).toBe("boolean");
  });

  test("Steps should return back button visible state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const isVisible = await steps.isBackButtonVisible();
    expect(typeof isVisible).toBe("boolean");
  });

  test("Steps should return next button visible state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const isVisible = await steps.isNextButtonVisible();
    expect(typeof isVisible).toBe("boolean");
  });

  test("Steps should be able to click step by index", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    await steps.clickStepByIndex(0);
    expect(await steps.isStepActive(0)).toBe(true);
  });

  test("Steps should return active step index", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const activeIndex = await steps.getActiveStepIndex();
    expect(typeof activeIndex).toBe("number");
    expect(activeIndex).toBeGreaterThanOrEqual(0);
  });

  test("Steps should return number of steps", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const numberOfSteps = await steps.getNumberOfSteps();
    expect(typeof numberOfSteps).toBe("number");
    expect(numberOfSteps).toBeGreaterThan(0);
  });

  test("Steps should correctly identify active step", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    // Click on first step
    await steps.clickStepByIndex(0);
    expect(await steps.isStepActive(0)).toBe(true);
  });

  test("Steps should be able to go to first step", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    await steps.goToFirstStep();
    expect(await steps.isStepActive(0)).toBe(true);
  });

  test("Steps should be able to go to last step", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    await steps.goToLastStep();
    const numberOfSteps = await steps.getNumberOfSteps();
    expect(await steps.isStepActive(numberOfSteps - 1)).toBe(true);
  });

  test("Steps should handle step navigation correctly", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const numberOfSteps = await steps.getNumberOfSteps();

    // Navigate through all steps
    for (let i = 0; i < numberOfSteps; i++) {
      await steps.clickStepByIndex(i);
      expect(await steps.isStepActive(i)).toBe(true);
    }
  });

  test("Steps should maintain single active step", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    // Click on first step
    await steps.clickStepByIndex(0);
    expect(await steps.isStepActive(0)).toBe(true);

    // Click on second step
    await steps.clickStepByIndex(1);
    expect(await steps.isStepActive(1)).toBe(true);

    // First step should no longer be active
    expect(await steps.isStepActive(0)).toBe(false);
  });

  test("Steps should handle back and next button navigation", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    // Go to first step
    await steps.goToFirstStep();

    // Click next button
    await steps.clickNextButton();

    // Click back button
    await steps.clickBackButton();

    // Should be back to first step
    expect(await steps.isStepActive(0)).toBe(true);
  });

  test("Steps should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    expect(await steps.isEnabled()).toBe(true);
  });

  test("Steps should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    expect(await steps.isVisible()).toBe(true);
  });

  test("Steps should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const text = await steps.getText();
    expect(typeof text).toBe("string");
  });

  test("Steps should handle rapid step changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const numberOfSteps = await steps.getNumberOfSteps();

    // Rapidly click through steps
    for (let i = 0; i < numberOfSteps; i++) {
      await steps.clickStepByIndex(i);
    }

    // Last step should be active
    expect(await steps.isStepActive(numberOfSteps - 1)).toBe(true);
  });

  test("Steps should handle go to first and last step operations", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    const numberOfSteps = await steps.getNumberOfSteps();

    // Go to last step
    await steps.goToLastStep();
    expect(await steps.isStepActive(numberOfSteps - 1)).toBe(true);

    // Go to first step
    await steps.goToFirstStep();
    expect(await steps.isStepActive(0)).toBe(true);
  });

  test("Steps should correctly report active step index", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const steps = new Steps(page, frame.locator('[data-testid="steps"]'), "Steps");

    // Click on step 2 (index 1)
    await steps.clickStepByIndex(1);

    const activeIndex = await steps.getActiveStepIndex();
    expect(activeIndex).toBe(1);
  });
});
