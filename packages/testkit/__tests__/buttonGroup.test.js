import { test, expect } from "@playwright/test";
import { ButtonGroup } from "../components";
import { buttonGroupStory } from "./utils/url-helper";

test.describe("ButtonGroup Class with Storybook", () => {
  let buttonGroup;

  test.beforeEach(async ({ page }) => {
    // Navigate to the Storybook story where the ButtonGroup component is rendered
    await page.goto(buttonGroupStory);
    //TODO - find a better way to wait for the storybook to load
    // Locate the iframe where the Storybook component is rendered
    const frame = page.frameLocator("[id='storybook-preview-iframe']");

    // Locate the button group inside the iframe
    const buttonGroupLocator = frame.locator('div[data-testid="button-group"]');
    while ((await buttonGroupLocator.isVisible()) === false) {
      // eslint-disable-next-line playwright/no-wait-for-timeout
      await page.waitForTimeout(30000);
      await page.reload();
      if ((await buttonGroupLocator.isVisible()) === true) {
        break;
      }
    }
    // Initialize ButtonGroup with the Playwright page and locator
    buttonGroup = new ButtonGroup(page, buttonGroupLocator, "Test Button Group");
  });

  test("should initialize buttons if needed", async () => {
    // Initialize the buttons inside the ButtonGroup
    const buttons = await buttonGroup.getAllButtons();
    // Verify that buttons exist in the items array
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("should retrieve a button by name and click it", async ({ page }) => {
    // Initialize the buttons inside the ButtonGroup
    const button = await buttonGroup.getButtonByName("Beta"); // Adjust the button name as needed

    // Add a listener for console logs to capture the click event
    let consoleMessage = "";
    page.on("console", async msg => {
      const values = await Promise.all(msg.args().map(arg => arg.jsonValue()));
      consoleMessage = values.join(" ");
    });

    // Attach a click listener that logs a message to the console when the button is clicked
    await button.locator.evaluate(buttonElement => {
      buttonElement.addEventListener("click", () => {
        console.log("Button clicked: Beta"); // Log to console when clicked
      });
    });

    // Click the button
    await buttonGroup.clickButton("Beta");

    // eslint-disable-next-line playwright/no-wait-for-timeout -- Wait a bit to ensure the console log is captured
    await page.waitForTimeout(500);

    // Verify the console message contains the expected log
    expect(consoleMessage).toContain("Button clicked: Beta");
  });
});
