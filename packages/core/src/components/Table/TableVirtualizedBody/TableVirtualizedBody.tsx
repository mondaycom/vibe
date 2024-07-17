import React, { ComponentType, forwardRef, UIEventHandler, useCallback, useEffect } from "react";
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

export type TableVirtualizedRows = Array<Record<string, unknown> & { id: string }>;
export type TableVirtualizedRow = TableVirtualizedRows[number];

export interface ITableVirtualizedBodyProps extends VibeComponentProps {
  items: TableVirtualizedRows;
  rowRenderer: (item: TableVirtualizedRow) => JSX.Element;
  onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
}

const TableVirtualizedBody = forwardRef(
  (
    { items, rowRenderer, onScroll, id, className, "data-testid": dataTestId }: ITableVirtualizedBodyProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { size, virtualizedListRef, onVirtualizedListScroll, markTableAsVirtualized } = useTable();
    const { resetHoveredRow } = useTableRowMenu();

    const onAutoSizerScroll = useCallback<UIEventHandler<HTMLDivElement>>(
      e => {
        resetHoveredRow();
        onVirtualizedListScroll(e);
      },
      [resetHoveredRow, onVirtualizedListScroll]
    );

    useEffect(() => {
      markTableAsVirtualized();
    }, [markTableAsVirtualized]);

    const itemRenderer = useCallback<ComponentType<ListChildComponentProps<TableVirtualizedRow>>>(
      ({ index, style: { width: _width, ...style } }) => {
        const currentItem = items[index];
        const element = rowRenderer(currentItem);
        return React.cloneElement(element, {
          style: { ...style, ...element.props?.style },
          key: index
        });
      },
      [items, rowRenderer]
    );

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
        onScroll?.(scrollDirection, scrollOffset, scrollUpdateWasRequested);
      },
      [onScroll]
    );

    return (
      <TableBody
        className={cx(styles.tableBody, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_VIRTUALIZED_BODY, id)}
        ref={ref}
      >
        {items?.length && (
          <AutoSizer onScroll={onAutoSizerScroll}>
            {({ height, width }: AutoSizerSize) => (
              <List
                itemSize={RowHeights[size]}
                height={height}
                itemCount={items.length}
                width={width}
                onScroll={handleVirtualizedVerticalScroll}
                outerRef={element => {
                  virtualizedListRef.current = element;
                }}
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
