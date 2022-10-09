/* eslint-disable react/jsx-props-no-spreading */
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React from "react";
import Link, { LinkProps } from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";

interface AlertBannerLink extends LinkProps {
  marginLeft?: boolean;
  isDarkBackground?: boolean;
}

const AlertBannerLink = ({
  marginLeft,
  isDarkBackground,
  id,
  "data-testid": dataTestId,
  ...linkProps
}: AlertBannerLink) => {
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

AlertBannerLink.isAlertBannerItem = true;

AlertBannerLink.defaultProps = {
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerLink;
