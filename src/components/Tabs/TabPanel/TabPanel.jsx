import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabPanel.scss";

const TabPanel = forwardRef(({ className, id, children, index }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div key={`${id}_${index}`} ref={mergedRef} className={cx("tab-panel--wrapper", className)} id={id} role="tabpanel">
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
