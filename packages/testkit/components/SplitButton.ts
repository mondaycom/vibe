import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { Menu } from "./Menu";

/**
 * Class representing a SplitButton element.
 * Extends the BaseElement class.
 */
export class SplitButton extends BaseElement {
  private primaryButton: Button;
  private secondaryButton: Button;
  private menu: Menu;

  /**
   * Create a SplitButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the SplitButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menu: Menu) {
    super(page, locator, elementReportName);
    this.primaryButton = new Button(page, locator.locator("button").first(), `${elementReportName} - Primary Button`);
    this.secondaryButton = new Button(
      page,
      locator.locator("button").last(),
      `${elementReportName} - Secondary Button`
    );
    this.menu = menu;
  }

  /**
   * Select an item from the menu.
   * @param {string} itemName - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(itemName: string): Promise<void> {
    await test.step(`Select item by name ${itemName} for ${this.elementReportName}`, async () => {
      await this.openMenu();
      await this.menu.selectItem(itemName);
    });
  }

  /**
   * Open the secondary button menu.
   */
  async openMenu(): Promise<void> {
    await test.step(`Open menu for ${this.elementReportName}`, async () => {
      if (!(await this.isMenuExpanded())) {
        await this.secondaryButton.click();
        // Wait for the menu to open
        await this.page.waitForTimeout(100);
      }
    });
  }

  /**
   * Close the secondary button menu.
   */
  async closeMenu(): Promise<void> {
    await test.step(`Close menu for ${this.elementReportName}`, async () => {
      if (await this.isMenuExpanded()) {
        await this.secondaryButton.click();
        // Wait for the menu to close
        await this.page.waitForTimeout(100);
      }
    });
  }

  /**
   * Click the primary button.
   */
  async clickPrimaryButton(): Promise<void> {
    await test.step(`Click primary button for ${this.elementReportName}`, async () => {
      await this.primaryButton.click();
    });
  }

  /**
   * Get the text of the primary button.
   * @returns {Promise<string>} The text of the primary button.
   */
  async getPrimaryButtonText(): Promise<string> {
    return await test.step(`Get primary button text for ${this.elementReportName}`, async () => {
      return await this.primaryButton.getText();
    });
  }

  /**
   * Check if the secondary button menu is expanded.
   * @returns {Promise<boolean>} True if the secondary button menu is expanded, false otherwise.
   */
  async isMenuExpanded(): Promise<boolean> {
    return await test.step(`Check if menu is expanded for ${this.elementReportName}`, async () => {
      return await this.secondaryButton.isExpanded();
    });
  }
}
