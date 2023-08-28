import React, { ComponentProps, CSSProperties, FC, useCallback } from "react";
import { VibeComponentProps } from "../../../types";
import VirtualizedList, { VirtualizedListItem } from "../../VirtualizedList/VirtualizedList";
import TableBody from "../TableBody/TableBody";

export interface ITableVirtualizedBodyProps extends VibeComponentProps {
  items: ComponentProps<typeof VirtualizedList>["items"];
  rowRenderer: (item: VirtualizedListItem["value"]) => JSX.Element;
}

const TableVirtualizedBody: FC<ITableVirtualizedBodyProps> = ({ items, rowRenderer }) => {
  const itemRenderer: ComponentProps<typeof VirtualizedList>["itemRenderer"] = useCallback(
    (value, index: number, style: CSSProperties) => {
      const element = rowRenderer(value);
      return React.cloneElement(element, { style, key: index });
    },
    [rowRenderer]
  );

  return (
    <TableBody>
      <VirtualizedList items={items} itemRenderer={itemRenderer} getItemHeight={() => 40} layout="vertical" />
    </TableBody>
  );
};

export default TableVirtualizedBody;
