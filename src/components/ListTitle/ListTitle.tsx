import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "../../types/VibeComponentProps";
import Text from "../Text/Text";
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
      <Text
        size="medium"
        weight="bold"
        data-testid={dataTestId || id}
        aria-level={3}
        tabIndex={tabIndex}
        role="heading"
        ref={mergedRef}
        className={cx(styles.listTitle, className)}
        id={id}
      >
        {children}
      </Text>
    );
  }
);

Object.assign(ListTitle, {
  // Used by VirtualizedListItems
  displayName: "ListTitle"
});

export default ListTitle;
