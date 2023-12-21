import { Screen } from "@testing-library/react";
import { testHoverTooltipTrigger } from "../../Tooltip/__tests__/tooltip.interactions";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./text-tests-constants";
import { InteractionSuite, interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = () => canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);

  await testHoverTooltipTrigger(canvas, getText);
}

export const textOverflowSuite: InteractionSuite = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
