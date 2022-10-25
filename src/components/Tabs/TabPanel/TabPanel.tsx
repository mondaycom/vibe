import React, { FC, forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import VibeComponentProps from "../../../types/VibeComponentProps";
import styles from "./TabPanel.module.scss";

export interface TabPanelProps extends VibeComponentProps {
  children?: string;
  index?: number;
}

const TabPanel: FC<TabPanelProps> = forwardRef(({ className, id, children, index, "data-testid": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      key={`${id}_${index}`}
      ref={mergedRef}
      className={cx(styles.tabPanelWrapper, "tab-panel--wrapper", className)}
      id={id}
      role="tabpanel"
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TAB_PANEL, id)}
    >
      {children}
    </div>
  );
});

export default TabPanel;
