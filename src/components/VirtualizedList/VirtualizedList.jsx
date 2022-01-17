import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import cx from "classnames";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  getNormalizedItems,
  easeInOutQuint,
  getMaxOffset,
  getOnItemsRenderedData,
  isVerticalScrollbarVisible
} from "../../services/virtualized-service";
import usePrevious from "../../hooks/usePrevious";
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
      onItemsRenderedThrottleMs,
      onSizeUpdate,
      onVerticalScrollbarVisiblityChange
    },
    ref
  ) => {
    // states
    const [listHeight, setListHeight] = useState(0);
    const [listWidth, setListWidth] = useState(0);

    // prevs
    const prevScrollToId = usePrevious(scrollToId);

    // Refs
    const componentRef = useRef(null);
    const isVerticalScrollbarVisibleRef = useRef(null);
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

    // Callbacks
    const heightGetter = useCallback(
      (item, index) => {
        const height = getItemHeight(item, index);
        if (height === undefined) {
          console.error("Couldn't get height for item: ", item);
        }
        return height;
      },
      [getItemHeight]
    );

    const idGetter = useCallback(
      (item, index) => {
        const itemId = getItemId(item, index);
        if (itemId === undefined) {
          console.error("Couldn't get id for item: ", item);
        }
        return itemId;
      },
      [getItemId]
    );

    // Memos
    // Creates object of itemId => { item, index, height, offsetTop}
    const normalizedItems = useMemo(() => {
      return getNormalizedItems(items, idGetter, heightGetter);
    }, [items, idGetter, heightGetter]);

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
          onScrollToFinished && onScrollToFinished();
        }
      });
    }, [scrollDuration, animationData, listRef, maxListOffset, onScrollToFinished]);

    const startScrollAnimation = useCallback(
      item => {
        const { offsetTop } = item;
        if (animationData.animationStartTime) {
          // animation already in progress
          animationData.scrollOffsetFinal = offsetTop;
          return;
        }
        if (animationData.scrollOffsetInitial === offsetTop) {
          // offset already equals to item offset
          onScrollToFinished && onScrollToFinished();
          return;
        }

        animationData.scrollOffsetFinal = offsetTop;
        animationData.animationStartTime = performance.now();
        animateScroll();
      },
      [animationData, animateScroll, onScrollToFinished]
    );

    const rowRenderer = useCallback(
      ({ index, style }) => {
        const item = items[index];
        return itemRenderer(item, index, style);
      },
      [items, itemRenderer]
    );

    const calcItemHeight = useCallback(
      index => {
        const item = items[index];
        return heightGetter(item, index);
      },
      [items, heightGetter]
    );

    const updateListSize = useCallback(
      (width, height) => {
        if (height !== listHeight || width !== listWidth) {
          setTimeout(() => {
            setListHeight(height);
            setListWidth(width);
            onSizeUpdate(width, height);
          }, 0);
        }
      },
      [listHeight, listWidth, onSizeUpdate]
    );

    const onItemsRenderedCB = useThrottledCallback(
      ({ visibleStartIndex, visibleStopIndex }) => {
        if (!onItemsRendered) return;
        const data = getOnItemsRenderedData(
          items,
          normalizedItems,
          idGetter,
          visibleStartIndex,
          visibleStopIndex,
          listHeight,
          scrollTopRef.current
        );
        onItemsRendered(data);
      },
      { wait: onItemsRenderedThrottleMs, trailing: true },
      [onItemsRendered, items, normalizedItems, idGetter, listHeight]
    );

    // Effects
    useEffect(() => {
      // scroll to specific item
      if (scrollToId && prevScrollToId !== scrollToId) {
        const hasVerticalScrollbar = isVerticalScrollbarVisible(items, normalizedItems, idGetter, listHeight);
        const item = normalizedItems[scrollToId];
        hasVerticalScrollbar && item && startScrollAnimation(item);
      }
    }, [prevScrollToId, scrollToId, startScrollAnimation, normalizedItems, items, idGetter, listHeight]);

    useEffect(() => {
      // recalculate row heights
      if (listRef.current) {
        listRef.current.resetAfterIndex(0);
      }
    }, [normalizedItems]);

    useEffect(() => {
      // update vertical scrollbar visibility
      if (onVerticalScrollbarVisiblityChange) {
        const isVisible = isVerticalScrollbarVisible(items, normalizedItems, idGetter, listHeight);
        if (isVerticalScrollbarVisibleRef.current !== isVisible) {
          isVerticalScrollbarVisibleRef.current = isVisible;
          onVerticalScrollbarVisiblityChange(isVisible);
        }
      }
    }, [onVerticalScrollbarVisiblityChange, items, normalizedItems, listHeight, idGetter]);

    return (
      <div ref={mergedRef} className={cx("virtualized-list--wrapper", className)} id={id}>
        <AutoSizer>
          {({ height, width }) => {
            updateListSize(width, height);
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
                className="virtualized-list-scrollable-container"
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
  /**
   * class name to add to the component wrapper
   */
  className: PropTypes.string,
  /**
   * id to add to the component wrapper
   */
  id: PropTypes.string,
  /**
   * A list of items to be rendered
   */
  items: PropTypes.arrayOf(PropTypes.object),
  /**
   * item render function
   * returns `JSX.Element`
   */
  itemRenderer: PropTypes.func,
  /**
   * in order to calculate the number of items to render, the component needs the height of the items
   * return `number`
   */
  getItemHeight: PropTypes.func,
  /**
   * returns Id of an items
   * returns `string`
   */
  getItemId: PropTypes.func,
  /**
   * callback to be called when the scroll is finished
   */
  onScrollToFinished: PropTypes.func,
  /**
   * number of items to render (below/above the fold)
   */
  overscanCount: PropTypes.number,
  /**
   * the speed of the scroll (in ms)
   */
  scrollDuration: PropTypes.number,
  /**
   * a callback that is being called when the items are rendered
   *
   *    `onItemsRendered => {`
   *
   *     firstItemId: string
   *
   *     secondItemId: string
   *
   *     lastItemId: string
   *
   *     centerItemId: string
   *
   *     firstItemOffsetEnd: number
   *
   *     currentOffsetTop: number
   *
   * }
   */
  onItemsRendered: PropTypes.func,
  onItemsRenderedThrottleMs: PropTypes.number,
  /**
   * when the list size changes - `=> (width, height)`
   */
  onSizeUpdate: PropTypes.func,
  onVerticalScrollbarVisiblityChange: PropTypes.func
};
VirtualizedList.defaultProps = {
  className: "",
  id: "",
  items: [],
  itemRenderer: (item, _index, _style) => item,
  getItemHeight: (item, _index) => item.height,
  getItemId: (item, _index) => item.id,
  onScrollToFinished: NOOP,
  overscanCount: 0,
  scrollDuration: 200,
  onItemsRendered: null,
  onItemsRenderedThrottleMs: 200,
  onSizeUpdate: NOOP,
  onVerticalScrollbarVisiblityChange: null
};

export default VirtualizedList;
