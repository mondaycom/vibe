import { Page, Locator, test } from "@playwright/test";
import { Button } from "./Button";
import { Toast } from "./Toast";

/**
 * Class representing a ButtonToast element.
 * Extends the Toast class.
 */
export class ButtonToast extends Toast {
  private button: Button;

  /**
   * Create a ButtonToast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ButtonToast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.button = new Button(page, locator.getByTestId("toast-button"), `${elementReportName} - Button`);
  }

  /**
   * Click the button of the toast.
   * @returns {Promise<void>}
   */
  async clickButton(): Promise<void> {
    await test.step(`Click button for ${this.getElementReportName()}`, async () => {
      await this.button.click();
    });
  }
}
