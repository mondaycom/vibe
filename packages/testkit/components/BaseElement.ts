import { test, Page, Locator } from "@playwright/test";

/**
 * Class representing a base element for Playwright tests.
 */
export class BaseElement {
  page: Page;
  locator: Locator;
  elementReportName: string;

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
   * @param {number} timeout - The timeout for the attribute value. Defaults to 30 seconds.
   * @returns {Promise<string | null>} - The value of the attribute.
   */
  async getAttributeValue(attributeName: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<string> {
    return await test.step(`Get attribute ${attributeName} of ${this.getElementReportName()}`, async () => {
      const attributeValue = await this.getLocator().getAttribute(attributeName, { timeout });
      if (attributeValue === null || attributeValue === undefined) {
        return "";
      }
      return attributeValue;
    });
  }

  /**
   * Wait for the element to be visible.
   * @param {number} timeout - The timeout for the element to be visible. Defaults to 30 seconds.
   * @returns {Promise<void>}
   */
  async waitForElementToBeVisible(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be visible`, async () => {
      await this.getLocator().waitFor({ state: "visible", timeout });
    });
  }

  /**
   * Wait for the element to be hidden.
   * @param {number} timeout - The timeout for the element to be hidden. Defaults to 30 seconds.
   * @returns {Promise<void>}
   */
  async waitForElementToBeHidden(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be hidden`, async () => {
      await this.getLocator().waitFor({ state: "hidden", timeout });
    });
  }

