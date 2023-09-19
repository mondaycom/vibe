import React, { FC, useCallback, useRef } from "react";
import styles from "./TableRow.module.scss";
import { VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import { useKeyEvent } from "../../../hooks";
import { SELECTION_KEYS } from "../../../constants";
import { NOOP } from "../../../utils/function-utils";

export interface ITableRowProps extends VibeComponentProps {
  highlight?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: FC<ITableRowProps> = ({ highlight = false, onClick = NOOP, children, style = {} }) => {
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
      onClick(event);
    },
    [onClick]
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={ref}
      role="row"
      aria-selected={highlight}
      className={styles.tableRow}
      style={style}
      tabIndex={onClick ? 0 : -1}
      onClick={onClickCallback}
    >
      {children}
    </div>
  );
};

export default TableRow;
