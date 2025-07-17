import { test, expect, FrameLocator } from "@playwright/test";
import { ColorPicker } from "../components";
import { colorPickerStory } from "./utils/url-helper";
import { ColorPickerColor } from "../utils/enums";

let frame: FrameLocator;
let colorPicker: ColorPicker;
const colorPickerLocator = 'div[data-testid="dialog-content-container"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - ColorPicker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(colorPickerStory);
    frame = page.frameLocator(frameLocator);
    colorPicker = new ColorPicker(page, frame.locator(colorPickerLocator), "ColorPicker");
    await page.reload();
    await colorPicker.waitForElementToBeVisible();
  });

  test("should be able to select a color", async () => {
    await colorPicker.selectColor(ColorPickerColor.STUCK_RED);
    expect(await colorPicker.isColorSelected(ColorPickerColor.STUCK_RED)).toBe(true);
  });

  test("should return selected color", async () => {
    await colorPicker.selectColor(ColorPickerColor.GRASS_GREEN);
    const selectedColor = await colorPicker.getSelectedColor();
    expect(selectedColor).toBe(ColorPickerColor.GRASS_GREEN);
  });

  test("should handle color selection changes", async () => {
    await colorPicker.selectColor(ColorPickerColor.STUCK_RED);
    expect.soft(await colorPicker.isColorSelected(ColorPickerColor.STUCK_RED)).toBe(true);
    expect.soft(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.STUCK_RED);
    await colorPicker.selectColor(ColorPickerColor.BRIGHT_BLUE);
    expect.soft(await colorPicker.isColorSelected(ColorPickerColor.BRIGHT_BLUE)).toBe(true);
    expect.soft(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.BRIGHT_BLUE);
    expect(await colorPicker.isColorSelected(ColorPickerColor.STUCK_RED)).toBe(false);
  });

  test("should handle multiple color selections", async () => {
    const colors = [
      ColorPickerColor.STUCK_RED,
      ColorPickerColor.GRASS_GREEN,
      ColorPickerColor.BRIGHT_BLUE,
      ColorPickerColor.EGG_YOLK
    ];

    for (const color of colors) {
      await colorPicker.selectColor(color);
      expect.soft(await colorPicker.isColorSelected(color)).toBe(true);
      expect(await colorPicker.getSelectedColor()).toBe(color);
    }
  });

  test("should be enabled by default", async () => {
    await expect(colorPicker.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(colorPicker.getLocator()).toBeVisible();
  });

  test("should handle color selection sequence", async () => {
    await colorPicker.selectColor(ColorPickerColor.STUCK_RED);
    expect(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.STUCK_RED);

    await colorPicker.selectColor(ColorPickerColor.GRASS_GREEN);
    expect(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.GRASS_GREEN);

    await colorPicker.selectColor(ColorPickerColor.BRIGHT_BLUE);
    expect(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.BRIGHT_BLUE);

    await colorPicker.selectColor(ColorPickerColor.STUCK_RED);
    expect(await colorPicker.getSelectedColor()).toBe(ColorPickerColor.STUCK_RED);
  });

  test("should count elements correctly", async () => {
    const count = await colorPicker.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await colorPicker.getAttributeValue("class");
    expect(className).toContain("ColorPicker-module");
  });
});
