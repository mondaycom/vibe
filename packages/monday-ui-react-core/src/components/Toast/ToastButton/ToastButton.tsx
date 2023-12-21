import Button, { ButtonProps } from "../../Button/Button";
import React, { FC } from "react";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export type ToastButtonProps = ButtonProps;

const ToastButton: FC<ToastButtonProps> = ({ className, id, "data-testid": dataTestId, ...buttonProps }) => {
  const overrideButtonProps = {
    ...Button.defaultProps,
    kind: Button.kinds.SECONDARY,
    marginLeft: false,
    ...buttonProps
  };

  return (
    <Button
      {...overrideButtonProps}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST_BUTTON, id)}
      className={className}
      size={Button.sizes.SMALL}
      color={Button.colors.FIXED_LIGHT}
    />
  );
};

export default ToastButton;
