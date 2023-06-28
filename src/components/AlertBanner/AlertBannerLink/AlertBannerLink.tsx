/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import React, { FC } from "react";
import Link, { LinkProps } from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";

export interface AlertBannerLinkProps extends LinkProps {
  marginLeft?: boolean;
  isDarkBackground?: boolean;
}

const AlertBannerLink: FC<AlertBannerLinkProps> = ({
  marginLeft = false,
  id,
  "data-testid": dataTestId,
  ...linkProps
}) => {
  const classNames = cx({
    [styles.marginLeft]: marginLeft
  });

  return (
    <div
      className={classNames}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_LINK, id)}
      id={id}
    >
      <Link {...linkProps} textClassName={cx(styles.bannerLink)} />
    </div>
  );
};

Object.assign(AlertBannerLink, {
  isAlertBannerItem: true
});

export default AlertBannerLink;
