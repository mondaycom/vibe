import { useMemo, useEffect } from "react";
import debounce from "lodash/debounce";

export default function useResizeObserver({ ref, callback, debounceTime = 200 }) {
  const debouncedCallback = useMemo(() => {
    return debounceTime === 0 ? callback : debounce(callback, debounceTime);
  }, [callback, debounceTime]);

  useEffect(() => {
    if (!window.ResizeObserver) {
      return () => {};
    }

    let animationFrameId = null;

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[0];
      if (!(entry && entry.borderBoxSize && entry.borderBoxSize.length > 0)) {
        return () => {};
      }

      const borderBoxSize = entry.borderBoxSize[0];
      animationFrameId = window.requestAnimationFrame(() => {
        debouncedCallback({ borderBoxSize });
      });
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (debounceTime !== 0) {
        debouncedCallback.cancel();
      }

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      resizeObserver.disconnect();
    };
  }, [ref, callback, debounceTime, debouncedCallback]);
}
