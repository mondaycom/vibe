import { RefObject, useCallback, useState, useEffect, useRef } from "react";

/**
 * Custom hook that calculates how many items can fit in a container without overflowing
 */
export default function useItemsOverflow<T>({
  containerRef,
  items,
  gap = 4,
  deductedSpaceRef,
  itemSelector
}: {
  containerRef: RefObject<HTMLElement>;
  items: T[];
  gap?: number;
  deductedSpaceRef?: RefObject<HTMLElement>;
  itemSelector: string;
}) {
  const [visibleCount, setVisibleCount] = useState<number>(items.length);
  const itemWidthsRef = useRef<number[]>([]);
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

    let totalItemsWidth = 0;
    let count = 0;

    const maxIter = Math.min(items.length, itemWidthsRef.current.length);

    for (let i = 0; i < maxIter; i++) {
      const itemWidth = itemWidthsRef.current[i];
      const itemWidthWithGap = i > 0 ? itemWidth + gap : itemWidth;

      if (totalItemsWidth + itemWidthWithGap <= availableWidth) {
        totalItemsWidth += itemWidthWithGap;
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

  const measureAndCacheItems = useCallback(() => {
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

        const itemElements = Array.from(container.querySelectorAll(itemSelector));
        if (itemElements.length === 0) {
          setVisibleCount(items.length);
          return;
        }

        itemWidthsRef.current = itemElements.map(item => item.getBoundingClientRect().width);
        calculateFromCachedWidths();
      } finally {
        isCalculatingRef.current = false;
      }
    });
  }, [containerRef, items.length, calculateFromCachedWidths, measureDeductedWidth, itemSelector]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (itemWidthsRef.current.length) {
        measureDeductedWidth();
        calculateFromCachedWidths();
      } else {
        measureAndCacheItems();
      }
    });

    resizeObserver.observe(containerRef.current);

    if (deductedSpaceRef?.current) {
      resizeObserver.observe(deductedSpaceRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, deductedSpaceRef, measureDeductedWidth, calculateFromCachedWidths, measureAndCacheItems]);

  useEffect(() => {
    measureAndCacheItems();
  }, [items, measureAndCacheItems]);

  return visibleCount;
}
