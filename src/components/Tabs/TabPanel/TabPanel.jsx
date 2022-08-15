import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../../hooks/useMergeRefs";
import styles from "./TabPanel.module.scss";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";

const TabPanel = forwardRef(({ className, id, children, index, dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      key={`${id}_${index}`}
      ref={mergedRef}
      className={cx(styles.tabPanelWrapper, "tab-panel--wrapper", className)}
      id={id}
      role="tabpanel"
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TAB_PANEL)}
    >
      {children}
    </div>
  );
});

TabPanel.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};
TabPanel.defaultProps = {
  className: "",
  id: ""
};

export default TabPanel;
