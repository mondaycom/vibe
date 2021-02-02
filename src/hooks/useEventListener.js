import { useEffect } from "react";

export default function useEventListener({ eventName, callback, ref, capture = false }) {
  const refElement = ref && ref.current;
  useEffect(() => {
    if (!refElement) {
      return;
    }
    refElement.addEventListener(eventName, callback, { capture });
    return () => {
      refElement.removeEventListener(eventName, callback, { capture });
    };
  }, [eventName, refElement, callback, capture]);
}
