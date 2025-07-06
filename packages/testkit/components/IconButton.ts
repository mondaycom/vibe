import { Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing an IconButton element.
 * Extends the BaseElement class.
 */
export class IconButton extends BaseElement {
  /**
   * Create an IconButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the IconButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
