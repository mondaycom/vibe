import React, { useRef, forwardRef, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import Tooltip from "../../Tooltip/Tooltip";
import "./TabList.scss";
import { VelocityTransitionGroup } from "velocity-react";

function renderTab(tabKey, tabConfig, activeTab, onTabClick) {
  const isActive = tabKey === activeTab;

  return (
    <li key={tabConfig.name}>
      <Tooltip content={tabConfig.tooltip}>
        <a
          onClick={() => !tabConfig.disabled && onTabClick(tabKey)}
          className={cx({
            active: isActive,
            disabled: tabConfig.disabled
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

function renderTabContainer(tab) {
  const [enter, setEnter] = useState("slideUp");
  const [leave, setLeave] = useState("slideDown");

  return React.createElement(
    VelocityTransitionGroup,
    {
      className: "tab-container",
      enter: { animation: enter, duration: 100 },
      leave: { animation: leave, duration: 100 },
      runOnMount: true
    },
    tab.content
  );
}

const TabList = forwardRef(({ className, id, tabs, activeTabKey, onTabChange }, ref) => {
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
      {renderTabContainer(tabs[activeTab])}
    </div>
  );
});

TabList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  tabs: PropTypes.object,
  activeTabKey: PropTypes.string,
  onTabChange: PropTypes.func
};
TabList.defaultProps = {
  className: "",
  id: "",
  tabs: {},
  activeTabKey: "",
  onTabChange: () => {}
};

export default TabList;
