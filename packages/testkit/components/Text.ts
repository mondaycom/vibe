import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Text element.
 * Extends the BaseElement class.
 */
export class Text extends BaseElement {
  /**
   * Create a Text element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Text element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Set the text of the Text element.
   * @param {string} text - The text to set.
   * @returns {Promise<void>} A promise that resolves when the text is set.
   */
  async setText(text: string): Promise<void> {
    return await test.step(`Set text for ${this.getElementReportName()}`, async () => {
      await this.getLocator().fill(text);
    });
  }
}
