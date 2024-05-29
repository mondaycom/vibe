import { testHoverTooltipTrigger } from "../../Tooltip/__tests__/Tooltip.interactions";
import { Screen } from "@testing-library/react";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./textTestsConstants";

import { interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = () => canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);

  await testHoverTooltipTrigger(canvas, getText);
}

export const textOverflowSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
