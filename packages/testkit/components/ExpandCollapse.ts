import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { Link } from "./Link";

/**
 * Class representing an ExpandCollapse element.
 * Extends the BaseElement class.
 */
export class ExpandCollapse extends BaseElement {
  private headerButton: Button;
  private content: BaseElement;

  /**
   * Create an ExpandCollapse element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ExpandCollapse element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.headerButton = new Button(
      page,
      locator.locator("button[aria-expanded]"),
      `${elementReportName} - Header Button`
    );
    this.content = new BaseElement(page, locator.locator("[role='region']"), `${elementReportName} - Content`);
  }

  /**
   * Click the header to toggle expand/collapse state.
   * @returns {Promise<void>}
   */
  async toggle(): Promise<void> {
    await test.step(`Toggle ${this.elementReportName}`, async () => {
      await this.headerButton.click();
    });
  }

  /**
   * Expand the component if it's currently collapsed.
   * @returns {Promise<void>}
   */
  async expand(): Promise<void> {
    await test.step(`Expand ${this.elementReportName}`, async () => {
      if (await this.isCollapsed()) {
        await this.headerButton.click();
      }
    });
  }

  /**
   * Collapse the component if it's currently expanded.
   * @returns {Promise<void>}
   */
  async collapse(): Promise<void> {
    await test.step(`Collapse ${this.elementReportName}`, async () => {
      if (!(await this.isCollapsed())) {
        await this.headerButton.click();
      }
    });
  }

  /**
   * Check if the component is collapsed.
   * @returns {Promise<boolean>} True if collapsed, false if expanded.
   */
  async isCollapsed(): Promise<boolean> {
    return await test.step(`Check if ${this.elementReportName} is collapsed`, async () => {
      return !(await this.headerButton.isExpanded());
    });
  }

  /**
   * Get the header/title text.
   * @returns {Promise<string>} The header text content.
   */
  async getHeaderText(): Promise<string> {
    return await test.step(`Get header text of ${this.elementReportName}`, async () => {
      return await this.headerButton.getText();
    });
  }

  /**
   * Check if the content section is visible.
   * @returns {Promise<boolean>} True if content is visible, false otherwise.
   */
  async isContentVisible(): Promise<boolean> {
    return await test.step(`Check if content of ${this.elementReportName} is visible`, async () => {
      return await this.content.isVisible();
    });
  }

  /**
   * Get the content element for further interactions.
   * @returns {BaseElement} The content element wrapped in BaseElement.
   */
  getContentElement(): BaseElement {
    return new BaseElement(this.page, this.content.locator, `content of ${this.elementReportName}`);
  }

  /**
   * Get the content text.
   * @returns {Promise<string>} The content text.
   */
  async getContentText(): Promise<string> {
    return await test.step(`Get content text of ${this.elementReportName}`, async () => {
      await this.content.waitForElementToBeVisible();
      return await this.content.getText();
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
      await this.content.waitForElementToBeVisible();

      // Find and click the item
      const item = new BaseElement(
        this.page,
        this.content.locator.getByText(itemText, { exact: false }),
        `item "${itemText}" in ${this.elementReportName} content`
      );
      await item.click();
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
      await this.content.waitForElementToBeVisible();

      // Find and click the item with exact text match
      const item = new BaseElement(
        this.page,
        this.content.locator.getByText(itemText, { exact: true }),
        `item with exact text "${itemText}" in ${this.elementReportName} content`
      );
      await item.click();
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
      await this.content.waitForElementToBeVisible();

      // Find and click the link
      const link = new Link(
        this.page,
        this.content.locator.locator("a").filter({ hasText: linkText }),
        `link "${linkText}" in ${this.elementReportName} content`
      );
      await link.click();
    });
  }
}
