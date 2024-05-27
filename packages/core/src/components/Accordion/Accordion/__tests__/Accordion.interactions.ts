import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { Screen } from "@testing-library/react";
import { resetFocus } from "../../../../__tests__/interactions-helper";
import { delay, interactionSuite } from "../../../../tests/interactions-utils";

const CHANGES_DELAY = 100;

function getAccordionHeadingByText(canvas: Screen, title: string) {
  return canvas.getByText(title)?.closest("button");
}

function getOpenedAccordionItem(canvas: Screen) {
  const elPanel = canvas.getByRole("region");
  const elHeading = within(elPanel.parentElement).getByRole("button");
  return { elPanel, elHeading };
}

function getOpenedAccordionItems(canvas: Screen) {
  const elPanels = canvas.queryAllByRole("region");
  const elHeadings = elPanels.map(elPanel => {
    return within(elPanel.parentElement).getByRole("button");
  });
  return { elPanels, elHeadings };
}

async function openAndCheckAccordionItem(canvas: Screen, title: string) {
  const before = getOpenedAccordionItem(canvas);
  const elHeading = getAccordionHeadingByText(canvas, title);
  userEvent.click(elHeading);
  await delay(CHANGES_DELAY);
  const elPanel = canvas.getByRole("region");
  await expect(elHeading.getAttribute("aria-expanded")).toBe("true");
  await expect(before.elHeading.getAttribute("aria-expanded")).toBe("false");
  await expect(elHeading.getAttribute("aria-controls")).toBe(elPanel.id);
}

async function closeAndCheckMultiAccordionItem(canvas: Screen, expectedOpenedPanels: number) {
  const before = getOpenedAccordionItems(canvas);
  userEvent.click(before.elHeadings[0]);
  await delay(CHANGES_DELAY);
  const after = getOpenedAccordionItems(canvas);
  await expect(after.elPanels.length).toBe(expectedOpenedPanels);
  await expect(before.elHeadings[0].getAttribute("aria-expanded")).toBe("false");
}

async function openAndCheckMultiAccordionItem(canvas: Screen, title: string, expectedOpenedPanels: number) {
  const elHeading = getAccordionHeadingByText(canvas, title);
  userEvent.click(elHeading);
  await delay(CHANGES_DELAY);
  const after = getOpenedAccordionItems(canvas);
  await expect(after.elPanels.length).toBe(expectedOpenedPanels);
  await expect(after.elHeadings[0].getAttribute("aria-expanded")).toBe("true");
  await expect(after.elHeadings[0].getAttribute("aria-controls")).toBe(after.elPanels[0].id);
}

const closeAlreadyOpenSingleActiveTests = async (canvas: Screen) => {
  await delay(CHANGES_DELAY);
  // Open panel gets closed after click
  await closeAndCheckMultiAccordionItem(canvas, 0);
};

const openCloseAccordionSingleActiveTests = async (canvas: Screen) => {
  // select first (0) AccordionItem
  await delay(CHANGES_DELAY);
  await openAndCheckAccordionItem(canvas, "Notifications");
  // select back second (1) AccordionItem
  await delay(CHANGES_DELAY);
  await openAndCheckAccordionItem(canvas, "Setting");
};

const closeAlreadyActiveMultiActiveTests = async (canvas: Screen) => {
  await delay(CHANGES_DELAY);
  // close already opened Accordion Item (one from two)
  await closeAndCheckMultiAccordionItem(canvas, 1);
  // close last opened Accordion Item
  await delay(CHANGES_DELAY);
  await closeAndCheckMultiAccordionItem(canvas, 0);
};

const openAccordionItemsMultiActiveTests = async (canvas: Screen) => {
  // open Accordion Item - Settings
  await delay(CHANGES_DELAY);
  await openAndCheckMultiAccordionItem(canvas, "Setting", 1);
  // open one more Accordion Item - Integration
  await delay(CHANGES_DELAY);
  await openAndCheckMultiAccordionItem(canvas, "Integration", 2);
};

export const accordionSingleActivePlaySuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [openCloseAccordionSingleActiveTests, closeAlreadyOpenSingleActiveTests],
  afterEach: async () => {
    await resetFocus();
  }
});

export const accordionMultiActivePlaySuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [closeAlreadyActiveMultiActiveTests, openAccordionItemsMultiActiveTests],
  afterEach: async () => {
    await resetFocus();
  }
});
