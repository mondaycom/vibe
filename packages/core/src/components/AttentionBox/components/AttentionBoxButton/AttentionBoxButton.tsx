import React, { forwardRef } from "react";
import Button, { ButtonProps } from "../../../Button/Button";

export interface AttentionBoxButtonProps extends Omit<ButtonProps, "size" | "kind" | "color" | "children"> {
  text: string;
}

const AttentionBoxButton = forwardRef<HTMLButtonElement, AttentionBoxButtonProps>(({ text, ...buttonProps }, ref) => (
  <Button ref={ref} size="small" kind="secondary" color="inverted" {...buttonProps}>
    {text}
  </Button>
));

export default AttentionBoxButton;
