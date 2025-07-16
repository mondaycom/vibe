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

  test("Modal should be able to close modal", async () => {
    await modal.closeModal();
    await expect(modal.getLocator()).toBeHidden();
  });

  test("should be visible by default", async () => {
    await expect(modal.getLocator()).toBeVisible();
  });

  test("should be hoverable", async () => {
    await modal.hover();
    await expect(modal.getLocator()).toBeVisible();
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
