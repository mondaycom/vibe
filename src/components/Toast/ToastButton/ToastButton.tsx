import cx from "classnames";
import Button, { ButtonProps } from "../../Button/Button";
import React, { FC } from "react";

export type ToastButtonProps = ButtonProps;

const ToastButton: FC<ToastButtonProps> = ({ className, ...buttonProps }) => {
  const overrideButtonProps = {
    ...Button.defaultProps,
    kind: Button.kinds.SECONDARY,
    marginLeft: false,
    ...buttonProps
  };

  return (
    <Button
      {...overrideButtonProps}
      className={cx("monday-style-toast-action_button", className)}
      size={Button.sizes.SMALL}
      color={Button.colors.ON_PRIMARY_COLOR}
    />
  );
};

export default ToastButton;
