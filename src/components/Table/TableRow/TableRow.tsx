import React, { forwardRef, useRef } from "react";
import { VibeComponentProps } from "../../../types";
import styles from "./TableRow.module.scss";
import { ITableCellProps } from "../TableCell/TableCell";
import useMergeRefs from "../../../hooks/useMergeRefs";
import VibeComponent from "../../../types/VibeComponent";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableRowProps extends VibeComponentProps {
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<ITableRowProps> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        ref={mergedRef}
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
