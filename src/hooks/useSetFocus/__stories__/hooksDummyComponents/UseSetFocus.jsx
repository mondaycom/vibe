/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const UseSetFocus = ({ ref,
                       focusCallback,
                       blurCallback}) => {
  return (
    <div/>
  );
};

UseSetFocus.propTypes = {
  /**
   *  The reference for the component focus on which will be controlled.
   */
  ref: PropTypes.shape({
    current: PropTypes.element
  }).isRequired,
  /**
   * Callback function which fires when component gains focus.
   */
  focusCallback: PropTypes.func,
  /**
   * Callback function which fires when component loses focus.
   */
  blurCallback: PropTypes.func,
};

UseSetFocus.defaultProps = {
  focusCallback: () => {},
  blurCallback: () => {}
};

export default UseSetFocus;
