import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";

/**
 * Class representing an ExpandCollapse element.
 * Extends the BaseElement class.
 */
export class ExpandCollapse extends BaseElement {
  private headerButtonLocator: Locator;
  private contentLocator: Locator;

  /**
   * Create an ExpandCollapse.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ExpandCollapse element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.headerButtonLocator = locator.locator("button[aria-expanded]");
    this.contentLocator = locator.locator("[role='region']");
  }

  /**
   * Click the header to toggle expand/collapse state.
   * @returns {Promise<void>}
   */
  async toggle(): Promise<void> {
    await test.step(`Toggle ${this.elementReportName}`, async () => {
      await this.headerButtonLocator.click();
    });
  }

  /**
   * Expand the component if it's currently collapsed.
   * @returns {Promise<void>}
   */
  async expand(): Promise<void> {
    await test.step(`Expand ${this.elementReportName}`, async () => {
      const isExpanded = await this.isExpanded();
      if (!isExpanded) {
        await this.headerButtonLocator.click();
      }
    });
  }

  /**
   * Collapse the component if it's currently expanded.
   * @returns {Promise<void>}
   */
  async collapse(): Promise<void> {
    await test.step(`Collapse ${this.elementReportName}`, async () => {
      const isExpanded = await this.isExpanded();
      if (isExpanded) {
        await this.headerButtonLocator.click();
      }
    });
  }

  /**
   * Check if the component is expanded.
   * @returns {Promise<boolean>} True if expanded, false if collapsed.
   */
  async isExpanded(): Promise<boolean> {
    let isExpandedAttribute: string | null = null;

    await test.step(`Check if ${this.elementReportName} is expanded`, async () => {
      isExpandedAttribute = await this.headerButtonLocator.getAttribute("aria-expanded", { timeout: 30000 });

      if (isExpandedAttribute === null) {
        throw new Error(`Attribute aria-expanded did not exist after 30000 ms`);
      }
    });

    return isExpandedAttribute === "true";
  }

  /**
   * Check if the component is collapsed.
   * @returns {Promise<boolean>} True if collapsed, false if expanded.
   */
  async isCollapsed(): Promise<boolean> {
    const expanded = await this.isExpanded();
    return !expanded;
  }

  /**
   * Get the header/title text.
   * @returns {Promise<string>} The header text content.
   */
  async getHeaderText(): Promise<string> {
    let headerText = "";
    await test.step(`Get header text of ${this.elementReportName}`, async () => {
      headerText = await this.headerButtonLocator.innerText();
    });
    return headerText;
  }

  /**
   * Check if the content section is visible.
   * @returns {Promise<boolean>} True if content is visible, false otherwise.
   */
  async isContentVisible(): Promise<boolean> {
    let isVisible = false;
    await test.step(`Check if content of ${this.elementReportName} is visible`, async () => {
      isVisible = await this.contentLocator.isVisible();
    });
    return isVisible;
  }

  /**
   * Get the content element for further interactions.
   * @returns {BaseElement} The content element wrapped in BaseElement.
   */
  getContentElement(): BaseElement {
    return new BaseElement(this.page, this.contentLocator, `${this.elementReportName} content`);
  }

  /**
   * Get the content text.
   * @returns {Promise<string>} The content text.
   */
  async getContentText(): Promise<string> {
    let contentText = "";
    await test.step(`Get content text of ${this.elementReportName}`, async () => {
      // Wait for content to be visible before getting text
      await this.contentLocator.waitFor({ state: "visible" });
      contentText = await this.contentLocator.innerText();
    });
    return contentText;
  }

  /**
   * Wait for the component to be expanded.
   * @returns {Promise<void>}
   */
  async waitForExpanded(): Promise<void> {
    await test.step(`Wait for ${this.elementReportName} to be expanded`, async () => {
      await this.headerButtonLocator.waitFor({ state: "visible" });
      await this.page.waitForFunction(() => {
        const element = document.querySelector(`[aria-expanded]`);
        return element && element.getAttribute("aria-expanded") === "true";
      });
    });
  }

  /**
   * Wait for the component to be collapsed.
   * @returns {Promise<void>}
   */
  async waitForCollapsed(): Promise<void> {
    await test.step(`Wait for ${this.elementReportName} to be collapsed`, async () => {
      await this.headerButtonLocator.waitFor({ state: "visible" });
      await this.page.waitForFunction(() => {
        const element = document.querySelector(`[aria-expanded]`);
        return element && element.getAttribute("aria-expanded") === "false";
      });
    });
  }

  /**
   * Click on an item within the content area by its text.
   * @param {string} itemText - The text of the item to click.
   * @returns {Promise<void>}
   */
  async clickItemByText(itemText: string): Promise<void> {
    await test.step(`Click item "${itemText}" in ${this.elementReportName} content`, async () => {
      // Ensure the component is expanded first
      await this.expand();

      // Wait for content to be visible
      await this.contentLocator.waitFor({ state: "visible" });

      // Find and click the item
      const itemLocator = this.contentLocator.getByText(itemText, { exact: false });
      await itemLocator.click();
    });
  }

  /**
   * Click on an item within the content area by exact text match.
   * @param {string} itemText - The exact text of the item to click.
   * @returns {Promise<void>}
   */
  async clickItemByExactText(itemText: string): Promise<void> {
    await test.step(`Click item with exact text "${itemText}" in ${this.elementReportName} content`, async () => {
      // Ensure the component is expanded first
      await this.expand();

      // Wait for content to be visible
      await this.contentLocator.waitFor({ state: "visible" });

      // Find and click the item with exact text match
      const itemLocator = this.contentLocator.getByText(itemText, { exact: true });
      await itemLocator.click();
    });
  }

  /**
   * Click on a link within the content area by its text.
   * @param {string} linkText - The text of the link to click.
   * @returns {Promise<void>}
   */
  async clickLinkInContent(linkText: string): Promise<void> {
    await test.step(`Click link "${linkText}" in ${this.elementReportName} content`, async () => {
      // Ensure the component is expanded first
      await this.expand();

      // Wait for content to be visible
      await this.contentLocator.waitFor({ state: "visible" });

      // Find and click the link
      const linkLocator = this.contentLocator.locator("a").filter({ hasText: linkText });
      await linkLocator.click();
    });
  }
}
