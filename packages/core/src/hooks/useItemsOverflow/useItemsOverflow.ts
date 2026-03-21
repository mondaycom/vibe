import { type RefObject, useCallback, useState, useRef } from "react";
import useIsomorphicLayoutEffect from "../ssr/useIsomorphicLayoutEffect";

/**
 * Custom hook that calculates how many items can fit in a container without overflowing
 */
export default function useItemsOverflow({
  containerRef,
  gap,
  deductedSpaceRef,
  deductedWidth = 0,
  itemRefs,
  minVisibleCount = 0
}: {
  containerRef: RefObject<HTMLElement>;
  gap: number;
  deductedSpaceRef?: RefObject<HTMLElement>;
  deductedWidth?: number;
  itemRefs: RefObject<HTMLElement>[];
  minVisibleCount?: number;
}) {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [hasMeasured, setHasMeasured] = useState<boolean>(false);
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
    const deductedRefWidth = deductedWidthRef.current;
    // Only apply fixed deductedWidth when container has measurable width (avoids issues in test environments)
    const availableWidth = containerWidth - deductedRefWidth - (containerWidth > 0 ? deductedWidth : 0);

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
  }, [containerRef, itemRefs, gap, minVisibleCount, deductedWidth]);

  const measureDeductedWidth = useCallback(() => {
    if (deductedSpaceRef?.current) {
      deductedWidthRef.current = deductedSpaceRef.current.getBoundingClientRect().width;
    } else {
      deductedWidthRef.current = 0;
    }
  }, [deductedSpaceRef]);

  const measureAndCacheItemsSync = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemRefs.length) {
      setVisibleCount(itemRefs.length);
      setHasMeasured(true);
      return;
    }

    measureDeductedWidth();

    const itemElements = itemRefs.map(ref => ref.current).filter(el => el !== null) as HTMLElement[];

    if (itemElements.length === 0) {
      setVisibleCount(0);
      itemWidthsRef.current = [];
      setHasMeasured(true);
      return;
    }

    itemWidthsRef.current = itemElements.map(item => item.getBoundingClientRect().width);
    calculateFromCachedWidths();
    setHasMeasured(true);
  }, [containerRef, itemRefs, calculateFromCachedWidths, measureDeductedWidth]);

  const measureAndCacheItems = useCallback(() => {
    if (isCalculatingRef.current) return;
    isCalculatingRef.current = true;

    requestAnimationFrame(() => {
      try {
        measureAndCacheItemsSync();
      } finally {
        isCalculatingRef.current = false;
      }
    });
  }, [measureAndCacheItemsSync]);

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
      setHasMeasured(false);
      // Use synchronous measurement for initial render to prevent delay
      measureAndCacheItemsSync();
    } else {
      setVisibleCount(0);
      itemWidthsRef.current = [];
      setHasMeasured(true);
    }
  }, [itemRefs, measureAndCacheItemsSync]);

  return { visibleCount, hasMeasured };
}
