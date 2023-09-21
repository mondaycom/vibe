import React, { forwardRef, useRef } from "react";
import { VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import VibeComponent from "../../../types/VibeComponent";
import useMergeRefs from "../../../hooks/useMergeRefs";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableHeaderProps extends VibeComponentProps {
  children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
}

const TableHeader: VibeComponent<ITableHeaderProps> = forwardRef(
  ({ id, className, "data-testid": dataTestId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        ref={mergedRef}
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
