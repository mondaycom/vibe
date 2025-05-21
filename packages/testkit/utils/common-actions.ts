import { Locator, Page, test } from "@playwright/test";

/**
 * Presses a key on the page (e.g., Escape)
 * @param {Page} page - The Playwright page object
 * @param {string} key - The key to press (e.g., 'Escape', 'Enter')
 * @returns {Promise<void>}
 */
export const pressKey = async (page: Page, key: string): Promise<void> => {
  await test.step(`Pressing key ${key}`, async () => {
    await page.keyboard.press(key);
  });
};

/**
 * Drags an element from one location and drops it to another
 * @param {Locator} sourceLocator - The locator of the element to drag
 * @param {Locator} targetLocator - The locator of the element to drop to
 * @returns {Promise<void>}
 */
export const dragAndDrop = async (sourceLocator: Locator, targetLocator: Locator): Promise<void> => {
  await test.step(`Dragging and dropping ${sourceLocator.toString()} to ${targetLocator.toString()}`, async () => {
    await sourceLocator.dragTo(targetLocator);
  });
};
