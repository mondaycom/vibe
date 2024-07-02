import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import Text from "../../Text/Text";
import styles from "./TableCell.module.scss";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableCellProps extends VibeComponentProps {
  children?: React.ReactNode;
  sticky?: boolean;
}

const TableCell: VibeComponent<ITableCellProps, HTMLDivElement> = forwardRef(
  ({ sticky, id, className, "data-testid": dataTestId, children }, ref) => {
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
          <Text type={Text.types.TEXT2} color={Text.colors.PRIMARY}>
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
