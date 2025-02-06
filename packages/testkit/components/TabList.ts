import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Tab } from "./Tab";

/**
 * Class representing a TabList element.
 * Extends the BaseElement class.
 */
export class TabList extends BaseElement {
  /**
   * Create a TabList.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TabList element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  async getAllTabs(): Promise<Tab[]> {
    let tabs: Tab[] = [];
    await test.step(`Get all tabs in ${this.elementReportName}`, async () => {
      const tabsLocators = await this.locator.locator("li").all();
      const tabPromises = tabsLocators.map(
        async tabLocator => new Tab(this.page, tabLocator, await tabLocator.innerText())
      );
      tabs = await Promise.all(tabPromises);
    });
    return tabs;
  }

  /**
   * Get a tab by its name.
   * @param {string} tabName - The name of the button to retrieve.
   * @returns {Button} The button with the specified name.
   */
  async getTabByName(tabName: string): Promise<Tab | undefined> {
    let tab: Tab | undefined;
    await test.step(`Get tab by name ${tabName} in ${this.elementReportName}`, async () => {
      tab = new Tab(this.page, this.locator.locator("li").filter({ hasText: tabName }), `Tab: ${tabName}`);
    });
    return tab;
  }

  /**
   * Select a tab by its name.
   * @param {string} tabName - The name of the tab to select.
   * @returns {Promise<void>}
   */
  async selectTab(tabName: string): Promise<void> {
    await test.step(`Select tab ${tabName} in ${this.elementReportName}`, async () => {
      const tab = new Tab(this.page, this.locator.locator("li").filter({ hasText: tabName }), `Tab Item: ${tabName}`);
      await tab.click();
    });
  }
}
