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
   * Get all menu items.
   * @returns {Promise<MenuItem[]>} An array of menu items.
   */
  async getAllMenuItems(): Promise<MenuItem[]> {
    return await test.step(`Get all menu items for ${this.getElementReportName()}`, async () => {
      const items = await this.getLocator().getByRole("menuitem").all();
      return items.map((item, index) => new MenuItem(this.getPage(), item, `Menu item ${index}`));
    });
  }

  /**
   * Get a menu item by its name.
   * @param {string} itemName - The name of the item to retrieve.
   * @returns {Promise<MenuItem>} The menu item with the specified name.
   */
  async getItemByName(itemName: string): Promise<MenuItem> {
    return await test.step(`Get menu item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      return new MenuItem(this.getPage(), this.getLocator().getByRole("menuitem", { name: itemName }), itemName);
    });
  }

  /**
   * Get a menu item by its index.
   * @param {number} index - The index of the item to retrieve.
   * @returns {Promise<MenuItem>} The menu item with the specified index.
   */
  async getItemByIndex(index: number): Promise<MenuItem> {
    return await test.step(`Get menu item by index ${index} for ${this.getElementReportName()}`, async () => {
      return new MenuItem(this.getPage(), this.getLocator().getByRole("menuitem").nth(index), `Menu item ${index}`);
    });
  }

  /**
   * Click a menu item by its name.
   * @param {string} itemName - The name of the item to click.
   * @returns {Promise<void>}
   */
  async selectItem(itemName: string): Promise<void> {
    await test.step(`Click menu item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      const menuItem = await this.getItemByName(itemName);
      await menuItem.hover();
      await menuItem.click();
    });
  }

  /**
   * Select a sub menu item.
   * @param {string} rootItem - The name of the root item.
   * @param {string} subItem - The name of the sub item.
   * @returns {Promise<void>}
   */
  async selectSubItem(rootItem: string, subItem: string): Promise<void> {
    await test.step(`Select sub menu item ${subItem} in ${rootItem} in ${this.getElementReportName()}`, async () => {
      const rootMenuItem = await this.getItemByName(rootItem);
      await rootMenuItem.hover();
      const secondaryMenu = new Menu(
        this.getPage(),
        this.getPage().locator(`.secondary-menu-enter-done`),
        `Secondary Menu`
      );
      await secondaryMenu.selectItem(subItem);
    });
  }

  /**
   * Check if a menu item is disabled.
   * @param {string} itemName - The name of the item to check.
   * @returns {Promise<boolean>} True if the menu item is disabled, false otherwise.
   */
  async isMenuItemDisabled(itemName: string): Promise<boolean> {
    return await test.step(`Check if menu item is disabled for ${itemName} for ${this.getElementReportName()}`, async () => {
      const menuItem = await this.getItemByName(itemName);
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
      const menuItem = await this.getItemByIndex(index);
      return await menuItem.getText();
    });
  }
}
