import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";
import React, { FC } from "react";
import styles from "./AlertBannerButton.module.scss";

export interface AlertBannerButtonProps extends ButtonProps {
  /**
   * If true, the button is displayed on a dark background.
   */
  isDarkBackground?: boolean;
}

const AlertBannerButton: FC<AlertBannerButtonProps> = ({
  marginLeft = false,
  isDarkBackground = false,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}) => {
  const overrideButtonProps = { ...Button.defaultProps, ...buttonProps };

  const classNames = cx({
    [styles.marginLeft]: marginLeft,
    [styles.darkBackground]: isDarkBackground
  });

  return (
    <div
      className={classNames}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_BUTTON, id)}
      id={id}
    >
      <Button {...overrideButtonProps} size="small" className={cx(styles.bannerButton)} color="on-primary-color" />
    </div>
  );
};

Object.assign(AlertBannerButton, {
  isAlertBannerItem: true
});

export default AlertBannerButton;
