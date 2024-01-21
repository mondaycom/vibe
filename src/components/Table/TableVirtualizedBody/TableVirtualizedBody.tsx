import React, { ComponentProps, CSSProperties, FC, useCallback, useContext } from "react";
import { VibeComponentProps } from "../../../types";
import VirtualizedList, { VirtualizedListItem } from "../../VirtualizedList/VirtualizedList";
import TableBody from "../TableBody/TableBody";
import styles from "./TableVirtualizedBody.module.scss";
import { ScrollDirection } from "react-window";
import { TableContext } from "../Table/Table";
import { RowHeights } from "../Table/TableConsts";

export interface ITableVirtualizedBodyProps extends VibeComponentProps {
  items: ComponentProps<typeof VirtualizedList>["items"];
  rowRenderer: (item: VirtualizedListItem["value"]) => JSX.Element;
  onScroll?: (horizontalScrollDirection: ScrollDirection, scrollTop: number, scrollUpdateWasRequested: boolean) => void;
}

const TableVirtualizedBody: FC<ITableVirtualizedBodyProps> = ({ items, rowRenderer, onScroll }) => {
  const itemRenderer: ComponentProps<typeof VirtualizedList>["itemRenderer"] = useCallback(
    (value, index: number, style: CSSProperties) => {
      const element = rowRenderer(value);
      return React.cloneElement(element, { style, key: index });
    },
    [rowRenderer]
  );
  const { size } = useContext(TableContext);

  return (
    <TableBody className={styles.tableBody}>
      <VirtualizedList
        items={items}
        itemRenderer={itemRenderer}
        getItemHeight={() => RowHeights[size]}
        layout="vertical"
        onScroll={onScroll}
      />
    </TableBody>
  );
};

export default TableVirtualizedBody;
