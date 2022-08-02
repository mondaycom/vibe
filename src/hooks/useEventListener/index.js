import { useEffect } from "react";

export default function useEventListener({ eventName, callback, ref, capture = false }) {
  useEffect(() => {
    console.log("multi theory mount", callback);
    if (eventName === "focus") console.log(eventName, ref, callback);
    debugger;
    const refElement = ref && ref.current;
    if (!refElement) return;
    const listenerOptions = { capture };
    refElement.addEventListener(eventName, callback, listenerOptions);
    return () => {
      console.log("multi theory unmount", callback);
      refElement.removeEventListener(eventName, callback, listenerOptions);
    };
  }, [eventName, ref, ref?.current, callback, capture]);
}
