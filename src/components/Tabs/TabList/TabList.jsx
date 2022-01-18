import React, { useRef, forwardRef, useState, useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useFocusWithin, useKeyboard } from "@react-aria/interactions";
import useMergeRefs from "../../../hooks/useMergeRefs";
import usePrevious from "../../../hooks/usePrevious";
import "./TabList.scss";

const TabList = forwardRef(({ className, id, onTabChange, activeTabId, tabType, size, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [activeTabState, setActiveTabState] = useState(activeTabId);
  const [focusTab, setFocusTab] = useState(-1);

  const prevActiveTabIdProp = usePrevious(activeTabId);

  useEffect(() => {
    // Update active tab if changed from props
    if (activeTabId !== prevActiveTabIdProp && activeTabId !== activeTabState) {
      setActiveTabState(activeTabId);
    }
  }, [activeTabId, prevActiveTabIdProp, activeTabState, setActiveTabState]);

  const disabledTabIds = useMemo(() => {
    const disabledIds = new Set();
    React.Children.forEach(children, (child, index) => {
      if (child.props.disabled) {
        disabledIds.add(index);
      }
    });
    return disabledIds;
  }, [children]);

  const onTabSelect = useCallback(
    tabId => {
      if (disabledTabIds.has(tabId)) return;
      setActiveTabState(tabId);
      onTabChange && onTabChange(tabId);
    },
    [onTabChange, disabledTabIds]
  );

  const onTabClick = useCallback(
    (tabId, tabCallbackFunc) => {
      if (disabledTabIds.has(tabId)) return;
      if (tabCallbackFunc) tabCallbackFunc(tabId);
      onTabSelect(tabId);
      setFocusTab(-1);
    },
    [onTabSelect, disabledTabIds, setFocusTab]
  );

  function onKeyDown(keyCode) {
    let newFocusTab = focusTab;
    if (keyCode === 37 || keyCode === 39) {
      // left or right arrow
      if (newFocusTab < 0) {
        newFocusTab = activeTabState;
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
      setFocusTab(activeTabState);
    },

    onBlurWithin: () => {
      setFocusTab(-1);
    }
  });

  const tabsToRender = useMemo(() => {
    const childrenToRender = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        value: index,
        active: activeTabState === index,
        focus: focusTab === index,
        onClick: value => onTabClick(value, child.props.onClick)
      });
    });
    return childrenToRender;
  }, [onTabClick, children, activeTabState, focusTab]);

  return (
    <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id}>
      <ul tabIndex={0} {...keyboardProps} {...focusWithinProps} className={cx("tabs-list", size)} role="tablist">
        {tabsToRender}
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
  tabType: "Compact",
  size: undefined
};

TabList.isTabList = true;

export default TabList;
