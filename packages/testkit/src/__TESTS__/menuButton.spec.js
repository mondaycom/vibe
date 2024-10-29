import { test, expect } from "@playwright/test";
import { MenuButton } from "../buttons/MenuButton";

test.describe("menuButton Class with Storybook", () => {
  let menuButton;

  test.beforeEach(async ({ page }) => {
    await page.goto("/?path=/story/buttons-menubutton--overview");
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const menubuttonLocator = frame.locator('[data-testid="menu-button"]');
    menuButton = new MenuButton(page, menubuttonLocator, "Test menu button");
  });

  test("should open and close menu", async ({page}) => {
    await menuButton.openMenu();
    await page.waitForTimeout(500);
    expect(await menuButton.isExpanded()).toBe(true);
    await menuButton.closeMenu();
    await page.waitForTimeout(500);
    expect(await menuButton.isExpanded()).toBe(false);
  });
});
