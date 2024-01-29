import cx from "classnames";
import { camelCase } from "lodash-es";
import React, { FC, forwardRef, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useGridKeyboardNavigation from "../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import useMergeRef from "../../../hooks/useMergeRef";
import usePrevious from "../../../hooks/usePrevious";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { TabProps } from "../Tab/Tab";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./TabList.module.scss";

export interface TabListProps extends VibeComponentProps {
  onTabChange?: (tabId: number) => void;
  activeTabId?: number;
  tabType?: string;
  size?: string;
  noPadding?: boolean;
  children?: ReactElement<TabProps>[];
}

const TabList: FC<TabListProps> = forwardRef(
  (
    {
      className,
      id,
      onTabChange = NOOP,
      activeTabId = 0,
      tabType = "Compact",
      size,
      noPadding,
      children,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

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
          onClick: onSelectionAction,
          className: cx(styles.tabListTabWrapper, child.props.className),
          tabInnerClassName: cx(styles.tabListTabInner, child.props.tabInnerClassName)
        });
      });
      return childrenToRender;
    }, [children, activeTabState, focusIndex, onSelectionAction]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.tabsWrapper, { [styles.noPadding]: noPadding }, className, [
          getStyle(styles, camelCase(tabType))
        ])}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB_LIST, id)}
      >
        <ul ref={ulRef} tabIndex={0} className={cx(styles.tabsList, [getStyle(styles, size)])} role="tablist">
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
