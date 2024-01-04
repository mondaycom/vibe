import React, { forwardRef, ReactElement } from "react";
import cx from "classnames";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { RowSizes } from "./TableConsts";
import styles from "./Table.module.scss";

export type TableLoadingStateType = "long-text" | "medium-text" | "circle" | "rectangle";

type Width = number | `${number}%` | `${number}px` | `${number}fr`;

export interface ITableColumn {
  id: string;
  title: string;
  infoContent?: string;
  width?: Width | { min: Width; max: Width };
  icon?: SubIcon;
  loadingStateType?: TableLoadingStateType;
}

interface ITableProps extends VibeComponentProps {
  columns: ITableColumn[];
  dataState?: {
    isLoading?: boolean;
    isError?: boolean;
  };
  errorState: ReactElement;
  emptyState: ReactElement;
  style?: React.CSSProperties;
  children?:
    | ReactElement<ITableHeaderProps>
    | ReactElement<ITableBodyProps>
    | Array<ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps>>;
  size?: RowSizes;
  withoutBorder?: boolean;
}

interface ITableContext {
  columns: ITableProps["columns"];
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
}

export const TableContext = React.createContext<ITableContext>(null);

const Table: VibeComponent<ITableProps, HTMLDivElement> & {
  sizes?: typeof RowSizes;
} = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      columns,
      errorState,
      emptyState,
      dataState,
      style,
      children,
      size = Table.sizes.MEDIUM,
      withoutBorder
    },
    ref
  ) => {
    const classNames = cx(styles.table, { [styles.border]: !withoutBorder }, className);
    const { gridTemplateColumns } = getTableRowLayoutStyles(columns);

    /**
     * The `--table-grid-template-columns` and `--table-row-size` variables will be available under each <Table /> scope
     * and will be consumed in the stylesheets of its children (<TableHeader />, <TableRow />, <TableHeaderCell />)
     */
    const calculatedStyle = {
      "--table-grid-template-columns": gridTemplateColumns,
      "--table-row-size": size == Table.sizes.MEDIUM ? "var(--row-size-medium)" : "var(--row-size-large)",
      ...style
    } as React.CSSProperties;

    const testId = dataTestId || getTestId(ComponentDefaultTestId.TABLE, id);

    return (
      <TableContext.Provider value={{ columns, emptyState, errorState, dataState }}>
        <div ref={ref} id={id} className={classNames} data-testid={testId} role="table" style={calculatedStyle}>
          {children}
        </div>
      </TableContext.Provider>
    );
  }
);

export default withStaticProps(Table, { sizes: RowSizes });
