import { useEffect } from "react";

export default function useOnClickOutside({ ref, callback }) {
  const refElement = ref && ref.current;
  useEffect(() => {
    if (!refElement) return;
    const listener = event => {
      if (refElement.contains(event.target)) {
        return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refElement, callback]);
}
