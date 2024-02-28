import React, {
  ComponentType,
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import cx from "classnames";
import { GridChildComponentProps, GridOnScrollProps, ScrollDirection, VariableSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  getNormalizedItems,
  getOnItemsRenderedData,
  isLayoutDirectionScrollbarVisible
} from "../../services/virtualized-service";
import usePrevious from "../../hooks/usePrevious";
import useThrottledCallback from "../../hooks/useThrottledCallback";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "src/types/VibeComponentProps";
import { VibeComponent } from "../../types";
import { NOOP } from "../../utils/function-utils";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./VirtualizedGrid.module.scss";

type ItemType = {
  value: string;
  height: number;
  width: number;
  id: string;
};

export interface VirtualizedGridProps extends VibeComponentProps {
  /**
   * A list of items to be rendered
   * {
   *      item: ItemType,
   *     index: number,
   *     style: CSSProperties
   * }[]
   */
  items: ItemType[];
  /**
   * item render function
   * returns `JSX.Element`
   */
  itemRenderer: (
    item: ItemType,
    index: number,
    style: CSSProperties
  ) => ItemType | ComponentType<GridChildComponentProps<ItemType>>;
  /**
   * in order to calculate the number of rows to render in the grid, the component needs the height of the row
   * return `number`
   */
  getRowHeight: () => number;
  /**
   * in order to calculate the number of columns to render in the grid, the component needs the width of the column
   * return `number`
   */
  getColumnWidth: () => number;
  /**
   * returns Id of an items
   * returns `string`
   */
  getItemId?: (item: ItemType, index: number) => string;
  /**
   * index of the item to scroll to
   */
  scrollToId?: number;
  onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
  /**
   * callback to be called when the scroll is finished
   */
  onScrollToFinished?: () => void;
  /**
   * a callback that is being called when the items are rendered
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
  onItemsRenderedThrottleMs?: number;
  /**
   * when the grid size changes
   */
  onSizeUpdate?: (width: number, height: number) => void;
  onVerticalScrollbarVisiblityChange?: (value: boolean) => void;
  /**
   * class name to add to the component scrollable container
   */
  scrollableClassName?: string;
}

const VirtualizedGrid: VibeComponent<VirtualizedGridProps> = forwardRef(
  (
    {
      className,
      id,
      items = [],
      itemRenderer = (item: ItemType, _index: number, _style: CSSProperties) => item,
      getRowHeight = () => 50,
      getColumnWidth = () => 100,
      getItemId = (item: ItemType, _index: number) => item.id,
      onScroll,
      scrollToId = null,
      onScrollToFinished = NOOP,
      onItemsRendered = null,
      onItemsRenderedThrottleMs = 200,
      onSizeUpdate = NOOP,
      onVerticalScrollbarVisiblityChange = null,
      scrollableClassName,
      "data-testid": dataTestId
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
    const mergedRef = useMergeRef(ref, componentRef);

    const animationData = animationDataRef.current;

    // Callbacks
    const heightGetter = useCallback(
      (item: ItemType) => {
        const height = getRowHeight();
        if (!height || Number.isNaN(height)) {
          console.error("Couldn't get height for item: ", item);
        }
        return height;
      },
      [getRowHeight]
    );

    const idGetter = useCallback(
      (item: ItemType, index: number) => {
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
      ({ horizontalScrollDirection, scrollTop, scrollUpdateWasRequested }: GridOnScrollProps) => {
        scrollTopRef.current = scrollTop;
        if (!scrollUpdateWasRequested) {
          animationData.scrollOffsetInitial = scrollTop;
        }
        onScroll && onScroll(horizontalScrollDirection, scrollTop, scrollUpdateWasRequested);
      },
      [onScroll, scrollTopRef, animationData]
    );

    const cellRenderer = useCallback(
      ({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: CSSProperties }) => {
        const index = rowIndex * calcColumnCount + columnIndex;
        const item = items[index];
        return itemRenderer(item, index, style);
      },
      [items, itemRenderer, calcColumnCount]
    );

    const updateGridSize = useCallback(
      (width: number, height: number) => {
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
        const isVisible = isLayoutDirectionScrollbarVisible(items, normalizedItems, idGetter, gridHeight);
        if (isVerticalScrollbarVisibleRef.current !== isVisible) {
          isVerticalScrollbarVisibleRef.current = isVisible;
          onVerticalScrollbarVisiblityChange(isVisible);
        }
      }
    }, [onVerticalScrollbarVisiblityChange, items, normalizedItems, gridHeight, idGetter]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.virtualizedGridWrapper, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.VIRTUALIZED_GRID, id)}
      >
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => {
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
                className={scrollableClassName}
              >
                {cellRenderer as unknown as VibeComponent<GridChildComponentProps>}
              </Grid>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
);

export default VirtualizedGrid;
