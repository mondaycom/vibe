import { useEffect, useRef, useCallback } from "react";
import { noop } from "lodash-es";

export default function useTimeout({
  time = 0,
  callback,
  ignoreZeroTime = false
}: {
  callback: () => void;
  time?: number;
  ignoreZeroTime?: boolean;
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
