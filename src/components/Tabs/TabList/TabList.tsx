import React, { FC, forwardRef, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import useGridKeyboardNavigation from "../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import useMergeRefs from "../../../hooks/useMergeRefs";
import usePrevious from "../../../hooks/usePrevious";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { TabProps } from "../Tab/Tab";
import "./TabList.scss";

export interface TabListProps extends VibeComponentProps {
  onTabChange?: (tabId: number) => void;
  activeTabId?: number;
  tabType?: string;
  size?: string;
  children?: ReactElement<TabProps>[];
}

const TabList: FC<TabListProps> = forwardRef(
  ({ className, id, onTabChange = NOOP, activeTabId = 0, tabType = "Compact", size, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [activeTabState, setActiveTabState] = useState<number>(activeTabId);

    const prevActiveTabIdProp = usePrevious(activeTabId);

    useEffect(() => {
      // Update active tab if changed from props
      if (activeTabId !== prevActiveTabIdProp && activeTabId !== activeTabState) {
        setActiveTabState(activeTabId);
      }
    }, [activeTabId, prevActiveTabIdProp, activeTabState, setActiveTabState]);

    const disabledTabIds = useMemo(() => {
      const disabledIds = new Set<number>();
      React.Children.forEach(children, (child, index) => {
        if (child.props.disabled) {
          disabledIds.add(index);
        }
      });
      return disabledIds;
    }, [children]);

    const onTabSelect = useCallback(
      (tabId: number) => {
        if (disabledTabIds.has(tabId)) return;
        setActiveTabState(tabId);
        onTabChange && onTabChange(tabId);
      },
      [onTabChange, disabledTabIds]
    );

    const onTabClick = useCallback(
      (value: HTMLElement | void, tabId: number) => {
        const tabCallbackFunc = children[tabId].props?.onClick;
        if (disabledTabIds.has(tabId)) return;
        if (tabCallbackFunc) tabCallbackFunc(tabId);
        onTabSelect(tabId);
      },
      [children, disabledTabIds, onTabSelect]
    );

    const getItemByIndex = useCallback((index: number): ReactElement<TabProps> => children[index], [children]);
    const disabledIndexes = useMemo(() => Array.from(disabledTabIds), [disabledTabIds]);
    const ulRef = useRef();
    const { activeIndex: focusIndex, onSelectionAction } = useGridKeyboardNavigation({
      ref: ulRef,
      numberOfItemsInLine: children?.length,
      itemsCount: children?.length,
      getItemByIndex,
      onItemClicked: onTabClick,
      disabledIndexes
    });

    const tabsToRender = useMemo(() => {
      const childrenToRender = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          value: index,
          active: activeTabState === index,
          focus: focusIndex === index,
          onClick: onSelectionAction
        });
      });
      return childrenToRender;
    }, [children, activeTabState, focusIndex, onSelectionAction]);

    return (
      <div ref={mergedRef} className={cx("tabs--wrapper", className, tabType)} id={id}>
        <ul ref={ulRef} tabIndex={0} className={cx("tabs-list", size)} role="tablist">
          {tabsToRender}
        </ul>
      </div>
    );
  }
);

Object.assign(TabList, {
  isTabList: true
});

export default TabList;
