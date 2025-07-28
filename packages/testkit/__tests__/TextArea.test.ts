import { test, expect, FrameLocator } from "@playwright/test";
import { TextArea } from "../components";
import { textAreaStory } from "./utils/url-helper";

let frame: FrameLocator;
let textArea: TextArea;
const textAreaLocator = 'div[data-testid="text-area"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - TextArea", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textAreaStory);
    frame = page.frameLocator(frameLocator);
    textArea = new TextArea(page, frame.locator(textAreaLocator), "TextArea");
    await page.reload();
    await textArea.waitForElementToBeVisible();
  });

  test("should be able to set text", async () => {
    const testText = "Hello World";
    await textArea.setText(testText);
    expect(await textArea.getText()).toBe(testText);
  });

  test("should handle multiline text", async () => {
    const multilineText = "Line 1\nLine 2\nLine 3";
    await textArea.setText(multilineText);
    expect(await textArea.getText()).toBe(multilineText);
  });

  test("should handle empty string input", async () => {
    await textArea.setText("");
    expect(await textArea.getText()).toBe("");
  });

  test("should handle special characters", async () => {
    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await textArea.setText(specialText);
    expect(await textArea.getText()).toBe(specialText);
  });

  test("should handle numbers", async () => {
    const numberText = "123456789";
    await textArea.setText(numberText);
    expect(await textArea.getText()).toBe(numberText);
  });

  test("should handle long text", async () => {
    const longText =
      "This is a very long text that contains many characters and words to test the TextArea component's ability to handle longer input values without any issues. It should be able to accommodate multiple lines and extensive content.";
    await textArea.setText(longText);
    expect(await textArea.getText()).toBe(longText);
  });

  test("should handle multiple text changes", async () => {
    await textArea.setText("First text");
    expect.soft(await textArea.getText()).toBe("First text");
    await textArea.setText("Second text");
    expect(await textArea.getText()).toBe("Second text");
  });

  test("should handle text with tabs", async () => {
    const textWithTabs = "Line 1\tTabbed text\nLine 2\tAnother tab";
    await textArea.setText(textWithTabs);
    expect(await textArea.getText()).toBe(textWithTabs);
  });

  test("should be enabled by default", async () => {
    await expect(textArea.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(textArea.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await textArea.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await textArea.getAttributeValue("data-vibe");
    expect(attributeValue).toContain("TextArea");
  });

  test("should be able to clear text", async () => {
    await textArea.setText("Hello World");
    expect.soft(await textArea.getText()).toBe("Hello World");
    await textArea.clearText();
    expect(await textArea.getText()).toBe("");
  });

  test("should be able to check if text area is empty", async () => {
    expect(await textArea.isEmpty()).toBe(true);
    await textArea.setText("Hello World");
    expect(await textArea.isEmpty()).toBe(false);
    await textArea.clearText();
    expect(await textArea.isEmpty()).toBe(true);
  });
});
