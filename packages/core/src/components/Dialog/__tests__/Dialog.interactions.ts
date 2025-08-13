import { expect } from "@storybook/jest";
import { type Screen } from "@testing-library/react";
import {
  CONTEXT_MENU_DIALOG,
  CLICK_OUTSIDE_DIALOG,
  HIDE_TRIGGERS_CONTAINER,
  CLICK_OUTSIDE_DIALOG_BUTTON
} from "./DialogDataTestIds";
import { type Canvas, getByTestId, interactionSuite } from "../../../tests/interactions-utils";
import { userEvent, fireEvent, waitFor } from "@storybook/test";

const isDialogHiddenAfterClickOutside = createTestIfDialogHiddenAfterTrigger(CLICK_OUTSIDE_DIALOG, () =>
  userEvent.click(getDialogContainer())
);
const isDialogHiddenAfterContextMenu = createTestIfDialogHiddenAfterTrigger(CONTEXT_MENU_DIALOG, () =>
  fireEvent.contextMenu(getDialogContainer())
);

export const closeTriggersInteractionSuite: ReturnType<typeof interactionSuite> = interactionSuite({
  tests: [isDialogHiddenAfterClickOutside, isDialogHiddenAfterContextMenu],
  beforeAll: async canvas => {
    // Workaround: Dialog rendering issue with containerSelector on initial mount
    const clickOutsideButton = await getByTestId(canvas, CLICK_OUTSIDE_DIALOG_BUTTON);

    try {
      await getDialogElement(canvas, CLICK_OUTSIDE_DIALOG);
    } catch {
      await userEvent.click(clickOutsideButton);
      await waitFor(
        async () => {
          const dialog = await getDialogElement(canvas, CLICK_OUTSIDE_DIALOG);
          expect(dialog).toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    }

    await waitFor(
      async () => {
        const dialog = await getDialogElement(canvas, CLICK_OUTSIDE_DIALOG);
        expect(dialog).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  },
  afterEach: async () => {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement.blur && activeElement !== document.body) {
      activeElement.blur();
    }
  }
});

function getDialogContainer() {
  return document.querySelector(`[data-testid=${HIDE_TRIGGERS_CONTAINER}]`);
}

async function getDialogElement(canvas: Canvas, dataTestId: string) {
  return await getByTestId(canvas, dataTestId);
}

async function checkIfDialogHidden(dialogElement: HTMLElement) {
  await waitFor(() => expect(dialogElement).not.toBeInTheDocument(), { timeout: 2000 });
}

function createTestIfDialogHiddenAfterTrigger(
  dataTestId: string,
  triggerCallback: (canvas: Screen, element: HTMLElement) => void
) {
  return async function (canvas: Screen) {
    const dialog = await getDialogElement(canvas, dataTestId);

    await waitFor(() => expect(dialog).toBeInTheDocument(), { timeout: 100 });
    await new Promise(resolve => setTimeout(resolve, 50));

    triggerCallback(canvas, dialog);
    await checkIfDialogHidden(dialog);
  };
}
