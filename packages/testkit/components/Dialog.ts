import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Dialog element.
 * Extends the BaseElement class.
 */
export class Dialog {
  private readonly page: Page;
  private locator: Locator;
  private elementReportName: string;

  /**
   * Create a Dialog.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Dialog element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Select an item from the dialog.
   * @param {string} item - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(itmeName: string): Promise<void> {
    const dialogItem = new BaseElement(
      this.page,
      this.locator.getByText(`${itmeName}`).first(),
      `Select Menu Item: ${itmeName}`
    );
    await dialogItem.hover();
    await dialogItem.click();
  }
}
