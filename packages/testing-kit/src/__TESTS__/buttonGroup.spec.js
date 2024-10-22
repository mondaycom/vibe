import { test, expect } from '@playwright/test';
import { ButtonGroup } from '../buttons/ButtonGroup';
import { Button } from '../buttons/Button';
import { isElementClicked, markElementAsClicked } from './helpers/helpers';

test.use({ headless: false });  // Run browser in non-headless mode for debugging

test.describe('ButtonGroup Class with Storybook', () => {
  let buttonGroup;

  test.beforeEach(async ({ page }) => {
    // Navigate to the Storybook story where the ButtonGroup component is rendered
    await page.goto('http://localhost:7008/?path=/story/buttons-buttongroup--default');

    // Locate the iframe where the Storybook component is rendered
    const frame = page.frameLocator("[id='storybook-preview-iframe']");

    // Locate the button group inside the iframe
    const buttonGroupLocator = frame.locator('div[data-testid="button-group"]');

    // Initialize ButtonGroup with the Playwright page and locator
    buttonGroup = new ButtonGroup(page, buttonGroupLocator, 'Test Button Group');
  });

  test('should initialize buttons if needed', async () => {
    // Initialize the buttons inside the ButtonGroup
    await buttonGroup.initializeButtonsIfNeeded();

    // Verify that buttons are initialized
    expect(buttonGroup.buttonsInitialized).toBe(true);

    // Verify that buttons exist in the items array
    expect(buttonGroup.items.length).toBeGreaterThan(0);  // Ensure that buttons were initialized
  });

  test.only('should retrieve a button by name and click it', async ({page}) => {
    // Initialize the buttons inside the ButtonGroup
    await buttonGroup.initializeButtonsIfNeeded();

    const button = await buttonGroup.getButtonByName('Beta');  // Adjust the button name as needed
    await page.evaluate(() => {
        const iframe = document.querySelector('[id="storybook-preview-iframe"]');
    // Access the iframe's document and query the button inside it
        const buttonElement = iframe.contentWindow.document.querySelector('button[data-testid="button"]');
          // Attach event listener inside browser context
          window.isClicked = '';  // Create a global flag for tracking
          buttonElement.addEventListener('click', () => {
            window.isClicked = true; // Set flag to true when clicked
          }, { once: true }); // Ensure it fires only once
      });
    await markElementAsClicked(page, "[data-testid='button']", "Button: Beta");

        // Click the button
    await buttonGroup.click("Beta");

    // Add assertions based on expected behavior after the button is clicked
    // For example, verify some change in the UI, or a log, etc.
    const result = await isElementClicked(page, "Button: Beta");
    expect(result).toBeTruthy();  // Adjust this to match your expected result
  });

  test('should throw an error if trying to click a non-existent button', async () => {
    // Initialize the buttons
    await buttonGroup.initializeButtonsIfNeeded();

    // Try to click a non-existent button and verify that an error is thrown
    await expect(buttonGroup.click('NonExistentButton')).rejects.toThrow('Invalid button name provided');
  });
});
