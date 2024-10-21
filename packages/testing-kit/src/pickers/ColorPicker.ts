import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";
import { Button } from "../buttons/Button";

/**
 * Class representing a ColorPicker element.
 * Extends the BaseElement class.
 */
export class ColorPicker extends BaseElement {
  /**
   * Create a ColorPicker.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ColorPicker element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
  }

  /**
   * Select a color from the color picker.
   * @param {string} color - The color to select.
   * @returns {Promise<void>}
   */
  async selectColor(color: string): Promise<void> {
    const colorItem = new Button(this.page, this.locator.getByTestId(`color-picker-item_${color}`), `Color: ${color}`);
    await colorItem.click();
  }

  /**
   * Get the currently selected color.
   * @returns {Promise<string>} The selected color.
   */
  async getSelectedColor(): Promise<string| undefined> {
    const selectedColor = new BaseElement(
      this.page,
      this.locator.locator("//*[contains(@class, 'selectedColor')]"),
      "Selected Color"
    );
    const dataTestIdAttr = await selectedColor.getAttributeValue("data-testId");
    const parts = dataTestIdAttr?.split("_");
    return parts?.slice(-2).join("_");  // Returning the last two parts as the selected color
  }
}
