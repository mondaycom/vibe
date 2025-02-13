import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Toggle element.
 * Extends the BaseElement class.
 */
export class Toggle extends BaseElement {
  /**
   * Create a Toggle.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Toggle element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Set the toggle state.
   * @param {boolean} isToCheck - True to turn on the toggle, false to turn off.
   * @returns {Promise<void>}
   */
  async set(isToCheck: boolean): Promise<void> {
    await test.step(`Toggle: ${isToCheck}: ${this.elementReportName}`, async () => {
      const currentState = await this.isOn();

      if (currentState !== isToCheck) {
        await this.locator.click();
      }
    });
  }

  /**
   * Check if the toggle is on.
   * @returns {Promise<boolean>} True if the toggle is on, false otherwise.
   */
  async isOn(): Promise<boolean> {
    const isSelectedAttribute = await this.locator.getAttribute("aria-checked");
    return isSelectedAttribute === "true";
  }
}
