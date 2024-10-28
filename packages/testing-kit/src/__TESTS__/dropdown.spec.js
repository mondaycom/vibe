import { test, expect } from "@playwright/test";
import { DropDown } from "../inputs/DropDown";

test.use({headless: false});
test.describe("dropdown Class with Storybook", () => {
  let Dropdown;

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/inputs-dropdown--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const DropDownLocator = frame.locator('[id="dropdown-menu-id"]');
    Dropdown = new DropDown(page, DropDownLocator, "Test DropDown");
  });

  test("set dropdown value", async ({page}) => {
    await Dropdown.selectItem("2");
    await page.waitForTimeout(500);
    expect(await Dropdown.getText()).toContain("Option 2");
  });
});