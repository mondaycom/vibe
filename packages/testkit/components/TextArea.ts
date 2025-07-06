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
   * Create a TextArea element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextArea element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.textAreaWrapper = new Button(page, locator, `${elementReportName} - Wrapper`);
    this.textAreaInput = new TextField(page, locator.locator("textarea"), `${elementReportName} - Input`);
  }

  /**
   * Exit the edit mode by pressing the Escape key.
   * @returns {Promise<void>}
   */
  private async exitEditMode(): Promise<void> {
    await test.step(`Exit edit mode for ${this.getElementReportName()}`, async () => {
      await pressKey(this.getPage(), "Escape");
    });
  }

  /**
   * Set specified text in text area.
   * @param {string} text - Text to be filled in the text area.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} for ${this.getElementReportName()}`, async () => {
      await this.textAreaWrapper.click();
      await this.textAreaInput.waitForElementToBeVisible();
      await this.textAreaInput.setText(text);
      await this.exitEditMode();
    });
  }
}
