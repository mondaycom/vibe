import React, { ComponentProps, FC } from "react";
import { VibeComponentProps } from "../../../types";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
import TableBody from "../TableBody/TableBody";

export interface ITableVirtualizedBodyProps extends VibeComponentProps {
  items: ComponentProps<typeof VirtualizedList>["items"];
  itemRenderer: ComponentProps<typeof VirtualizedList>["itemRenderer"];
}

const TableVirtualizedBody: FC<ITableVirtualizedBodyProps> = ({ items, itemRenderer }) => {
  return (
    <TableBody>
      <VirtualizedList items={items} itemRenderer={itemRenderer} getItemHeight={() => 40} layout="vertical" />
    </TableBody>
  );
};

export default TableVirtualizedBody;
