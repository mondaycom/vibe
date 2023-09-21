import React, { forwardRef, useRef } from "react";
import { VibeComponentProps } from "../../../types";
import Text from "../../Text/Text";
import styles from "./TableCell.module.scss";
import VibeComponent from "../../../types/VibeComponent";
import useMergeRefs from "../../../hooks/useMergeRefs";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableCellProps extends VibeComponentProps {
  children?: React.ReactNode;
}

const TableCell: VibeComponent<ITableCellProps> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const isSingleChild = React.Children.count(children) === 1;
    const typeOfFirstChild = typeof React.Children.toArray(children)[0];
    const isFirstChildString = typeOfFirstChild === "string" || typeOfFirstChild === "number";

    return (
      <div
        ref={mergedRef}
        id={id}
        className={cx(styles.tableCell, className)}
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
