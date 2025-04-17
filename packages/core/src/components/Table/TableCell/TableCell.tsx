import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import Text from "../../Text/Text";
import styles from "./TableCell.module.scss";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface TableCellProps extends VibeComponentProps {
  /**
   * The content inside the table cell.
   */
  children?: React.ReactNode;
  /**
   * If true, makes the cell sticky (typically used for frozen columns).
   */
  sticky?: boolean;
}

const TableCell: VibeComponent<TableCellProps, HTMLDivElement> = forwardRef(
  ({ sticky, id, className, "data-testid": dataTestId, children }: TableCellProps, ref) => {
    const isSingleChild = React.Children.count(children) === 1;
    const typeOfFirstChild = typeof React.Children.toArray(children)[0];
    const isFirstChildString = typeOfFirstChild === "string" || typeOfFirstChild === "number";

    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableCell, { [styles.sticky]: sticky }, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_CELL, id)}
        role="cell"
      >
        {isSingleChild && isFirstChildString ? (
          <Text type="text2" color="primary">
            {children}
          </Text>
        ) : (
          children
        )}
      </div>
    );
  }
);

export default TableCell;
