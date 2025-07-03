import { userEvent } from "@storybook/test";

export async function resetFocus() {
  const focusTrap = document.querySelector("[data-testid=focusTrap]");
  await userEvent.click(focusTrap);
}
