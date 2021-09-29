import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ExpandCollapse.scss";
import Icon from "../Icon/Icon";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";

const ExpandCollapse = forwardRef(
  ({ children, headerComponentRenderer, className, defaultOpenState, iconSize, id }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [isOpen, setIsOpen] = useState(defaultOpenState);

    const toogleExpand = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div ref={mergedRef} className={cx("expand-collapse--wrapper", className)} id={id}>
        <div className="expand-collapse">
          <button
            className={cx("expand-collapse__header", "expand-collapse__section", {
              "expand-collapse__header--open": isOpen
            })}
            onClickCapture={toogleExpand}
            aria-expanded={isOpen}
            aria-controls={`${id}-controls`}
          >
            {headerComponentRenderer && headerComponentRenderer()}
            <Icon
              className={isOpen ? "animate-icon-open" : "animate-icon-close"}
              iconType={Icon.type.SVG}
              icon={DropdownChevronDown}
              iconSize={iconSize}
              tabindex="-1"
              clickable={false}
            />
          </button>
          {isOpen && (
            <div
              className={`expand-collapse__content expand-collapse__section ${isOpen &&
                "animate-expand-collapse__content"}`}
              id={`${id}-controls`}
              role="region"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ExpandCollapse.propTypes = {
  /**
   * Id for the component
   */
  id: PropTypes.string,
  /**
   * Component as parameter to be rendered as component-name
   */
  headerComponentRenderer: PropTypes.func,
  /**
   * The value of the expandable section
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Custom styling
   */
  className: PropTypes.string,
  /**
   * The expand icon font size
   */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Should be open or closed by default (when rendered)
   */
  defaultOpenState: PropTypes.bool
};
ExpandCollapse.defaultProps = {
  id: "",
  className: "",
  defaultOpenState: false,
  iconSize: 24
};

export default ExpandCollapse;
