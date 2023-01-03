import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ListTitle.module.scss";

export interface ListTitleProps extends VibeComponentProps {
  tabIndex?: number;
  children?: string;
}

const ListTitle: React.FC<ListTitleProps> = forwardRef(
  ({ className, id, children, tabIndex, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        aria-level={3}
        tabIndex={tabIndex}
        role="heading"
        ref={mergedRef}
        className={cx(styles.listTitle, "list-title", className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_TITLE, id)}
      >
        {children}
      </div>
    );
  }
);

Object.assign(ListTitle, {
  // Used by VirtualizedListItems
  displayName: "ListTitle"
});

export default ListTitle;
