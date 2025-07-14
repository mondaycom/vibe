import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { ColorPickerColor } from "utils/enums";
import { ListItem } from "./ListItem";

/**
 * Class representing a ColorPicker element.
 * Extends the BaseElement class.
 */
export class ColorPicker extends BaseElement {
  /**
   * Create a ColorPicker element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ColorPicker element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get all color picker items.
   * @returns {Promise<ListItem[]>} An array of color picker items.
   */
  async getAllColorPickerItems(): Promise<ListItem[]> {
    return await test.step(`Get all color picker items for ${this.getElementReportName()}`, async () => {
      return (await this.getLocator().locator("li").all()).map(
        (listItem, index) => new ListItem(this.getPage(), listItem, `Color Picker Item ${index + 1}`)
      );
    });
  }

  /**
   * Get a color picker item by color.
   * @param {ColorPickerColor} color - The color to get the color picker item for.
   * @returns {Promise<ListItem>} The color picker item.
   */
  async getColorPickerItemByColor(color: ColorPickerColor): Promise<ListItem> {
    return await test.step(`Get color picker item by color ${color} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByTestId(`color-picker-item_${color}`), color);
    });
  }

  /**
   * Select a color from the color picker.
   * @param {ColorPickerColor} color - The color to select.
   * @returns {Promise<void>}
   */
  async selectColor(color: ColorPickerColor): Promise<void> {
    await test.step(`Select color ${color} for ${this.getElementReportName()}`, async () => {
      const colorItem = await this.getColorPickerItemByColor(color);
      await colorItem.click();
    });
  }

  /**
   * Check if a color is selected.
   * @param {ColorPickerColor} color - The color to check.
   * @returns {Promise<boolean>} True if the color is selected, false otherwise.
   */
  async isColorSelected(color: ColorPickerColor): Promise<boolean> {
    return await test.step(`Check if color ${color} is selected for ${this.getElementReportName()}`, async () => {
      const colorItem = await this.getColorPickerItemByColor(color);
      return (await colorItem.getAttributeValue("class")).includes("selectedColor");
    });
  }

  /**
   * Get the currently selected color.
   * @returns {Promise<string>} The selected color.
   */
  async getSelectedColor(): Promise<string> {
    return await test.step(`Get selected color for ${this.getElementReportName()}`, async () => {
      const listItems = await this.getAllColorPickerItems();

      // Find the selected color
      for (const listItem of listItems) {
        if ((await listItem.getAttributeValue("class")).includes("selectedColor")) {
          const dataTestId = await listItem.getAttributeValue("data-testid");
          return dataTestId.replace("color-picker-item_", "");
        }
      }

      // If no selected color found, throw error
      throw new Error("No selected color found");
    });
  }
}
