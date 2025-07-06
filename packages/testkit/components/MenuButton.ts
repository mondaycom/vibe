import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a MenuButton element.
 * Extends the BaseElement class.
 */
export class MenuButton extends BaseElement {
  /**
   * Create a MenuButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the MenuButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Check if the menu is expanded.
   * @returns {Promise<boolean>} True if the menu is expanded, false otherwise.
   */
  private async isExpanded(): Promise<boolean> {
    return await test.step(`Check if menu is expanded for ${this.getElementReportName()}`, async () => {
      return (await this.getAttributeValue("aria-expanded")) === "true";
    });
  }

  /**
   * Open the menu if it is not already expanded.
   * @returns {Promise<void>}
   */
  async openMenu(): Promise<void> {
    await test.step(`Open menu for ${this.getElementReportName()}`, async () => {
      if (!(await this.isExpanded())) {
        await this.click();
      }
    });
  }

  /**
   * Close the menu if it is currently expanded.
   * @returns {Promise<void>}
   */
  async closeMenu(): Promise<void> {
    await test.step(`Close menu for ${this.getElementReportName()}`, async () => {
      if (await this.isExpanded()) {
        await this.click();
      }
    });
  }
}
