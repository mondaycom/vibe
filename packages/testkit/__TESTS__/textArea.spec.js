import { test, expect } from "@playwright/test";
import { TextArea } from "../inputs/TextArea";
import { textAreaStory } from "./utils/url-helper";

test.describe("textArea Class with Storybook", () => {
  let textArea;
  let textAreaLocator

  test.beforeEach(async ({ page }) => {
    await page.goto(textAreaStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textAreaLocator = frame.locator('[data-testid="text-area"]');
    textArea = new TextArea(page, textAreaLocator, "Test text field");
  });

  test("set text in textarea", async () => {
    await textArea.setText("Test Text");
    expect(textArea.textAreaInput.locator).toHaveValue("Test Text");
  });
});