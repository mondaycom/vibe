import { test, expect, FrameLocator } from "@playwright/test";
import { ColorPicker } from "../components";
import { colorPickerStory } from "./utils/url-helper";
import { ContentColorByName } from "../../core/src/utils/colors-vars-map";

let frame: FrameLocator;
let colorPicker: ColorPicker;
const colorPickerLocator = 'div[data-testid="dialog-content-container"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - ColorPicker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(colorPickerStory);
    frame = page.frameLocator(frameLocator);
    colorPicker = new ColorPicker(page, frame.locator(colorPickerLocator), "ColorPicker");
    await page.reload();
    await colorPicker.waitForElementToBeVisible();
  });

  test("should be able to select a color", async () => {
    await colorPicker.selectColor(ContentColorByName.STUCK_RED);
    expect(await colorPicker.isColorSelected(ContentColorByName.STUCK_RED)).toBe(true);
  });

  test("should return selected color", async () => {
    await colorPicker.selectColor(ContentColorByName.GRASS_GREEN);
    const selectedColor = await colorPicker.getSelectedColor();
    expect(selectedColor).toBe(ContentColorByName.GRASS_GREEN);
  });

  test("should handle color selection changes", async () => {
    await colorPicker.selectColor(ContentColorByName.STUCK_RED);
    expect.soft(await colorPicker.isColorSelected(ContentColorByName.STUCK_RED)).toBe(true);
    expect.soft(await colorPicker.getSelectedColor()).toBe(ContentColorByName.STUCK_RED);
    await colorPicker.selectColor(ContentColorByName.BRIGHT_BLUE);
    expect.soft(await colorPicker.isColorSelected(ContentColorByName.BRIGHT_BLUE)).toBe(true);
    expect.soft(await colorPicker.getSelectedColor()).toBe(ContentColorByName.BRIGHT_BLUE);
    expect(await colorPicker.isColorSelected(ContentColorByName.STUCK_RED)).toBe(false);
  });

  test("should handle multiple color selections", async () => {
    const colors = [
      ContentColorByName.STUCK_RED,
      ContentColorByName.GRASS_GREEN,
      ContentColorByName.BRIGHT_BLUE,
      ContentColorByName.EGG_YOLK
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
    await colorPicker.selectColor(ContentColorByName.STUCK_RED);
    expect(await colorPicker.getSelectedColor()).toBe(ContentColorByName.STUCK_RED);

    await colorPicker.selectColor(ContentColorByName.GRASS_GREEN);
    expect(await colorPicker.getSelectedColor()).toBe(ContentColorByName.GRASS_GREEN);

    await colorPicker.selectColor(ContentColorByName.BRIGHT_BLUE);
    expect(await colorPicker.getSelectedColor()).toBe(ContentColorByName.BRIGHT_BLUE);

    await colorPicker.selectColor(ContentColorByName.STUCK_RED);
    expect(await colorPicker.getSelectedColor()).toBe(ContentColorByName.STUCK_RED);
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
