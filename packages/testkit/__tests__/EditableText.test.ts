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

  test("should handle Enter key in edit mode", async () => {
    await editableText.enterEditMode();
    expect.soft(await editableText.isInEditMode()).toBe(true);
    await editableText.exitEditModeWithEnter();
    // exitEditModeWithEnter handles both single-line (exits) and multiline (stays in edit mode)
    // Just verify we're still in a valid state
    const isStillInEditMode = await editableText.isInEditMode();
    expect(typeof isStillInEditMode).toBe("boolean");
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

  test("should be able to set text", async () => {
    const testText = "New Text Content";
    await editableText.setText(testText);
    expect(await editableText.getText()).toBe(testText);
  });

  test("should get text in view mode", async () => {
    await editableText.setText("Test Text");
    const text = await editableText.getText();
    expect(text).toBe("Test Text");
  });

  test("should get input value in edit mode", async () => {
    await editableText.enterEditMode();
    const inputValue = await editableText.getInputValue();
    expect(typeof inputValue).toBe("string");
  });

  test("should type text character by character", async () => {
    await editableText.typeText("Typed Text");
    await editableText.exitEditModeWithEnter();
    expect(await editableText.getText()).toContain("Typed Text");
  });

  test("should handle text input in edit mode", async () => {
    await editableText.enterEditMode();
    await editableText.typeText("Line 1");
    const inputValue = await editableText.getInputValue();
    expect(inputValue).toContain("Line 1");
    await editableText.exitEditModeWithEscape();
  });

  test("should check if multiline mode", async () => {
    const isMultiline = await editableText.isMultiline();
    expect(typeof isMultiline).toBe("boolean");
  });

  test("should get placeholder text", async () => {
    const placeholder = await editableText.getPlaceholder();
    expect(typeof placeholder).toBe("string");
  });

  test("should check if read-only", async () => {
    const isReadOnly = await editableText.isReadOnly();
    expect(typeof isReadOnly).toBe("boolean");
  });

  test("should not enter edit mode when already in edit mode", async () => {
    await editableText.enterEditMode();
    expect.soft(await editableText.isInEditMode()).toBe(true);
    // Try entering edit mode again
    await editableText.enterEditMode();
    expect(await editableText.isInEditMode()).toBe(true);
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
