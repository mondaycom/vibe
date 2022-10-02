/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Link, { LinkProps } from "../../Link/Link";

import "./AlertBannerLink.scss";

interface AlertBannerLink extends LinkProps {
  marginLeft: boolean;
  isDarkBackground: boolean
}

const AlertBannerLink = ({ marginLeft, isDarkBackground, ...linkProps }: AlertBannerLink) => {
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

AlertBannerLink.defaultProps = {
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerLink;
