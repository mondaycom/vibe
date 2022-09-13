import React, { forwardRef, JSXElementConstructor, ReactElement } from "react";
import Clickable, { ClickableProps } from "./Clickable";
import VibeComponent from "../../types/VibeComponent";

export interface ClickableWrapperProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
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
