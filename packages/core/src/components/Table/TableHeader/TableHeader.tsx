import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { useTable } from "../context/TableContext/TableContext";
import useMergeRef from "../../../hooks/useMergeRef";

export interface ITableHeaderProps extends VibeComponentProps {
  children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
}

const TableHeader: VibeComponent<ITableHeaderProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
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
