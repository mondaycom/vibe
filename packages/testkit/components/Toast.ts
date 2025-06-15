import { Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";

export class Toast extends BaseElement {
  constructor(page: Page, locator: Locator) {
    super(page, locator, "Toast");
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
    const closeButton = this.locator.locator('[data-testid="toast-close-button"]');
    await closeButton.click();
  }

  /**
   * Check if the toast has a close button
   * @returns {Promise<boolean>} True if close button exists
   */
  async hasCloseButton(): Promise<boolean> {
    const closeButton = this.locator.locator('[data-testid="toast-close-button"]');
    return (await closeButton.count()) > 0;
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
    const loader = this.locator.locator('[data-testid="loader"]');
    return (await loader.count()) > 0;
  }

  /**
   * Get all action buttons in the toast
   * @returns {Promise<Locator[]>} Array of button locators
   */
  async getActionButtons(): Promise<Locator[]> {
    return this.locator.locator('[data-testid="toast-button"]').all();
  }

  /**
   * Get all action links in the toast
   * @returns {Promise<Locator[]>} Array of link locators
   */
  async getActionLinks(): Promise<Locator[]> {
    return this.locator.locator('[data-testid="toast-link"]').all();
  }

  /**
   * Click an action button by its text content
   * @param {string} text - The text content of the button to click
   * @returns {Promise<void>}
   */
  async clickActionButton(text: string): Promise<void> {
    const buttons = await this.getActionButtons();
    for (const button of buttons) {
      const buttonText = await button.textContent();
      if (buttonText === text) {
        await button.click();
        return;
      }
    }
    throw new Error(`Button with text "${text}" not found in toast`);
  }

  /**
   * Click an action link by its text content
   * @param {string} text - The text content of the link to click
   * @returns {Promise<void>}
   */
  async clickActionLink(text: string): Promise<void> {
    const links = await this.getActionLinks();
    for (const link of links) {
      const linkText = await link.textContent();
      if (linkText === text) {
        await link.click();
        return;
      }
    }
    throw new Error(`Link with text "${text}" not found in toast`);
  }
}
