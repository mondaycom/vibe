import { useEffect, useRef, useCallback } from "react";
import { noop } from "lodash";

export default function useTimeout({
  time = 0,
  callback,
  ignoreZeroTime = false
}: {
  time: number;
  ignoreZeroTime: boolean;
  callback: () => void;
}) {
  const ignoreTimeout = time === 0 && ignoreZeroTime;
  const timeoutId = useRef(null);
  const cancelTimeout = useCallback(() => {
    if (!timeoutId.current) {
      return;
    }
    clearTimeout(timeoutId.current);
  }, [timeoutId]);

  useEffect(() => {
    if (ignoreTimeout) {
      return;
    }

    timeoutId.current = setTimeout(callback, time);
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [callback, time, timeoutId, ignoreTimeout]);

  if (ignoreTimeout) {
    return [noop];
  }
  return [cancelTimeout];
}
