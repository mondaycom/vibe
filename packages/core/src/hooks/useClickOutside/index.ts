import { useCallback, useRef, RefObject } from "react";
import useEventListener from "../useEventListener";
import { GenericEventCallback } from "../../types/events";

export default function useClickOutside({
  ref,
  callback,
  ignoreClasses,
  eventName = "click"
}: {
  ref: RefObject<HTMLElement>;
  callback: GenericEventCallback;
  ignoreClasses?: string[];
  eventName?: keyof HTMLElementEventMap | string;
}) {
  const onClickOutsideListener = useCallback(
    (event: MouseEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      if (ignoreClasses && event.target instanceof HTMLElement) {
        if (event.target.closest(ignoreClasses.join(','))) {
          return;
        }
      }

      callback(event);
    },

    [ref, callback]
  );

  const documentRef = useRef(document.body);

  useEventListener({
    eventName,
    ref: documentRef,
    callback: onClickOutsideListener,
    capture: true
  });

  useEventListener({
    eventName: "touchend",
    ref: documentRef,
    callback: onClickOutsideListener,
    capture: true
  });
}
