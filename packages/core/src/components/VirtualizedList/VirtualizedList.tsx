import cx from "classnames";
import React, {
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  type LegacyRef,
  type ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { noop as NOOP } from "es-toolkit";
import {
  type ScrollDirection,
  VariableSizeList as List,
  type ListOnItemsRenderedProps,
  type ListChildComponentProps,
  type VariableSizeList
} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import usePrevious from "../../hooks/usePrevious";
import useThrottledCallback from "../../hooks/useThrottledCallback";
import useMergeRef from "../../hooks/useMergeRef";
import {
  easeInOutQuint,
  getMaxOffset,
  getNormalizedItems,
  getOnItemsRenderedData,
  isLayoutDirectionScrollbarVisible
} from "../../services/virtualized-service";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { type VibeComponent, type VibeComponentProps } from "@vibe/shared";
import styles from "./VirtualizedList.module.scss";
import {
  type VirtualizedListItem,
  type VirtualizedListLayout,
  type VirtualizedListScrollDirection
} from "./VirtualizedList.types";

export interface VirtualizedListProps extends VibeComponentProps {
  /**
   * Class name applied to the scrollable container.
   */
  scrollableClassName?: string;
  /**
   * The orientation of the list.
   */
  layout?: VirtualizedListLayout;
  /**
   * The list of items to be rendered.
   */
  items: VirtualizedListItem[];
  /**
   * Function to render each item in the list.
   */
  itemRenderer: (item: VirtualizedListItem, index: number, style: CSSProperties) => ReactElement | JSX.Element;
  /**
   * @deprecated - use `getItemSize`.
   */
  getItemHeight?: (item: VirtualizedListItem, index: number) => number;
  /**
   * Function to get the size (height/width) of each item, based on layout.
   */
  getItemSize?: (item: VirtualizedListItem, index: number) => number;
  /**
   * Function to get the unique ID of an item.
   */
  getItemId?: (item: VirtualizedListItem, index: number) => string;
  /**
   * Callback fired when the scroll animation is finished.
   */
  onScrollToFinished?: () => void;
  /**
   * Number of items to render above and below the visible portion.
   */
  overscanCount?: number;
  /**
   * The duration of the scroll animation in milliseconds.
   */
  scrollDuration?: number;
  /**
   * Callback fired when items are rendered.
   */
  onItemsRendered?: ({
    firstItemId,
    secondItemId,
    lastItemId,
    centerItemId,
    firstItemOffsetEnd,
    currentOffsetTop
  }: {
    firstItemId: string;
    secondItemId: string;
    lastItemId: string;
    centerItemId: string;
    firstItemOffsetEnd: number;
    currentOffsetTop: number;
  }) => void;
  /**
   * The delay (in ms) for throttling the `onItemsRendered` callback.
   */
  onItemsRenderedThrottleMs?: number;
  /**
   * Callback fired when the list size changes.
   */
  onSizeUpdate?: (width: number, height: number) => void;
  /**
   * @deprecated - use `onLayoutDirectionScrollbarVisibilityChange`.
   */
  onVerticalScrollbarVisiblityChange?: (value: boolean) => void;
  /**
   * Callback fired when the vertical or horizontal scrollbar visibility changes.
   */
  onLayoutDirectionScrollbarVisibilityChange?: (value: boolean) => void;
  /**
   * The ARIA role attribute applied to the list.
   */
  role?: string;
  /**
   * The ARIA label for the list.
   */
  ariaLabel?: string;
  /**
   * Custom inline styles applied to the list.
   */
  style?: CSSProperties;
  /**
   * The ID of the item to scroll to.
   */
  scrollToId?: string;
  /**
   * Reference to the virtualized list component.
   */
  virtualListRef?: ForwardedRef<HTMLElement>;
  /**
   * Callback fired when the list is scrolled.
   */
  onScroll?: (
    horizontalScrollDirection: VirtualizedListScrollDirection,
    scrollTop: number,
    scrollUpdateWasRequested: boolean
  ) => void;
}

const VirtualizedList = forwardRef(
  (
    {
      className,
      id,
      items = [],
      itemRenderer = (item: VirtualizedListItem, _index: number, _style: CSSProperties) => item as ReactElement,
      getItemHeight = (item: VirtualizedListItem, _index: number) => item.height,
      getItemSize = null, // must be null for backward compatibility
      layout = "vertical",
      onScroll,
      overscanCount = 0,
      getItemId = (item: VirtualizedListItem, _index: number) => item.id,
      scrollToId,
      scrollDuration = 200,
      onScrollToFinished = NOOP,
      onItemsRendered,
      onItemsRenderedThrottleMs = 200,
      onSizeUpdate = NOOP,
      onVerticalScrollbarVisiblityChange = null,
      onLayoutDirectionScrollbarVisibilityChange = null,
      virtualListRef,
      scrollableClassName,
      role,
      ariaLabel,
      style,
      "data-testid": dataTestId
    }: VirtualizedListProps,
    ref: React.ForwardedRef<HTMLElement>
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
    const animationDataRef = useRef({
      initialized: false,
      scrollOffsetInitial: 0,
      scrollOffsetFinal: 0,
      animationStartTime: 0
    });
    const mergedRef = useMergeRef(ref, componentRef);
    const mergedListRef = useMergeRef(virtualListRef, listRef);

    const animationData = animationDataRef.current;
    if (!animationData.initialized) {
      animationData.initialized = true;
      animationData.scrollOffsetInitial = 0;
      animationData.scrollOffsetFinal = 0;
      animationData.animationStartTime = 0;
    }

    // Callbacks
    const sizeGetter = useCallback(
      (item: VirtualizedListItem, index: number) => {
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
      (item: VirtualizedListItem, index: number) => {
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
      ({
        scrollDirection,
        scrollOffset,
        scrollUpdateWasRequested
      }: {
        scrollDirection: ScrollDirection;
        scrollOffset: number;
        scrollUpdateWasRequested: boolean;
      }) => {
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
        listRef.current?.scrollTo(finalOffsetValue);

        if (ellapsed < scrollDuration) {
          animateScroll();
        } else {
          animationData.animationStartTime = undefined;
          onScrollToFinished && onScrollToFinished();
        }
      });
    }, [scrollDuration, animationData, listRef, maxListOffset, onScrollToFinished]);

    const startScrollAnimation = useCallback(
      (item: VirtualizedListItem) => {
        const { offsetTop } = item;

        if (animationData.animationStartTime) {
          // animation already in progress
          animationData.scrollOffsetFinal = offsetTop;
          return;
        }

        // Update the initial scroll offset with the current scroll position for react 18 batching behavior
        if (listRef.current?.state?.scrollOffset !== null) {
          animationData.scrollOffsetInitial = listRef.current?.state?.scrollOffset;
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
      ({ index, style }: { index: number; style: CSSProperties }) => {
        const item = items[index];
        return itemRenderer(item, index, style);
      },
      [items, itemRenderer]
    );

    const calcItemSize = useCallback(
      (index: number) => {
        const item = items[index];
        return sizeGetter(item, index);
      },
      [items, sizeGetter]
    );

    const updateListSize = useCallback(
      (width: number, height: number) => {
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
      ({ visibleStartIndex, visibleStopIndex }: ListOnItemsRenderedProps) => {
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
        const item = normalizedItems[scrollToId as keyof typeof normalizedItems];
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
        className={cx(styles.virtualizedListWrapper, className)}
        id={id}
        role={role}
        aria-label={ariaLabel}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.VIRTUALIZED_LIST, id)}
        style={style}
      >
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => {
            updateListSize(width, height);
            return (
              <List
                ref={mergedListRef as unknown as LegacyRef<VariableSizeList<unknown>>}
                height={height}
                width={width}
                itemCount={items.length}
                itemSize={calcItemSize}
                onScroll={onScrollCB}
                layout={layout}
                overscanCount={overscanCount}
                onItemsRendered={onItemsRenderedCB}
                className={scrollableClassName}
              >
                {rowRenderer as VibeComponent<ListChildComponentProps>}
              </List>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
);

export default VirtualizedList;
