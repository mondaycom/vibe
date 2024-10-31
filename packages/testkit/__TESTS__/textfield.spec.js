import { test, expect } from "@playwright/test";
import { TextField } from "../inputs/TextField";
import { textfieldStory } from "./utils/url-helper";

test.describe("textArea Class with Storybook", () => {
  let textField;
  let textfieldLocator

  test.beforeEach(async ({ page }) => {
    await page.goto(textfieldStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textfieldLocator = frame.locator('[data-testid="text-field_input"]');
    textField = new TextField(page, textfieldLocator, "Test text field");
  });

  test("set text in text field", async () => {
    await textField.setText("Test Text");
    await textField.exitEditMode();
    expect(textField.locator).toHaveValue("Test Text");
  });
});