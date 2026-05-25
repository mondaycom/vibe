import { type Screen } from "@testing-library/react";
import { interactionSuite } from "@vibe/core/interactionsTests";
import { testHoverTooltipTrigger } from "../Tooltip/Tooltip.interactions";

// Test constants
export const ONE_LINE_ELLIPSIS_TEST_ID = "ellipsis-text-example";
export const OVERFLOW_TEXT_CONTAINER_ID = "overflow-text-examples-container";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = () => canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);

  await testHoverTooltipTrigger(canvas, getText);
}

export const textOverflowSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
