import { test, Page, Locator } from "@playwright/test";
import { MenuItem } from "./MenuItem";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a List element.
 * Extends the BaseElement class.
 */
export class Menu extends BaseElement {
  private items: MenuItem[];
  private itemsInitialized: boolean;

  /**
   * Create a Menu.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the List element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.items = [];
    this.itemsInitialized = false;
  }

  /**
   * Initialize list items if they are not already initialized.
   * @returns {Promise<void>}
   */
  async initializeItemsIfNeeded(): Promise<void> {
    await test.step(`Initialize ${this.elementReportName} if needed`, async () => {
      if (!this.itemsInitialized) {
        await this.initializeItems();
        this.itemsInitialized = true;
      }
    });
  }

  /**
   * Initialize the list items by locating all list elements.
   * @returns {Promise<void>}
   */
  async initializeItems(): Promise<void> {
    await test.step(`Initialize ${this.elementReportName}`, async () => {
      await this.waitForElementsGroup(this.locator.locator("[role='menuitem']"), this.elementReportName);
      const listElements = await this.locator.locator("[role='menuitem']").all();
      this.items = await Promise.all(
        listElements.map(async locator => {
          const itemName = await locator.innerText();
          return new MenuItem(this.page, locator, `Menu Item: ${itemName}`);
        })
      );
    });
  }

  /**
   * Get a menu item by its name.
   * @param {string} itemName - The name of the item to retrieve.
   * @returns {ListItem | undefined} The list item with the specified name or undefined if not found.
   */
  getItemByName(itemName: string): MenuItem | undefined {
    return this.items.find(item => item.elementReportName.includes(itemName));
  }

  /**
   * Select a menu item.
   * @param {string} listItem - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(listItem: string): Promise<void> {
    await this.initializeItemsIfNeeded();
    let menuItem = this.getItemByName(listItem);
    if (!menuItem) {
      // If the item is not in the initialized list, create it dynamically
      menuItem = new MenuItem(this.page, this.locator.getByText(`${listItem}`), `Menu Item: ${listItem}`);
    }
    await menuItem.scrollIntoView();
    await menuItem.click();
  }
}
