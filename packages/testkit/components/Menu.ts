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
   * Get a menu item by its index.
   * @param {number} index - The index of the item to retrieve.
   * @returns {Promise<MenuItem>} The menu item with the specified index.
   */
  private async getMenuItemByIndex(index: number): Promise<MenuItem> {
    return await test.step(`Get menu item by index ${index} for ${this.getElementReportName()}`, async () => {
      return new MenuItem(this.getPage(), this.getLocator().getByRole("menuitem").nth(index), `Menu item ${index}`);
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

  /**
   * Check if a menu item is disabled.
   * @param {string} itemName - The name of the item to check.
   * @returns {Promise<boolean>} True if the menu item is disabled, false otherwise.
   */
  async isMenuItemDisabled(itemName: string): Promise<boolean> {
    return await test.step(`Check if menu item is disabled for ${itemName} for ${this.getElementReportName()}`, async () => {
      const menuItem = await this.getMenuItemByName(itemName);
      return (await menuItem.getComputedStyle("cursor")) === "not-allowed";
    });
  }

  /**
   * Get the name of a menu item by its index.
   * @param {number} index - The index of the item to retrieve.
   * @returns {Promise<string>} The name of the menu item with the specified index.
   */
  async getMenuItemNameByIndex(index: number): Promise<string> {
    return await test.step(`Get menu item name by index ${index} for ${this.getElementReportName()}`, async () => {
      const menuItem = await this.getMenuItemByIndex(index);
      return await menuItem.getText();
    });
  }
}
