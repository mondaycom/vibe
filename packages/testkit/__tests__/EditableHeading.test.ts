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
    await page.reload();
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

  test("should be able to set text", async () => {
    const testText = "New Heading Text";
    await editableHeading.setText(testText);
    expect(await editableHeading.getText()).toBe(testText);
  });

  test("should be able to clear and set text", async () => {
    await editableHeading.setText("Initial Text");
    expect.soft(await editableHeading.getText()).toBe("Initial Text");
    await editableHeading.clearAndSetText("New Text");
    expect(await editableHeading.getText()).toBe("New Text");
  });

  test("should get text in view mode", async () => {
    await editableHeading.setText("Test Text");
    const text = await editableHeading.getText();
    expect(text).toBe("Test Text");
  });

  test("should get input value in edit mode", async () => {
    await editableHeading.enterEditMode();
    const inputValue = await editableHeading.getInputValue();
    expect(typeof inputValue).toBe("string");
  });

  test("should handle multiple text changes", async () => {
    await editableHeading.setText("First Heading");
    expect.soft(await editableHeading.getText()).toBe("First Heading");
    await editableHeading.setText("Second Heading");
    expect.soft(await editableHeading.getText()).toBe("Second Heading");
    await editableHeading.setText("Third Heading");
    expect(await editableHeading.getText()).toBe("Third Heading");
  });

  test("should type text character by character", async () => {
    await editableHeading.typeText("Typed Text");
    await editableHeading.exitEditModeWithEnter();
    expect(await editableHeading.getText()).toContain("Typed Text");
  });

  test("should handle empty string input", async () => {
    await editableHeading.setText("Some text");
    expect.soft(await editableHeading.getText()).toBe("Some text");
    await editableHeading.setText("");
    expect(await editableHeading.getText()).toBe("");
  });

  test("should handle special characters", async () => {
    const specialText = "!@#$%^&*()_+-=";
    await editableHeading.setText(specialText);
    expect(await editableHeading.getText()).toBe(specialText);
  });

  test("should handle numbers", async () => {
    const numberText = "123456789";
    await editableHeading.setText(numberText);
    expect(await editableHeading.getText()).toBe(numberText);
  });

  test("should handle long text", async () => {
    const longText =
      "This is a very long heading text that contains many characters to test the EditableHeading component's ability to handle longer input values.";
    await editableHeading.setText(longText);
    expect(await editableHeading.getText()).toBe(longText);
  });

  test("should get placeholder text", async () => {
    const placeholder = await editableHeading.getPlaceholder();
    expect(typeof placeholder).toBe("string");
  });

  test("should check if read-only", async () => {
    const isReadOnly = await editableHeading.isReadOnly();
    expect(typeof isReadOnly).toBe("boolean");
  });

  test("should not enter edit mode when already in edit mode", async () => {
    await editableHeading.enterEditMode();
    expect.soft(await editableHeading.isInEditMode()).toBe(true);
    // Try entering edit mode again
    await editableHeading.enterEditMode();
    expect(await editableHeading.isInEditMode()).toBe(true);
  });

  test("should handle cancel with Escape (no changes)", async () => {
    const originalText = await editableHeading.getText();
    await editableHeading.enterEditMode();
    await editableHeading.typeText("Modified");
    await editableHeading.exitEditModeWithEscape();
    expect(await editableHeading.getText()).toBe(originalText);
  });

  test("should count elements correctly", async () => {
    const count = await editableHeading.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await editableHeading.getAttributeValue("data-testid");
    expect(attributeValue).toContain("editable-heading");
  });

  test("should handle text with spaces", async () => {
    const textWithSpaces = "Text   with   multiple   spaces";
    await editableHeading.setText(textWithSpaces);
    expect(await editableHeading.getText()).toBe(textWithSpaces);
  });

  test("should handle alphanumeric text", async () => {
    const alphanumericText = "ABC123def456";
    await editableHeading.setText(alphanumericText);
    expect(await editableHeading.getText()).toBe(alphanumericText);
  });
});
