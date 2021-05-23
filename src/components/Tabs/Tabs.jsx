import React, { useRef, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../Tooltip/Tooltip";
import "./Tabs.scss";

function renderTab(tabKey, tabConfig, activeTab, onTabClick) {
  const isActive = tabKey === activeTab;

  return (
    <li key={tabConfig.name}>
      <Tooltip content={tabConfig.tooltip}>
        <a
          onClick={() => !tabConfig.isDisabled && onTabClick(tabKey)}
          className={cx({
            active: isActive,
            disabled: tabConfig.isDisabled
          })}
          href="javascript:void(0)"
        >
          {tabConfig.name}
        </a>
      </Tooltip>
    </li>
  );
}

function renderTabs(tabs, activeTab, onTabClick) {
  return Object.keys(tabs).map(tabKey => renderTab(tabKey, tabs[tabKey], activeTab, onTabClick));
}

const Tabs = forwardRef(({ className, id, tabs, activeTabKey, onTabChange }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const firstTabKey = Object.keys(tabs)[0];
    const [activeTab, setActiveTab] = useState(activeTabKey || firstTabKey);
    function onTabClick(tabKey) {
      setActiveTab(tabKey);
      onTabChange && onTabChange(tabKey)
    }

    const isOnlySingleTab = Object.keys(tabs).length === 1;

    return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, {
        "disabled": isOnlySingleTab,
    })} id={id}>
      <ul>{renderTabs(tabs, activeTab, onTabClick)}</ul>
      <div className="active-tab-content">{tabs[activeTab].content}</div>
    </div>
  );
});

Tabs.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  tabs: PropTypes.object,
  activeTabKey: PropTypes.string,
  onTabChange: PropTypes.func
};
Tabs.defaultProps = {
  className: "",
  id: "",
  tabs: {},
  activeTabKey: "",
  onTabChange: () => {}
};

export default Tabs;
