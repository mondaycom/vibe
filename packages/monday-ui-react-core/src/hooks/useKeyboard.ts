import { createEventHandler } from "./createEventHandler";
import { KeyboardEventCallback } from "../types/events";

export function useKeyboard({
  isDisabled,
  onKeyDown,
  onKeyUp
}: {
  isDisabled: boolean;
  onKeyDown: KeyboardEventCallback;
  onKeyUp: KeyboardEventCallback;
}) {
  return {
    keyboardProps: isDisabled
      ? {}
      : {
          onKeyDown: createEventHandler(onKeyDown),
          onKeyUp: createEventHandler(onKeyUp)
        }
  };
}
