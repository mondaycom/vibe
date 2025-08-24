import cx from "classnames";
import { camelCase } from "lodash-es";
import React, { forwardRef, type ReactElement, useMemo, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import { TabPanelsAnimationDirection as TabPanelsAnimationDirectionEnum } from "./TabPanelsConstants";
import { type TabPanelsAnimationDirection } from "./TabPanels.types";
import { type TabPanelProps } from "../TabPanel/TabPanel";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { type VibeComponentProps, withStaticProps } from "../../../types";
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
        const activeClass = isActiveTab ? "active" : "non-active";
        const animationClass = isActiveTab ? `animation-direction-${animationDirection}` : "";

        // Use existing panel ID if provided, otherwise generate fallback based on component id or a shared default
        const actualPanelId = child.props.id || `${id || "tab-list"}-panel-${index}`;

        // Generate corresponding tab ID by replacing "-panel-" with "-tab-" in panel ID
        // This should match the logic in TabList
        const correspondingTabId = actualPanelId.replace(/-panel-/, "-tab-");

        return React.cloneElement(child, {
          index,
          ...child.props,
          className: cx(
            styles.tabPanel,
            [getStyle(styles, activeClass)],
            [getStyle(styles, camelCase(animationClass))],
            child.props.className
          ),
          id: actualPanelId,
          "aria-labelledby": correspondingTabId
        });
      });
    }, [children, activeTabId, animationDirection, id]);

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
