import { useEffect } from "react";

export default function useEventListener({ eventName, callback, ref, capture = false }) {
  useEffect(() => {
    const element = ref && ref.current;

    if (!element) {
      return;
    }
    element.addEventListener(eventName, callback, { capture });
    return () => {
      element.removeEventListener(eventName, callback, { capture });
    };
  }, [eventName, ref, callback, capture]);
}
