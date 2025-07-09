import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { TextField } from "./TextField";
import { IconButton } from "./IconButton";

/**
 * Class representing a Search element.
 * Extends the BaseElement class.
 */
export class Search extends BaseElement {
  private input: TextField;
  private clearSearchIconButton: IconButton;

  /**
   * Create a Search element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Search element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.input = new TextField(page, locator, `${elementReportName} - Input`);
    this.clearSearchIconButton = new IconButton(
      page,
      locator.locator("button[data-testid='clean-search-button']"),
      `${elementReportName} - Clear Search Icon Button`
    );
  }

  /**
   * Set specified text in search field.
   * @param {string} text - Text to be filled in the search field.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.getElementReportName()}`, async () => {
      await this.input.setText(text);
    });
  }

  /**
   * Clear the text in the search field.
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text for ${this.getElementReportName()}`, async () => {
      await this.input.clearText();
    });
  }

  /**
   * Get the text from the search field.
   * @returns {Promise<string>} The text from the search field.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.getElementReportName()}`, async () => {
      return await this.input.getText();
    });
  }

  /**
   * Check if the search field is empty.
   * @returns {Promise<string>}
   */
  async isEmpty(): Promise<boolean> {
    return await test.step(`Check if search field is empty for ${this.getElementReportName()}`, async () => {
      return await this.input.isEmpty();
    });
  }

  /**
   * Get the placeholder text from the search field.
   * @returns {Promise<string>} The placeholder text from the search field.
   */
  async getPlaceholderText(): Promise<string> {
    return await test.step(`Get placeholder for ${this.getElementReportName()}`, async () => {
      return await this.input.getPlaceholderText();
    });
  }

  /**
   * Click the clear search button.
   * @returns {Promise<void>}
   */
  async clickClearSearchButton(): Promise<void> {
    await test.step(`Clear search for ${this.getElementReportName()}`, async () => {
      await this.clearSearchIconButton.click();
    });
  }
}
