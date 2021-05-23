import React, { useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabList.scss";

function renderTab(tab, tabId, activeTabId, onTabClick) {
  const isActive = tabId === activeTabId;
  const isDisabled = tab.props.disabled;

  return (
    <li key={tabId} className={cx({ active: isActive, disabled: isDisabled })}>
      <a
        onClick={() => !isDisabled && onTabClick(tabId)}
        href="javascript:void(0)"
      >
        {tab}
      </a>
    </li>
  );
}

function renderTabs(tabs, activeTabId, onTabClick) {
  return tabs.map((tab, index) => renderTab(tab, index, activeTabId, onTabClick));
}

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, tabType, size, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTab, setActiveTab] = useState(activeTabId || 0);
    function onTabClick(tabId) {
      setActiveTab(tabId);
      onTabChange && onTabChange(tabId)
    }

    return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id}>
      <ul className={size}>{renderTabs(children, activeTab, onTabClick)}</ul>
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
