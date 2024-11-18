import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "../BaseElement";
import { Tab } from "./Tab";

/**
 * Class representing a TabList element.
 * Extends the BaseElement class.
 */
export class TabList extends BaseElement {
  private items: Tab[];  // List of tabs
  private tabsInitialized: boolean;

  /**
   * Create a TabList.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TabList element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.items = [];
    this.tabsInitialized = false;
  }

  /**
   * Initialize tabs if they are not already initialized.
   * @returns {Promise<void>}
   */
  async initializeTabsIfNeeded(): Promise<void> {
    await test.step(`Initialize ${this.elementReportName} if needed`, async () => {
      if (!this.tabsInitialized) {
        await this.initializeTabs();
        this.tabsInitialized = true;
      }
    });
  }

  /**
   * Initialize the tabs by locating all tab elements.
   * @returns {Promise<void>}
   */
  async initializeTabs(): Promise<void> {
    await test.step(`Initialize ${this.elementReportName}`, async () => {
      await this.waitForElementsGroup(this.locator.locator("li"), this.elementReportName);
      const tabElements = await this.locator.locator("li").all();
      this.items = await Promise.all(
        tabElements.map(async (locator) => {
          const tabName = await locator.innerText();
          return new Tab(this.page, locator.getByText(`${tabName}`), `Tab Item: ${tabName}`);
        })
      );
    });
  }

  /**
   * Get a tab item by its name.
   * @param {string} itemName - The name of the tab item to retrieve.
   * @returns {Tab | undefined} The tab item with the specified name or undefined if not found.
   */
  getItemByName(itemName: string): Tab | undefined {
    return this.items.find(item => item.elementReportName.includes(itemName));
  }

  /**
   * Select a tab by its name.
   * @param {string} tabName - The name of the tab to select.
   * @returns {Promise<void>}
   */
  async selectTab(tabName: string): Promise<void> {
    await this.initializeTabsIfNeeded();
    const item = this.getItemByName(tabName);
    if (item) {
      await item.click();
    } else {
      throw new Error(`Tab with name "${tabName}" not found`);
    }
  }
}
