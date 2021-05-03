/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Button from "../../Button/Button";

import "./AlertBannerButton.scss";

const AlertBannerButton = ({ marginLeft, isDarkBackground, ...buttonProps }) => {
  const classNames = cx({
    "monday-style-alert-banner-button-margin-left": marginLeft,
    "monday-style-alert-banner-button-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Button
        {...buttonProps}
        size={Button.sizes.SMALL}
        className="monday-style-alert-banner-button"
        color={Button.colors.ON_PRIMARY_COLOR}
      />
    </div>
  );
};

AlertBannerButton.isAlertBannerItem = true;

// eslint-disable-next-line no-unused-vars
const { size: _sizePropsType, ...buttonPropsTypes } = Button.propTypes;
AlertBannerButton.propTypes = {
  ...buttonPropsTypes,
  /** adds 8px margin to the left */
  marginLeft: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

// eslint-disable-next-line no-unused-vars
const { size: _sizeDefaultProp, ...linkDefaultPropTypes } = Button.defaultProps;
AlertBannerButton.defaultProps = {
  ...linkDefaultPropTypes,
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerButton;
