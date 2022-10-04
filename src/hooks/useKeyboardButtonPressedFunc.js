import { useCallback } from "react";

const KEYDOWN_SPACE_EVENT = 32;
const KEYDOWN_ENTER_EVENT = 13;

export function useKeyboardButtonPressedFunc(onClick) {
  return useCallback(
    e => {
      if ([KEYDOWN_ENTER_EVENT, KEYDOWN_SPACE_EVENT].includes(e.keyCode)) {
        onClick?.(e);
      }
    },
    [onClick]
  );
}
