import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({ children, avatars, type, className, counterTooltipCustomProps }) => {
  const tooltipContent = useMemo(() => {
    if (counterTooltipCustomProps) {
      return counterTooltipCustomProps.content;
    }

    return <AvatarGroupCounterTooltipContent avatars={avatars} type={type} className={className} />;
  }, [avatars, className, counterTooltipCustomProps, type]);

  if (!avatars?.length && !counterTooltipCustomProps) {
    return children;
  }

  return (
    <Tooltip
      showOnDialogEnter
      hideDelay={200}
      showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
      hideTrigger={[Dialog.hideShowTriggers.TAB_KEY, Dialog.hideShowTriggers.MOUSE_LEAVE]}
      {...(counterTooltipCustomProps || {})}
      content={tooltipContent}
    >
      {children}
    </Tooltip>
  );
};

AvatarGroupCounterTooltipContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Counter element
   */
  children: PropTypes.element,
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes)
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined
};

export default AvatarGroupCounterTooltipContainer;
