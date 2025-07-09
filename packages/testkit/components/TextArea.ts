import { Page, Locator, test } from "@playwright/test";
import { pressKey } from "../utils/common-actions";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { TextField } from "./TextField";
import { Text } from "./Text";

/**
 * Class representing a TextArea element.
 * Extends the BaseElement class.
 */
export class TextArea extends BaseElement {
  private wrapper: Button;
  private input: Text;
  private label: Text;
  private helperText: Text;

  /**
   * Create a TextArea element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextArea element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.wrapper = new Button(page, locator, `${elementReportName} - Wrapper`);
    this.input = new Text(page, locator.locator("textarea"), `${elementReportName} - Input`);
    this.label = new Text(page, locator.locator("label"), `${elementReportName} - Label`);
    this.helperText = new Text(page, locator.locator("div > div"), `${elementReportName} - Helper Text`);
  }

  /**
   * Set specified text in text area.
   * @param {string} text - Text to be filled in the text area.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.getElementReportName()}`, async () => {
      await this.clearText();
      await this.wrapper.click();
      await this.input.waitForElementToBeVisible();
      await this.input.getLocator().fill(text);
      await pressKey(this.getPage(), "Escape");
    });
  }

  /**
   * Clear the text from the text area.
   * @returns {Promise<void>}
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text for ${this.getElementReportName()}`, async () => {
      await this.input.getLocator().clear();
    });
  }

  /**
   * Get the text from the text area.
   * @returns {Promise<string>} The text from the text area.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.getElementReportName()}`, async () => {
      return await this.input.getLocator().inputValue();
    });
  }

  /**
   * Check if the text area is empty.
   * @returns {Promise<boolean>} True if the text area is empty.
   */
  async isEmpty(): Promise<boolean> {
    return await test.step(`Check if text area is empty for ${this.getElementReportName()}`, async () => {
      return (await this.input.getLocator().inputValue()) === "";
    });
  }

  /**
   * Get the label from the text area.
   * @returns {Promise<string>} The label from the text area.
   */
  async getLabel(): Promise<string> {
    return await test.step(`Get label for ${this.getElementReportName()}`, async () => {
      return await this.label.getText();
    });
  }

  /**
   * Get the helper text from the text area.
   * @returns {Promise<string>} The helper text from the text area.
   */
  async getHelperText(): Promise<string> {
    return await test.step(`Get helper text for ${this.getElementReportName()}`, async () => {
      return await this.helperText.getText();
    });
  }
}
