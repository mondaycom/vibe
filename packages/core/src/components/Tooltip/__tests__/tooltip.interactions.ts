import { expect } from "@storybook/jest";
import { Screen } from "@testing-library/react";
import { userEvent, waitFor } from "@storybook/testing-library";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";

export async function testHoverTooltipTrigger(
  canvas: Screen,
  getHoverableElement: () => Promise<HTMLElement>,
  tooltipData: { id?: string; content?: string; showDelay?: number } = {}
) {
  /**
   // If we try to access the text element before it finishes its initial render, we will receive the instance without the tooltip events.
   // As a result, userEvent.hover will not work the first time. However, when we try to access the hoverable element for the second time, it will contain all the events
   // and work as expected.
  **/
  await waitFor(
    async () => {
      const hoverableElement = await getHoverableElement();
      userEvent.hover(hoverableElement);
      const { id, content, showDelay = 100 } = tooltipData;

      // Waiting for tooltip appearance delay (100ms by default)
      await new Promise(resolve => {
        setTimeout(resolve, showDelay);
      });
      const tooltipElement =
        content !== undefined
          ? canvas.getByText(content)
          : canvas.getByTestId(getTestId(ComponentDefaultTestId.TOOLTIP, id));
      expect(tooltipElement).toBeInTheDocument();
      userEvent.unhover(hoverableElement);
    },
    { timeout: 1000 }
  );
}
