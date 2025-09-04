import React from "react";
import { isNil } from "es-toolkit/compat";
import { Button, type ButtonProps } from "@vibe/button";
import Tooltip from "../Tooltip/Tooltip";
import { type MoveBy } from "../../types/MoveBy";
import { type TooltipPositions } from "../Tooltip/Tooltip.types";
import styles from "./ButtonGroup.module.scss";

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
  /**
   * If true, makes the button take the full width of its container.
   */
  fullWidth?: boolean;
}

export const ButtonWrapper = ({
  tooltipContent,
  tooltipPosition,
  tooltipHideDelay,
  tooltipShowDelay,
  tooltipContainerSelector,
  tooltipMoveBy,
  fullWidth,
  className,
  ...otherProps
}: ButtonWrapperProps) => {
  const button = <Button {...otherProps} className={className} />;

  if (!isNil(tooltipContent)) {
    return (
      <Tooltip
        moveBy={tooltipMoveBy}
        position={tooltipPosition}
        hideDelay={tooltipHideDelay}
        showDelay={tooltipShowDelay}
        content={tooltipContent}
        showTrigger={["mouseenter"]}
        hideTrigger={["mouseleave"]}
        containerSelector={tooltipContainerSelector}
        referenceWrapperClassName={fullWidth ? styles.fullWidth : undefined}
      >
        {button}
      </Tooltip>
    );
  }

  // Always wrap in a div when fullWidth to ensure consistent structure
  if (fullWidth) {
    return <div className={styles.fullWidth}>{button}</div>;
  }

  return button;
};
