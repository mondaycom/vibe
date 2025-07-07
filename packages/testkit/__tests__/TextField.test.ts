import { test, expect } from "@playwright/test";
import { TextField } from "../components";
import { textfieldStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - TextField", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textfieldStory);
  });

  test("TextField should be initially empty", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    expect(await textField.isEmpty()).toBe(true);
  });

  test("TextField should be able to set text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    const testText = "Hello World";
    await textField.setText(testText);

    expect(await textField.isEmpty()).toBe(false);
    // Verify the text is set by checking the input value
    expect(await textField.getLocator().inputValue()).toBe(testText);
  });

  test("TextField should be able to clear text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    // First set some text
    await textField.setText("Some text");
    expect(await textField.isEmpty()).toBe(false);

    // Then clear it
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("TextField should correctly identify empty state", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    // Initially empty
    expect(await textField.isEmpty()).toBe(true);

    // Set text
    await textField.setText("Not empty");
    expect(await textField.isEmpty()).toBe(false);

    // Clear text
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("TextField should handle multiple text changes", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    // Set first text
    await textField.setText("First text");
    expect(await textField.getLocator().inputValue()).toBe("First text");

    // Set second text (should replace the first)
    await textField.setText("Second text");
    expect(await textField.getLocator().inputValue()).toBe("Second text");

    // Clear text
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("TextField should handle empty string input", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    // Set empty string
    await textField.setText("");
    expect(await textField.isEmpty()).toBe(true);
  });

  test("TextField should handle special characters", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await textField.setText(specialText);

    expect(await textField.isEmpty()).toBe(false);
    expect(await textField.getLocator().inputValue()).toBe(specialText);
  });

  test("TextField should handle numbers", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    const numberText = "123456789";
    await textField.setText(numberText);

    expect(await textField.isEmpty()).toBe(false);
    expect(await textField.getLocator().inputValue()).toBe(numberText);
  });

  test("TextField should handle long text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    const longText =
      "This is a very long text that contains many characters and words to test the TextField component's ability to handle longer input values without any issues.";
    await textField.setText(longText);

    expect(await textField.isEmpty()).toBe(false);
    expect(await textField.getLocator().inputValue()).toBe(longText);
  });

  test("TextField should be enabled by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    expect(await textField.isEnabled()).toBe(true);
  });

  test("TextField should be visible by default", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    expect(await textField.isVisible()).toBe(true);
  });

  test("TextField should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const textField = new TextField(page, frame.locator('[data-testid="text-field"]'), "TextField");

    const text = await textField.getText();
    expect(typeof text).toBe("string");
  });
});
