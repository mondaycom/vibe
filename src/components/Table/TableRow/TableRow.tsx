import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableRow.module.scss";
import { ITableCellProps } from "../TableCell/TableCell";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableRowProps extends VibeComponentProps {
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableRow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
        role="row"
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
