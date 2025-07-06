import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a SplitButton element.
 * Extends the BaseElement class.
 */
export class SplitButton extends BaseElement {
  private primaryButton: Button;
  private secondaryButton: Button;

  /**
   * Create a SplitButton element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the SplitButton element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.primaryButton = new Button(
      page,
      locator.getByTestId("split-button-primary-button"),
      `${elementReportName} - Primary Button`
    );
    this.secondaryButton = new Button(
      page,
      locator.getByTestId("split-button-secondary-button"),
      `${elementReportName} - Secondary Button`
    );
  }

  /**
   * Click the primary button.
   */
  async clickPrimaryButton(): Promise<void> {
    await test.step(`Click primary button for ${this.getElementReportName()}`, async () => {
      await this.primaryButton.click();
    });
  }

  /**
   * Click the secondary button.
   */
  async clickSecondaryButton(): Promise<void> {
    await test.step(`Click secondary button for ${this.getElementReportName()}`, async () => {
      await this.secondaryButton.click();
    });
  }
}
