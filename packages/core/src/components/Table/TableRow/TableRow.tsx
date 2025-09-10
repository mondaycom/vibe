import React, { forwardRef, useCallback, useRef } from "react";
import { type VibeComponentProps } from "@vibe/shared";
import { type TableCellProps } from "../TableCell/TableCell";
import useMergeRef from "../../../hooks/useMergeRef";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import cx from "classnames";
import styles from "./TableRow.module.scss";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";

export interface TableRowProps extends VibeComponentProps {
  /**
   * If true, applies a highlighted style to the row.
   */
  highlighted?: boolean;
  /**
   * The child components inside the table row, typically `<TableCell />` elements.
   */
  children?: React.ReactElement<TableCellProps> | React.ReactElement<TableCellProps>[];
  /**
   * Custom styles applied to the table row.
   */
  style?: React.CSSProperties;
}

const TableRow = forwardRef(
  (
    { highlighted, children, style, id, className, "data-testid": dataTestId }: TableRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef(componentRef, ref);
    const { onMouseOverRow, onMouseLeaveRow } = useTableRowMenu();

    const onMouseEnter = useCallback(() => {
      onMouseOverRow(componentRef);
    }, [onMouseOverRow]);

    return (
      <div
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
        ref={mergedRef}
        role="row"
        aria-selected={highlighted || false}
        className={cx(styles.tableRow, className)}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeaveRow}
        tabIndex={-1}
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
