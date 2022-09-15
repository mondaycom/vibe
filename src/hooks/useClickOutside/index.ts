import { useCallback, useRef, RefObject } from "react";
import useEventListener from "../useEventListener";
import { GenericEventCallback } from "../../types/events";

export default function useOnClickOutside({
  ref,
  callback
}: {
  ref: RefObject<HTMLElement>;
  callback: GenericEventCallback;
}) {
  const onClickOutsideListener = useCallback(
    (event: MouseEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    },

    [ref, callback]
  );

  const documentRef = useRef(document.body);

  useEventListener({
    eventName: "click",
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
