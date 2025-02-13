import { Page, Locator, test } from "@playwright/test";
import { Button } from "./Button";

/**
 * Class representing a split button that extends the Button class.
 */
export class SplitButton extends Button {
  /**
   * Create a SplitButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the SplitButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Select an item from the split button's menu.
   * @param {string} item - The item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(`Select Item: ${item} from: ${this.elementReportName}`, async () => {
      await this.locator.click();
    });
  }
}
