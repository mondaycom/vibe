import { test, expect, FrameLocator } from "@playwright/test";
import { ExpandCollapse } from "../components/ExpandCollapse";
import { expandCollapseStory } from "./utils/url-helper";

let frame: FrameLocator;
let expandCollapse: ExpandCollapse;
const expandCollapseLocator = 'div[data-testid="expand-collapse"]';
const frameLocator = "[id='storybook-preview-iframe']";

test.describe("Testkit - Unit Tests - ExpandCollapse", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(expandCollapseStory);
    frame = page.frameLocator(frameLocator);
    expandCollapse = new ExpandCollapse(page, frame.locator(expandCollapseLocator), "ExpandCollapse");
    await page.reload();
    await expandCollapse.waitForElementToBeVisible();
  });

  test("should be visible by default", async () => {
    await expect(expandCollapse.getLocator()).toBeVisible();
  });

  test("should be enabled by default", async () => {
    await expect(expandCollapse.getLocator()).toBeEnabled();
  });

  test("should be hoverable", async () => {
    await expandCollapse.hover();
    await expect(expandCollapse.getLocator()).toBeEnabled();
  });

  test("should scroll into view when needed", async () => {
    await expandCollapse.scrollIntoView();
    await expect(expandCollapse.getLocator()).toBeEnabled();
  });

  test("should count elements correctly", async () => {
    const count = await expandCollapse.countElements();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test("should handle attribute retrieval", async () => {
    const className = await expandCollapse.getAttributeValue("class");
    expect(className).toContain("ExpandCollapse-stories-module");
  });

  test("should get header text", async () => {
    const headerText = await expandCollapse.getHeaderText();
    expect(headerText).toBe("Expand collapse");
  });

  test("should expand the expand collapse", async () => {
    await expandCollapse.expand();
    expect(await expandCollapse.isCollapsed()).toBe(false);
  });

  test("should collapse the expand collapse", async () => {
    await expandCollapse.collapse();
    expect(await expandCollapse.isCollapsed()).toBe(true);
  });

  test("should get content text", async () => {
    await expandCollapse.expand();
    const contentText = await expandCollapse.getContentText();
    expect(contentText).toBe("Insert here any component that you want, here is a robot for you");
  });

  test("should get content element", async () => {
    await expandCollapse.expand();
    const contentElement = expandCollapse.getContentElement();
    await expect(contentElement.getLocator()).toBeVisible();
  });

  test("should toggle the expand collapse", async () => {
    await expandCollapse.toggle();
    expect.soft(await expandCollapse.isCollapsed()).toBe(false);
    await expandCollapse.toggle();
    expect(await expandCollapse.isCollapsed()).toBe(true);
  });

  test("should handle multiple expand collapse interactions", async () => {
    await expandCollapse.expand();
    expect.soft(await expandCollapse.isContentVisible()).toBe(true);
    await expandCollapse.collapse();
    expect(await expandCollapse.isContentVisible()).toBe(false);
  });
});
