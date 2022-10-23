/* eslint-disable react/jsx-props-no-spreading */
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React, { FC } from "react";
import Link, { LinkProps } from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";

export interface AlertBannerLinkProps extends LinkProps {
  marginLeft?: boolean;
  isDarkBackground?: boolean;
}

const AlertBannerLink: FC<AlertBannerLinkProps> = ({
  marginLeft = false,
  isDarkBackground = false,
  id,
  "data-testid": dataTestId,
  ...linkProps
}) => {
  return (
    <div
      className={cx({
        [styles.marginLeft]: marginLeft,
        ["monday-style-alert-banner-link-margin-left"]: marginLeft,
        [styles.darkBackground]: isDarkBackground,
        ["monday-style-alert-banner-link-dark-background"]: isDarkBackground
      })}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.ALERT_BANNER_LINK, id)}
    >
      <Link {...linkProps} className={cx(styles.link, "monday-style-alert-banner-link")} />
    </div>
  );
};

Object.assign(AlertBannerLink, {
  isAlertBannerItem: true
});

export default AlertBannerLink;
