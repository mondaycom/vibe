import React, { forwardRef, useRef } from "react";
import { TableContainerProvider } from "../context/TableContainerContext/TableContainerContext";
import { TableContainerProps } from "./TableContainer.types";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import cx from "classnames";
import styles from "./TableContainer.module.scss";

const TableContainer = forwardRef(
  (
    { id, className, "data-testid": dataTestId, style, children }: TableContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const menuContainerRef = useRef<HTMLDivElement>(null);

    return (
      <TableContainerProvider value={{ menuContainerRef }}>
        <div
          ref={ref}
          id={id}
          className={cx(styles.tableContainer, className)}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_CONTAINER, id)}
          style={style}
        >
          <div ref={menuContainerRef} className={styles.menuContainer} />
          {children}
        </div>
      </TableContainerProvider>
    );
  }
);

export default TableContainer;
