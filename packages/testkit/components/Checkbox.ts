import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { TextField } from "./TextField";
import { Text } from "./Text";

/**
 * Class representing a Checkbox element.
 * Extends the BaseElement class.
 */
export class Checkbox extends BaseElement {
  private checkbox: TextField;
  private label: Text;

  /**
   * Create a Checkbox element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Checkbox element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.checkbox = new TextField(page, locator.getByTestId("checkbox-checkbox"), `${elementReportName} - Checkbox`);
    this.label = new Text(page, locator.getByTestId("checkbox-label"), `${elementReportName} - Label`);
  }

  /**
   * Set the checkbox to checked.
   * @returns {Promise<void>}
   */
  async setChecked(): Promise<void> {
    await test.step(`Check checkbox for ${this.getElementReportName()}`, async () => {
      if (!(await this.isChecked())) {
        await this.checkbox.getLocator().check();
      }
    });
  }

  /**
   * Set the checkbox to unchecked.
   * @returns {Promise<void>}
   */
  async setUnchecked(): Promise<void> {
    await test.step(`Uncheck checkbox for ${this.getElementReportName()}`, async () => {
      if (await this.isChecked()) {
        await this.checkbox.getLocator().uncheck();
      }
    });
  }

  /**
   * Check if the checkbox is checked.
   * @returns {Promise<boolean>} True if the checkbox is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if checkbox is checked for ${this.getElementReportName()}`, async () => {
      return await this.checkbox.getLocator().isChecked();
    });
  }

  /**
   * Get the label of the checkbox.
   * @returns {Promise<string>} The label of the checkbox.
   */
  async getLabel(): Promise<string> {
    return await test.step(`Get checkbox label for ${this.getElementReportName()}`, async () => {
      return await this.label.getText();
    });
  }
}
