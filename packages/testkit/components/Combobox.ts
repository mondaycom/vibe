import { Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Search } from "./Search";
import { ListItem } from "./ListItem";

export class Combobox extends BaseElement {
  private searchInput: Search;
  /**
   * Create a Combobox.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Combobox element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.searchInput = new Search(page, this.locator.locator("[role='search']"), `${elementReportName} Search Input`);
  }

  /**
   * Select an item from the combobox.
   * @param {string} item - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await this.searchInput.setText(item);
    const comboBoxItem = new ListItem(
      this.page,
      this.locator.locator(`[role='listbox']:has-text("${item}")`),
      `Select Combobox Item: ${item}`
    );
    await comboBoxItem.click();
  }
}
