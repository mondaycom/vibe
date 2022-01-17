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
        if (activeTabId === index) {
          return React.cloneElement(child, {
            key: index,
            ...child.props,
            className: cx("tab-panel", "active", `animation-direction-${animationDirection}`, child.props.className)
          });
        }
        if (renderOnlyActiveTab) return null;
        return React.cloneElement(child, { ...child.props, className: cx("tab-panel", child.props.className) });
      }).filter(Boolean);
    }, [children, activeTabId, renderOnlyActiveTab]);

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
