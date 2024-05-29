import React from "react";
import cn from "classnames";
import Toast from "../Toast";
import "./Toast.stories.scss";

const ToastLineWrapper = ({ text, actions, className, type, hideIcon, closeable }) => {
  return (
    <Toast
      className={cn("monday-storybook-toast_toast-line-wrapper", className)}
      open
      actions={actions}
      type={type}
      hideIcon={hideIcon}
      closeable={closeable}
    >
      {text}
    </Toast>
  );
};

export default ToastLineWrapper;
