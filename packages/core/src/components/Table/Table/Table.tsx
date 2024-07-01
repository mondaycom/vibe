import React, { forwardRef, ReactElement } from "react";
import cx from "classnames";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { RowHeights, RowSizes } from "./TableConsts";
import styles from "./Table.module.scss";
import { TableProvider } from "../context/TableContext/TableContext";
import { TableRowMenuProvider } from "../context/TableRowMenuContext/TableRowMenuContext";
import TableRoot from "./TableRoot";

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

export interface ITableProps extends VibeComponentProps {
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
      "--table-row-size": `${RowHeights[size]}px`,
      ...style
    } as React.CSSProperties;

    const testId = dataTestId || getTestId(ComponentDefaultTestId.TABLE, id);

    return (
      <TableProvider value={{ columns, dataState, emptyState, errorState, size }}>
        <TableRowMenuProvider>
          <TableRoot ref={ref} id={id} className={classNames} style={calculatedStyle} data-testid={testId}>
            {children}
          </TableRoot>
        </TableRowMenuProvider>
      </TableProvider>
    );
  }
);

export default withStaticProps(Table, { sizes: RowSizes });
