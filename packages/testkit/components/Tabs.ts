import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";

/**
 * Class representing a Tabs element.
 * Extends the BaseElement class.
 */
export class Tabs extends BaseElement {
  /**
   * Create a Tabs element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Tabs element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get a tab by its name.
   * @param {string} tabName - The name of the tab to retrieve.
   * @returns {Promise<ListItem>} The tab with the specified name.
   */
  private async getTabByName(tabName: string): Promise<ListItem> {
    return await test.step(`Get tab by name ${tabName} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByRole("tab", { name: tabName }), tabName);
    });
  }

  /**
   * Get all tabs.
   * @returns {Promise<ListItem[]>} An array of tabs.
   */
  private async getAllTabs(): Promise<ListItem[]> {
    return await test.step(`Get all tabs for ${this.getElementReportName()}`, async () => {
      const tabs = await this.getLocator().getByRole("tab").all();
      return tabs.map(
        (tab, index) => new ListItem(this.getPage(), tab, `${this.getElementReportName()} - Tab ${index}`)
      );
    });
  }

  /**
   * Select a tab by its name.
   * @param {string} tabName - The name of the tab to select.
   * @returns {Promise<void>}
   */
  async selectTab(tabName: string): Promise<void> {
    await test.step(`Select tab ${tabName} for ${this.getElementReportName()}`, async () => {
      const tab = await this.getTabByName(tabName);
      await tab.click();
    });
  }

  /**
   * Get the name of the selected tab.
   * @returns {Promise<string>} The name of the selected tab.
   */
  async getSelectedTabName(): Promise<string | undefined> {
    return await test.step(`Get selected tab name for ${this.getElementReportName()}`, async () => {
      const tabs = await this.getAllTabs();
      const selectedTab = tabs.find(async tab => (await tab.getAttributeValue("aria-selected")) === "true");
      return selectedTab?.getText();
    });
  }

  /**
   * Check if a tab is selected.
   * @param {string} tabName - The name of the tab to check.
   * @returns {Promise<boolean>} True if the tab is selected.
   */
  async isTabSelected(tabName: string): Promise<boolean> {
    return await test.step(`Check if tab ${tabName} is selected for ${this.getElementReportName()}`, async () => {
      const tab = await this.getTabByName(tabName);
      return (await tab.getAttributeValue("aria-selected")) === "true";
    });
  }
}
