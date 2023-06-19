import { isTestTooltipShowOnHover } from "../../Tooltip/__tests__/tooltip.interactions";
import { Screen } from "@testing-library/react";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./title-tests-constants";

import { interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = async () => await canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);
  await isTestTooltipShowOnHover(canvas, getText);
}

export const titleOverflowSuite = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
