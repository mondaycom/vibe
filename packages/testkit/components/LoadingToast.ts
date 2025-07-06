import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a LoadingToast element.
 * Extends the BaseElement class.
 */
export class LoadingToast extends BaseElement {
  /**
   * Create a LoadingToast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the LoadingToast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }
}
