import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import "./Tab.scss";

const Tab = forwardRef(({ className, id, disabled, active, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
    <div ref={mergedRef} className={cx("tab--wrapper", className, { disabled, active })} id={id}>{children}</div>
  );
});

Tab.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};
Tab.defaultProps = {
    className: "",
    id: "",
    disabled: false,
    active: false
};

export default Tab;
