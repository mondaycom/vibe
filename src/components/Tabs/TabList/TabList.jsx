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
  return <ul>{tabs.map((tab, index) => renderTab(tab, index, activeTabId, onTabClick))}</ul>;
}

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTab, setActiveTab] = useState(activeTabId || 0);
    function onTabClick(tabId) {
      setActiveTab(tabId);
      onTabChange && onTabChange(tabId)
    }

    return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className)} id={id}>
      {renderTabs(children, activeTab, onTabClick)}
    </div>
  );
});

TabList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onTabChange: PropTypes.func,
  activeTabId: PropTypes.number
};
TabList.defaultProps = {
  className: "",
  id: "",
  onTabChange: () => {}
};

export default TabList;
