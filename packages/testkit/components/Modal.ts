import { Page, Locator, test } from "@playwright/test";
import { BaseElement } from "./BaseElement";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

/**
 * Class representing a Modal element.
 * Extends the BaseElement class.
 */
export class Modal extends BaseElement {
  private modalHeader: BaseElement;
  private subtitle: BaseElement;
  private modalContent: BaseElement;
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
    this.modalHeader = new BaseElement(
      page,
      locator.getByTestId("text_modal-basic_label"),
      `${elementReportName} - Modal Header`
    );
    this.subtitle = new BaseElement(
      page,
      locator.locator("#modal-basic_desc"),
      `${elementReportName} - Modal Subtitle`
    );
    this.modalContent = new BaseElement(
      page,
      locator.getByTestId("modal-content"),
      `${elementReportName} - Modal Content`
    );
    this.cancelButton = new Button(
      page,
      locator.getByTestId("modal-footer").getByText("Cancel"),
      `${elementReportName} - Close Button`
    );
    this.confirmButton = new Button(
      page,
      locator.getByTestId("modal-footer").getByText("Confirm"),
      `${elementReportName} - Confirm Button`
    );
    this.xButton = new IconButton(page, locator.getByTestId("modal-close-button"), `${elementReportName} - X Button`);
  }

  /**
   * Click the X button.
   */
  async clickXButton(): Promise<void> {
    await test.step(`Click X button for ${this.getElementReportName()}`, async () => {
      await this.xButton.click();
      // Wait for the modal to close
      await this.getPage().waitForTimeout(200);
    });
  }

  /**
   * Click the Cancel button.
   */
  async clickCancelButton(): Promise<void> {
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
