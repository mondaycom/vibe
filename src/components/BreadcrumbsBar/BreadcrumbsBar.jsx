import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NavigationChevronRight from "../Icon/Icons/components/NavigationChevronRight";
import "./BreadcrumbsBar.scss";

const BreadcrumbsBar = ({ className, children, hasHoverEffect = true }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const componentRef = useRef(null);

  useEffect(()=>{
    console.log(componentRef)
    //componentRef && componentRef.current && componentRef.current.focus();
  }, [componentRef])

  return (  
    <nav aria-label="Breadcrumb" className={cx("breadcrumbs-bar--wrapper", className)}>
      <ol>
        {children &&
          React.Children.map(children, (child, index) => [
            React.cloneElement(child, {
              ...child?.props,
              isActive: index == activeItemIndex,
              index,
              setActiveItemIndex,
              hasHover: hasHoverEffect
            }),
            index < children.length - 1 && (
              <NavigationChevronRight className="sparatorIcon" size={"14"} aria-hidden="true" />
            )
          ])}
      </ol>
    </nav>
  );
};

BreadcrumbsBar.propTypes = {
  className: PropTypes.string,
  hasHoverEffect: PropTypes.bool
};
BreadcrumbsBar.defaultProps = {
  className: "",
  hasHoverEffect: true
};

export default BreadcrumbsBar;
