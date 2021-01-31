import { useMemo, useCallback, useRef } from "react";
import useEventListener from "./useEventListener";

const DEFAULT_REF = { current: null };
export default function useKeyEvent({
  name = null,
  keys = [],
  ref = DEFAULT_REF,
  callback,
  ignoreDocumentFallback = false,
  capture = false,
  preventDefault = false,
  stopPropagation = false,
  keyEventName = "keyup"
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
    [name, callback, keys, preventDefault, stopPropagation]
  );

  const refElement = ref && ref.current;
  let listenerRef;
  if (refElement) {
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
