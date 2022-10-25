import React, { FC, forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import VibeComponentProps from "../../../types/VibeComponentProps";
import "./TabPanel.scss";

export interface TabPanelProps extends VibeComponentProps {
  children?: string;
  index?: number;
}

const TabPanel: FC<TabPanelProps> = forwardRef(({ className, id, children, index }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div key={`${id}_${index}`} ref={mergedRef} className={cx("tab-panel--wrapper", className)} id={id} role="tabpanel">
      {children}
    </div>
  );
});

export default TabPanel;
