import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NavigationChevronRight from "../Icon/Icons/components/NavigationChevronRight";
import "./BreadcrumbsBar.scss";

const BREADCRUMBS_BAR_TYPE = {
  NAVIGATION: "navigation",
  INDICATION: "indication"
};

const BreadcrumbsBar = ({ className, children, type }) => (
  <nav aria-label="Breadcrumb" className={cx("breadcrumbs-bar--wrapper", className)}>
    <ol>
      {children &&
        React.Children.map(children, (child, index) => [
          React.cloneElement(child, {
            ...child?.props,
            isClickable: type === BREADCRUMBS_BAR_TYPE.INDICATION ? false : true
          }),
          index < children.length - 1 && (
            <NavigationChevronRight className="sparatorIcon" size={"14"} aria-hidden="true" />
          )
        ])}
    </ol>
  </nav>
);

BreadcrumbsBar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([BREADCRUMBS_BAR_TYPE.INDICATION, BREADCRUMBS_BAR_TYPE.NAVIGATION])
};
BreadcrumbsBar.defaultProps = {
  className: "",
  type: BREADCRUMBS_BAR_TYPE.INDICATION
};

BreadcrumbsBar.types = BREADCRUMBS_BAR_TYPE;

export default BreadcrumbsBar;
