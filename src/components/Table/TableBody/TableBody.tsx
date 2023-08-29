import React, { FC, ReactElement, ComponentProps, useContext } from "react";
import { VibeComponentProps } from "../../../types";
import { ITableRowProps } from "../TableRow/TableRow";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
import styles from "./TableBody.module.scss";
import { TableContext } from "../Table/Table";

export interface ITableBodyProps extends VibeComponentProps {
  children?:
    | ReactElement<ITableRowProps>
    | ReactElement<ITableRowProps>[]
    | ReactElement<ComponentProps<typeof VirtualizedList>>;
}

const TableBody: FC<ITableBodyProps> = ({ children }) => {
  const { dataState, emptyState, errorState } = useContext(TableContext);

  return (
    <div role="rowgroup" className={styles.tableBody}>
      {dataState?.isError ? errorState : children || emptyState}
    </div>
  );
};

export default TableBody;
