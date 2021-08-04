import React from "react";
import isNil from "lodash/isNil";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";
import { HIDE_SHOW_EVENTS } from "../Dialog/consts/dialog-show-hide-event";

export const ButtonWrapper = ({
  tooltipContent,
  tooltipPosition,
  tooltipHideDelay,
  tooltipShowDelay,
  tooltipContainerSelector,
  tooltipMovedBy,
  ...otherProps
}) => {
  let button = <Button {...otherProps} />;
  if (!isNil(tooltipContent)) {
    button = (
      <Tooltip
        moveBy={tooltipMovedBy}
        position={tooltipPosition}
        hideDelay={tooltipHideDelay}
        showDelay={tooltipShowDelay}
        content={tooltipContent}
        showTrigger={[HIDE_SHOW_EVENTS.MOUSE_ENTER]}
        hideTrigger={[HIDE_SHOW_EVENTS.MOUSE_LEAVE]}
        containerSelector={tooltipContainerSelector}
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};
