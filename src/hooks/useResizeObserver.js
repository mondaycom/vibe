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
    if (!ref.current) return;

    const borderBoxSizeCallback = borderBoxSize =>
      window.requestAnimationFrame(() => {
        debouncedCallback({ borderBoxSize });
      });

    let animationFrameId = null;

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry && entry.borderBoxSize) {
        const borderBoxSize = entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0] : entry.borderBoxSize;
        // handle chrome (entry.borderBoxSize[0])
        // handle ff (entry.borderBoxSize)
        animationFrameId = borderBoxSizeCallback(borderBoxSize);
      } else if (entry.contentRect) {
        // handle safari (entry.contentRect)
        const borderBoxSize = { blockSize: entry.contentRect.height, inlineSize: entry?.contentRect?.width || 0 };
        animationFrameId = borderBoxSizeCallback(borderBoxSize);
      } else {
        return () => {};
      }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, callback, debounceTime, debouncedCallback]);
}
