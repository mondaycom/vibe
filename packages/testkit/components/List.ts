import { test, Page, Locator } from "@playwright/test";
import { ListItem } from "./ListItem";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a List element.
 * Extends the BaseElement class.
 */
export class List extends BaseElement {
  private items: ListItem[]; // Correct TypeScript array declaration
  private itemsInitialized: boolean;

  /**
   * Create a List.
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
      const listItemLocator = this.locator.locator("li");
      await this.waitForAndVerifyElements(listItemLocator);
      const listElements = await listItemLocator.all();
      this.items = await Promise.all(
        listElements.map(async locator => {
          const itemName = await locator.innerText();
          return new ListItem(this.page, locator, `List Item: ${itemName}`);
        })
      );
    });
  }

  /**
   * Get a list item by its name.
   * @param {string} itemName - The name of the item to retrieve.
   * @returns {ListItem | undefined} The list item with the specified name or undefined if not found.
   */
  getItemByName(itemName: string): ListItem | undefined {
    return this.items.find(item => item.elementReportName.includes(itemName));
  }

  /**
   * Select a list item.
   * @param {string} listItem - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(listItem: string): Promise<void> {
    await this.initializeItemsIfNeeded();
    let item = this.getItemByName(listItem);
    if (!item) {
      // If the item is not in the initialized list, create it dynamically
      item = new ListItem(this.page, this.locator.getByText(`${listItem}`), `List Item: ${listItem}`);
    }
    await item.scrollIntoView();
    await item.click();
  }
}
