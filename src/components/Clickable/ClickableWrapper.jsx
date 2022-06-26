import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Clickable from "./Clickable";

const ClickableWrapper = forwardRef(({ children, isClickable, clickableProps }, ref) => {
  if (!isClickable) {
    return children;
  }

  return (
    <Clickable {...clickableProps} ref={ref}>
      {children}
    </Clickable>
  );
});

ClickableWrapper.propTypes = {
  children: PropTypes.element,
  isClickable: PropTypes.bool,
  clickableProps: PropTypes.shape(Clickable.propTypes)
};
ClickableWrapper.defaultProps = {
  children: undefined,
  isClickable: true,
  clickableProps: {}
};

export default ClickableWrapper;
