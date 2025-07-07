import { test, expect } from "@playwright/test";
import { TextArea } from "../components";
import { textAreaStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - TextArea", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textAreaStory);
  });

  test("TextArea should be able to set text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const testText = "Hello World";
    await textArea.setText(testText);

    // Verify the text is set by checking the textarea value
    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(testText);
  });

  test("TextArea should handle multiline text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const multilineText = "Line 1\nLine 2\nLine 3";
    await textArea.setText(multilineText);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(multilineText);
  });

  test("TextArea should handle empty string input", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    // Set empty string
    await textArea.setText("");
    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe("");
  });

  test("TextArea should handle special characters", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await textArea.setText(specialText);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(specialText);
  });

  test("TextArea should handle numbers", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const numberText = "123456789";
    await textArea.setText(numberText);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(numberText);
  });

  test("TextArea should handle long text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const longText =
      "This is a very long text that contains many characters and words to test the TextArea component's ability to handle longer input values without any issues. It should be able to accommodate multiple lines and extensive content.";
    await textArea.setText(longText);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(longText);
  });

  test("TextArea should handle multiple text changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    // Set first text
    await textArea.setText("First text");
    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe("First text");

    // Set second text (should replace the first)
    await textArea.setText("Second text");
    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe("Second text");
  });

  test("TextArea should handle text with tabs", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const textWithTabs = "Line 1\tTabbed text\nLine 2\tAnother tab";
    await textArea.setText(textWithTabs);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(textWithTabs);
  });

  test("TextArea should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    expect(await textArea.isEnabled()).toBe(true);
  });

  test("TextArea should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    expect(await textArea.isVisible()).toBe(true);
  });

  test("TextArea should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const text = await textArea.getText();
    expect(typeof text).toBe("string");
  });

  test("TextArea should handle Unicode characters", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textArea = new TextArea(page, frame.locator('[data-testid="text-area"]'), "TextArea");

    const unicodeText = "Hello 世界 🌍 © ® ™ ♥";
    await textArea.setText(unicodeText);

    expect(await textArea.getLocator().locator("textarea").inputValue()).toBe(unicodeText);
  });
});
