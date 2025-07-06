import { test, Page, Locator } from "@playwright/test";
import { ListItem } from "./ListItem";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a List element.
 * Extends the BaseElement class.
 */
export class List extends BaseElement {
  /**
   * Create a List element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the List element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get a list item by its name.
   * @param {string} itemName - The name of the item to retrieve.
   * @returns {Promise<ListItem>} The list item with the specified name.
   */
  private async getListItemByName(itemName: string): Promise<ListItem> {
    return await test.step(`Get list item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByText(`${itemName}`), itemName);
    });
  }

  /**
   * Click a list item by its name.
   * @param {string} itemName - The name of the item to click.
   * @returns {Promise<void>}
   */
  async clickListItemByName(itemName: string): Promise<void> {
    await test.step(`Click list item by name ${itemName} for ${this.getElementReportName()}`, async () => {
      const listItem = await this.getListItemByName(itemName);
      await listItem.click();
    });
  }
}
