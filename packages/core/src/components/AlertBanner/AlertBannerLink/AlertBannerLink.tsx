import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import React, { FC, useContext } from "react";
import Link, { LinkProps } from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";
import { AlertBannerContext } from "../AlertBannerContext";

export interface AlertBannerLinkProps extends LinkProps {
  /**
   * If true, a left margin is applied to the link.
   */
  marginLeft?: boolean;
}

const AlertBannerLink: FC<AlertBannerLinkProps> = ({
  marginLeft = false,
  id,
  "data-testid": dataTestId,
  ...linkProps
}) => {
  const { textColor } = useContext(AlertBannerContext);
  const classNames = cx({
    [styles.marginLeft]: marginLeft
  });

  return (
    <div
      className={classNames}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_LINK, id)}
      id={id}
    >
      <Link
        {...linkProps}
        textClassName={cx(styles.bannerLink, {
          [styles.bannerLinkTextColorOnPrimary]: textColor === "onPrimary",
          [styles.bannerLinkTextColorOnInverted]: textColor === "onInverted"
        })}
      />
    </div>
  );
};

Object.assign(AlertBannerLink, {
  isAlertBannerItem: true
});

export default AlertBannerLink;
