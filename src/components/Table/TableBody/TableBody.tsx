import React, { ReactElement, ComponentProps, useContext, forwardRef, useRef } from "react";
import cx from "classnames";
import { VibeComponentProps } from "../../../types";
import TableRow, { ITableRowProps } from "../TableRow/TableRow";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
import styles from "./TableBody.module.scss";
import { TableContext } from "../Table/Table";
import TableCellSkeleton from "../TableCellSkeleton/TableCellSkeleton";
import { SKELETON_ROWS_AMOUNT } from "../Table/TableConsts";
import { getLoadingTypeForCell } from "../Table/tableHelpers";
import VibeComponent from "../../../types/VibeComponent";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableBodyProps extends VibeComponentProps {
  children?:
    | ReactElement<ITableRowProps>
    | ReactElement<ITableRowProps>[]
    | ReactElement<ComponentProps<typeof VirtualizedList>>;
}

const TableBody: VibeComponent<ITableBodyProps> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const { dataState, emptyState, errorState, columns } = useContext(TableContext);
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
        ref={mergedRef}
        id={id}
        className={cx(styles.tableBody, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_BODY, id)}
        role="rowgroup"
      >
        {isLoading ? skeletonRender : isError ? errorState : children || emptyState}
      </div>
    );
  }
);

export default TableBody;
