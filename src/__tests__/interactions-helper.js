import { userEvent } from "@storybook/testing-library";

export async function resetFocus() {
  const focusTrap = document.querySelector("[data-testid=focusTrap]");
  await userEvent.click(focusTrap);
}
