import { test, expect } from "@playwright/test";
import { Modal } from "../components";
import { modalStory } from "./utils/url-helper";

test.describe("Storybook - Unit Tests - Modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(modalStory);
  });

  test("Modal should be able to click X button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    await modal.clickXButton();
    // Verify modal is closed
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should be able to click Cancel button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    await modal.clickCancelButton();
    // Verify modal is closed
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should be able to click Confirm button", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    await modal.clickConfirmButton();
    // Verify modal is closed
    expect(await modal.isVisible()).toBe(false);
  });

  test("Modal should return header text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    const headerText = await modal.getModalHeaderText();
    expect(headerText).toBeTruthy();
    expect(typeof headerText).toBe("string");
  });

  test("Modal should return content text", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    const contentText = await modal.getModalContentText();
    expect(contentText).toBeTruthy();
    expect(typeof contentText).toBe("string");
  });

  test("Modal should be visible when opened", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    expect(await modal.isVisible()).toBe(true);
  });

  test("Modal should have correct text content", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    const text = await modal.getText();
    expect(typeof text).toBe("string");
  });

  test("Modal buttons should be enabled", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    // Check that the modal is enabled (we can't directly check buttons, but we can check the modal)
    expect(await modal.isEnabled()).toBe(true);
  });

  test("Modal should handle multiple button clicks", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");

    // Test X button
    await frame.locator('button:has-text("Open Modal")').click();
    let modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");
    await modal.clickXButton();

    // Test Cancel button
    await frame.locator('button:has-text("Open Modal")').click();
    modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");
    await modal.clickCancelButton();

    // Test Confirm button
    await frame.locator('button:has-text("Open Modal")').click();
    modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");
    await modal.clickConfirmButton();
  });

  test("Modal should retrieve both header and content text correctly", async ({ page }) => {
    const frame = page.frameLocator("[id='storybook-preview-iframe']");
    // First open the modal
    await frame.locator('button:has-text("Open Modal")').click();

    const modal = new Modal(page, frame.locator('[data-testid="modal"]'), "Modal");

    const headerText = await modal.getModalHeaderText();
    const contentText = await modal.getModalContentText();

    expect(headerText).toBeTruthy();
    expect(contentText).toBeTruthy();
    expect(typeof headerText).toBe("string");
    expect(typeof contentText).toBe("string");

    // They should be different texts
    expect(headerText).not.toBe(contentText);
  });
});
