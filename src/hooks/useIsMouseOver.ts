import { RefObject, useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import { GeneralEventType } from "../types/events";

export default function useIsMouseOver({ ref }: { ref: RefObject<HTMLElement> }): boolean {
  const [isHovered, setIsHover] = useState<boolean>(false);

  const element = ref && ref.current;
  const setHovered = useCallback(
    (event: GeneralEventType) => {
      const isEventHover = event.target === element;
      setIsHover(isEventHover);
    },
    [setIsHover, element]
  );
  const setNotHovered = useCallback((_event: GeneralEventType) => setIsHover(false), [setIsHover]);

  useEventListener({ eventName: "mouseover", callback: setHovered, ref });
  useEventListener({ eventName: "mouseout", callback: setNotHovered, ref });

  return isHovered;
}