  /**
   * Wait for the element to be absent.
   * @param {number} timeout - The timeout for the element to be absent. Defaults to 30 seconds.
   * @returns {Promise<void>}
   */
  async waitForElementToBeDetached(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be absent`, async () => {
      await this.getLocator().waitFor({ state: "detached", timeout });
    });
  }

  /**
   * Wait for the element to be attached.
   * @param {number} timeout - The timeout for the element to be attached. Defaults to 30 seconds.
   * @returns {Promise<void>}
   */
  async waitForElementToBeAttached(timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be attached`, async () => {
      await this.getLocator().waitFor({ state: "attached", timeout });
    });
  }

  /**
   * Count the number of elements matching the locator.
   * @returns {Promise<number>} - The number of elements matching the locator.
   */
  async count(): Promise<number> {
    return await test.step(`Count elements matching ${this.getElementReportName()}`, async () => {
      return await this.getLocator().count();
    });
  }

  /**
   * Check if the element is enabled.
   * @param {number} timeout - The timeout for the element to be enabled. Defaults to 30 seconds.
   * @returns {Promise<boolean>} - Returns true if the element is enabled, otherwise false.
   */
  async isEnabled(timeout: number = this.DEFAULT_TIMEOUT): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is enabled`, async () => {
      return await this.getLocator().isEnabled({ timeout });
    });
  }

  /**
   * Check if the element is disabled.
   * @param {number} timeout - The timeout for the element to be disabled. Defaults to 30 seconds.
   * @returns {Promise<boolean>} - Returns true if the element is disabled, otherwise false.
   */
  async isDisabled(timeout: number = this.DEFAULT_TIMEOUT): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is disabled`, async () => {
      return await this.getLocator().isDisabled({ timeout });
    });
  }

  /**
   * Check if the element is visible.
   * @param {number} timeout - The timeout for the element to be visible. Defaults to 30 seconds.
   * @returns {Promise<boolean>} - Returns true if the element is visible, otherwise false.
   */
  async isVisible(timeout: number = this.DEFAULT_TIMEOUT): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is visible`, async () => {
      return await this.getLocator().isVisible({ timeout });
    });
  }

  /**
   * Check if the element is hidden.
   * @param {number} timeout - The timeout for the element to be hidden. Defaults to 30 seconds.
   * @returns {Promise<boolean>} - Returns true if the element is hidden, otherwise false.
   */
  async isHidden(timeout: number = this.DEFAULT_TIMEOUT): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is hidden`, async () => {
      return await this.getLocator().isHidden({ timeout });
    });
  }

  /**
   * Remove focus from the element.
   * @returns {Promise<void>}
   */
  async removeFocus(): Promise<void> {
    await test.step(`Remove focus from ${this.getElementReportName()}`, async () => {
      await this.getPage().locator("body").click();
    });
  }

  /**
   * Get the computed style of an element.
   * @param {string} property - The property to get the computed style of.
   * @returns {Promise<string>} - The computed style of the element.
   */
  async getComputedStyle(property: string): Promise<string> {
    return await test.step(`Get computed style of ${property} for ${this.getElementReportName()}`, async () => {
      return await this.getLocator().evaluate(
        (el, property) => window.getComputedStyle(el).getPropertyValue(property),
        property
      );
    });
  }

  /**
   * Check if the element is expanded.
   * @returns {Promise<boolean>} True if the element is expanded, false otherwise.
   */
  async isExpanded(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is expanded`, async () => {
      return (await this.getAttributeValue("aria-expanded")) === "true";
    });
  }

  /**
   * Check if the element is checked.
   * @returns {Promise<boolean>} True if the element is checked, false otherwise.
   */
  async isChecked(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is checked`, async () => {
      return (await this.getAttributeValue("aria-checked")) === "true";
    });
  }

  /**
   * Check if the element is selected.
   * @returns {Promise<boolean>} True if the element is selected, false otherwise.
   */
  async isSelected(): Promise<boolean> {
    return await test.step(`Check if ${this.getElementReportName()} is selected`, async () => {
      return (await this.getAttributeValue("aria-selected")) === "true";
    });
  }

  /**
   * Wait for the element to be in a certain state.
   * @param {Object} options - The options for the wait.
   * @returns {Promise<void>}
   * @deprecated Use waitForElementToBeVisible, waitForElementToBeHidden, waitForElementToBeDetached, waitForElementToBeAttached instead.
   */
  async waitFor(options = {}): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()}`, async () => {
      await this.getLocator().waitFor(options);
    });
  }

  /**
   * Wait for the element to be visible.
   * @returns {Promise<void>}
   * @deprecated Use waitForElementToBeVisible instead.
   */
  async waitForVisible(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be visible`, async () => {
      await this.getLocator().waitFor({ state: "visible" });
    });
  }

  /**
   * Wait for the element to be absent.
   * @returns {Promise<void>}
   * @deprecated Use waitForElementToBeDetached instead.
   */
  async waitForAbsence(): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} to be absent`, async () => {
      await this.getLocator().waitFor({ state: "detached" });
    });
  }

  /**
   * Wait for the list elements to stabilize (i.e., the count of items remains constant for a specified duration).
   * @param {Locator} locator - The locator for the elements.
   * @returns {Promise<void>}
   * @deprecated
   */
  protected async waitForAndVerifyElements(locator: Locator): Promise<void> {
    await test.step(`Wait for ${this.getElementReportName()} items to stabilize and verify existence`, async () => {
      let previousCount = 0;
      let stableCountTime = 0;
      const stabilizationTimeMs = 500;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const currentCount = await locator.count();

        // Verify we have at least one element
        if (currentCount === 0) {
          await this.getPage().waitForTimeout(100);
          continue;
        }

        // Check if all elements are visible
        const elements = await locator.all();
        const visibleStates = await Promise.all(elements.map(el => el.isVisible()));
        const allVisible = visibleStates.every(state => state === true);

        if (!allVisible) {
          await this.getPage().waitForTimeout(100);
          continue;
        }

        if (currentCount === previousCount) {
          stableCountTime += 100;
        } else {
          stableCountTime = 0;
        }

        if (stableCountTime >= stabilizationTimeMs) {
          break;
        }

        previousCount = currentCount;
        await this.getPage().waitForTimeout(100);
      }

      if ((await locator.count()) === 0) {
        throw new Error(`No ${this.getElementReportName()} elements found after stabilization`);
      }
    });
  }
}
