import { test, Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a ButtonGroup element.
 * Extends the BaseElement class.
 */
export class ButtonGroup extends BaseElement {
  /**
   * Create a ButtonGroup element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the ButtonGroup element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get a button by its name.
   * @param {string} buttonName - The name of the button to get.
   * @returns {Promise<Button>} The button object.
   */
  private async getButtonByName(buttonName: string): Promise<Button> {
    return await test.step(`Get button by name ${buttonName} for ${this.getElementReportName()}`, async () => {
      return new Button(
        this.getPage(),
        this.getLocator().locator("button[data-testid='button']").filter({ hasText: buttonName }),
        buttonName
      );
    });
  }

  /**
   * Click a button by its name.
   * @param {string} buttonName - The name of the button to click.
   * @returns {Promise<void>}
   */
  async clickButtonByName(buttonName: string): Promise<void> {
    await test.step(`Click button by name ${buttonName} for ${this.getElementReportName()}`, async () => {
      const button = await this.getButtonByName(buttonName);
      await button.click();
    });
  }

  /**
   * Check if a button is selected.
   * @param {string} buttonName - The name of the button to check.
   * @returns {Promise<boolean>} True if the button is selected, false otherwise.
   */
  async isButtonSelected(buttonName: string): Promise<boolean> {
    return await test.step(`Check if button ${buttonName} is selected for ${this.getElementReportName()}`, async () => {
      const button = await this.getButtonByName(buttonName);
      return (await button.getAttributeValue("class")).includes("selected");
    });
  }

  /**
   * Get the name of the selected button.
   * @returns {Promise<string>} The name of the selected button.
   */
  async getSelectedButtonName(): Promise<string> {
    return await test.step(`Get selected button name for ${this.getElementReportName()}`, async () => {
      let buttons: Button[] = [];

      // Convert locators to buttons
      (await this.getLocator().locator("button[data-testid='button']").all()).forEach(async (buttonLocator, index) => {
        buttons.push(new Button(this.getPage(), buttonLocator, `Button ${index + 1}`));
      });

      // Find the selected button
      for (const button of buttons) {
        if ((await button.getAttributeValue("class")).includes("selected")) {
          return await button.getText();
        }
      }

      // If no selected button found, throw error
      throw new Error("No selected button found");
    });
  }
}
