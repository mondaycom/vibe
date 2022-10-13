/* eslint-disable no-param-reassign */
import { RefObject, useCallback, useState } from "react";
import useResizeObserver from "./useResizeObserver";

function checkOverflow(element: HTMLElement) {
  if (!element) {
    return false;
  }
  const curOverflow = element.style.overflow;
  if (!curOverflow || curOverflow === "visible") element.style.overflow = "hidden";
  const isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
  element.style.overflow = curOverflow;
  return isOverflowing;
}

export default function useIsOverflowing({ ref }: { ref: RefObject<HTMLElement> }) {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(checkOverflow(ref?.current));
  const callback = useCallback(() => {
    setIsOverflowing(checkOverflow(ref?.current));
  }, [ref, setIsOverflowing]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
