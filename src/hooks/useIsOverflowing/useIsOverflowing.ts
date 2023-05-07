/* eslint-disable no-param-reassign */
import { RefObject, useCallback, useState } from "react";
import useResizeObserver from "../useResizeObserver";

function checkOverflow(element: HTMLElement, ignoreHeightOverflow: boolean) {
  if (!element) {
    return false;
  }
  const curOverflow = element.style.overflow;
  if (!curOverflow || curOverflow === "visible") element.style.overflow = "hidden";
  const isOverflowing =
    element.clientWidth < element.scrollWidth || (!ignoreHeightOverflow && element.clientHeight < element.scrollHeight);
  element.style.overflow = curOverflow;
  return isOverflowing;
}

export default function useIsOverflowing({
  ref,
  ignoreHeightOverflow = false
}: {
  ref: RefObject<HTMLElement>;
  ignoreHeightOverflow?: boolean;
}) {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(checkOverflow(ref?.current, ignoreHeightOverflow));
  const callback = useCallback(() => {
    setIsOverflowing(checkOverflow(ref?.current, ignoreHeightOverflow));
  }, [ignoreHeightOverflow, ref]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
