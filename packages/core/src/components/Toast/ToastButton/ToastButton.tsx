import Button, { ButtonProps } from "../../Button/Button";
import React, { FC } from "react";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export type ToastButtonProps = ButtonProps;

const ToastButton: FC<ToastButtonProps> = ({
  className,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}: ToastButtonProps) => {
  return (
    <Button
      {...buttonProps}
      id={id}
      kind="secondary"
      marginLeft={false}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST_BUTTON, id)}
      className={className}
      size="small"
      color="fixed-light"
    />
  );
};

export default ToastButton;
