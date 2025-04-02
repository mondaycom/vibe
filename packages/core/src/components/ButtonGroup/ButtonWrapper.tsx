import React from "react";
import { isNil } from "lodash-es";
import Button, { ButtonProps } from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";
import { MoveBy } from "../../types/MoveBy";
import { TooltipPositions } from "../Tooltip/Tooltip.types";

export interface ButtonWrapperProps extends ButtonProps {
  /**
   * The content of the tooltip.
   */
  tooltipContent?: string;
  /**
   * The position of the tooltip relative to the button.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * The delay in milliseconds before the tooltip hides.
   */
  tooltipHideDelay?: number;
  /**
   * The delay in milliseconds before the tooltip shows.
   */
  tooltipShowDelay?: number;
  /**
   * CSS selector for the tooltip container.
   */
  tooltipContainerSelector?: string;
  /**
   * Adjusts the tooltip position.
   */
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
        showTrigger={["mouseenter"]}
        hideTrigger={["mouseleave"]}
        containerSelector={tooltipContainerSelector}
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};
