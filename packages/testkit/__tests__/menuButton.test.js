import { test, expect } from "@playwright/test";
import { MenuButton } from "../components";
import { menuButtonStory } from "./utils/url-helper";

test.describe.fixme("menuButton Class with Storybook", () => {
  let menuButton;

  test.beforeEach(async ({ page }) => {
    await page.goto(menuButtonStory);
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    const menuButtonLocator = frame.locator('[data-testid="menu-button"]');
    menuButton = new MenuButton(page, menuButtonLocator, "Test menu button");
  });

  test("should open and close menu", async ({ page }) => {
    await menuButton.openMenu();
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);
    expect(await menuButton.isExpanded()).toBe(true);
    await menuButton.closeMenu();
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);
    expect(await menuButton.isExpanded()).toBe(false);
  });
});
