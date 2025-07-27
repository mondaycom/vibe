import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Tab } from "./Tab";

/**
 * Class representing a TabList element.
 * Extends the BaseElement class.
 */
export class TabList extends BaseElement {
  /**
   * Create a TabList element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TabList element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get a tab by its name.
   * @param {string} tabName - The name of the tab to retrieve.
   * @returns {Promise<Tab>} The tab with the specified name.
   */
  async getTabByName(tabName: string): Promise<Tab> {
    return await test.step(`Get tab by name ${tabName} for ${this.elementReportName}`, async () => {
      return new Tab(this.page, this.locator.getByRole("tab", { name: tabName }), tabName);
    });
  }

  /**
   * Get all tabs.
   * @returns {Promise<Tab[]>} An array of tabs.
   */
  async getAllTabs(): Promise<Tab[]> {
    return await test.step(`Get all tabs for ${this.elementReportName}`, async () => {
      const tabs = await this.locator.getByRole("tab").all();
      return tabs.map((tab, index) => new Tab(this.page, tab, `${this.elementReportName} - Tab ${index}`));
    });
  }

  /**
   * Get a tab by its index.
   * @param {number} index - The index of the tab to retrieve.
   * @returns {Promise<Tab>} The tab with the specified index.
   */
  async getTabByIndex(index: number): Promise<Tab> {
    return await test.step(`Get tab by index ${index} for ${this.elementReportName}`, async () => {
      return new Tab(this.page, this.locator.getByRole("tab").nth(index), `${this.elementReportName} - Tab ${index}`);
    });
  }

  /**
   * Select a tab by its name.
   * @param {string} tabName - The name of the tab to select.
   * @returns {Promise<void>}
   */
  async selectTab(tabName: string): Promise<void> {
    await test.step(`Select tab ${tabName} for ${this.elementReportName}`, async () => {
      const tab = await this.getTabByName(tabName);
      await tab.click();
    });
  }

  /**
   * Get the name of the selected tab.
   * @returns {Promise<string>} The name of the selected tab.
   */
  async getSelectedTabName(): Promise<string> {
    return await test.step(`Get selected tab name for ${this.elementReportName}`, async () => {
      const tabs = await this.getAllTabs();
      let selectedTab: Tab | null = null;

      for (const tab of tabs) {
        if (await tab.isSelected()) {
          selectedTab = tab;
          break;
        }
      }

      if (!selectedTab) {
        throw new Error("No selected tab found");
      }

      return await selectedTab.getText();
    });
  }

  /**
   * Check if a tab is selected.
   * @param {string} tabName - The name of the tab to check.
   * @returns {Promise<boolean>} True if the tab is selected.
   */
  async isTabSelected(tabName: string): Promise<boolean> {
    return await test.step(`Check if tab ${tabName} is selected for ${this.elementReportName}`, async () => {
      const tab = await this.getTabByName(tabName);
      return await tab.isSelected();
    });
  }

  /**
   * Get the name of a tab by its index.
   * @param {number} index - The index of the tab to retrieve.
   * @returns {Promise<string>} The name of the tab with the specified index.
   */
  async getTabNameByIndex(index: number): Promise<string> {
    return await test.step(`Get tab name by index ${index} for ${this.elementReportName}`, async () => {
      const tab = await this.getTabByIndex(index);
      return await tab.getText();
    });
  }
}
