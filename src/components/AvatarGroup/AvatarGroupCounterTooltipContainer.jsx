import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounterTooltip from "../AvatarGroup/AvatarGroupCounterTooltip";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";
import { Dialog } from "components";

const AvatarGroupCounterTooltipContainer = ({ children, avatars, counterTooltipProps, max, type, className }) => {
  const counterTooltipComponent = useMemo(() => {
    return AvatarGroupCounterTooltip({ children: avatars, max, type, className });
  }, [avatars, className, max, type]);

  if (!counterTooltipComponent && !counterTooltipProps) {
    return <>{children}</>;
  }

  if (counterTooltipProps) {
    return <Tooltip {...counterTooltipProps}>{children}</Tooltip>;
  }

  return (
    <Tooltip
      content={counterTooltipComponent}
      showTrigger={Dialog.hideShowTriggers.MOUSE_ENTER}
      hideTrigger={Dialog.hideShowTriggers.CLICK_OUTSIDE}
    >
      {children}
    </Tooltip>
  );
};

AvatarGroupCounterTooltipContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  max: PropTypes.number,
  /**
   * Counter element
   */
  children: PropTypes.element,
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes })
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  max: undefined,
  children: [],
  avatars: [],
  counterTooltipProps: undefined
};

export default AvatarGroupCounterTooltipContainer;
