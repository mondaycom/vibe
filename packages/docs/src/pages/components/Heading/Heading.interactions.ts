import { type Screen } from "@testing-library/react";
import { interactionSuite } from "@vibe/core/interactionsTests";
import { testHoverTooltipTrigger } from "../Tooltip/Tooltip.interactions";

// Test constants
export const ONE_LINE_ELLIPSIS_TEST_ID = "ellipsis-title-example";
export const OVERFLOW_TITLE_CONTAINER_ID = "overflow-title-examples-container";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = async () => await canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);
  await testHoverTooltipTrigger(canvas, getText);
}

export const headingOverflowSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
