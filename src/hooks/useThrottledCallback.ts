/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useCallback } from "react";
import _throttle from "lodash/throttle";

export default function useThrottledCallback(
  callback: (...args: Array<unknown>) => void,
  { wait, trailing = true }: { wait: number; trailing: boolean },
  dependencies: Array<unknown>
) {
  const throttledFunction = useMemo(() => {
    return _throttle(callback, wait, { trailing });
  }, [wait, trailing, ...dependencies]);

  const throttledCallback = useCallback(throttledFunction, [throttledFunction]);

  return throttledCallback;
}
