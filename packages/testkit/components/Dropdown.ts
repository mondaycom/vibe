import { Page, Locator, test } from "@playwright/test";
import { TextField } from "./TextField";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a DropDown element.
 * Extends the BaseElement class.
 */
export class Dropdown extends BaseElement {
  inputField: TextField;
  /**
   * Create a DropDown.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the DropDown element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.inputField = new TextField(this.page, this.locator.locator("input"), "Dropdown Input Field");
  }

  /**
   * Open the dropdown.
   * @returns {Promise<void>}
   */
  async open(): Promise<void> {
    await test.step(`Open ${this.elementReportName}`, async () => {
      if (!(await this.isDropdownOpen())) {
        await this.locator.click();
      }
    });
  }

  /**
   * Select an item from a dropdown.
   * @param {string} item - The value text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(`Select ${item} from ${this.elementReportName}`, async () => {
      await this.open();
      await this.inputField.setText(item);
      const dropdownItem = this.locator.getByRole("option", { name: item });
      await dropdownItem.click();
    });
  }

  /**
   * Select multiple items from a dropdown.
   * @param items - The values text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectMultipleItems(items: string[]): Promise<void> {
    await test.step(`Select ${items} from ${this.elementReportName}`, async () => {
      await this.open();
      for (const item of items) {
        await this.inputField.setText(item);
        const dropdownItem = this.locator.getByRole("option", { name: item });
        await dropdownItem.click();
      }
    });
  }

  /**
   * Check if the dropdown is open.
   * @returns {Promise<boolean>}
   */
  private async isDropdownOpen(): Promise<boolean> {
    let isOpen = false;
    await test.step(`Check if ${this.elementReportName} is open`, async () => {
      const expandedAttribute = await this.inputField.getAttributeValue("aria-expanded");
      isOpen = expandedAttribute === "true" ? true : false;
    });
    return isOpen;
  }
}
