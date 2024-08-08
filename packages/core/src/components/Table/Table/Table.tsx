import React, { forwardRef, ReactElement } from "react";
import cx from "classnames";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { TableHeaderProps } from "../TableHeader/TableHeader";
import { TableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { RowHeights, RowSizes as RowSizesEnum } from "./TableConsts";
import { RowSizes } from "./Table.types";
import styles from "./Table.module.scss";
import { TableProvider } from "../context/TableContext/TableContext";
import { TableRowMenuProvider } from "../context/TableRowMenuContext/TableRowMenuContext";
import TableRoot from "./TableRoot";
import { SubIcon } from "../../Icon";

export type TableLoadingStateType = "long-text" | "medium-text" | "circle" | "rectangle";

type Width = number | `${number}%` | `${number}px` | `${number}fr`;

export interface TableColumn {
  id: string;
  title: string;
  infoContent?: string;
  width?: Width | { min: Width; max: Width };
  icon?: SubIcon;
  loadingStateType?: TableLoadingStateType;
}

export interface TableProps extends VibeComponentProps {
  columns: TableColumn[];
  dataState?: {
    isLoading?: boolean;
    isError?: boolean;
  };
  errorState: ReactElement;
  emptyState: ReactElement;
  style?: React.CSSProperties;
  children?:
    | ReactElement<TableHeaderProps>
    | ReactElement<TableBodyProps>
    | Array<ReactElement<TableHeaderProps> | ReactElement<TableBodyProps>>;
  size?: RowSizes;
  withoutBorder?: boolean;
}

const Table: VibeComponent<TableProps, HTMLDivElement> & {
  sizes?: typeof RowSizesEnum;
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
      size = "medium",
      withoutBorder
    }: TableProps,
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

export default withStaticProps(Table, { sizes: RowSizesEnum });
