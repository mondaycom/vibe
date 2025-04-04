import cx from "classnames";
import { camelCase } from "lodash-es";
import React, { forwardRef, ReactElement, useMemo, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import { TabPanelsAnimationDirection as TabPanelsAnimationDirectionEnum } from "./TabPanelsConstants";
import { TabPanelsAnimationDirection } from "./TabPanels.types";
import { TabPanelProps } from "../TabPanel/TabPanel";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { VibeComponentProps, withStaticProps } from "../../../types";
import styles from "./TabPanels.module.scss";

export interface TabPanelsProps extends VibeComponentProps {
  /**
   * The index of the currently active tab panel.
   */
  activeTabId?: number;
  /**
   * The animation direction when switching between tab panels.
   */
  animationDirection?: TabPanelsAnimationDirection;
  /**
   * The child elements representing tab panels.
   */
  children?: ReactElement<TabPanelProps> | ReactElement<TabPanelProps>[];
}

const TabPanels = forwardRef(
  (
    { className, id, activeTabId = 0, animationDirection = "rtl", children, "data-testid": dataTestId }: TabPanelsProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const renderedTabs = useMemo(() => {
      return React.Children.map(children, (child, index) => {
        const isActiveTab = activeTabId === index;
        if (!isActiveTab) return null;
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
    }, [children, activeTabId, animationDirection]);

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

interface TabPanelsStaticProps {
  animationDirections: typeof TabPanelsAnimationDirectionEnum;
}

export default withStaticProps<TabPanelsProps, TabPanelsStaticProps>(TabPanels, {
  animationDirections: TabPanelsAnimationDirectionEnum
});
