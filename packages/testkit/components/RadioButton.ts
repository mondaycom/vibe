import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Text } from "./Text";

/**
 * Class representing a RadioButton element.
 * Extends the BaseElement class.
 */
export class RadioButton extends BaseElement {
  private label: Text;

  /**
   * Create a RadioButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the RadioButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.label = new Text(page, locator.getByTestId("radio-button-label"), `${elementReportName} - Label`);
  }

  /**
   * Check the radio button.
   * @returns {Promise<void>}
   */
  async select(): Promise<void> {
    await test.step(`Check radio button for ${this.getElementReportName()}`, async () => {
      if (!(await this.isChecked())) {
        await this.getLocator().check();
      }
    });
  }

  /**
   * Uncheck the radio button.
   * @returns {Promise<void>}
   */
  async unselect(): Promise<void> {
    await test.step(`Uncheck radio button for ${this.getElementReportName()}`, async () => {
      if (await this.isChecked()) {
        await this.getLocator().uncheck();
      }
    });
  }

  /**
   * Check if the radio button is checked.
   * @returns {Promise<boolean>} True if the radio button is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if radio button is checked for ${this.getElementReportName()}`, async () => {
      return await this.getLocator().isChecked();
    });
  }

  /**
   * Get the label of the radio button.
   * @returns {Promise<string>} The label of the radio button.
   */
  async getLabel(): Promise<string> {
    return await test.step(`Get radio button label for ${this.getElementReportName()}`, async () => {
      return await this.label.getText();
    });
  }
}
