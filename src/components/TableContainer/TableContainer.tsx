import React, { FC, PropsWithChildren, ReactNode } from "react";
import cx from "classnames";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./TableContainer.module.scss";

export interface TableContainerProps extends VibeComponentProps, PropsWithChildren {
  children: ReactNode;
}

const TableContainer: FC<TableContainerProps> = ({ className, children }) => {
  return <div className={cx(styles.tableContainer, className)}>{children}</div>;
};
export default TableContainer;
