import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { IconButton } from "./IconButton";
import { Link } from "./Link";
import { Loader } from "./Loader";
import { Button } from "./Button";

/**
 * Class representing a Toast element.
 * Extends the BaseElement class.
 */
export class Toast extends BaseElement {
  private closeButton: IconButton;
  private link: Link;
  private loader: Loader;
  private button: Button;

  /**
   * Create a Toast element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Toast element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.closeButton = new IconButton(page, locator.locator("button").last(), `${elementReportName} - Close Button`);
    this.link = new Link(page, locator.locator("a"), `${elementReportName} - Link`);
    this.loader = new Loader(page, locator.getByRole("alert"), `${elementReportName} - Loader`);
    this.button = new Button(page, locator.locator("button").first(), `${elementReportName} - Button`);
  }

  /**
   * Close the toast.
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await test.step(`Click close button for ${this.getElementReportName()}`, async () => {
      await this.closeButton.click();
    });
  }

  /**
   * Check if the toast has a close button.
   * @returns {Promise<boolean>} True if the toast has a close button, false otherwise.
   */
  async hasCloseButton(): Promise<boolean> {
    return await test.step(`Check if toast has close button for ${this.getElementReportName()}`, async () => {
      return await this.closeButton.isVisible();
    });
  }

  /**
   * Get the type of the toast.
   * @returns {Promise<string | null>} The type of the toast.
   */
  async getType(): Promise<string | null> {
    return await test.step(`Get toast type: ${this.getElementReportName()}`, async () => {
      const classList = await this.getAttributeValue("class");

      if (!classList) return null;

      const types = ["normal", "positive", "negative", "warning", "dark"];

      for (const type of types) {
        if (classList.includes(`type${type.charAt(0).toUpperCase() + type.slice(1)}`)) {
          return type;
        }
      }
      return "normal";
    });
  }

  /**
   * Check if the toast is loading.
   * @returns {Promise<boolean>} True if the toast is loading, false otherwise.
   */
  async isLoading(): Promise<boolean> {
    return await test.step(`Check if toast is loading: ${this.getElementReportName()}`, async () => {
      return await this.loader.isVisible();
    });
  }

  /**
   * Get the text of the link.
   * @returns {Promise<string>} The text of the link.
   */
  async getLinkText(): Promise<string> {
    return await test.step(`Get link text for ${this.getElementReportName()}`, async () => {
      return await this.link.getText();
    });
  }

  /**
   * Get the href of the link.
   * @returns {Promise<string>} The href of the link.
   */
  async getLinkHref(): Promise<string> {
    return await test.step(`Get link href for ${this.getElementReportName()}`, async () => {
      return await this.link.getLinkHref();
    });
  }

  /**
   * Click the link.
   * @returns {Promise<void>}
   */
  async clickLink(): Promise<void> {
    return await test.step(`Click link for ${this.getElementReportName()}`, async () => {
      await this.link.click();
    });
  }

  /**
   * Click the button.
   * @returns {Promise<void>}
   */
  async clickButton(): Promise<void> {
    return await test.step(`Click button for ${this.getElementReportName()}`, async () => {
      await this.button.click();
    });
  }

  /**
   * Get the text of the button.
   * @returns {Promise<string>} The text of the button.
   */
  async getButtonText(): Promise<string> {
    return await test.step(`Get button text for ${this.getElementReportName()}`, async () => {
      return await this.button.getText();
    });
  }

  /**
   * Get the content of the toast.
   * @returns {Promise<string>} The content of the toast.
   */
  async getContent(): Promise<string> {
    return await test.step(`Get content for ${this.getElementReportName()}`, async () => {
      return await this.getText();
    });
  }
}
