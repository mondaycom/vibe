import { useMemo, useCallback, useRef } from "react";
import useEventListener from "./useEventListener";

const DEFAULT_REF = { current: null };
export default function useKeyEvent({
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
      if (preventDefault) {
        event.preventDefault();
      }

      if (stopPropagation) {
        event.stopPropagation();
      }
      const { key } = event;
      if (!keys.includes(key)) {
        return;
      }
      callback(event);
    },
    [callback, keys, preventDefault, stopPropagation]
  );

  const referenceElement = useMemo(() => {
    if (!ref || !ref.current) {
      if (ignoreDocumentFallback) {
        return null;
      }

      return documentRef;
    }
    return ref;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ref.current, documentRef, ignoreDocumentFallback]);

  useEventListener({
    eventName: keyEventName,
    callback: onKeyUpPress,
    ref: referenceElement,
    capture
  });
}
