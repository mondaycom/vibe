import React, { forwardRef, useRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import useMergeRef from "../../../hooks/useMergeRef";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import cx from "classnames";
import styles from "./TableRow.module.scss";

export interface ITableRowProps extends VibeComponentProps {
  /**
   * Does the row have a highlighted style
   */
  highlighted?: boolean;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(
  ({ highlighted, children, style, id, className, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(componentRef, ref);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
        ref={mergedRef}
        role="row"
        aria-selected={highlighted || false}
        className={cx(styles.tableRow, className)}
        style={style}
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
