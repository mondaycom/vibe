import { userEvent } from "@storybook/testing-library";
import { ELEMENT_TYPES as types } from "../utils/test-utils";
export const ELEMENT_TYPES = types;

export async function resetFocus() {
  const focusTrap = document.querySelector("[data-testid=focusTrap]");
  await userEvent.click(focusTrap);
}
