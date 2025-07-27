import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { pressKey } from "../utils/common-actions";

/**
 * Class representing a TextField element.
 * Extends the BaseElement class.
 */
export class TextField extends BaseElement {
  /**
   * Create a TextField element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextField element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Set specified text in input element.
   * @param {string} text - Text to be filled in the input.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.elementReportName}`, async () => {
      await this.clearText();
      await this.locator.fill(text);
    });
  }

  /**
   * Clear the text in the input element.
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text for ${this.elementReportName}`, async () => {
      await this.locator.clear();
    });
  }

  /**
   * Get the text from the input element.
   * @returns {Promise<string>} The text from the input element.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.elementReportName}`, async () => {
      return await this.locator.inputValue();
    });
  }

  /**
   * Get the value of the input element.
   * @returns {Promise<string>}
   */
  async isEmpty(): Promise<boolean> {
    return await test.step(`Check if text field is empty for ${this.elementReportName}`, async () => {
      return (await this.locator.inputValue()) === "";
    });
  }

  /**
   * Exit the edit mode by pressing the Escape key.
   * @returns {Promise<void>}
   */
  async exitEditMode(): Promise<void> {
    await test.step("Exit edit mode", async () => {
      await pressKey(this.page, "Escape");
    });
  }
}
