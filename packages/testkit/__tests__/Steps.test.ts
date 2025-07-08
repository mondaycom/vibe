import { test, expect, FrameLocator } from "@playwright/test";
import { Steps } from "../components";
import { stepsStory } from "./utils/url-helper";

let frame: FrameLocator;
let steps: Steps;
const stepsLocator = 'div[data-testid="steps"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Steps", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(stepsStory);
    frame = page.frameLocator(frameLocator);
    steps = new Steps(page, frame.locator(stepsLocator), "Steps");
    await page.reload();
    await steps.waitForElementToBeVisible();
  });

  test("should be clickable when back button is enabled", async () => {
    await steps.clickBackButton();
    expect(await steps.isEnabled()).toBe(true);
  });

  test("should be clickable when next button is enabled", async () => {
    await steps.clickNextButton();
    expect(await steps.isEnabled()).toBe(true);
  });

  test("should be able to click step by index", async () => {
    await steps.clickStepByIndex(1);
    expect(await steps.isStepActiveByIndex(1)).toBe(true);
  });

  test("should be able to go to first step", async () => {
    await steps.goToFirstStep();
    expect(await steps.isStepActiveByIndex(0)).toBe(true);
  });

  test("should be able to go to last step", async () => {
    await steps.goToLastStep();
    expect(await steps.isStepActiveByIndex(4)).toBe(true);
  });

  test("should handle step navigation correctly", async () => {
    await steps.clickStepByIndex(0);
    expect(await steps.isStepActiveByIndex(0)).toBe(true);
    await steps.clickStepByIndex(1);
    expect(await steps.isStepActiveByIndex(1)).toBe(true);
    await steps.clickStepByIndex(2);
    expect(await steps.isStepActiveByIndex(2)).toBe(true);
    await steps.clickStepByIndex(3);
    expect(await steps.isStepActiveByIndex(3)).toBe(true);
    await steps.clickStepByIndex(4);
    expect(await steps.isStepActiveByIndex(4)).toBe(true);
  });

  test("should handle back and next button navigation", async () => {
    await steps.goToFirstStep();
    await steps.clickNextButton();
    await steps.clickBackButton();
    expect(await steps.isStepActiveByIndex(0)).toBe(true);
  });

  test("Steps should be enabled by default", async () => {
    expect(await steps.isEnabled()).toBe(true);
  });

  test("Steps should be visible by default", async () => {
    expect(await steps.isVisible()).toBe(true);
  });

  test("should handle go to first and last step operations", async () => {
    await steps.goToLastStep();
    expect(await steps.isStepActiveByIndex(4)).toBe(true);
    await steps.goToFirstStep();
    expect(await steps.isStepActiveByIndex(0)).toBe(true);
  });

  test("should correctly report active step index", async () => {
    await steps.clickStepByIndex(1);
    const activeIndex = await steps.getActiveStepIndex();
    expect(activeIndex).toBe(1);
  });

  test("should correctly report active step index after each step change", async () => {
    await steps.clickStepByIndex(1);
    let activeIndex = await steps.getActiveStepIndex();
    expect.soft(activeIndex).toBe(1);
    await steps.clickStepByIndex(2);
    activeIndex = await steps.getActiveStepIndex();
    expect.soft(activeIndex).toBe(2);
    await steps.clickStepByIndex(3);
    activeIndex = await steps.getActiveStepIndex();
    expect.soft(activeIndex).toBe(3);
    await steps.clickStepByIndex(4);
    activeIndex = await steps.getActiveStepIndex();
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
});
