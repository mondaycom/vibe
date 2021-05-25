import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./Tab.scss";

const Tab = forwardRef(({ className, id, disabled, active, onClick, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <li ref={mergedRef} key={id} className={cx("tab--wrapper", className, { active, disabled })} id={id}>
          <a role="tab"
             onClick={() => !disabled && onClick()}
          >
              {children}
          </a>
      </li>
  );
});

Tab.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
};
Tab.defaultProps = {
    className: "",
    id: "",
    disabled: false,
    active: false
};

export default Tab;
