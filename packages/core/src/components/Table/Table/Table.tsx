import React, { forwardRef, ReactElement, UIEventHandler, useCallback, useMemo, useRef, useState } from "react";
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
import useMergeRef from "../../../hooks/useMergeRef";
import { TableProviderValue } from "../context/TableContext/TableContext.types";
import { TableRowMenuProviderValue } from "../context/TableRowMenuContext/TableRowMenuContext.types";

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
    const tableRootRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef(ref, tableRootRef);

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hoveredRowRef, setHoveredRowRef] = useState<React.RefObject<HTMLDivElement>>(null);

    const resetHoveredRow = useCallback(() => {
      setIsMenuOpen(false);
      setHoveredRowRef(null);
    }, []);

    const [isVirtualized, setIsVirtualized] = useState<boolean>(false);
    const markTableAsVirtualized = useCallback(() => {
      setIsVirtualized(true);
    }, []);

    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const onScroll = useCallback<UIEventHandler<HTMLDivElement>>(
      e => {
        resetHoveredRow();
        if (!isVirtualized) {
          const newLeft = (e.target as HTMLDivElement).scrollLeft;
          setScrollLeft(newLeft);
        }
      },
      [resetHoveredRow, isVirtualized]
    );

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

    const tableProviderValue = useMemo<TableProviderValue>(
      () => ({
        columns,
        dataState,
        emptyState,
        errorState,
        size,
        tableRootRef,
        isVirtualized,
        markTableAsVirtualized,
        scrollLeft,
        setScrollLeft: (scrollAmount: number) => setScrollLeft(scrollAmount)
      }),
      [columns, dataState, emptyState, errorState, isVirtualized, markTableAsVirtualized, scrollLeft, size]
    );

    const tableRowMenuProviderValue = useMemo<TableRowMenuProviderValue>(
      () => ({
        tableRootRef,
        hoveredRowRef,
        isMenuOpen,
        resetHoveredRow,
        setHoveredRowRef: (rowRef: React.RefObject<HTMLDivElement>) => setHoveredRowRef(rowRef),
        setIsMenuOpen: (isOpen: boolean) => setIsMenuOpen(isOpen)
      }),
      [hoveredRowRef, isMenuOpen, resetHoveredRow, setHoveredRowRef]
    );

    return (
      <TableProvider value={tableProviderValue}>
        <TableRowMenuProvider value={tableRowMenuProviderValue}>
          <div
            ref={mergedRef}
            id={id}
            className={cx(
              styles.table,
              {
                [styles.border]: !withoutBorder,
                [styles.virtualized]: isVirtualized,
                [styles.hasScroll]: scrollLeft > 0
              },
              className
            )}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE, id)}
            role="table"
            style={calculatedStyle}
            onScroll={onScroll}
          >
            {children}
          </div>
        </TableRowMenuProvider>
      </TableProvider>
    );
  }
);

export default withStaticProps(Table, { sizes: RowSizes });
