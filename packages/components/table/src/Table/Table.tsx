import React, {
  forwardRef,
  type ReactElement,
  type UIEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";
import cx from "classnames";
import { type VibeComponentProps, withStaticProps, getTestId, ComponentDefaultTestId, ComponentVibeId } from "@vibe/shared";
import { type TableHeaderProps } from "../TableHeader/TableHeader";
import { type TableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { RowHeights, RowSizes as RowSizesEnum } from "./TableConsts";
import { type RowSizes } from "./Table.types";
import styles from "./Table.module.scss";
import { TableProvider } from "../context/TableContext/TableContext";
import { TableRowMenuProvider } from "../context/TableRowMenuContext/TableRowMenuContext";
import { useMergeRef } from "@vibe/shared";
import { type TableProviderValue } from "../context/TableContext/TableContext.types";
import { type TableRowMenuProviderValue } from "../context/TableRowMenuContext/TableRowMenuContext.types";
import { type SubIcon } from "@vibe/icon";

export type TableLoadingStateType = "long-text" | "medium-text" | "circle" | "rectangle";

type Width = number | `${number}%` | `${number}px` | `${number}fr`;

export interface TableColumn {
  /**
   * Unique identifier for the column.
   */
  id: string;
  /**
   * Column title displayed in the header.
   */
  title: string;
  /**
   * Additional information displayed as a tooltip.
   */
  infoContent?: string;
  /**
   * Column width configuration.
   */
  width?: Width | { min: Width; max: Width };
  /**
   * Icon displayed next to the column title.
   */
  icon?: SubIcon;
  /**
   * Loading state type for the column when data is being fetched.
   */
  loadingStateType?: TableLoadingStateType;
}

export interface TableProps extends VibeComponentProps {
  /**
   * Defines the columns of the table.
   */
  columns: TableColumn[];
  /**
   * State of the data being displayed (loading or error).
   */
  dataState?: {
    isLoading?: boolean;
    isError?: boolean;
  };
  /**
   * React element displayed when there is an error state.
   */
  errorState: ReactElement;
  /**
   * React element displayed when there is no data.
   */
  emptyState: ReactElement;
  /**
   * Custom styles for the table.
   */
  style?: React.CSSProperties;
  /**
   * The child components inside the table, such as `<TableHeader />` and `<TableBody />`.
   */
  children?:
    | ReactElement<TableHeaderProps>
    | ReactElement<TableBodyProps>
    | Array<ReactElement<TableHeaderProps> | ReactElement<TableBodyProps>>;
  /**
   * The row size of the table.
   */
  size?: RowSizes;
  /**
   * If true, removes the table's outer border.
   */
  withoutBorder?: boolean;
}

const Table = forwardRef(
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
    ref: React.ForwardedRef<HTMLDivElement>
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

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const onScroll = useCallback<UIEventHandler<HTMLDivElement>>(
      e => {
        resetHoveredRow();
        if (!isVirtualized) {
          const newLeft = (e.target as HTMLDivElement).scrollLeft;
          const hasScroll = newLeft > 0;
          setIsScrolled(prevScroll => (prevScroll !== hasScroll ? hasScroll : prevScroll));
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
        isScrolled,
        setIsScrolled: (scrollLeft: boolean) => setIsScrolled(scrollLeft)
      }),
      [columns, dataState, emptyState, errorState, isVirtualized, markTableAsVirtualized, isScrolled, size]
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
                [styles.hasScroll]: isScrolled
              },
              className
            )}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE, id)}
            data-vibe={ComponentVibeId.TABLE}
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

interface TableStaticProps {
  sizes: typeof RowSizesEnum;
}

export default withStaticProps<TableProps, TableStaticProps>(Table, { sizes: RowSizesEnum });

