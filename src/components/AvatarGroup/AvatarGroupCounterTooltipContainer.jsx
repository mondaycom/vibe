import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounterTooltip from "components/AvatarGroup/AvatarGroupCounterTooltip";
import PropTypes from "prop-types";
import { AVATAR_TYPES } from "components/Avatar/AvatarConstants";

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
    // TODO disable hide on timer in Tooltip
    <Tooltip content={counterTooltipComponent} hideDelay={10000000}>
      {children}
    </Tooltip>
  );
};

AvatarGroupCounterTooltipContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([AVATAR_TYPES.TEXT, AVATAR_TYPES.ICON, AVATAR_TYPES.IMG]),
  max: PropTypes.number,
  children: PropTypes.element,
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
