import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import cx from "classnames";
import { VariableSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  getNormalizedItems,
  getOnItemsRenderedData,
  isVerticalScrollbarVisible
} from "../../services/virtualized-service";
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
    const animationDataRef = useRef({
      scrollOffsetInitial: 0,
      scrollOffsetFinal: 0,
      animationStartTime: 0
    });
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const animationData = animationDataRef.current;

    // Callbacks
    const heightGetter = useCallback(
      item => {
        const height = getRowHeight();
        if (!height || Number.isNaN(height)) {
          console.error("Couldn't get height for item: ", item);
        }
        return height;
      },
      [getRowHeight]
    );

    const idGetter = useCallback(
      (item, index) => {
        const itemId = getItemId(item, index);
        if (!itemId || Number.isNaN(itemId)) {
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

    const calcColumnCount = useMemo(() => {
      return Math.min(items.length, Math.floor(gridWidth / getColumnWidth()));
    }, [items, gridWidth, getColumnWidth]);

    const calcRowCount = useMemo(() => {
      return calcColumnCount > 0 ? Math.ceil(items.length / calcColumnCount) : 0;
    }, [items, calcColumnCount]);

    const scrollToColumnIndex = useMemo(() => {
      return scrollToId % calcColumnCount;
    }, [scrollToId, calcColumnCount]);

    const scrollToRowIndex = useMemo(() => {
      return Math.floor(scrollToId / calcColumnCount);
    }, [scrollToId, calcColumnCount]);

    // Callbacks
    const onScrollCB = useCallback(
      ({ horizontalScrollDirection, _scrollLeft, scrollTop, scrollUpdateWasRequested, _verticalScrollDirection }) => {
        scrollTopRef.current = scrollTop;
        if (!scrollUpdateWasRequested) {
          animationData.scrollOffsetInitial = scrollTop;
        }
        onScroll && onScroll(horizontalScrollDirection, scrollTop, scrollUpdateWasRequested);
      },
      [onScroll, scrollTopRef, animationData]
    );

    const cellRenderer = useCallback(
      ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * calcColumnCount + columnIndex;
        const item = items[index];
        return itemRenderer(item, index, style);
      },
      [items, itemRenderer, calcColumnCount]
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
        gridRef.current.scrollToItem({
          align: "center",
          columnIndex: scrollToColumnIndex,
          rowIndex: scrollToRowIndex
        });
        onScrollToFinished();
      }
    }, [scrollToId, prevScrollToId, gridRef, scrollToColumnIndex, scrollToRowIndex, onScrollToFinished]);

    useEffect(() => {
      // recalculate row heights
      if (gridRef.current) {
        gridRef.current.resetAfterIndices({ columnIndex: 0, rowIndex: 0 });
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
   * index of the item to scroll to
   */
  scrollToId: PropTypes.number,
  /**
   * callback to be called when the scroll is finished
   */
  onScrollToFinished: PropTypes.func,
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
  onItemsRendered: null,
  onItemsRenderedThrottleMs: 200,
  onSizeUpdate: NOOP,
  onVerticalScrollbarVisiblityChange: null,
  scrollToId: null
};

export default VirtualizedGrid;
