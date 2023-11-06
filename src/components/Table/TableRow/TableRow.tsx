import React, { FC, useCallback, useRef } from "react";
import styles from "./TableRow.module.scss";
import { VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import { useKeyEvent } from "../../../hooks";
import { SELECTION_KEYS } from "../../../constants";

export interface ITableRowProps extends VibeComponentProps {
  highlight?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(({ highlight, onClick, children, style }, ref) => {
  const ref = useRef(null);
  useKeyEvent({
    keys: SELECTION_KEYS,
    ref,
    callback: onClick,
    preventDefault: true
  });

  const onClickCallback = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      onClick?.(event);
    },
    [onClick]
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
      ref={ref}
      role="row"
      aria-selected={highlight || false}
      className={styles.tableRow}
      style={style}
      tabIndex={onClick ? 0 : -1}
      onClick={onClickCallback}
    >
      {children}
    </div>
  );
});

export default TableRow;
