import { Locator, Page, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Menu } from "./Menu";
import { Button } from "./Button";

/**
 * Class representing an IconButton element.
 * Extends the BaseElement class.
 */
export class IconButton extends BaseElement {
  private menu?: Menu;

  /**
   * Create an IconButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the IconButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menu?: Menu) {
    super(page, locator, elementReportName);
    this.menu = menu;
  }

  /**
   * Select an item from the menu.
   * @param {string} itemName - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(itemName: string): Promise<void> {
    await test.step(`Click menu item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      await this.click();
      if (this.menu) {
        await this.menu.selectItem(itemName);
      }
    });
  }
}
