import Button, { ButtonProps } from "../../Button/Button";
import React, { FC } from "react";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import { ButtonType } from "../../Button";

export type ToastButtonProps = ButtonProps;

const ToastButton: FC<ToastButtonProps> = ({
  className,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}: ToastButtonProps) => {
  const overrideButtonProps = {
    ...Button.defaultProps,
    kind: "secondary" as ButtonType,
    marginLeft: false,
    ...buttonProps
  };

  return (
    <Button
      {...overrideButtonProps}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST_BUTTON, id)}
      className={className}
      size="small"
      color="fixed-light"
    />
  );
};

export default ToastButton;
