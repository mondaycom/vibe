import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounterTooltip from "../AvatarGroup/AvatarGroupCounterTooltip";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  counterTooltipProps,
  max,
  type,
  className,
  counterTooltipIsVirtualizedList
}) => {
  const counterTooltipComponent = useMemo(() => {
    return AvatarGroupCounterTooltip({
      children: avatars,
      max,
      type,
      className,
      isVirtualizedList: counterTooltipIsVirtualizedList
    });
  }, [avatars, className, max, counterTooltipIsVirtualizedList, type]);

  if (!counterTooltipComponent && !counterTooltipProps) {
    return <>{children}</>;
  }

  if (counterTooltipProps) {
    return (
      <Tooltip {...counterTooltipProps} showOnDialogEnter hideDelay={200} /*theme="white"*/>
        {children}
      </Tooltip>
    );
  }

  return (
    // TODO change to white theme?
    <Tooltip content={counterTooltipComponent} showOnDialogEnter hideDelay={200} /*theme="white"*/>
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
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterTooltipIsVirtualizedList: PropTypes.bool
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  max: undefined,
  children: [],
  avatars: [],
  counterTooltipProps: undefined,
  counterTooltipIsVirtualizedList: false
};

export default AvatarGroupCounterTooltipContainer;
