import { useEffect } from "react";

export default function useEventListener({ eventName, callback, ref, capture = false }) {
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
