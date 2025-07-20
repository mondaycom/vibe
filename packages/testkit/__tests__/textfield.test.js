import { test, expect } from "@playwright/test";
import { TextField } from "../components";
import { textfieldStory } from "./utils/url-helper";

test.describe.fixme("textArea Class with Storybook", () => {
  let textField;
  let textFieldLocator;

  test.beforeEach(async ({ page }) => {
    await page.goto(textfieldStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textFieldLocator = frame.locator('[data-testid="text-field_input"]');
    textField = new TextField(page, textFieldLocator, "Test text field");
  });

  test("set text in text field", async () => {
    await textField.setText("Test Text");
    await textField.exitEditMode();
    await expect(textField.locator).toHaveValue("Test Text");
  });
});
