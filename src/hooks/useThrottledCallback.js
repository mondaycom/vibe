/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useCallback } from "react";
import _throttle from "lodash/throttle";

export default function useThrottledCallback(callback, { wait, trailing = true }, dependencies) {
  const throttledFunction = useMemo(() => {
    return _throttle(callback, wait, { trailing });
  }, [wait, trailing, ...dependencies]);

  const throttledCallback = useCallback(throttledFunction, [throttledFunction]);

  return throttledCallback;
}
