import { Page, Locator } from "@playwright/test";
import { Toast } from "./Toast";

/**
 * Class representing a LoadingToast element.
 * Extends the Toast class.
 */
export class LoadingToast extends Toast {
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
