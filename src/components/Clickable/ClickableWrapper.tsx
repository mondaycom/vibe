import React, { forwardRef, ReactElement } from "react";
import Clickable, { ClickableProps } from "./Clickable";
import VibeComponent from "../../types/VibeComponent";

export interface ClickableWrapperProps {
  children: ReactElement;
  isClickable?: boolean;
  clickableProps?: ClickableProps;
}

const ClickableWrapper: VibeComponent<ClickableWrapperProps, HTMLElement> = forwardRef(
  ({ children, isClickable, clickableProps }, ref) => {
    if (!isClickable) {
      return children;
    }

    return (
      <Clickable {...clickableProps} ref={ref}>
        {children}
      </Clickable>
    );
  }
);

export default ClickableWrapper;
