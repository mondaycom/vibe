import { test, Locator, Page } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";

/**
 * Class representing a Steps component.
 * Extends the BaseElement class.
 * Provides methods to interact with all Steps component functionality including navigation buttons,
 * step indicators, and step content.
 */
export class Steps extends BaseElement {
  private backButton: Button;
  private nextButton: Button;
  private finishButton: Button;

  /**
   * Create a Steps element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Steps element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.backButton = new Button(page, this.locator.getByTestId("steps-backward-command"), "Steps back button");
    this.nextButton = new Button(page, this.locator.getByTestId("steps-forward-command"), "Steps next button");
    this.finishButton = new Button(page, this.locator.getByRole("button", { name: "Finish" }), "Steps finish button");
  }

  /**
   * Click the back button to go to the previous step.
   * @returns {Promise<void>}
   */
  async goToPreviousStep(): Promise<void> {
    await test.step(`Go to previous step in ${this.elementReportName}`, async () => {
      await this.backButton.click();
    });
  }

  /**
   * Click the next button to go to the next step.
   * @returns {Promise<void>}
   */
  async goToNextStep(): Promise<void> {
    await test.step(`Go to next step in ${this.elementReportName}`, async () => {
      await this.nextButton.click();
    });
  }

  /**
   * Click the finish button to complete the steps.
   * @returns {Promise<void>}
   */
  async finish(): Promise<void> {
    await test.step(`Finish steps in ${this.elementReportName}`, async () => {
      await this.finishButton.click();
    });
  }

  /**
   * Check if the back button is enabled.
   * @returns {Promise<boolean>} True if the back button is enabled.
   */
  async isBackButtonEnabled(): Promise<boolean> {
    let isEnabled = false;
    await test.step(`Check if back button is enabled in ${this.elementReportName}`, async () => {
      isEnabled = await this.backButton.isEnabled();
    });
    return isEnabled;
  }

  /**
   * Check if the next button is enabled.
   * @returns {Promise<boolean>} True if the next button is enabled.
   */
  async isNextButtonEnabled(): Promise<boolean> {
    let isEnabled = false;
    await test.step(`Check if next button is enabled in ${this.elementReportName}`, async () => {
      isEnabled = await this.nextButton.isEnabled();
    });
    return isEnabled;
  }

  /**
   * Check if the finish button is visible.
   * @returns {Promise<boolean>} True if the finish button is visible.
   */
  async isFinishButtonVisible(): Promise<boolean> {
    let isVisible = false;
    await test.step(`Check if finish button is visible in ${this.elementReportName}`, async () => {
      isVisible = await this.finishButton.isVisible();
    });
    return isVisible;
  }

  /**
   * Get all step dots (for gallery type steps).
   * @returns {Promise<Locator[]>} An array of step dot locators.
   */
  private async getStepDots(): Promise<Locator[]> {
    let stepDots: Locator[] = [];
    await test.step(`Get all step dots in ${this.elementReportName}`, async () => {
      const dotsContainer = this.locator.locator('[role="group"]');
      stepDots = await dotsContainer.locator("button").all();
    });
    return stepDots;
  }

