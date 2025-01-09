import { test, expect } from "@playwright/test";
import { TextArea } from "../components";
import { textAreaStory } from "./utils/url-helper";

test.describe("textArea Class with Storybook", () => {
  let textArea;
  let textAreaLocator;

  test.beforeEach(async ({ page }) => {
    await page.goto(textAreaStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    textAreaLocator = frame.locator('[data-testid="text-area"]');
    textArea = new TextArea(page, textAreaLocator, "Test text field");
  });

  // eslint-disable-next-line no-unused-vars
  test("set text in textarea", async () => {
    await textArea.setText("Test Text");
    // eslint-disable-next-line playwright/missing-playwright-await
    await expect(textArea.textAreaInput.locator).toHaveValue("Test Text");
  });
});
