import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a Steps element.
 * Extends the BaseElement class.
 */
export class Steps extends BaseElement {
  private backButton: Button;
  private forwardButton: Button;

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
      this.getLocator().locator("button").first(),
      `${elementReportName} - Back Button`
    );
    this.forwardButton = new Button(
      page,
      this.getLocator().locator("button").last(),
      `${elementReportName} - Forward Button`
    );
  }

  /**
   * Get a step by its index.
   * @param {number} index - The index of the step to retrieve.
   * @returns {Promise<Button>} The step with the specified index.
   */
  async getStepByIndex(index: number): Promise<Button> {
    return await test.step(`Get step by index ${index} for ${this.getElementReportName()}`, async () => {
      return new Button(
        this.getPage(),
        this.getLocator().getByRole("group").locator("button").nth(index),
        `${this.getElementReportName()} - Step ${index}`
      );
    });
  }

  /**
   * Get all step dots.
   * @returns {Promise<Button[]>} An array of step dots.
   */
  async getStepDots(): Promise<Button[]> {
    return await test.step(`Get all steps for ${this.getElementReportName()}`, async () => {
      const steps = await this.getLocator().getByRole("group").locator("button").all();
      return steps.map(
        (step, index) => new Button(this.getPage(), step, `${this.getElementReportName()} - Step ${index}`)
      );
    });
  }

  /**
   * Go to the previous step.
   */
  async goToPreviousStep(): Promise<void> {
    await test.step(`Click back button for ${this.getElementReportName()}`, async () => {
      await this.backButton.click();
    });
  }

  /**
   * Go to the next step.
   */
  async goToNextStep(): Promise<void> {
    await test.step(`Click next button for ${this.getElementReportName()}`, async () => {
      await this.forwardButton.click();
    });
  }

  /**
   * Check if the back button is enabled.
   * @returns {Promise<boolean>} True if the back button is enabled, false otherwise.
   */
  async isBackButtonEnabled(): Promise<boolean> {
    return await test.step(`Check if back button is enabled for ${this.getElementReportName()}`, async () => {
      return await this.backButton.isEnabled();
    });
  }

  /**
   * Check if the forward button is enabled.
   * @returns {Promise<boolean>} True if the forward button is enabled, false otherwise.
   */
  async isForwardButtonEnabled(): Promise<boolean> {
    return await test.step(`Check if forward button is enabled for ${this.getElementReportName()}`, async () => {
      return await this.forwardButton.isEnabled();
    });
  }

  /**
   * Check if the back button is visible.
   * @returns {Promise<boolean>} True if the back button is visible, false otherwise.
   */
  async isBackButtonVisible(): Promise<boolean> {
    return await test.step(`Check if back button is visible for ${this.getElementReportName()}`, async () => {
      return await this.backButton.isVisible();
    });
  }

  /**
   * Check if the forward button is visible.
   * @returns {Promise<boolean>} True if the forward button is visible, false otherwise.
   */
  async isForwardButtonVisible(): Promise<boolean> {
    return await test.step(`Check if forward button is visible for ${this.getElementReportName()}`, async () => {
      return await this.forwardButton.isVisible();
    });
  }

  /**
   * Get the number of steps.
   * @returns {Promise<number>} The number of steps.
   */
  async getTotalStepsCount(): Promise<number> {
    return await test.step(`Get number of steps for ${this.getElementReportName()}`, async () => {
      const steps = await this.getStepDots();
      return steps.length;
    });
  }

  /**
   * Click a step dot by its index.
   * @param {number} stepIndex - The index of the step dot to click.
   * @returns {Promise<void>}
   */
  async clickStepDot(stepIndex: number): Promise<void> {
    await test.step(`Click step dot by index ${stepIndex} for ${this.getElementReportName()}`, async () => {
      const step = await this.getStepByIndex(stepIndex);
      await step.click();
    });
  }

  /**
   * Get the active step dot index.
   * @returns {Promise<number>} The active step dot index.
   */
  async getActiveStepDotIndex(): Promise<number> {
    return await test.step(`Get active step dot index for ${this.getElementReportName()}`, async () => {
      const steps = await this.getStepDots();
      let activeStepIndex = -1;
      for (const step of steps) {
        if ((await step.getAttributeValue("aria-current")) === "step") {
          activeStepIndex = steps.indexOf(step);
          break;
        }
      }
      return activeStepIndex;
    });
  }

  /**
   * Check if a step dot is active.
   * @param {number} stepIndex - The index of the step dot to check.
   * @returns {Promise<boolean>} True if the step dot is active.
   */
  async isStepDotActive(stepIndex: number): Promise<boolean> {
    return await test.step(`Check if step dot ${stepIndex} is active for ${this.getElementReportName()}`, async () => {
      const step = await this.getStepByIndex(stepIndex);
      return (await step.getAttributeValue("aria-current")) === "step";
    });
  }

  /**
   * Navigate to the first step.
   * @returns {Promise<void>}
   */
  async navigateToBeginning(): Promise<void> {
    await test.step(`Navigate to first step for ${this.getElementReportName()}`, async () => {
      await this.clickStepDot(0);
    });
  }

  /**
   * Navigate to the last step.
   * @returns {Promise<void>}
   */
  async navigateToEnd(): Promise<void> {
    await test.step(`Navigate to last step for ${this.getElementReportName()}`, async () => {
      const numberOfSteps = await this.getTotalStepsCount();
      await this.clickStepDot(numberOfSteps - 1);
    });
  }

  /**
   * Get the current step content.
   * @returns {Promise<BaseElement>} The current step content.
   */
  async getCurrentStepContent(): Promise<BaseElement> {
    return await test.step(`Get current step content for ${this.getElementReportName()}`, async () => {
      const locatorsToAvoid = this.getLocator()
        .locator('.header, [data-testid*="steps-forward-command"], [data-testid*="steps-backward-command"]')
        .first();

      const stepContent = this.getLocator().locator("> *").filter({ hasNot: locatorsToAvoid });
      return new BaseElement(this.getPage(), stepContent, `${this.getElementReportName()} - Step Content`);
    });
  }

  /**
   * Get the current step index from the steps numbers header (for numbers type steps).
   * @returns {Promise<number>} The current step index (0-based).
   */
  async getCurrentStepIndex(): Promise<number> {
    let currentStepIndex = 0;
    await test.step(`Get current step index from ${this.elementReportName}`, async () => {
      const numbersText = await this.locator
        .locator("span")
        .filter({ hasText: /\d+\s*\\\s*\d+/ })
        .innerText();
      const match = numbersText.match(/(\d+)\s*\\\s*(\d+)/);
      if (match) {
        currentStepIndex = parseInt(match[1]) - 1; // Convert to 0-based index
      }
    });
    return currentStepIndex;
  }

  /**
   * Wait for the steps to load.
   * @returns {Promise<void>}
   */
  async waitForStepsToLoad(): Promise<void> {
    await test.step(`Wait for steps to load for ${this.getElementReportName()}`, async () => {
      await this.waitForElementToBeVisible();
    });
  }
}
