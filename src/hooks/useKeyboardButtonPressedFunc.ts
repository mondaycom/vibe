import { useCallback } from "react";

const KEYDOWN_SPACE_EVENT = 32;
const KEYDOWN_ENTER_EVENT = 13;

export function useKeyboardButtonPressedFunc(onClick: (event: KeyboardEvent) => void) {
  return useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === KEYDOWN_SPACE_EVENT || e.keyCode === KEYDOWN_ENTER_EVENT) {
        onClick(e);
      }
    },
    [onClick]
  );
}
