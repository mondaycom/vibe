/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Link, { LinkProps } from "../../Link/Link";
import "./AlertBannerLink.scss";

export interface AlertBannerLinkProps extends LinkProps {
  marginLeft?: boolean;
  isDarkBackground?: boolean;
}

const AlertBannerLink = ({ marginLeft = false, isDarkBackground = false, ...linkProps }: AlertBannerLinkProps) => {
  const classNames = cx({
    "monday-style-alert-banner-link-margin-left": marginLeft,
    "monday-style-alert-banner-link-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Link {...linkProps} textClassName="monday-style-alert-banner-link" />
    </div>
  );
};

Object.assign(AlertBannerLink, {
  isAlertBannerItem: true
});

export default AlertBannerLink;
