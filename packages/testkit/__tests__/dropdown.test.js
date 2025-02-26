import { test, expect } from "@playwright/test";
import { Dropdown } from "../components";
import { dropdownStory } from "./utils/url-helper";

test.describe("dropdown Class with Storybook", () => {
  let DropDown;

  test.beforeEach(async ({ page }) => {
    await page.goto(dropdownStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const DropDownLocator = frame.locator('[id="dropdown-menu-id"]');
    DropDown = new Dropdown(page, DropDownLocator, "Test DropDown");
  });

  test.fixme("set dropdown value", async ({ page }) => {
    // eslint-disable-next-line playwright/no-wait-for-timeout -- extended wait for interaction test to finish
    await page.waitForTimeout(10000);
    await DropDown.inputField.setText("");
    await DropDown.selectItem("2");
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);
    expect(await DropDown.getText()).toContain("2");
  });
});
