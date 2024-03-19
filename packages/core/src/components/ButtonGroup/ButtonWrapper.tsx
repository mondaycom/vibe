import React from "react";
import { isNil } from "lodash-es";
import Button, { ButtonProps } from "../Button/Button";
import { HideShowEvent } from "../../constants";
import Tooltip from "../Tooltip/Tooltip";
import { MoveBy } from "../../types/MoveBy";
import { DialogPosition } from "../../constants/positions";

export interface ButtonWrapperProps extends ButtonProps {
  tooltipContent?: string;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  tooltipPosition?: DialogPosition;
  tooltipHideDelay?: number;
  tooltipShowDelay?: number;
  tooltipContainerSelector?: string;
  tooltipMoveBy?: MoveBy;
}

export const ButtonWrapper = ({
  tooltipContent,
  tooltipPosition,
  tooltipHideDelay,
  tooltipShowDelay,
  tooltipContainerSelector,
  tooltipMoveBy,
  ...otherProps
}: ButtonWrapperProps) => {
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
