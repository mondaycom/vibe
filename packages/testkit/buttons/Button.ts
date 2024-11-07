import { test } from "@playwright/test";
import { Locator, Page } from "@playwright/test";
import { BaseElement } from "../BaseElement";

/**
 * Class representing a Button element.
 * Extends the BaseElement class.
 */
export class Button extends BaseElement {
  override page : Page;
  override locator: Locator;
  override elementReportName: string;
  /**
   * Create a Button.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Button element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Execute click action on the element.
   * @returns {Promise<void>}
   */
  async click() : Promise<void> {
    await test.step(`Click on: ${this.elementReportName}`, async () => {
      await this.locator.click();
    });
  }
}
