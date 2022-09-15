/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useCallback } from "react";
import { throttle } from "lodash-es";

export default function useThrottledCallback(
  callback: (...args: Array<unknown>) => void,
  { wait, trailing = true }: { wait: number; trailing: boolean },
  dependencies: Array<unknown>
) {
  const throttledFunction = useMemo(() => {
    return throttle(callback, wait, { trailing });
  }, [wait, trailing, ...dependencies]);

  const throttledCallback = useCallback(throttledFunction, [throttledFunction]);

  return throttledCallback;
}
