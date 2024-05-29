import { testHoverTooltipTrigger } from "../../Tooltip/__tests__/Tooltip.interactions";
import { Screen } from "@testing-library/react";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./headingTestsConstants";

import { interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = async () => await canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);
  await testHoverTooltipTrigger(canvas, getText);
}

export const headingOverflowSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
