import { test, expect, FrameLocator } from "@playwright/test";
import { Dropdown } from "../components";
import { dropdownStory } from "./utils/url-helper";

let frame: FrameLocator;
let dropdown: Dropdown;
const dropdownLocator = "#dropdown-menu-id";
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Dropdown", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(dropdownStory);
    frame = page.frameLocator(frameLocator);
    dropdown = new Dropdown(page, frame.locator(dropdownLocator), "Dropdown");
    await page.reload();
    await dropdown.waitForElementToBeVisible();
    await dropdown.close();
  });

  test("should be able to open", async () => {
    await dropdown.open();
    const isOpen = await dropdown.isDropdownOpen();
    expect(isOpen).toBe(true);
  });

  test("should be enabled by default", async () => {
    await expect(dropdown.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(dropdown.getLocator()).toBeVisible();
  });

  test("should count elements correctly", async () => {
    const count = await dropdown.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await dropdown.getAttributeValue("class");
    expect(className).toContain("Dropdown-module");
  });
});
