import useEventListener from "../useEventListener";
import { useCallback, useRef } from "react";

const KEYBOARD_INTERACTION = "keyboard";
const MOUSE_INTERACTION = "mouse";
export function useListenFocusTriggers({ ref, onFocusByKeyboard, onFocusByMouse }) {
  const isElementMouseDown = useRef(false);
  const onMouseDown = useCallback(() => {
    isElementMouseDown.current = true;
  }, [isElementMouseDown]);
  const onFocus = useCallback(
    e => {
      // if focus triggered by mouse down, call onFocusByMouse
      if (isElementMouseDown.current) {
        onFocusByMouse(e);
      } else {
        onFocusByKeyboard(e);
      }
    },
    [onFocusByKeyboard, onFocusByMouse]
  );
  const onMouseUp = useCallback(() => {
    isElementMouseDown.current = false;
  }, [isElementMouseDown]);

  useEventListener({
    ref,
    callback: onMouseDown
  });

  useEventListener({
    eventName: "focus",
    ref,
    callback: onFocus
  });

  useEventListener({
    eventName: "mouseup",
    ref,
    callback: onMouseUp
  });
}
