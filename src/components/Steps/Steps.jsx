import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Steps.scss";

const Steps = forwardRef(({ className, id }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
    <div ref={mergedRef} className={cx("steps--wrapper", className)} id={id}>
        My awesome new component
    </div>
  );
});

Steps.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
};
Steps.defaultProps = {
    className: "",
    id: ""
};

export default Steps;
