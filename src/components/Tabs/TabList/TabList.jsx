import React, { useRef, forwardRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { useKeyboard } from "@react-aria/interactions";
import "./TabList.scss";

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, tabType, size, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTab, setActiveTab] = useState(activeTabId);
    const onTabClick = useCallback((tabId) => {
        setActiveTab(tabId);
        onTabChange && onTabChange(tabId)
    }, [setActiveTab, onTabChange]);

    function onKeyDown(keyCode) {
      if (keyCode === 37 && activeTab > 0) { // left arrow
        onTabClick(activeTab - 1);
      } else if (keyCode === 39 && activeTab < children.length - 1) { // right arrow
        onTabClick(activeTab + 1);
      }
    }

    const { keyboardProps } = useKeyboard({
      onKeyDown: (e) => {
        onKeyDown(e.keyCode);
      },
      onKeyUp: (e) => {}
    });

    return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id}>
      <ul tabIndex={0} {...keyboardProps} className={cx("tabs-list", size)} role="tablist">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { value: index, active: activeTab === index, onClick: onTabClick });
        })}
      </ul>
    </div>
  );
});

TabList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onTabChange: PropTypes.func,
  activeTabId: PropTypes.number,
  tabType: PropTypes.string,
  size: PropTypes.string
};

TabList.defaultProps = {
  className: "",
  id: "",
  onTabChange: () => {},
  activeTabId: 0,
  tabType: "Compact"
};

TabList.isTabList = true;

export default TabList;
