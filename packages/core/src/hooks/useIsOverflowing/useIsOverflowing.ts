import { RefObject, useCallback, useState } from "react";
import useResizeObserver from "../useResizeObserver";

function checkOverflow(element: HTMLElement, ignoreHeightOverflow: boolean, heightTolerance = 0, widthTolerance = 0) {
  if (!element) {
    return false;
  }
  const isOverflowingWidth = element.clientWidth + widthTolerance < element.scrollWidth;
  const isOverflowingHeight = !ignoreHeightOverflow && element.clientHeight + heightTolerance < element.scrollHeight;
  return isOverflowingWidth || isOverflowingHeight;
}

export default function useIsOverflowing({
  ref,
  ignoreHeightOverflow = false,
  tolerance: heightTolerance,
  widthTolerance
}: {
  /**
   * The ref of the element to check for overflow.
   */
  ref: RefObject<HTMLElement>;
  /**
   * Whether to ignore height overflow.
   */
  ignoreHeightOverflow?: boolean;
  /**
   * The tolerance value to consider the element as overflowing (height overflow).
   */
  tolerance?: number;
  /**
   * The tolerance value to consider the element as overflowing (width overflow).
   */
  widthTolerance?: number;
}) {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(() =>
    checkOverflow(ref?.current, ignoreHeightOverflow, heightTolerance, widthTolerance)
  );
  const callback = useCallback(() => {
    const element = ref?.current;
    if (!element) return;

    const newOverflowState = checkOverflow(element, ignoreHeightOverflow, heightTolerance, widthTolerance);
    setIsOverflowing(prevState => (prevState !== newOverflowState ? newOverflowState : prevState));
  }, [ignoreHeightOverflow, ref, heightTolerance, widthTolerance]);

  useResizeObserver({
    ref,
    callback,
    debounceTime: 0
  });

  return isOverflowing;
}
