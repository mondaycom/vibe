import { useCallback, useRef } from "react";
import useEventListener from "./useEventListener";

export default function useOnClickOutside({ ref, callback }) {
  const onClickOutsideListener = useCallback(
    event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return () => {};
      }
      callback(event);
    },

    [ref, callback]
  );

  const documentRef = useRef(document);

  useEventListener({
    eventName: "mousedown",
    ref: documentRef,
    callback: onClickOutsideListener
  });
  useEventListener({
    eventName: "touchstart",
    ref: documentRef,
    callback: onClickOutsideListener
  });
}
