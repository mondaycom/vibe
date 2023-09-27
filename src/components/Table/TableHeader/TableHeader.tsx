import React, { forwardRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableHeaderProps extends VibeComponentProps {
  children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
}

const TableHeader: VibeComponent<ITableHeaderProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        className={cx(styles.tableHeader, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_HEADER, id)}
        role="rowgroup"
      >
        {children}
      </div>
    );
  }
);

export default TableHeader;
