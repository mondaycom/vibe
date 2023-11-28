/* eslint-disable no-param-reassign */
import { RefObject, useCallback, useState } from "react";
import useResizeObserver from "../useResizeObserver";

function checkOverflow(element: HTMLElement, ignoreHeightOverflow: boolean, tolerance = 0) {
  if (!element) {
    return false;
  }
  const curOverflow = element.style.overflow;
  if (!curOverflow || curOverflow === "visible") element.style.overflow = "hidden";
  const isOverflowing =
    element.clientWidth < element.scrollWidth ||
    (!ignoreHeightOverflow && element.clientHeight + tolerance < element.scrollHeight);
  element.style.overflow = curOverflow;
  return isOverflowing;
}

export default function useIsOverflowing({
  ref,
  ignoreHeightOverflow = false,
  tolerance
}: {
  ref: RefObject<HTMLElement>;
  ignoreHeightOverflow?: boolean;
  tolerance?: number;
}) {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(() =>
    checkOverflow(ref?.current, ignoreHeightOverflow, tolerance)
  );
  const callback = useCallback(() => {
    setIsOverflowing(checkOverflow(ref?.current, ignoreHeightOverflow, tolerance));
  }, [ignoreHeightOverflow, ref, tolerance]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
