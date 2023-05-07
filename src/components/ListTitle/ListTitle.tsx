import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./ListTitle.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";

export interface ListTitleProps extends VibeComponentProps {
  tabIndex?: number;
  children?: string;
}

const ListTitle: React.FC<ListTitleProps> & { defaultTestId?: string } = forwardRef(
  ({ className, id, children, tabIndex, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_TITLE, id)}
        aria-level={3}
        tabIndex={tabIndex}
        role="heading"
        ref={mergedRef}
        className={cx(styles.listTitle, className)}
        id={id}
      >
        {children}
      </div>
    );
  }
);

Object.assign(ListTitle, {
  // Used by VirtualizedListItems
  displayName: "ListTitle",
  defaultTestId: ComponentDefaultTestId.LIST_TITLE
});

export default ListTitle;
