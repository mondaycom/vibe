import { Page, Locator } from "@playwright/test";
import { Button } from "./Button";

/**
 * Class representing a menu button that extends the Button class.
 */
export class MenuButton extends Button {
  override page: Page;
  override locator: Locator;
  override elementReportName: string;
  button: Button;
  menu: any; 

  /**
   * Create a MenuButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   * @param {any} menuType - The type of menu associated with the button.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menuType: any) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
    this.button = new Button(this.page, this.locator, elementReportName);
    this.menu = menuType;
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
