import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a ListItem element.
 * Extends the BaseElement class.
 */
export class Loader extends BaseElement {
  /**
   * Create a ListItem.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ListItem element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
