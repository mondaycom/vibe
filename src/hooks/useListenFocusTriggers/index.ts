import useEventListener from "../useEventListener";
import { RefObject, useCallback, useRef } from "react";

export function useListenFocusTriggers({
  ref,
  onFocusByKeyboard,
  onFocusByMouse
}: {
  ref: RefObject<HTMLElement>;
  onFocusByKeyboard?: (event: FocusEvent) => void;
  onFocusByMouse?: (event: FocusEvent) => void;
}) {
  const isElementMouseDown = useRef(false);

  const onMouseDown = useCallback(() => {
    isElementMouseDown.current = true;
  }, [isElementMouseDown]);

  const onFocus = useCallback(
    (e: FocusEvent) => {
      // if focus triggered by mouse down, call onFocusByMouse
      if (isElementMouseDown.current) {
        onFocusByMouse?.(e);
      } else {
        onFocusByKeyboard && onFocusByKeyboard(e);
      }
    },
    [onFocusByKeyboard, onFocusByMouse]
  );
  const onMouseUp = useCallback(() => {
    isElementMouseDown.current = false;
  }, [isElementMouseDown]);

  useEventListener({
    eventName: "mousedown",
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
