import React, { forwardRef } from "react";
import Clickable from "./Clickable";
import { type VibeComponentProps } from "../../types";
import { type ClickableProps } from "./Clickable";

export interface ClickableWrapperProps extends VibeComponentProps {
  /**
   * The content inside the wrapper.
   */
  children: React.ReactNode;
  /**
   * If true, wraps the content in a `Clickable` component.
   */
  isClickable: boolean;
  /**
   * Props passed to the `Clickable` component.
   */
  clickableProps: ClickableProps;
}

const ClickableWrapper = forwardRef(
  (
    { children, isClickable = true, clickableProps = {} }: ClickableWrapperProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    if (!isClickable) {
      return <>{children}</>;
    }

    return (
      <Clickable {...clickableProps} ref={ref}>
        {children}
      </Clickable>
    );
  }
);

export default ClickableWrapper;
