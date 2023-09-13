import React, { FC, ReactElement } from "react";
import cx from "classnames";
import { VibeComponentProps } from "../../../types";
import styles from "./Table.module.scss";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface ITableColumn {
  id: string;
  title: string;
  infoContent?: string;
  width?: number | { min: number; max: number };
}

interface ITableProps extends VibeComponentProps {
  columns: ITableColumn[];
  dataState?: {
    isLoading?: boolean;
    isError?: boolean;
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
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
}

export const TableContext = React.createContext<ITableContext>(null);

const Table: FC<ITableProps> = ({
  id,
  className,
  "data-testid": dataTestId,
  columns,
  errorState,
  emptyState,
  dataState,
  children
}) => {
  const classNames = cx(styles.table, className);
  const { gridTemplateColumns } = getTableRowLayoutStyles(columns);

  {
    /* The `--table-grid-template-columns` variable will be available under each <Table /> scope
     * and will be consumed in the stylesheets of its children (<TableHeader />, <TableRow />) */
  }
  const style = { "--table-grid-template-columns": gridTemplateColumns } as React.CSSProperties;

  const testId = dataTestId || getTestId(ComponentDefaultTestId.TABLE, id);

  return (
    <TableContext.Provider value={{ columns, emptyState, errorState, dataState }}>
      <div id={id} className={classNames} data-testid={testId} role="table" style={style}>
        {children}
      </div>
    </TableContext.Provider>
  );
};

export default Table;
