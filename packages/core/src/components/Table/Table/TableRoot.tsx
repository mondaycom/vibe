import React, { forwardRef } from "react";
import { ITableProps } from "./Table";
import cx from "classnames";
import { useTable } from "../context/TableContext/TableContext";
import styles from "./TableRoot.module.scss";
import useMergeRef from "../../../hooks/useMergeRef";

type TableRootProps = Pick<ITableProps, "id" | "className" | "data-testid" | "style" | "children">;

const TableRoot = forwardRef(
  (
    { id, className, "data-testid": dataTestId, style, children }: TableRootProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { isVirtualized, scrollLeft, onTableRootScroll } = useTable();
    const { tableRootRef, isVirtualized, scrollLeft, onTableRootScroll } = useTable();
    const mergedRef = useMergeRef(tableRootRef, ref);


    return (
      <div
        ref={mergedRef}
        id={id}
        className={cx(className, { [styles.virtualized]: isVirtualized, [styles.hasScroll]: scrollLeft > 0 })}
        data-testid={dataTestId}
        role="table"
        style={style}
        onScroll={onTableRootScroll}
      >
        {children}
      </div>
    );
  }
);

export default TableRoot;
