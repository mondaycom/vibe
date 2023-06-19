import { expect } from "@storybook/jest";
import { Screen } from "@testing-library/react";
import { userEvent, waitFor } from "@storybook/testing-library";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { ONE_LINE_ELLIPSIS_TEST_ID } from "../../Text/__tests__/text-tests-constants";

export async function isTestTooltipShowOnHover(
  canvas: Screen,
  getHoverableElement: () => Promise<HTMLElement>,
  tooltipData: { id?: string; content?: string } = {}
) {
  // If we trying to get the element before it finishing it's first render we receive the instance without the tooltip wrapper and
  // the userEvent.hover will not work (I did not find a way to implement this using react testing library or storybook interaction tests
  await new Promise(resolve => {
    setTimeout(resolve, 1000); // Wait for 1 second
  });

  const hoverableElement = await getHoverableElement();
  const { id, content } = tooltipData;

  userEvent.hover(hoverableElement);

  // Waiting for tooltip appearance delay
  await waitFor(
    () => {
      const tooltipElement =
        content !== undefined
          ? canvas.getByText(content)
          : canvas.getByTestId(getTestId(ComponentDefaultTestId.TOOLTIP, id));
      expect(tooltipElement).toBeInTheDocument();
    },
    { timeout: 1000 }
  );

  userEvent.unhover(hoverableElement);
}
