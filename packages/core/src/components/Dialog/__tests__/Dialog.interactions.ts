import { resetFocus } from "../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";
import { Screen } from "@testing-library/react";
import {
  CONTEXT_MENU_DIALOG,
  CLICK_OUTSIDE_DIALOG,
  HIDE_TRIGGERS_CONTAINER,
  CLICK_OUTSIDE_DIALOG_BUTTON
} from "./DialogDataTestIds";
import { Canvas, getByTestId, interactionSuite } from "../../../tests/interactions-utils";
import { userEvent, fireEvent, waitFor } from "@storybook/testing-library";

const isDialogHiddenAfterClickOutside = createTestIfDialogHiddenAfterTrigger(CLICK_OUTSIDE_DIALOG, () =>
  userEvent.click(getDialogContainer())
);
const isDialogHiddenAfterContextMenu = createTestIfDialogHiddenAfterTrigger(CONTEXT_MENU_DIALOG, () =>
  fireEvent.contextMenu(getDialogContainer())
);

export const closeTriggersInteractionSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isDialogHiddenAfterClickOutside, isDialogHiddenAfterContextMenu],
  beforeAll: async canvas => {
    // From some reason we have an issue with rendering the dialogs according to the container selector in the initial mount, after clicking
    // all dialog render in the right placements
    const clickOutsideButton = await getByTestId(canvas, CLICK_OUTSIDE_DIALOG_BUTTON);
    await userEvent.click(clickOutsideButton);
    await userEvent.click(clickOutsideButton);
    // wait for show default delay
    await waitFor(
      async () => {
        const dialog = await getDialogElement(canvas, CLICK_OUTSIDE_DIALOG);
        expect(dialog).toBeInTheDocument();
      },
      { timeout: 100 }
    );
  },
  afterEach: async () => {
    await resetFocus();
  }
});

function getDialogContainer() {
  return document.querySelector(`[data-testid=${HIDE_TRIGGERS_CONTAINER}]`);
}

async function getDialogElement(canvas: Canvas, dataTestId: string) {
  return await getByTestId(canvas, dataTestId);
}

async function checkIfDialogHidden(dialogElement: HTMLElement) {
  await waitFor(() => expect(dialogElement).not.toBeInTheDocument(), { timeout: 1000 });
}

function createTestIfDialogHiddenAfterTrigger(
  dataTestId: string,
  triggerCallback: (canvas: Screen, element: HTMLElement) => void
) {
  return async function (canvas: Screen) {
    const dialog = await getDialogElement(canvas, dataTestId);
    triggerCallback(canvas, dialog);
    await checkIfDialogHidden(dialog);
  };
}
