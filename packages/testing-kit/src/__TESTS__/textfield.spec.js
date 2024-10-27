import { test, expect } from "@playwright/test";
import { TextField } from "../inputs/TextField";

test.use({ headless: false });
test.describe("textArea Class with Storybook", () => {
  let textField;
  let textfieldLocator

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/inputs-textfield--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textfieldLocator = frame.locator('[data-testid="text-field_input"]');
    textField = new TextField(page, textfieldLocator, "Test text field");
  });

  test("set text in text field", async ({page}) => {
    await textField.setText("Test Text");
    await textField.exitEditMode();
    expect(textField.locator).toHaveValue("Test Text");
  });
});