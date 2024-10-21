import { test, Page, Locator } from "@playwright/test";
import { BaseElement } from "../BaseElement";
import { Button } from "./Button";

/**
 * Class representing a group of buttons.
 * Extends the BaseElement class.
 */
export class ButtonGroup extends BaseElement {

  override page : Page;
  override locator: Locator;
  override elementReportName: string;
  items: Button[];
  buttonsInitialized: boolean;


  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
    this.items = [];
    this.buttonsInitialized = false;
  }

  /**
   * Initialize buttons if they are not already initialized.
   * @returns {Promise<void>}
   */
  async initializeButtonsIfNeeded() {
    await test.step(`Initialize ${this.elementReportName} if needed`, async () => {
      if (!this.buttonsInitialized) {
        await this.initializeButtons();
        this.buttonsInitialized = true;
      }
    });
  }

  /**
   * Initialize the buttons by locating all button elements.
   * @returns {Promise<void>}
   */
  async initializeButtons() {
    await test.step(`Initialize ${this.elementReportName}`, async () => {
      await this.waitForElementsGroup(this.locator.locator("button"), this.elementReportName);
      const buttonElements = await this.locator.locator("button").all();
      this.items = await Promise.all(
        buttonElements.map(async locator => {
          const buttonName = await locator.innerText();
          return new Button(this.page, locator.getByText(`${buttonName}`), `Button: ${buttonName}`);
        })
      );
    });
  }


  /**
   * Get a button by its name.
   * @param {string} buttonName - The name of the button to retrieve.
   * @returns {Button} The button with the specified name.
   */
  getButtonByName(buttonName: string): Button|undefined {
    if (!buttonName || typeof buttonName !== "string") {
      throw new Error("Invalid button name provided");
    }

    return this.items.find(item => item.elementReportName.includes(buttonName));
  }

  /**
   * Click a button by its name.
   * @param {string} buttonName - The name of the button to click.
   * @returns {Promise<void>}
   */
  async click(buttonName: string): Promise<void> {
    await this.initializeButtonsIfNeeded();
    const button = this.getButtonByName(buttonName);
    await button?.click();
  }
}
