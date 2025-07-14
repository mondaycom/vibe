import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { Text } from "./Text";
import { pressKey } from "utils/common-actions";

/**
 * Class representing a Modal element.
 * Extends the BaseElement class.
 */
export class Modal extends BaseElement {
  private modalHeader: Text;
  private subtitle: Text;
  private modalContent: Text;
  private cancelButton: Button;
  private confirmButton: Button;
  private xButton: IconButton;

  /**
   * Create a Modal element.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the Modal element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.modalHeader = new Text(
      page,
      locator.getByTestId("text_modal-basic_label"),
      `${elementReportName} - Modal Header`
    );
    this.subtitle = new Text(page, locator.locator("#modal-basic_desc"), `${elementReportName} - Modal Subtitle`);
    this.modalContent = new Text(page, locator.getByTestId("modal-content"), `${elementReportName} - Modal Content`);
    this.cancelButton = new Button(
      page,
      locator.getByTestId("modal-footer").locator("button").first(),
      `${elementReportName} - Cancel Button`
    );
    this.confirmButton = new Button(
      page,
      locator.getByTestId("modal-footer").locator("button").last(),
      `${elementReportName} - Confirm Button`
    );
    this.xButton = new IconButton(page, locator.getByTestId("modal-close-button"), `${elementReportName} - X Button`);
  }

  /**
   * Close the modal.
   * @returns {Promise<void>}
   */
  async closeModal(): Promise<void> {
    await test.step(`Close modal for ${this.getElementReportName()}`, async () => {
      if (await this.cancelButton.isVisible()) {
        await this.clickCancelButton();
      } else if (await this.xButton.isVisible()) {
        await this.clickXButton();
      } else {
        await pressKey(this.getPage(), "Escape");
      }
    });
  }

  /**
   * Click the X button.
   */
  private async clickXButton(): Promise<void> {
    await test.step(`Click X button for ${this.getElementReportName()}`, async () => {
      await this.xButton.click();
      // Wait for the modal to close
      await this.getPage().waitForTimeout(200);
    });
  }

  /**
   * Click the Cancel button.
   */
  private async clickCancelButton(): Promise<void> {
    await test.step(`Click Cancel button for ${this.getElementReportName()}`, async () => {
      await this.cancelButton.click();
      // Wait for the modal to close
      await this.getPage().waitForTimeout(200);
    });
  }

  /**
   * Click the Confirm button.
   */
  async clickConfirmButton(): Promise<void> {
    await test.step(`Click Confirm button for ${this.getElementReportName()}`, async () => {
      await this.confirmButton.click();
      // Wait for the modal to close
      await this.getPage().waitForTimeout(200);
    });
  }

  /**
   * Get the modal header text.
   */
  async getModalHeaderText(): Promise<string> {
    return await test.step(`Get modal header text for ${this.getElementReportName()}`, async () => {
      return await this.modalHeader.getText();
    });
  }

  /**
   * Get the modal subtitle text.
   */
  async getModalSubtitleText(): Promise<string> {
    return await test.step(`Get modal subtitle text for ${this.getElementReportName()}`, async () => {
      return await this.subtitle.getText();
    });
  }

  /**
   * Get the modal content text.
   */
  async getModalContentText(): Promise<string> {
    return await test.step(`Get modal content text for ${this.getElementReportName()}`, async () => {
      return await this.modalContent.getText();
    });
  }
}
