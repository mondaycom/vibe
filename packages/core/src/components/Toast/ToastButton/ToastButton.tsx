import { Button, type ButtonProps } from "@vibe/button";
import React, { type FC } from "react";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export type ToastButtonProps = ButtonProps;

const ToastButton: FC<ToastButtonProps> = ({
  className,
  id,
  "data-testid": dataTestId,
  color = "primary",
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
      size="xs"
      color={color}
    />
  );
};

export default ToastButton;
