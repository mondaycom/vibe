/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import React, { FC, useContext } from "react";
import Link, { LinkProps } from "../../Link/Link";
import styles from "./AlertBannerLink.module.scss";
import { TypographyColor } from "../../Typography/TypographyConstants";
import { AlertBannerContext } from "../AlertBannerContext";

export interface AlertBannerLinkProps extends LinkProps {
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
          [styles.bannerLinkTextColorOnPrimary]: textColor === TypographyColor.ON_PRIMARY,
          [styles.bannerLinkTextColorOnInverted]: textColor === TypographyColor.ON_INVERTED
        })}
      />
    </div>
  );
};

Object.assign(AlertBannerLink, {
  isAlertBannerItem: true
});

export default AlertBannerLink;