  /**
   * Click on a specific step dot to navigate to that step.
   * @param {number} stepIndex - The index of the step to navigate to (0-based).
   * @returns {Promise<void>}
   */
  async clickStepDot(stepIndex: number): Promise<void> {
    await test.step(`Click step dot ${stepIndex} in ${this.elementReportName}`, async () => {
      const stepDots = await this.getStepDots();
      if (stepIndex >= 0 && stepIndex < stepDots.length) {
        await stepDots[stepIndex].click();
      } else {
        throw new Error(`Step index ${stepIndex} is out of range. Available steps: 0-${stepDots.length - 1}`);
      }
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
   * Get the total number of steps from the steps numbers header (for numbers type steps).
   * @returns {Promise<number>} The total number of steps.
   */
  async getTotalStepsCount(): Promise<number> {
    let totalSteps = 0;
    await test.step(`Get total steps count from ${this.elementReportName}`, async () => {
      const numbersText = await this.locator
        .locator("span")
        .filter({ hasText: /\d+\s*\\\s*\d+/ })
        .innerText();
      const match = numbersText.match(/(\d+)\s*\\\s*(\d+)/);
      if (match) {
        totalSteps = parseInt(match[2]);
      }
    });
    return totalSteps;
  }

  /**
   * Check if a specific step dot is active (for gallery type steps).
   * @param {number} stepIndex - The index of the step to check (0-based).
   * @returns {Promise<boolean>} True if the step dot is active.
   */
  async isStepDotActive(stepIndex: number): Promise<boolean> {
    let isActive = false;
    await test.step(`Check if step dot ${stepIndex} is active in ${this.elementReportName}`, async () => {
      const stepDots = await this.getStepDots();
      if (stepIndex >= 0 && stepIndex < stepDots.length) {
        const ariaCurrent = await stepDots[stepIndex].getAttribute("aria-current");
        isActive = ariaCurrent === "step" || ariaCurrent === "true";
      }
    });
    return isActive;
  }

  /**
   * Get the active step dot index (for gallery type steps).
   * @returns {Promise<number>} The index of the active step dot (-1 if none active).
   */
  async getActiveStepDotIndex(): Promise<number> {
    let activeIndex = -1;
    await test.step(`Get active step dot index in ${this.elementReportName}`, async () => {
      const stepDots = await this.getStepDots();
      for (let i = 0; i < stepDots.length; i++) {
        const ariaCurrent = await stepDots[i].getAttribute("aria-current");
        if (ariaCurrent === "step" || ariaCurrent === "true") {
          activeIndex = i;
          break;
        }
      }
    });
    return activeIndex;
  }

  /**
   * Get the current step content element.
   * @returns {Promise<Locator>} The locator for the current step content.
   */
  async getCurrentStepContent(): Promise<Locator> {
    let stepContent: Locator = this.locator.locator("> *"); // Initialize with default value
    await test.step(`Get current step content in ${this.elementReportName}`, async () => {
      // Step content is typically the direct child that's not the header
      const stepsHeader = this.locator
        .locator('.header, [data-testid*="steps-forward-command"], [data-testid*="steps-backward-command"]')
        .first();
      stepContent = this.locator.locator("> *").filter({ hasNot: stepsHeader });
    });
    return stepContent;
  }

  /**
   * Wait for the steps component to be fully loaded and interactive.
   * @returns {Promise<void>}
   */
  async waitForStepsToLoad(): Promise<void> {
    await test.step(`Wait for ${this.elementReportName} to load`, async () => {
      await this.waitForVisible();
      // Wait for either step dots or numbers to be present
      await Promise.race([
        this.locator.locator('[role="group"]').waitFor({ state: "visible" }),
        this.locator
          .locator("span")
          .filter({ hasText: /\d+\s*\\\s*\d+/ })
          .waitFor({ state: "visible" })
      ]);
    });
  }

  /**
   * Navigate through all steps from beginning to end.
   * @returns {Promise<void>}
   */
  async navigateToEnd(): Promise<void> {
    await test.step(`Navigate through all steps to the end in ${this.elementReportName}`, async () => {
      await this.waitForStepsToLoad();

      // Keep clicking next until we reach the end
      while (await this.isNextButtonEnabled()) {
        await this.goToNextStep();
        await this.page.waitForTimeout(100); // Small delay for step transition
      }
    });
  }

  /**
   * Navigate back to the first step.
   * @returns {Promise<void>}
   */
  async navigateToBeginning(): Promise<void> {
    await test.step(`Navigate back to the beginning in ${this.elementReportName}`, async () => {
      await this.waitForStepsToLoad();

      // Keep clicking back until we reach the beginning
      while (await this.isBackButtonEnabled()) {
        await this.goToPreviousStep();
        await this.page.waitForTimeout(100); // Small delay for step transition
      }
    });
  }
}
