import React, { useRef, forwardRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabsContext.scss";

const TabsContext = forwardRef(({ className, id, activeTabId, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [previousActiveTab, setPreviousActiveTab] = useState(activeTabId);
  const [activeTab, setActiveTab] = useState(activeTabId);
  const onTabClick = useCallback(
    tabId => {
      setPreviousActiveTab(activeTab);
      setActiveTab(tabId);
    },
    [setPreviousActiveTab, activeTab, setActiveTab]
  );

  return (
    <div ref={mergedRef} className={cx("tabs-context--wrapper", className)} id={id}>
      {React.Children.map(children, child => {
        if (child.type.isTabList) {
          return React.cloneElement(child, { onTabChange: onTabClick });
        }
        if (child.type.isTabPanels) {
          const animationDirection = previousActiveTab < activeTab ? "ltr" : "rtl";
          return React.cloneElement(child, { activeTabId: activeTab, animationDirection });
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
  id: "",
  activeTabId: 0
};

export default TabsContext;
