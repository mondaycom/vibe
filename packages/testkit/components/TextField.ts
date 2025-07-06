import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a TextField element.
 * Extends the BaseElement class.
 */
export class TextField extends BaseElement {
  /**
   * Create a TextField element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextField element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Set specified text in input element.
   * @param {string} text - Text to be filled in the input.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.getElementReportName()}`, async () => {
      await this.clearText();
      await this.getLocator().fill(text);
    });
  }

  /**
   * Clear the text in the input element.
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text for ${this.getElementReportName()}`, async () => {
      await this.getLocator().clear();
    });
  }

  /**
   * Get the value of the input element.
   * @returns {Promise<string>}
   */
  async isEmpty(): Promise<boolean> {
    return await test.step(`Check if text field is empty for ${this.getElementReportName()}`, async () => {
      return (await this.getLocator().inputValue()) === "";
    });
  }
}
