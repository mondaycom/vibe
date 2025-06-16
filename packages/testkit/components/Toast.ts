import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { Loader } from "./Loader";

export class Toast extends BaseElement {
  private closeButton: Button;
  private loader: Loader;
  private actionButtons: Button;
  private LinkButton: Button;
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.closeButton = new Button(
      this.page,
      this.locator.locator('[data-testid="toast-close-button"]'),
      "Toast Close Button"
    );
    this.actionButtons = new Button(
      this.page,
      this.locator.locator('[data-testid="toast-button"]'),
      "Toast Action Button"
    );
    this.LinkButton = new Button(this.page, this.locator.locator('[data-testid="toast-link"]'), "Toast Action Link");
    this.loader = new Loader(this.page, this.locator.locator('data-testid="loader"]'), "Toast Content");
  }

  /**
   * Get the content text of the toast
   * @returns {Promise<string | undefined>} The content text
   */
  async getContent(): Promise<string | undefined> {
    return this.getText();
  }

  /**
   * Click the close button of the toast
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await this.closeButton.click();
  }

  /**
   * Check if the toast has a close button
   * @returns {Promise<boolean>} True if close button exists
   */
  async hasCloseButton(): Promise<boolean> {
    return (await this.closeButton.locator.count()) > 0;
  }

  /**
   * Get the type of the toast
   * @returns {Promise<string | null>} The toast type (normal, positive, negative, warning, dark)
   */
  async getType(): Promise<string | null> {
    const classList = await this.getAttributeValue("class");
    if (!classList) return null;

    const types = ["normal", "positive", "negative", "warning", "dark"];
    for (const type of types) {
      if (classList.includes(`type${type.charAt(0).toUpperCase() + type.slice(1)}`)) {
        return type;
      }
    }
    return "normal";
  }

  /**
   * Check if the toast is in loading state
   * @returns {Promise<boolean>} True if toast is loading
   */
  async isLoading(): Promise<boolean> {
    return (await this.loader.locator.count()) > 0;
  }
}
