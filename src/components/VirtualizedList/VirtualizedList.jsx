import { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import cx from "classnames";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import usePrevious from "../../hooks/usePrevious";
import useThrottledCallback from "../../hooks/useThrottledCallback";
import useMergeRefs from "../../hooks/useMergeRefs";
import {
  getNormalizedItems,
  easeInOutQuint,
  getMaxOffset,
  getOnItemsRenderedData,
  isLayoutDirectionScrollbarVisible
} from "../../services/virtualized-service";
import "./VirtualizedList.scss";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";

const VirtualizedList = forwardRef(
  (
    {
      className,
      id,
      items,
      itemRenderer,
      getItemHeight,
      getItemSize,
      layout,
      onScroll,
      overscanCount,
      getItemId,
      scrollToId,
      scrollDuration,
      onScrollToFinished,
      onItemsRendered,
      onItemsRenderedThrottleMs,
      onSizeUpdate,
      onVerticalScrollbarVisiblityChange,
      onLayoutDirectionScrollbarVisibilityChange,
      virtualListRef,
      scrollableClassName,
      role,
      style
    },
    ref
  ) => {
    // states
    const [listHeight, setListHeight] = useState(0);
    const [listWidth, setListWidth] = useState(0);

    const isVerticalList = layout !== "horizontal";
    const listSizeByLayout = useMemo(() => {
      return isVerticalList ? listHeight : listWidth;
    }, [isVerticalList, listHeight, listWidth]);

    // prevs
    const prevScrollToId = usePrevious(scrollToId);

    // Refs
    const componentRef = useRef(null);
    const isVerticalScrollbarVisibleRef = useRef(null);
    const listRef = useRef(null);
    const scrollTopRef = useRef(0);
    const animationDataRef = useRef({});
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const mergedListRef = useMergeRefs({ refs: [virtualListRef, listRef] });

    const animationData = animationDataRef.current;
    if (!animationData.initialized) {
      animationData.initialized = true;
      animationData.scrollOffsetInitial = 0;
      animationData.scrollOffsetFinal = 0;
      animationData.animationStartTime = 0;
    }

    // Callbacks
    const sizeGetter = useCallback(
      (item, index) => {
        const getSize = getItemSize || getItemHeight;
        const height = getSize(item, index);
        if (height === undefined) {
          console.error("Couldn't get height for item: ", item);
        }
        return height;
      },
      [getItemHeight, getItemSize]
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
    // Creates object of itemId => { item, index, size, offsetTop}
    const normalizedItems = useMemo(() => {
      return getNormalizedItems(items, idGetter, sizeGetter);
    }, [items, idGetter, sizeGetter]);

    const maxListOffset = useMemo(() => {
      return getMaxOffset(listSizeByLayout, normalizedItems);
    }, [listSizeByLayout, normalizedItems]);

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

    const calcItemSize = useCallback(
      index => {
        const item = items[index];
        return sizeGetter(item, index);
      },
      [items, sizeGetter]
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
          listSizeByLayout,
          scrollTopRef.current
        );
        onItemsRendered(data);
      },
      { wait: onItemsRenderedThrottleMs, trailing: true },
      [onItemsRendered, items, normalizedItems, idGetter, listSizeByLayout]
    );

    // Effects
    useEffect(() => {
      // scroll to specific item
      if (scrollToId && prevScrollToId !== scrollToId) {
        const hasScrollbar = isLayoutDirectionScrollbarVisible(items, normalizedItems, idGetter, listSizeByLayout);
        const item = normalizedItems[scrollToId];
        hasScrollbar && item && startScrollAnimation(item);
      }
    }, [prevScrollToId, scrollToId, startScrollAnimation, normalizedItems, items, idGetter, listSizeByLayout]);

    useEffect(() => {
      // recalculate row heights
      if (listRef.current) {
        listRef.current.resetAfterIndex(0);
      }
    }, [normalizedItems]);

    useEffect(() => {
      // update vertical scrollbar visibility
      const callback = onLayoutDirectionScrollbarVisibilityChange || onVerticalScrollbarVisiblityChange;
      if (callback) {
        const isVisible = isLayoutDirectionScrollbarVisible(items, normalizedItems, idGetter, listSizeByLayout);
        if (isVerticalScrollbarVisibleRef.current !== isVisible) {
          isVerticalScrollbarVisibleRef.current = isVisible;
          callback(isVisible);
        }
      }
    }, [
      onLayoutDirectionScrollbarVisibilityChange,
      onVerticalScrollbarVisiblityChange,
      items,
      normalizedItems,
      listSizeByLayout,
      idGetter
    ]);

    return (
      <div
        ref={mergedRef}
        className={cx("virtualized-list--wrapper", className)}
        id={id}
        role={role}
        data-testid={getTestId(ELEMENT_TYPES.VIRTUALIZED_LIST, id)}
        style={style}
      >
        <AutoSizer>
          {({ height, width }) => {
            updateListSize(width, height);

            return (
              <List
                ref={mergedListRef}
                height={height}
                width={width}
                itemCount={items.length}
                itemSize={calcItemSize}
                onScroll={onScrollCB}
                layout={layout}
                overscanCount={overscanCount}
                onItemsRendered={onItemsRenderedCB}
                className={cx("virtualized-list-scrollable-container", scrollableClassName)}
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
   * class name to add to the component scollable container
   */
  scrollableClassName: PropTypes.string,
  /**
   * id to add to the component wrapper
   */
  id: PropTypes.string,
  /**
   * Layout/orientation of the list.
   *
   * Acceptable values are:
   * - "vertical" (default) - Up/down scrolling.
   * - "horizontal" - Left/right scrolling.
   */
  layout: PropTypes.string,
  /**
   * A list of items to be rendered
   */
  items: PropTypes.arrayOf(PropTypes.object),
  /**
   * Will return the element which represent an item in the virtualized list.
   * Returns `JSX.Element`
   * @param item - item data
   * @param _index - item index
   * @param style - item style, must be injected to the item element wrapper for correct presentation of the item
   */
  itemRenderer: PropTypes.func,
  /**
   * @deprecated - use getItemSize
   * in order to calculate the number of items to render, the component needs the height of the items
   * return `number`
   */
  getItemHeight: PropTypes.func,
  /**
   * in order to calculate the number of items to render, the component needs the width/height of the items (according to layout)
   * return `number`
   */
  getItemSize: PropTypes.func,
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
  /**
   * @Deprecated - use onLayoutDirectionScrollbarVisibilityChange
   */
  onVerticalScrollbarVisiblityChange: PropTypes.func,
  /**
   * Callback - called when the vertical/horizontal (depends on layout) scrollbar visibility changed
   */
  onLayoutDirectionScrollbarVisibilityChange: PropTypes.func,
  role: PropTypes.string,
  /** Custom style to pass to the component */
  style: PropTypes.object
};
VirtualizedList.defaultProps = {
  className: "",
  id: "",
  items: [],
  // eslint-disable-next-line no-unused-vars
  itemRenderer: (item, _index, style) => item,
  getItemHeight: (item, _index) => item.height,
  getItemSize: null, // must be null for backward compatibility
  getItemId: (item, _index) => item.id,
  layout: "vertical",
  onScrollToFinished: NOOP,
  overscanCount: 0,
  scrollDuration: 200,
  onItemsRendered: null,
  onItemsRenderedThrottleMs: 200,
  onSizeUpdate: NOOP,
  onVerticalScrollbarVisiblityChange: null,
  onLayoutDirectionScrollbarVisibilityChange: null,
  role: undefined,
  scrollableClassName: undefined,
  style: undefined
};

export default VirtualizedList;
