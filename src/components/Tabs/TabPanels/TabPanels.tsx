import React, { FC, forwardRef, ReactElement, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { camelCase } from "lodash-es";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { TabPanelsAnimationDirection } from "./TabPanelsConstants";
import { TabPanelProps } from "../TabPanel/TabPanel";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./TabPanels.module.scss";

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
      renderOnlyActiveTab = false, // TODO BREAKING change to true - breaking change
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const renderedTabs = useMemo(() => {
      return React.Children.map(children, (child, index) => {
        const isActiveTab = activeTabId === index;
        if (renderOnlyActiveTab && !isActiveTab) return null;
        const activeClass = isActiveTab ? cx(styles.active, "active") : "non-active";
        const animationClass = isActiveTab
          ? cx(
              getStyle(styles, camelCase(`animation-direction-${animationDirection}`)),
              `animation-direction-${animationDirection}`
            )
          : "";
        return React.cloneElement(child, {
          index,
          ...child.props,
          className: cx(styles.tabPanel, "tab-panel", activeClass, animationClass, child.props.className)
        });
      }).filter(Boolean);
    }, [children, activeTabId, renderOnlyActiveTab, animationDirection]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.tabPanelsWrapper, "tab-panels--wrapper", className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB_PANELS, id)}
      >
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
