import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a Toast element.
 * Extends the BaseElement class.
 */
export class Toast extends BaseElement {
  private content: BaseElement;
  private closeButton: Button;

  /**
   * Create a Toast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Toast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.content = new BaseElement(page, locator.getByTestId("toast-content"), `${elementReportName} - Content`);
    this.closeButton = new Button(
      page,
      locator.getByTestId("toast-close-button"),
      `${elementReportName} - Close Button`
    );
  }

  /**
   * Get the content of the toast.
   * @returns {Promise<string>} The content of the toast.
   */
  async getContent(): Promise<string> {
    return await test.step(`Get content from toast: ${this.getElementReportName()}`, async () => {
      return await this.content.getText();
    });
  }

  /**
   * Click the close button of the toast.
   * @returns {Promise<void>}
   */
  async clickCloseButton(): Promise<void> {
    await test.step(`Click close button for ${this.getElementReportName()}`, async () => {
      await this.closeButton.click();
    });
  }
}
