import { Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";
import { Button } from "../buttons/Button"; 

/**
 * Class representing a Dialog element.
 * Extends the BaseElement class.
 */
export class Dialog extends BaseElement {
  /**
   * Create a Dialog.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Dialog element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Select an item from the dialog.
   * @param {string} item - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    const menuItem = new Button(this.page, this.locator.getByText(`${item}`), `Select Menu Item: ${item}`);
    await menuItem.click();
  }
}
