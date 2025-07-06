import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Text } from "./Text";
import { TextField } from "./TextField";

/**
 * Class representing a RadioButton element.
 * Extends the BaseElement class.
 */
export class RadioButton extends BaseElement {
  private radioButton: TextField;
  private label: Text;

  /**
   * Create a RadioButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the RadioButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.radioButton = new TextField(
      page,
      locator.locator("input[type='radio']"),
      `${elementReportName} - Radio Button`
    );
    this.label = new Text(page, locator.getByTestId("radio-button-label"), `${elementReportName} - Label`);
  }

  /**
   * Check the radio button.
   * @returns {Promise<void>}
   */
  async check(): Promise<void> {
    await test.step(`Check radio button for ${this.getElementReportName()}`, async () => {
      await this.radioButton.getLocator().check();
    });
  }

  /**
   * Uncheck the radio button.
   * @returns {Promise<void>}
   */
  async uncheck(): Promise<void> {
    await test.step(`Uncheck radio button for ${this.getElementReportName()}`, async () => {
      await this.radioButton.getLocator().uncheck();
    });
  }

  /**
   * Check if the radio button is checked.
   * @returns {Promise<boolean>} True if the radio button is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if radio button is checked for ${this.getElementReportName()}`, async () => {
      return await this.radioButton.getLocator().isChecked();
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
