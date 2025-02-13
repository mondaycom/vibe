import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Button element.
 * Extends the BaseElement class.
 */
export class Button extends BaseElement {
  /**
   * Create a Button.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Button element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Execute click action on the element.
   * @returns {Promise<void>}
   */
  async click(): Promise<void> {
    await test.step(`Click on: ${this.elementReportName}`, async () => {
      await this.locator.click();
    });
  }
}
