import { test, Page, Locator } from "@playwright/test";

/**
 * Class representing a base element for Playwright tests.
 */
export class BaseElement {
  page : Page;
  locator : Locator;
  elementReportName: String 
  /**
   * Create a BaseElement.
   * @param {Object} page - The Playwright page object.
   * @param {Object} locator - The locator for the element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: String) {
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Get the locator of the element.
   * @returns {Object} - The locator of the element.
   */
  getLocator() {
    return this.locator;
  }

  /**
   * Wait for the list elements to stabilize (i.e., the count of items remains constant for a specified duration).
   * @returns {Promise<void>}
   */
  async waitForElementsGroup(locator: Locator, elementReportName: String): Promise<void>  {
    await test.step(`Wait for ${elementReportName} items to stabilize`, async () => {
      let previousCount = 0;
      let stableCountTime = 0;
      const stabilizationTimeMs = 500;
      while (true) {
        const currentCount = await this.locator.locator(locator).count();

        if (currentCount === previousCount) {
          stableCountTime += 100; // Increase stable time by the check interval (100ms)
        } else {
          stableCountTime = 0; // Reset if the count changes
        }
        if (stableCountTime >= stabilizationTimeMs) {
          break; // Break the loop if count has been stable for the desired duration
        }
        previousCount = currentCount;
        await this.page.waitForTimeout(100); // Polling interval (100ms)
      }
    });
  }

  /**
   * Check if the element is enabled.
   * @returns {Promise<boolean>} - Returns true if the element is enabled, otherwise false.
   */
  async isEnabled(): Promise<boolean> {
      let isEnabled: boolean = false;
      await test.step(`Return if ${this.elementReportName} is enabled`, async () => {
          isEnabled = await this.locator.isEnabled();
          return isEnabled;
      });
      return isEnabled;
  }

  /**
   * Scroll the element into view if needed.
   * @returns {Promise<void>}
   */
  async scrollIntoView(): Promise<void> {
    await test.step(`Scroll ${this.elementReportName} into view`, async () => {
      await this.locator.scrollIntoViewIfNeeded();
    });
  }
  async getAttributeValue(attributeName: string, options: any = { timeout: 10000, pollInterval: 500 }) : Promise <string | null> {
    let attributeValue = null;
  
    await test.step(`Get attribute ${attributeName} of ${this.elementReportName}`, async () => {
      const startTime = Date.now();
  
      while (Date.now() - startTime < options.timeout) {
        attributeValue = await this.locator.getAttribute(attributeName);
  
        if (attributeValue !== null) {
          break;
        }
        while (Date.now() - startTime < options.timeout) {
          await new Promise(resolve => setTimeout(resolve, options.pollInterval));
        }
        if (attributeValue === null) {
          throw new Error(`Attribute ${attributeName} did not exist after ${options.timeout} ms`);
        }
      }
    });
    return attributeValue;
  }

  async getText() : Promise<string|undefined> {
    let text: string|undefined;
    await test.step(`Get text of ${this.elementReportName}`, async () => {
      text = await this.locator.innerText();
      return text;
    });
    return text;
  }

  async waitFor(options = {}): Promise<void> {
    await test.step(`Wait for ${this.elementReportName}`, async () => {
      await this.locator.waitFor(options);
    });
  }

  async waitForAbsence() : Promise<void>{
    await test.step(`Wait for ${this.elementReportName} to be absent`, async () => {
      await this.waitFor({ state: "detached" });
    });
  }

  async count() : Promise<number>{
    let count: number=0;
    await test.step(`Count elements matching ${this.elementReportName}`, async () => {
      count = await this.locator.count();
    });
    return count;
  }
}
