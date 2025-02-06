import { Page, Locator, test } from "@playwright/test";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { MenuButton } from "./MenuButton";
import { Menu } from "./Menu";

/**
 * Class representing Search field element.
 * Extends the BaseElement class.
 */
export class Search extends TextField {
  private cleanSearchButton: Button;
  private filterButton: Button | undefined;
  private input: TextField;

  constructor(page: Page, locator: Locator, elementReportName: string, filterMenuType?: Menu) {
    super(page, locator, elementReportName);
    this.input = new TextField(this.page, this.locator.locator("[type='search']"), `${this.elementReportName} - Input`);
    this.cleanSearchButton = new Button(this.page, this.locator.locator("[aria-label='Clear']"), "Clean Button");
    if (filterMenuType) {
      this.filterButton = new MenuButton(
        this.page,
        this.locator.locator("[aria-label='Filters']").nth(1),
        "Filter Button",
        filterMenuType
      );
    }
  }

  /**
   * Set the search field text.
   * @param text
   */
  async setText(text: string): Promise<void> {
    await test.step("Set text in search field", async () => {
      await this.input.setText(text);
    });
  }

  /**
   * Clear the search field.
   * @returns {Promise<void>}
   */
  async clear(): Promise<void> {
    await test.step("Clear search field", async () => {
      await this.cleanSearchButton.click();
    });
  }
}
