import { RefObject, useCallback, useMemo, useState } from "react";
import { isSafari as isSafariCheck } from "src/utils/user-agent-utils";
import useResizeObserver from "../useResizeObserver";

const SAFARI_DEFAULT_TOLERANCE = 2; // this fixes an issue with Safari in certain zoom levels, where the scrollHeight & scrollWidth are off by a pixel from the clientHeight & clientWidth.

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
  tolerance: _heightTolerance,
  widthTolerance: _widthTolerance
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
  const isSafari = useMemo<boolean>(() => isSafariCheck(), []);
  const { heightTolerance, widthTolerance } = useMemo<{ heightTolerance?: number; widthTolerance?: number }>(() => {
    if (isSafari) {
      return {
        heightTolerance: _heightTolerance ?? SAFARI_DEFAULT_TOLERANCE,
        widthTolerance: _heightTolerance ?? SAFARI_DEFAULT_TOLERANCE
      };
    }

    return {
      heightTolerance: _heightTolerance,
      widthTolerance: _widthTolerance
    };
  }, [isSafari, _widthTolerance, _heightTolerance]);

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
