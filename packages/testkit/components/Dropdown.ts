import { Page, Locator, test } from "@playwright/test";
import { TextField } from "./TextField";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";

/**
 * Class representing a Dropdown element.
 * Extends the BaseElement class.
 */
export class Dropdown extends BaseElement {
  private inputField: TextField;

  /**
   * Create a Dropdown element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Dropdown element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.inputField = new TextField(page, locator.locator("input"), `${elementReportName} - Input Field`);
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
   * @returns {Promise<boolean>}
   */
  private async isOpen(): Promise<boolean> {
    return await test.step(`Check if dropdown is open for ${this.getElementReportName()}`, async () => {
      return (await this.inputField.getAttributeValue("aria-expanded")) === "true";
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
      await this.inputField.setText(option);
      const listItem = await this.getDropdownItemByOption(option);
      await listItem.click();
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
      const listItem = await this.getDropdownItemByOption(option);
      return (await listItem.getAttributeValue("aria-selected")) === "true";
    });
  }
}
