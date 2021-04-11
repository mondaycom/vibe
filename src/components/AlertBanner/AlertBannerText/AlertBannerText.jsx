import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./AlertBannerText.scss";

const AlertBannerText = ({ text, marginLeft }) => {
  const classNames = cx({ "monday-style-alert-banner-text-margin-left": marginLeft });

  return <span className={classNames}>{text}</span>;
};

AlertBannerText.isAlertBannerItem = true;

AlertBannerText.propTypes = {
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.bool
};

AlertBannerText.defaultProps = {
  marginLeft: false
};

export default AlertBannerText;
