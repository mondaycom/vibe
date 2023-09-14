import React, { FC, ReactElement, ComponentProps, useContext } from "react";
import { VibeComponentProps } from "../../../types";
import TableRow, { ITableRowProps } from "../TableRow/TableRow";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
import styles from "./TableBody.module.scss";
import { TableContext } from "../Table/Table";
import TableCellSkeleton from "../TableCellSkeleton/TableCellSkeleton";
import { SKELETON_ROWS_AMOUNT } from "../Table/TableConsts";

export interface ITableBodyProps extends VibeComponentProps {
  children?:
    | ReactElement<ITableRowProps>
    | ReactElement<ITableRowProps>[]
    | ReactElement<ComponentProps<typeof VirtualizedList>>;
}

const TableBody: FC<ITableBodyProps> = ({ children }) => {
  const { dataState, emptyState, errorState, columns } = useContext(TableContext);
  const { isLoading, isError } = dataState || {};

  const skeletonRender = [...new Array(SKELETON_ROWS_AMOUNT)].map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {columns.map(({ contentSkeleton }, columnIndex) => {
        return (
          <TableCellSkeleton
            key={`${rowIndex}-${columnIndex}`}
            type={Array.isArray(contentSkeleton) ? contentSkeleton[rowIndex % contentSkeleton.length] : contentSkeleton}
          />
        );
      })}
    </TableRow>
  ));

  return (
    <div role="rowgroup" className={styles.tableBody}>
      {isLoading ? skeletonRender : isError ? errorState : children || emptyState}
    </div>
  );
};

export default TableBody;
