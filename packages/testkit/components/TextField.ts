import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Text } from "./Text";

/**
 * Class representing a TextField element.
 * Extends the BaseElement class.
 */
export class TextField extends BaseElement {
  private label: Text;
  private input: Text;
  private helperText: Text;
  private characterCount: Text;

  /**
   * Create a TextField element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextField element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.label = new Text(page, locator.locator("section > label"), `${elementReportName} - Label`);
    this.input = new Text(page, locator.locator("input"), `${elementReportName} - Input`);
    this.helperText = new Text(
      page,
      locator.locator("div[data-testid='text'] > span").first(),
      `${elementReportName} - Helper Text`
    );
    this.characterCount = new Text(
      page,
      locator.locator("div[data-testid='text'] > span").last(),
      `${elementReportName} - Character Count`
    );
  }

  /**
   * Set specified text in input element.
   * @param {string} text - Text to be filled in the input.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.getElementReportName()}`, async () => {
      await this.clearText();
      await this.input.getLocator().fill(text);
    });
  }

  /**
   * Clear the text in the input element.
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text for ${this.getElementReportName()}`, async () => {
      await this.input.getLocator().clear();
    });
  }

  /**
   * Get the text from the input element.
   * @returns {Promise<string>} The text from the input element.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.getElementReportName()}`, async () => {
      return await this.input.getLocator().inputValue();
    });
  }

  /**
   * Get the value of the input element.
   * @returns {Promise<string>}
   */
  async isEmpty(): Promise<boolean> {
    return await test.step(`Check if text field is empty for ${this.getElementReportName()}`, async () => {
      return (await this.input.getLocator().inputValue()) === "";
    });
  }

  /**
   * Get the label from the text field.
   * @returns {Promise<string>} The label from the text field.
   */
  async getLabel(): Promise<string> {
    return await test.step(`Get label for ${this.getElementReportName()}`, async () => {
      return await this.label.getText();
    });
  }

  /**
   * Get the helper text from the text field.
   * @returns {Promise<string>} The helper text from the text field.
   */
  async getHelperText(): Promise<string> {
    return await test.step(`Get helper text for ${this.getElementReportName()}`, async () => {
      return await this.helperText.getText();
    });
  }

  /**
   * Get the character count from the text field.
   * @returns {Promise<string>} The character count from the text field.
   */
  async getCharacterCount(): Promise<string> {
    return await test.step(`Get character count for ${this.getElementReportName()}`, async () => {
      return (await this.characterCount.getText()).split("\n")[0];
    });
  }

  /**
   * Check if the text field is expanded.
   * @returns {Promise<boolean>} True if the text field is expanded, false otherwise.
   */
  async isExpanded(): Promise<boolean> {
    return await test.step(`Check if text field is expanded for ${this.getElementReportName()}`, async () => {
      return await this.input.isExpanded();
    });
  }

  /**
   * Check if the text field is checked.
   * @returns {Promise<boolean>} True if the text field is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if text field is checked for ${this.getElementReportName()}`, async () => {
      return await this.input.isChecked();
    });
  }

  /**
   * Get the placeholder text from the text field.
   * @returns {Promise<string>} The placeholder text from the text field.
   */
  async getPlaceholderText(): Promise<string> {
    return await test.step(`Get placeholder text for ${this.getElementReportName()}`, async () => {
      return await this.input.getAttributeValue("placeholder");
    });
  }
}
