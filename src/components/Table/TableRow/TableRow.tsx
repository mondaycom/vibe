import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
import styles from "./TableRow.module.scss";
import { ITableCellProps } from "../TableCell/TableCell";

export interface ITableRowProps extends VibeComponentProps {
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: FC<ITableRowProps> = ({ children, style = {} }) => {
  return (
    <div role="row" className={styles.tableRow} style={style}>
      {children}
    </div>
  );
};

export default TableRow;
