import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";

/**
 * Class representing a Text element.
 * Extends the BaseElement class.
 */
export class Text extends BaseElement {
  /**
   * Create a Text element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Text element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
