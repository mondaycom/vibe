import { test, expect } from '@playwright/test';
import { Button } from '../buttons/Button';  // Assuming you have this Button class

test('should fire a click event and log to console', async ({ page }) => {
  // Navigate to the Storybook page with the component
  await page.goto('/?path=/story/buttons-button--overview');

  // Locate the iframe where the button is rendered
  const frame = page.frameLocator("[id='storybook-preview-iframe']");
  const button = new Button(page, frame.locator('button[data-testid="button"]'), 'Button');

  // Add a listener to capture console logs
  let consoleMessage = '';
  page.on('console', async (msg) => {
    const values = await Promise.all(msg.args().map(arg => arg.jsonValue()));
    consoleMessage = values.join(' ');
  });

  // Attach a click event listener that logs a message to the console
  await button.locator.evaluate((buttonElement) => {
    buttonElement.addEventListener('click', () => {
      console.log('Button clicked');  // Log to console when clicked
    });
  });
  // Click the button
  await button.click();

  // Wait a bit to ensure the console log is captured
  await page.waitForTimeout(500);

  // Verify the console log contains the expected message
  expect(consoleMessage).toContain('Button clicked');
});
