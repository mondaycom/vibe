import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Counter.scss";

const Counter = ({
    componentClassName = '',
    text = ''
}) => {
  return (
    <div className={cx("counter--wrapper", componentClassName)}>
        {text}
    </div>
  );
};

Counter.defaultProps = {
    componentClassName: PropTypes.string,
};
Counter.propTypes = {
    componentClassName: ""
};

export default Counter;
