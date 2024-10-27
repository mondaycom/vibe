import { test, expect } from "@playwright/test";
import { TextArea } from "../inputs/TextArea";

test.describe("textArea Class with Storybook", () => {
  let textArea;
  let textAreaLocator

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/inputs-textarea--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textAreaLocator = frame.locator('[data-testid="text-area"]');
    textArea = new TextArea(page, textAreaLocator, "Test text field");
  });

  test("set text in textarea", async ({page}) => {
    await textArea.setText("Test Text");
    expect(textArea.textAreaInput.locator).toHaveValue("Test Text");
  });
});