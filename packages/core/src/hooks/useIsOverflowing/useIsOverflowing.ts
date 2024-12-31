import { RefObject, useCallback, useState } from "react";
import useResizeObserver from "../useResizeObserver";

function checkOverflow(element: HTMLElement, ignoreHeightOverflow: boolean, tolerance = 0) {
  if (!element) {
    return false;
  }
  const isOverflowingWidth = element.clientWidth < element.scrollWidth;
  const isOverflowingHeight = !ignoreHeightOverflow && element.clientHeight + tolerance < element.scrollHeight;
  return isOverflowingWidth || isOverflowingHeight;
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
    const element = ref?.current;
    if (!element) return;

    const newOverflowState = checkOverflow(element, ignoreHeightOverflow, tolerance);
    setIsOverflowing(prevState => (prevState !== newOverflowState ? newOverflowState : prevState));
  }, [ignoreHeightOverflow, ref, tolerance]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
