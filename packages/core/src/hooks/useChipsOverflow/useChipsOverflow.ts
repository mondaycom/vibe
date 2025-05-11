import { RefObject, useCallback, useState, useEffect, useRef } from "react";

/**
 * Custom hook that calculates how many chips can fit in a container without overflowing
 */
export default function useChipsOverflow<T>({
  containerRef,
  items,
  gap = 4,
  deductedSpaceRef,
  chipSelector
}: {
  containerRef: RefObject<HTMLElement>;
  items: T[];
  gap?: number;
  deductedSpaceRef?: RefObject<HTMLElement>;
  chipSelector: string;
}) {
  const [visibleCount, setVisibleCount] = useState<number>(items.length);
  const chipWidthsRef = useRef<number[]>([]);
  const deductedWidthRef = useRef<number>(0);
  const isCalculatingRef = useRef(false);

  const calculateFromCachedWidths = useCallback(() => {
    const container = containerRef.current;
    if (!container || !items.length) {
      setVisibleCount(items.length);
      return;
    }

    const containerWidth = container.offsetWidth;
    const deductedWidth = deductedWidthRef.current;
    const availableWidth = containerWidth - (items.length > 1 ? deductedWidth : 0);

    let totalChipsWidth = 0;
    let count = 0;

    const maxIter = Math.min(items.length, chipWidthsRef.current.length);

    for (let i = 0; i < maxIter; i++) {
      const chipWidth = chipWidthsRef.current[i];
      const chipWidthWithGap = i > 0 ? chipWidth + gap : chipWidth;

      if (totalChipsWidth + chipWidthWithGap <= availableWidth) {
        totalChipsWidth += chipWidthWithGap;
        count++;
      } else {
        break;
      }
    }
    setVisibleCount(count);
  }, [containerRef, items.length, gap]);

  const measureDeductedWidth = useCallback(() => {
    if (deductedSpaceRef?.current) {
      deductedWidthRef.current = deductedSpaceRef.current.getBoundingClientRect().width;
    } else {
      deductedWidthRef.current = 0;
    }
  }, [deductedSpaceRef]);

  const measureAndCacheChips = useCallback(() => {
    if (isCalculatingRef.current) return;
    isCalculatingRef.current = true;

    requestAnimationFrame(() => {
      try {
        const container = containerRef.current;
        if (!container || !items.length) {
          setVisibleCount(items.length);
          return;
        }

        measureDeductedWidth();

        const chipElements = Array.from(container.querySelectorAll(chipSelector));
        if (chipElements.length === 0) {
          setVisibleCount(items.length);
          return;
        }

        chipWidthsRef.current = chipElements.map(chip => chip.getBoundingClientRect().width);
        calculateFromCachedWidths();
      } finally {
        isCalculatingRef.current = false;
      }
    });
  }, [containerRef, items.length, calculateFromCachedWidths, measureDeductedWidth, chipSelector]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (chipWidthsRef.current.length) {
        measureDeductedWidth();
        calculateFromCachedWidths();
      } else {
        measureAndCacheChips();
      }
    });

    resizeObserver.observe(containerRef.current);

    if (deductedSpaceRef?.current) {
      resizeObserver.observe(deductedSpaceRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, deductedSpaceRef, measureDeductedWidth, calculateFromCachedWidths, measureAndCacheChips]);

  useEffect(() => {
    measureAndCacheChips();
  }, [items, measureAndCacheChips]);

  return visibleCount;
}
