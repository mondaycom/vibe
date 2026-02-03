import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { pressKey } from "../utils/common-actions";

/**
 * Class representing an EditableText element.
 * Extends the BaseElement class.
 */
export class EditableText extends BaseElement {
  /**
   * Create an EditableText element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the EditableText element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get the input element locator (visible in edit mode).
   * @returns {Locator} The input element locator.
   */
  private getInputLocator(): Locator {
    return this.getLocator().locator("input");
  }

  /**
   * Get the textarea element locator (visible in edit mode for multiline).
   * @returns {Locator} The textarea element locator.
   */
  private getTextareaLocator(): Locator {
    return this.getLocator().locator("textarea");
  }

  /**
   * Get the active input element (input or textarea based on multiline mode).
   * @returns {Locator} The active input element locator.
   */
  private getActiveInputLocator(): Locator {
    return this.getLocator().locator("input, textarea");
  }

  /**
   * Enter edit mode by clicking on the component.
   * @returns {Promise<void>}
   */
  async enterEditMode(): Promise<void> {
    await test.step(`Enter edit mode for ${this.getElementReportName()}`, async () => {
      if (!(await this.isInEditMode())) {
        await this.click();
        await this.getActiveInputLocator().waitFor({ state: "visible", timeout: 5000 });
      }
    });
  }

  /**
   * Exit edit mode by pressing Enter key.
   * @returns {Promise<void>}
   */
  async exitEditModeWithEnter(): Promise<void> {
    await test.step(`Exit edit mode with Enter for ${this.getElementReportName()}`, async () => {
      await pressKey(this.getPage(), "Enter");
    });
  }

  /**
   * Exit edit mode by pressing Escape key (cancels changes).
   * @returns {Promise<void>}
   */
  async exitEditModeWithEscape(): Promise<void> {
    await test.step(`Exit edit mode with Escape for ${this.getElementReportName()}`, async () => {
      await pressKey(this.getPage(), "Escape");
    });
  }

  /**
   * Exit edit mode by clicking outside the component.
   * @returns {Promise<void>}
   */
  async exitEditModeWithBlur(): Promise<void> {
    await test.step(`Exit edit mode with blur for ${this.getElementReportName()}`, async () => {
      await this.removeFocus();
    });
  }

  /**
   * Set the text value in the editable text component.
   * Enters edit mode, clears existing text, types new text, and confirms with Enter.
   * @param {string} text - The text to set.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: "${text}" for ${this.getElementReportName()}`, async () => {
      await this.enterEditMode();
      const input = this.getActiveInputLocator();
      await input.fill(text);
      await this.exitEditModeWithEnter();
    });
  }

  /**
   * Clear the text and set new text value.
   * @param {string} text - The text to set.
   * @returns {Promise<void>}
   */
  async clearAndSetText(text: string): Promise<void> {
    await test.step(`Clear and set text: "${text}" for ${this.getElementReportName()}`, async () => {
      await this.enterEditMode();
      const input = this.getActiveInputLocator();
      await input.clear();
      await input.fill(text);
      await this.exitEditModeWithEnter();
    });
  }

  /**
   * Get the current text value of the editable text component.
   * @returns {Promise<string>} The current text value.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.getElementReportName()}`, async () => {
      // If in edit mode, get value from input
      if (await this.isInEditMode()) {
        return await this.getActiveInputLocator().inputValue();
      }
      // If in view mode, get text from the typography element
      return await this.getLocator().innerText();
    });
  }

  /**
   * Get the input value when in edit mode.
   * @returns {Promise<string>} The input value.
   */
  async getInputValue(): Promise<string> {
    return await test.step(`Get input value for ${this.getElementReportName()}`, async () => {
      return await this.getActiveInputLocator().inputValue();
    });
  }

  /**
   * Check if the component is currently in edit mode.
   * @returns {Promise<boolean>} True if in edit mode, false otherwise.
   */
  async isInEditMode(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is in edit mode`, async () => {
      const inputVisible = await this.getInputLocator().isVisible();
      const textareaVisible = await this.getTextareaLocator().isVisible();
      return inputVisible || textareaVisible;
    });
  }

  /**
   * Check if the component is in multiline mode.
   * @returns {Promise<boolean>} True if in multiline mode, false otherwise.
   */
  async isMultiline(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is multiline`, async () => {
      await this.enterEditMode();
      const isMultiline = await this.getTextareaLocator().isVisible();
      await this.exitEditModeWithEscape();
      return isMultiline;
    });
  }

  /**
   * Check if the component is read-only.
   * @returns {Promise<boolean>} True if read-only, false otherwise.
   */
  async isReadOnly(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is read-only`, async () => {
      // Try to enter edit mode
      await this.click();
      // Wait a bit for potential mode change
      await this.getPage().waitForTimeout(100);
      // Check if edit mode was entered
      const isInEditMode = await this.isInEditMode();
      // If we entered edit mode, exit and return false
      if (isInEditMode) {
        await this.exitEditModeWithEscape();
        return false;
      }
      return true;
    });
  }

  /**
   * Type text character by character (useful for testing IME or special input scenarios).
   * @param {string} text - The text to type.
   * @returns {Promise<void>}
   */
  async typeText(text: string): Promise<void> {
    await test.step(`Type text: "${text}" for ${this.getElementReportName()}`, async () => {
      await this.enterEditMode();
      const input = this.getActiveInputLocator();
      await input.pressSequentially(text);
    });
  }

  /**
   * Get the placeholder text.
   * @returns {Promise<string>} The placeholder text.
   */
  async getPlaceholder(): Promise<string> {
    return await test.step(`Get placeholder for ${this.getElementReportName()}`, async () => {
      await this.enterEditMode();
      const placeholder = await this.getActiveInputLocator().getAttribute("placeholder");
      await this.exitEditModeWithEscape();
      return placeholder || "";
    });
  }
}
