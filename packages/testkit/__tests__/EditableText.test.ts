import { test, expect, FrameLocator } from "@playwright/test";
import { EditableText } from "../components";
import { editableTextStory } from "./utils/url-helper";
let frame: FrameLocator;
let editableText: EditableText;
const editableTextLocator = '[data-testid="editable-text"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - EditableText", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(editableTextStory);
    frame = page.frameLocator(frameLocator);
    editableText = new EditableText(page, frame.locator(editableTextLocator), "EditableText");
    await editableText.waitForElementToBeVisible();
  });

  test("should be visible by default", async () => {
    await expect(editableText.getLocator()).toBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(editableText.getLocator()).toBeEnabled();
  });

  test("should enter edit mode when clicked", async () => {
    await editableText.enterEditMode();
    expect(await editableText.isInEditMode()).toBe(true);
  });

  test("should exit edit mode with Escape key", async () => {
    await editableText.enterEditMode();
    expect.soft(await editableText.isInEditMode()).toBe(true);
    await editableText.exitEditModeWithEscape();
    expect(await editableText.isInEditMode()).toBe(false);
  });

  test("should exit edit mode with blur", async () => {
    await editableText.enterEditMode();
    expect.soft(await editableText.isInEditMode()).toBe(true);
    await editableText.exitEditModeWithBlur();
    expect(await editableText.isInEditMode()).toBe(false);
  });

  test("should check if multiline mode", async () => {
    const isMultiline = await editableText.isMultiline();
    expect(typeof isMultiline).toBe("boolean");
  });

  test("should count elements correctly", async () => {
    const count = await editableText.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await editableText.getAttributeValue("data-testid");
    expect(attributeValue).toContain("editable-text");
  });
});
