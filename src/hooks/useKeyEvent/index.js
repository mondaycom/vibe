import { useCallback, useRef } from "react";
import useEventListener from "../useEventListener";

export default function useKeyEvent({
  keys = [],
  ref,
  callback,
  ignoreDocumentFallback = false,
  capture = false,
  preventDefault = false,
  stopPropagation = false,
  keyEventName = "keydown" // need keydown and not keyup to prevent scrolling with prevent default, for example during menu keyboard navigation
}) {
  const documentRef = useRef(document);
  const onKeyUpPress = useCallback(
    event => {
      const { key } = event;
      if (!keys.includes(key)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      if (stopPropagation) {
        event.stopPropagation();
      }

      callback(event);
    },
    [callback, keys, preventDefault, stopPropagation]
  );

  let listenerRef;

  if (ref) {
    listenerRef = ref;
  } else if (ignoreDocumentFallback) {
    listenerRef = null;
  } else {
    listenerRef = documentRef;
  }

  useEventListener({
    eventName: keyEventName,
    callback: onKeyUpPress,
    ref: listenerRef,
    capture
  });
}
