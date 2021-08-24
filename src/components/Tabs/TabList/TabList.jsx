import React, { useRef, forwardRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useFocusWithin, useKeyboard } from "@react-aria/interactions";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabList.scss";

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, tabType, size, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [activeTab, setActiveTab] = useState(activeTabId);
  const [focusTab, setFocusTab] = useState(-1);

  function onTabSelect(tabId) {
    setActiveTab(tabId);
    onTabChange && onTabChange(tabId);
  }

  const onTabClick = useCallback(
    (tabId, tabCallbackFunc) => {
      if (tabCallbackFunc) tabCallbackFunc(tabId);
      onTabSelect(tabId);
      setFocusTab(-1);
    },
    [onTabSelect, setFocusTab]
  );

  function onKeyDown(keyCode) {
    let newFocusTab = focusTab;
    if (keyCode === 37 || keyCode === 39) {
      // left or right arrow
      if (newFocusTab < 0) {
        newFocusTab = activeTab;
      }
    }

    if (keyCode === 37 && newFocusTab > 0) {
      // left arrow
      setFocusTab(newFocusTab - 1);
    } else if (keyCode === 39 && newFocusTab < children.length - 1) {
      // right arrow
      setFocusTab(newFocusTab + 1);
    } else if (keyCode === 13 || keyCode === 32) {
      // enter or space
      onTabSelect(focusTab);
    }
  }

  const { keyboardProps } = useKeyboard({
    onKeyDown: e => {
      onKeyDown(e.keyCode);
    },
    onKeyUp: _e => {}
  });

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => {
      setFocusTab(activeTab);
    },

    onBlurWithin: () => {
      setFocusTab(-1);
    }
  });

  return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id}>
      <ul tabIndex={0} {...keyboardProps} {...focusWithinProps} className={cx("tabs-list", size)} role="tablist">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            value: index,
            active: activeTab === index,
            focus: focusTab === index,
            onClick: value => onTabClick(value, child.props.onClick)
          });
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
