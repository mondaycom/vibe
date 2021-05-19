import React from "react";
import isNil from "lodash/isNil";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";

export const ButtonWrapper = ({
  tooltipContent,
  tooltipPosition,
  tooltipHideDelay,
  tooltipShowDelay,
  tooltipContainerSelector,
  tooltipMovedBy,
  ...otherProps
}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  let button = <Button {...otherProps} />;
  if (!isNil(tooltipContent)) {
    button = (
      <Tooltip
        moveBy={tooltipMovedBy}
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
