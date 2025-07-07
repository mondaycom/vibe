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
    await dropdown.waitForPlaceholderTextToBeVisible();
    await dropdown.close();
  });

  test("should be able to open", async () => {
    await dropdown.open();
    const isOpen = await dropdown.isOpen();
    expect(isOpen).toBe(true);
  });

  test("should be able to select a single option", async () => {
    await dropdown.selectOption("Option 1");
    expect.soft(await dropdown.isOptionSelected("Option 1")).toBe(true);
    const selectedOption = await dropdown.getInputFieldValue();
    expect(selectedOption).toBe("Option 1");
  });

  test("should be able to select multiple options", async () => {
    const options = ["Option 1", "Option 2"];
    await dropdown.selectMultipleOptions(options);
    expect(await dropdown.isOptionSelected("Option 2")).toBe(true);
  });

  test("should correctly identify selected options", async () => {
    let inputFieldValue = await dropdown.getInputFieldValue();
    expect.soft(inputFieldValue).toBe("");
    await dropdown.selectOption("Option 1");
    expect.soft(await dropdown.isOptionSelected("Option 1")).toBe(true);
    inputFieldValue = await dropdown.getInputFieldValue();
    expect.soft(inputFieldValue).toBe("Option 1");
    await dropdown.clearSelection();
    await dropdown.selectOption("Option 2");
    expect.soft(await dropdown.isOptionSelected("Option 2")).toBe(true);
    inputFieldValue = await dropdown.getInputFieldValue();
    expect(inputFieldValue).toBe("Option 2");
  });

  test("should be enabled by default", async () => {
    expect(await dropdown.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await dropdown.isVisible()).toBe(true);
  });

  test("should handle empty option selection gracefully", async () => {
    await dropdown.selectMultipleOptions([]);
  });

  test("should handle single option in multiple selection", async () => {
    const options = ["Option 1"];
    await dropdown.selectMultipleOptions(options);
    expect.soft(await dropdown.isOptionSelected("Option 1")).toBe(true);
    const inputFieldValue = await dropdown.getInputFieldValue();
    expect(inputFieldValue).toBe("Option 1");
  });

  test("should count elements correctly", async () => {
    const count = await dropdown.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await dropdown.getAttributeValue("class");
    expect(className).toContain("Dropdown-module");
  });

  test("should be able to search for an option", async () => {
    await dropdown.search("Option 1");
    const inputFieldValue = await dropdown.getInputFieldValue();
    expect.soft(inputFieldValue).toBe("Option 1");
    expect(await dropdown.isSearchResultVisible("Option 1")).toBe(true);
  });

  test("should show no results text when searching for non-existent option", async () => {
    await dropdown.search("Non-existent Option");
    expect(await dropdown.isNoOptionsTextVisible()).toBe(true);
  });

  test("should not show no results text when searching for valid option", async () => {
    await dropdown.search("Option 1");
    expect(await dropdown.isNoOptionsTextHidden()).toBe(true);
  });
});
