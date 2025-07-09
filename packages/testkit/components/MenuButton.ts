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
   * Open the menu if it is not already expanded.
   * @returns {Promise<void>}
   */
  async openMenu(): Promise<void> {
    await test.step(`Open menu for ${this.getElementReportName()}`, async () => {
      if (!(await this.isExpanded())) {
        await this.click();
        // Wait for the menu to open
        await this.getPage().waitForTimeout(200);
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
        // Wait for the menu to close
        await this.getPage().waitForTimeout(200);
      }
    });
  }
}
