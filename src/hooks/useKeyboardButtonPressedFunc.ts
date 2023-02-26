import React, { useCallback } from "react";
import { keyCodes } from "../constants";

export function useKeyboardButtonPressedFunc(onClick: (event: React.KeyboardEvent) => void) {
  return useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === keyCodes.SPACE || e.key === keyCodes.ENTER) {
        onClick(e);
      }
    },
    [onClick]
  );
}
