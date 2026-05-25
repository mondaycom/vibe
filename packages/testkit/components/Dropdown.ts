import { Page, Locator, test } from "@playwright/test";
import { TextField } from "./TextField";
import { BaseElement } from "./BaseElement";
import { ListItem } from "./ListItem";
import { IconButton } from "./IconButton";

/**
 * Class representing a Dropdown element.
 * Extends the BaseElement class.
 */
export class Dropdown extends BaseElement {
  private inputField: TextField;
  private clearSelectionIconButton: IconButton;

  /**
   * Create a Dropdown element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Dropdown element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.inputField = new TextField(page, locator.locator("input"), `${elementReportName} - Input Field`);
    this.clearSelectionIconButton = new IconButton(
      page,
      locator.locator(".clear-indicator"),
      `${elementReportName} - Clear Selection Icon Button`
    );
  }

  /**
   * Get a dropdown item by item.
   * @param {string} item - The name of the item to get the dropdown item for.
   * @returns {Promise<ListItem>} The dropdown item.
   */
  async getDropdownItemByItem(item: string): Promise<ListItem> {
    return await test.step(`Get dropdown item by item ${item} for ${this.getElementReportName()}`, async () => {
      return new ListItem(this.getPage(), this.getLocator().getByRole("option", { name: item }), item);
    });
  }

  /**
   * Check if the dropdown is open.
   * @returns {Promise<boolean>} True if the dropdown is open, false otherwise.
   */
  async isDropdownOpen(): Promise<boolean> {
    return await test.step(`Check if dropdown is open for ${this.getElementReportName()}`, async () => {
      return await this.inputField.isExpanded();
    });
  }

  /**
   * Open the dropdown.
   * @returns {Promise<void>}
   */
  async open(): Promise<void> {
    await test.step(`Open dropdown for ${this.getElementReportName()}`, async () => {
      if (!(await this.isDropdownOpen())) {
        await this.click();
        // Wait for the dropdown to open
        await this.getPage().waitForTimeout(200);
      }
    });
  }

  /**
   * Close the dropdown.
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await test.step(`Close dropdown for ${this.getElementReportName()}`, async () => {
      if (await this.isDropdownOpen()) {
        await this.click();
        // Wait for the dropdown to close
        await this.getPage().waitForTimeout(200);
      }
    });
  }

  /**
   * Select an item from a dropdown.
   * @param {string} item - The value text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectItem(item: string): Promise<void> {
    await test.step(`Select item ${item} for ${this.getElementReportName()}`, async () => {
      await this.open();

      // If dropdown has search functionality, use it
      if (await this.inputField.isVisible(1000)) {
        await this.search(item);
        const listItem = await this.getDropdownItemByItem(item);
        await listItem.click();
        return;
      }

      // For dropdowns without search, scroll through options to find the item
      const targetOption = this.getPage().getByRole("option", { name: item });

      try {
        // Check if the item is already visible
        await targetOption.waitFor({ timeout: 1000 });
        await targetOption.scrollIntoViewIfNeeded();
        await targetOption.click();
        return;
      } catch {
        // Item not immediately visible, need to scroll through options
      }

      // Scroll through options to find the target item
      const allOptions = this.getPage().getByRole("option");
      let found = false;
      let attempts = 0;
      const maxAttempts = 50;
      let previousOptionCount = 0;

      while (!found && attempts < maxAttempts) {
        const optionCount = await allOptions.count();

        // If no new options loaded after scrolling, we might have reached the end
        if (attempts > 0 && optionCount === previousOptionCount) {
          break;
        }

        previousOptionCount = optionCount;

        // Check each visible option
        for (let i = 0; i < optionCount; i++) {
          const option = allOptions.nth(i);
          const optionText = await option.textContent();

          if (optionText?.trim() === item) {
            await option.scrollIntoViewIfNeeded();
            await option.click();
            found = true;
            break;
          }
        }

        if (!found && optionCount > 0) {
          // Scroll down to load more options
          const lastOption = allOptions.nth(optionCount - 1);
          await lastOption.scrollIntoViewIfNeeded();

          try {
            await lastOption.press("ArrowDown");
          } catch {
            await lastOption.hover();
            await this.getPage().mouse.wheel(0, 100);
          }

          await this.getPage().waitForTimeout(200);
        }

        attempts++;
      }

      if (!found) {
        throw new Error(`Could not find dropdown option "${item}" after scrolling through ${maxAttempts} attempts`);
      }
    });
  }

  /**
   * Search for an item in the dropdown.
   * @param {string} item - The value text to be searched in the dropdown.
   * @returns {Promise<void>}
   */
  async search(item: string): Promise<void> {
    await test.step(`Search for ${item} for ${this.getElementReportName()}`, async () => {
      await this.inputField.setText(item);
    });
  }

  /**
   * Select multiple items from a dropdown.
   * @param items - The values text to be selected in the dropdown.
   * @returns {Promise<void>}
   */
  async selectMultipleItems(items: string[]): Promise<void> {
    await test.step(`Select multiple items ${items} for ${this.getElementReportName()}`, async () => {
      await this.open();
      for (const item of items) {
        await this.selectItem(item);
      }
    });
  }

  /**
   * Clear the selection.
   * @returns {Promise<void>}
   */
  async clearSelection(): Promise<void> {
    await test.step(`Clear selection for ${this.getElementReportName()}`, async () => {
      await this.clearSelectionIconButton.click();
    });
  }
}
