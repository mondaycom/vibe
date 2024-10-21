import { test, Page, Locator } from "@playwright/test";
import { Button } from "./Button";
import { Dialog } from "../popover/Dialog";

/**
 * Class representing an icon button that extends the Button class.
 */
export class IconButton extends Button {
  override page: Page;
  override locator: Locator;
  override elementReportName: string;

  /**
   * Create an IconButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the IconButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Select an item from the icon button's menu.
   * @param {string} item - The item to select.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(
      `Select ${item} from ${this.elementReportName}`,
      async () => {
        await this.locator.click();
        const dialog = new Dialog(this.page, this.page.getByRole("dialog"), `${this.elementReportName} - Menu`);
        await dialog.selectItem(item);
      },
      { box: false }
    );
  }
}
