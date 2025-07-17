import { Locator, Page, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Link element.
 * Extends the BaseElement class.
 */
export class Link extends BaseElement {
  /**
   * Create a Link element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Link element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get the href attribute of the link.
   * @returns {Promise<string>} The href attribute of the link.
   */
  async getLinkHref(): Promise<string> {
    return await test.step(`Get link href of ${this.getElementReportName()}`, async () => {
      return await this.getAttributeValue("href");
    });
  }
}
