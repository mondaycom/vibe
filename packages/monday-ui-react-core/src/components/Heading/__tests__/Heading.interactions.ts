import { Screen } from "@testing-library/react";
import { testHoverTooltipTrigger } from "../../Tooltip/__tests__/tooltip.interactions";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "./heading-tests-constants";
import { InteractionSuite, interactionSuite } from "../../../tests/interactions-utils";

async function isTooltipAppearOnHover(canvas: Screen) {
  const getText = async () => await canvas.findByTestId(ONE_LINE_ELLIPSIS_TEST_ID);
  await testHoverTooltipTrigger(canvas, getText);
}

export const headingOverflowSuite: InteractionSuite = interactionSuite({
  tests: [isTooltipAppearOnHover]
});
