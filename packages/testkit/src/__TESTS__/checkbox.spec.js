import { test, expect } from "@playwright/test";
import { Checkbox } from "../inputs/Checkbox";

test.describe("menuButton Class with Storybook", () => {
  let checkbox;

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/inputs-checkbox--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const checkboxLocator = frame.locator('[data-testid="checkbox-checkbox"]');
    checkbox = new Checkbox(page, checkboxLocator, "Test checkbox button");
  });

  test("set checkbox", async ({page}) => {
    if (await checkbox.isChecked()){
        await checkbox.setChecked(false);
        expect(await checkbox.isChecked()).toBe(false);
    }else {
        await checkbox.setChecked(true);
        expect(await checkbox.isChecked()).toBe(true);
    }
  });
});