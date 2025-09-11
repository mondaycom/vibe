import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import type VibeComponentProps from "../../types/VibeComponentProps";
import Text from "../Text/Text";
import styles from "./ListTitle.module.scss";

export interface ListTitleProps extends VibeComponentProps {
  /**
   * The tab index for keyboard navigation.
   */
  tabIndex?: number;
  /**
   * The title text.
   */
  children?: string;
}

const ListTitle: React.FC<ListTitleProps> = forwardRef(
  ({ className, id, children, tabIndex, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Text
        type="text1"
        weight="medium"
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
