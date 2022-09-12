import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";

const ToastButton = ({ className, ...buttonProps }: ButtonProps) => {
  return (
    <Button
      {...buttonProps}
      className={cx("monday-style-toast-action_button", className)}
      size={Button.sizes.SMALL}
      color={Button.colors.ON_PRIMARY_COLOR}
    />
  );
};

const { size: _sizeDefaultProp, ...buttonDefaultPropTypes } = Button.defaultProps!;
ToastButton.defaultProps = {
  ...buttonDefaultPropTypes,
  size: Button.sizes.SMALL,
  kind: Button.kinds.SECONDARY,
  marginLeft: false,
  isDarkBackground: false
};

export default ToastButton;
