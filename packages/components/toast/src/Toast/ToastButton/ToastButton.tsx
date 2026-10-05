import { Button, type ButtonProps } from "@vibe/button";
import React, { type FC } from "react";
import { ComponentDefaultTestId, getTestId } from "@vibe/shared";

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
