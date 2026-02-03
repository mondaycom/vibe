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
    await page.reload();
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

  test("should exit edit mode with Enter key", async () => {
    await editableText.enterEditMode();
    expect.soft(await editableText.isInEditMode()).toBe(true);
    await editableText.exitEditModeWithEnter();
    expect(await editableText.isInEditMode()).toBe(false);
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

  test("should be able to clear and set text", async () => {
    await editableText.setText("Initial Text");
    expect.soft(await editableText.getText()).toBe("Initial Text");
    await editableText.clearAndSetText("New Text");
    expect(await editableText.getText()).toBe("New Text");
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

  test("should handle multiple text changes", async () => {
    await editableText.setText("First Text");
    expect.soft(await editableText.getText()).toBe("First Text");
    await editableText.setText("Second Text");
    expect.soft(await editableText.getText()).toBe("Second Text");
    await editableText.setText("Third Text");
    expect(await editableText.getText()).toBe("Third Text");
  });

  test("should type text character by character", async () => {
    await editableText.typeText("Typed Text");
    await editableText.exitEditModeWithEnter();
    expect(await editableText.getText()).toContain("Typed Text");
  });

  test("should handle empty string input", async () => {
    await editableText.setText("Some text");
    expect.soft(await editableText.getText()).toBe("Some text");
    await editableText.setText("");
    expect(await editableText.getText()).toBe("");
  });

  test("should handle special characters", async () => {
    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await editableText.setText(specialText);
    expect(await editableText.getText()).toBe(specialText);
  });

  test("should handle numbers", async () => {
    const numberText = "123456789";
    await editableText.setText(numberText);
    expect(await editableText.getText()).toBe(numberText);
  });

  test("should handle long text", async () => {
    const longText =
      "This is a very long text that contains many characters and words to test the EditableText component's ability to handle longer input values without any issues.";
    await editableText.setText(longText);
    expect(await editableText.getText()).toBe(longText);
  });

  test("should handle multiline text", async () => {
    const multilineText = "Line 1\nLine 2\nLine 3";
    await editableText.setText(multilineText);
    expect(await editableText.getText()).toBe(multilineText);
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

  test("should handle cancel with Escape (no changes)", async () => {
    const originalText = await editableText.getText();
    await editableText.enterEditMode();
    await editableText.typeText("Modified");
    await editableText.exitEditModeWithEscape();
    expect(await editableText.getText()).toBe(originalText);
  });

  test("should count elements correctly", async () => {
    const count = await editableText.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await editableText.getAttributeValue("data-testid");
    expect(attributeValue).toContain("editable-text");
  });

  test("should handle text with spaces", async () => {
    const textWithSpaces = "Text   with   multiple   spaces";
    await editableText.setText(textWithSpaces);
    expect(await editableText.getText()).toBe(textWithSpaces);
  });

  test("should handle text with tabs", async () => {
    const textWithTabs = "Text\twith\ttabs";
    await editableText.setText(textWithTabs);
    expect(await editableText.getText()).toBe(textWithTabs);
  });

  test("should handle alphanumeric text", async () => {
    const alphanumericText = "ABC123def456";
    await editableText.setText(alphanumericText);
    expect(await editableText.getText()).toBe(alphanumericText);
  });

  test("should handle unicode characters", async () => {
    const unicodeText = "Hello 世界 🌍";
    await editableText.setText(unicodeText);
    expect(await editableText.getText()).toBe(unicodeText);
  });

  test("should handle mixed newlines and text", async () => {
    const mixedText = "Line 1\n\nLine 3\nLine 4";
    await editableText.setText(mixedText);
    expect(await editableText.getText()).toBe(mixedText);
  });
});
