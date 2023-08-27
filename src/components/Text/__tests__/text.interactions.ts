import { testHoverTooltipTrigger } from "../../Tooltip/__tests__/tooltip.interactions";
import { Screen } from "@testing-library/react";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./text-tests-constants";

import { interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = () => canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);

  await testHoverTooltipTrigger(canvas, getText);
}

export const textOverflowSuite = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
