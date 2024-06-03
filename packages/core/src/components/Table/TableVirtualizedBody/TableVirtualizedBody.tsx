import React, { ComponentType, FC, useCallback } from "react";
import { VibeComponentProps } from "../../../types";
import TableBody from "../TableBody/TableBody";
import styles from "./TableVirtualizedBody.module.scss";
import { FixedSizeList as List, ListChildComponentProps, ScrollDirection } from "react-window";
import { useTable } from "../context/TableContext/TableContext";
import { RowHeights } from "../Table/TableConsts";
import AutoSizer from "react-virtualized-auto-sizer";

type Rows = Array<Record<string, unknown> & { id: string }>;
type Row = Rows[number];

export interface ITableVirtualizedBodyProps extends VibeComponentProps {
  items: Rows;
  rowRenderer: (item: Row) => JSX.Element;
  onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
}

const TableVirtualizedBody: FC<ITableVirtualizedBodyProps> = ({ items, rowRenderer, onScroll }) => {
  const { size, rowWidth } = useTable();

  const itemRenderer = useCallback<ComponentType<ListChildComponentProps<Row>>>(
    ({ index, style }) => {
      const currentItem = items[index];
      const element = rowRenderer(currentItem);
      return React.cloneElement(element, { style, key: index });
    },
    [items, rowRenderer]
  );

  const handleOnScroll = useCallback(
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
    <TableBody className={styles.tableBody}>
      {items?.length && (
        <AutoSizer disableWidth>
          {({ height }: { height: number }) => {
            return (
              <List
                layout="vertical"
                itemSize={RowHeights[size]}
                height={height}
                itemCount={items.length}
                width={rowWidth || "100%"}
                onScroll={handleOnScroll}
              >
                {itemRenderer}
              </List>
            );
          }}
        </AutoSizer>
      )}
    </TableBody>
  );
};

export default TableVirtualizedBody;
