import { Page, Locator, test } from "@playwright/test";
import { Button } from "./Button";
import { Toast } from "./Toast";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a LinkToast element.
 * Extends the Toast class.
 */
export class LinkToast extends Toast {
  private link: Button;
  private linkText: BaseElement;

  /**
   * Create a LinkToast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the LinkToast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.link = new Button(page, locator.getByTestId("toast-link"), `${elementReportName} - Link`);
    this.linkText = new BaseElement(page, this.link.getLocator().locator("span"), `${elementReportName} - Link Text`);
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

  /**
   * Get the text of the link.
   * @returns {Promise<string>} The text of the link.
   */
  async getLinkText(): Promise<string> {
    return await test.step(`Get link text for ${this.getElementReportName()}`, async () => {
      return await this.linkText.getText();
    });
  }
}
