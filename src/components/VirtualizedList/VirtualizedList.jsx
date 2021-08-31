import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { getNormalizedItems, easeInOutQuint, getMaxOffset, getOnItemsRenderedData } from "./virtualized-list-service";
import useThrottledCallback from "../../hooks/useThrottledCallback";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./VirtualizedList.scss";

const VirtualizedList = forwardRef(
  (
    {
      className,
      id,
      items,
      itemRenderer,
      getItemHeight,
      onScroll,
      overscanCount,
      getItemId,
      scrollToId,
      scrollDuration,
      onScrollToFinished,
      onItemsRendered,
      onItemsRenderedThrottleMs
    },
    ref
  ) => {
    // states
    const [listHeight, setListHeight] = useState(0);

    // Refs
    const componentRef = useRef(null);
    const listRef = useRef(null);
    const scrollTopRef = useRef(0);
    const animationDataRef = useRef({});
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const animationData = animationDataRef.current;
    if (!animationData.initialized) {
      animationData.initialized = true;
      animationData.scrollOffsetInitial = 0;
      animationData.scrollOffsetFinal = 0;
      animationData.animationStartTime = 0;
    }

    // Memos
    // Creates object of itemId => { item, index, height, offsetTop}
    const normalizedItems = useMemo(() => {
      return getNormalizedItems(items, getItemId, getItemHeight);
    }, [items, getItemId, getItemHeight]);

    const maxListOffset = useMemo(() => {
      return getMaxOffset(listHeight, normalizedItems);
    }, [listHeight, normalizedItems]);

    // Callbacks
    const onScrollCB = useCallback(
      ({ scrollDirection, scrollOffset, scrollUpdateWasRequested }) => {
        scrollTopRef.current = scrollOffset;
        if (!scrollUpdateWasRequested) {
          animationData.scrollOffsetInitial = scrollOffset;
        }
        onScroll && onScroll(scrollDirection, scrollOffset, scrollUpdateWasRequested);
      },
      [onScroll, scrollTopRef, animationData]
    );

    const onAnimationComplete = useCallback(() => {
      onScrollToFinished && onScrollToFinished();
    }, [onScrollToFinished]);

    const animateScroll = useCallback(() => {
      requestAnimationFrame(() => {
        const now = performance.now();
        const ellapsed = now - animationData.animationStartTime;
        const scrollDelta = animationData.scrollOffsetFinal - animationData.scrollOffsetInitial;
        const easedTime = easeInOutQuint(Math.min(1, ellapsed / scrollDuration));
        const scrollOffset = animationData.scrollOffsetInitial + scrollDelta * easedTime;
        const finalOffsetValue = Math.min(maxListOffset, scrollOffset);
        scrollTopRef.current = finalOffsetValue;
        listRef.current.scrollTo(finalOffsetValue);

        if (ellapsed < scrollDuration) {
          animateScroll();
        } else {
          animationData.animationStartTime = undefined;
          animationData.scrollOffsetInitial = animationData.scrollOffsetFinal;
          onAnimationComplete();
        }
      });
    }, [scrollDuration, animationData, listRef, maxListOffset, onAnimationComplete]);

    const startScrollAnimation = useCallback(
      item => {
        const { offsetTop } = item;
        if (animationData.animationStartTime || animationData.scrollOffsetFinal === offsetTop) {
          // animation already in progress or final offset equals to item offset
          return;
        }

        animationData.scrollOffsetFinal = offsetTop;
        animationData.animationStartTime = performance.now();
        animateScroll();
      },
      [animationData, animateScroll]
    );

    const onItemsRenderedCB = useThrottledCallback(
      ({ visibleStartIndex, visibleStopIndex }) => {
        if (!onItemsRendered) return;
        // data = { firstItemId, lastItemId, centerItemId }
        const data = getOnItemsRenderedData(
          items,
          normalizedItems,
          getItemId,
          visibleStartIndex,
          visibleStopIndex,
          listHeight,
          scrollTopRef.current
        );
        onItemsRendered(data);
      },
      { wait: onItemsRenderedThrottleMs, trailing: true },
      [onItemsRendered, items, normalizedItems, getItemId, listHeight]
    );

    // Effects
    useEffect(() => {
      // scroll to specific item
      if (scrollToId) {
        const item = normalizedItems[scrollToId];
        item && startScrollAnimation(item);
      }
    }, [scrollToId, startScrollAnimation, normalizedItems]);

    const rowRenderer = ({ index, style }) => {
      const item = items[index];
      return itemRenderer(item, index, style);
    };

    const calcItemHeight = index => {
      const item = items[index];
      return getItemHeight(item, index);
    };

    return (
      <div ref={mergedRef} className={cx("virtualized-list--wrapper", className)} id={id}>
        <AutoSizer>
          {({ height, width }) => {
            setListHeight(height);
            return (
              <List
                ref={listRef}
                height={height}
                width={width}
                itemCount={items.length}
                itemSize={calcItemHeight}
                onScroll={onScrollCB}
                overscanCount={overscanCount}
                onItemsRendered={onItemsRenderedCB}
              >
                {rowRenderer}
              </List>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
);

VirtualizedList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  getItemHeight: PropTypes.func,
  getItemId: PropTypes.func,
  onScrollToFinished: PropTypes.func,
  overscanCount: PropTypes.number,
  scrollDuration: PropTypes.number,
  onItemsRendered: PropTypes.func,
  onItemsRenderedThrottleMs: PropTypes.number
};
VirtualizedList.defaultProps = {
  className: "",
  id: "",
  items: [],
  getItemHeight: (item, _index) => item.height,
  getItemId: (item, _index) => item.id,
  onScrollToFinished: () => {},
  overscanCount: 0,
  scrollDuration: 200,
  onItemsRendered: null,
  onItemsRenderedThrottleMs: 200
};

export default VirtualizedList;
