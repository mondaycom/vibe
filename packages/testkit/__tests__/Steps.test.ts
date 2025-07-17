import { test, expect, FrameLocator } from "@playwright/test";
import { Steps } from "../components";
import { stepsStory } from "./utils/url-helper";

let frame: FrameLocator;
let steps: Steps;
const stepsLocator = 'div[data-testid="steps"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - Steps", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(stepsStory);
    frame = page.frameLocator(frameLocator);
    steps = new Steps(page, frame.locator(stepsLocator), "Steps");
    await page.reload();
    await steps.waitForElementToBeVisible();
  });

  test("should be clickable when back button is enabled", async () => {
    await steps.goToPreviousStep();
    expect(await steps.isBackButtonEnabled()).toBe(true);
  });

  test("should be clickable when next button is enabled", async () => {
    await steps.goToNextStep();
    expect(await steps.isForwardButtonEnabled()).toBe(true);
  });

  test("should be able to click step by index", async () => {
    await steps.clickStepDot(1);
    expect(await steps.isStepDotActive(1)).toBe(true);
  });

  test("should be able to navigate to first step", async () => {
    await steps.navigateToBeginning();
    expect(await steps.isStepDotActive(0)).toBe(true);
  });

  test("should be able to navigate to last step", async () => {
    await steps.navigateToEnd();
    expect(await steps.isStepDotActive(4)).toBe(true);
  });

  test("should handle step navigation correctly", async () => {
    await steps.clickStepDot(0);
    expect(await steps.isStepDotActive(0)).toBe(true);
    await steps.clickStepDot(1);
    expect(await steps.isStepDotActive(1)).toBe(true);
    await steps.clickStepDot(2);
    expect(await steps.isStepDotActive(2)).toBe(true);
    await steps.clickStepDot(3);
    expect(await steps.isStepDotActive(3)).toBe(true);
    await steps.clickStepDot(4);
    expect(await steps.isStepDotActive(4)).toBe(true);
  });

  test("should handle back and next button navigation", async () => {
    await steps.navigateToBeginning();
    await steps.goToNextStep();
    await steps.goToPreviousStep();
    expect(await steps.isStepDotActive(0)).toBe(true);
  });

  test("Steps should be enabled by default", async () => {
    await expect(steps.getLocator()).toBeEnabled();
  });

  test("Steps should be visible by default", async () => {
    await expect(steps.getLocator()).toBeVisible();
  });

  test("should handle go to first and last step operations", async () => {
    await steps.navigateToEnd();
    expect(await steps.isStepDotActive(4)).toBe(true);
    await steps.navigateToBeginning();
    expect(await steps.isStepDotActive(0)).toBe(true);
  });

  test("should correctly report active step index", async () => {
    await steps.clickStepDot(1);
    const activeIndex = await steps.getActiveStepDotIndex();
    expect(activeIndex).toBe(1);
  });

  test("should correctly report active step index after each step change", async () => {
    await steps.clickStepDot(1);
    let activeIndex = await steps.getActiveStepDotIndex();
    expect.soft(activeIndex).toBe(1);
    await steps.clickStepDot(2);
    activeIndex = await steps.getActiveStepDotIndex();
    expect.soft(activeIndex).toBe(2);
    await steps.clickStepDot(3);
    activeIndex = await steps.getActiveStepDotIndex();
    expect.soft(activeIndex).toBe(3);
    await steps.clickStepDot(4);
    activeIndex = await steps.getActiveStepDotIndex();
    expect(activeIndex).toBe(4);
  });

  test("should count elements correctly", async () => {
    const count = await steps.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await steps.getAttributeValue("class");
    expect(className).toContain("Steps-module");
  });

  test("should wait for steps to load", async () => {
    await steps.waitForStepsToLoad();
    await expect(steps.getLocator()).toBeVisible();
  });

  test("should get total steps count", async () => {
    const totalStepsCount = await steps.getTotalStepsCount();
    expect(totalStepsCount).toBe(5);
  });

  test("should get step by index", async () => {
    const step = await steps.getStepByIndex(1);
    await expect(step.getLocator()).toBeVisible();
  });

  test("should get step dots", async () => {
    const stepDots = await steps.getStepDots();
    expect(stepDots.length).toBe(5);
  });

  test("should get active step dot index", async () => {
    const activeStepDotIndex = await steps.getActiveStepDotIndex();
    expect(activeStepDotIndex).toBe(2);
  });

  test("should check if step dot is active", async () => {
    const isStepDotActive = await steps.isStepDotActive(2);
    expect(isStepDotActive).toBe(true);
  });

  test("should check if back button is enabled", async () => {
    const isBackButtonEnabled = await steps.isBackButtonEnabled();
    expect(isBackButtonEnabled).toBe(true);
  });

  test("should check if forward button is enabled", async () => {
    const isForwardButtonEnabled = await steps.isForwardButtonEnabled();
    expect(isForwardButtonEnabled).toBe(true);
  });

  test("should check if back button is visible", async () => {
    const isBackButtonVisible = await steps.isBackButtonVisible();
    expect(isBackButtonVisible).toBe(true);
  });

  test("should check if forward button is visible", async () => {
    const isForwardButtonVisible = await steps.isForwardButtonVisible();
    expect(isForwardButtonVisible).toBe(true);
  });

  test("should click step dot by index", async () => {
    await steps.clickStepDot(2);
    expect(await steps.isStepDotActive(2)).toBe(true);
  });
});
