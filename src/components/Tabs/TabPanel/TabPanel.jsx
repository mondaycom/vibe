import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabPanel.scss";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";

const TabPanel = forwardRef(({ className, id, children, index, "data-testId": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      key={`${id}_${index}`}
      ref={mergedRef}
      className={cx("tab-panel--wrapper", className)}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TAB_PANEL, id)}
      role="tabpanel"
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
