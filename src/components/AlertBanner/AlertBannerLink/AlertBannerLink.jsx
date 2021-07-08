/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Link from "../../Link/Link";

import "./AlertBannerLink.scss";

const AlertBannerLink = ({ marginLeft, isDarkBackground, ...linkProps }) => {
  const classNames = cx({
    "monday-style-alert-banner-link-margin-left": marginLeft,
    "monday-style-alert-banner-link-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Link {...linkProps} componentClassName="monday-style-alert-banner-link" />
    </div>
  );
};

AlertBannerLink.isAlertBannerItem = true;

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNamePropsType, ...linkPropsTypes } = Link.propTypes;
AlertBannerLink.propTypes = {
  ...linkPropsTypes,
  /** adds 8px margin to the left */
  marginLeft: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNameDefaultProp, ...linkDefaultPropTypes } = Link.defaultProps;
AlertBannerLink.defaultProps = {
  ...linkDefaultPropTypes,
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerLink;
