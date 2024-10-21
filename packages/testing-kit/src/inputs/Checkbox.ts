import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";

/**
 * Class representing a Checkbox element.
 * Extends the BaseElement class.
 */
export class Checkbox extends BaseElement {
  override page: Page;
  override locator: Locator;
  override elementReportName: string;

  /**
   * Create a Checkbox.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Checkbox element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Set the checked state of the checkbox.
   * @param {boolean} isToCheck - True to check the checkbox, false to uncheck.
   * @returns {Promise<void>}
   */
  async setChecked(isToCheck: boolean): Promise<void> {
    await this.locator.setChecked(isToCheck);
  }

  /**
   * Check if the checkbox is checked.
   * @returns {Promise<boolean>} True if the checkbox is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return this.locator.isChecked();
  }
}
