/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import Button, { ButtonProps } from "../../Button/Button";
import styles from "./AlertBannerButton.module.scss";

interface AlertBannerButtonProps extends ButtonProps {
  isDarkBackground?: boolean;
}

const AlertBannerButton = ({
  marginLeft,
  isDarkBackground,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}: AlertBannerButtonProps) => {
  const classNames = cx({
    [styles.marginLeft]: marginLeft,
    ["monday-style-alert-banner-button-margin-left"]: marginLeft,
    [styles.darkBackground]: isDarkBackground,
    ["monday-style-alert-banner-button-dark-background"]: isDarkBackground
  });

  return (
    <div className={classNames} id={id} data-testid={dataTestId || getTestId(ELEMENT_TYPES.ALERT_BANNER_BUTTON, id)}>
      <Button
        {...buttonProps}
        size={Button.sizes.SMALL}
        className={cx(styles.button, "monday-style-alert-banner-button")}
        color={Button.colors.ON_PRIMARY_COLOR}
      />
    </div>
  );
};

AlertBannerButton.isAlertBannerItem = true;

const { size: _sizeDefaultProp, ...linkDefaultPropTypes } = Button.defaultProps!;
AlertBannerButton.defaultProps = {
  ...linkDefaultPropTypes,
  marginLeft: false,
  isDarkBackground: false
};

export default AlertBannerButton;
