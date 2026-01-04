import { expect } from "@storybook/jest";
import { fireEvent, within } from "@storybook/test";
import { delay, interactionSuite, resetFocus } from "@vibe/core/interactionsTests";

const CHANGES_DELAY = 50;
const DRAG_STEPS = 20;
const DRAG_STEP_DELAY = 5;

function clickAtX(element: HTMLElement, clientX: number): void {
  const rect = element.getBoundingClientRect();
  const clientY = rect.top + rect.height / 2;
  fireEvent.click(element, { clientX, clientY });
}

async function dragToX(element: HTMLElement, targetX: number): Promise<void> {
  const rect = element.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  const stepX = (targetX - startX) / DRAG_STEPS;
  let currentX = startX;

  // Start the drag
  fireEvent.pointerDown(element, { clientX: currentX, clientY: startY });

  // Move through steps
  for (let i = 0; i < DRAG_STEPS; i++) {
    currentX += stepX;
    await delay(DRAG_STEP_DELAY);
    fireEvent.pointerMove(document, { clientX: currentX, clientY: startY });
  }

  // End the drag
  fireEvent.pointerUp(document, { clientX: currentX, clientY: startY });
}

async function testNonRangedSliderClickOnRail(canvas: ReturnType<typeof within>): Promise<void> {
  const elRail = canvas.getByTestId("monday-slider-show-value-s__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumb = within(elRail).getByRole("slider");

  // Click at start (0%)
  clickAtX(elRail, rect.left);
  await delay(CHANGES_DELAY);
  expect(elThumb.getAttribute("aria-valuenow")).toBe("0");

  // Click at end (100%)
  clickAtX(elRail, rect.right);
  await delay(CHANGES_DELAY);
  expect(elThumb.getAttribute("aria-valuenow")).toBe("100");

  // Click at middle (50%)
  clickAtX(elRail, rect.left + rect.width * 0.5);
  await delay(CHANGES_DELAY);
  expect(elThumb.getAttribute("aria-valuenow")).toBe("50");
}

async function testNonRangedSliderDragThumb(canvas: ReturnType<typeof within>): Promise<void> {
  const elRail = canvas.getByTestId("monday-slider-show-value-m__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumb = within(elRail).getByRole("slider");

  // Drag to 25%
  await dragToX(elThumb, rect.left + rect.width * 0.25);
  await delay(CHANGES_DELAY);
  expect(elThumb.getAttribute("aria-valuenow")).toBe("25");

  // Drag to 75%
  await dragToX(elThumb, rect.left + rect.width * 0.75);
  await delay(CHANGES_DELAY);
  expect(elThumb.getAttribute("aria-valuenow")).toBe("75");
}

async function testRangedSliderClickOnRail(canvas: ReturnType<typeof within>): Promise<void> {
  const elRail = canvas.getByTestId("monday-ranged-slider-m__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumbStart = within(elRail).getByTestId("monday-ranged-slider-m__thumb-0");
  const elThumbEnd = within(elRail).getByTestId("monday-ranged-slider-m__thumb-1");

  // Click at start - moves start thumb to 0
  clickAtX(elRail, rect.left);
  await delay(CHANGES_DELAY);
  expect(elThumbStart.getAttribute("aria-valuenow")).toBe("0");

  // Click at end - moves end thumb to 100
  clickAtX(elRail, rect.right);
  await delay(CHANGES_DELAY);
  expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("100");

  // Click at 25% - moves start thumb (nearest)
  clickAtX(elRail, rect.left + rect.width * 0.25);
  await delay(CHANGES_DELAY);
  expect(elThumbStart.getAttribute("aria-valuenow")).toBe("25");

  // Click at 75% - moves end thumb (nearest)
  clickAtX(elRail, rect.left + rect.width * 0.75);
  await delay(CHANGES_DELAY);
  expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("75");
}

async function testRangedSliderDragThumbs(canvas: ReturnType<typeof within>): Promise<void> {
  const elRail = canvas.getByTestId("monday-ranged-slider-s__rail");
  const rect = elRail.getBoundingClientRect();
  const elThumbStart = within(elRail).getByTestId("monday-ranged-slider-s__thumb-0");
  const elThumbEnd = within(elRail).getByTestId("monday-ranged-slider-s__thumb-1");

  // Drag start thumb to 25%
  await dragToX(elThumbStart, rect.left + rect.width * 0.25);
  await delay(CHANGES_DELAY);
  expect(elThumbStart.getAttribute("aria-valuenow")).toBe("25");

  // Drag end thumb to 65%
  await dragToX(elThumbEnd, rect.left + rect.width * 0.65);
  await delay(CHANGES_DELAY);
  expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("65");

  // Drag start thumb past end thumb to 95% - thumbs should switch
  await dragToX(elThumbStart, rect.left + rect.width * 0.95);
  await delay(CHANGES_DELAY);
  // After crossing, the end thumb should now be at 95%
  expect(elThumbEnd.getAttribute("aria-valuenow")).toBe("95");

  // Drag start thumb to 5%
  await dragToX(elThumbStart, rect.left + rect.width * 0.05);
  await delay(CHANGES_DELAY);
  expect(elThumbStart.getAttribute("aria-valuenow")).toBe("5");
}

export const nonRangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [testNonRangedSliderClickOnRail, testNonRangedSliderDragThumb],
  afterEach: async () => {
    await resetFocus();
  }
});

export const rangedSliderMouseEventsPlaySuite = interactionSuite({
  tests: [testRangedSliderClickOnRail, testRangedSliderDragThumbs],
  afterEach: async () => {
    await resetFocus();
  }
});
