import { test, expect, FrameLocator } from "@playwright/test";
import { ButtonGroup } from "../components";
import { buttonGroupStory } from "./utils/url-helper";

let frame: FrameLocator;
let buttonGroup: ButtonGroup;
const buttonGroupLocator = 'div[data-testid="button-group"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - ButtonGroup", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(buttonGroupStory);
    frame = page.frameLocator(frameLocator);
    buttonGroup = new ButtonGroup(page, frame.locator(buttonGroupLocator), "ButtonGroup");
    await page.reload();
    await buttonGroup.waitForElementToBeVisible();
  });

  test("should be able to click button by name", async () => {
    await buttonGroup.clickButton("Delta");
    expect(await buttonGroup.isButtonSelected("Delta")).toBe(true);
  });

  test("should correctly identify default selected button", async () => {
    expect(await buttonGroup.isButtonSelected("Alpha")).toBe(true);
  });

  test("should return selected button name", async () => {
    const selectedButtonName = await buttonGroup.getSelectedButtonName();
    expect(selectedButtonName).toBe("Alpha");
  });

  test("should handle button selection changes", async () => {
    await buttonGroup.clickButton("Beta");
    expect.soft(await buttonGroup.isButtonSelected("Beta")).toBe(true);
    expect.soft(await buttonGroup.getSelectedButtonName()).toBe("Beta");
    await buttonGroup.clickButton("Gamma");
    expect.soft(await buttonGroup.isButtonSelected("Gamma")).toBe(true);
    expect(await buttonGroup.getSelectedButtonName()).toBe("Gamma");
  });

  test("should maintain single selection", async () => {
    await buttonGroup.clickButton("Beta");
    expect.soft(await buttonGroup.isButtonSelected("Beta")).toBe(true);
    await buttonGroup.clickButton("Gamma");
    expect.soft(await buttonGroup.isButtonSelected("Gamma")).toBe(true);
    expect(await buttonGroup.isButtonSelected("Beta")).toBe(false);
  });

  test("should be enabled by default", async () => {
    await expect(buttonGroup.getLocator()).toBeEnabled();
  });

  test("should be visible by default", async () => {
    await expect(buttonGroup.getLocator()).toBeVisible();
  });

  test("should handle button clicks in sequence", async () => {
    await buttonGroup.clickButton("Beta");
    expect.soft(await buttonGroup.getSelectedButtonName()).toBe("Beta");
    await buttonGroup.clickButton("Gamma");
    expect.soft(await buttonGroup.getSelectedButtonName()).toBe("Gamma");
    await buttonGroup.clickButton("Delta");
    expect.soft(await buttonGroup.getSelectedButtonName()).toBe("Delta");
    await buttonGroup.clickButton("Alpha");
    expect(await buttonGroup.getSelectedButtonName()).toBe("Alpha");
  });

  test("should count elements correctly", async () => {
    const count = await buttonGroup.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await buttonGroup.getAttributeValue("class");
    expect(className).toContain("ButtonGroup-module");
  });
});
