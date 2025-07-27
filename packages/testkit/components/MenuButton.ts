import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Menu } from "./Menu";

/**
 * Class representing a MenuButton element.
 * Extends the BaseElement class.
 */
export class MenuButton extends BaseElement {
  private menu: Menu;

  /**
   * Create a MenuButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menu: Menu) {
    super(page, locator, elementReportName);
    this.menu = menu;
  }

  /**
   * Select an item from the menu.
   * @param {string} itemName - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(itemName: string): Promise<void> {
    await test.step(`Select menu item by name ${itemName} for ${this.elementReportName}`, async () => {
      await this.openMenu();
      await this.menu.selectItem(itemName);
    });
  }

  /**
   * Open the menu if it is not already expanded.
   * @returns {Promise<void>}
   */
  async openMenu(): Promise<void> {
    await test.step(`Open menu for ${this.elementReportName}`, async () => {
      if (!(await this.isExpanded())) {
        await this.click();
        // Wait for the menu to open
        await this.page.waitForTimeout(200);
      }
    });
  }

  /**
   * Close the menu if it is currently expanded.
   * @returns {Promise<void>}
   */
  async closeMenu(): Promise<void> {
    await test.step(`Close menu for ${this.elementReportName}`, async () => {
      if (await this.isExpanded()) {
        await this.click();
        // Wait for the menu to close
        await this.page.waitForTimeout(200);
      }
    });
  }

  /**
   * Check if the secondary button menu is expanded.
   * @returns {Promise<boolean>} True if the secondary button menu is expanded, false otherwise.
   */
  async isMenuExpanded(): Promise<boolean> {
    return await test.step(`Check if menu is expanded for ${this.elementReportName}`, async () => {
      return await this.isExpanded();
    });
  }

  /**
   * Select a sub menu item.
   * @param {string} rootItem - The name of the root item.
   * @param {string} subItem - The name of the sub item.
   * @returns {Promise<void>}
   */
  async selectSubItem(rootItem: string, subItem: string): Promise<void> {
    await test.step(`Select sub menu item ${subItem} in ${rootItem} in ${this.elementReportName}`, async () => {
      await this.menu.selectSubItem(rootItem, subItem);
    });
  }
}
