import { Page, Locator, test } from "@playwright/test";
import { TextField } from "./TextField";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";
import { IconButton } from "./IconButton";
import { Text } from "./Text";

/**
 * Class representing a Dropdown element.
 * Extends the BaseElement class.
 */
export class Dropdown extends BaseElement {
  private inputField: TextField;
  private inputValue: Text;
  private clearSelectionIconButton: IconButton;
  private noItemsText: Text;
  private placeholderText: Text;

  /**
   * Create a Dropdown element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Dropdown element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.inputField = new TextField(page, locator, `${elementReportName} - Input Field`);
    this.inputValue = new Text(
      page,
      locator.getByTestId("dropdown-option-content").getByTestId("text"),
      `${elementReportName} - Input Value`
    );
    this.clearSelectionIconButton = new IconButton(
      page,
      locator.locator(".clear-indicator"),
      `${elementReportName} - Clear Selection Icon Button`
    );
    this.noItemsText = new Text(
      page,
      locator.locator("div").filter({ hasText: "No options" }).first(),
      `${elementReportName} - No Items Text`
    );
    this.placeholderText = new Text(
      page,
      locator.locator("div[class*='placeholder']"),
      `${elementReportName} - Placeholder Text`
    );
  }

  /**
   * Get a dropdown item by item.
   * @param {string} item - The name of the item to get the dropdown item for.
   * @returns {Promise<ListItem>} The dropdown item.
   */
  async getDropdownItemByItem(item: string): Promise<ListItem> {
    return await test.step(`Get dropdown item by item ${item} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByRole("option", { name: item }), item);
    });
  }

  /**
   * Check if the dropdown is open.
   * @returns {Promise<boolean>} True if the dropdown is open, false otherwise.
   */
  async isDropdownOpen(): Promise<boolean> {
    return await test.step(`Check if dropdown is open for ${this.getElementReportName()}`, async () => {
      return await this.inputField.isExpanded();
    });
  }

  /**
   * Open the dropdown.
   * @returns {Promise<void>}
   */
  async open(): Promise<void> {
    await test.step(`Open dropdown for ${this.getElementReportName()}`, async () => {
      if (!(await this.isDropdownOpen())) {
        await this.click();
        // Wait for the dropdown to open
        await this.getPage().waitForTimeout(200);
      }
    });
  }

  /**
   * Close the dropdown.
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await test.step(`Close dropdown for ${this.getElementReportName()}`, async () => {
      if (await this.isDropdownOpen()) {
        await this.click();
        // Wait for the dropdown to close
        await this.getPage().waitForTimeout(200);
      }
    });
  }

  /**
   * Select an item from a dropdown.
   * @param {string} item - The value text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(`Select item ${item} for ${this.getElementReportName()}`, async () => {
      await this.open();
      await this.search(item);
      const listItem = await this.getDropdownItemByItem(item);
      await listItem.click();
    });
  }

  /**
   * Search for an item in the dropdown.
   * @param {string} item - The value text to be searched in the dropdown.
   * @returns {Promise<void>}
   */
  async search(item: string): Promise<void> {
    await test.step(`Search for ${item} for ${this.getElementReportName()}`, async () => {
      await this.inputField.setText(item);
      await this.placeholderText.waitForElementToBeHidden();
    });
  }

  /**
   * Select multiple items from a dropdown.
   * @param items - The values text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectMultipleItems(items: string[]): Promise<void> {
    await test.step(`Select multiple items ${items} for ${this.getElementReportName()}`, async () => {
      await this.open();
      for (const item of items) {
        await this.selectItem(item);
      }
    });
  }

  /**
   * Check if an item is selected.
   * @param {string} item - The name of the item to check if it is selected.
   * @returns {Promise<boolean>} True if the item is selected, false otherwise.
   */
  async isItemSelected(item: string): Promise<boolean> {
    return await test.step(`Check if item ${item} is selected for ${this.getElementReportName()}`, async () => {
      return (await this.getInputFieldValue()) === item;
    });
  }

  /**
   * Get the input field value.
   * @returns {Promise<string>} The input field value.
   */
  async getInputFieldValue(): Promise<string> {
    return await test.step(`Get input field value for ${this.getElementReportName()}`, async () => {
      if (await this.isPlaceholderTextVisible()) {
        return "";
      }
      await this.inputValue.waitForElementToBeVisible();
      return await this.inputValue.getText();
    });
  }

  /**
   * Clear the selection.
   * @returns {Promise<void>}
   */
  async clearSelection(): Promise<void> {
    await test.step(`Clear selection for ${this.getElementReportName()}`, async () => {
      await this.clearSelectionIconButton.click();
    });
  }

  /**
   * Check if the search result is visible.
   * @param {string} item - The name of the item to check if it is visible.
   * @returns {Promise<boolean>} True if the search result is visible, false otherwise.
   */
  async isSearchResultVisible(item: string): Promise<boolean> {
    return await test.step(`Check if search result is visible for ${item} for ${this.getElementReportName()}`, async () => {
      return (await this.getDropdownItemByItem(item)).isVisible(2000);
    });
  }

  /**
   * Check if the no items text is visible.
   * @returns {Promise<boolean>} True if the no items text is visible, false otherwise.
   */
  async isNoItemsTextVisible(): Promise<boolean> {
    return await test.step(`Check if no items text is visible for ${this.getElementReportName()}`, async () => {
      await this.noItemsText.waitForElementToBeVisible();
      return await this.noItemsText.isVisible();
    });
  }

  /**
   * Check if the no items text is hidden.
   * @returns {Promise<boolean>} True if the no items text is hidden, false otherwise.
   */
  async isNoItemsTextHidden(): Promise<boolean> {
    return await test.step(`Check if no items text is hidden for ${this.getElementReportName()}`, async () => {
      await this.noItemsText.waitForElementToBeHidden();
      return await this.noItemsText.isHidden();
    });
  }

  /**
   * Check if the placeholder text is visible.
   * @returns {Promise<boolean>} True if the placeholder text is visible, false otherwise.
   */
  async isPlaceholderTextVisible(): Promise<boolean> {
    return await test.step(`Check if placeholder text is visible for ${this.getElementReportName()}`, async () => {
      return await this.placeholderText.isVisible();
    });
  }

  /**
   * Wait for the placeholder text to be visible.
   * @returns {Promise<void>}
   */
  async waitForPlaceholderTextToBeVisible(): Promise<void> {
    await test.step(`Wait for placeholder text to be visible for ${this.getElementReportName()}`, async () => {
      await this.placeholderText.waitForElementToBeVisible();
    });
  }

  /**
   * Get the placeholder text.
   * @returns {Promise<string>} The placeholder text.
   */
  async getPlaceholderText(): Promise<string> {
    return await test.step(`Get placeholder text for ${this.getElementReportName()}`, async () => {
      return await this.placeholderText.getText();
    });
  }
}
