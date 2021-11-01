/* eslint-disable no-param-reassign */
import { useCallback, useState } from "react";
import useResizeObserver from "./useResizeObserver";

function checkOverflow(element) {
  if (!element) {
    return false;
  }
  const curOverflow = element.style.overflow;
  if (!curOverflow || curOverflow === "visible") element.style.overflow = "hidden";
  const isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
  element.style.overflow = curOverflow;
  return isOverflowing;
}

export default function useIsOverflowing({ ref }) {
  const [isOverflowing, setIsOverflowing] = useState(checkOverflow(ref.current));
  const callback = useCallback(() => {
    setIsOverflowing(checkOverflow(ref.current));
  }, [ref, setIsOverflowing]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
