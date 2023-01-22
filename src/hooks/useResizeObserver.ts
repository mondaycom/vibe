import { RefObject, useCallback, useEffect } from "react";
import { debounce } from "lodash-es";

type ResizeCallback = ({ borderBoxSize }: { borderBoxSize: ResizeObserverSize }) => void;

export default function useResizeObserver({
  ref,
  callback,
  debounceTime = 200
}: {
  ref: RefObject<HTMLElement>;
  callback: ResizeCallback;
  debounceTime?: number;
}) {
  const debouncedCallback = useCallback(debounce<ResizeCallback>(callback, debounceTime), [callback, debounceTime]);

  useEffect(() => {
    if (!window.ResizeObserver) {
      return;
    }
    if (!ref?.current) return;

    function borderBoxSizeCallback(borderBoxSize: ResizeObserverSize | ReadonlyArray<ResizeObserverSize>): number {
      const value = Array.isArray(borderBoxSize) ? borderBoxSize[0] : borderBoxSize;
      return window.requestAnimationFrame(() => {
        debouncedCallback({ borderBoxSize: value });
      });
    }

    let animationFrameId: number | null = null;

    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry && entry.borderBoxSize) {
        // handle chrome (entry.borderBoxSize[0])
        // handle ff (entry.borderBoxSize)
        if (!Array.isArray(entry.borderBoxSize)) {
          animationFrameId = borderBoxSizeCallback(entry.borderBoxSize);
        } else {
          const borderBoxEntry = entry.borderBoxSize[0];
          animationFrameId = borderBoxSizeCallback(borderBoxEntry);
        }
      } else if (entry.contentRect) {
        // handle safari (entry.contentRect)
        const borderBoxSize = { blockSize: entry.contentRect.height, inlineSize: entry?.contentRect?.width || 0 };
        animationFrameId = borderBoxSizeCallback(borderBoxSize);
      } else {
        return;
      }
    });

    resizeObserver.observe(ref?.current);

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
  }, [ref?.current, callback, debounceTime, debouncedCallback]);
}
