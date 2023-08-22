import React, { FC, ReactElement } from "react";
import cx from "classnames";
import { VibeComponentProps } from "../../../types";
import styles from "./Table.module.scss";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";

export interface ITableColumn {
  id: string;
  title: string;
  infoContent?: string;
  width?: number | { min: number; max: number };
}

interface ITableProps extends VibeComponentProps {
  columns: ITableColumn[];
  dataState: {
    isError: boolean;
    hasMoreResults: boolean;
  };
  errorState: ReactElement;
  emptyState: ReactElement;
  children?:
    | ReactElement<ITableHeaderProps>
    | ReactElement<ITableBodyProps>
    | Array<ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps>>;
}

interface ITableContext {
  columns: ITableProps["columns"];
  dataState: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
}

export const TableContext = React.createContext<ITableContext>(null);

const Table: FC<ITableProps> = ({
  id,
  className,
  "data-testid": dataTestId,
  columns,
  emptyState,
  dataState,
  children
}) => {
  const classNames = cx(styles.table, className);
  const { gridTemplateColumns } = getTableRowLayoutStyles(columns);
  const style = { "--table-grid-template-columns": gridTemplateColumns } as React.CSSProperties;

  return (
    <TableContext.Provider value={{ columns, emptyState, dataState }}>
      <div id={id} className={classNames} data-testid={dataTestId} role="table" style={style}>
        {children}
      </div>
    </TableContext.Provider>
  );
};

export default Table;
