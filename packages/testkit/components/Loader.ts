import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Loader element.
 * Extends the BaseElement class.
 */
export class Loader extends BaseElement {
  /**
   * Create a Loader element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Loader element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
