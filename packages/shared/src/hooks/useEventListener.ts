import { type RefObject, useEffect } from "react";
import { type GenericEventCallback } from "../types/events";

export function useEventListener({
  eventName,
  callback,
  ref,
  capture = false
}: {
  eventName: keyof HTMLElementEventMap | string;
  callback: GenericEventCallback;
  ref: RefObject<HTMLElement | Document>;
  capture?: boolean;
}): void {
  useEffect(() => {
    const refElement = ref && ref.current;
    if (!refElement) return;
    const listenerOptions = { capture };

    refElement.addEventListener(eventName, callback, listenerOptions);

    return () => {
      refElement.removeEventListener(eventName, callback, listenerOptions);
    };
  }, [eventName, ref, callback, capture]);
}
