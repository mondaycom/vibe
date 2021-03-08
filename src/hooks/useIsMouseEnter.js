import { useCallback, useState } from "react";

import useEventListener from "./useEventListener";

export default function useMergeRefs({ ref }) {
  const [isHovered, setIsHover] = useState(false);

  const setHovered = useCallback(
    event => {
      const element = ref && ref.current;
      const isEventHover = event.target === element;
      setIsHover(isEventHover);
    },
    [setIsHover, ref]
  );
  const setNotHovered = useCallback(() => setIsHover(false), [setIsHover]);

  useEventListener({ eventName: "mouseenter", callback: setHovered, ref });
  useEventListener({ eventName: "mouseleave", callback: setNotHovered, ref });

  return isHovered;
}
