import React, { FC, forwardRef, ReactElement, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../../hooks/useMergeRef";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./TabPanel.module.scss";

export interface TabPanelProps extends VibeComponentProps {
  children?: ReactElement | ReactElement[] | string;
  index?: number;
}

const TabPanel: FC<TabPanelProps> = forwardRef(({ className, id, children, index, "data-testid": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRef(ref, componentRef);

  return (
    <div
      key={`${id}_${index}`}
      ref={mergedRef}
      className={cx(styles.tabPanelWrapper, className)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB_PANEL, id)}
      role="tabpanel"
    >
      {children}
    </div>
  );
});

export default TabPanel;
