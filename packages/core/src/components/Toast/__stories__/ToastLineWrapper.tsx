import React from "react";
import cn from "classnames";
import Toast, { ToastProps } from "../Toast";
import "./Toast.stories.scss";
import { ToastAction, ToastType } from "../Toast.types";

const ToastLineWrapper = ({ children, actions, className, type, hideIcon, closeable }: ToastProps) => {
  return (
    <Toast
      className={cn("monday-storybook-toast_toast-line-wrapper", className)}
      open
      actions={actions}
      type={type}
      hideIcon={hideIcon}
      closeable={closeable}
    >
      {children}
    </Toast>
  );
};

export default ToastLineWrapper;
