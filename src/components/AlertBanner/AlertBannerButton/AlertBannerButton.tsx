/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./AlertBannerButton.module.scss";

export interface AlertBannerButtonProps extends ButtonProps {
  isDarkBackground?: boolean;
}

const AlertBannerButton = ({
  marginLeft = false,
  isDarkBackground = false,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}: AlertBannerButtonProps) => {
  const overrideButtonProps = { ...Button.defaultProps, ...buttonProps };

  const classNames = cx({
    [styles.marginLeft]: marginLeft,
    ["monday-style-alert-banner-button-margin-left"]: marginLeft,
    [styles.darkBackground]: isDarkBackground,
    ["monday-style-alert-banner-button-dark-background"]: isDarkBackground
  });

  return (
    <div
      className={classNames}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ALERT_BANNER_BUTTON, id)}
    >
      <Button
        {...overrideButtonProps}
        size={Button.sizes.SMALL}
        className={cx(styles.button, "monday-style-alert-banner-button")}
        color={Button.colors.ON_PRIMARY_COLOR}
      />
    </div>
  );
};

Object.assign(AlertBannerButton, {
  isAlertBannerItem: true
});

export default AlertBannerButton;
