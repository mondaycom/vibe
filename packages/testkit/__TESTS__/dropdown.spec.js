import { test, expect } from "@playwright/test";
import { Dropdown } from "../inputs/Dropdown";


test.describe("dropdown Class with Storybook", () => {
  let DropDown;

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/inputs-dropdown--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const DropDownLocator = frame.locator('[id="dropdown-menu-id"]');
    DropDown = new Dropdown(page, DropDownLocator, "Test DropDown");
  });

  test("set dropdown value", async ({page}) => {
    await DropDown.selectItem("2");
    await page.waitForTimeout(500);
    expect(await DropDown.getText()).toContain("Option 2");
  });
});