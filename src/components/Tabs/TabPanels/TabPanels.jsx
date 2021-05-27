import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabPanels.scss";

const TabPanels = forwardRef(({ className, id, activeTabId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
    <div ref={mergedRef} className={cx("tab-panels--wrapper", className)} id={id}>
        {React.Children.map(children, (child, index) => {
            if (activeTabId === index) {
                return React.cloneElement(child, { className: "tab-panel active" });
            }
            return React.cloneElement(child, { className: "tab-panel" });
        })}
    </div>
  );
});

TabPanels.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    activeTabId: PropTypes.number
};
TabPanels.defaultProps = {
    className: "",
    id: "",
    activeTabId: 0
};

TabPanels.isTabPanels = true;

export default TabPanels;
