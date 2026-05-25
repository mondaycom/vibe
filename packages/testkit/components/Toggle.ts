import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { TextField } from "./TextField";

/**
 * Class representing a Toggle element.
 * Extends the BaseElement class.
 */
export class Toggle extends BaseElement {
  private inputLocator: Locator;
  private buttonLocator: Locator;

  /**
   * Create a Toggle element. Can handle both wrapper elements that contain input and button elements,
   * or direct input elements.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for either the wrapper element or the input element directly.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);

    // Store locators for dynamic resolution
    this.inputLocator = locator;
    this.buttonLocator = locator;
  }

  /**
   * Get the input element, dynamically determining the correct locator.
   * @private
   */
  private async getInput(): Promise<TextField> {
    // Try to determine if the main locator is an input or wrapper
    try {
      // First, try if the locator itself is an input
      const tagName = await this.inputLocator.evaluate(el => el.tagName.toLowerCase());
      if (tagName === "input") {
        return new TextField(this.getPage(), this.inputLocator, `${this.getElementReportName()} - Input`);
      }
    } catch {
      // If evaluation fails, continue to try child input
    }

    // If not an input, try to find input as child
    const childInput = this.inputLocator.locator("input");
    return new TextField(this.getPage(), childInput, `${this.getElementReportName()} - Input`);
  }

  /**
   * Get the button element, dynamically determining the correct locator.
   * @private
   */
  private async getButton(): Promise<Button> {
    // Try to determine if the main locator is an input or wrapper
    try {
      const tagName = await this.buttonLocator.evaluate(el => el.tagName.toLowerCase());
      if (tagName === "input") {
        // If main locator is input, look for sibling div
        const siblingDiv = this.buttonLocator.locator("+ div");
        return new Button(this.getPage(), siblingDiv, `${this.getElementReportName()} - Button`);
      }
    } catch {
      // If evaluation fails, continue to try child div
    }

    // If not an input, try to find div as child (wrapper scenario)
    const childDiv = this.buttonLocator.locator("div");
    return new Button(this.getPage(), childDiv, `${this.getElementReportName()} - Button`);
  }

  /**
   * Set the toggle state.
   * @param {boolean} isToCheck - True to turn on the toggle, false to turn off.
   * @returns {Promise<void>}
   */
  async set(isToCheck: boolean): Promise<void> {
    await test.step(`Set toggle to ${isToCheck} for ${this.getElementReportName()}`, async () => {
      if ((await this.isOn()) !== isToCheck) {
        const button = await this.getButton();
        await button.click();
      }
    });
  }

  /**
   * Check if the toggle is on.
   * @returns {Promise<boolean>} True if the toggle is on, false otherwise.
   */
  async isOn(): Promise<boolean> {
    return await test.step(`Check if toggle is on for ${this.getElementReportName()}`, async () => {
      const input = await this.getInput();
      return await input.isChecked();
    });
  }
}
