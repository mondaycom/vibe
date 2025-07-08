import { test, expect, FrameLocator } from "@playwright/test";
import { Modal } from "../components";
import { modalStory } from "./utils/url-helper";

let frame: FrameLocator;
let modal: Modal;
const modalLocator = "#modal-basic";
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - Modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(modalStory);
    frame = page.frameLocator(frameLocator);
    modal = new Modal(page, frame.locator(modalLocator), "Modal");
    await page.reload();
    await modal.waitForElementToBeVisible();
  });

  test("Modal should be able to click X button", async () => {
    await modal.clickXButton();
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should be able to click Cancel button", async () => {
    await modal.clickCancelButton();
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should be able to click Confirm button", async () => {
    await modal.clickConfirmButton();
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should return header text", async () => {
    const headerText = await modal.getModalHeaderText();
    expect.soft(headerText).toBe("Modal title");
    expect.soft(headerText).toBeTruthy();
    expect(typeof headerText).toBe("string");
  });

  test("Modal should return subtitle text", async () => {
    const subtitleText = await modal.getModalSubtitleText();
    const normalizedText = subtitleText.replace(/\s+/g, " ").trim();
    expect.soft(normalizedText).toBe("Modal subtitle, can come with icon and link.");
    expect.soft(subtitleText).toBeTruthy();
    expect(typeof subtitleText).toBe("string");
  });

  test("Modal should return content text", async () => {
    const contentText = await modal.getModalContentText();
    expect
      .soft(contentText)
      .toBe(
        "Modal content will appear here, you can custom it however you want, according to the user needs. Please make sure that the content is clear for completing the relevant task."
      );
    expect.soft(contentText).toBeTruthy();
    expect(typeof contentText).toBe("string");
  });

  test("should be visible by default", async () => {
    expect(await modal.isVisible()).toBe(true);
  });

  test("should be hoverable", async () => {
    await modal.hover();
    expect(await modal.isVisible()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await modal.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await modal.getAttributeValue("class");
    expect(className).toContain("Modal-module");
  });
});
