import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Tab element.
 * Extends the BaseElement class.
 */
export class Tab extends BaseElement {
  /**
   * Create a Tab.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Tab element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
