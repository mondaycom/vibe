import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";

export class RadioButton extends BaseElement {
  /**
   * Create a RadioButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the RadioButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Select the RadioButton element.
   * @returns {Promise<void>}
   */
  async select(): Promise<void> {
    await test.step(`Select ${this.elementReportName}`, async () => {
      await this.locator.check();
    });
  }

  /**
   * Unselect the RadioButton element.
   * @returns {Promise<void>}
   */
  async unselect(): Promise<void> {
    await test.step(`Unselect ${this.elementReportName}`, async () => {
      await this.locator.uncheck();
    });
  }
}
