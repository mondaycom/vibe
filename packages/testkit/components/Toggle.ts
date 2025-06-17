import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Toggle element.
 * Extends the BaseElement class.
 */
export class Toggle extends BaseElement {
  private inputLocator: Locator;
  private buttonLocator: Locator;

  /**
   * Create a Toggle with a wrapper element that contains the input and button elements.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the wrapper element that contains the input and button elements.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.inputLocator = locator.locator("input");
    this.buttonLocator = locator.locator("div");
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
        await this.buttonLocator.click();
      }
    });
  }

  /**
   * Check if the toggle is on.
   * @returns {Promise<boolean>} True if the toggle is on, false otherwise.
   */
  async isOn(): Promise<boolean> {
    let isSelectedAttribute: string | null = null;

    await test.step(`Check if ${this.elementReportName} is on`, async () => {
      isSelectedAttribute = await this.inputLocator.getAttribute("aria-checked", { timeout: 30000 });

      if (isSelectedAttribute === null) {
        throw new Error(`Attribute aria-checked did not exist after 30000 ms`);
      }
    });

    return isSelectedAttribute === "true";
  }
}
