import { test, expect, FrameLocator } from "@playwright/test";
import { RadioButton } from "../components";
import { radioButtonStory } from "./utils/url-helper";

let frame: FrameLocator;
let radioButton: RadioButton;
const radioButtonLocator = 'label[data-testid="radio-button"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Storybook - Unit Tests - RadioButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(radioButtonStory);
    frame = page.frameLocator(frameLocator);
    radioButton = new RadioButton(page, frame.locator(radioButtonLocator), "RadioButton");
    await page.reload();
    await radioButton.waitForElementToBeVisible();
  });

  test("should be initially unchecked", async () => {
    expect(await radioButton.isChecked()).toBe(false);
  });

  test("should be able to be checked", async () => {
    await radioButton.select();
    expect(await radioButton.isChecked()).toBe(true);
  });

  test("should be enabled by default", async () => {
    expect(await radioButton.isEnabled()).toBe(true);
  });

  test("should be visible by default", async () => {
    expect(await radioButton.isVisible()).toBe(true);
  });

  test("should be hoverable", async () => {
    await radioButton.hover();
    expect(await radioButton.isEnabled()).toBe(true);
  });

  test("should count elements correctly", async () => {
    const count = await radioButton.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await radioButton.getAttributeValue("class");
    expect(className).toContain("RadioButton-module");
  });
});
