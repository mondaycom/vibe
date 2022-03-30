import { expect } from "@storybook/jest";
import {
  getByText,
  pressNavigationKey,
  interactionSuite,
  getByTestId,
  ELEMENT_TYPES,
  getByClassName
} from "../../../__tests__/interactions-helper";
import { NAVIGATIONS_COMMANDS } from "utils/test-utils";
import { userEvent, fireEvent } from "@storybook/testing-library";

async function overview_displayVisibleItemWhenScroll(canvas) {
  // we can't add data test id to the scrollable container because the 3-party library does not support this
  const virtualizedListElement = await getByClassName("virtualized-list-scrollable-container");

  console.log(virtualizedListElement);
  // Press on list for allowing scroller usage
  // userEvent.click(virtualizedListElement);
  // fireEvent.scroll(window, { target: { scrollY: 4000 } });
}

export const overviewPlaySuite = interactionSuite({
  tests: [overview_displayVisibleItemWhenScroll],
  afterEach: async () => {
    await pressNavigationKey(NAVIGATIONS_COMMANDS.PAGE_UP);
  }
});
