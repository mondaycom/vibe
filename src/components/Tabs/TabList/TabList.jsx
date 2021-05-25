import React, { useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabList.scss";

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, tabType, size, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTab, setActiveTab] = useState(activeTabId || 0);
    function onTabClick(tabId) {
      setActiveTab(tabId);
      onTabChange && onTabChange(tabId)
    }

    return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id} tabIndex={0}>
      <ul className={size} role="tablist">{React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { active: activeTab === index, onClick: () => onTabClick(index) });
      })}</ul>
    </div>
  );
});

TabList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onTabChange: PropTypes.func,
  activeTabId: PropTypes.number,
  tabType: PropTypes.string,
  size: PropTypes.string,
  __TYPE: PropTypes.string
};

TabList.defaultProps = {
  className: "",
  id: "",
  onTabChange: () => {},
  tabType: "Compact",
  __TYPE: "TabList"
};

export default TabList;
