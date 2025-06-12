import { Locator, Page, test } from "@playwright/test";
import { BoundingBox, Coordinates, MouseButton, WheelScrollPixels } from "./types";

/**
 * Presses a key on the page (e.g., Escape)
 * @param {Page} page - The Playwright page object
 * @param {string} key - The key to press (e.g., 'Escape', 'Enter')
 * @param {number} delay - The delay between each key press (default: 100)
 * @returns {Promise<void>}
 */
export const pressKey = async (page: Page, key: string, delay: number = 100): Promise<void> => {
  await test.step(`Pressing key ${key}`, async () => {
    await page.keyboard.press(key, { delay });
  });
};

/**
 * Moves the mouse to the center of the element
 * @param {Page} page - The Playwright page object
 * @param {BoundingBox} boundingBox - The bounding box of the element to move to
 * @param {number} steps - The number of steps to take when moving (default: 1)
 * @returns {Promise<void>}
 */
export const mouseMove = async (page: Page, boundingBox: BoundingBox, steps: number = 1): Promise<void> => {
  await test.step(`Moving mouse to ${boundingBox.x}, ${boundingBox.y}`, async () => {
    await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2, { steps });
  });
};

/**
 * Mouses down at the center of the element
 * @param {Page} page - The Playwright page object
 * @param {MouseButton} button - The mouse button to click (default: "left")
 * @param {number} clickCount - The number of clicks to perform (default: 1)
 * @returns {Promise<void>}
 */
export const mouseDown = async (page: Page, button: MouseButton = "left", clickCount: number = 1): Promise<void> => {
  await test.step(`Mouse down ${button} ${clickCount} times`, async () => {
    await page.mouse.down({ button, clickCount });
  });
};

/**
 * Mouses up at the center of the element
 * @param {Page} page - The Playwright page object
 * @param {MouseButton} button - The mouse button to click (default: "left")
 * @param {number} clickCount - The number of clicks to perform (default: 1)
 * @returns {Promise<void>}
 */
export const mouseUp = async (page: Page, button: MouseButton = "left", clickCount: number = 1): Promise<void> => {
  await test.step(`Mouse up ${button} ${clickCount} times`, async () => {
    await page.mouse.up({ button, clickCount });
  });
};

/**
 * Drags an element from one location and drops it to another
 * @param {Page} page - The Playwright page object
 * @param {Locator} sourceLocator - The locator of the element to drag
 * @param {Locator} targetLocator - The locator of the element to drop to
 * @param {number} steps - The number of steps to take when dragging (default: 5)
 * @returns {Promise<void>}
 */
export const dragAndDrop = async (
  page: Page,
  sourceLocator: Locator,
  targetLocator: Locator,
  steps: number = 5
): Promise<void> => {
  await test.step(`Dragging and dropping ${sourceLocator.toString()} to ${targetLocator.toString()}`, async () => {
    const sourceBox = await sourceLocator.boundingBox();
    const targetBox = await targetLocator.boundingBox();

    if (!sourceBox || !targetBox) {
      throw new Error("Source or target locator is not visible");
    }

    await mouseMove(page, sourceBox);
    await mouseDown(page);
    await mouseMove(page, targetBox, steps);
    await mouseUp(page);
  });
};

/**
 * Scrolls the mouse wheel by a given number of pixels
 * @param {Page} page - The Playwright page object
 * @param {WheelScrollPixels} wheelScrollPixels - The number of pixels to scroll by
 * @returns {Promise<void>}
 */
export const mouseWheelScroll = async (page: Page, wheelScrollPixels: WheelScrollPixels): Promise<void> => {
  await test.step(`Scrolling ${wheelScrollPixels.deltaX}, ${wheelScrollPixels.deltaY}`, async () => {
    await page.mouse.wheel(wheelScrollPixels.deltaX, wheelScrollPixels.deltaY);
  });
};

/**
 * Double clicks at the given coordinates
 * @param {Page} page - The Playwright page object
 * @param {Coordinates} coordinates - The coordinates to double click at
 * @param {MouseButton} button - The mouse button to click (default: "left")
 * @param {number} delay - The delay between each click (default: 100)
 * @returns {Promise<void>}
 */
export const mouseDoubleClick = async (
  page: Page,
  coordinates: Coordinates,
  button: MouseButton = "left",
  delay: number = 100
): Promise<void> => {
  await test.step(`Double clicking ${coordinates.x}, ${coordinates.y}`, async () => {
    await page.mouse.dblclick(coordinates.x, coordinates.y, { button, delay });
  });
};

/**
 * Clicks at the given coordinates
 * @param {Page} page - The Playwright page object
 * @param {Coordinates} coordinates - The coordinates to click at
 * @param {MouseButton} button - The mouse button to click (default: "left")
 * @param {number} delay - The delay between each click (default: 100)
 * @param {number} clickCount - The number of clicks to perform (default: 1)
 * @returns {Promise<void>}
 */
export const mouseClick = async (
  page: Page,
  coordinates: Coordinates,
  button: MouseButton = "left",
  delay: number = 100,
  clickCount: number = 1
): Promise<void> => {
  await test.step(`Clicking ${coordinates.x}, ${coordinates.y}`, async () => {
    await page.mouse.click(coordinates.x, coordinates.y, { button, clickCount, delay });
  });
};
