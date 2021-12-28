import { useCallback, useRef } from "react";
import useEventListener from "../useEventListener";

export default function useOnClickOutside({ ref, callback }) {
  const onClickOutsideListener = useCallback(
    event => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return;
      }

      callback(event);
    },

    [ref, callback]
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
