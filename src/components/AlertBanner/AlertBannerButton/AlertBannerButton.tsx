import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";

import "./AlertBannerButton.scss";

interface AlertBannerButtonProps extends ButtonProps {
  isDarkBackground?: boolean;
}

const AlertBannerButton = ({ marginLeft, isDarkBackground, ...buttonProps }: AlertBannerButtonProps) => {
  const classNames = cx({
    "monday-style-alert-banner-button-margin-left": marginLeft,
    "monday-style-alert-banner-button-dark-background": isDarkBackground
  });

  return (
    <div className={classNames}>
      <Button
        {...buttonProps}
        size={Button.sizes.SMALL}
        className="monday-style-alert-banner-button"
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
