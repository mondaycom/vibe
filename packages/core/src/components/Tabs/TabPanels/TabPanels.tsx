import cx from "classnames";
import { camelCase } from "lodash-es";
import React, { FC, forwardRef, ReactElement, useMemo, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { TabPanelsAnimationDirection } from "./TabPanelsConstants";
import { TabPanelProps } from "../TabPanel/TabPanel";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { withStaticProps } from "../../../types";
import styles from "./TabPanels.module.scss";

export interface TabPanelsProps extends VibeComponentProps {
  renderOnlyActiveTab?: boolean;
  activeTabId?: number;
  animationDirection?: TabPanelsAnimationDirection;
  children?: ReactElement<TabPanelProps> | ReactElement<TabPanelProps>[];
}

const TabPanels: FC<TabPanelsProps> & {
  animationDirections?: typeof TabPanelsAnimationDirection;
} = forwardRef(
  (
    {
      className,
      id,
      activeTabId = 0,
      animationDirection = TabPanelsAnimationDirection.RTL,
      children,
      // TODO Vibe 2.0 BREAKING change to true - breaking change
      renderOnlyActiveTab = false,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const renderedTabs = useMemo(() => {
      return React.Children.map(children, (child, index) => {
        const isActiveTab = activeTabId === index;
        if (renderOnlyActiveTab && !isActiveTab) return null;
        const activeClass = isActiveTab ? "active" : "non-active";
        const animationClass = isActiveTab ? `animation-direction-${animationDirection}` : "";
        return React.cloneElement(child, {
          index,
          ...child.props,
          className: cx(
            styles.tabPanel,
            [getStyle(styles, activeClass)],
            [getStyle(styles, camelCase(animationClass))],
            child.props.className
          )
        });
      }).filter(Boolean);
    }, [children, activeTabId, renderOnlyActiveTab, animationDirection]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.tabPanelsWrapper, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB_PANELS, id)}
      >
        {renderedTabs}
      </div>
    );
  }
);

Object.assign(TabPanels, {
  isTabPanels: true
});

export default withStaticProps(TabPanels, {
  animationDirections: TabPanelsAnimationDirection
});
