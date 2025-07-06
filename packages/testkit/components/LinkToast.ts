import { Page, Locator, test } from "@playwright/test";
import { Button } from "./Button";
import { Toast } from "./Toast";

/**
 * Class representing a LinkToast element.
 * Extends the BaseElement class.
 */
export class LinkToast extends Toast {
  private link: Button;

  /**
   * Create a LinkToast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the LinkToast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.link = new Button(page, locator.getByTestId("toast-link"), `${elementReportName} - Link`);
  }

  /**
   * Click the link of the toast.
   * @returns {Promise<void>}
   */
  async clickLink(): Promise<void> {
    await test.step(`Click link for ${this.getElementReportName()}`, async () => {
      await this.link.click();
    });
  }
}
