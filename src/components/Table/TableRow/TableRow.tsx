import React, { forwardRef, useMemo, useRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import { useMergeRefs } from "../../../hooks";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TableRow.module.scss";
import { RowSize, RowSizes } from "../Table/TableConsts";

export interface ITableRowProps extends VibeComponentProps {
  /**
   * Does the row have a highlighted style
   */
  highlighted?: boolean;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
  size?: RowSize;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(
  ({ highlighted, children, style, id, "data-testid": dataTestId, size = RowSizes.MEDIUM }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [componentRef, ref] });

    const sizeStyle = useMemo(() => {
      if (typeof size === "number") {
        return { height: `${size}px` };
      }
      return {};
    }, [size]);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
        ref={mergedRef}
        role="row"
        aria-selected={highlighted || false}
        className={styles.tableRow}
        style={{ ...sizeStyle, ...style }}
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
