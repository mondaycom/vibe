import { test, expect } from "@playwright/test";
import { Checkbox } from "../inputs/Checkbox";
import { checkboxStory } from "./utils/url-helper";

test.describe("menuButton Class with Storybook", () => {
  let checkbox;

  test.beforeEach(async ({ page }) => {
    await page.goto(checkboxStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const checkboxLocator = frame.locator('[data-testid="checkbox-checkbox"]');
    checkbox = new Checkbox(page, checkboxLocator, "Test checkbox button");
  });

  test("set checkbox", async () => {
    if (await checkbox.isChecked()){
        await checkbox.setChecked(false);
        expect(await checkbox.isChecked()).toBe(false);
    }else {
        await checkbox.setChecked(true);
        expect(await checkbox.isChecked()).toBe(true);
    }
  });
});