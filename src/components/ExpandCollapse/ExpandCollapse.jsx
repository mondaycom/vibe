import React, { useState, useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ExpandCollapse.scss";
import Icon from "../Icon/Icon";
import Heading from "../Heading/Heading";
import { TYPES } from "../Heading/HeadingConstants";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";

const ExpandCollapse = forwardRef(
  ({ children, headerComponentRenderer, title, className, defaultOpenState, iconSize, id, open, onClick }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [isOpen, setIsOpen] = useState(defaultOpenState);
    const isExpanded = open === undefined ? isOpen : open;

    const toogleExpand = () => {
      setIsOpen(!isOpen);
    };
    const renderHeader = useCallback(() => {
      return <Heading type={TYPES.h5} value={title} className="expand-collapse__header-content" />;
    }, [title]);

    return (
      <div ref={mergedRef} className={cx("expand-collapse--wrapper", className)} id={id}>
        <div className="expand-collapse">
          <button
            type="button"
            className={cx("expand-collapse__header", "expand-collapse__section", {
              "expand-collapse__header--open": isExpanded
            })}
            onClickCapture={onClick || toogleExpand}
            aria-expanded={isExpanded}
            aria-controls={`${id}-controls`}
          >
            {title.length !== 0 ? renderHeader() : headerComponentRenderer && headerComponentRenderer()}
            <Icon
              className={isExpanded ? "animate-icon-open" : "animate-icon-close"}
              iconType={Icon.type.SVG}
              icon={DropdownChevronDown}
              iconSize={iconSize}
              tabindex="-1"
              clickable={false}
            />
          </button>
          {isExpanded && (
            <div
              className={`expand-collapse__content expand-collapse__section ${
                isExpanded && "animate-expand-collapse__content"
              }`}
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
   * Component as parameter to be rendered as header
   */
  headerComponentRenderer: PropTypes.func,
  /**
   * Header title
   */
  title: PropTypes.string,
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
  defaultOpenState: PropTypes.bool,
  open: PropTypes.bool,
  onClick: PropTypes.func
};

ExpandCollapse.defaultProps = {
  id: "",
  className: "",
  defaultOpenState: false,
  iconSize: 24,
  onClick: null,
  title: "",
  headerComponentRenderer: null,
  children: null,
  open: undefined
};

export default ExpandCollapse;
