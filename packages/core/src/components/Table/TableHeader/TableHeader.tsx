import React, { forwardRef } from "react";
import { VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { TableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { useTable } from "../context/TableContext/TableContext";
import useMergeRef from "../../../hooks/useMergeRef";

export interface TableHeaderProps extends VibeComponentProps {
  /**
   * The child elements inside the table header, typically `<TableHeaderCell />` components.
   */
  children?: React.ReactElement<TableHeaderCellProps> | React.ReactElement<TableHeaderCellProps>[];
}

const TableHeader = forwardRef(
  (
    { id, className, "data-testid": dataTestId, children }: TableHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { headRef, onHeadScroll, isVirtualized } = useTable();
    const mergedRef = useMergeRef(headRef, ref);

    return (
      <div
        ref={mergedRef}
        id={id}
        className={cx(styles.tableHeader, { [styles.virtualized]: isVirtualized }, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_HEADER, id)}
        role="rowgroup"
        onScroll={onHeadScroll}
      >
        {children}
      </div>
    );
  }
);

export default TableHeader;
