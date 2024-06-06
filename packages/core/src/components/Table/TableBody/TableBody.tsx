import React, { ReactElement, ComponentProps, forwardRef } from "react";
import cx from "classnames";
import { VibeComponent, VibeComponentProps } from "../../../types";
import TableRow, { ITableRowProps } from "../TableRow/TableRow";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
import styles from "./TableBody.module.scss";
import { useTable } from "../context/TableContext/TableContext";
import TableCellSkeleton from "../TableCellSkeleton/TableCellSkeleton";
import { SKELETON_ROWS_AMOUNT } from "../Table/TableConsts";
import { getLoadingTypeForCell } from "../Table/tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableBodyProps extends VibeComponentProps {
  children?:
    | ReactElement<ITableRowProps>
    | ReactElement<ITableRowProps>[]
    | ReactElement<ComponentProps<typeof VirtualizedList>>;
}

const TableBody: VibeComponent<ITableBodyProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    const { dataState, emptyState, errorState, columns } = useTable();
    const { isLoading, isError } = dataState || {};

    const skeletonRender = [...new Array(SKELETON_ROWS_AMOUNT)].map((_, rowIndex) => (
      <TableRow key={rowIndex}>
        {columns.map(({ loadingStateType }, columnIndex) => (
          <TableCellSkeleton
            key={`${rowIndex}-${columnIndex}`}
            type={getLoadingTypeForCell(loadingStateType, rowIndex)}
          />
        ))}
      </TableRow>
    ));

    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableBody, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_BODY, id)}
        role="rowgroup"
      >
        {isLoading
          ? skeletonRender
          : isError
          ? errorState
          : !children || (Array.isArray(children) && children.length === 0)
          ? emptyState
          : children}
      </div>
    );
  }
);

export default TableBody;
