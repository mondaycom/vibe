import React, { forwardRef } from "react";
import Clickable from "./Clickable";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";

interface ClickableWrapperProps extends VibeComponentProps {
  children: React.ReactNode;
  isClickable: boolean;
  clickableProps: VibeComponentProps;
}

const ClickableWrapper: VibeComponent<ClickableWrapperProps, HTMLElement> = forwardRef(
  ({ children, isClickable = true, clickableProps = {} }, ref) => {
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
