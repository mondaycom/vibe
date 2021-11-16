/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const UseClickOutSide = ({ ref, callback }) => {
  return (
    <div ref={ref} onClick={callback}>
      My Awesome Component
    </div>
  );
};
UseClickOutSide.propTypes = {
  /**
   * An element with the ref (useRef) structure.
   */
  ref: PropTypes.shape({
    current: PropTypes.element
  }),
  /**
   * Callback function
   */
  callback: PropTypes.func
};

UseClickOutSide.defaultProps = {
  ref: null,
  callback: undefined
};
export default UseClickOutSide;
