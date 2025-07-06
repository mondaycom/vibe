import { test, Page, Locator } from "@playwright/test";

/**
 * Class representing a base element for Playwright tests.
 */
export class BaseElement {
  private page: Page;
  private locator: Locator;
  private elementReportName: string;

  private readonly DEFAULT_TIMEOUT = 30000; // 30 seconds

  /**
   * Create a BaseElement.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Get the page object.
   * @returns {Page} - The page object.
   */
  getPage(): Page {
    return this.page;
  }

  /**
   * Get the locator of the element.
   * @returns {Locator} - The locator of the element.
   */
  getLocator(): Locator {
    return this.locator;
  }

  /**
   * Get the element report name.
   * @returns {string} - The element report name.
   */
  getElementReportName(): string {
    return this.elementReportName;
  }

  /**
   * Hover the element.
   * @returns {Promise<void>}
   */
  async hover(): Promise<void> {
    await test.step(`Hover ${this.getElementReportName()}`, async () => {
      await this.getLocator().hover();
    });
  }

  /**
   * Click the element.
   * @returns {Promise<void>}
   */
  async click(): Promise<void> {
    await test.step(`Click ${this.getElementReportName()}`, async () => {
      await this.getLocator().click();
    });
  }

  /**
   * Get the text of the element.
   * @returns {Promise<string>} - The text of the element (empty string if only whitespace or empty, throws if all are null/undefined).
   */
  async getText(): Promise<string> {
    return await test.step(`Get text of ${this.getElementReportName()}`, async () => {
      const texts = [
        await this.getLocator().innerText(),
        await this.getLocator().textContent(),
        await this.getAttributeValue("value")
      ];

      // If all are null/undefined, throw error
      if (texts.every(value => value == null || value === undefined)) {
        throw new Error(`Could not retrieve text for ${this.getElementReportName()}: all texts are null/undefined`);
      }

      // Trim all string values, keep null/undefined as is
      const trimmed = texts.map(value => (typeof value === "string" ? value.trim() : value));

      // Filter out null/undefined values
      const nonNullValues = trimmed.filter(value => value != null);

      // If all non-null are empty string, return ""
      if (nonNullValues.every(value => value === "")) {
        return "";
      }

      // Otherwise, return the first non-empty string by priority
      const firstNonEmpty = nonNullValues.find(value => typeof value === "string" && value !== "");
      if (typeof firstNonEmpty === "string") {
        return firstNonEmpty;
      }

      // Fallback: if only empty string(s) and null/undefined remain, return ""
      return "";
    });
  }

  /**
   * Scroll the element into view if needed.
   * @returns {Promise<void>}
   */
  async scrollIntoView(): Promise<void> {
    await test.step(`Scroll ${this.getElementReportName()} into view`, async () => {
      await this.getLocator().scrollIntoViewIfNeeded();
    });
  }

  /**
   * Get the value of an attribute of the element.
   * @param {string} attributeName - The name of the attribute.
   * @returns {Promise<string | null>} - The value of the attribute.
   */
  async getAttributeValue(attributeName: string): Promise<string> {
    return await test.step(`Get attribute ${attributeName} of ${this.getElementReportName()}`, async () => {
      const attributeValue = await this.getLocator().getAttribute(attributeName, { timeout: this.DEFAULT_TIMEOUT });

      if (attributeValue === null || attributeValue === undefined) {
        throw new Error(`Could not retrieve attribute ${attributeName} for ${this.getElementReportName()}`);
      }
      return attributeValue;
    });
  }

  /**
   * Wait for the element to be visible.
   * @returns {Promise<void>}
   */
  async waitForElementToBeVisible(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be visible`, async () => {
      await this.getLocator().waitFor({ state: "visible", timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Wait for the element to be hidden.
   * @returns {Promise<void>}
   */
  async waitForElementToBeHidden(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be hidden`, async () => {
      await this.getLocator().waitFor({ state: "hidden", timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Wait for the element to be absent.
   * @returns {Promise<void>}
   */
  async waitForElementToBeDetached(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be absent`, async () => {
      await this.getLocator().waitFor({ state: "detached", timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Wait for the element to be attached.
   * @returns {Promise<void>}
   */
  async waitForElementToBeAttached(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be attached`, async () => {
      await this.getLocator().waitFor({ state: "attached", timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Count the number of elements matching the locator.
   * @returns {Promise<number>} - The number of elements matching the locator.
   */
  async countElements(): Promise<number> {
    return await test.step(`Count elements matching ${this.getElementReportName()}`, async () => {
      return await this.getLocator().count();
    });
  }

  /**
   * Check if the element is enabled.
   * @returns {Promise<boolean>} - Returns true if the element is enabled, otherwise false.
   */
  async isEnabled(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is enabled`, async () => {
      return await this.getLocator().isEnabled({ timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Check if the element is visible.
   * @returns {Promise<boolean>} - Returns true if the element is visible, otherwise false.
   */
  async isVisible(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is visible`, async () => {
      return await this.getLocator().isVisible({ timeout: this.DEFAULT_TIMEOUT });
    });
  }

  /**
   * Remove focus from the element.
   * @returns {Promise<void>}
   */
  async removeFocusFromElement(): Promise<void> {
    await test.step(`Remove focus from ${this.getElementReportName()}`, async () => {
      await this.getPage().locator("body").click();
    });
  }
}
