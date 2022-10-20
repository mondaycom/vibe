import React from "react";
import isNil from "lodash/isNil";
import Button, { ButtonProps } from "../Button/Button";
import { DialogPosition, HideShowEvent } from "../../constants";
import Tooltip from "../Tooltip/Tooltip";
import VibeComponentProps from "../../types/VibeComponentProps";

interface ButtonWrapperProps extends VibeComponentProps {
  tooltipContent?: string;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  tooltipPosition?: typeof DialogPosition[keyof typeof DialogPosition];
  tooltipHideDelay?: number;
  tooltipShowDelay?: number;
  tooltipContainerSelector?: string;
  tooltipMoveBy?: { main?: number; secondary?: number };
}

export const ButtonWrapper = ({
  tooltipContent,
  tooltipPosition,
  tooltipHideDelay,
  tooltipShowDelay,
  tooltipContainerSelector,
  tooltipMoveBy,
  ...otherProps
}: ButtonWrapperProps & ButtonProps) => {
  let button = <Button {...otherProps} />;
  if (!isNil(tooltipContent)) {
    button = (
      <Tooltip
        moveBy={tooltipMoveBy}
        position={tooltipPosition}
        hideDelay={tooltipHideDelay}
        showDelay={tooltipShowDelay}
        content={tooltipContent}
        showTrigger={[HideShowEvent.MOUSE_ENTER]}
        hideTrigger={[HideShowEvent.MOUSE_LEAVE]}
        containerSelector={tooltipContainerSelector}
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};
