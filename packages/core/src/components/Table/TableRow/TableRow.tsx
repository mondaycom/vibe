import React, { forwardRef, MouseEvent, useRef } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
import useMergeRef from "../../../hooks/useMergeRef";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import cx from "classnames";
import styles from "./TableRow.module.scss";
import { useSwitch } from "../../../hooks";

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

export interface ITableRowProps extends VibeComponentProps {
  /**
   * Does the row have a highlighted style
   */
  highlighted?: boolean;
  children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
  style?: React.CSSProperties;
  expandableRowRenderer?: () => React.ReactNode;
  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

const TableRow: VibeComponent<ITableRowProps, HTMLDivElement> = forwardRef(
  (
    {
      highlighted,
      children,
      style,
      id,
      className,
      "data-testid": dataTestId,
      onClick = () => {},
      onKeyDown = () => {},
      expandableRowRenderer
    },
    ref
  ) => {
    const { isChecked: shouldDisplayExpandableContent, onChange: toggleExpandableContent } = useSwitch();
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(componentRef, ref);

    const onClickCallback = (event: MouseEvent) => {
      if (expandableRowRenderer) {
        toggleExpandableContent();
      }

      onClick(event);
    };

    const onKeyDownCallback = (e: React.KeyboardEvent<HTMLElement>) => {
      const expandableContentTriggerKeys = [ENTER_KEY, SPACE_KEY];

      const shouldToggleRowExpand =
        (e?.target as HTMLDivElement)?.role === "row" && expandableContentTriggerKeys.includes(e.key);

      if (shouldToggleRowExpand) {
        toggleExpandableContent();
      }

      onKeyDown(e);
    };

    const renderExpandableContentIfNeeded = () => {
      const shouldRenderExpandableContent = !!expandableRowRenderer && shouldDisplayExpandableContent;

      if (!shouldRenderExpandableContent) {
        return <></>;
      }

      return (
        <div className={cx(styles.expandableRowContent, { visible: shouldDisplayExpandableContent })}>
          {expandableRowRenderer()}
        </div>
      );
    };

    return (
      <>
        <div
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW, id)}
          ref={mergedRef}
          role="row"
          aria-selected={highlighted || false}
          className={cx(styles.tableRow, { withExpandableContent: !!expandableRowRenderer }, className)}
          style={style}
          onClick={onClickCallback}
          onKeyDown={onKeyDownCallback}
          tabIndex={0}
        >
          {children}
        </div>
        {renderExpandableContentIfNeeded()}
      </>
    );
  }
);

export default TableRow;
