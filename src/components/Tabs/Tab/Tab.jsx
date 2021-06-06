import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./Tab.scss";

const Tab = forwardRef(({ className, id, value, disabled, active, onClick, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <li ref={mergedRef}
          key={id}
          className={cx("tab--wrapper", className, { active, disabled })}
          id={id}
          role="tab"
          aria-selected={active}
          aria-disabled={disabled}
      >
          <a className="tab-inner"
             onClick={() => !disabled && onClick(value)}
          >
              {children}
          </a>
      </li>
  );
});

Tab.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
};
Tab.defaultProps = {
    className: "",
    id: "",
    value: 0,
    disabled: false,
    active: false
};

export default Tab;
