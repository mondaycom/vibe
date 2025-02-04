import { test, Page, Locator } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a group of buttons.
 * Extends the BaseElement class.
 */
export class ButtonGroup extends BaseElement {
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
  }

  /**
   * Get all buttons in the button group.
   * @returns {Promise<Button[]>} An array of Button objects.
   */
  async getAllButtons(): Promise<Button[]> {
    let buttons: Button[] = [];
    await test.step(`Get all buttons in ${this.elementReportName}`, async () => {
      const buttonsLocators = await this.locator.locator("button").all();
      const buttonPromises = buttonsLocators.map(
        async buttonLocator => new Button(this.page, buttonLocator, await buttonLocator.innerText())
      );
      buttons = await Promise.all(buttonPromises);
    });
    return buttons;
  }

  /**
   * Get a button by its name.
   * @param {string} buttonName - The name of the button to retrieve.
   * @returns {Button} The button with the specified name.
   */
  async getButtonByName(buttonName: string): Promise<Button | undefined> {
    let button: Button | undefined;
    await test.step(`Get button by name ${buttonName} in ${this.elementReportName}`, async () => {
      button = new Button(
        this.page,
        this.locator.locator("button").filter({ hasText: buttonName }),
        `Button: ${buttonName}`
      );
    });
    return button;
  }

  /**
   * Click a button by its name.
   * @param {string} buttonName - The name of the button to click.
   * @returns {Promise<void>}
   */
  async clickButton(buttonName: string): Promise<void> {
    await test.step(`Click button ${buttonName} in ${this.elementReportName}`, async () => {
      const button = new Button(
        this.page,
        this.locator.locator("button").filter({ hasText: buttonName }),
        `Button: ${buttonName}`
      );
      if (!button) {
        throw new Error(`Invalid button name provided: ${buttonName}`);
      }
      await button.click();
    });
  }
}
