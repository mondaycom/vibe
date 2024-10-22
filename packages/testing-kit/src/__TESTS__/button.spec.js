import { test, expect } from '@playwright/test';
import {Button} from '../buttons/Button';
import { markElementAsClicked, isElementClicked } from './helpers/helpers';

test.use({headless: false});
test('should fire a click event', async ({ page }) => {
  // Navigate to the Storybook page or any page with your component
  await page.goto('http://localhost:7008/?path=/story/buttons-button--overview');
  const frame = page.frameLocator("[id='storybook-preview-iframe']")
  const button = new Button(page, frame.locator('button[data-testid="button"]'), 'Button');
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
   await button.click();
   const isClicked = await page.evaluate(() => window.isClicked);
   expect(isClicked).toBe(true);
});