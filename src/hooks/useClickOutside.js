import { useCallback, useRef } from "react";
import useEventListener from "./useEventListener";

export default function useOnClickOutside({ ref, callback }) {
  const refElement = ref && ref.current;

  const onClickOutsideListener = useCallback(
    event => {
      if (!refElement || refElement.contains(event.target)) {
        return;
      }
      callback(event);
    },

    [refElement, callback]
  );

  const documentRef = useRef(document);

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
