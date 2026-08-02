import React, { type ButtonHTMLAttributes, type FC } from "react";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export type ToastButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ToastButton: FC<ToastButtonProps> = ({
  className,
  id,
  children,
  "data-testid": dataTestId,
  type = "button",
  ...buttonProps
}: ToastButtonProps) => {
  return (
    <button
      {...buttonProps}
      id={id}
      type={type}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST_BUTTON, id)}
      className={className}
    >
      {children}
    </button>
  );
};

export default ToastButton;
