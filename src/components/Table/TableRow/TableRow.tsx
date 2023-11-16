import React, { forwardRef, useCallback, useRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import { useKeyEvent, useMergeRefs } from "../../../hooks";
import { SELECTION_KEYS } from "../../../constants";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TableRow.module.scss";

export interface ITableRowProps extends VibeComponentProps {
  /**
   * Does the row have a highlighted style
   */
  highlighted?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(
  ({ highlighted, onClick, children, style, id, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [componentRef, ref] });
    useKeyEvent({
      keys: SELECTION_KEYS,
      ref: componentRef,
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
        ref={mergedRef}
        role="row"
        aria-selected={highlighted || false}
        className={styles.tableRow}
        style={style}
        tabIndex={onClick ? 0 : -1}
        onClick={onClickCallback}
      >
        {children}
      </div>
    );
  }
);

export default TableRow;
