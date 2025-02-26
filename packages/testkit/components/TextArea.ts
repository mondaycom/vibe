import { Page, Locator, test } from "@playwright/test";
import { pressKey } from "../utils/common-actions";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { TextField } from "./TextField";

/**
 * Class representing a TextArea element.
 * Extends the BaseElement class.
 */
export class TextArea extends BaseElement {
  private textAreaWrapper: Button;
  private textAreaInput: TextField;
  /**
   * Create a TextArea.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextArea element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.textAreaWrapper = new Button(this.page, this.locator, "Text Area Wrapper");
    this.textAreaInput = new TextField(this.page, this.locator.locator("textarea"), "Text Area Input");
  }

  /**
   * Set specified text in input element.
   * @param {string} text - Text to be filled in the input.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text in TextArea: ${text}`, async () => {
      await this.textAreaWrapper.click();
      await this.textAreaInput.waitFor();
      await this.textAreaInput.setText(text);
      await this.exitEditMode();
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
