/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const UseTimeout = ({ ref, callback }) => {
  return (
    <div ref={ref} onClick={callback}>
      My Awesome Component
    </div>
  );
};

UseTimeout.propTypes = {
  /**
   * The number (in ms) to set timeout for
   */
  time: PropTypes.number,
  /**
   * if time provided is 0 (defer) ignore the callback
   */
  ignoreZeroTime: PropTypes.bool,
  /**
   * Callback function
   */
  callback: PropTypes.func
};

UseTimeout.defaultProps = {
  time: 0,
  ignoreZeroTime: false,
  callback: undefined
};

export default UseTimeout;
