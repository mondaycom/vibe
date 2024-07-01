import React, { forwardRef } from "react";
import { useTableContainer } from "../context/TableContainerContext/TableContainerContext";
import { TableContainerProps } from "./TableContainer.types";
import styles from "./TableContainerRoot.module.scss";
import cx from "classnames";

type TableContainerRootProps = TableContainerProps;

const TableContainerRoot = forwardRef(
  (
    { id, className, "data-testid": dataTestId, style, children }: TableContainerRootProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { menuContainerRef } = useTableContainer();

    return (
      <div ref={ref} id={id} className={cx(styles.tableContainer, className)} data-testid={dataTestId} style={style}>
        <div ref={menuContainerRef} className={styles.menuContainer} />
        {children}
      </div>
    );
  }
);

export default TableContainerRoot;
