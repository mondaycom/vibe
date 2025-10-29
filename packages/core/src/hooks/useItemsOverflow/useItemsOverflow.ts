import { type RefObject, useCallback, useState, useRef } from "react";
import useIsomorphicLayoutEffect from "../ssr/useIsomorphicLayoutEffect";

/**
 * Custom hook that calculates how many items can fit in a container without overflowing
 */
export default function useItemsOverflow({
  containerRef,
  gap,
  deductedSpaceRef,
  itemRefs,
  minVisibleCount = 0
}: {
  containerRef: RefObject<HTMLElement>;
  gap: number;
  deductedSpaceRef?: RefObject<HTMLElement>;
  itemRefs: RefObject<HTMLElement>[];
  minVisibleCount?: number;
}) {
  const [visibleCount, setVisibleCount] = useState<number>(itemRefs.length);
  const itemWidthsRef = useRef<number[]>([]);
  const deductedWidthRef = useRef<number>(0);
  const isCalculatingRef = useRef(false);

  const calculateFromCachedWidths = useCallback(() => {
    const container = containerRef?.current;
    if (!container || !itemRefs.length) {
      setVisibleCount(itemRefs.length);
      return;
    }

    const containerWidth = container.offsetWidth;
    const deductedWidth = deductedWidthRef.current;
    const availableWidth = containerWidth - deductedWidth;

    let totalItemsWidth = 0;
    let count = 0;

    const maxIter = Math.min(itemRefs.length, itemWidthsRef.current.length);

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

    // Ensure at least minVisibleCount items are visible
    const finalCount = Math.max(count, Math.min(minVisibleCount, maxIter));
    setVisibleCount(finalCount);
  }, [containerRef, itemRefs, gap, minVisibleCount]);

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
        if (!container || !itemRefs.length) {
          setVisibleCount(itemRefs.length);
          return;
        }

        measureDeductedWidth();

        const itemElements = itemRefs.map(ref => ref.current).filter(el => el !== null) as HTMLElement[];

        if (itemElements.length === 0) {
          setVisibleCount(0);
          itemWidthsRef.current = [];
          return;
        }

        itemWidthsRef.current = itemElements.map(item => item.getBoundingClientRect().width);
        calculateFromCachedWidths();
      } finally {
        isCalculatingRef.current = false;
      }
    });
  }, [containerRef, itemRefs, calculateFromCachedWidths, measureDeductedWidth]);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (itemRefs.length > 0) {
        if (itemWidthsRef.current.length) {
          measureDeductedWidth();
          calculateFromCachedWidths();
        } else {
          measureAndCacheItems();
        }
      } else {
        setVisibleCount(0);
        itemWidthsRef.current = [];
      }
    });

    resizeObserver.observe(containerRef.current);

    if (deductedSpaceRef?.current) {
      resizeObserver.observe(deductedSpaceRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [containerRef, deductedSpaceRef, measureDeductedWidth, calculateFromCachedWidths, measureAndCacheItems, itemRefs]);

  useIsomorphicLayoutEffect(() => {
    if (itemRefs.length > 0) {
      measureAndCacheItems();
    } else {
      setVisibleCount(0);
      itemWidthsRef.current = [];
    }
  }, [itemRefs, measureAndCacheItems]);

  return visibleCount;
}
