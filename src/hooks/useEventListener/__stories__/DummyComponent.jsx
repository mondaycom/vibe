/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const UseEventListener = ({ ref, callback }) => {
  return (
    <div ref={ref} onClick={callback}>
      My Awesome Component
    </div>
  );
};
UseEventListener.propTypes = {
  /**
   * An element with the ref (useRef) structure.
   */
  ref: PropTypes.shape({
    current: PropTypes.element
  }),
  /**
   * Callback function
   */
  callback: PropTypes.func,
  /**
   * the event name to listen to for example - click, mousedown, mouseup, blur ...
   */
  eventName: PropTypes.string,
  /**
   * capture the event on the capturing phase (before bubbling)
   */
  capture: PropTypes.bool
};

UseEventListener.defaultProps = {
  ref: null,
  callback: undefined,
  eventName: undefined,
  capture: false
};
export default UseEventListener;
