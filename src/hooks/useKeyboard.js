import { createEventHandler } from "./createEventHandler";

/**
 * Handles keyboard interactions for a focusable element.
 */
export function useKeyboard(props) {
  return {
    keyboardProps: props.isDisabled
      ? {}
      : {
          onKeyDown: createEventHandler(props.onKeyDown),
          onKeyUp: createEventHandler(props.onKeyUp)
        }
  };
}
