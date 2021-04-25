/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Link from "../../Link/Link";

import "./AlertBannerLink.scss";

const AlertBannerLink = ({ marginLeft, linkProps, isDarkBackground }) => {
  const classNames = cx({
    "monday-style-alert-banner-link-margin-left": marginLeft,
    "monday-style-alert-banner-link-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Link componentClassName="monday-style-alert-banner-link" {...linkProps} />
    </div>
  );
};

AlertBannerLink.isAlertBannerItem = true;

AlertBannerLink.propTypes = {
  /** adds 8px margin to the left */
  marginLeft: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object.isRequired
};

AlertBannerLink.defaultProps = {
  marginLeft: false
};

export default AlertBannerLink;
