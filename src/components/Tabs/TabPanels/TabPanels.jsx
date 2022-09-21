import cx from "classnames";
import React, { forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { camelCase } from "lodash";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import styles from "./TabPanels.module.scss";

const TabPanels = forwardRef(
  (
    { className, id, activeTabId, animationDirection, children, renderOnlyActiveTab, "data-testid": dataTestId },
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
              styles[camelCase(`animation-direction-${animationDirection}`)],
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
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.TAB_PANELS, id)}
      >
        {renderedTabs}
      </div>
    );
  }
);

TabPanels.animationDirections = {
  RTL: "rtl",
  LTR: "ltr"
};

TabPanels.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  renderOnlyActiveTab: PropTypes.bool,
  activeTabId: PropTypes.number,
  animationDirection: PropTypes.oneOf([TabPanels.animationDirections.LTR, TabPanels.animationDirections.RTL])
};

TabPanels.defaultProps = {
  className: "",
  id: "",
  renderOnlyActiveTab: false, // TODO BREAKING change to true - breaking change
  activeTabId: 0,
  animationDirection: TabPanels.animationDirections.RTL
};

TabPanels.isTabPanels = true;

export default TabPanels;
