import React, { forwardRef } from "react";
import Clickable from "./Clickable";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { ClickableProps } from "../Clickable/Clickable";

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

const ClickableWrapper: VibeComponent<ClickableWrapperProps, HTMLElement> = forwardRef(
  ({ children, isClickable = true, clickableProps = {} }: ClickableWrapperProps, ref) => {
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
