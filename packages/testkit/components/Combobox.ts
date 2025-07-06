import { Locator, Page, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";
import { TextField } from "./TextField";

/**
 * Class representing a Combobox element.
 * Extends the BaseElement class.
 */
export class Combobox extends BaseElement {
  private searchField: TextField;

  /**
   * Create a Combobox element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Combobox element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.searchField = new TextField(page, locator.locator("[role='search']"), `${elementReportName} - Search Field`);
  }

  /**
   * Get a combobox item by option.
   * @param {string} option - The name of the option to get the combobox item for.
   * @returns {Promise<ListItem>} The combobox item.
   */
  private async getComboboxItemByOption(option: string): Promise<ListItem> {
    return await test.step(`Get combobox item by option ${option} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByText(option), option);
    });
  }

  /**
   * Select an option from the combobox.
   * @param {string} option - The name of the option to select.
   * @returns {Promise<void>}
   */
  async selectOption(option: string): Promise<void> {
    await test.step(`Select option ${option} for ${this.getElementReportName()}`, async () => {
      await this.searchField.setText(option);
      const comboBoxItem = await this.getComboboxItemByOption(option);
      await comboBoxItem.click();
    });
  }
}
