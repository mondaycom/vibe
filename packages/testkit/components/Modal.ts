import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { IconButton } from "./IconButton";

/**
 * Class representing a Modal element.
 * Extends the BaseElement class.
 */
export class Modal extends BaseElement {
  private closeModalButton: IconButton;

  /**
   * Create a Modal element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Modal element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.closeModalButton = new IconButton(
      page,
      locator.getByTestId("modal-close-button"),
      `${elementReportName} - X Button`
    );
  }

  /**
   * Close the modal.
   * @returns {Promise<void>}
   */
  async closeModal(): Promise<void> {
    await test.step(`Close modal for ${this.elementReportName}`, async () => {
      if (await this.closeModalButton.isVisible()) {
        await this.closeModalButton.click();
      } else {
        await this.page.keyboard.press("Escape");
      }
      // Wait for the modal to close
      await this.page.waitForTimeout(200);
    });
  }
}
