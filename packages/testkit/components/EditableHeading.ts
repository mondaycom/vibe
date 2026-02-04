import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { pressKey } from "../utils/common-actions";

/**
 * Class representing an EditableHeading element.
 * Extends the BaseElement class.
 */
export class EditableHeading extends BaseElement {
  /**
   * Create an EditableHeading element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the EditableHeading element.
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
   * Enter edit mode by clicking on the component.
   * @returns {Promise<void>}
   */
  async enterEditMode(): Promise<void> {
    await test.step(`Enter edit mode for ${this.getElementReportName()}`, async () => {
      if (!(await this.isInEditMode())) {
        await this.click();
        await this.getInputLocator().waitFor({ state: "visible", timeout: 5000 });
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
      await this.getInputLocator().waitFor({ state: "hidden", timeout: 5000 });
      // Wait for view mode to be ready
      await this.getPage().waitForTimeout(50);
    });
  }

  /**
   * Exit edit mode by pressing Escape key (cancels changes).
   * @returns {Promise<void>}
   */
  async exitEditModeWithEscape(): Promise<void> {
    await test.step(`Exit edit mode with Escape for ${this.getElementReportName()}`, async () => {
      await pressKey(this.getPage(), "Escape");
      await this.getInputLocator().waitFor({ state: "hidden", timeout: 5000 });
      // Wait for view mode to be ready
      await this.getPage().waitForTimeout(50);
    });
  }

  /**
   * Exit edit mode by clicking outside the component.
   * @returns {Promise<void>}
   */
  async exitEditModeWithBlur(): Promise<void> {
    await test.step(`Exit edit mode with blur for ${this.getElementReportName()}`, async () => {
      await this.removeFocus();
      await this.getInputLocator().waitFor({ state: "hidden", timeout: 5000 });
      // Wait for view mode to be ready
      await this.getPage().waitForTimeout(50);
    });
  }

  /**
   * Set the text value in the editable heading component.
   * Enters edit mode, clears existing text, types new text, and confirms with Enter.
   * @param {string} text - The text to set.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: "${text}" for ${this.getElementReportName()}`, async () => {
      await this.enterEditMode();
      const input = this.getInputLocator();
      await input.clear();
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
      const input = this.getInputLocator();
      await input.clear();
      await input.fill(text);
      await this.exitEditModeWithEnter();
    });
  }

  /**
   * Get the current text value of the editable heading component.
   * @returns {Promise<string>} The current text value.
   */
  async getText(): Promise<string> {
    return await test.step(`Get text for ${this.getElementReportName()}`, async () => {
      // If in edit mode, get value from input
      if (await this.isInEditMode()) {
        return await this.getInputLocator().inputValue();
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
      return await this.getInputLocator().inputValue();
    });
  }

  /**
   * Check if the component is currently in edit mode.
   * @returns {Promise<boolean>} True if in edit mode, false otherwise.
   */
  async isInEditMode(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is in edit mode`, async () => {
      return await this.getInputLocator().isVisible();
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
      
      // Wait for either input to appear or confirm it doesn't
      try {
        await this.getInputLocator().waitFor({ state: "visible", timeout: 500 });
        // If we got here, we entered edit mode - exit and return false
        await this.exitEditModeWithEscape();
        return false;
      } catch {
        // Input didn't appear, it's read-only
        return true;
      }
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
      const input = this.getInputLocator();
      await input.clear();
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
      const placeholder = await this.getInputLocator().getAttribute("placeholder");
      await this.exitEditModeWithEscape();
      return placeholder || "";
    });
  }
}
