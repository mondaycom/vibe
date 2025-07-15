import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { TextField } from "./TextField";

/**
 * Class representing a Toggle element.
 * Extends the BaseElement class.
 */
export class Toggle extends BaseElement {
  private input: TextField;
  private button: Button;

  /**
   * Create a Toggle with a wrapper element that contains the input and button elements.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the wrapper element that contains the input and button elements.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.input = new TextField(page, locator.locator("input"), `${elementReportName} - Input`);
    this.button = new Button(page, locator.locator("div"), `${elementReportName} - Button`);
  }

  /**
   * Set the toggle state.
   * @param {boolean} isToCheck - True to turn on the toggle, false to turn off.
   * @returns {Promise<void>}
   */
  async set(isToCheck: boolean): Promise<void> {
    await test.step(`Set toggle to ${isToCheck} for ${this.getElementReportName()}`, async () => {
      if ((await this.isOn()) !== isToCheck) {
        await this.button.click();
      }
    });
  }

  /**
   * Check if the toggle is on.
   * @returns {Promise<boolean>} True if the toggle is on, false otherwise.
   */
  async isOn(): Promise<boolean> {
    return await test.step(`Check if toggle is on for ${this.getElementReportName()}`, async () => {
      return await this.input.isChecked();
    });
  }
}
