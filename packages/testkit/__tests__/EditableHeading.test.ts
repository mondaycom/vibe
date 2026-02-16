/* eslint-disable playwright/no-wait-for-selector */
import { test, expect, FrameLocator } from "@playwright/test";
import { EditableHeading } from "../components";
import { editableHeadingStory } from "./utils/url-helper";
let frame: FrameLocator;
let editableHeading: EditableHeading;
const editableHeadingLocator = '[data-testid="editable-heading"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - EditableHeading", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(editableHeadingStory);
    frame = page.frameLocator(frameLocator);
    editableHeading = new EditableHeading(page, frame.locator(editableHeadingLocator), "EditableHeading");
    await editableHeading.waitForElementToBeVisible();
  });

  test("should be visible by default", async () => {
    await expect(editableHeading.getLocator()).toBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(editableHeading.getLocator()).toBeEnabled();
  });

  test("should enter edit mode when clicked", async () => {
    await editableHeading.enterEditMode();
    expect(await editableHeading.isInEditMode()).toBe(true);
  });

  test("should exit edit mode with Enter key", async () => {
    await editableHeading.enterEditMode();
    expect.soft(await editableHeading.isInEditMode()).toBe(true);
    await editableHeading.exitEditModeWithEnter();
    expect(await editableHeading.isInEditMode()).toBe(false);
  });

  test("should exit edit mode with Escape key", async () => {
    await editableHeading.enterEditMode();
    expect.soft(await editableHeading.isInEditMode()).toBe(true);
    await editableHeading.exitEditModeWithEscape();
    expect(await editableHeading.isInEditMode()).toBe(false);
  });

  test("should exit edit mode with blur", async () => {
    await editableHeading.enterEditMode();
    expect.soft(await editableHeading.isInEditMode()).toBe(true);
    await editableHeading.exitEditModeWithBlur();
    expect(await editableHeading.isInEditMode()).toBe(false);
  });

  test("should count elements correctly", async () => {
    const count = await editableHeading.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await editableHeading.getAttributeValue("data-testid");
    expect(attributeValue).toContain("editable-heading");
  });
});
