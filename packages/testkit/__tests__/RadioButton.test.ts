import { test, expect, FrameLocator } from "@playwright/test";
import { BaseElement, RadioButton } from "../components";
import { radioButtonStory } from "./utils/url-helper";

let frame: FrameLocator;
let radioButton: RadioButton;
const radioButtonLocator = 'label[data-testid="radio-button"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - RadioButton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(radioButtonStory);
    frame = page.frameLocator(frameLocator);
    radioButton = new RadioButton(page, frame.locator(radioButtonLocator), "RadioButton");
    await page.reload();
    await radioButton.waitForElementToBeVisible();
  });

  test("should be initially unchecked", async () => {
    await expect(radioButton.getLocator()).not.toBeChecked();
  });

  test("should be able to be checked", async () => {
    await radioButton.select();
    await expect(radioButton.getLocator()).toBeChecked();
  });

  test("should be enabled by default", async () => {
    await expect(radioButton.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(radioButton.getLocator()).toBeVisible();
  });

  test("should be hoverable", async () => {
    await radioButton.hover();
    await expect(radioButton.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await radioButton.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const attributeValue = await new BaseElement(
      radioButton.getPage(),
      radioButton.getLocator().locator("input"),
      "RadioButton"
    ).getAttributeValue("type");
    expect(attributeValue).toContain("radio");
  });
});
