import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a MenuItem element.
 * Extends the BaseElement class.
 */
export class MenuItem extends BaseElement {
  /**
   * Create a MenuItem element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuItem element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
