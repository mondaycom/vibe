import React, { forwardRef, useMemo } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { RowSizes } from "../Table/TableConsts";

export interface ITableHeaderProps extends VibeComponentProps {
  children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
  size?: RowSizes;
}

const TableHeader: VibeComponent<ITableHeaderProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children, size = RowSizes.MEDIUM }, ref) => {
    const sizeStyle = useMemo(() => {
      if (typeof size === "number") {
        return { height: `${size}px` };
      }
      return {};
    }, [size]);

    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableHeader, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_HEADER, id)}
        role="rowgroup"
        style={sizeStyle}
      >
        {children}
      </div>
    );
  }
);

export default TableHeader;
