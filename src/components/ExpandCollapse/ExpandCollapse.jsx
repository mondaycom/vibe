import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ExpandCollapse.scss";
import Icon from "../Icon/Icon";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";

const ExpandCollapse = forwardRef(({ children, headerComponentRenderer, className, defaultOpenState }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [isOpen, setIsOpen] = useState(defaultOpenState);

  const toogleExpand = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={mergedRef} className={cx("expand-collapse--wrapper", className)}>
      <div className="expand-collapse" onClick={toogleExpand}>
        <div className="expand-collapse__header expand-collapse__section">
          {headerComponentRenderer && headerComponentRenderer()}
          <Icon iconType={Icon.type.SVG} icon={DropdownChevronDown} iconSize={"52px"} tabindex="-1" clickable={false} />
        </div>
        {isOpen && <div className="expand-collapse__content expand-collapse__section">{children}</div>}
      </div>
    </div>
  );
});

ExpandCollapse.propTypes = {
  /**
   * Component as parameter to be rendered as header
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
   * Should be open or closed by default (when rendered for the first)
   */
  defaultOpenState: PropTypes.bool
};
ExpandCollapse.defaultProps = {
  className: "",
  defaultOpenState: false
};

export default ExpandCollapse;
