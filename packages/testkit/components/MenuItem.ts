import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a MenuItem element.
 * Extends the BaseElement class.
 */
export class MenuItem extends BaseElement {
  /**
   * Create a MenuItem.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ListItem element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Click the MenuItem element.
   * @returns {Promise<void>}
   */
  async click(): Promise<void> {
    await test.step(`Click ${this.elementReportName}`, async () => {
      await this.locator.hover();
      await this.locator.click();
    });
  }
}
