import { test, expect } from "@playwright/test";
import { Checkbox } from "../components";
import { checkboxStory } from "./utils/url-helper";

test.describe("menuButton Class with Storybook", () => {
  let checkbox;

  test.beforeEach(async ({ page }) => {
    await page.goto(checkboxStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const checkboxLocator = frame.locator('[data-testid="checkbox-checkbox"]');
    checkbox = new Checkbox(page, checkboxLocator, "Test checkbox button");
  });

  // eslint-disable-next-line no-unused-vars
  test("set checkbox", async () => {
    // eslint-disable-next-line playwright/no-conditional-in-test
    if (await checkbox.isChecked()) {
      await checkbox.setChecked(false);
      // eslint-disable-next-line playwright/prefer-web-first-assertions, playwright/no-conditional-expect
      expect(await checkbox.isChecked()).toBe(false);
    } else {
      await checkbox.setChecked(true);
      // eslint-disable-next-line playwright/prefer-web-first-assertions, playwright/no-conditional-expect
      expect(await checkbox.isChecked()).toBe(true);
    }
  });
});
