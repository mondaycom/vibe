import { test, expect, FrameLocator } from "@playwright/test";
import { TextField } from "../components";
import { textfieldStory } from "./utils/url-helper";

let frame: FrameLocator;
let textField: TextField;
const textFieldLocator = "#input";
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - TextField", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(textfieldStory);
    frame = page.frameLocator(frameLocator);
    textField = new TextField(page, frame.locator(textFieldLocator), "TextField");
    await page.reload();
    await textField.waitForElementToBeVisible();
  });

  test("should be initially empty", async () => {
    expect(await textField.isEmpty()).toBe(true);
  });

  test("should be able to set text", async () => {
    const testText = "Hello World";
    await textField.setText(testText);
    expect.soft(await textField.isEmpty()).toBe(false);
    expect(await textField.getText()).toBe(testText);
  });

  test("should be able to clear text", async () => {
    await textField.setText("Some text");
    expect.soft(await textField.isEmpty()).toBe(false);
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("should correctly identify empty state", async () => {
    expect.soft(await textField.isEmpty()).toBe(true);
    await textField.setText("Not empty");
    expect.soft(await textField.isEmpty()).toBe(false);
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("should handle multiple text changes", async () => {
    await textField.setText("First text");
    expect.soft(await textField.getText()).toBe("First text");
    await textField.setText("Second text");
    expect.soft(await textField.getText()).toBe("Second text");
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });

  test("should handle empty string input", async () => {
    await textField.setText("");
    expect(await textField.isEmpty()).toBe(true);
  });

  test("should handle special characters", async () => {
    const specialText = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    await textField.setText(specialText);
    expect.soft(await textField.isEmpty()).toBe(false);
    expect(await textField.getText()).toBe(specialText);
  });

  test("should handle numbers", async () => {
    const numberText = "123456789";
    await textField.setText(numberText);
    expect.soft(await textField.isEmpty()).toBe(false);
    expect(await textField.getText()).toBe(numberText);
  });

  test("should handle long text", async () => {
    const longText =
      "This is a very long text that contains many characters and words to test the TextField component's ability to handle longer input values without any issues.";
    await textField.setText(longText);
    expect.soft(await textField.isEmpty()).toBe(false);
    expect(await textField.getText()).toBe(longText);
  });

  test("should be enabled by default", async () => {
    await expect(textField.locator).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(textField.locator).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await textField.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await textField.getAttributeValue("class");
    expect(className).toContain("TextField-module");
  });

  test("should be able to check if text field is empty", async () => {
    expect(await textField.isEmpty()).toBe(true);
    await textField.setText("Hello World");
    expect(await textField.isEmpty()).toBe(false);
    await textField.clearText();
    expect(await textField.isEmpty()).toBe(true);
  });
});
