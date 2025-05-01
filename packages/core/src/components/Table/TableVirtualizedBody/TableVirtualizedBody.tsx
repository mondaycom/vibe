import React, { ComponentType, forwardRef, useCallback, useEffect, useMemo } from "react";
import { VibeComponentProps } from "../../../types";
import TableBody from "../TableBody/TableBody";
import styles from "./TableVirtualizedBody.module.scss";
import { FixedSizeList as List, ListChildComponentProps, ScrollDirection } from "react-window";
import { useTable } from "../context/TableContext/TableContext";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { RowHeights } from "../Table/TableConsts";
import AutoSizer, { Size as AutoSizerSize } from "react-virtualized-auto-sizer";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";
import { TableColumn } from "../Table/Table";

export type TableVirtualizedRow = Record<string, unknown> & { id: string };

export interface TableVirtualizedBodyProps<T extends TableVirtualizedRow = TableVirtualizedRow>
  extends VibeComponentProps {
  /**
   * The list of items to render in the virtualized table.
   */
  items: T[];
  /**
   * Function to render a row in the table.
   */
  rowRenderer: (item: T) => JSX.Element;
  /**
   * Callback function triggered on scroll.
   */
  onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
  /**
   * The columns configuration for the table.
   */
  columns?: TableColumn[];
  /**
   * Function to render the table header.
   */
  headerRenderer?: (columns: TableColumn[]) => JSX.Element;
}

const MemoizedRow = React.memo(
  <T extends TableVirtualizedRow>({
    item,
    rowRenderer,
    style
  }: {
    item: T;
    rowRenderer: (item: T) => JSX.Element;
    style: React.CSSProperties;
  }) => {
    const element = rowRenderer(item);
    const { width: _width, ...styleWithoutWidth } = style;
    return React.cloneElement(element, {
      style: { ...styleWithoutWidth, ...element.props?.style }
    });
  }
);

const TableVirtualizedBody = forwardRef(
  <T extends TableVirtualizedRow = TableVirtualizedRow>(
    {
      items,
      rowRenderer,
      onScroll,
      columns,
      headerRenderer,
      id,
      className,
      "data-testid": dataTestId
    }: TableVirtualizedBodyProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { size, virtualizedListRef, onVirtualizedListScroll, markTableAsVirtualized } = useTable();
    const { resetHoveredRow } = useTableRowMenu();
    const virtualizedWithHeader = !!columns && !!headerRenderer;

    const handleOuterScroll = useCallback(
      (e: Event) => {
        const target = e.target as HTMLDivElement;
        resetHoveredRow();
        onVirtualizedListScroll({
          target,
          currentTarget: target
        } as unknown as React.UIEvent<HTMLDivElement>);
      },
      [resetHoveredRow, onVirtualizedListScroll]
    );

    useEffect(() => {
      const scrollElement = virtualizedListRef.current;
      if (!scrollElement) return;

      scrollElement.addEventListener("scroll", handleOuterScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleOuterScroll);
      };
    }, [handleOuterScroll, virtualizedListRef]);

    const handleVirtualizedVerticalScroll = useCallback(
      ({
        scrollDirection,
        scrollOffset,
        scrollUpdateWasRequested
      }: {
        scrollDirection: ScrollDirection;
        scrollOffset: number;
        scrollUpdateWasRequested: boolean;
      }) => {
        if (virtualizedWithHeader) return;
        onScroll?.(scrollDirection, scrollOffset, scrollUpdateWasRequested);
      },
      [onScroll, virtualizedWithHeader]
    );

    const itemRenderer = useCallback<ComponentType<ListChildComponentProps<T>>>(
      ({ index, style }) => {
        if (virtualizedWithHeader && index === 0) {
          return null; //placeholder for virtualized with header
        }
        const currentIndex = virtualizedWithHeader ? index - 1 : index;
        const currentItem = items[currentIndex];

        return <MemoizedRow item={currentItem} rowRenderer={rowRenderer} style={style} />;
      },
      [items, rowRenderer, virtualizedWithHeader]
    );

    useEffect(() => {
      if (!virtualizedWithHeader) markTableAsVirtualized();
    }, [markTableAsVirtualized, virtualizedWithHeader]);

    const memoizedInnerElementType = useMemo(
      () =>
        virtualizedWithHeader
          ? forwardRef(({ children, ...rest }: any, ref: React.Ref<HTMLDivElement>) => (
              <div ref={ref} {...rest}>
                {headerRenderer!(columns!)}
                {children}
              </div>
            ))
          : undefined,
      [virtualizedWithHeader, headerRenderer, columns]
    );

    return (
      <TableBody
        className={cx(
          styles.tableBody,
          {
            [styles.withHeader]: virtualizedWithHeader
          },
          className
        )}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_VIRTUALIZED_BODY, id)}
        ref={ref}
      >
        {items?.length && (
          <AutoSizer>
            {({ height, width }: AutoSizerSize) => (
              <List
                itemSize={RowHeights[size]}
                height={height}
                itemCount={virtualizedWithHeader ? items.length + 1 : items.length}
                width={width}
                onScroll={handleVirtualizedVerticalScroll}
                outerRef={element => {
                  virtualizedListRef.current = element;
                }}
                innerElementType={memoizedInnerElementType}
              >
                {itemRenderer}
              </List>
            )}
          </AutoSizer>
        )}
      </TableBody>
    );
  }
);

export default TableVirtualizedBody;
