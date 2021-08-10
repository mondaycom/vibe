/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Button from "../../Button/Button";

const ToastButton = ({ className, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      className={cx("monday-style-toast-action_button", className)}
      size={Button.sizes.SMALL}
      color={Button.colors.ON_PRIMARY_COLOR}
    />
  );
};

// eslint-disable-next-line no-unused-vars
const { size: _sizePropsType, ...buttonPropsTypes } = Button.propTypes;
ToastButton.propTypes = {
  ...buttonPropsTypes
};

// eslint-disable-next-line no-unused-vars
const { size: _sizeDefaultProp, ...linkDefaultPropTypes } = Button.defaultProps;
ToastButton.defaultProps = {
  ...linkDefaultPropTypes,
  size: Button.sizes.SMALL,
  kind: Button.kinds.SECONDARY,
  marginLeft: false,
  isDarkBackground: false
};

export default ToastButton;
