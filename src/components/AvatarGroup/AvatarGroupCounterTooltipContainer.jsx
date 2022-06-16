import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList
}) => {
  const tooltipContent = useMemo(
    () =>
      counterTooltipCustomProps?.content || (
        <AvatarGroupCounterTooltipContent
          avatars={avatars}
          type={type}
          className={className}
          isVirtualizedList={counterTooltipIsVirtualizedList}
        />
      ),
    [avatars, className, counterTooltipCustomProps?.content, counterTooltipIsVirtualizedList, type]
  );

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
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
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipIsVirtualizedList: PropTypes.bool
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false
};

export default AvatarGroupCounterTooltipContainer;
