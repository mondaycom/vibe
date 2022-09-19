import { useCallback, useState, RefObject } from "react";
import useEventListener from "./useEventListener";

export default function useMergeRefs({ ref }: { ref: RefObject<HTMLElement> }) {
  const [isHovered, setIsHover] = useState<boolean>(false);

  const setHovered = useCallback(
    (event: MouseEvent) => {
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
