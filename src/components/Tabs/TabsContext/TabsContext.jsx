import React, { useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabsContext.scss";

const TabsContext = forwardRef(({ className, id, activeTabId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTab, setActiveTab] = useState(activeTabId || 0);

    function onTabClick(tabId) {
        setActiveTab(tabId);
    }

    return (
    <div ref={mergedRef} className={cx("tabs-context--wrapper", className)} id={id}>
        {React.Children.map(children, child => {
            if (child.props.__TYPE === "TabList") {
                return React.cloneElement(child, { onTabChange: onTabClick });
            } else if (child.props.__TYPE === "TabPanels") {
                return React.cloneElement(child, { activeTabId: activeTab });
            }
            return child;
        })}
    </div>
  );
});

TabsContext.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    activeTabId: PropTypes.number
};
TabsContext.defaultProps = {
    className: "",
    id: ""
};

export default TabsContext;
