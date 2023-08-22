import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
import styles from "./TableHeader.module.scss";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";

export interface ITableHeaderProps extends VibeComponentProps {
  children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
}

const TableHeader: FC<ITableHeaderProps> = ({ children }) => {
  return (
    <div role="rowgroup" className={styles.tableHeader}>
      {children}
    </div>
  );
};

export default TableHeader;
