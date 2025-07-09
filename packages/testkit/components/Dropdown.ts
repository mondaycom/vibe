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
  private noOptionsText: Text;
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
    this.noOptionsText = new Text(
      page,
      locator.locator("div").filter({ hasText: "No options" }).first(),
      `${elementReportName} - No Options Text`
    );
    this.placeholderText = new Text(
      page,
      locator.locator("div[class*='placeholder']"),
      `${elementReportName} - Placeholder Text`
    );
  }

  /**
   * Get a dropdown item by option.
   * @param {string} option - The name of the option to get the dropdown item for.
   * @returns {Promise<ListItem>} The dropdown item.
   */
  private async getDropdownItemByOption(option: string): Promise<ListItem> {
    return await test.step(`Get dropdown item by option ${option} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByRole("option", { name: option }), option);
    });
  }

  /**
   * Check if the dropdown is open.
   * @returns {Promise<boolean>} True if the dropdown is open, false otherwise.
   */
  async isOpen(): Promise<boolean> {
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
      if (!(await this.isOpen())) {
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
      if (await this.isOpen()) {
        await this.click();
        // Wait for the dropdown to close
        await this.getPage().waitForTimeout(200);
      }
    });
  }

  /**
   * Select an option from a dropdown.
   * @param {string} option - The value text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectOption(option: string): Promise<void> {
    await test.step(`Select option ${option} for ${this.getElementReportName()}`, async () => {
      await this.open();
      await this.search(option);
      const listItem = await this.getDropdownItemByOption(option);
      await listItem.click();
    });
  }

  /**
   * Search for an option in the dropdown.
   * @param {string} option - The value text to be searched in the dropdown.
   * @returns {Promise<void>}
   */
  async search(option: string): Promise<void> {
    await test.step(`Search for ${option} for ${this.getElementReportName()}`, async () => {
      await this.inputField.setText(option);
      await this.placeholderText.waitForElementToBeHidden();
    });
  }

  /**
   * Select multiple options from a dropdown.
   * @param options - The values text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectMultipleOptions(options: string[]): Promise<void> {
    await test.step(`Select multiple options ${options} for ${this.getElementReportName()}`, async () => {
      await this.open();
      for (const option of options) {
        await this.selectOption(option);
      }
    });
  }

  /**
   * Check if an option is selected.
   * @param {string} option - The name of the option to check if it is selected.
   * @returns {Promise<boolean>} True if the option is selected, false otherwise.
   */
  async isOptionSelected(option: string): Promise<boolean> {
    return await test.step(`Check if option ${option} is selected for ${this.getElementReportName()}`, async () => {
      return (await this.getInputFieldValue()) === option;
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
   * @param {string} option - The name of the option to check if it is visible.
   * @returns {Promise<boolean>} True if the search result is visible, false otherwise.
   */
  async isSearchResultVisible(option: string): Promise<boolean> {
    return await test.step(`Check if search result is visible for ${option} for ${this.getElementReportName()}`, async () => {
      return (await this.getDropdownItemByOption(option)).isVisible(2000);
    });
  }

  /**
   * Check if the no options text is visible.
   * @returns {Promise<boolean>} True if the no options text is visible, false otherwise.
   */
  async isNoOptionsTextVisible(): Promise<boolean> {
    return await test.step(`Check if no options text is visible for ${this.getElementReportName()}`, async () => {
      await this.noOptionsText.waitForElementToBeVisible();
      return await this.noOptionsText.isVisible();
    });
  }

  /**
   * Check if the no options text is hidden.
   * @returns {Promise<boolean>} True if the no options text is hidden, false otherwise.
   */
  async isNoOptionsTextHidden(): Promise<boolean> {
    return await test.step(`Check if no options text is hidden for ${this.getElementReportName()}`, async () => {
      await this.noOptionsText.waitForElementToBeHidden();
      return await this.noOptionsText.isHidden();
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
