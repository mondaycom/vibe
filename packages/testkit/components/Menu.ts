import { test, Page, Locator } from "@playwright/test";
import { MenuItem } from "./MenuItem";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a Menu element.
 * Extends the BaseElement class.
 */
export class Menu extends BaseElement {
  /**
   * Create a Menu element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Menu element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get a menu item by its name.
   * @param {string} itemName - The name of the item to retrieve.
   * @returns {Promise<MenuItem>} The menu item with the specified name.
   */
  private async getMenuItemByName(itemName: string): Promise<MenuItem> {
    return await test.step(`Get menu item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      return new MenuItem(this.getPage(), this.getLocator().getByRole("menuitem", { name: itemName }), itemName);
    });
  }

  /**
   * Click a menu item by its name.
   * @param {string} itemName - The name of the item to click.
   * @returns {Promise<void>}
   */
  async clickMenuItemByName(itemName: string): Promise<void> {
    await test.step(`Click menu item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      const menuItem = await this.getMenuItemByName(itemName);
      await menuItem.hover();
      await menuItem.click();
    });
  }
}
