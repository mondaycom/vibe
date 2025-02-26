import { Locator, Page, test } from "@playwright/test";
import { Button } from "./Button";
import { Menu } from "./Menu";

/**
 * Class representing an icon button that extends the Button class.
 */
export class IconButton extends Button {
  icon: Button;
  menu: Menu | undefined;

  /**
   * Create an IconButton.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the IconButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   * @param menuType - The type of menu associated with the button.
   */
  constructor(page: Page, locator: Locator, elementReportName: string, menuType?: Menu) {
    super(page, locator, elementReportName);
    this.icon = new Button(this.page, this.locator, `${this.elementReportName} - Icon`);
    this.menu = menuType;
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
        await this.icon.click();
        if (this.menu) {
          await this.menu.selectItem(item);
        }
      },
      { box: false }
    );
  }
}
