import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a Steps element.
 * Extends the BaseElement class.
 */
export class Steps extends BaseElement {
  private backButton: Button;
  private nextButton: Button;

  /**
   * Create a Steps element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Steps element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.backButton = new Button(
      page,
      this.getLocator().getByTestId("steps-backward-command"),
      `${elementReportName} - Back Button`
    );
    this.nextButton = new Button(
      page,
      this.getLocator().getByTestId("steps-forward-command"),
      `${elementReportName} - Next Button`
    );
  }

  /**
   * Click the back button.
   */
  async clickBackButton(): Promise<void> {
    await test.step(`Click back button for ${this.getElementReportName()}`, async () => {
      await this.backButton.click();
    });
  }

  /**
   * Click the next button.
   */
  async clickNextButton(): Promise<void> {
    await test.step(`Click next button for ${this.getElementReportName()}`, async () => {
      await this.nextButton.click();
    });
  }

  /**
   * Check if the back button is enabled.
   * @returns {Promise<boolean>} True if the back button is enabled.
   */
  async isBackButtonEnabled(): Promise<boolean> {
    return await test.step(`Check if back button is enabled for ${this.getElementReportName()}`, async () => {
      return await this.backButton.isEnabled();
    });
  }

  /**
   * Check if the next button is enabled.
   * @returns {Promise<boolean>} True if the next button is enabled.
   */
  async isNextButtonEnabled(): Promise<boolean> {
    return await test.step(`Check if next button is enabled for ${this.getElementReportName()}`, async () => {
      return await this.nextButton.isEnabled();
    });
  }

  /**
   * Check if the back button is visible.
   * @returns {Promise<boolean>} True if the back button is visible.
   */
  async isBackButtonVisible(): Promise<boolean> {
    return await test.step(`Check if back button is visible for ${this.getElementReportName()}`, async () => {
      return await this.backButton.isVisible();
    });
  }

  /**
   * Check if the next button is visible.
   * @returns {Promise<boolean>} True if the next button is visible.
   */
  async isNextButtonVisible(): Promise<boolean> {
    return await test.step(`Check if next button is visible for ${this.getElementReportName()}`, async () => {
      return await this.nextButton.isVisible();
    });
  }

  /**
   * Get a step by its index.
   * @param {number} index - The index of the step to retrieve.
   * @returns {Promise<Button>} The step with the specified index.
   */
  private async getStepByIndex(index: number): Promise<Button> {
    return await test.step(`Get step by index ${index} for ${this.getElementReportName()}`, async () => {
      return new Button(
        this.getPage(),
        this.getLocator().getByRole("group").locator("button").nth(index),
        `${this.getElementReportName()} - Step ${index}`
      );
    });
  }

  /**
   * Get all steps.
   * @returns {Promise<Button[]>} An array of steps.
   */
  private async getAllSteps(): Promise<Button[]> {
    return await test.step(`Get all steps for ${this.getElementReportName()}`, async () => {
      const steps = await this.getLocator().getByRole("group").locator("button").all();
      return steps.map(
        (step, index) => new Button(this.getPage(), step, `${this.getElementReportName()} - Step ${index}`)
      );
    });
  }

  /**
   * Click a step by its index.
   * @param {number} index - The index of the step to click.
   * @returns {Promise<void>}
   */
  async clickStepByIndex(index: number): Promise<void> {
    await test.step(`Click button by index ${index} for ${this.getElementReportName()}`, async () => {
      const step = await this.getStepByIndex(index);
      await step.click();
    });
  }

  /**
   * Get the active step index.
   * @returns {Promise<number>} The active step index.
   */
  async getActiveStepIndex(): Promise<number> {
    return await test.step(`Get current step index for ${this.getElementReportName()}`, async () => {
      const steps = await this.getAllSteps();
      return steps.findIndex(async step => (await step.getAttributeValue("aria-current")) === "step");
    });
  }

  /**
   * Get the number of steps.
   * @returns {Promise<number>} The number of steps.
   */
  async getNumberOfSteps(): Promise<number> {
    return await test.step(`Get number of steps for ${this.getElementReportName()}`, async () => {
      const steps = await this.getAllSteps();
      return steps.length;
    });
  }

  /**
   * Check if a step is active.
   * @param {number} stepIndex - The index of the step to check.
   * @returns {Promise<boolean>} True if the step is active.
   */
  async isStepActive(stepIndex: number): Promise<boolean> {
    return await test.step(`Check if step ${stepIndex} is active for ${this.getElementReportName()}`, async () => {
      const step = await this.getStepByIndex(stepIndex);
      return (await step.getAttributeValue("aria-current")) === "step";
    });
  }

  /**
   * Go to the first step.
   * @returns {Promise<void>}
   */
  async goToFirstStep(): Promise<void> {
    await test.step(`Go to first step for ${this.getElementReportName()}`, async () => {
      await this.clickStepByIndex(0);
    });
  }

  /**
   * Go to the last step.
   * @returns {Promise<void>}
   */
  async goToLastStep(): Promise<void> {
    await test.step(`Go to last step for ${this.getElementReportName()}`, async () => {
      const numberOfSteps = await this.getNumberOfSteps();
      await this.clickStepByIndex(numberOfSteps - 1);
    });
  }
}
