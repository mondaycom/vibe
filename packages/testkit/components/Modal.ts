import { Page, Locator } from "@playwright/test";
import { IconButton } from "./IconButton";

/**
 * Class representing a Modal
 */
export class Modal {
  page: Page;
  locator: Locator;
  elementReportName: string;
  closeModalButton: IconButton;

  /**
   * Create a Modal.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
    this.closeModalButton = new IconButton(this.page, this.locator, elementReportName);
  }

  /**
   * Close the modal.
   */
  async closeModal(): Promise<void> {
    await this.closeModalButton.click();
  }
}