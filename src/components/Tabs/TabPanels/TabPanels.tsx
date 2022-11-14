import React, { FC, forwardRef, ReactElement, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { TabPanelsAnimationDirection } from "./TabPanelsConstants";
import { TabPanelProps } from "../TabPanel/TabPanel";
import "./TabPanels.scss";

export interface TabPanelsProps extends VibeComponentProps {
  renderOnlyActiveTab?: boolean;
  activeTabId?: number;
  animationDirection?: TabPanelsAnimationDirection;
  children?: ReactElement<TabPanelProps> | ReactElement<TabPanelProps>[];
}

const TabPanels: FC<TabPanelsProps> = forwardRef(
  (
    {
      className,
      id,
      activeTabId = 0,
      animationDirection = TabPanelsAnimationDirection.RTL,
      children,
      renderOnlyActiveTab = false // TODO BREAKING change to true - breaking change
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const renderedTabs = useMemo(() => {
      return React.Children.map(children, (child, index) => {
        const isActiveTab = activeTabId === index;
        if (renderOnlyActiveTab && !isActiveTab) return null;
        const activeClass = isActiveTab ? "active" : "non-active";
        const animationClass = isActiveTab ? `animation-direction-${animationDirection}` : "";
        return React.cloneElement(child, {
          index,
          ...child.props,
          className: cx("tab-panel", activeClass, animationClass, child.props.className)
        });
      }).filter(Boolean);
    }, [children, activeTabId, renderOnlyActiveTab, animationDirection]);

    return (
      <div ref={mergedRef} className={cx("tab-panels--wrapper", className)} id={id}>
        {renderedTabs}
      </div>
    );
  }
);

Object.assign(TabPanels, {
  isTabPanels: true,
  animationDirections: TabPanelsAnimationDirection
});

export default TabPanels;
