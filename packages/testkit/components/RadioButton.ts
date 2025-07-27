import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a RadioButton element.
 * Extends the BaseElement class.
 */
export class RadioButton extends BaseElement {
  /**
   * Create a RadioButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the RadioButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Check the radio button.
   * @returns {Promise<void>}
   */
  async select(): Promise<void> {
    await test.step(`Check radio button for ${this.elementReportName}`, async () => {
      if (!(await this.isChecked())) {
        await this.locator.check();
      }
    });
  }

  /**
   * Uncheck the radio button.
   * @returns {Promise<void>}
   */
  async unselect(): Promise<void> {
    await test.step(`Uncheck radio button for ${this.elementReportName}`, async () => {
      if (await this.isChecked()) {
        await this.locator.uncheck();
      }
    });
  }

  /**
   * Check if the radio button is checked.
   * @returns {Promise<boolean>} True if the radio button is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if radio button is checked for ${this.elementReportName}`, async () => {
      return await this.locator.isChecked();
    });
  }
}
