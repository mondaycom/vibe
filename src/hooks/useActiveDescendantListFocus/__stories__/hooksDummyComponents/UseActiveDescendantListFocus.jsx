/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const UseActiveDescendantListFocus = ({ ref, callback }) => {
  return (
    <div ref={ref} onClick={callback}>
      My Awesome Component
    </div>
  );
};

UseActiveDescendantListFocus.propTypes = {
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

UseActiveDescendantListFocus.defaultProps = {
  ref: null,
  callback: undefined
};

export default UseActiveDescendantListFocus;
