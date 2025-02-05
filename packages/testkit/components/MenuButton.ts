import { Page, Locator } from "@playwright/test";
import { Button } from "./Button";
import { Menu } from "./Menu";
import { Dialog } from "./Dialog";

/**
 * Class representing a menu button that extends the Button class.
 */
export class MenuButton extends Button {
  button: Button;
  menu: Dialog | Menu;

  /**
   * Create a MenuButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   * @param {any} menuType - The type of menu associated with the button.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menuType: Dialog | Menu) {
    super(page, locator, elementReportName);
    this.button = new Button(this.page, this.locator, elementReportName);
    this.menu = menuType;
  }

  /**
   * Select an item from the menu.
   * @param {string} item - The item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await this.openMenu();
    await this.menu.selectItem(item);
  }

  /**
   * Open the menu if it is not already expanded.
   * @returns {Promise<void>}
   */
  async openMenu(): Promise<void> {
    if (!(await this.isExpanded())) {
      await this.button.click();
    }
  }

  /**
   * Close the menu if it is currently expanded.
   * @returns {Promise<void>}
   */
  async closeMenu(): Promise<void> {
    if (await this.isExpanded()) {
      await this.button.click();
    }
  }

  /**
   * Check if the menu is expanded.
   * @returns {Promise<boolean>} True if the menu is expanded, false otherwise.
   */
  async isExpanded(): Promise<boolean> {
    const expanded = await this.button.getAttributeValue("aria-expanded");
    return expanded === "true";
  }
}
