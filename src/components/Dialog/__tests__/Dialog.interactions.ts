import { resetFocus } from "../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";
import {BoundFunctions, Screen} from "@testing-library/react";
import {CONTEXT_MENU_DIALOG, CLICK_OUTSIDE_DIALOG, HIDE_TRIGGERS_CONTAINER} from "./DialogDataTestIds";
import { getByTestId, interactionSuite, pressNavigationKey } from "../../../tests/interactions-utils";
import { ComponentDefaultTestId, NavigationCommand } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import styles from "../__stories__/useActiveDescendantListFocus.module.scss";
import {queries, userEvent, fireEvent, waitFor} from "@storybook/testing-library";

export const closeTriggersInteractionSuite = interactionSuite({
  tests: [
      checkIfDialogHiddenAfterTrigger(CLICK_OUTSIDE_DIALOG,  (canvas) => fireEvent.click(getDialogContainer())),
      checkIfDialogHiddenAfterTrigger(CONTEXT_MENU_DIALOG,  (canvas) => fireEvent.contextMenu(getDialogContainer()))],
  beforeAll: async (canvas) => {
    // From some reason we have an issue with rendering the dialogs according to the container selector in the initial mount, after clicking
    // all dialog render in the right placements
    const container = getDialogContainer();
    await userEvent.click(container)
  },
  afterEach: async () => {
    await resetFocus();
  }
});

function getDialogContainer() {
  return document.querySelector(`[data-testid=${HIDE_TRIGGERS_CONTAINER}]`);
}

async function getDialogElement(canvas: BoundFunctions<typeof queries>, dataTestId: string) {
  return await getByTestId(canvas, dataTestId);
}

async function checkIfDialogHidden(dialogElement: HTMLElement) {
  await waitFor(() => expect(dialogElement).not.toBeInTheDocument(), {timeout: 1000});
}

function checkIfDialogHiddenAfterTrigger(dataTestId: string, triggerCallback: (canvas:Screen, element: HTMLElement) => void) {
  return async function (canvas: Screen) {
    let dialog: HTMLElement;
    dialog = await getDialogElement(canvas, dataTestId);
    triggerCallback(canvas, dialog);
    await checkIfDialogHidden(dialog)
  }
}
