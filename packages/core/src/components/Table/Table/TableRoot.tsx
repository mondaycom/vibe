import React, { forwardRef, UIEventHandler, useCallback } from "react";
import { ITableProps } from "./Table";
import cx from "classnames";
import { useTable } from "../context/TableContext/TableContext";
import styles from "./TableRoot.module.scss";
import useMergeRef from "../../../hooks/useMergeRef";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";

type TableRootProps = Pick<ITableProps, "id" | "className" | "data-testid" | "style" | "children">;

const TableRoot = forwardRef(
  (
    { id, className, "data-testid": dataTestId, style, children }: TableRootProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { tableRootRef, isVirtualized, scrollLeft, onTableRootScroll } = useTable();
    const { resetHoveredRow } = useTableRowMenu();
    const mergedRef = useMergeRef(tableRootRef, ref);

    const onScroll = useCallback<UIEventHandler<HTMLDivElement>>(
      e => {
        resetHoveredRow();
        onTableRootScroll(e);
      },
      [resetHoveredRow, onTableRootScroll]
    );

    return (
      <div
        ref={mergedRef}
        id={id}
        className={cx(className, { [styles.virtualized]: isVirtualized, [styles.hasScroll]: scrollLeft > 0 })}
        data-testid={dataTestId}
        role="table"
        style={style}
        onScroll={onScroll}
      >
        {children}
      </div>
    );
  }
);

export default TableRoot;
