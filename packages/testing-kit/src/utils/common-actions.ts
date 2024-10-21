import { Page } from "@playwright/test";

/**
 * Presses a key on the page (e.g., Escape)
 * @param {Page} page - The Playwright page object
 * @param {string} key - The key to press (e.g., 'Escape', 'Enter')
 * @returns {Promise<void>}
 */
export const pressKey = async (page: Page, key: string): Promise<void> => {
  await page.keyboard.press(key);
};

/**
 * Drags an element from one location and drops it to another
 * @param {Page} page - The Playwright page object
 * @param {string} sourceSelector - CSS or XPath selector of the element to drag
 * @param {string} targetSelector - CSS or XPath selector of the element to drop to
 * @returns {Promise<void>}
 */
export const dragAndDrop = async (page: Page, sourceSelector: string, targetSelector: string): Promise<void> => {
  const sourceElement = await page.locator(sourceSelector);
  const targetElement = await page.locator(targetSelector);
  await sourceElement.dragTo(targetElement);
};
