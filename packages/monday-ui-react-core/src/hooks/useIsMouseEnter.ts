import { useCallback, useState, RefObject } from "react";
import useEventListener from "./useEventListener";

// TODO can be replaced with useIsMouseOver
export default function useIsMouseEnter({ ref }: { ref: RefObject<HTMLElement> }) {
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
