import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./TabPanels.scss";

const TabPanels = forwardRef(
  ({ className, id, activeTabId, animationDirection, children, renderOnlyActiveTab }, ref) => {
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
