import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import cx from "classnames";
import { VariableSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  getNormalizedItems,
  easeInOutQuint,
  getMaxOffset,
  getOnItemsRenderedData,
  isVerticalScrollbarVisible
} from "./virtualized-grid-service";
import usePrevious from "../../hooks/usePrevious";
import useThrottledCallback from "../../hooks/useThrottledCallback";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./VirtualizedGrid.scss";

const VirtualizedGrid = forwardRef(
  (
    {
      className,
      id,
      items,
      itemRenderer,
      getRowHeight,
      getColumnWidth,
      onScroll,
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
    const [gridHeight, setGridHeight] = useState(0);
    const [gridWidth, setGridWidth] = useState(0);

    // prevs
    const prevScrollToId = usePrevious(scrollToId);

    // Refs
    const componentRef = useRef(null);
    const isVerticalScrollbarVisibleRef = useRef(null);
    const gridRef = useRef(null);
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
      item => {
        const height = getRowHeight();
        if (height === undefined) {
          console.error("Couldn't get height for item: ", item);
        }
        return height;
      },
      [getRowHeight]
    );

    const calcColumnCount = useMemo(() => {
      return Math.floor(gridWidth / getColumnWidth());
    }, [gridWidth, getColumnWidth]);

    const calcRowCount = useMemo(() => {
      return Math.floor(gridHeight / getRowHeight());
    }, [gridHeight, getRowHeight]);

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

    const maxGridOffset = useMemo(() => {
      return getMaxOffset(gridHeight, normalizedItems);
    }, [gridHeight, normalizedItems]);

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
        const finalOffsetValue = Math.min(maxGridOffset, scrollOffset);
        scrollTopRef.current = finalOffsetValue;
        gridRef.current.scrollTo(finalOffsetValue);

        if (ellapsed < scrollDuration) {
          animateScroll();
        } else {
          animationData.animationStartTime = undefined;
          onScrollToFinished && onScrollToFinished();
        }
      });
    }, [scrollDuration, animationData, gridRef, maxGridOffset, onScrollToFinished]);

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

    const cellRenderer = useCallback(
      ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * calcColumnCount + columnIndex;
        const item = items[index];
        return itemRenderer(item, index, style);
      },
      [items, itemRenderer, gridWidth, calcColumnCount]
    );

    const updateGridSize = useCallback(
      (width, height) => {
        if (height !== gridHeight || width !== gridWidth) {
          setTimeout(() => {
            setGridHeight(height);
            setGridWidth(width);
            onSizeUpdate(width, height);
          }, 0);
        }
      },
      [gridHeight, gridWidth, onSizeUpdate]
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
          gridHeight,
          scrollTopRef.current
        );
        onItemsRendered(data);
      },
      { wait: onItemsRenderedThrottleMs, trailing: true },
      [onItemsRendered, items, normalizedItems, idGetter, gridHeight]
    );

    // Effects
    useEffect(() => {
      // scroll to specific item
      if (scrollToId && prevScrollToId !== scrollToId) {
        const hasVerticalScrollbar = isVerticalScrollbarVisible(items, normalizedItems, idGetter, gridHeight);
        const item = normalizedItems[scrollToId];
        hasVerticalScrollbar && item && startScrollAnimation(item);
      }
    }, [prevScrollToId, scrollToId, startScrollAnimation, normalizedItems, items, idGetter, gridHeight]);

    useEffect(() => {
      // recalculate row heights
      if (gridRef.current) {
        gridRef.current.resetAfterIndex(0);
      }
    }, [normalizedItems]);

    useEffect(() => {
      // update vertical scrollbar visibility
      if (onVerticalScrollbarVisiblityChange) {
        const isVisible = isVerticalScrollbarVisible(items, normalizedItems, idGetter, gridHeight);
        if (isVerticalScrollbarVisibleRef.current !== isVisible) {
          isVerticalScrollbarVisibleRef.current = isVisible;
          onVerticalScrollbarVisiblityChange(isVisible);
        }
      }
    }, [onVerticalScrollbarVisiblityChange, items, normalizedItems, gridHeight, idGetter]);
    return (
      <div ref={mergedRef} className={cx("virtualized-grid--wrapper", className)} id={id}>
        <AutoSizer>
          {({ height, width }) => {
            updateGridSize(width, height);
            return (
              <Grid
                ref={gridRef}
                height={height}
                width={width}
                columnWidth={getColumnWidth}
                columnCount={calcColumnCount}
                rowHeight={getRowHeight}
                rowCount={calcRowCount}
                onScroll={onScrollCB}
                onItemsRendered={onItemsRenderedCB}
                className="virtualized-grid-scrollable-container"
              >
                {cellRenderer}
              </Grid>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
);

VirtualizedGrid.propTypes = {
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
   * in order to calculate the number of rows to render in the grid, the component needs the height of the row
   * return `number`
   */
  getRowHeight: PropTypes.func,
  /**
   * in order to calculate the number of columns to render in the grid, the component needs the width of the column
   * return `number`
   */
  getColumnWidth: PropTypes.func,
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
  // overscanCount: PropTypes.number,
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
   * when the grid size changes - `=> (width, height)`
   */
  onSizeUpdate: PropTypes.func,
  onVerticalScrollbarVisiblityChange: PropTypes.func
};
VirtualizedGrid.defaultProps = {
  className: "",
  id: "",
  items: [],
  itemRenderer: (item, _index, _style) => item,
  getRowHeight: () => 50,
  getColumnWidth: () => 100,
  getItemId: (item, _index) => item.id,
  onScrollToFinished: NOOP,
  // overscanCount: 0,
  scrollDuration: 200,
  onItemsRendered: null,
  onItemsRenderedThrottleMs: 200,
  onSizeUpdate: NOOP,
  onVerticalScrollbarVisiblityChange: null
};

export default VirtualizedGrid;
