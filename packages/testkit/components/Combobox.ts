import { Locator, Page, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";
import { IconButton } from "./IconButton";
import { Text } from "./Text";
import { Search } from "./Search";

/**
 * Class representing a Combobox element.
 * Extends the BaseElement class.
 */
export class Combobox extends BaseElement {
  private searchField: Search;
  private clearSearchIconButton: IconButton;
  private noResultsText: Text;

  /**
   * Create a Combobox element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Combobox element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.searchField = new Search(page, locator, `${elementReportName} - Search Field`);
    this.clearSearchIconButton = new IconButton(
      page,
      locator.getByTestId("clean-search-button_combobox-search"),
      `${elementReportName} - Clear Search Icon Button`
    );
    this.noResultsText = new Text(
      page,
      locator.locator("span", { hasText: "No results found" }),
      `${elementReportName} - No Results Found Text`
    );
  }

  /**
   * Get a combobox item by option.
   * @param {string} option - The name of the option to get the combobox item for.
   * @returns {Promise<ListItem>} The combobox item.
   */
  async getComboboxItemByOption(option: string): Promise<ListItem> {
    return await test.step(`Get combobox item by option ${option} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByText(option), option);
    });
  }

  /**
   * Select an item from the combobox.
   * @param {string} item - The name of the item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(`Select item ${item} for ${this.getElementReportName()}`, async () => {
      await this.search(item);
      const comboBoxItem = await this.getComboboxItemByOption(item);
      await comboBoxItem.click();
    });
  }

  /**
   * Search for an option in the combobox.
   * @param {string} option - The name of the option to search for.
   * @returns {Promise<void>}
   */
  async search(option: string): Promise<void> {
    await test.step(`Search for ${option} for ${this.getElementReportName()}`, async () => {
      await this.searchField.setText(option);
    });
  }

  /**
   * Clear the search.
   * @returns {Promise<void>}
   */
  async clearSearch(): Promise<void> {
    await test.step(`Clear search for ${this.getElementReportName()}`, async () => {
      await this.clearSearchIconButton.click();
    });
  }

  /**
   * Check if the no results text is visible.
   * @returns {Promise<boolean>} True if the no results text is visible, false otherwise.
   */
  async isNoResultsTextVisible(): Promise<boolean> {
    return await test.step(`Check if no results text is visible for ${this.getElementReportName()}`, async () => {
      await this.noResultsText.waitForElementToBeVisible();
      return await this.noResultsText.isVisible();
    });
  }

  /**
   * Check if the no results text is hidden.
   * @returns {Promise<boolean>} True if the no results text is hidden, false otherwise.
   */
  async isNoResultsTextHidden(): Promise<boolean> {
    return await test.step(`Check if no results text is hidden for ${this.getElementReportName()}`, async () => {
      await this.noResultsText.waitForElementToBeHidden();
      return await this.noResultsText.isHidden();
    });
  }

  /**
   * Get the search input value.
   * @returns {Promise<string>} The search input value.
   */
  async getSearchInputValue(): Promise<string> {
    return await test.step(`Get search input value for ${this.getElementReportName()}`, async () => {
      return await this.searchField.getText();
    });
  }

  /**
   * Check if the search result is visible.
   * @param {string} item - The name of the item to check if the search result is visible for.
   * @returns {Promise<boolean>} True if the search result is visible, false otherwise.
   */
  async isSearchResultVisible(item: string): Promise<boolean> {
    return await test.step(`Check if search result is visible for ${item} for ${this.getElementReportName()}`, async () => {
      return (await this.getComboboxItemByOption(item)).isVisible(2000);
    });
  }
}
