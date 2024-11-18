import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "../BaseElement";

/**
 * Class representing a ListItem element.
 * Extends the BaseElement class.
 */
export class ListItem extends BaseElement {
  /**
   * Create a ListItem.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ListItem element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Click the ListItem element.
   * @returns {Promise<void>}
   */
  async click(): Promise<void> {
    await test.step(`Click ${this.elementReportName}`, async () => {
      await this.locator.click();
    });
  }
}
